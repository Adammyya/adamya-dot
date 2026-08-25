import { FiGithub, FiExternalLink } from "react-icons/fi";
import Section from "./ui/Section";
import GlassCard from "./ui/GlassCard";
import Tag from "./ui/Tag";
import MetadataRow from "./ui/MetadataRow";
import ArchitectureDiagram from "./ui/ArchitectureDiagram";
import { archiveProjects, earlierWork } from "../data/portfolioData";

function CaseFile({ project, index }) {
  return (
    <GlassCard
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      className="flex flex-col p-6 sm:p-7"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-paper-faint">
            File No. {project.fileNo}
          </span>
          <h3 className="mt-1 font-display text-2xl font-semibold text-paper">{project.title}</h3>
          <p className="mt-0.5 text-sm text-paper-faint">{project.subtitle}</p>
        </div>
        <Tag track={project.track}>{project.category}</Tag>
      </div>

      <div className="mt-4 space-y-0">
        <MetadataRow label="Year" value={project.year} />
        <MetadataRow label="Status" value={project.status} />
      </div>

      <p className="mt-4 text-sm leading-relaxed text-paper-dim">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.features.map((f) => (
          <li
            key={f}
            className="rounded-md border border-ink-line bg-ink-900/40 px-2 py-1 text-[11px] text-paper-dim"
          >
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-ink-line pt-5">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-paper-faint">
          Architecture
        </p>
        <ArchitectureDiagram steps={project.architecture} track={project.track} />
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-ink-line pt-4">
        <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-paper-faint">
          {project.stack.map((s, i) => (
            <span key={s}>
              {s}
              {i < project.stack.length - 1 && <span className="ml-3 text-ink-line">/</span>}
            </span>
          ))}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} repository`}
          className="flex items-center gap-1.5 text-sm text-paper-dim transition-colors hover:text-signal"
        >
          <FiGithub className="h-4 w-4" /> Repository
          <FiExternalLink className="h-3 w-3" />
        </a>
      </div>
    </GlassCard>
  );
}

function EarlierWorkCard({ project }) {
  return (
    <GlassCard className="flex flex-col p-5">
      <h4 className="font-display text-base font-semibold text-paper">{project.title}</h4>
      <p className="text-xs text-paper-faint">{project.subtitle}</p>
      <p className="mt-2 text-sm leading-relaxed text-paper-dim">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] text-paper-faint">
        {project.stack.join(" / ")}
      </div>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title} repository`}
        className="mt-3 flex items-center gap-1.5 text-xs text-paper-dim transition-colors hover:text-signal"
      >
        <FiGithub className="h-3.5 w-3.5" /> Repository
      </a>
    </GlassCard>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="02 / Work"
      title="Engineering Archive"
      subtitle="Four active systems spanning AI applications, distributed backend architecture, JVM internals research, and agentic environments — each verified against its own repository."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {archiveProjects.map((project, i) => (
          <CaseFile key={project.id} project={project} index={i} />
        ))}
      </div>

      <div className="mt-16 border-t border-ink-line pt-10">
        <h3 className="font-mono text-xs uppercase tracking-widest text-paper-faint">
          Earlier Work
        </h3>
        <p className="mt-2 max-w-2xl text-sm text-paper-dim">
          Prior full-stack and game-dev projects, kept for context rather than deleted.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {earlierWork.map((project) => (
            <EarlierWorkCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
