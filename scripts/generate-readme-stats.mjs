import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const username = process.env.GITHUB_USERNAME || "AttentionCoo";
const statsRepoDir = process.env.GRS_DIR || ".cache/github-readme-stats";
const outputDir = process.env.OUTPUT_DIR || "generated";

process.env.PAT_1 ||= process.env.GITHUB_TOKEN || process.env.GH_TOKEN || "";
process.env.FETCH_MULTI_PAGE_STARS ||= "true";

const fromStatsRepo = (relativePath) =>
  pathToFileURL(path.resolve(statsRepoDir, relativePath)).href;

const [{ fetchStats }, { renderStatsCard }, { fetchTopLanguages }, {
  renderTopLanguages,
}, { calculateRank }] = await Promise.all([
  import(fromStatsRepo("src/fetchers/stats.js")),
  import(fromStatsRepo("src/cards/stats.js")),
  import(fromStatsRepo("src/fetchers/top-languages.js")),
  import(fromStatsRepo("src/cards/top-languages.js")),
  import(fromStatsRepo("src/calculateRank.js")),
]);

await mkdir(outputDir, { recursive: true });

const renderStats = (stats) => renderStatsCard(stats, {
  show_icons: true,
  theme: "transparent",
  locale: "en",
  show: ["reviews", "prs_merged", "prs_merged_percentage"],
  disable_animations: true,
});

const renderLanguages = (topLanguages) => renderTopLanguages(topLanguages, {
  layout: "compact",
  langs_count: 8,
  theme: "transparent",
  locale: "en",
  disable_animations: true,
});

const makeErrorSvg = (title, message, width = 450) => `
<svg width="${width}" height="150" viewBox="0 0 ${width} 150" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title}">
  <rect width="${width}" height="150" rx="4" fill="#ffffff" stroke="#fca5a5"/>
  <text x="24" y="42" fill="#991b1b" font-family="Segoe UI, Arial, sans-serif" font-size="18" font-weight="700">${title}</text>
  <text x="24" y="78" fill="#4b5563" font-family="Segoe UI, Arial, sans-serif" font-size="13">${message}</text>
</svg>
`.trim();

const githubFetch = async (urlOrPath) => {
  const url = urlOrPath.startsWith("http")
    ? urlOrPath
    : `https://api.github.com${urlOrPath}`;
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "AttentionCoo-readme-widget-generator",
  };

  if (process.env.PAT_1) {
    headers.Authorization = `Bearer ${process.env.PAT_1}`;
  }

  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} while fetching ${url}`);
  }
  return response.json();
};

const fetchAllRepos = async () => {
  const repos = [];
  for (let page = 1; page <= 10; page += 1) {
    const batch = await githubFetch(
      `/users/${username}/repos?type=owner&sort=updated&per_page=100&page=${page}`,
    );
    repos.push(...batch);
    if (batch.length < 100) break;
  }
  return repos;
};

const buildRestFallback = async () => {
  console.warn("Primary github-readme-stats fetch failed; using REST fallback.");

  const [user, repos, languageColorsRaw] = await Promise.all([
    githubFetch(`/users/${username}`),
    fetchAllRepos(),
    readFile(path.resolve(statsRepoDir, "src/common/languageColors.json"), "utf8"),
  ]);

  const languageColors = JSON.parse(languageColorsRaw);
  const ownerRepos = repos.filter((repo) => !repo.fork);
  const totalStars = ownerRepos.reduce(
    (sum, repo) => sum + Number(repo.stargazers_count || 0),
    0,
  );

  const languages = {};
  await Promise.all(ownerRepos.map(async (repo) => {
    const repoLanguages = await githubFetch(repo.languages_url);
    for (const [name, size] of Object.entries(repoLanguages)) {
      languages[name] ||= {
        name,
        color: languageColors[name]?.color || "#858585",
        size: 0,
        count: 0,
      };
      languages[name].size += Number(size);
      languages[name].count += 1;
    }
  }));

  const stats = {
    name: user.name || user.login,
    totalPRs: 0,
    totalPRsMerged: 0,
    mergedPRsPercentage: 0,
    totalReviews: 0,
    totalCommits: 0,
    totalIssues: 0,
    totalStars,
    totalDiscussionsStarted: 0,
    totalDiscussionsAnswered: 0,
    contributedTo: Number(user.public_repos || ownerRepos.length),
    rank: calculateRank({
      all_commits: false,
      commits: 0,
      prs: 0,
      reviews: 0,
      issues: 0,
      repos: Number(user.public_repos || ownerRepos.length),
      stars: totalStars,
      followers: Number(user.followers || 0),
    }),
  };

  return {
    statsSvg: renderStats(stats),
    topLanguagesSvg: renderLanguages(languages),
  };
};

let statsSvg;
let topLanguagesSvg;

try {
  const stats = await fetchStats(username, false, [], true, false, false);
  const topLanguages = await fetchTopLanguages(username, [], 1, 0);
  statsSvg = renderStats(stats);
  topLanguagesSvg = renderLanguages(topLanguages);
} catch (error) {
  console.warn(error instanceof Error ? error.message : String(error));
  try {
    ({ statsSvg, topLanguagesSvg } = await buildRestFallback());
  } catch (fallbackError) {
    const message = fallbackError instanceof Error
      ? fallbackError.message
      : String(fallbackError);
    console.warn(message);
    statsSvg = makeErrorSvg("Stats refresh failed", "Please check the README_WIDGET_TOKEN secret.");
    topLanguagesSvg = makeErrorSvg(
      "Languages refresh failed",
      "Please check the README_WIDGET_TOKEN secret.",
      300,
    );
  }
}

await Promise.all([
  writeFile(path.join(outputDir, "github-stats.svg"), statsSvg),
  writeFile(path.join(outputDir, "top-langs.svg"), topLanguagesSvg),
]);
