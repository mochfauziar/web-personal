import Link from "next/link";
import type { ProjectEntry } from "@/lib/content";

export default function ProjectCard({ project }: { project: ProjectEntry }) {
  const { slug, title, summary, tags, repo, demo, year, featured } = project;

  return (
    <li className="rounded-xl border border-black/10 p-5 dark:border-white/10">
      <div className="flex items-baseline justify-between gap-4">
        <Link
          href={`/projects/${slug}`}
          className="text-lg font-semibold hover:text-[var(--accent)]"
        >
          {title}
          {featured && (
            <span className="ml-2 rounded-full bg-[var(--accent)]/10 px-2 py-0.5 text-xs font-medium text-[var(--accent)]">
              Featured
            </span>
          )}
        </Link>
        {year > 0 && <span className="shrink-0 text-sm opacity-60">{year}</span>}
      </div>

      <p className="mt-2 opacity-80">{summary}</p>

      {tags.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li key={t} className="rounded-full border px-2.5 py-0.5 text-xs">
              {t}
            </li>
          ))}
        </ul>
      )}

      {(repo || demo) && (
        <div className="mt-4 flex gap-4 text-sm">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              Live demo
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </li>
  );
}
