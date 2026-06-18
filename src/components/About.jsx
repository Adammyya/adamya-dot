import { motion } from "framer-motion";
import Section from "./ui/Section";
import GlassCard from "./ui/GlassCard";
import { profile } from "../data/portfolioData";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Software first, AI by design.">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          {profile.about.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="leading-relaxed text-paper-dim"
            >
              {para}
            </motion.p>
          ))}
        </div>

        <GlassCard className="p-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-paper-faint">
            Currently focused on
          </h3>
          <ul className="mt-4 space-y-3">
            {profile.interests.map((interest) => (
              <li key={interest} className="flex items-center gap-3 text-paper">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-signal to-synapse" />
                {interest}
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-ink-line pt-5">
            <p className="font-mono text-xs uppercase tracking-widest text-paper-faint">
              Open to
            </p>
            <p className="mt-2 text-sm text-paper-dim">
              AI/Software internships, research roles, and hackathons.
            </p>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}
