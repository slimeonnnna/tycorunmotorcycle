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

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <>
      <PageIllustration />
      <section className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/blog"
            className="text-sm text-gray-400 transition hover:text-blue-400"
          >
            &larr; Back to Blog
          </Link>

          <div className="mt-6">
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
              <time dateTime={post.date}>{formatDateLabel(post.date)}</time>
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
            <h1 className="mt-4 font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-gray-400">{post.description}</p>
          </div>

          {post.cover ? (
            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-800 bg-gray-950">
              <img
                src={post.cover}
                alt={post.title}
                className="h-64 w-full object-cover"
              />
            </div>
          ) : null}

          <div
            className="prose prose-invert mt-10 max-w-none text-gray-200"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>
      <Cta />
    </>
  );
}
