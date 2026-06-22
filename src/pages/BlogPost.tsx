import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import MdxLayout from '../components/MdxLayout';
import { getPost } from '../lib/blog';

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return (
      <div className="container-pad pb-20 pt-16">
        <p className="text-sm text-ink-300">Post not found.</p>
      </div>
    );
  }

  const Content = post.component;
  const publishedDate = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${post.meta.date}T00:00:00`));

  return (
    <div className="container-pad pb-14">
      <Helmet>
        <title>{post.meta.title} · Akash Bajpai</title>
        <meta name="description" content={post.meta.excerpt} />
      </Helmet>

      <article className="mx-auto max-w-[720px] pt-8">
        <div className="text-center">
          <p className="section-title">{publishedDate}</p>
          <h1 className="mt-2 text-4xl font-semibold leading-tight text-ink-50">{post.meta.title}</h1>
        </div>
        <div className="mx-auto mt-3 flex max-w-md flex-wrap items-center justify-center gap-3 border-y border-white/10 py-3 font-mono text-xs lowercase text-ink-300">
          <span>{post.meta.readingTime}</span>
          <span>{publishedDate}</span>
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-ink-200">{post.meta.excerpt}</p>
        <div className="blog-content mt-6">
          <MdxLayout>
            <Content />
          </MdxLayout>
        </div>
      </article>
    </div>
  );
}
