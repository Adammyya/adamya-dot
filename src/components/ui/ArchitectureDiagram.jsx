// Renders a vertical pipeline of labeled stages as bordered boxes connected
// by a hairline + arrow — the "blueprint" architecture diagrams called for
// in the brief, built as real markup rather than ASCII text in a <pre>.
export default function ArchitectureDiagram({ steps = [], track = "signal" }) {
  const accent = track === "synapse" ? "text-synapse" : "text-signal";
  const accentBorder = track === "synapse" ? "border-synapse/40" : "border-signal/40";

  return (
    <div className="flex flex-col items-stretch" aria-label="System architecture">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-center">
          <div
            className={`w-full rounded-md border ${accentBorder} bg-ink-900/60 px-4 py-2.5 text-center font-mono text-[11px] uppercase tracking-wide text-paper-dim`}
          >
            {step}
          </div>
          {i < steps.length - 1 && (
            <div className="flex flex-col items-center py-1">
              <div className={`h-4 w-px bg-current ${accent} opacity-50`} />
              <span className={`-mt-1 text-[10px] leading-none ${accent} opacity-70`}>▼</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
