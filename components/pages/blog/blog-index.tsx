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
        <div className="ty-blog-grid">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug.join("/")}
              href={`/blog/${post.slug.join("/")}`}
              className="ty-blog-card"
            >
              {post.cover ? (
                <div className="ty-blog-cover">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="ty-blog-cover-img"
                    loading="lazy"
                  />
                </div>
              ) : null}
              <div className="ty-blog-meta">
                <time dateTime={post.date}>{post.dateLabel}</time>
                <span className="ty-blog-author">
                  {post.author ?? "TYCORUN"}
                </span>
                {post.tags.length > 0 ? (
                  <div className="ty-blog-tags">
                    {post.tags.map((tag) => (
                      <span
                        key={`${post.slug.join("/")}-${tag}`}
                        className="ty-blog-tag"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
              <h3 className="ty-blog-title">
                {post.title}
              </h3>
              <p className="ty-blog-excerpt">
                {post.description}
              </p>
              <span className="ty-blog-cta">
                Read article
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
