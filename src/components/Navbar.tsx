import { NavLink, Link } from 'react-router-dom';
import { profile } from '../data/profile';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-ink-900/85 backdrop-blur-xl">
      <div className="container-pad flex h-16 items-center justify-between">
        <Link to="/" className="text-sm font-semibold tracking-[0.2em] text-ink-100">
          {profile.name.split(' ')[0].toUpperCase()}<span className="text-glow-400">.</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-ink-200 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `transition ${isActive ? 'text-glow-400' : 'hover:text-ink-50'}`
              }
              end={item.href === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={profile.resume}
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink-100 transition hover:border-glow-400 hover:text-glow-400"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
