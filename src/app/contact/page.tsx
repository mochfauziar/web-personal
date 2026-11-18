// src/app/contact/page.tsx
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Cara menghubungi saya.",
};

export default function ContactPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight">Kontak</h1>
      <p className="mt-4 opacity-80">
        Ada pertanyaan, ide kolaborasi, atau sekadar ingin menyapa? Kirim saja
        pesan.
      </p>

      <ul className="mt-8 divide-y">

        {site.socials.map((s) => (
          <li key={s.label} className="flex items-center justify-between py-4">
            <span className="font-medium">{s.label}</span>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              {s.href.replace("https://", "")}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}