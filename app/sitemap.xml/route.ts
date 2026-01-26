import { products } from "@/data/products";
import { getBlogList } from "@/lib/blog";
import { getBaseUrl } from "@/lib/site-url";

export const dynamic = "force-static";
export const revalidate = 0;

export function GET() {
  const baseUrl = getBaseUrl();

  const staticRoutes = [
    "/",
    "/about",
    "/contact",
    "/product",
    "/solution",
    "/blog",
  ].map((route) => `${baseUrl}${route}`);

  const blogRoutes = getBlogList().map(
    (post) => `${baseUrl}/blog/${post.slug.join("/")}`,
  );

  const productRoutes = products.map(
    (product) => `${baseUrl}/product/${product.slug}`,
  );

  const body = [...staticRoutes, ...blogRoutes, ...productRoutes].join("\n");

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
