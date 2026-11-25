import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-5 py-8 text-sm text-[var(--muted)]">
      © {new Date().getFullYear()} {site.name}. Built with Next.js and a cup of coffee.
    </footer>
  );
}