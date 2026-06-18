const styles = {
  signal: "bg-signal/10 text-signal border-signal/30",
  synapse: "bg-synapse/10 text-synapse border-synapse/30",
  ember: "bg-ember/10 text-ember border-ember/30",
};

export default function Tag({ track = "signal", children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide ${styles[track]} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}
