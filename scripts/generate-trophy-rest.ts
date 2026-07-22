type GitHubRepo = {
  created_at: string;
  fork: boolean;
  languages_url: string;
  stargazers_count: number;
};

type GitHubUser = {
  created_at: string;
  followers: number;
  login: string;
  public_repos: number;
};

const username = Deno.env.get("GITHUB_USERNAME") || "AttentionCoo";
const outputPath = Deno.env.get("OUTPUT_PATH") || "generated/trophy.svg";
const trophyRepoDir = Deno.env.get("TROPHY_REPO_DIR") ||
  ".cache/github-profile-trophy";
const token = Deno.env.get("PAT_1") || Deno.env.get("GITHUB_TOKEN") || "";

const toBaseUrl = (repoDir: string) => {
  const normalizedCwd = Deno.cwd().replace(/\\/g, "/");
  const normalizedRepo = repoDir.replace(/\\/g, "/");
  const absolutePath = normalizedRepo.startsWith("/") ||
      /^[A-Za-z]:\//.test(normalizedRepo)
    ? normalizedRepo
    : `${normalizedCwd}/${normalizedRepo}`;
  const withSlash = absolutePath.endsWith("/") ? absolutePath : `${absolutePath}/`;
  return /^[A-Za-z]:\//.test(withSlash) ? `file:///${withSlash}` : `file://${withSlash}`;
};

const fromTrophyRepo = (relativePath: string) =>
  new URL(relativePath, toBaseUrl(trophyRepoDir)).href;

const [{ Card }, { COLORS }, { UserInfo }] = await Promise.all([
  import(fromTrophyRepo("src/card.ts")),
  import(fromTrophyRepo("src/theme.ts")),
  import(fromTrophyRepo("src/user_info.ts")),
]);

async function githubFetch<T>(urlOrPath: string): Promise<T> {
  const url = urlOrPath.startsWith("http")
    ? urlOrPath
    : `https://api.github.com${urlOrPath}`;
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "AttentionCoo-trophy-generator",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} while fetching ${url}`);
  }
  return await response.json() as T;
}

async function fetchAllRepos(): Promise<GitHubRepo[]> {
  const repos: GitHubRepo[] = [];
  for (let page = 1; page <= 10; page += 1) {
    const batch = await githubFetch<GitHubRepo[]>(
      `/users/${username}/repos?type=owner&sort=updated&per_page=100&page=${page}`,
    );
    repos.push(...batch);
    if (batch.length < 100) break;
  }
  return repos;
}

const [user, repos] = await Promise.all([
  githubFetch<GitHubUser>(`/users/${username}`),
  fetchAllRepos(),
]);

const ownerRepos = repos.filter((repo) => !repo.fork);
const repoNodes = [];
for (const repo of ownerRepos) {
  const languages = await githubFetch<Record<string, number>>(repo.languages_url);
  repoNodes.push({
    createdAt: repo.created_at,
    stargazers: {
      totalCount: Number(repo.stargazers_count || 0),
    },
    languages: {
      nodes: Object.keys(languages).map((name) => ({ name })),
    },
  });
}

const combinedUser = {
  createdAt: user.created_at,
  contributionsCollection: {
    restrictedContributionsCount: 0,
    totalCommitContributions: 0,
    totalPullRequestReviewContributions: 0,
  },
  organizations: {
    totalCount: 0,
  },
  followers: {
    totalCount: Number(user.followers || 0),
  },
  openIssues: {
    totalCount: 0,
  },
  closedIssues: {
    totalCount: 0,
  },
  pullRequests: {
    totalCount: 0,
  },
  repositories: {
    totalCount: Number(user.public_repos || ownerRepos.length),
    nodes: repoNodes,
  },
};

const userInfo = UserInfo.fromCombined(combinedUser);
const card = new Card([], [], -1, 3, 110, 0, 0, false, false);
const svg = card.render(userInfo, COLORS.flat);

const outputDirectory = outputPath.includes("/")
  ? outputPath.replace(/\/[^/]+$/, "")
  : ".";
await Deno.mkdir(outputDirectory, { recursive: true });
await Deno.writeTextFile(outputPath, svg);
