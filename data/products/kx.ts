import type { ProductContent } from "../products";

const kxProduct: ProductContent = {
  slug: "kx-series-500w-electric-moped",
  name: "KX Series",
  // 定位：强调入门级、轻便、敏捷
  headline: "KX Series Entry-Level Electric Moped - 500W Agile Urban Mobility",
  
  description:
    "The ultimate cost-effective platform for high-volume fleets. The KX Series pairs a streamlined 500W motor with an ultra-lightweight 35kg chassis, offering the lowest TCO (Total Cost of Ownership) for campus mobility, resort rentals, and short-distance commuting.",
  
  // 强调人体工学和紧凑性，适合初学者和女性用户
  specIntro:
    "Designed for accessibility and ease of handling. With a compact 1500mm footprint and a low 720mm seat height, the KX Series is the ideal entry-level vehicle for dense urban environments.",
  
  specBullets: [
    "High-efficiency 500W motor optimized for flat-road cruising.",
    "Dual voltage architecture (48V/60V) to match budget requirements.",
    "Low-maintenance front/rear drum brakes for extended service intervals.", // 将鼓刹包装为“低维护成本”
    "Featherweight 35kg frame for easy maneuvering and parking.", // 35kg是巨大的卖点
  ],

  scenarios: [
    {
      title: "Campus Sharing",
      subtitle: "Affordable student transit.",
      iconClass: "fa-solid fa-graduation-cap", // 针对校园场景
    },
    {
      title: "Resort Mobility",
      subtitle: "Easy-to-ride rental fleet.",
      iconClass: "fa-solid fa-umbrella-beach", // 针对度假村/酒店
    },
    {
      title: "Community Commute",
      subtitle: "Grocery & neighborhood runs.",
      iconClass: "fa-solid fa-basket-shopping", // 针对买菜/短途
    },
  ],

  // 假设图片路径已更新为 kx 目录，请根据实际情况调整文件名
  mainImage: "/images/kx/kx-series-500w-electric-moped-view-04.webp",
  sliderImage: "/images/kx/KX Series Electric Moped - 500W Compact.webp",
  images: [
    {
      id: 1,
      src: "/images/kx/kx-series-500w-electric-moped-view-04.webp",
      alt: "KX series compact electric moped view 04",
    },
    {
      id: 2,
      src: "/images/kx/kx-series-500w-electric-moped-view-01.webp",
      alt: "KX series compact electric moped view 01",
    },
    {
      id: 3,
      src: "/images/kx/kx-series-500w-electric-moped-view-02.webp",
      alt: "KX series compact electric moped view 02",
    },
    {
      id: 4,
      src: "/images/kx/kx-series-500w-electric-moped-view-03.webp",
      alt: "KX series compact electric moped view 03",
    },
  ],

  highlights: [
    { iconClass: "fas fa-leaf", label: "Energy Efficient" }, // 500W主打省电
    { iconClass: "fas fa-tachometer-alt", label: "38 km/h Speed" },
    { iconClass: "fas fa-weight-hanging", label: "35kg Ultra-Light" }, // 强调轻
    { iconClass: "fas fa-tools", label: "Low Maintenance" }, // 强调好修
  ],

  pricing: [
    { moq: "MOQ 10+", tag: "LCL Trial", price: "Standard" },
    { moq: "MOQ 30+", tag: "20ft Container", price: "Save 8%" }, // 小车装柜量更多
    { moq: "MOQ 80+", tag: "40ft HQ", price: "Save 15%" }, // 40HQ装载量激增
    { moq: "MOQ 200+", tag: "Distributor", price: "Save 20%" },
  ],

  specs: [
    { label: "Rated Power", value: "500W Brushless DC" },
    { label: "Top Speed", value: "38 km/h (Eco Mode Avail)" },
    { label: "Battery Type", value: "Lead-acid (Cost Optimized)" },
    { label: "System Voltage", value: "48V / 60V" },
    { label: "Charging", value: "110V-220V Standard" },
    { label: "Tires", value: "F/R 2.5-10 Tubeless" },
    { label: "Brake System", value: "F/R Drum (Low Wear)" },
    { label: "Seat Height", value: "720 mm (Low Profile)" },
    { label: "Dimensions", value: "1500 × 640 × 1030 mm" },
    { label: "Net Weight", value: "35 kg (Lightweight)" },
  ],

  faqs: [
    {
      question: "Why use drum brakes instead of disc brakes on the KX?",
      answer:
        "For 500W/38km/h speeds, drum brakes provide sufficient stopping power while significantly reducing maintenance costs and part complexity for fleet operators.",
    },
    {
      question: "Is this model suitable for beginners or students?",
      answer:
        "Yes. The ultra-light weight (35kg) and low seat height (720mm) make the KX Series the safest and easiest model for new riders to handle.",
    },
    {
      question: "What is the real-world range with Lead-acid batteries?",
      answer:
        "Depending on the voltage (48V/60V), expect a range of 40-55km on flat urban roads, ideal for daily short-distance commuting.",
    },
    {
      question: "How many units can fit in a 40HQ container?",
      answer:
        "Due to its compact dimensions, we can load up to 105+ units (CBU) or 180+ units (SKD) in a 40HQ, maximizing your shipping ROI.",
    },
    {
      question: "Can I customize the colors for my rental fleet?",
      answer:
        "Yes. For orders of 50+ units, we offer free color customization and logo decal application to match your brand identity.",
    },
    {
      question: "Are spare parts readily available?",
      answer:
        "Yes. The KX uses standard industry components (tires, controllers), ensuring low-cost and easy-to-source spare parts globally.",
    },
  ],

  shippingSections: [
    {
      title: "Packaging Details",
      items: [
        { label: "Dimensions", value: "155 × 38 × 85 cm (Optimized)" }, // 根据车长1500估算的紧凑包装
        { label: "Gross Weight", value: "Approx. 55 kg" }, // 35kg净重+包装+电池预估
        {
          label: "Protection Level",
          value: "Steel Frame + 5-layer Carton", // 小车5层纸箱够了
        },
        {
          label: "In the Box",
          value: "Vehicle (90% assembled), Charger, Mirrors, Keys",
        },
      ],
    },
    {
      title: "Container Loading Efficiency",
      items: [
        { label: "20GP Capacity", value: "48 Units (SKD-1)" },
        {
          label: "40HQ Capacity",
          value: "105 Units (High Density)", // 核心卖点：运费极低
        },
        {
          label: "CKD Capacity (Parts)",
          value: "180+ Units (Subject to Packing Plan)",
        },
      ],
    },
    {
      title: "Logistics & Compliance",
      items: [
        { label: "Lead Time", value: "15-20 days (Ex-Factory)" },
        { label: "Battery Compliance", value: "MSDS / UN38.3 Available" },
        { label: "Incoterms", value: "EXW, FOB, CIF" },
        { label: "Loading Ports", value: "Wuxi / Shanghai" }, // 小车通常走无锡/上海港
        { label: "Payment Terms", value: "30% Deposit, Balance before BL release" },
      ],
    },
  ],
  defaultPower: "500W",
  powerOptions: ["500W"],
  defaultBattery: "48V Lead-acid",
  batteryOptions: ["48V Lead-acid", "60V Lead-acid"],
};

export default kxProduct;
