import { Helmet } from 'react-helmet-async';
import BlogCard from '../components/BlogCard';
import { posts } from '../lib/blog';

export default function Blog() {
  return (
    <div className="container-pad pb-20">
      <Helmet>
        <title>Blog · Akash Bajpai</title>
        <meta name="description" content="Engineering notes on performance, architecture, and delivery." />
      </Helmet>

      <section className="pb-12 pt-8">
        <p className="section-title">Blog</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink-50">Engineering notes and playbooks</h1>
        <p className="mt-4 max-w-2xl text-sm text-ink-200">
          Detailed breakdowns of the systems, patterns, and delivery practices that keep modern platforms reliable.
        </p>
      </section>
      <section className="grid gap-6 lg:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} slug={post.slug} {...post.meta} />
        ))}
      </section>
    </div>
  );
}
