import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  const tags = new Set<string>();
  for (const post of getAllPosts()) {
    for (const tag of post.tags) tags.add(tag);
  }
  return [...tags].map((tag) => ({ tag }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  return { title: `Tulisan bertag "${tag}"` };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const posts = getAllPosts().filter((p) => p.tags.includes(tag));
  if (posts.length === 0) notFound();

  return (
    <div className="space-y-6">
      <Link href="/blog" className="text-sm opacity-70 hover:opacity-100">
        ← Semua tulisan
      </Link>

      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">#{tag}</h1>
        <p className="text-sm text-[var(--muted)]">{posts.length} tulisan</p>
      </div>

      {posts.map((p) => (
        <article key={p.slug} className="space-y-1">
          <Link
            href={`/blog/${p.slug}`}
            className="text-lg font-medium hover:text-[var(--accent)]"
          >
            {p.title}
          </Link>
          <p className="text-sm text-[var(--muted)]">
            {formatDate(p.date)} · {p.summary}
          </p>
        </article>
      ))}
    </div>
  );
}
