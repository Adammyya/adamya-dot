import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiStar, FiGitBranch, FiUsers } from "react-icons/fi";
import Section from "./ui/Section";
import GlassCard from "./ui/GlassCard";
import { useGithubStats } from "../hooks/useGithubStats";
import { profile } from "../data/portfolioData";

function StatBlock({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-signal">
        {icon}
      </div>
      <div>
        <p className="font-display text-xl font-semibold text-paper">{value}</p>
        <p className="font-mono text-[11px] uppercase tracking-wide text-paper-faint">{label}</p>
      </div>
    </div>
  );
}

export default function GithubStats() {
  const { status, profile: ghProfile, repos, topLanguages } = useGithubStats(
    profile.githubUsername
  );
  const [chartFailed, setChartFailed] = useState(false);

  return (
    <Section
      id="github"
      eyebrow="GitHub"
      title="Live from GitHub."
      subtitle="Pulled directly from the public GitHub API — no manual updating required."
    >
      <GlassCard className="p-6 sm:p-8">
        {status === "loading" && (
          <p className="font-mono text-sm text-paper-faint">Fetching live stats…</p>
        )}

        {status === "error" && (
          <p className="text-sm text-paper-dim">
            Couldn't reach the GitHub API right now (likely a rate limit). View the profile
            directly:{" "}
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-signal underline">
              {profile.github.replace("https://", "")}
            </a>
          </p>
        )}

        {status === "success" && (
          <>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              <StatBlock
                icon={<FiGitBranch className="h-5 w-5" />}
                label="Public Repos"
                value={ghProfile?.public_repos ?? "—"}
              />
              <StatBlock
                icon={<FiUsers className="h-5 w-5" />}
                label="Followers"
                value={ghProfile?.followers ?? "—"}
              />
              <StatBlock
                icon={<FiStar className="h-5 w-5" />}
                label="Repos Tracked"
                value={repos?.length ?? "—"}
              />
              <StatBlock
                icon={<FiGithub className="h-5 w-5" />}
                label="Following"
                value={ghProfile?.following ?? "—"}
              />
            </div>

            {topLanguages.length > 0 && (
              <div className="mt-8 border-t border-ink-line pt-6">
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-paper-faint">
                  Top languages by repo count
                </p>
                <div className="space-y-3">
                  {topLanguages.map((lang) => {
                    const max = topLanguages[0].count;
                    const pct = Math.max(10, Math.round((lang.count / max) * 100));
                    return (
                      <div key={lang.name}>
                        <div className="mb-1 flex justify-between text-xs text-paper-dim">
                          <span>{lang.name}</span>
                          <span className="font-mono text-paper-faint">{lang.count}</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="h-full rounded-full bg-gradient-to-r from-signal to-synapse"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}

        {!chartFailed && (
          <div className="mt-8 border-t border-ink-line pt-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-paper-faint">
              Contribution activity
            </p>
            <div className="overflow-x-auto rounded-lg bg-white/[0.02] p-3">
              <img
                src={`https://ghchart.rshah.org/56E8C9/${profile.githubUsername}`}
                alt={`${profile.name}'s GitHub contribution graph`}
                className="min-w-[640px]"
                onError={() => setChartFailed(true)}
              />
            </div>
          </div>
        )}

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 text-sm text-paper-dim transition-colors hover:text-paper"
        >
          <FiGithub className="h-4 w-4" />
          View full profile on GitHub →
        </a>
      </GlassCard>
    </Section>
  );
}
