import type { ProductContent } from "../products";

const zl9Product: ProductContent = {
  // slug: 強調長軸距和巡航定位
  slug: "zl-9-1500w-long-wheelbase-electric-moped",
  name: "ZL-9 Series",
  // Headline: 突出 "Grand Tourer" (GT) 的概念
  headline: "ZL-9 Series Electric Moped - 1500W Long-Wheelbase Grand Tourer",
  
  description:
    "Engineered for the long haul. The ZL-9 is a grand touring electric moped featuring an class-leading 1430mm extended wheelbase. Paired with a 1500W motor, it delivers exceptional stability and comfort for long-distance commuting and two-up riding.",
  
  // 突出長途騎行的舒適性和安全性
  specIntro:
    "Experience unmatched ride quality. The ZL-9's extended chassis provides a spacious operator environment and predictable handling, making it the definitive choice for riders who prioritize comfort and stability on extended journeys.",
  
  specBullets: [
    "Class-leading 1430mm wheelbase for superior stability and passenger room.", // 核心賣點
    "1500W motor provides effortless cruising power at 60 km/h.",
    "Full-size frame with a comfortable 760mm seat height for relaxed posture.",
    "Dual hydraulic disc brakes for reliable stopping power with a passenger.", // 帶上乘客也能剎住
  ],

  scenarios: [
    {
      title: "Long-Distance Commute",
      subtitle: "Stable cross-city travel.",
      iconClass: "fa-solid fa-route", // 強調路線/旅程
    },
    {
      title: "Two-Up Riding",
      subtitle: "Comfortable for two people.",
      iconClass: "fa-solid fa-user-group", // 強調雙載
    },
    {
      title: "Weekend Cruising",
      subtitle: "Leisurely and relaxed rides.",
      iconClass: "fa-solid fa-map-location-dot", // 強調探索/巡航
    },
  ],

  // 圖片 slug 多樣化
  mainImage: "/images/zl-9/zl-9-1500w-long-wheelbase-electric-moped.webp",
  sliderImage: "/images/zl-9/ZL-9-Series-Electric-Moped-Grand-Tourer.webp",
  images: [
    {
      id: 1,
      src: "/images/zl-9/zl-9-1500w-long-wheelbase-electric-moped.webp",
      alt: "ZL-9 long-wheelbase electric moped side view, highlighting stability",
    },
    {
      id: 2,
      // slug 示例：優點 + 車型
      src: "/images/zl-9/comfortable-two-up-seating-on-zl-9-moped.webp",
      alt: "Spacious seat on the ZL-9 designed for rider and passenger comfort",
    },
    {
      id: 3,
      src: "/images/zl-9/zl-9-front-hydraulic-disc-brake-system.webp",
      alt: "Close-up of the front hydraulic disc brake for superior safety",
    },
    {
      id: 4,
      src: "/images/zl-9/zl-9-1500w-brushless-motor-hub.webp",
      alt: "1500W high-torque brushless motor integrated into the rear wheel",
    },
    {
      id: 5,
      // slug 示例：場景 + 車型
      src: "/images/zl-9/urban-cruising-with-the-zl-9-electric-moped.webp",
      alt: "The ZL-9 electric moped cruising smoothly on an open city road",
    },
    {
      id: 6,
      src: "/images/zl-9/zl-9-digital-instrument-cluster.webp",
      alt: "Modern digital instrument cluster showing speed and battery life",
    },
    {
      id: 7,
      src: "/images/zl-9/zl-9-rear-suspension-for-comfort.webp",
      alt: "Dual rear shock absorbers for a comfortable ride quality",
    },
    {
      id: 8,
      src: "/images/zl-9/zl-9-led-headlight-and-signal-lights.webp",
      alt: "Bright LED headlight system for excellent night visibility",
    },
  ],

  highlights: [
    { iconClass: "fas fa-ruler-horizontal", label: "1430mm Wheelbase" }, // 核心賣點
    { iconClass: "fas fa-users", label: "Two-Up Ready" }, // 核心賣點
    { iconClass: "fas fa-motorcycle", label: "1500W Power" },
    { iconClass: "fas fa-tachometer-alt", label: "60 km/h Speed" },
  ],

  pricing: [
    { moq: "MOQ 5+", tag: "Sample Order", price: "Standard" },
    { moq: "MOQ 24+", tag: "20ft Container", price: "Save 5%" },
    { moq: "MOQ 48+", tag: "40ft HQ", price: "Save 12%" },
    { moq: "MOQ 100+", tag: "Distributor", price: "Save 18%" },
  ],

  // 嚴格還原規格
  specs: [
    { label: "Rated Power", value: "1500W Brushless DC" },
    { label: "Top Speed", value: "60 km/h" },
    { label: "Battery Type", value: "Lead-acid / Lithium" },
    { label: "Battery Voltage", value: "60V / 72V" },
    { label: "Charging Voltage", value: "110V / 220V" },
    { label: "Tires", value: "F/R 90/80-12 Tubeless" },
    { label: "Brake System", value: "F/R Hydraulic Disk/Disk" },
    { label: "Seat Height", value: "760 mm" },
    { label: "Dimensions", value: "1910 × 700 × 1180 mm" },
    { label: "Wheelbase", value: "1430 mm (Extended)" }, // 註明超長
    { label: "Net Weight", value: "72 kg (w/o Battery)" },
  ],

  // FAQ 聚焦於 ZL-9 自身的長軸距和巡航特性
  faqs: [
    {
      question: "What is the primary benefit of the 1430mm extended wheelbase?",
      answer:
        "The long wheelbase provides exceptional straight-line stability at high speeds and creates a more spacious, comfortable seating area for both the rider and a passenger.",
    },
    {
      question: "Is the ZL-9 comfortable for long-distance riding?",
      answer:
        "Yes. It's specifically designed for cruising. The relaxed ergonomics, long wheelbase, and plush suspension work together to minimize rider fatigue on longer journeys.",
    },
    {
      question: "How does the 1500W motor perform on this chassis?",
      answer:
        "The 1500W motor is tuned for strong mid-range torque, providing smooth acceleration and the ability to maintain 60km/h cruising speed effortlessly, even with a passenger.",
    },
    {
      question: "Is this model suitable for beginners?",
      answer:
        "While powerful, the ZL-9's predictable handling and stable nature make it manageable for confident beginners. The 760mm seat height fits most riders.",
    },
    {
      question: "What is the real-world range with a 72V Lithium battery?",
      answer:
        "With a 72V 35Ah Lithium pack, you can expect a real-world range of 70-80km under mixed riding conditions, making it ideal for cross-city commutes.",
    },
    {
      question: "Can I install a large cargo box on the ZL-9?",
      answer:
        "Yes, the extended rear section supports most large top cases, and we can provide a compatible mounting plate specification for secure installation.",
    },
  ],

  shippingSections: [
    {
      title: "Packaging Details",
      items: [
        { label: "Dimensions", value: "185 × 55 × 85 cm (SKD)" },
        { label: "Gross Weight", value: "Approx. 135 kg" }, // 72kg車+電池+包裝
        {
          label: "Protection Level",
          value: "Heavy-Duty Steel Frame + Carton",
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
        { label: "20GP Capacity", value: "22 Units (SKD)" },
        {
          label: "40HQ Capacity",
          value: "48 Units (CBU - Fully Built)",
        },
        {
          label: "CKD Capacity (Parts)",
          value: "80-90 Units (Assembly Line Req.)",
        },
      ],
    },
    {
      title: "Logistics & Compliance",
      items: [
        { label: "Lead Time", value: "25-30 days (Production)" },
        { label: "Battery Compliance", value: "MSDS / UN38.3 Certified" },
        { label: "Incoterms", value: "EXW, FOB, CIF" },
        { label: "Loading Ports", value: "Ningbo / Shanghai" },
        { label: "Payment Terms", value: "30% Deposit, Balance before BL release" },
      ],
    },
  ],
  defaultPower: "1500W",
  powerOptions: ["1500W"],
  defaultBattery: "72V Lead-acid",
  batteryOptions: ["60V Lead-acid", "60V Lithium", "72V Lead-acid", "72V Lithium"],
};

export default zl9Product;
