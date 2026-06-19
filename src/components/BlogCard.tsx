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
    <Link to={`/blog/${slug}`} className="glass block rounded-md p-5 transition hover:border-white/30">
      <div className="flex items-center justify-between font-mono text-xs lowercase text-ink-300">
        <span>{date}</span>
        <span className="text-ink-300">{readingTime}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-ink-50">{title}</h3>
      <p className="mt-3 text-sm text-ink-200">{excerpt}</p>
    </Link>
  );
}
