import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-xs text-paper-faint sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>A work in progress, just like the future.</span>
      </div>
    </footer>
  );
}
