import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const commands = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function CommandPalette() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return commands;
    return commands.filter((command) => command.label.toLowerCase().includes(trimmed));
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-6 pt-28">
      <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-ink-900/90 shadow-glow">
        <div className="border-b border-white/10 px-4 py-3">
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Type a command or search..."
            className="w-full bg-transparent text-sm text-ink-50 outline-none"
          />
        </div>
        <div className="max-h-64 overflow-y-auto p-2">
          {results.map((command) => (
            <button
              key={command.path}
              onClick={() => {
                navigate(command.path);
                setOpen(false);
              }}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm text-ink-200 transition hover:bg-white/5 hover:text-ink-50"
            >
              <span>{command.label}</span>
              <span className="text-xs uppercase tracking-[0.3em] text-ink-400">go</span>
            </button>
          ))}
          {results.length === 0 && <p className="px-4 py-6 text-sm text-ink-400">No results found.</p>}
        </div>
      </div>
    </div>
  );
}
