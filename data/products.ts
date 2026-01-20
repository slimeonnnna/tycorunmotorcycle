import a8Product from "./products/a8";
import df1Product from "./products/df-1";

export type ProductImage = {
  id: number;
  src: string;
  alt: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductHighlight = {
  iconClass: string;
  label: string;
};

export type ProductPricingTier = {
  moq: string;
  tag: string;
  price: string;
};

export type ProductFaq = {
  question: string;
  answer: string;
};

export type ProductShippingItem = {
  label: string;
  value: string;
};

export type ProductShippingSection = {
  title: string;
  items: ProductShippingItem[];
};

export type ProductContent = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  category?: string;
  specIntro: string;
  specBullets: string[];
  scenarios: {
    title: string;
    subtitle: string;
    iconClass: string;
  }[];
  mainImage: string;
  images: ProductImage[];
  highlights: ProductHighlight[];
  pricing: ProductPricingTier[];
  specs: ProductSpec[];
  faqs: ProductFaq[];
  sliderImage?: string;
  shippingSections?: ProductShippingSection[];
  defaultPower: string;
  powerOptions: string[];
  defaultBattery: string;
  batteryOptions: string[];
};

export const products: ProductContent[] = [a8Product, df1Product];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
