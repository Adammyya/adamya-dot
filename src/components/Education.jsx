import { motion } from "framer-motion";
import Section from "./ui/Section";
import GlassCard from "./ui/GlassCard";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <Section id="education" eyebrow="Record" title="Foundations." track="synapse">
      <div className="relative space-y-8 border-l border-ink-line pl-8">
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full border-2 border-ink-950 bg-synapse" />
          <GlassCard className="p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-lg font-semibold text-paper">{education.degree}</h3>
              <span className="font-mono text-xs text-paper-faint">{education.duration}</span>
            </div>
            <p className="mt-1 text-sm text-synapse">{education.field}</p>
            <p className="mt-1 text-sm text-paper-faint">{education.institution}</p>

            <p className="mt-5 font-mono text-xs uppercase tracking-widest text-paper-faint">
              Relevant coursework
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <span
                  key={course}
                  className="rounded-full border border-ink-line bg-white/[0.03] px-3 py-1.5 text-xs text-paper-dim"
                >
                  {course}
                </span>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  );
}
