import Link from "next/link";
import { getAllPosts } from "@/lib/content";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Halo, saya Moch Fauzi 👋</h1>
        <p className="text-lg text-[var(--muted)]">
          Saya suka membangun sistem dan belajar hal baru. Di sini saya
          menyimpan proyek dan catatan perjalanan saya.
        </p>
        <Link href="/projects" className="inline-block rounded-full bg-[var(--accent)] px-5 py-2 text-[var(--bg)] transition-opacity hover:opacity-90">
          Lihat proyek saya
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Tulisan terbaru</h2>
        {posts.length === 0 && <p className="text-[var(--muted)]">Belum ada tulisan.</p>}
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="block hover:text-[var(--accent)]">
            <h3 className="font-medium">{p.title}</h3>
            <p className="text-sm text-[var(--muted)]">{p.summary}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}