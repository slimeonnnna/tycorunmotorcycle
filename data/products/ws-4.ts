import type { ProductContent } from "../products";

const ws4Product: ProductContent = {
  // slug: keyword + power + stability
  slug: "ws-4-2000w-heavy-duty-electric-motorcycle-stable-cruiser",
  name: "WS-4 Series",
  // Headline: 寮鸿皟 "Cruiser" 锟?"Stability"
  headline: "WS-4 Series Heavy-Duty Electric Motorcycle - 2000W Stable Cruiser",
  
  description:
    "Engineered for superior road presence and stability. The WS-4 Series combines a robust 2000W motor with a heavyweight 98kg chassis and wide 12-inch tires, delivering a smooth, confident ride for long-distance urban commuting.",
  
  // 寮鸿皟锟?chassis 鍜屽杞儙甯︽潵鐨勮垝閫傛劅
  specIntro:
    "The definitive platform for comfort at speed. With a substantial 98kg frame and 120/70-12 wide-profile tires, the WS-4 absorbs road imperfections and resists crosswinds for a remarkably smooth cruising experience.",
  
  specBullets: [
    "High-torque 2000W motor for effortless 70 km/h cruising.",
    "Heavyweight 98kg chassis for unparalleled high-speed stability.",
    "Symmetrical 120/70-12 tires (F/R) for predictable, smooth handling.",
    "Full-size 1850mm body provides a spacious and commanding riding position.",
  ],

  scenarios: [
    {
      title: "Daily Commute",
      subtitle: "Comfortable, long-range travel.",
      iconClass: "fa-solid fa-road",
    },
    {
      title: "Urban Cruising",
      subtitle: "Stable and confident riding.",
      iconClass: "fa-solid fa-wind",
    },
    {
      title: "Passenger Transport",
      subtitle: "Spacious for two riders.",
      iconClass: "fa-solid fa-user-friends", // 寮鸿皟鍙岃浇鑳藉姏
    },
  ],

  // 鍥剧墖璺緞鍜屽懡鍚嶏細slug 鍙樺緱澶氭牱鍖栵紝鍖呭惈浼樼偣
  mainImage: "/images/ws-4/ws-4-2000w-stable-electric-motorcycle-side-view.webp",
  sliderImage: "/images/ws-4/WS-4-Series-Electric-Motorcycle-Heavy-Duty-Cruiser.webp",
  images: [
    {
      id: 1,
      // slug 绀轰緥锛氬瀷锟?+ 鍔ㄥ姏 + 浼樼偣
      src: "/images/ws-4/ws-4-2000w-stable-electric-motorcycle-side-view.webp",
      alt: "WS-4 2000W electric motorcycle featuring a heavyweight chassis for stability",
    },
    {
      id: 2,
      // slug 绀轰緥锛氫紭锟?+ 杞﹀瀷
      src: "/images/ws-4/wide-12-inch-tires-on-ws-4-electric-motorcycle.webp",
      alt: "Close-up of the 120/70-12 wide tires providing excellent grip",
    },

    {
      id: 3,
      src: "/images/ws-4/ws-4-electric-motorcycle-dual-disc-brakes.webp",
      alt: "Front and rear hydraulic disc brake system for safe stopping",
    },
    {
      id: 4,
      src: "/images/ws-4/ws-4-digital-lcd-dashboard-70kmh.webp",
      alt: "Clear LCD dashboard of the WS-4 showing speed and battery status",
    },
    {
      id: 5,
      // slug 绀轰緥锛氬満锟?+ 杞﹀瀷
      src: "/images/ws-4/long-range-commuting-ws-4-electric-motorcycle.webp",
      alt: "Spacious and comfortable seat designed for long-distance commuting",
    },
    {
      id: 6,
      src: "/images/ws-4/ws-4-high-capacity-battery-compartment.webp",
      alt: "72V high-capacity battery options for extended range",
    },
    {
      id: 7,
      src: "/images/ws-4/ws-4-led-lighting-system-for-visibility.webp",
      alt: "Bright LED headlight and turn signals for enhanced visibility",
    },
    {
      id: 8,
      src: "/images/ws-4/ws-4-electric-motorcycle-cruising-on-city-road.webp",
      alt: "WS-4 electric motorcycle in motion, demonstrating its stable road presence",
    },
  ],

  highlights: [
    { iconClass: "fas fa-bolt", label: "2000W Power" },
    { iconClass: "fas fa-tachometer-alt", label: "70 km/h Speed" },
    { iconClass: "fas fa-balance-scale-right", label: "98kg Heavy Chassis" }, // 寮鸿皟閲嶅瀷搴曠洏
    { iconClass: "fas fa-road", label: "12-inch Wide Tires" },
  ],

  pricing: [
    { moq: "MOQ 5+", tag: "Sample Order", price: "Standard" },
    { moq: "MOQ 24+", tag: "20ft Container", price: "Save 5%" },
    { moq: "MOQ 48+", tag: "40ft HQ", price: "Save 12%" },
    { moq: "MOQ 100+", tag: "Distributor", price: "Save 18%" },
  ],

  // 涓ユ牸杩樺師瑙勬牸
  specs: [
    { label: "Rated Power", value: "2000W Brushless DC" },
    { label: "Top Speed", value: "70 km/h" },
    { label: "Battery Type", value: "Lead-acid / Lithium" },
    { label: "Battery Voltage", value: "60V / 72V" },
    { label: "Charging Voltage", value: "110V / 220V" },
    { label: "Tires", value: "F/R 120/70-12 Tubeless" },
    { label: "Brake System", value: "F/R Hydraulic Disk/Disk" },
    { label: "Seat Height", value: "790 mm" },
    { label: "Dimensions", value: "1850 x 680 x 1250 mm" },
    { label: "Wheelbase", value: "1340 mm" },
    { label: "Net Weight", value: "98 kg (w/o Battery)" },
  ],

  // FAQ focuses on WS-4 stability and weight.
  faqs: [
    {
      question: "Why is the WS-4 heavier (98kg) than other models?",
      answer:
        "The heavyweight chassis is an intentional design choice to lower the center of gravity and provide superior stability at high speeds (70km/h), especially in windy conditions or on uneven roads.",
    },
    {
      question: "What are the benefits of having wide 120/70-12 tires on both wheels?",
      answer:
        "Symmetrical wide tires offer a larger contact patch with the road, resulting in better grip, more predictable handling, and a smoother, more comfortable ride compared to narrower tires.",
    },
    {
      question: "Is this model suitable for carrying a passenger?",
      answer:
        "Absolutely. The long wheelbase (1340mm), spacious seat, and robust 98kg frame are engineered to comfortably and safely accommodate a rider and a passenger.",
    },
    {
      question: "How does the 2000W motor perform with a heavy frame?",
      answer:
        "The high-torque 2000W motor is specifically tuned to handle the 98kg chassis, providing strong acceleration from a standstill and maintaining cruising speed on inclines.",
    },
    {
      question: "What is the recommended battery for long-range commuting?",
      answer:
        "For daily commutes over 50km, we highly recommend the 72V Lithium battery option. It maximizes range, improves overall performance, and slightly reduces the vehicle's total weight.",
    },
    {
      question: "Is EEC certification available for this model?",
      answer:
        "Yes, we provide EEC (L3e) certification for the WS-4, making it fully street-legal for registration as a light motorcycle in European markets.",
    },
  ],

  shippingSections: [
    {
      title: "Packaging Details",
      items: [
        { label: "Dimensions", value: "180 x 55 x 85 cm (SKD)" },
        { label: "Gross Weight", value: "Approx. 160 kg" }, // 98kg车+电池+包装
        {
          label: "Protection Level",
          value: "Heavy-Duty Iron Crate + Carton",
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
        { label: "20GP Capacity", value: "22 Units (SKD)" },
        {
          label: "40HQ Capacity",
          value: "48 Units (CBU - Optimized)",
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
        { label: "Lead Time", value: "25-30 days (High QC Req.)" },
        { label: "Battery Compliance", value: "MSDS / UN8.3 Certified" },
        { label: "Incoterms", "value": "EXW, FOB, CIF" },
        { "label": "Loading Ports", "value": "Ningbo / Shanghai" },
        { "label": "Payment Terms", "value": "30% Deposit, Balance before BL release" },
      ],
    },
  ],
  defaultPower: "2000W",
  powerOptions: ["2000W"],
  defaultBattery: "72V Lead-acid",
  batteryOptions: ["60V Lead-acid", "60V Lithium", "72V Lead-acid", "72V Lithium"],
};

export default ws4Product;

