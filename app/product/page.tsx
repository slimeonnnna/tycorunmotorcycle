
import PageIllustration from "@/components/page-illustration";
import ProductPage from "@/components/product-page";
import Cta from "@/components/cta";
import Footer from "@/components/ui/footer";

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
