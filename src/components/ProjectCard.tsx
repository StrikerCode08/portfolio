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
    <div className="group flex h-full flex-col gap-4 rounded-md border border-white/10 bg-transparent p-5 transition duration-300 hover:border-white/30">
      <div className="flex items-center justify-between gap-4 font-mono text-xs lowercase text-ink-300">
        <span>{category}</span>
        <span className="text-ink-300 transition group-hover:text-ink-50">Case study</span>
      </div>
      <h3 className="text-xl font-semibold text-ink-50">{title}</h3>
      <p className="text-sm leading-6 text-ink-200">{summary}</p>
      <ul className="mt-auto space-y-2 text-xs text-ink-300">
        {highlights.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-ink-400">-</span>
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
