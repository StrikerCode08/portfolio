import { Link } from 'react-router-dom';

type BlogCardProps = {
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  slug: string;
};

export default function BlogCard({ title, excerpt, date, readingTime, slug }: BlogCardProps) {
  return (
    <Link to={`/blog/${slug}`} className="glass block rounded-2xl p-6 transition hover:-translate-y-1 hover:border-glow-400">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-ink-300">
        <span>{date}</span>
        <span className="text-glow-400">{readingTime}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-ink-50">{title}</h3>
      <p className="mt-3 text-sm text-ink-200">{excerpt}</p>
    </Link>
  );
}
