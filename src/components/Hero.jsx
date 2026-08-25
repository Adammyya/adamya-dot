import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiArrowRight } from "react-icons/fi";
import MetadataRow from "./ui/MetadataRow";
import AmbientField from "./ui/AmbientField";
import NodeGraph from "./ui/NodeGraph";
import { profile, archiveProjects } from "../data/portfolioData";

function DossierPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.25 }}
      className="glass w-full max-w-md rounded-md p-5 shadow-glass"
    >
      <div className="mb-3 flex items-center justify-between border-b border-ink-line pb-3">
        <span className="font-mono text-[11px] uppercase tracking-widest text-paper-faint">
          System Dossier / {profile.fileNo}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-widest text-signal">
          {profile.status}
        </span>
      </div>

      <MetadataRow label="Field" value={profile.field} />
      <MetadataRow label="Current System" value={archiveProjects[0].title} />
      <MetadataRow
        label="Active Systems"
        value={archiveProjects.map((p) => p.title).join(", ")}
      />
      <MetadataRow label="Disciplines" value={profile.disciplines.join(" / ")} />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40">
      <AmbientField />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
        <NodeGraph className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-paper-faint"
            >
              <span>File No. {profile.fileNo}</span>
              <span className="text-ink-line">•</span>
              <span>{profile.location}</span>
              <span className="text-ink-line">•</span>
              <span>Field: {profile.field}</span>
              <span className="text-ink-line">•</span>
              <span className="text-signal">Status: {profile.status}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-display text-4xl font-semibold leading-[1.08] text-paper text-balance sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="mt-3 font-mono text-sm uppercase tracking-widest text-paper-dim"
            >
              AI / Intelligent Systems / Software
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.26 }}
              className="mt-5 max-w-xl text-lg leading-relaxed text-paper-dim"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.34 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-sm bg-paper px-5 py-2.5 text-sm font-medium text-ink-950 transition-transform hover:scale-[1.02]"
              >
                View Work <FiArrowRight className="h-4 w-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-2 rounded-sm px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-signal/40"
              >
                <FiGithub className="h-4 w-4" /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-2 rounded-sm px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-signal/40"
              >
                <FiLinkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="flex items-center gap-2 rounded-sm px-5 py-2.5 text-sm font-medium text-paper-dim transition-colors hover:text-paper"
              >
                <FiDownload className="h-4 w-4" /> Resume
              </a>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <DossierPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
