import { motion } from "framer-motion";

const trackColor = {
  signal: "text-signal",
  synapse: "text-synapse",
};

export default function Section({ id, eyebrow, title, subtitle, track = "signal", children }) {
  return (
    <section id={id} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 sm:mb-16"
        >
          {eyebrow && (
            <span
              className={`font-mono text-xs tracking-[0.2em] uppercase ${trackColor[track]}`}
            >
              {eyebrow}
            </span>
          )}
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-paper text-balance">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-paper-dim leading-relaxed">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
