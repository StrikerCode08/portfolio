import { ComponentType } from 'react';

export type BlogMeta = {
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
};

type BlogModule = {
  default: ComponentType;
  meta: BlogMeta;
};

const modules = import.meta.glob('../content/blog/*.mdx', { eager: true }) as Record<string, BlogModule>;

export const posts = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.split('/').pop()?.replace(/\.mdx$/, '') ?? '';
    return {
      slug,
      component: mod.default,
      meta: mod.meta,
    };
  })
  .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
