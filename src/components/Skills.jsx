import { motion } from "framer-motion";
import Section from "./ui/Section";
import GlassCard from "./ui/GlassCard";
import { skillGroups, levelMeta } from "../data/portfolioData";

const trackBar = {
  signal: "bg-signal",
  synapse: "bg-synapse",
};

function SkillRow({ item, track }) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="text-sm text-paper">{item.name}</span>
        <span className="font-mono text-[10px] uppercase tracking-wide text-paper-faint">
          {item.level}
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: levelMeta[item.level].width }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-full rounded-full ${trackBar[track]}`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="03 / Technical Inventory"
      title="Technical Inventory."
      subtitle="Systems & backend work in cyan, AI & ML work in violet — the colors below aren't decoration, they tell you which world each skill belongs to."
    >
      <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <GlassCard
            key={group.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className="p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-base font-semibold text-paper">{group.title}</h3>
              <span
                className={`h-2 w-2 rounded-full ${
                  group.track === "signal" ? "bg-signal" : "bg-synapse"
                }`}
              />
            </div>
            <div className="space-y-4">
              {group.items.map((item) => (
                <SkillRow key={item.name} item={item} track={group.track} />
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
