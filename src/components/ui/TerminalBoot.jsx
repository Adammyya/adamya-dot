import { useBootSequence } from "../../hooks/useBootSequence";
import { bootLines } from "../../data/portfolioData";

export default function TerminalBoot() {
  const { renderedLines, activeText, finished } = useBootSequence(bootLines, {
    charSpeed: 18,
    linePause: 220,
    startDelay: 250,
  });

  return (
    <div
      className="glass w-full max-w-md rounded-xl px-4 py-3.5 font-mono text-[12.5px] leading-relaxed sm:text-[13px]"
      role="status"
      aria-label="System status"
    >
      <div className="mb-2 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 text-paper-faint">~/portfolio</span>
      </div>
      <div className="min-h-[112px]">
        {renderedLines.map((line, i) => (
          <div key={i} className="text-paper-dim">
            <span className="text-signal">$</span> {line}
          </div>
        ))}
        {!finished && (
          <div className="text-paper-dim">
            <span className="text-signal">$</span> {activeText}
            <span className="animate-blink">▌</span>
          </div>
        )}
        {finished && (
          <div className="mt-1 text-synapse">
            <span className="text-signal">$</span> ready
            <span className="animate-blink">▌</span>
          </div>
        )}
      </div>
    </div>
  );
}
