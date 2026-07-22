import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const username = process.env.GITHUB_USERNAME || "AttentionCoo";
const statsRepoDir = process.env.GRS_DIR || ".cache/github-readme-stats";
const outputDir = process.env.OUTPUT_DIR || "generated";

process.env.PAT_1 ||= process.env.GITHUB_TOKEN || process.env.GH_TOKEN || "";
process.env.FETCH_MULTI_PAGE_STARS ||= "true";

if (!process.env.PAT_1) {
  throw new Error("需要 GitHub token：请设置 PAT_1、GITHUB_TOKEN 或 GH_TOKEN。");
}

const fromStatsRepo = (relativePath) =>
  pathToFileURL(path.resolve(statsRepoDir, relativePath)).href;

const [{ fetchStats }, { renderStatsCard }, { fetchTopLanguages }, {
  renderTopLanguages,
}] = await Promise.all([
  import(fromStatsRepo("src/fetchers/stats.js")),
  import(fromStatsRepo("src/cards/stats.js")),
  import(fromStatsRepo("src/fetchers/top-languages.js")),
  import(fromStatsRepo("src/cards/top-languages.js")),
]);

await mkdir(outputDir, { recursive: true });

const stats = await fetchStats(username, false, [], true, false, false);
const statsSvg = renderStatsCard(stats, {
  show_icons: true,
  theme: "transparent",
  locale: "en",
  show: ["reviews", "prs_merged", "prs_merged_percentage"],
  disable_animations: true,
});

const topLanguages = await fetchTopLanguages(username, [], 1, 0);
const topLanguagesSvg = renderTopLanguages(topLanguages, {
  layout: "compact",
  langs_count: 8,
  theme: "transparent",
  locale: "en",
  disable_animations: true,
});

await Promise.all([
  writeFile(path.join(outputDir, "github-stats.svg"), statsSvg),
  writeFile(path.join(outputDir, "top-langs.svg"), topLanguagesSvg),
]);
