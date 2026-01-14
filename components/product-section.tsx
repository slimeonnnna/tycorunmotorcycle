import { ProductSectionClient } from "./product-section-client";

const productSlides = [
  {
    subtitle: "Performance Series",
    title: "Amur Leopard",
    description: "High-torque commuter platform with durable frame and extended battery range.",
    image: "/webp/1.webp",
  },
  {
    subtitle: "Urban Mobility",
    title: "Asiatic Lion",
    description: "Compact city scooter tuned for comfort, efficiency, and daily deliveries.",
    image: "/webp/2.webp",
  },
  {
    subtitle: "All-Weather",
    title: "Siberian Tiger",
    description: "Weather-ready commuter build with reinforced suspension and lighting kit.",
    image: "/webp/3.webp",
  },
  {
    subtitle: "Touring Pack",
    title: "Brown Bear",
    description: "Comfort-focused touring setup with cargo support and long-range options.",
    image: "/webp/4.webp",
  },
];

export function Product() {
  return (
    <ProductSectionClient
      slides={productSlides}
      kicker="Commercial Partnership Frameworks"
      title="Manufacturing Aligned With Your Profit Model"
      description="Global markets operate on diverse regulatory and fiscal frameworks. TYCORUN structures production not just to export vehicles, but to integrate with your specific business strategy—whether that requires total brand control, tariff mitigation, or rapid market entry."
      ctaLabel="Contact Us"
      ctaHref="/contact"
    />
  );
}
