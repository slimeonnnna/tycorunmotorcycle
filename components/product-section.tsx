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
      kicker="Commercial Partnership Frameworks"
      title="Manufacturing Aligned With Your Profit Model"
      description="Global markets operate on diverse regulatory and fiscal frameworks. TYCORUN structures production not just to export vehicles, but to integrate with your specific business strategy—whether that requires total brand control, tariff mitigation, or rapid market entry."
      ctaLabel="View Product"
      ctaHref="/contact"
    />
  );
}
