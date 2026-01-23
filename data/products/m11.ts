import type { ProductContent } from "../products";

const m11Product: ProductContent = {
  slug: "m11-series-1200w-electric-motorcycle",
  name: "M11 Series",
  // 定位：强调高性能、极速、快递
  headline: "M11 Series High-Performance Electric Motorcycle - 1200W Express Platform",
  
  description:
    "Built for time-sensitive operations. The M11 Series integrates a powerful 1200W motor with a 55 km/h top speed and dual-disc braking system, making it the premier choice for express couriers and hilly terrain logistics.",
  
  // 强调底盘稳重，适合高速行驶
  specIntro:
    "Engineered for stability at speed. With a substantial 72.7kg chassis and precision hydraulic braking, the M11 delivers confidence-inspiring handling for riders delivering under tight deadlines.",
  
  specBullets: [
    "1200W high-output powertrain for superior gradeability (20°+).", // 强调爬坡
    "Dual hydraulic disc brakes (F/R) for instant stopping power at 55km/h.", // 强调双碟刹安全
    "Reinforced suspension tuned for high-speed stability.", 
    "Broad 3.00-10 tires for enhanced cornering grip and load support.",
  ],

  scenarios: [
    {
      title: "Express Courier",
      subtitle: "Time-critical document & parcel run.",
      iconClass: "fa-solid fa-stopwatch", // 强调时间/速度
    },
    {
      title: "Food Delivery",
      subtitle: "Faster arrival for hot meals.",
      iconClass: "fa-solid fa-burger",
    },
    {
      title: "Hilly Urban Routes",
      subtitle: "High torque for steep inclines.",
      iconClass: "fa-solid fa-mountain", // 强调爬坡能力
    },
  ],

  // 图片路径假设为 m11 目录
  mainImage: "/images/m11/m11-series-electric-motorcycle-view-01.webp",
  sliderImage: "/images/m11/m11-series-electric-motorcycle-1200w-performance.webp",
  images: [
    {
      id: 1,
      src: "/images/m11/m11-series-electric-motorcycle-view-01.webp",
      alt: "M11 series electric motorcycle image 01",
    },
    {
      id: 2,
      src: "/images/m11/m11-series-electric-motorcycle-view-02.webp",
      alt: "M11 series electric motorcycle image 02",
    },
    {
      id: 3,
      src: "/images/m11/m11-series-electric-motorcycle-view-03.webp",
      alt: "M11 series electric motorcycle image 03",
    },
    {
      id: 4,
      src: "/images/m11/m11-series-electric-motorcycle-view-04.webp",
      alt: "M11 series electric motorcycle image 04",
    },
    {
      id: 5,
      src: "/images/m11/m11-series-electric-motorcycle-view-05.webp",
      alt: "M11 series electric motorcycle image 05",
    },
    {
      id: 6,
      src: "/images/m11/m11-series-electric-motorcycle-view-06.webp",
      alt: "M11 series electric motorcycle image 06",
    },
    {
      id: 7,
      src: "/images/m11/m11-series-electric-motorcycle-view-07.webp",
      alt: "M11 series electric motorcycle image 07",
    },
    {
      id: 8,
      src: "/images/m11/m11-series-electric-motorcycle-view-08.webp",
      alt: "M11 series electric motorcycle image 08",
    },
    {
      id: 9,
      src: "/images/m11/m11-series-electric-motorcycle-view-09.webp",
      alt: "M11 series electric motorcycle image 09",
    },
    {
      id: 10,
      src: "/images/m11/m11-series-electric-motorcycle-view-10.webp",
      alt: "M11 series electric motorcycle image 10",
    },
  ],

  highlights: [
    { iconClass: "fas fa-bolt", label: "1200W Power" }, // 闪电图标强调动力
    { iconClass: "fas fa-gauge-high", label: "55 km/h Speed" }, // 仪表盘图标强调速度
    { iconClass: "fas fa-shield-alt", label: "Dual Disc Brakes" }, // 核心卖点：双碟刹
    { iconClass: "fas fa-mountain", label: "20° Climbing" }, // 核心卖点：爬坡
  ],

  pricing: [
    { moq: "MOQ 10+", tag: "LCL Trial", price: "Standard" },
    { moq: "MOQ 24+", tag: "20ft Container", price: "Save 8%" },
    { moq: "MOQ 50+", tag: "40ft HQ", price: "Save 15%" }, // 大车装柜量少，折扣要更有吸引力
    { moq: "MOQ 100+", tag: "Distributor", price: "Save 20%" },
  ],

  specs: [
    { label: "Rated Power", value: "1200W High-Output DC" },
    { label: "Top Speed", value: "55 km/h (Sport Mode)" },
    { label: "Battery Compatibility", value: "Lead-acid / Lithium" },
    { label: "System Voltage", value: "60V / 72V (Rec. 72V)" }, // 推荐72V以发挥1200W性能
    { label: "Charging", value: "110V-220V Fast Ready" },
    { label: "Tires", value: "F/R 3.00-10 Tubeless" },
    { label: "Braking System", value: "F/R Hydraulic Disc" }, // 强调前后都是碟刹
    { label: "Seat Height", value: "755 mm" },
    { label: "Dimensions", value: "1810 × 710 × 1140 mm" },
    { label: "Wheelbase", value: "1330 mm" },
    { label: "Net Weight", value: "72.7 kg (Heavy Duty)" }, // 强调重型，暗示稳
  ],

  faqs: [
    {
      question: "Why choose the M11 (1200W) over the A8 (1000W)?",
      answer:
        "The M11 offers higher top speed (55km/h) and superior gradeability, making it essential for routes with steep hills or highways where speed is critical.",
    },
    {
      question: "Does the dual disc brake system require special maintenance?",
      answer:
        "Hydraulic disc brakes offer better stopping power and heat dissipation than drums. We provide maintenance kits (pads/fluid) to ensure long-term safety.",
    },
    {
      question: "What is the recommended battery for the 1200W motor?",
      answer:
        "To fully utilize the 1200W motor's potential, we highly recommend the 72V Lithium configuration for sustained speed and range.",
    },
    {
      question: "Is the M11 suitable for heavy riders or cargo?",
      answer:
        "Yes. With a net weight of 72.7kg and a robust frame, the M11 handles payloads of 180kg+ with ease, maintaining stability even at top speed.",
    },
    {
      question: "How many units fit in a container?",
      answer:
        "The M11 is a full-size model. A 40HQ container typically holds 50 units (CBU) or 85+ units (SKD), optimized for safe transport.",
    },
    {
      question: "What certificates come with the M11?",
      answer:
        "Standard EEC/COC (L1e-B) certification is available for EU markets, ensuring it is street-legal as a 45km/h+ moped.",
    },
  ],

  shippingSections: [
    {
      title: "Packaging Details",
      items: [
        { label: "Dimensions", value: "175 × 55 × 85 cm (SKD Optimized)" }, // 优化后的包装尺寸
        { label: "Gross Weight", value: "Approx. 130 kg" }, // 车重72kg + 铅酸电池 + 铁架 = 很重
        {
          label: "Protection Level",
          value: "Heavy-Duty Steel Frame + Carton", // 必须强调重型包装
        },
        {
          label: "In the Box",
          value: "Vehicle, Charger, Mirrors, Keys, COC Doc",
        },
      ],
    },
    {
      title: "Container Loading Efficiency",
      items: [
        { label: "20GP Capacity", value: "24 Units (SKD)" },
        {
          label: "40HQ Capacity",
          value: "50 Units (CBU - Ready to Ride)",
        },
        {
          label: "CKD Capacity (Parts)",
          value: "85-100 Units (Max Efficiency)",
        },
      ],
    },
    {
      title: "Logistics & Compliance",
      items: [
        { label: "Lead Time", value: "20-30 days (Production)" }, // 高性能车生产周期稍长
        { label: "Battery Compliance", value: "MSDS / UN38.3 Certified" },
        { label: "Incoterms", value: "EXW, FOB, CIF" },
        { label: "Loading Ports", value: "Ningbo / Shanghai" },
        { label: "Payment Terms", value: "30% Deposit, Balance before BL release" },
      ],
    },
  ],
  defaultPower: "1200W",
  powerOptions: ["1200W"],
  defaultBattery: "72V Lead-acid", // 默认推荐 72V
  batteryOptions: ["60V Lead-acid", "60V Lithium", "72V Lead-acid", "72V Lithium"],
};

export default m11Product;
