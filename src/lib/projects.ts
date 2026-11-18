// src/lib/projects.ts
export type Project = {
  title: string;
  description: string;
  tech: string[];
  repo?: string; // link GitHub
  demo?: string; // link demo / website
  year?: number;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Website Personal",
    description:
      "Website pribadi untuk blog dan portofolio, dibangun dengan konten berbasis file MDX supaya awet dan mudah dipindah.",
    tech: ["Next.js", "Tailwind CSS", "MDX", "Vercel"],
    demo: "https://mchfauzi.com",
    year: 2026,
    featured: true,
  },
  // Contoh pola untuk proyek berikutnya, hapus tanda komentar dan isi:
  // {
  //   title: "Nama Proyek",
  //   description: "Satu atau dua kalimat: masalah apa yang dipecahkan.",
  //   tech: ["Java", "PostgreSQL"],
  //   repo: "https://github.com/mochfauziar/nama-repo",
  //   year: 2026,
  // },
];