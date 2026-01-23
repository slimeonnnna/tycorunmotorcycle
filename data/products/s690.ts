import type { ProductContent } from "../products";

const s690Product: ProductContent = {
  slug: "s690-series-1500w-electric-moped",
  name: "S690 Series",
  // 定位：强调 1500W 的进阶动力和轻量化的高效能
  headline: "S690 Series Electric Moped - 1500W High-Efficiency Urban Sport",
  
  description:
    "The sweet spot of urban performance. The S690 Series bridges the gap between standard mopeds and heavy motorcycles, delivering 1500W of punchy acceleration and a 60 km/h top speed in a surprisingly agile 67kg package.",
  
  // 强调推重比和12寸轮毂带来的骑行质感
  specIntro:
    "Optimized for dynamic city riding. With a lightweight 67.2kg chassis and 12-inch alloy wheels, the S690 offers superior handling agility while maintaining the stability required for 60 km/h cruising.",
  
  specBullets: [
    "1500W optimized motor for rapid acceleration and 60km/h speeds.",
    "Dual voltage support (60V/72V) for flexible range configuration.",
    "12-inch tires (F:90/80 R:90/90) for enhanced pothole clearance.",
    "Standard F/R Disc brakes for consistent stopping power.",
  ],

  scenarios: [
    {
      title: "Fast Commuting",
      subtitle: "60km/h efficiency.",
      iconClass: "fa-solid fa-gauge-high", // 强调速度优势
    },
    {
      title: "Urban Logistics",
      subtitle: "Agile delivery platform.",
      iconClass: "fa-solid fa-box-open",
    },
    {
      title: "Rental Fleets",
      subtitle: "Durable mid-range option.",
      iconClass: "fa-solid fa-key",
    },
  ],

  // 图片路径假设为 s690 目录
  // 文件名策略：[slug] + [descriptive-suffix]
  mainImage: "/images/s690/s690-series-1500w-electric-moped-side-view-for-urban-commuting.webp",
  sliderImage: "/images/s690/S690 Series Electric Moped - 1500W Agile.webp",
  
  images: [
    {
      id: 1,
      src: "/images/s690/s690-series-1500w-electric-moped-side-view-for-urban-commuting.webp",
      alt: "S690 series 1500W electric moped side profile ready for city commuting",
    },
    {
      id: 2,
      src: "/images/s690/s690-series-1500w-electric-moped-front-design-with-led.webp",
      alt: "Front view of S690 electric moped featuring modern LED lighting",
    },
    {
      id: 3,
      src: "/images/s690/s690-series-1500w-electric-moped-powerful-1500w-motor-hub.webp",
      alt: "Close up of the 1500W high performance brushless motor",
    },
    {
      id: 4,
      src: "/images/s690/s690-series-1500w-electric-moped-digital-dashboard-display.webp",
      alt: "Digital LCD dashboard showing 60kmh speed and battery level",
    },
    {
      id: 5,
      src: "/images/s690/s690-series-1500w-electric-moped-hydraulic-disc-brake-system.webp",
      alt: "Front and rear hydraulic disc brake system for safety",
    },
    {
      id: 6,
      src: "/images/s690/s690-series-1500w-electric-moped-ergonomic-seat-cushion.webp",
      alt: "Comfortable 765mm seat height design for riders",
    },
    {
      id: 7,
      src: "/images/s690/s690-series-1500w-electric-moped-60v-72v-battery-compartment.webp",
      alt: "Internal view of battery compartment supporting 60V and 72V packs",
    },
    {
      id: 8,
      src: "/images/s690/s690-series-1500w-electric-moped-12-inch-tubeless-tires.webp",
      alt: "12-inch durable vacuum tires for stable urban riding",
    },
    {
      id: 9,
      src: "/images/s690/s690-series-1500w-electric-moped-additional-view.webp",
      alt: "Additional view of the S690 series 1500W electric moped",
    },
  ],

  highlights: [
    { iconClass: "fas fa-bolt", label: "1500W Power" },
    { iconClass: "fas fa-tachometer-alt", label: "60 km/h Speed" },
    { iconClass: "fas fa-circle-notch", label: "12-inch Wheels" }, // 强调大轮
    { iconClass: "fas fa-battery-half", label: "60V/72V Flexible" },
  ],

  pricing: [
    { moq: "MOQ 10+", tag: "LCL Trial", price: "Standard" },
    { moq: "MOQ 24+", tag: "20ft Container", price: "Save 6%" },
    { moq: "MOQ 50+", tag: "40ft HQ", price: "Save 14%" },
    { moq: "MOQ 100+", tag: "Distributor", price: "Save 19%" },
  ],

  specs: [
    { label: "Rated Power", value: "1500W Brushless DC" },
    { label: "Top Speed", value: "60 km/h" },
    { label: "Battery Type", value: "Lead-acid / Lithium" },
    { label: "System Voltage", value: "60V / 72V (Configurable)" },
    { label: "Charging", value: "110V/220V Dual Input" },
    { label: "Tires", value: "F:90/80-12 R:90/90-12" }, // 还原规格书的轮胎参数
    { label: "Braking System", value: "F/R Hydraulic Disc" },
    { label: "Seat Height", value: "765 mm" },
    { label: "Dimensions", value: "1880 × 770 × 1070 mm" },
    { label: "Wheelbase", value: "1310 mm" },
    { label: "Net Weight", value: "67.2 kg (High Pwr/Wt Ratio)" }, // 强调推重比优势
  ],

  faqs: [
    {
      question: "What are the advantages of the 1500W motor configuration?",
      answer:
        "The 1500W powertrain delivers superior torque for climbing steep urban overpasses (15°+) and rapid acceleration, ensuring you can safely merge with faster traffic flow on main arterial roads.",
    },
    {
      question: "Does the S690 require a motorcycle license?",
      answer:
        "It depends on local regulations. In many regions, speeds over 45km/h classify it as a light motorcycle (L3e equivalent), requiring a basic license.",
    },
    {
      question: "What is the advantage of the 12-inch tires?",
      answer:
        "Compared to 10-inch scooter tires, the 12-inch wheels on the S690 offer better stability at 60km/h and handle potholes or rough pavement with greater comfort.",
    },
    {
      question: "Can I use a 60V battery with the 1500W motor?",
      answer:
        "Yes, the S690 supports 60V for cost-effective standard use. However, we recommend the 72V configuration to fully unlock the 1500W motor's torque and speed potential.",
    },
    {
      question: "Is this model suitable for delivery fleets?",
      answer:
        "Yes. Its higher speed (60km/h) expands the delivery radius compared to standard mopeds, making it ideal for wider-range food or parcel logistics.",
    },
    {
      question: "What is the packaging and shipping efficiency?",
      answer:
        "We use an optimized steel frame package. A 40HQ container can load approximately 50 units (CBU) or 85+ units (SKD), balancing protection and freight cost.",
    },
  ],

  shippingSections: [
    {
      title: "Packaging Details",
      items: [
        { label: "Dimensions", value: "180 × 50 × 85 cm (SKD Std)" }, // 根据车身1880mm估算
        { label: "Gross Weight", value: "Approx. 110 kg" }, // 67kg车+电池+包装
        {
          label: "Protection Level",
          value: "Steel Frame + 7-Layer Carton",
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
          value: "50 Units (CBU - Fully Assembled)",
        },
        {
          label: "CKD Capacity (Parts)",
          value: "85-95 Units (High Density)",
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
  defaultPower: "1500W",
  powerOptions: ["1500W"],
  defaultBattery: "72V Lead-acid",
  batteryOptions: ["60V Lead-acid", "60V Lithium", "72V Lead-acid", "72V Lithium"],
};

export default s690Product;
