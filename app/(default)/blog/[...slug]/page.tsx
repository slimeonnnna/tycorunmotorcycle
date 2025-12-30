import Link from "next/link";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";
import {
  formatDateLabel,
  getBlogList,
  getBlogPostBySlug,
} from "@/lib/blog";

type BlogPostPageProps = {
  params: {
    slug: string[];
  };
};

type TocItem = {
  level: 2 | 3;
  text: string;
  id: string;
};

function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function extractToc(markdown: string): TocItem[] {
  const lines = markdown.split(/\r?\n/);
  const items: TocItem[] = [];
  const idCounts = new Map<string, number>();
  let inCodeBlock = false;

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      return;
    }
    if (inCodeBlock) return;

    const h2Match = /^##\s+(.+)/.exec(trimmed);
    if (h2Match) {
      const text = h2Match[1].replace(/#+$/, "").trim();
      const baseId = slugifyHeading(text);
      const count = idCounts.get(baseId) ?? 0;
      idCounts.set(baseId, count + 1);
      const id = count === 0 ? baseId : `${baseId}-${count + 1}`;
      items.push({ level: 2, text, id });
      return;
    }
    const h3Match = /^###\s+(.+)/.exec(trimmed);
    if (h3Match) {
      const text = h3Match[1].replace(/#+$/, "").trim();
      const baseId = slugifyHeading(text);
      const count = idCounts.get(baseId) ?? 0;
      idCounts.set(baseId, count + 1);
      const id = count === 0 ? baseId : `${baseId}-${count + 1}`;
      items.push({ level: 3, text, id });
    }
  });

  return items;
}

function addHeadingIds(contentHtml: string, tocItems: TocItem[]) {
  if (tocItems.length === 0) return contentHtml;
  const items = tocItems.filter((item) => item.level === 2 || item.level === 3);
  let index = 0;
  return contentHtml.replace(/<h([23])>(.*?)<\/h[23]>/g, (match, level) => {
    if (index >= items.length) return match;
    const current = items[index];
    if (Number(level) !== current.level) return match;
    index += 1;
    return `<h${level} id="${current.id}">${match.replace(
      /<\/?h[23]>/g,
      "",
    )}</h${level}>`;
  });
}

export async function generateStaticParams() {
  const posts = getBlogList();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Post Not Found - Slimeon",
    };
  }

  return {
    title: `${post.title} - Slimeon`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const isTemplate = post.content.includes("blog-article");
  const tocItems = isTemplate ? [] : extractToc(post.content);

  let contentHtml = post.content;
  if (!isTemplate) {
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(post.content);
    contentHtml = addHeadingIds(processedContent.toString(), tocItems);
  }

  return (
    <>
      <PageIllustration />
      <section className="blog-post pt-32 pb-12 md:pt-40 md:pb-20">
        <div
          className={`mx-auto px-4 sm:px-6 ${
            isTemplate ? "max-w-6xl" : "max-w-3xl"
          }`}
        >
          {!isTemplate ? (
            <div className="mt-6">
              <h1 className="mt-4 font-nacelle text-3xl font-semibold text-gray-100 sm:text-4xl md:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 text-base text-gray-400 sm:text-lg">
                {post.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 sm:text-sm">
                <time dateTime={post.date}>{formatDateLabel(post.date)}</time>
                {post.category ? <span>Category: {post.category}</span> : null}
                {post.author ? <span>Author: {post.author}</span> : null}
                {post.tags.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={`${post.slug.join("/")}-${tag}`}
                        className="rounded-full border border-gray-800 bg-gray-900/60 px-2 py-0.5 text-[11px] text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}

          {!isTemplate && post.cover ? (
            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-800 bg-gray-950">
              <img
                src={post.cover}
                alt={post.title}
                className="h-64 w-full object-cover"
              />
            </div>
          ) : null}

          <div className={isTemplate ? "mt-10 text-base text-gray-200 sm:text-lg" : "mt-10"}>
            {!isTemplate ? (
              <>
                {tocItems.length > 0 ? (
                  <div className="md:hidden sticky top-20 z-20">
                    <details className="rounded-2xl border border-gray-800 bg-gray-900/80 p-4">
                      <summary className="cursor-pointer text-xs uppercase tracking-widest text-gray-400">
                        Table of Contents
                      </summary>
                      <div className="mt-3 space-y-2 text-sm text-gray-300">
                        {tocItems.map((item, index) => (
                          <div
                            key={`${item.text}-${index}`}
                            className={item.level === 3 ? "pl-4 text-gray-400" : ""}
                          >
                            <a
                              href={`#${item.id}`}
                              className="transition hover:text-blue-300"
                            >
                              {item.text}
                            </a>
                          </div>
                        ))}
                      </div>
                    </details>
                  </div>
                ) : null}

                <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)_220px]">
                <aside className="order-2 lg:order-none">
                  <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
                    <div className="text-xs uppercase tracking-widest text-gray-500">
                      Need a spec review?
                    </div>
                    <p className="mt-3 text-sm text-gray-300">
                      Share your voltage, thermal, and duty cycle targets. We will
                      map a buildable pack architecture within 48 hours.
                    </p>
                    <a
                      className="btn-sm mt-4 inline-flex bg-linear-to-t from-blue-600 to-blue-500 text-white"
                      href="/contact"
                    >
                      Contact Engineering
                    </a>
                  </div>
                </aside>

                <article className="order-1 lg:order-none">
                  <div
                    className="prose prose-invert max-w-none text-gray-200"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                  />
                </article>

                {tocItems.length > 0 ? (
                  <aside className="order-3 hidden md:block">
                    <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5 lg:sticky lg:top-28">
                      <div className="text-xs uppercase tracking-widest text-gray-500">
                        Table of Contents
                      </div>
                      <div className="mt-3 space-y-2 text-sm text-gray-300">
                        {tocItems.map((item, index) => (
                          <div
                            key={`${item.text}-${index}`}
                            className={item.level === 3 ? "pl-4 text-gray-400" : ""}
                          >
                            <a
                              href={`#${item.id}`}
                              className="transition hover:text-blue-300"
                            >
                              {item.text}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </aside>
                ) : null}
              </div>
            </>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            )}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}



