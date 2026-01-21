import type { ProductContent } from "../products";

const m16Product: ProductContent = {
  slug: "m16-series-1200w-electric-moped",
  name: "M16 Series",
  // 瀹氫綅锛氬己璋?"Moped" 鍏抽敭璇嶏紝绐佸嚭骞宠　鎬т笌鑸掗€傚害
  headline: "M16 Series Electric Moped - 1200W Balanced Urban Cruiser",
  
  description:
    "The definitive all-rounder for urban mobility. The M16 Electric Moped strikes the perfect balance between stability and agility, featuring a 1200W powertrain, a comfort-oriented 765mm seat height, and a widened chassis for superior handling confidence.",
  
  // 寮鸿皟浜轰綋宸ュ鍜岄亾璺瓨鍦ㄦ劅
  specIntro:
    "Engineered for the daily commute. With a 63.8kg mid-weight chassis and wider 740mm ergonomics, the M16 offers greater road presence and stability than compact scooters while maintaining urban maneuverability.",
  
  specBullets: [
    "1200W brushless motor for 55km/h sustained cruising speed.",
    "Balanced 63.8kg net weight for stable handling in crosswinds.", // 寮鸿皟閲嶉噺閫備腑甯︽潵鐨勭ǔ瀹氭€?
    "765mm standard seat height for optimal traffic visibility.", // 寮鸿皟瑙嗛噹
    "Dual disc brakes (F/R) for high-performance stopping power.",
  ],

  scenarios: [
    {
      title: "Daily Commute",
      subtitle: "Comfortable mid-range travel.",
      iconClass: "fa-solid fa-briefcase", // 寮鸿皟鍟嗗姟/閫氬嫟
    },
    {
      title: "Fleet Rental",
      subtitle: "Standard size for mixed users.",
      iconClass: "fa-solid fa-people-arrows", // 寮鸿皟鏅€傛€?
    },
    {
      title: "Urban Patrol",
      subtitle: "Agile security mobility.",
      iconClass: "fa-solid fa-user-shield",
    },
  ],

  // 鍋囪鍥剧墖璺緞涓?m16 鐩綍
  mainImage: "/images/m16/m16-series-1200w-electric-moped-view-01.webp",
  sliderImage: "/images/m16/m16-series-1200w-electric-moped-view-09.webp",
  images: [
    {
      id: 1,
      src: "/images/m16/m16-series-1200w-electric-moped-view-01.webp",
      alt: "M16 series electric moped side view for urban commuting",
    },
    {
      id: 2,
      src: "/images/m16/m16-series-1200w-electric-moped-view-02.webp",
      alt: "Wide handlebar design of M16 electric moped",
    },
    {
      id: 3,
      src: "/images/m16/m16-series-1200w-electric-moped-view-03.webp",
      alt: "Rear motor and tail light detail",
    },
    {
      id: 4,
      src: "/images/m16/m16-series-1200w-electric-moped-view-04.webp",
      alt: "LCD dashboard display showing speed and charge",
    },
    {
      id: 5,
      src: "/images/m16/m16-series-1200w-electric-moped-view-05.webp",
      alt: "Hydraulic front disc brake system",
    },
    {
      id: 6,
      src: "/images/m16/m16-series-1200w-electric-moped-view-06.webp",
      alt: "Comfortable 765mm height seat cushion",
    },
    {
      id: 7,
      src: "/images/m16/m16-series-1200w-electric-moped-view-07.webp",
      alt: "60V/72V battery compartment access",
    },
    {
      id: 8,
      src: "/images/m16/m16-series-1200w-electric-moped-view-08.webp",
      alt: "M16 electric moped riding on city street",
    },
  ],

  highlights: [
    { iconClass: "fas fa-motorcycle", label: "Full-Size Moped" }, // 寮鸿皟鏄叏灏哄 Moped锛屼笉鏄粦鏉胯溅
    { iconClass: "fas fa-tachometer-alt", label: "55 km/h Speed" },
    { iconClass: "fas fa-balance-scale", label: "Balanced Chassis" }, // 鏍稿績鍗栫偣锛氬钩琛?
    { iconClass: "fas fa-stop-circle", label: "Dual Disc Brakes" },
  ],

  pricing: [
    { moq: "MOQ 10+", tag: "LCL Trial", price: "Standard" },
    { moq: "MOQ 24+", tag: "20ft Container", price: "Save 8%" },
    { moq: "MOQ 50+", tag: "40ft HQ", price: "Save 15%" },
    { moq: "MOQ 100+", tag: "Distributor", price: "Save 20%" },
  ],

  specs: [
    { label: "Rated Power", value: "1200W High-Performance" },
    { label: "Top Speed", value: "55 km/h (Moped Class)" },
    { label: "Battery Type", value: "Lead-acid / Lithium" },
    { label: "System Voltage", value: "60V / 72V" },
    { label: "Charging", value: "110V-220V AC" },
    { label: "Tires", value: "F/R 3.00-10 Tubeless" },
    { label: "Braking System", value: "F/R Hydraulic Disc" },
    { label: "Seat Height", value: "765 mm (Standard)" }, // 寮鸿皟鏍囧噯楂樺害
    { label: "Dimensions", value: "1800 脳 740 脳 1110 mm" },
    { label: "Wheelbase", value: "1305 mm" },
    { label: "Net Weight", value: "63.8 kg (Balanced)" },
  ],

  faqs: [
    {
      question: "What is the difference between an Electric Moped (M16) and a Scooter?",
      answer:
        "Unlike kick-scooters, the M16 Moped features a full chassis, seated riding position, suspension, and road-legal lighting, offering superior safety and comfort for longer commutes.",
    },
    {
      question: "Is the M16 tuned more for comfort or agility?",
      answer:
        "The M16 leans toward comfort and stability with a wider stance and calmer steering feel. It stays composed at higher speeds and on rough city roads while keeping enough agility for daily commuting.",
    },
    {
      question: "Is the 1200W motor powerful enough for hills?",
      answer:
        "Yes. The 1200W powertrain provides significantly more torque than standard 800W models, easily handling 15-20掳 inclines common in urban overpasses and hilly districts.",
    },
    {
      question: "What is the battery range for the 72V version?",
      answer:
        "With a 72V 32Ah Lead-acid setup, expect a range of 60-70km. Lithium options can extend this further while reducing vehicle weight.",
    },
    {
      question: "Can this model be customized for delivery fleets?",
      answer:
        "Yes. While designed as a commuter, the sturdy rear handle can be replaced with a cargo rack box bracket for courier applications.",
    },
    {
      question: "What certifications are available?",
      answer:
        "We provide EEC (L1e/L3e) certification for Europe and DOT compliance for North America, ensuring the M16 can be legally registered as a moped.",
    },
  ],

  shippingSections: [
    {
      title: "Packaging Details",
      items: [
        { label: "Dimensions", value: "175 脳 50 脳 85 cm (SKD)" }, // 瀹藉害姣擬15绋嶅
        { label: "Gross Weight", value: "Approx. 115 kg" }, // 63.8kg杞?+ 鐢垫睜 + 鍖呰
        {
          label: "Protection Level",
          value: "Steel Frame + Export Carton",
        },
        {
          label: "In the Box",
          value: "Vehicle, Charger, Mirrors, Keys, Manual",
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
  defaultPower: "1200W",
  powerOptions: ["1200W"],
  defaultBattery: "72V Lead-acid",
  batteryOptions: ["60V Lead-acid", "60V Lithium", "72V Lead-acid", "72V Lithium"],
};

export default m16Product;
