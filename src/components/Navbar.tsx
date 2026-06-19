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
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#111111]/95">
      <div className="container-pad flex h-14 items-center justify-between">
        <Link to="/" className="font-mono text-sm font-semibold lowercase text-ink-100">
          developer
        </Link>
        <nav className="hidden items-center gap-5 font-mono text-sm lowercase text-ink-300 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `transition ${isActive ? 'text-ink-50' : 'hover:text-ink-50'}`
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
            className="font-mono text-sm lowercase text-ink-300 transition hover:text-ink-50"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
