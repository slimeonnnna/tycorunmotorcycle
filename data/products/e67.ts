import type { ProductContent } from "../products";

const e67Product: ProductContent = {
  // slug: 强调 10kW 峰值功率和旗舰地位
  slug: "e67-10kw-peak-performance-electric-motorcycle",
  name: "E67 Series",
  // Headline: 定义其为性能旗舰
  headline: "E67 Electric Motorcycle - 10kW Peak Performance Platform",
  
  description:
    "The apex of our engineering. The E67 is a performance-focused electric motorcycle featuring a 10kW peak power mid-drive motor, dual 72V30Ah batteries as standard, and a top speed of 95 km/h. It is the definitive choice for high-demand government fleets and professional rental services.",
  
  // 强调其卓越的动力和操控极限
  specIntro:
    "Engineered to dominate the road. The E67's advanced powertrain and dual-disc braking system provide unparalleled acceleration and control, while the standard dual-battery configuration ensures a 100km real-world range.",
  
  specBullets: [
    "10kW peak power from a high-output mid-drive motor.", // 核心卖点
    "Standard dual 72V30Ah battery configuration for 100km range.", // 核心卖点
    "Symmetrical φ220mm front and rear disc brakes for maximum stopping power.", // 核心卖点
    "Large 17-inch wheels and 195mm ground clearance for superior handling.",
  ],

  scenarios: [
    {
      title: "Police & Enforcement",
      subtitle: "High-speed pursuit and patrol.",
      iconClass: "fa-solid fa-user-shield",
    },
    {
      title: "Pro Rental & Touring",
      subtitle: "For experienced rider fleets.",
      iconClass: "fa-solid fa-route",
    },
    {
      title: "Tech Demonstrator",
      subtitle: "Flagship showroom model.",
      iconClass: "fa-solid fa-trophy",
    },
  ],

  // 图片 slug 多样化 (仅5张)
  mainImage: "/images/e67/e67-10kw-performance-electric-motorcycle-side.webp",
  sliderImage: "/images/e67/E67-Series-Electric-Motorcycle-Peak-Performance.webp",
  images: [
    {
      id: 1,
      src: "/images/e67/e67-10kw-performance-electric-motorcycle-side.webp",
      alt: "Side profile of the E67 high-performance electric motorcycle",
    },
    {
      id: 2,
      // slug: 优点 + 车型
      src: "/images/e67/dual-battery-system-for-100km-range-e67.webp",
      alt: "The dual 72V30Ah battery system providing 100km of range",
    },
    {
      id: 3,
      src: "/images/e67/e67-mid-drive-motor-and-chain-transmission.webp",
      alt: "Close-up of the 10kW peak power mid-drive motor and chain drive",
    },
    {
      id: 4,
      src: "/images/e67/e67-dual-disc-brake-system-17-inch-wheels.webp",
      alt: "Symmetrical front and rear 220mm disc brakes on 17-inch wheels",
    },
    {
      id: 5,
      src: "/images/e67/e67-digital-dashboard-with-turbo-mode.webp",
      alt: "Digital dashboard of the E67, highlighting the TURBO driving mode",
    },
  ],

  highlights: [
    { iconClass: "fas fa-bolt-lightning", label: "10kW Peak Power" }, // 升级图标
    { iconClass: "fas fa-gauge-high", label: "95 km/h Top Speed" },
    { iconClass: "fas fa-car-battery", label: "Dual Battery Standard" },
    { iconClass: "fas fa-road-barrier", label: "Dual Disc Brakes" },
  ],

  pricing: [
    { moq: "MOQ 1+", tag: "Sample / Demo", price: "Standard" }, // 旗舰款允许单台试样
    { moq: "MOQ 10+", tag: "Pilot Fleet", price: "Save 5%" },
    { moq: "MOQ 50+", tag: "40ft HQ", price: "Save 12%" },
    { moq: "MOQ 100+", tag: "Operator", price: "Save 18%" },
  ],

  // 严格还原规格
  specs: [
    { label: "Rated Power", value: "5.0 kW" },
    { label: "Peak Power", value: "10.0 kW" },
    { label: "Peak Torque", value: "280 N·m" },
    { label: "Top Speed", value: "95 KM/H" },
    { label: "Acceleration (0-45 km/h)", value: "3.5 Seconds" },
    { label: "Motor Type", value: "Mid Drive Motor" },
    { label: "Transmission", value: "Chain Drive" },
    { label: "Battery", value: "72V 30Ah × 2 (Standard)" },
    { label: "Range (Est.)", value: "100 KM" },
    { label: "Brake (Front)", value: "Φ220mm Hydraulic Disc" },
    { label: "Brake (Rear)", value: "Φ220mm Hydraulic Disc" },
    { label: "Wheels", value: "F: MT 1.85×17 / R: MT 2.50×17" },
    { label: "Tires", value: "F: 90/90-17 / R: 110/80-17" },
    { label: "Ground Clearance", value: "195 mm" },
    { label: "Max Laden Mass", value: "250 kg" },
    { label: "Seat Height", value: "790 mm" },
    { label: "Dimensions", value: "2083 × 625 × 1090 mm" },
    { label: "Wheelbase", value: "1390 mm" },
    { label: "Driving Modes", value: "ECO, NORMAL, SPORT, TURBO (60s)" },
    { label: "Climbing Capacity", value: "30% (17°)" },
    { label: "Lighting", value: "Full LED System" },
    { label: "Warranty", value: "18 Months" },
  ],

  // FAQ 聚焦于 E67 的极致性能和配置
  faqs: [
    {
      question: "What is the primary advantage of the E67's standard dual-battery system?",
      answer:
        "The dual-battery setup (total 4.32 kWh) provides a real-world range of 100km out of the box, eliminating range anxiety for long-distance patrols or touring without needing immediate swaps.",
    },
    {
      question: "How does the 'TURBO (60s)' mode work?",
      answer:
        "TURBO mode unleashes the motor's full 10.0kW peak power for a 60-second burst of maximum acceleration, ideal for overtaking or emergency response situations. It requires sufficient battery charge.",
    },
    {
      question: "Are the 17-inch wheels suitable for off-road use?",
      answer:
        "While the large 17-inch wheels and 195mm ground clearance provide excellent capability on unpaved roads and rough terrain, the E67 is primarily tuned for on-road performance.",
    },
    {
      question: "Is the braking system equipped with ABS or CBS?",
      answer:
        "The standard configuration features powerful independent hydraulic disc brakes. We offer optional CBS (Combined Braking System) or dual-channel ABS for fleet orders requiring advanced safety features.",
    },
    {
      question: "Is the E67 compatible with the same battery as the E57?",
      answer:
        "Yes, the E67 uses the same standard battery packs as our other swapping models, ensuring full compatibility within a mixed fleet and swapping network.",
    },
    {
      question: "What license is required to operate the E67?",
      answer:
        "With a top speed of 95 km/h, the E67 is classified as a full A1/A2 category motorcycle in most jurisdictions and requires the corresponding license.",
    },
  ],

  shippingSections: [
    {
      title: "Packaging & Loading",
      items: [
        { label: "SKD Loading (40HQ)", value: "105 Units" },
        { label: "CKD Loading (40HQ)", value: "145 Units" },
        {
          label: "Protection",
          value: "Heavy-Duty Steel Crate for Transport",
        },
        {
          label: "Documentation",
          value: "COC, Commercial Invoice, Packing List",
        },
      ],
    },
    {
      title: "Logistics & Compliance",
      items: [
        { label: "Lead Time", value: "35-45 days (Flagship Build)" },
        { label: "Battery Compliance", value: "MSDS / UN38.3 Certified" },
        { label: "Incoterms", value: "EXW, FOB, CIF" },
        { label: "Loading Ports", value: "Ningbo / Shanghai" },
      ],
    },
  ],
  defaultPower: "10.0 kW",
  powerOptions: ["10.0 kW"],
  defaultBattery: "72V 30Ah × 2",
  batteryOptions: ["72V 30Ah × 2"],
};

export default e67Product;
