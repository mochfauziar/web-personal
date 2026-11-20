import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <p className="text-6xl font-bold text-[var(--accent)]">404</p>
      <h1 className="text-2xl font-semibold tracking-tight">
        Halaman tidak ditemukan
      </h1>
      <p className="text-[var(--muted)]">
        Maaf, alamat yang Anda cari tidak ada di sini.
      </p>
      <Link
        href="/"
        className="inline-block rounded-full bg-[var(--accent)] px-5 py-2 text-[var(--bg)] transition-opacity hover:opacity-90"
      >
        Kembali ke beranda
      </Link>
    </div>
  );
}
