import { socials } from '../data/profile';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-12">
      <div className="container-pad flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-ink-200">Designed & built by Akash Bajpai.</p>
          <p className="text-xs text-ink-400">Modern systems. Human-first experiences.</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-ink-300">
          {socials.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-glow-400">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
