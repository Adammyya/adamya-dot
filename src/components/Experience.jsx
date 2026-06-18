import { motion } from "framer-motion";
import Section from "./ui/Section";
import GlassCard from "./ui/GlassCard";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked.">
      <div className="relative space-y-8 border-l border-ink-line pl-8">
        {experience.map((job, i) => (
          <motion.div
            key={job.org}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full border-2 border-ink-950 bg-signal" />
            <GlassCard className="p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-paper">{job.role}</h3>
                <span className="font-mono text-xs text-paper-faint">{job.duration}</span>
              </div>
              <p className="mt-1 text-sm text-signal">{job.org}</p>
              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-paper-dim">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-paper-faint" />
                    {point}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
