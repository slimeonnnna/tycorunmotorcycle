import type { ProductContent } from "../products";

const xlProduct: ProductContent = {
  // slug: 强调多功能性和动力
  slug: "xl-series-1000w-versatile-urban-electric-moped",
  name: "XL Series",
  // Headline: 突出 "All-Rounder" (全能) 定位
  headline: "XL Series Electric Moped - 1000W Urban All-Rounder",
  
  description:
    "The ultimate do-it-all platform for urban mobility fleets. The XL Series is engineered for versatility, combining a powerful 1000W motor with a balanced 62kg chassis and dual disc brakes, making it the top choice for delivery, commuting, and rental applications.",
  
  // 强调其在各种场景下的适应性
  specIntro:
    "A single platform for diverse urban challenges. With its standard-size ergonomics and flexible battery architecture (Lead-acid/Lithium), the XL Series adapts to any business model, from high-mileage delivery to daily commuting.",
  
  specBullets: [
    "1000W high-torque motor for excellent acceleration and hill climbing.",
    "Dual hydraulic disc brakes (F/R) for superior all-weather stopping power.",
    "Full-size 1820mm frame offers a comfortable ride for both single and dual passengers.",
    "62kg balanced net weight ensures easy handling without sacrificing stability.",
  ],

  scenarios: [
    {
      title: "Food Delivery",
      subtitle: "Reliable for high-demand routes.",
      iconClass: "fa-solid fa-burger",
    },

    {
      title: "Daily Commute",
      subtitle: "Comfortable and powerful travel.",
      iconClass: "fa-solid fa-briefcase",
    },
    {
      title: "Fleet Rental",
      subtitle: "Durable and easy to maintain.",
      iconClass: "fa-solid fa-people-arrows",
    },
  ],

  // 图片 slug 多样化
  mainImage: "/images/xl/xl-series-1000w-versatile-electric-moped-side.webp",
  sliderImage: "/images/xl/XL-Series-Electric-Moped-Urban-All-Rounder.webp",
  images: [
    {
      id: 1,
      src: "/images/xl/xl-series-1000w-versatile-electric-moped-side.webp",
      alt: "XL series 1000W versatile electric moped for urban use",
    },
    {
      id: 2,
      // slug: 优点 + 车型
      src: "/images/xl/high-torque-1000w-motor-on-xl-moped.webp",
      alt: "Close-up of the 1000W high-torque motor hub",
    },
    {
      id: 3,
      src: "/images/xl/xl-moped-dual-hydraulic-disc-brakes.webp",
      alt: "Front and rear hydraulic disc brakes for maximum safety",
    },
    {
      id: 4,
      src: "/images/xl/xl-series-digital-lcd-dashboard.webp",
      alt: "Digital LCD dashboard with speed, battery, and mileage display",
    },
    {
      id: 5,
      // slug: 场景 + 车型
      src: "/images/xl/comfortable-commuting-seat-on-xl-moped.webp",
      alt: "Ergonomic 740mm seat designed for long commutes",
    },
    {
      id: 6,
      src: "/images/xl/xl-moped-led-headlight-system.webp",
      alt: "Bright LED headlight system for enhanced night visibility",
    },
    {
      id: 7,
      src: "/images/xl/xl-moped-60v-72v-battery-options.webp",
      alt: "Flexible battery bay supporting both 60V and 72V configurations",
    },
    {
      id: 8,
      src: "/images/xl/xl-moped-in-city-environment.webp",
      alt: "XL electric moped showcasing its agility in a city environment",
    },
  ],

  highlights: [
    { iconClass: "fas fa-bolt", label: "1000W Power" },
    { iconClass: "fas fa-tachometer-alt", label: "48 km/h Speed" },
    { iconClass: "fas fa-cogs", label: "Versatile Platform" }, // 核心卖点：多功能
    { iconClass: "fas fa-stop-circle", label: "Dual Disc Brakes" },
  ],

  pricing: [
    { moq: "MOQ 10+", tag: "LCL Trial", price: "Standard" },
    { moq: "MOQ 24+", tag: "20ft Container", price: "Save 8%" },
    { moq: "MOQ 50+", tag: "40ft HQ", price: "Save 15%" },
    { moq: "MOQ 100+", tag: "Distributor", price: "Save 20%" },
  ],

  // 严格还原规格
  specs: [
    { label: "Rated Power", value: "1000W Brushless DC" },
    { label: "Top Speed", value: "48 km/h (L1e Compliant)" },
    { label: "Battery Type", value: "Lead-acid / Lithium (Selectable)" },
    { label: "Battery Voltage", value: "60V / 72V" },
    { label: "Charging Voltage", value: "110V / 220V" },
    { label: "Tires", value: "F/R 3.0-10 Tubeless" },
    { label: "Brake System", value: "F/R Hydraulic Disk/Disk" },
    { label: "Seat Height", value: "740 mm" },
    { label: "Dimensions", value: "1820 × 720 × 1110 mm" },
    { label: "Wheelbase", value: "1340 mm" },
    { label: "Net Weight", value: "62 kg (w/o Battery)" },
  ],

  // FAQ 聚焦于多功能性、维护和法规
  faqs: [
    {
      question: "Is the 48 km/h speed limit adjustable?",
      answer:
        "Yes. While the standard is 48 km/h to comply with L1e regulations, we can configure a higher top speed for markets where regulations permit.",
    },
    {
      question: "What makes the XL Series 'versatile'?",
      answer:
        "Its balanced chassis, powerful 1000W motor, and modular rear rack system allow it to be configured for personal commuting, high-frequency delivery, or rental fleet use with minimal changes.",
    },
    {
      question: "Which battery type is recommended for high-mileage use?",
      answer:
        "For daily use exceeding 50km, the 72V Lithium battery option is recommended. It provides the best range and longevity, and significantly reduces the vehicle's overall weight.",
    },
    {
      question: "How does the dual disc brake system perform under load?",
      answer:
        "The hydraulic dual disc brakes are engineered to provide consistent, powerful stopping performance even with a passenger or cargo, ensuring safety in demanding urban traffic.",
    },
    {
      question: "What is the container loading capacity for the XL Series?",
      answer:
        "A 40HQ container can accommodate approximately 50 units (CBU) or 85+ units (SKD), making it a cost-effective choice for bulk importers.",
    },
    {
      question: "Are spare parts for the XL Series easy to source?",
      answer:
        "Yes. We use industry-standard components for the braking system, tires, and controller, ensuring that spare parts are affordable and widely available in most markets.",
    },
  ],

  shippingSections: [
    {
      title: "Packaging Details",
      items: [
        { label: "Dimensions", value: "175 × 50 × 85 cm (SKD)" }, // 针对1820mm车身的包装
        { label: "Gross Weight", value: "Approx. 110 kg" }, // 62kg车+电池+包装
        {
          label: "Protection Level",
          value: "Steel Frame + Export Carton",
        },
        {
          label: "In the Box",
          value: "Vehicle, Charger, Mirrors, Keys, COC Document",
        },
      ],
    },
    {
      title: "Container Loading Efficiency",
      items: [
        { label: "20GP Capacity", value: "26 Units (SKD)" },
        {
          label: "40HQ Capacity",
          value: "54 Units (CBU - Optimized)",
        },
        {
          label: "CKD Capacity (Parts)",
          value: "90+ Units (Assembly Required)",
        },
      ],
    },
    {
      title: "Logistics & Compliance",
      items: [
        { label: "Lead Time", value: "20-25 days (Production)" },
        { label: "Battery Compliance", value: "MSDS / UN38.3 Certified" },
        { label: "Incoterms", value: "EXW, FOB, CIF" },
        { label: "Loading Ports", value: "Ningbo / Shanghai" },
        { label: "Payment Terms", value: "30% Deposit, Balance before BL release" },
      ],
    },
  ],
  defaultPower: "1000W",
  powerOptions: ["1000W"],
  defaultBattery: "60V Lead-acid",
  batteryOptions: ["60V Lead-acid", "60V Lithium", "72V Lead-acid", "72V Lithium"],
};

export default xlProduct;