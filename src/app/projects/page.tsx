import type { Metadata } from "next";
import ProjectCard from "@/components/projects/ProjectCard";
import { getAllProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Kumpulan proyek yang pernah saya bangun.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <p className="mt-4 opacity-80">
        Beberapa hal yang pernah saya bangun dan pelajari.
      </p>

      {projects.length === 0 ? (
        <p className="mt-8 opacity-70">Belum ada proyek.</p>
      ) : (
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </ul>
      )}
    </section>
  );
}
