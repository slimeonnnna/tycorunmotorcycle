import type { ProductContent } from "../products";

const e57Product: ProductContent = {
  // slug: 强调中置电机和换电
  slug: "e57-mid-drive-electric-motorcycle-battery-swapping",
  name: "E57 Series",
  // Headline: 定义其为高性能、换电旗舰
  headline: "E57 Mid-Drive Electric Motorcycle - High-Performance Swapping Platform",
  
  description:
    "The definitive flagship for battery swapping networks. The E57 is a true electric motorcycle, featuring a high-torque mid-drive motor, chain transmission, and large 18-inch wheels. Engineered for zero downtime and maximum operational efficiency in high-utilization fleets.",
  
  // 强调其卓越的操控性和原生换电设计
  specIntro:
    "Experience superior handling and instant energy replenishment. The E57's mid-drive architecture provides a perfectly balanced center of gravity, while its native battery swapping capability eliminates charging entirely.",
  
  specBullets: [
    "High-torque 4.5kW mid-drive motor with 9.0kW peak output.", // 核心卖点
    "Dedicated battery swapping design for 24/7 fleet operations.", // 核心卖点
    "Large 18-inch wheels for superior stability and all-terrain capability.", // 核心卖点
    "Advanced dual rocker arm suspension for a smooth, controlled ride.",
  ],

  scenarios: [
    {
      title: "Swapping Networks",
      subtitle: "Flagship vehicle for operators.",
      iconClass: "fa-solid fa-network-wired",
    },
    {
      title: "Police & Patrol",
      subtitle: "Rapid response & pursuit.",
      iconClass: "fa-solid fa-shield-halved",
    },
    {
      title: "Premium Rental",
      subtitle: "High-performance fleet option.",
      iconClass: "fa-solid fa-star",
    },
  ],

  // 图片 slug 多样化
  mainImage: "/images/e57/e57-mid-drive-electric-motorcycle-yellow-side-view.webp",
  sliderImage: "/images/e57/E57-Series-Mid-Drive-Motorcycle-Swapping-Platform.webp",
  images: [
    // === 主推色：黄色 (Gold/Yellow) ===
    {
      id: 1,
      src: "/images/e57/e57-mid-drive-electric-motorcycle-yellow-side-view.webp",
      alt: "Side profile of the yellow E57 mid-drive electric motorcycle",
    },
    {
      id: 2,
      src: "/images/e57/e57-yellow-motorcycle-front-three-quarters.webp",
      alt: "Front three-quarters view of the E57 in signature yellow",
    },
    {
      id: 3,
      // slug: 优点 + 车型
      src: "/images/e57/high-torque-mid-drive-motor-on-e57-motorcycle.webp",
      alt: "Close-up of the 9.0kW peak power mid-drive motor and chain transmission",
    },
    {
      id: 4,
      src: "/images/e57/e57-18-inch-large-wheels-for-stability.webp",
      alt: "Large 18-inch aluminum wheels providing superior stability",
    },
    {
      id: 5,
      src: "/images/e57/e57-dual-battery-swapping-bay.webp",
      alt: "Dual battery bay designed for rapid battery swapping",
    },
    
    // === 颜色：白色 (White) ===
    {
      id: 6,
      src: "/images/e57/e57-electric-motorcycle-white-color-option.webp",
      alt: "The E57 electric motorcycle in a clean white finish",
    },
    {
      id: 7,
      src: "/images/e57/e57-white-motorcycle-rear-view.webp",
      alt: "Rear view of the white E57 showing LED tail light",
    },
    {
      id: 8,
      src: "/images/e57/e57-white-version-instrument-cluster.webp",
      alt: "Digital instrument cluster on the white E57 model",
    },
    {
      id: 9,
      src: "/images/e57/e57-white-suspension-and-brake-detail.webp",
      alt: "Suspension and brake detail on the white E57",
    },
    {
      id: 10,
      src: "/images/e57/e57-white-motorcycle-in-urban-setting.webp",
      alt: "White E57 electric motorcycle parked in a modern urban environment",
    },
    
    // === 颜色：红色 (Red) ===
    {
      id: 11,
      src: "/images/e57/e57-electric-motorcycle-red-color-option.webp",
      alt: "The E57 electric motorcycle in a vibrant red color",
    },
    {
      id: 12,
      src: "/images/e57/e57-red-motorcycle-side-profile-detail.webp",
      alt: "Detailed side profile of the red E57",
    },
    {
      id: 13,
      src: "/images/e57/e57-red-motorcycle-action-shot.webp",
      alt: "Action shot of the red E57 electric motorcycle on the road",
    },
    {
      id: 14,
      src: "/images/e57/e57-red-motorcycle-handlebar-and-controls.webp",
      alt: "Handlebar and control layout of the red E57",
    },
    {
      id: 15,
      src: "/images/e57/e57-red-motorcycle-double-rocker-arm.webp",
      alt: "Double rocker arm suspension detail on the red E57",
    },

    // === 颜色：灰色/黑色 (Gray/Black) ===
    {
      id: 16,
      src: "/images/e57/e57-electric-motorcycle-gray-color-option.webp",
      alt: "The E57 electric motorcycle in a stealthy gray finish",
    },
    {
      id: 17,
      src: "/images/e57/e57-gray-motorcycle-front-headlight.webp",
      alt: "LED headlight design on the gray E57",
    },
    {
      id: 18,
      src: "/images/e57/e57-gray-motorcycle-chain-drive-system.webp",
      alt: "Chain drive transmission system on the gray model",
    },
    {
      id: 19,
      src: "/images/e57/e57-gray-motorcycle-seat-and-tank.webp",
      alt: "Ergonomic seat and bodywork of the gray E57",
    },
    {
      id: 20,
      src: "/images/e57/e57-gray-motorcycle-studio-shot.webp",
      alt: "Studio shot of the gray E57 electric motorcycle",
    },
    
    // === 颜色：绿色 (Green) ===
    {
      id: 21,
      src: "/images/e57/e57-electric-motorcycle-green-color-option.webp",
      alt: "The E57 electric motorcycle in a bold green color",
    },
    {
      id: 22,
      src: "/images/e57/e57-green-motorcycle-in-nature.webp",
      alt: "Green E57 motorcycle in a natural, outdoor setting",
    },
    {
      id: 23,
      src: "/images/e57/e57-green-motorcycle-rider-perspective.webp",
      alt: "Rider's perspective view from the green E57",
    },
    {
      id: 24,
      src: "/images/e57/e57-green-motorcycle-ground-clearance.webp",
      alt: "View showing the 185mm ground clearance of the green E57",
    },
    {
      id: 25,
      src: "/images/e57/e57-green-motorcycle-rear-three-quarters.webp",
      alt: "Rear three-quarters view of the green E57 model",
    },
  ],

  highlights: [
    { iconClass: "fas fa-cogs", label: "Mid-Drive Motor" }, // 核心卖点
    { iconClass: "fas fa-exchange-alt", label: "Swapping Ready" }, // 核心卖点
    { iconClass: "fas fa-bolt", label: "9.0kW Peak Power" },
    { iconClass: "fas fa-circle-notch", label: "18-inch Wheels" },
  ],

  pricing: [
    { moq: "MOQ 1+", tag: "Sample Order", price: "Standard" }, // 旗舰款允许单台试样
    { moq: "MOQ 10+", tag: "Pilot Fleet", price: "Save 5%" },
    { moq: "MOQ 50+", tag: "40ft HQ", price: "Save 12%" },
    { moq: "MOQ 100+", tag: "Operator", price: "Save 18%" },
  ],

  // 严格还原规格
  specs: [
    { label: "Rated Power", value: "4.5 kW" },
    { label: "Peak Power", value: "9.0 kW" },
    { label: "Peak Torque", value: "280 N·m" },
    { label: "Top Speed", value: "85 KM/H" },
    { label: "Acceleration (0-45 km/h)", value: "< 4.5 seconds" },
    { label: "Motor Type", value: "Mid Drive Motor" },
    { label: "Transmission", value: "Chain Drive 428" },
    { label: "Battery Interface", value: "Swap Station Only (No Charger)" },
    { label: "Suspension", value: "Double Rocker Arm" },
    { label: "Brake (Front)", value: "φ220mm Disc Brake" },
    { label: "Brake (Rear)", value: "φ130mm Drum Brake" },
    { label: "Wheels", value: "Aluminum F:1.4x18 / R:1.6x18" },
    { label: "Tires", value: "F:2.75-18 / R:3.00-18 Tube" },
    { label: "Ground Clearance", value: "185 mm" },
    { label: "Max Laden Mass", value: "225 kg" },
    { label: "Seat Height", value: "790 mm" },
    { label: "Dimensions", value: "2083 × 625 × 1090 mm" },
    { label: "Wheelbase", value: "1380 mm" },
    { label: "Net Weight", value: "86.8 kg (w/o Battery)" },
    { label: "Driving Modes", value: "ECO, NORMAL, SPORT, Turbo (Dual Bat)" },
    { label: "Climbing Capacity", value: "30° (17°)" },
    { label: "Lighting", value: "Full LED System" },
    { label: "Warranty", value: "18 months / 24,000 km" },
    { label: "Certificate", value: "EEC L3e" },
  ],

  // FAQ 聚焦于 E57 独特的技术特性
  faqs: [
    {
      question: "What are the main advantages of a mid-drive motor?",
      answer:
        "A mid-drive motor centralizes mass, significantly improving the motorcycle's balance and handling. It also allows for chain transmission, which is more efficient and durable for high-power applications.",
    },
    {
      question: "Is this motorcycle only for battery swapping networks?",
      answer:
        "Yes, the E57 is a dedicated swapping platform and does not include an on-board charger. This design reduces vehicle weight and complexity, optimizing it for fleet operations.",
    },
    {
      question: "What does 'Double Rocker Arm' suspension mean?",
      answer:
        "It's an advanced suspension linkage system that provides superior shock absorption and ride stability, especially on uneven surfaces, compared to simple swingarm designs.",
    },
    {
      question: "Why does the rear brake use a drum instead of a disc?",
      answer:
        "The φ130mm rear drum brake is a robust, low-maintenance choice that provides ample stopping power for the rear wheel, complementing the high-performance φ220mm front disc brake.",
    },
    {
      question: "What is required to activate 'Turbo' mode?",
      answer:
        "Turbo mode requires two batteries to be installed in parallel to provide the necessary current for peak 9.0kW power output.",
    },
    {
      question: "What does 'Climbing Capacity: 30° (17°)' mean?",
      answer:
        "This indicates the maximum theoretical climbing angle (30°) and the practical sustained climbing angle (17°) under load, showcasing the motor's powerful torque.",
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
        { label: "Lead Time", value: "30-40 days (Flagship Model)" },
        { label: "Battery Compliance", value: "MSDS / UN38.3 Certified" },
        { label: "Incoterms", value: "EXW, FOB, CIF" },
        { label: "Loading Ports", value: "Ningbo / Shanghai" },
      ],
    },
  ],
  defaultPower: "4.5kW",
  powerOptions: ["4.5kW"],
  defaultBattery: "72V Lithium",
  batteryOptions: ["72V Lithium"],
};

export default e57Product;