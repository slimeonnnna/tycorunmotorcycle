import { products } from "@/data/products";
import { getBlogPosts } from "@/lib/blog";

export const dynamic = "force-static";

type LlmsEntry = {
  h1: string;
  description: string;
};

function normalizeText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function extractHeadingFromMarkdown(markdown: string) {
  const lines = markdown.split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith("# ")) {
      return normalizeText(trimmed.replace(/^#\s+/, ""));
    }
    if (trimmed.startsWith("```")) {
      return null;
    }
  }
  return null;
}

export function GET() {
  const staticEntries: LlmsEntry[] = [
    {
      h1: "Leading Electric Motorcycle Manufacturer for Global OEMs",
      description:
        "Factory-direct OEM/ODM electric motorcycles with SKD/CKD options and compliance support.",
    },
    {
      h1: "A Global Electric Motorcycle Manufacturer, Built for OEM Excellence.",
      description:
        "Learn how TYCORUN delivers OEM/ODM electric motorcycle programs with compliance support and scalable manufacturing.",
    },
    {
      h1: "OEM / ODM Partnership Inquiry",
      description:
        "Request OEM/ODM pricing, compliance documents, or SKD/CKD programs with TYCORUN.",
    },
    {
      h1: "Heavy-Duty Commercial Electric Motorcycles for Global Fleets",
      description:
        "Explore OEM/ODM-ready electric motorcycle platforms, compliance support, and export specs.",
    },
    {
      h1: "Turnkey Electric Motorcycle Solutions for Global Operations",
      description:
        "Factory-ready OEM/ODM programs with compliance support and export logistics.",
    },
    {
      h1: "Blog",
      description:
        "OEM/ODM guidance, compliance updates, and export-ready manufacturing insights.",
    },
  ];

  const productEntries: LlmsEntry[] = products.map((product) => ({
    h1: normalizeText(product.headline),
    description: normalizeText(product.description),
  }));

  const blogEntries: LlmsEntry[] = getBlogPosts().map((post) => {
    const isTemplate = post.content.includes("blog-article");
    const heading = isTemplate
      ? post.title
      : extractHeadingFromMarkdown(post.content) ?? post.title;
    return {
      h1: normalizeText(heading),
      description: normalizeText(post.description),
    };
  });

  const body = [...staticEntries, ...productEntries, ...blogEntries]
    .map((entry) => `${entry.h1}\n${entry.description}`)
    .join("\n\n")
    .trim();

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
