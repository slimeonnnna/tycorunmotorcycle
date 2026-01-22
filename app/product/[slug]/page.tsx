import "../../css/product.css";
import PageIllustration from "@/components/page-illustration";
import ProductDetailPage from "@/components/product-detail-page";
import CompanyProfile from "@/components/company-profile";
import Cta from "@/components/cta";
import Footer from "@/components/ui/footer";
import { getProductBySlug, products } from "@/data/products";
import { notFound } from "next/navigation";

function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return {
      title: "Product | TYCORUN",
      description: "Explore OEM/ODM-ready electric motorcycle platforms, compliance support, and export specs.",
    };
  }
  return {
    title: `${product.headline} | TYCORUN`,
    description: product.description,
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetail({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    notFound();
  }
  const siteUrl = resolveSiteUrl();
  const productUrl = new URL(`/product/${product.slug}`, siteUrl).toString();
  const imageUrls = product.images.map((image) => new URL(image.src, siteUrl).toString());
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: product.description,
      image: imageUrls,
      sku: product.slug,
      brand: {
        "@type": "Organization",
        name: "TYCORUN",
      },
      manufacturer: {
        "@type": "Organization",
        name: "TYCORUN",
      },
      url: productUrl,
      category: product.category ?? "Electric Motorcycle",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: product.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item: new URL("/product", siteUrl).toString(),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: product.name,
          item: productUrl,
        },
      ],
    },
  ];
  return (
    <>
      {jsonLd.map((entry, index) => (
        <script
          key={`product-jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
      <main className="relative flex grow flex-col">
        <PageIllustration multiple />
        <ProductDetailPage
          product={product}
          companyContent={<CompanyProfile />}
        />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
