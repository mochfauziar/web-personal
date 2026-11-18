// src/app/projects/page.tsx
import type { Metadata } from "next";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Proyek",
  description: "Kumpulan proyek yang pernah saya bangun.",
};

export default function ProjectsPage() {
  const sorted = [...projects].sort(
    (a, b) =>
      Number(b.featured ?? false) - Number(a.featured ?? false) ||
      (b.year ?? 0) - (a.year ?? 0)
  );

  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight">Proyek</h1>
      <p className="mt-4 opacity-80">
        Beberapa hal yang pernah saya bangun dan pelajari.
      </p>

      {sorted.length === 0 ? (
        <p className="mt-8 opacity-70">Belum ada proyek.</p>
      ) : (
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {sorted.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </ul>
      )}
    </section>
  );
}