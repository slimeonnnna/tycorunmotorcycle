import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";
import BlogIndex from "@/components/blog/blog-index";
import { getBlogList } from "@/lib/blog";

export const metadata = {
  title: "Blog - Tycorun",
  description: "Riding insights, product updates, and the engineering behind our electric motorcycles.",
};

export default function BlogPage() {
  const posts = getBlogList();

  return (
    <>
      <PageIllustration />
      <section className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent text-sm uppercase tracking-widest font-mono">
                Ride Journal
              </span>
            </div>
            <h1 className="font-nacelle text-4xl font-semibold text-gray-100 md:text-5xl">
              Blog
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              Notes on riding experience, product design, and the engineering
              decisions behind our electric motorcycles.
            </p>
          </div>
          <div className="mt-10">
            <BlogIndex posts={posts} />
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
