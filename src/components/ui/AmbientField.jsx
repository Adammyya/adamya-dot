// Slow, ambient drifting gradient — the "living system" atmosphere behind
// the hero. Pure CSS animation (no JS loop), kept subtle and low-opacity so
// it reads as a research lab visualizing a live process, not a neon glow.
export default function AmbientField({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="ambient-blob ambient-blob--a" />
      <div className="ambient-blob ambient-blob--b" />
      <div className="ambient-blob ambient-blob--c" />
    </div>
  );
}
