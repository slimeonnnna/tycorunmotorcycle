"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { BlogListItem } from "@/lib/blog";

export default function BlogIndex({ posts }: { posts: BlogListItem[] }) {
  const tags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
    return ["All", ...Array.from(tagSet).sort((a, b) => a.localeCompare(b))];
  }, [posts]);

  const [activeTag, setActiveTag] = useState("All");

  const filteredPosts = useMemo(() => {
    if (activeTag === "All") return posts;
    return posts.filter((post) => post.tags.includes(activeTag));
  }, [activeTag, posts]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
        <span className="uppercase tracking-widest text-gray-500">Filter</span>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            aria-pressed={activeTag === tag}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              activeTag === tag
                ? "border-blue-500/50 bg-blue-500/10 text-blue-300"
                : "border-gray-800 bg-gray-900/40 text-gray-300 hover:border-gray-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-10 text-center">
          <p className="text-lg font-medium text-gray-200">No posts yet.</p>
          <p className="mt-2 text-sm text-gray-400">
            Add a Markdown file under /blog to publish your first article.
          </p>
          <Link
            href="/"
            className="btn mt-6 bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
          >
            Back to Home
          </Link>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.slug.join("/")}
              className="group rounded-2xl border border-gray-800 bg-gray-900/40 p-6 transition-colors hover:border-gray-700"
            >
              {post.cover ? (
                <div className="mb-5 overflow-hidden rounded-xl border border-gray-800 bg-gray-950">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ) : null}
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                <time dateTime={post.date}>{post.dateLabel}</time>
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
              <h3 className="mt-3 text-2xl font-nacelle font-semibold text-gray-100 transition-colors group-hover:text-blue-300">
                <Link href={`/blog/${post.slug.join("/")}`}>{post.title}</Link>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug.join("/")}`}
                className="mt-4 inline-flex items-center gap-2 text-sm text-blue-400"
              >
                Read more
                <span className="transition-transform group-hover:translate-x-1">
                  -&gt;
                </span>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
