import Link from "next/link";
import { getAllPosts } from "@/lib/content";

export const metadata = { title: "Tulisan" };

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tulisan</h1>
      {posts.map((p) => (
        <article key={p.slug}>
          <Link href={`/blog/${p.slug}`} className="text-lg font-medium hover:text-[var(--accent)]">
            {p.title}
          </Link>
          <p className="text-sm text-[var(--muted)]">{p.date} · {p.summary}</p>
        </article>
      ))}
    </div>
  );
}