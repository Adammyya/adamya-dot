export default function MetadataRow({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-dotted border-ink-line py-1.5 font-mono text-[11px]">
      <span className="uppercase tracking-widest text-paper-faint">{label}</span>
      <span className="text-right text-paper-dim">{value}</span>
    </div>
  );
}
