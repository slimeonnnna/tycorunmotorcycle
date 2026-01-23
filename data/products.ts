import a8Product from "./products/a8";
import df1Product from "./products/df-1";
import kxProduct from "./products/kx";
import m11Product from "./products/m11";
import m15Product from "./products/m15";
import m16Product from "./products/m16";
import q7Product from "./products/q7";
import s9Product from "./products/s9";
import s690Product from "./products/s690";

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

export const products: ProductContent[] = [
  a8Product,
  df1Product,
  kxProduct,
  m11Product,
  m15Product,
  m16Product,
  q7Product,
  s9Product,
  s690Product,
];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
