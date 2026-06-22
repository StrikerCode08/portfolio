import { MDXProvider } from '@mdx-js/react';
import { ReactNode } from 'react';

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-8 border-t border-white/10 pt-6 text-2xl font-semibold text-ink-50" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-6 text-lg font-semibold text-ink-50" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-3 text-[15px] leading-7 text-ink-200" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-4 grid gap-2 text-sm text-ink-200" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mt-4 grid list-decimal gap-2 pl-5 text-sm leading-6 text-ink-200 marker:font-mono marker:text-ink-400" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 leading-6" {...props} />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className="mt-5 rounded-lg border border-white/10 bg-ink-800" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-xs text-ink-100" {...props} />
  ),
};

export default function MdxLayout({ children }: { children: ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
