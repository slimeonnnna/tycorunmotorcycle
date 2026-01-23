import type { ProductContent } from "../products";

const zbProduct: ProductContent = {
  // slug: 型号+动力+核心卖点(运动/高姿态)
  slug: "zb-series-1200w-sport-electric-moped-high-stance",
  name: "ZB Series",
  // Headline: 强调运动性能和骑行姿态
  headline: "ZB Series Sport Electric Moped - 1200W High-Stance Commuter",
  
  description:
    "A sport-tuned platform for the discerning urban rider. The ZB Series features a responsive 1200W motor, a commanding 800mm seat height, and agile handling, engineered for dynamic performance in city traffic.",
  
  // 强调高座高带来的视野优势和运动感
  specIntro:
    "Experience a commanding view of the road. With an elevated 800mm seat height and sport-calibrated suspension, the ZB Electric Moped offers superior traffic visibility and responsive cornering.",
  
  specBullets: [
    "1200W high-torque motor for rapid acceleration and 55 km/h top speed.",
    "Elevated 800mm seat height for a commanding, upright riding posture.", // 核心卖-点
    "Short 1300mm wheelbase combined with 12-inch tires for nimble handling.",
    "Dual hydraulic disc brakes ensure precise, sport-level stopping power.",
  ],

  scenarios: [
    {
      title: "Urban Sport Riding",
      subtitle: "Dynamic daily commuting.",
      iconClass: "fa-solid fa-bolt-lightning",
    },
    {
      title: "Fleet Rental",
      subtitle: "For taller riders & tourists.",
      iconClass: "fa-solid fa-arrows-up-down", // 强调身高适应性
    },
    {
      title: "Express Delivery",
      subtitle: "Agile, high-visibility platform.",
      iconClass: "fa-solid fa-eye", // 强调视野
    },
  ],

  // 图片路径假设为 zb 目录
  mainImage: "/images/zb/zb-series-1200w-electric-moped-side-profile.webp",
  sliderImage: "/images/zb/ZB-Series-Electric-Moped-1200W-Sport.webp",
  images: [
    {
      id: 1,
      src: "/images/zb/zb-series-1200w-electric-moped-side-profile.webp",
      alt: "ZB series 1200W electric moped side profile view",
    },
    {
      id: 2,
      // slug: 优点 + 车型
      src: "/images/zb/high-stance-1200w-electric-moped-zb-series.webp",
      alt: "ZB series electric moped side view showcasing its high 800mm seat",
    },
    {
      id: 3,
      src: "/images/zb/zb-series-moped-front-led-headlight.webp",
      alt: "Aggressive front fascia design with bright LED headlight system",
    },
    {
      id: 4,
      // slug: 零部件 + 优点
      src: "/images/zb/zb-series-dual-hydraulic-disc-brakes.webp",
      alt: "Close-up of the front and rear hydraulic disc brakes for safety",
    },
    {
      id: 5,
      src: "/images/zb/zb-series-digital-dashboard-display.webp",
      alt: "Modern digital dashboard with speed, battery, and mode indicators",
    },
    {
      id: 6,
      // slug: 场景 + 车型
      src: "/images/zb/agile-urban-commuting-zb-electric-moped.webp",
      alt: "ZB electric moped demonstrating agile handling in a city environment",
    },
    {
      id: 7,
      src: "/images/zb/zb-series-battery-options-60v-72v.webp",
      alt: "Under-seat compartment for 60V or 72V battery configurations",
    },
    {
      id: 8,
      src: "/images/zb/zb-series-12-inch-tubeless-tires.webp",
      alt: "Durable 90/70-12 tubeless tires for urban roads",
    },
    {
      id: 9,
      src: "/images/zb/zb-series-sport-design-details.webp",
      alt: "Sporty design elements and build quality of the ZB series",
    },
  ],

  highlights: [
    { iconClass: "fas fa-bolt", label: "1200W Sport Tuned" },
    { iconClass: "fas fa-ruler-vertical", label: "800mm Seat Height" }, // 核心卖点
    { iconClass: "fas fa-tachometer-alt", label: "55 km/h Speed" },
    { iconClass: "fas fa-compress-arrows-alt", label: "Compact Wheelbase" }, // 强调轴距短，灵活
  ],

  pricing: [
    { moq: "MOQ 10+", tag: "LCL Trial", price: "Standard" },
    { moq: "MOQ 24+", tag: "20ft Container", price: "Save 8%" },
    { moq: "MOQ 50+", tag: "40ft HQ", price: "Save 15%" },
    { moq: "MOQ 100+", tag: "Distributor", price: "Save 20%" },
  ],

  // 严格还原规格
  specs: [
    { label: "Rated Power", value: "1200W Brushless DC" },
    { label: "Top Speed", value: "55 km/h" },
    { label: "Battery Type", value: "Lead-acid / Lithium" },
    { label: "Battery Voltage", value: "60V / 72V" },
    { label: "Charging Voltage", value: "110V / 220V" },
    { label: "Tires", value: "F/R 90/70-12 Tubeless" },
    { label: "Brake System", value: "F/R Hydraulic Disk/Disk" },
    { label: "Seat Height", value: "800 mm" },
    { label: "Dimensions", value: "1880 × 690 × 1160 mm" },
    { label: "Wheelbase", value: "1300 mm" },
    { label: "Net Weight", value: "68.3 kg (w/o Battery)" },
  ],

  // FAQ 聚焦于 ZB 的独特卖点：座高和操控
  faqs: [
    {
      question: "Who is the 800mm seat height best suited for?",
      answer:
        "The 800mm seat height provides a more commanding and upright riding position, ideal for taller riders (175cm+) or anyone who prefers better visibility over traffic.",
    },
    {
      question: "How does the short wheelbase affect handling?",
      answer:
        "The compact 1300mm wheelbase makes the ZB exceptionally agile and quick to turn, perfect for navigating tight city corners and filtering through congested traffic.",
    },
    {
      question: "Is the ZB model comfortable for long rides?",
      answer:
        "Yes, the higher seat and ergonomic design allow for a more natural leg position, reducing fatigue on longer urban commutes compared to lower, more compact scooters.",
    },
    {
      question: "What is the real-world range with the 72V battery?",
      answer:
        "With a 72V 32Ah Lithium battery, riders can expect a range of 60-70km, depending on riding style and terrain. This is ample for most daily urban commuting needs.",
    },
    {
      question: "Can I install a delivery box on the ZB?",
      answer:
        "Yes, the standard rear grab rail can be replaced with a universal mounting plate to accommodate most standard delivery boxes for light courier use.",
    },
    {
      question: "What certifications are available for the ZB Series?",
      answer:
        "The ZB Series is available with EEC (L1e/L3e) certification for European markets and can be configured to meet other regional standards upon request.",
    },
  ],

  shippingSections: [
    {
      title: "Packaging Details",
      items: [
        { label: "Dimensions", value: "180 × 50 × 85 cm (SKD)" }, // 相对紧凑的包装
        { label: "Gross Weight", value: "Approx. 120 kg" }, // 68kg车 + 电池 + 包装
        {
          label: "Protection Level",
          value: "Steel Frame + Export Carton",
        },
        {
          label: "In the Box",
          value: "Vehicle, Charger, Mirrors, Keys",
        },
      ],
    },
    {
      title: "Container Loading Efficiency",
      items: [
        { label: "20GP Capacity", value: "24 Units (SKD)" },
        {
          label: "40HQ Capacity",
          value: "52 Units (CBU)",
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
  defaultPower: "1200W",
  powerOptions: ["1200W"],
  defaultBattery: "72V Lead-acid",
  batteryOptions: ["60V Lead-acid", "60V Lithium", "72V Lead-acid", "72V Lithium"],
};

export default zbProduct;
