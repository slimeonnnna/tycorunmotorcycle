import "../../css/product.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import PageIllustration from "@/components/page-illustration";
import ProductDetailPage from "@/components/product-detail-page";
import PackagingShipping from "@/components/packaging-shipping";
import CompanyProfile from "@/components/company-profile";
import Cta from "@/components/cta";
import Footer from "@/components/ui/footer";
import { getProductBySlug } from "@/data/products";
import { notFound } from "next/navigation";

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

export default async function ProductDetail({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    notFound();
  }
  return (
    <>
      <main className="relative flex grow flex-col">
        <PageIllustration multiple />
        <ProductDetailPage
          product={product}
          shippingContent={<PackagingShipping />}
          companyContent={<CompanyProfile />}
        />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
