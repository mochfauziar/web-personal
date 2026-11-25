import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllProjects, getProjectBySlug } from "@/lib/content";
import { mdxComponents } from "@/components/mdx";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return project
    ? { title: project.title, description: project.summary }
    : {};
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { title, year, summary, tags, repo, demo, role, content } = project;

  return (
    <article>
      <Link href="/projects" className="text-sm opacity-70 hover:opacity-100">
        ← Semua proyek
      </Link>

      <header className="mb-8 mt-4 space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="opacity-80">{summary}</p>

        {/* Meta: tahun, role */}
        <div className="flex flex-wrap gap-4 text-sm text-[var(--muted)]">
          {year > 0 && <span>{year}</span>}
          {role && <span>{role}</span>}
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <li
                key={t}
                className="rounded-full border px-2.5 py-0.5 text-xs"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        {/* Links */}
        {(demo || repo) && (
          <div className="flex gap-4 text-sm">
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
      </header>

      <div className="prose prose-neutral max-w-none dark:prose-invert prose-a:text-[var(--accent)]">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </article>
  );
}
