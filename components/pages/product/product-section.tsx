import { products } from "@/data/products";
import { ProductSectionClient } from "./product-section-client";

const productSlides = products
  .map((product) => ({
    subtitle: product.name,
    title: product.headline,
    description: product.specIntro,
    image: product.sliderImage ?? product.mainImage ?? product.images[0]?.src ?? "",
    href: `/product/${product.slug}`,
  }))
  .filter((slide) => slide.image);

export function Product() {
  return (
    <ProductSectionClient
      slides={productSlides}
      kicker="Product Lineup"
      title="Find the Right Platform for Every Route"
      description="Browse our commercial electric motorcycle lineup by payload, range, and service duty. Each platform is tuned for uptime, rider comfort, and predictable fleet ROI."
      ctaLabel="View Product"
      ctaHref="/contact"
    />
  );
}
