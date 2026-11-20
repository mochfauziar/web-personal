import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tulisan",
  description: "Catatan perjalanan saya tentang software dan hal yang dipelajari.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tulisan</h1>

      {posts.length === 0 && <p className="text-[var(--muted)]">Belum ada tulisan.</p>}

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
          {p.tags.length > 0 && (
            <ul className="flex flex-wrap gap-2 pt-1">
              {p.tags.map((t) => (
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
        </article>
      ))}
    </div>
  );
}
