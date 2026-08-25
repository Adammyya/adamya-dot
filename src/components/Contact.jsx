import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiCopy, FiCheck } from "react-icons/fi";
import Section from "./ui/Section";
import GlassCard from "./ui/GlassCard";
import { profile } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard API unavailable — fail silently, mailto link still works
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="06 / Contact"
      title="Let's talk."
      subtitle="Open to internships, research collaborations, and good hackathon teams."
    >
      <GlassCard className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-ink-line bg-white/[0.03] px-4 py-2.5 text-sm text-paper transition-colors hover:border-signal/40 hover:text-signal"
          >
            <FiGithub className="h-4 w-4" /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-ink-line bg-white/[0.03] px-4 py-2.5 text-sm text-paper transition-colors hover:border-synapse/40 hover:text-synapse"
          >
            <FiLinkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-full border border-ink-line bg-white/[0.03] px-4 py-2.5 text-sm text-paper transition-colors hover:border-ember/40 hover:text-ember"
          >
            <FiMail className="h-4 w-4" /> Email
          </a>
        </div>

        <button
          onClick={copyEmail}
          className="flex items-center gap-2 self-start rounded-full bg-paper px-4 py-2.5 text-sm font-medium text-ink-950 transition-transform hover:scale-[1.03] sm:self-auto"
        >
          {copied ? <FiCheck className="h-4 w-4" /> : <FiCopy className="h-4 w-4" />}
          {copied ? "Copied" : profile.email}
        </button>
      </GlassCard>
    </Section>
  );
}
