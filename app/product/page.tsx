
import "../css/product.css";
import PageIllustration from "@/components/global/page-illustration";
import ProductPage from "@/components/pages/product/product-page";
import Cta from "@/components/global/cta";
import Footer from "@/components/global/ui/footer";

export const metadata = {
  title: "Product & Technology | TYCORUN",
  description:
    "Explore OEM/ODM-ready electric motorcycle platforms, compliance support, and export specs.",
};

export default function Product() {
  return (
    <>
      <main className="relative flex grow flex-col">
        <PageIllustration multiple />
        <ProductPage />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
