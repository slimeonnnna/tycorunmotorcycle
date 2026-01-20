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

export type ProductContent = {
  slug: string;
  name: string;
  headline: string;
  description: string;
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
  defaultPower: string;
  powerOptions: string[];
  defaultBattery: string;
  batteryOptions: string[];
};

export const products: ProductContent[] = [
  {
    slug: 'a8-series-1000w-electric-moped',
    name: 'A8 Series',
    headline: 'A8 Series Electric Moped - 1000W City Commuter',
    description:
      'A8 Series electric moped with 1000W rated power, 48 km/h top speed, and 60V/72V battery options, built for efficient urban commuting and delivery use.',
    specIntro:
      'The A8 Series is tuned for urban delivery and commuting, pairing reliable hardware with efficient energy use.',
    specBullets: [
      'Stable chassis geometry for stop-and-go routes.',
      'Dual battery voltage options to match fleet needs.',
      'Disc brakes front and rear for confident control.',
      'Compact footprint for dense city streets.',
    ],
    scenarios: [
      {
        title: 'Last-Mile Parcel',
        subtitle: 'High-density urban dispatch.',
        iconClass: 'fa-solid fa-box',
      },
      {
        title: 'Food & Grocery',
        subtitle: 'Agile routing for peak hours.',
        iconClass: 'fa-solid fa-utensils',
      },
      {
        title: 'Campus Mobility',
        subtitle: 'Security patrol & staff transit.',
        iconClass: 'fa-solid fa-building-shield',
      },
    ],
    mainImage: '/images/products/a8-series-electric-moped-strong-load-capacity.webp',
    images: [
      {
        id: 1,
        src: '/images/products/a8-series-electric-moped-for-urban-delivery.webp',
        alt: 'A8 series electric moped for urban delivery',
      },
      {
        id: 2,
        src: '/images/products/a8-series-electric-moped-1000w-power-version.webp',
        alt: 'A8 series electric moped 1000W power version',
      },
      {
        id: 3,
        src: '/images/products/a8-series-electric-moped-high-efficiency-commuter.webp',
        alt: 'A8 series electric moped high efficiency commuter',
      },
      {
        id: 4,
        src: '/images/products/a8-series-electric-moped-durable-commercial-use.webp',
        alt: 'A8 series electric moped durable commercial use',
      },
      {
        id: 5,
        src: '/images/products/a8-series-electric-moped-compact-body-design.webp',
        alt: 'A8 series electric moped compact body design',
      },
      {
        id: 6,
        src: '/images/products/a8-series-electric-moped-stable-ride-platform.webp',
        alt: 'A8 series electric moped stable ride platform',
      },
      {
        id: 7,
        src: '/images/products/a8-series-electric-moped-fast-charging-support.webp',
        alt: 'A8 series electric moped fast charging support',
      },
      {
        id: 8,
        src: '/images/products/a8-series-electric-moped-multi-battery-option.webp',
        alt: 'A8 series electric moped multi battery option',
      },
      {
        id: 9,
        src: '/images/products/a8-series-electric-moped-48kmh-top-speed.webp',
        alt: 'A8 series electric moped 48 km/h top speed',
      },
      {
        id: 10,
        src: '/images/products/a8-series-electric-moped-strong-load-capacity.webp',
        alt: 'A8 series electric moped strong load capacity',
      },
    ],
    highlights: [
      { iconClass: 'fas fa-motorcycle', label: '1000W Rated Power' },
      { iconClass: 'fas fa-tachometer-alt', label: '48 km/h Top Speed' },
      { iconClass: 'fas fa-battery-full', label: '60V/72V Battery' },
      { iconClass: 'fas fa-dot-circle', label: 'Front/Rear Disc Brakes' },
    ],
    pricing: [
      { moq: 'MOQ 10+', tag: 'LCL Trial', price: 'Standard' },
      { moq: 'MOQ 24+', tag: '20ft Container', price: 'Save 8%' },
      { moq: 'MOQ 50+', tag: '40ft HQ', price: 'Save 15%' },
      { moq: 'MOQ 100+', tag: 'Distributor', price: 'Save 20%' },
    ],
    specs: [
      { label: 'Rated Power', value: '1000W' },
      { label: 'Top Speed', value: '48 km/h' },
      { label: 'Battery Type', value: 'Lead-acid/Lithium' },
      { label: 'Battery Voltage', value: '60V/72V' },
      { label: 'Charging Voltage', value: '110V/220V' },
      { label: 'Tire', value: 'F/R 3-10' },
      { label: 'Brake', value: 'F/R Disk/Disk' },
      { label: 'Seat Height', value: '790 mm' },
      { label: 'Overall Size', value: '1850 × 710 × 1130 mm' },
      { label: 'Wheel Base', value: '1340 mm' },
      { label: 'Net Weight', value: '66.3 kg' },
    ],
    defaultPower: '1000W',
    powerOptions: ['1000W'],
    defaultBattery: 'Lead-acid',
    batteryOptions: ['Lead-acid', 'Lithium'],
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
