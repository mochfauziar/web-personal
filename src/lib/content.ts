import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ContentType = "blog" | "projects" | "stand-up" | "music";

export type Entry = {
  type: ContentType;
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
  meta: Record<string, unknown>;
};

// Tipe khusus untuk proyek — frontmatter-nya berbeda dari blog.
export type ProjectEntry = {
  slug: string;
  title: string;
  year: number;
  summary: string;
  tags: string[];
  repo: string;
  demo: string;
  role: string;
  featured: boolean;
  content: string;
};

const contentRoot = path.join(process.cwd(), "content");

function dirFor(type: ContentType) {
  return path.join(contentRoot, type);
}

// gray-matter mengubah tanggal YAML tanpa tanda kutip menjadi objek Date
function normalizeDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return value ? String(value) : "";
}

export function getSlugs(type: ContentType): string[] {
  const dir = dirFor(type);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getBySlug(type: ContentType, slug: string): Entry | null {
  const file = path.join(dirFor(type), `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;

  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const { title, date, summary, tags, published, ...meta } = data;

  if (published === false) return null;

  return {
    type,
    slug,
    title: title ?? slug,
    date: normalizeDate(date),
    summary: summary ?? "",
    tags: tags ?? [],
    content,
    meta,
  };
}

export function getAll(type: ContentType): Entry[] {
  return getSlugs(type)
    .map((slug) => getBySlug(type, slug))
    .filter((e): e is Entry => e !== null)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

// ---- Projects ----

export function getAllProjects(): ProjectEntry[] {
  const dir = path.join(contentRoot, "projects");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const { data, content } = matter(
        fs.readFileSync(path.join(dir, f), "utf8")
      );
      return {
        slug: (data.slug as string) ?? slug,
        title: (data.title as string) ?? slug,
        year: (data.year as number) ?? 0,
        summary: (data.summary as string) ?? "",
        tags: (data.tags as string[]) ?? [],
        repo: (data.repo as string) ?? "",
        demo: (data.demo as string) ?? "",
        role: (data.role as string) ?? "",
        featured: (data.featured as boolean) ?? false,
        content,
      };
    })
    .sort(
      (a, b) =>
        Number(b.featured) - Number(a.featured) || b.year - a.year
    );
}

export function getProjectBySlug(slug: string): ProjectEntry | null {
  const dir = path.join(contentRoot, "projects");
  // Cari file yang slug frontmatter-nya cocok, atau nama file-nya cocok
  const files = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"))
    : [];

  for (const f of files) {
    const { data, content } = matter(
      fs.readFileSync(path.join(dir, f), "utf8")
    );
    const fileSlug = (data.slug as string) ?? f.replace(/\.mdx$/, "");
    if (fileSlug === slug) {
      return {
        slug: fileSlug,
        title: (data.title as string) ?? slug,
        year: (data.year as number) ?? 0,
        summary: (data.summary as string) ?? "",
        tags: (data.tags as string[]) ?? [],
        repo: (data.repo as string) ?? "",
        demo: (data.demo as string) ?? "",
        role: (data.role as string) ?? "",
        featured: (data.featured as boolean) ?? false,
        content,
      };
    }
  }
  return null;
}

// ---- Kompatibilitas blog ----
export type Post = Entry;
export const getAllPosts = (): Post[] => getAll("blog");
export const getPost = (slug: string): Post | null => getBySlug("blog", slug);
