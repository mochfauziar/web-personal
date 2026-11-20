// src/app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang",
  description: "Sedikit cerita tentang saya, pekerjaan, dan hal-hal yang saya sukai.",
};

export default function AboutPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold tracking-tight">Tentang</h1>

      <div className="prose prose-neutral mt-6 max-w-none dark:prose-invert prose-a:text-[var(--accent)]">
        <p>
          Halo, saya Moch Fauzi, seorang software engineer. Sehari-hari saya
          membangun sistem dan menulis kode, dan saya suka belajar hal baru
          sambil mencatat prosesnya.
        </p>

        <h2>Yang saya kerjakan</h2>
        <p>
          Saya bekerja dengan Java, Python, SQL (Oracle dan PostgreSQL), serta
          Next.js. Website ini adalah tempat saya menyimpan proyek dan catatan
          belajar.
        </p>

        <h2>Di luar kode</h2>
        <p>
          Saya suka musik dan stand up comedy. Suatu hari nanti, karya saya di
          dua bidang itu mungkin ikut mampir di sini.
        </p>

        <h2>Tentang website ini</h2>
        <p>
          Dibangun dengan Next.js, Tailwind, dan MDX. Semua tulisan disimpan
          sebagai file biasa, supaya awet dan mudah dipindah.
        </p>
      </div>
    </article>
  );
}