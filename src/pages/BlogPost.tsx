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

  return (
    <div className="container-pad pb-20">
      <Helmet>
        <title>{post.meta.title} · Akash Bajpai</title>
        <meta name="description" content={post.meta.excerpt} />
      </Helmet>

      <article className="mx-auto max-w-3xl pt-10">
        <p className="section-title">{post.meta.date}</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink-50">{post.meta.title}</h1>
        <p className="mt-3 text-sm text-ink-200">{post.meta.excerpt}</p>
        <div className="mt-2 text-xs uppercase tracking-[0.3em] text-ink-300">{post.meta.readingTime}</div>
        <div className="mt-8">
          <MdxLayout>
            <Content />
          </MdxLayout>
        </div>
      </article>
    </div>
  );
}
