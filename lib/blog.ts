import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  title: string;
  date: string;
  description: string;
  slug: string[];
  tags: string[];
  cover?: string;
  content: string;
};

export type BlogListItem = Omit<BlogPost, "content"> & {
  dateLabel: string;
};

const BLOG_DIR = path.join(process.cwd(), "blog");
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "2-digit",
});

function titleFromSlug(slugPart: string) {
  return slugPart
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function normalizeTags(raw: unknown): string[] {
  if (!raw) return [];
  if (Array.isArray(raw)) {
    return raw
      .map((tag) => String(tag).trim())
      .filter((tag) => tag.length > 0);
  }
  if (typeof raw === "string") {
    return raw
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);
  }
  return [];
}

function buildExcerpt(content: string, maxLength = 180) {
  const cleaned = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_~`-]/g, " ")
    .replace(/\n+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();

  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.slice(0, maxLength).trim()}...`;
}

function getAllPostFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return getAllPostFiles(fullPath);
    }
    if (entry.isFile() && /\.(md|mdx)$/.test(entry.name)) {
      return [fullPath];
    }
    return [];
  });
}

function parsePost(filePath: string): BlogPost {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const relative = path.relative(BLOG_DIR, filePath).replace(/\\/g, "/");
  const slug = relative.replace(/\.(md|mdx)$/, "").split("/");
  const stats = fs.statSync(filePath);
  const fallbackDate = stats.mtime;
  const rawDate = data.date ? new Date(data.date as string) : fallbackDate;
  const safeDate = Number.isNaN(rawDate.getTime()) ? fallbackDate : rawDate;

  const title =
    typeof data.title === "string" && data.title.trim().length > 0
      ? data.title.trim()
      : titleFromSlug(slug[slug.length - 1]);

  const description =
    typeof data.description === "string" && data.description.trim().length > 0
      ? data.description.trim()
      : typeof data.excerpt === "string" && data.excerpt.trim().length > 0
        ? data.excerpt.trim()
        : buildExcerpt(content);

  const tags = normalizeTags(data.tags);
  const cover =
    typeof data.cover === "string"
      ? data.cover
      : typeof data.image === "string"
        ? data.image
        : undefined;

  return {
    title,
    date: safeDate.toISOString(),
    description,
    slug,
    tags,
    cover,
    content,
  };
}

export function formatDateLabel(dateISO: string) {
  return dateFormatter.format(new Date(dateISO));
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = getAllPostFiles(BLOG_DIR);
  const posts = files.map(parsePost);
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getBlogList(): BlogListItem[] {
  return getBlogPosts().map(({ content, ...post }) => ({
    ...post,
    dateLabel: formatDateLabel(post.date),
  }));
}

export function getBlogPostBySlug(slug: string[] | string): BlogPost | null {
  if (!fs.existsSync(BLOG_DIR)) return null;
  const slugParts = Array.isArray(slug) ? slug : [slug];
  const basePath = path.join(BLOG_DIR, ...slugParts);
  const candidates = [`${basePath}.md`, `${basePath}.mdx`];
  const match = candidates.find((candidate) => fs.existsSync(candidate));
  if (!match) return null;
  return parsePost(match);
}

export function getAllTags(posts: Array<BlogListItem | BlogPost>) {
  const tagSet = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort((a, b) => a.localeCompare(b));
}
