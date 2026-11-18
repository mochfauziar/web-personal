// src/components/projects/ProjectCard.tsx
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, tech, repo, demo, year } = project;

  return (
    <li className="rounded-xl border border-black/10 p-5 dark:border-white/10">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {year && <span className="text-sm opacity-60">{year}</span>}
      </div>

      <p className="mt-2 opacity-80">{description}</p>

      <ul className="mt-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <li key={t} className="rounded-full border px-2.5 py-0.5 text-xs">
            {t}
          </li>
        ))}
      </ul>

      {(repo || demo) && (
        <div className="mt-4 flex gap-4 text-sm">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              Lihat demo
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              Kode di GitHub
            </a>
          )}
        </div>
      )}
    </li>
  );
}