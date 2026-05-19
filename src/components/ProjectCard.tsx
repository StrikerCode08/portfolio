import { Link } from 'react-router-dom';

type ProjectCardProps = {
  title: string;
  summary: string;
  category: string;
  href?: string;
  highlights: string[];
};

export default function ProjectCard({ title, summary, category, href, highlights }: ProjectCardProps) {
  const content = (
    <div className="group flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-6 shadow-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-glow-400/80">
      <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-ink-300">
        <span>{category}</span>
        <span className="text-glow-400 transition group-hover:text-accent-400">Case study</span>
      </div>
      <h3 className="text-xl font-semibold text-ink-50">{title}</h3>
      <p className="text-sm leading-6 text-ink-200">{summary}</p>
      <ul className="mt-auto space-y-2 text-xs text-ink-300">
        {highlights.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-accent-400">▹</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  if (href) {
    return (
      <Link to={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
