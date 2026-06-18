import { useEffect, useState } from "react";

// Fetches live public stats for a GitHub user: profile totals + top languages
// derived from their repositories. Uses the unauthenticated public API, so it
// is subject to GitHub's standard rate limits (60 req/hr per IP).
export function useGithubStats(username) {
  const [state, setState] = useState({
    status: "loading", // "loading" | "success" | "error"
    profile: null,
    repos: [],
    topLanguages: [],
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
        ]);

        if (!profileRes.ok || !reposRes.ok) {
          throw new Error("GitHub API request failed");
        }

        const profile = await profileRes.json();
        const repos = await reposRes.json();

        const langCounts = {};
        (Array.isArray(repos) ? repos : []).forEach((repo) => {
          if (repo.language) {
            langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
          }
        });

        const topLanguages = Object.entries(langCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 6)
          .map(([name, count]) => ({ name, count }));

        if (!cancelled) {
          setState({
            status: "success",
            profile,
            repos: Array.isArray(repos) ? repos : [],
            topLanguages,
          });
        }
      } catch (err) {
        if (!cancelled) {
          setState((prev) => ({ ...prev, status: "error" }));
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [username]);

  return state;
}
