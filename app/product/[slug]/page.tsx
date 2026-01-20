import "../../css/product.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import PageIllustration from "@/components/page-illustration";
import ProductDetailPage from "@/components/product-detail-page";
import Cta from "@/components/cta";
import Footer from "@/components/ui/footer";
import { getProductBySlug } from "@/data/products";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
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

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }
  return (
    <>
      <main className="relative flex grow flex-col">
        <PageIllustration multiple />
        <ProductDetailPage product={product} />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
