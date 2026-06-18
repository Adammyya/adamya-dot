import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Section from "./ui/Section";
import GlassCard from "./ui/GlassCard";
import Tag from "./ui/Tag";
import { projects } from "../data/portfolioData";

function ProjectCard({ project, index }) {
  return (
    <GlassCard
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col p-6"
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
          project.track === "signal"
            ? "shadow-glow shadow-signal/30"
            : "shadow-glow shadow-synapse/30"
        }`}
      />
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-semibold text-paper">{project.title}</h3>
          <p className="mt-0.5 text-sm text-paper-faint">{project.subtitle}</p>
        </div>
        <Tag track={project.track}>{project.category}</Tag>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-paper-dim">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.features.map((f) => (
          <li
            key={f}
            className="rounded-md border border-ink-line bg-white/[0.03] px-2 py-1 text-[11px] text-paper-dim"
          >
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between border-t border-ink-line pt-4">
        <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-paper-faint">
          {project.stack.map((s, i) => (
            <span key={s}>
              {s}
              {i < project.stack.length - 1 && <span className="ml-3 text-ink-line">/</span>}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="text-paper-dim transition-colors hover:text-paper"
          >
            <FiGithub className="h-4 w-4" />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="text-paper-dim transition-colors hover:text-paper"
            >
              <FiExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built."
      subtitle="A mix of AI experiments and backend systems — each one built to actually run, not just demo well."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
