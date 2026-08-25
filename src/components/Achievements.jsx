import { FiAward, FiFileText, FiCpu, FiFlag } from "react-icons/fi";
import Section from "./ui/Section";
import GlassCard from "./ui/GlassCard";
import { achievements } from "../data/portfolioData";

const icons = {
  Internship: FiAward,
  Projects: FiCpu,
  Hackathons: FiFlag,
  Learning: FiFileText,
  Certifications: FiAward,
  Research: FiFileText,
  Competitions: FiFlag,
};

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Room to grow — and a place to show it."
      subtitle="Slots are ready for the moment you have something to put here."
      track="synapse"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item, i) => {
          const Icon = icons[item.type];
          return (
            <GlassCard
              key={item.type}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex flex-col items-start gap-3 p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-synapse">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-semibold text-paper">{item.type}</h3>
              <p className="text-sm text-paper-faint">{item.note}</p>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}
