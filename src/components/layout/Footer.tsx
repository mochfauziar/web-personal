import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-5 py-8 text-sm text-[var(--muted)]">
      © {new Date().getFullYear()} {SITE.name}. Dibuat dengan Next.js dan secangkir kopi.
    </footer>
  );
}