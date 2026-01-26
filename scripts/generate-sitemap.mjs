import fs from "fs";
import path from "path";

const rootDir = process.cwd();

function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.CF_PAGES_URL) {
    return process.env.CF_PAGES_URL;
  }
  return "http://localhost:3000";
}

function getAllPostFiles(dir) {
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

function getBlogSlugs() {
  const blogDir = path.join(rootDir, "blog");
  if (!fs.existsSync(blogDir)) return [];
  return getAllPostFiles(blogDir).map((filePath) => {
    const relative = path.relative(blogDir, filePath).replace(/\\/g, "/");
    return relative.replace(/\.(md|mdx)$/, "");
  });
}

function getProductSlugs() {
  const productsDir = path.join(rootDir, "data", "products");
  if (!fs.existsSync(productsDir)) return [];
  const files = fs
    .readdirSync(productsDir)
    .filter((file) => file.endsWith(".ts"));
  const slugs = [];
  files.forEach((file) => {
    const content = fs.readFileSync(path.join(productsDir, file), "utf8");
    const match = content.match(/slug:\s*["'`](.*?)["'`]/);
    if (match?.[1]) {
      slugs.push(match[1]);
    }
  });
  return slugs;
}

function generateSitemap() {
  const baseUrl = getBaseUrl();
  const staticRoutes = [
    "/",
    "/about",
    "/contact",
    "/product",
    "/solution",
    "/blog",
  ].map((route) => `${baseUrl}${route}`);

  const blogRoutes = getBlogSlugs().map(
    (slug) => `${baseUrl}/blog/${slug}`,
  );
  const productRoutes = getProductSlugs().map(
    (slug) => `${baseUrl}/product/${slug}`,
  );

  return [...staticRoutes, ...blogRoutes, ...productRoutes].join("\n");
}

const outputPath = path.join(rootDir, "public", "sitemap.xml");
const body = generateSitemap();
fs.writeFileSync(outputPath, `${body}\n`, "utf8");
console.log(`sitemap written: ${outputPath}`);
