import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { SITE } from "@/lib/constants";

const links = [
  { href: "/projects", label: "Proyek" },
  { href: "/blog", label: "Tulisan" },
  { href: "/about", label: "Tentang" },
  { href: "/contact", label: "Kontak" },
];

export default function Navbar() {
  return (
    <header className="mx-auto flex max-w-3xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
      <Link href="/" className="w-fit font-bold focus-visible:rounded-sm">
        {SITE.name}
      </Link>
      <nav aria-label="Navigasi utama" className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="hover:text-[var(--accent)]">
            {l.label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}