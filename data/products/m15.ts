import type { ProductContent } from "../products";

const m15Product: ProductContent = {
  slug: "m15-series-1200w-sport-electric-scooter",
  name: "M15 Series",
  // 定位：强调灵动、运动、操控
  headline: "M15 Series Sport Electric Scooter - 1200W Agile Urban Commuter",
  
  description:
    "The perfect balance of power and agility. The M15 Series pairs a high-output 1200W motor with an ultra-lightweight 56kg chassis. With a low 710mm seat height, it offers superior accessibility and handling for diverse rider demographics.",
  
  // 强调推重比和操控性
  specIntro:
    "Designed for dynamic urban riding. The M15 features a class-leading power-to-weight ratio, delivering punchy acceleration and effortless maneuverability in heavy traffic.",
  
  specBullets: [
    "1200W motor on a 56kg frame for rapid acceleration.", // 核心卖点：大马拉小车
    "Ultra-low 710mm seat height for inclusive rider accessibility.", // 核心卖点：不挑身高
    "Dual hydraulic disc brakes for sport-grade stopping power.",
    "Short 1300mm wheelbase for tight cornering and U-turns.", // 强调转弯灵活
  ],

  scenarios: [
    {
      title: "Urban Commuting",
      subtitle: "Fast, agile daily transport.",
      iconClass: "fa-solid fa-bolt", // 强调快
    },
    {
      title: "Courier (Light)",
      subtitle: "Speed-focused document delivery.",
      iconClass: "fa-solid fa-paper-plane", // 强调轻快
    },
    {
      title: "Shared Mobility",
      subtitle: "Fits all rider heights.",
      iconClass: "fa-solid fa-users", // 强调适合所有人
    },
  ],

  // 假设图片路径为 m15 目录
  mainImage: "/images/m15/m15-series-electric-scooter-view-01.webp",
  sliderImage: "/images/m15/M15 Series Electric Scooter - Agile Sport.webp",
  images: [
    {
      id: 1,
      src: "/images/m15/m15-series-electric-scooter-view-01.webp",
      alt: "M15 series electric scooter image 01",
    },
    {
      id: 2,
      src: "/images/m15/m15-series-electric-scooter-view-02.webp",
      alt: "M15 series electric scooter image 02",
    },
    {
      id: 3,
      src: "/images/m15/m15-series-electric-scooter-view-03.webp",
      alt: "M15 series electric scooter image 03",
    },
    {
      id: 4,
      src: "/images/m15/m15-series-electric-scooter-view-04.webp",
      alt: "M15 series electric scooter image 04",
    },
    {
      id: 5,
      src: "/images/m15/m15-series-electric-scooter-view-05.webp",
      alt: "M15 series electric scooter image 05",
    },
    {
      id: 6,
      src: "/images/m15/m15-series-electric-scooter-view-06.webp",
      alt: "M15 series electric scooter image 06",
    },
    {
      id: 7,
      src: "/images/m15/m15-series-electric-scooter-view-07.webp",
      alt: "M15 series electric scooter image 07",
    },
    {
      id: 8,
      src: "/images/m15/m15-series-electric-scooter-view-08.webp",
      alt: "M15 series electric scooter image 08",
    },
    {
      id: 9,
      src: "/images/m15/m15-series-electric-scooter-view-09.webp",
      alt: "M15 series electric scooter image 09",
    },
    {
      id: 10,
      src: "/images/m15/m15-series-electric-scooter-view-10.webp",
      alt: "M15 series electric scooter image 10",
    },
    {
      id: 11,
      src: "/images/m15/m15-series-electric-scooter-view-11.webp",
      alt: "M15 series electric scooter image 11",
    },
  ],

  highlights: [
    { iconClass: "fas fa-feather-alt", label: "56kg Ultra-Light" }, // 这里的核心卖点是轻
    { iconClass: "fas fa-tachometer-alt", label: "55 km/h Speed" },
    { iconClass: "fas fa-chair", label: "710mm Low Seat" }, // 独特的低座高卖点
    { iconClass: "fas fa-stop-circle", label: "Dual Disc Brakes" },
  ],

  pricing: [
    { moq: "MOQ 10+", tag: "LCL Trial", price: "Standard" },
    { moq: "MOQ 24+", tag: "20ft Container", price: "Save 8%" },
    { moq: "MOQ 50+", tag: "40ft HQ", price: "Save 15%" },
    { moq: "MOQ 100+", tag: "Distributor", price: "Save 20%" },
  ],

  specs: [
    { label: "Rated Power", value: "1200W High-Torque" },
    { label: "Top Speed", value: "55 km/h (Sport Tuned)" },
    { label: "Battery Compatibility", value: "Lead-acid / Lithium" },
    { label: "System Voltage", value: "60V / 72V" },
    { label: "Charging", value: "110V-220V" },
    { label: "Tires", value: "F/R 3.00-10 Tubeless" },
    { label: "Braking System", value: "F/R Hydraulic Disc" },
    { label: "Seat Height", value: "710 mm (Accessible)" }, // 强调易于骑行
    { label: "Dimensions", value: "1800 × 685 × 1110 mm" },
    { label: "Wheelbase", value: "1300 mm (Agile)" },
    { label: "Net Weight", value: "56.6 kg (Super Light)" }, // 强调重量优势
  ],

  faqs: [
    {
      question: "What is the main difference between M15 and M11?",
      answer:
        "While both have 1200W motors, the M15 is significantly lighter (56kg vs 72kg) and has a lower seat (710mm vs 755mm), making it sportier and easier to handle for smaller riders.",
    },
    {
      question: "Is the M15 suitable for delivery use?",
      answer:
        "Yes, specifically for 'courier-style' light delivery where speed and agility are prioritized over heavy cargo capacity.",
    },
    {
      question: "Can I install a 72V battery in this compact frame?",
      answer:
        "Yes. The chassis is engineered to house a 72V 20Ah/32Ah Lead-acid or Lithium pack for maximum speed and range performance.",
    },
    {
      question: "Who is the target audience for the M15?",
      answer:
        "Ideally suited for rental fleets serving tourists, students, or female riders who prefer a lower center of gravity and lighter handling.",
    },
    {
      question: "How many M15 units fit in a container?",
      answer:
        "Thanks to its streamlined body (1800mm length), we can achieve high loading density: approx 50 units (CBU) or 90+ units (SKD) in a 40HQ.",
    },
    {
      question: "Do the dual disc brakes come standard?",
      answer:
        "Yes. Unlike many competitors in this weight class that use drum brakes, the M15 comes standard with front and rear hydraulic disc brakes for superior safety.",
    },
  ],

  shippingSections: [
    {
      title: "Packaging Details",
      items: [
        { label: "Dimensions", value: "175 × 45 × 85 cm (SKD)" }, // 比M11稍微窄一点
        { label: "Gross Weight", value: "Approx. 95 kg" }, // 56kg车+35kg电池+包装
        {
          label: "Protection Level",
          value: "Steel Frame + Carton",
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
        { label: "20GP Capacity", value: "26 Units (SKD)" },
        {
          label: "40HQ Capacity",
          value: "54 Units (CBU - Ready to Ride)",
        },
        {
          label: "CKD Capacity (Parts)",
          value: "90-100 Units (High Density)",
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

export default m15Product;
