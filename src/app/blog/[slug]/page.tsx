// src/app/blog/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/content";
import { formatDate, readingTime } from "@/lib/utils";
import { mdxComponents } from "@/components/mdx";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: post.title, description: post.summary } : {};
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article>
      <Link href="/blog" className="text-sm opacity-70 hover:opacity-100">
        ← Semua tulisan
      </Link>

      <header className="mb-8 mt-4">
        <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
        <p className="mt-2 text-sm opacity-70">
          {formatDate(post.date)} · {readingTime(post.content)} menit baca
        </p>
        {post.tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <li key={t}>
                <Link
                  href={`/blog/tag/${t}`}
                  className="rounded-full border px-2.5 py-0.5 text-xs hover:text-[var(--accent)]"
                >
                  {t}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </header>

      <div className="prose prose-neutral max-w-none dark:prose-invert prose-a:text-[var(--accent)]">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}
