import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import NodeGraph from "./ui/NodeGraph";
import TerminalBoot from "./ui/TerminalBoot";
import { profile } from "../data/portfolioData";

function Avatar() {
  if (profile.photoUrl) {
    return (
      <img
        src={profile.photoUrl}
        alt={profile.name}
        className="h-28 w-28 rounded-2xl object-cover shadow-glass sm:h-32 sm:w-32"
      />
    );
  }
  return (
    <div
  className="flex h-28 w-28 items-center justify-center rounded-2xl border border-ink-line bg-gradient-to-br from-signal/15 to-synapse/15 sm:h-32 sm:w-32"
>
  <span className="font-display text-5xl font-light text-paper">
    a<span className="text-synapse">.</span>
  </span>
</div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <NodeGraph className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/40 to-ink-950" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-4"
            >
              <Avatar />
              <div className="flex flex-wrap gap-2">
                {profile.roleTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-ink-line bg-ink-900/60 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-paper-dim"
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
              transition={{ duration: 0.65, delay: 0.2 }}
              className="mt-5 max-w-xl text-lg leading-relaxed text-paper-dim"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink-950 transition-transform hover:scale-[1.03]"
              >
                View Projects
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-white/25"
              >
                <FiDownload className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-paper-dim transition-colors hover:text-paper"
              >
                <FiMail className="h-4 w-4" />
                Contact Me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="flex justify-center lg:justify-end"
          >
            <TerminalBoot />
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 hidden items-center gap-2 font-mono text-xs uppercase tracking-widest text-paper-faint sm:flex"
        >
          <FiArrowDown className="h-3.5 w-3.5 animate-float" />
          scroll
        </motion.a>
      </div>
    </section>
  );
}
