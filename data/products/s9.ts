import type { ProductContent } from "../products";

const s9Product: ProductContent = {
  slug: "s9-series-2000w-electric-motorcycle",
  name: "S9 Series",
  // 定位：旗舰级、高速、运动型
  headline: "S9 Series High-Speed Electric Motorcycle - 2000W Flagship Sport Cruiser",
  
  description:
    "The pinnacle of performance in our lineup. The S9 Series combines a high-output 2000W motor with a flexible 60V/72V architecture. Capable of 78 km/h, it is engineered for suburban commuters and express couriers demanding highway-grade speed and stability.",
  
  // 强调全尺寸底盘和高速稳定性
  specIntro:
    "Built for the open road. With a substantial 1370mm wheelbase and staggered 12-inch sport tires, the S9 delivers motorcycle-grade handling confidence at high speeds.",
  
  specBullets: [
    "2000W high-output motor for 78 km/h top speed.",
    "Flexible voltage architecture supports both 60V and 72V configurations.", // 明确提及双电压支持
    "Staggered tire setup (F:90/80-12 R:110/70-12) for sport cornering.",
    "Dual hydraulic disc brakes for maximum stopping power.",
  ],

  scenarios: [
    {
      title: "Suburban Commute",
      subtitle: "Highway-capable travel.",
      iconClass: "fa-solid fa-road-spikes",
    },
    {
      title: "Express Logistics",
      subtitle: "Urgent cross-town delivery.",
      iconClass: "fa-solid fa-truck-fast",
    },
    {
      title: "Police Patrol",
      subtitle: "High-speed rapid response.",
      iconClass: "fa-solid fa-shield-cat",
    },
  ],

  mainImage: "/images/s9/s9-series-2000w-electric-motorcycle-view-01.webp",
  sliderImage: "/images/s9/s9-series-2000w-electric-motorcycle-view-slider.webp",
  images: [
    {
      id: 1,
      src: "/images/s9/s9-series-2000w-electric-motorcycle-view-01.webp",
      alt: "S9 flagship electric motorcycle side profile 2000W",
    },
    {
      id: 2,
      src: "/images/s9/s9-series-2000w-electric-motorcycle-view-02.webp",
      alt: "Aggressive front design with 12-inch sport tires",
    },
    {
      id: 3,
      src: "/images/s9/s9-series-2000w-electric-motorcycle-view-03.webp",
      alt: "2000W high speed brushless motor hub detail",
    },
    {
      id: 4,
      src: "/images/s9/s9-series-2000w-electric-motorcycle-view-04.webp",
      alt: "Full LCD digital dashboard displaying 78kmh",
    },
    {
      id: 5,
      src: "/images/s9/s9-series-2000w-electric-motorcycle-view-05.webp",
      alt: "Large diameter hydraulic disc brakes front and rear",
    },
    {
      id: 6,
      src: "/images/s9/s9-series-2000w-electric-motorcycle-view-06.webp",
      alt: "760mm height sport seat for rider comfort",
    },
    {
      id: 7,
      src: "/images/s9/s9-series-2000w-electric-motorcycle-view-07.webp",
      alt: "Reinforced hydraulic shock absorbers",
    },
    {
      id: 8,
      src: "/images/s9/s9-series-2000w-electric-motorcycle-view-08.webp",
      alt: "S9 electric motorcycle LED lighting system at night",
    },
    {
      id: 9,
      src: "/images/s9/s9-series-2000w-electric-motorcycle-view-09.webp",
      alt: "S9 electric motorcycle close-up detailing view 09",
    },
    {
      id: 10,
      src: "/images/s9/s9-series-2000w-electric-motorcycle-view-10.webp",
      alt: "S9 electric motorcycle close-up detailing view 10",
    },
    {
      id: 11,
      src: "/images/s9/s9-series-2000w-electric-motorcycle-view-11.webp",
      alt: "S9 electric motorcycle close-up detailing view 11",
    },
  ],

  highlights: [
    { iconClass: "fas fa-bolt", label: "2000W Max Power" },
    { iconClass: "fas fa-gauge-high", label: "78 km/h Top Speed" },
    { iconClass: "fas fa-battery-half", label: "60V/72V Options" }, // 亮点中强调多电压选项
    { iconClass: "fas fa-circle-notch", label: "12-inch Sport Tires" },
  ],

  pricing: [
    { moq: "MOQ 5+", tag: "Sample Order", price: "Standard" }, // 旗舰车起订量可稍低
    { moq: "MOQ 24+", tag: "20ft Container", price: "Save 5%" },
    { moq: "MOQ 48+", tag: "40ft HQ", price: "Save 12%" },
    { moq: "MOQ 100+", tag: "Distributor", price: "Save 18%" },
  ],

  // 严谨还原规格表
  specs: [
    { label: "Rated Power", value: "2000W Brushless DC" },
    { label: "Top Speed", value: "78 km/h" },
    { label: "Battery Type", value: "Lead-acid / Lithium" },
    { label: "Battery Voltage", value: "60V / 72V (Selectable)" }, // 明确 60V 和 72V 都支持
    { label: "Charging Voltage", value: "110V / 220V Dual Support" },
    { label: "Tire (Front)", value: "90/80-12 Tubeless" }, // 分开写前后胎，体现运动属性
    { label: "Tire (Rear)", value: "110/70-12 Tubeless" },
    { label: "Brake System", value: "F/R Hydraulic Disk/Disk" },
    { label: "Seat Height", value: "760 mm" },
    { label: "Dimensions", value: "1920 × 690 × 1150 mm" },
    { label: "Wheelbase", value: "1370 mm" },
    { label: "Net Weight", value: "86.8 kg (w/o Battery)" },
  ],

  faqs: [
    {
      question: "What is the performance difference between 60V and 72V versions?",
      answer:
        "The 60V version is cost-effective for standard commuting, while the 72V version unlocks the full 2000W potential, achieving higher top speeds (78km/h) and better acceleration.",
    },
    {
      question: "Do I need a license to ride the S9?",
      answer:
        "Yes. With a top speed of 78 km/h, the S9 typically falls under the L3e (Motorcycle) category in Europe and requires a valid motorcycle license.",
    },
    {
      question: "Why does the S9 use staggered tires (90/80-12 & 110/70-12)?",
      answer:
        "The wider rear tire (110/70) provides better traction for the 2000W motor, while the narrower front tire ensures agile steering response, a standard setup for sport motorcycles.",
    },
    {
      question: "Can I use 110V charging?",
      answer:
        "Yes. The charger supports both 110V and 220V input voltages, making it compatible with power grids globally without adapters.",
    },
    {
      question: "Is the S9 suitable for highway use?",
      answer:
        "Yes. The 78 km/h top speed and heavy-duty chassis (86.8kg) provide the stability and power reserve needed to safely merge with urban highway traffic.",
    },
    {
      question: "What is the container loading quantity?",
      answer:
        "Due to its full-size dimensions (1920mm length), a 40HQ container typically holds around 48 units (CBU) or 80+ units (SKD).",
    },
  ],

  shippingSections: [
    {
      title: "Packaging Details",
      items: [
        { label: "Dimensions", value: "185 × 55 × 85 cm (SKD)" }, // 针对1920mm车身的包装
        { label: "Gross Weight", value: "Approx. 140 kg" }, // 86.8kg车身 + 电池 + 铁架
        {
          label: "Protection Level",
          value: "Heavy-Duty Steel Frame + Carton",
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
        { label: "20GP Capacity", value: "22 Units (SKD)" },
        {
          label: "40HQ Capacity",
          value: "48 Units (CBU - Fully Built)",
        },
        {
          label: "CKD Capacity (Parts)",
          value: "80-90 Units (Assembly Required)",
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
  defaultPower: "2000W",
  powerOptions: ["2000W"],
  defaultBattery: "72V Lead-acid",
  batteryOptions: ["60V Lead-acid", "60V Lithium", "72V Lead-acid", "72V Lithium"], // 完整列出所有选项
};

export default s9Product;
