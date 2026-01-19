import "../../css/product.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import PageIllustration from "@/components/page-illustration";
import ProductDetailPage from "@/components/product-detail-page";
import Cta from "@/components/cta";
import Footer from "@/components/ui/footer";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: `${params.slug.charAt(0).toUpperCase() + params.slug.slice(1)} | TYCORUN`,
    description: "Explore OEM/ODM-ready electric motorcycle platforms, compliance support, and export specs.",
  };
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  return (
    <>
      <main className="relative flex grow flex-col">
        <PageIllustration multiple />
        <ProductDetailPage />
        <Cta />
      </main>
      <Footer />
    </>
  );
}