// src/lib/site.ts
// Sumber kebenaran tunggal untuk identitas situs.
// Sebelumnya ada dua config (constants.ts & site.ts) dengan URL berbeda;
// sekarang semua merujuk ke satu tempat ini.
export const site = {
  name: "Moch Fauzi",
  description:
    "Tempat saya bercerita tentang proyek dan hal yang saya pelajari.",
  // Domain final/kanonik. Dipakai untuk metadataBase, sitemap, robots, RSS, OG.
  // Tanpa trailing slash supaya URL di-generate bersih.
  url: "https://mchfauzi.com",
  email: "moch.fauzi.ar@gmail.com",
  socials: [
    {
      label: "Email",
      href: "mailto:moch.fauzi.ar@gmail.com",
      handle: "moch.fauzi.ar@gmail.com",
    },
    {
      label: "GitHub",
      href: "https://github.com/mochfauziar",
      handle: "github.com/mochfauziar",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mochamad-fauzi/",
      handle: "linkedin.com/in/mochamad-fauzi",
    },
  ],
};

export type Social = (typeof site.socials)[number];
