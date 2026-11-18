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
  // field tambahan khusus tiap jenis konten (provider, videoId, embedUrl, venue, dll)
  meta: Record<string, unknown>;
};

const contentRoot = path.join(process.cwd(), "content");

function dirFor(type: ContentType) {
  return path.join(contentRoot, type);
}

// gray-matter mengubah tanggal YAML tanpa tanda kutip (2026-11-18) menjadi objek Date
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
  if (data.published === false) return null;

  const { title, date, summary, tags, published, ...meta } = data;

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

// ---- Kompatibilitas dengan kode lama (halaman /blog yang sudah ada) ----
export type Post = Entry;
export const getAllPosts = (): Post[] => getAll("blog");
export const getPost = (slug: string): Post | null => getBySlug("blog", slug);