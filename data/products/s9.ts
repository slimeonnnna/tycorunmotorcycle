import type { ProductContent } from "../products";

const s9Product: ProductContent = {
  slug: "s9-series-2000w-electric-motorcycle",
  name: "S9 Series",
  // 定位：强调跨城、高速、旗舰
  headline: "S9 Series High-Speed Electric Motorcycle - 2000W Inter-City Cruiser",
  
  description:
    "The pinnacle of performance in our lineup. The S9 Series features a massive 2000W powertrain capable of 78 km/h, engineered for suburban commuters and express couriers who need to dominate arterial roads and highways.",
  
  // 强调12寸大轮毂带来的稳定性，这是它区别于前几款车的最大特征
  specIntro:
    "Built for the open road. With a full-size 1920mm chassis and staggered 12-inch sport tires, the S9 delivers motorcycle-grade stability and cornering confidence at high speeds.",
  
  specBullets: [
    "2000W high-output motor for highway-capable acceleration.", // 强调能上快速路
    "78 km/h top speed to keep pace with urban automotive traffic.", // 强调跟车流不掉队
    "12-inch staggered tire setup (F:90/80 R:110/70) for sport handling.", // 强调轮胎规格
    "Heavy-duty 86kg chassis prevents wind buffeting at speed.", // 将重包装为“抗风/稳”
  ],

  scenarios: [
    {
      title: "Suburban Commute",
      subtitle: "Long-distance cross-town travel.",
      iconClass: "fa-solid fa-road-spikes", // 强调公路属性
    },
    {
      title: "Express Logistics",
      subtitle: "Time-critical urgent delivery.",
      iconClass: "fa-solid fa-truck-fast", // 强调快送
    },
    {
      title: "Police & Patrol",
      subtitle: "High-speed rapid response.",
      iconClass: "fa-solid fa-shield-cat", // 强调安保 (fontawesome 6 有 police-box, 或者 shield)
    },
  ],

  mainImage: "/images/s9/s9-series-2000w-electric-motorcycle-side.webp",
  sliderImage: "/images/s9/S9 Series Electric Motorcycle - 2000W Flagship.webp",
  images: [
    {
      id: 1,
      src: "/images/s9/s9-series-2000w-electric-motorcycle-side.webp",
      alt: "S9 flagship electric motorcycle side profile 2000W",
    },
    {
      id: 2,
      src: "/images/s9/s9-series-2000w-electric-motorcycle-front.webp",
      alt: "Aggressive front design with 12-inch sport tires",
    },
    {
      id: 3,
      src: "/images/s9/s9-series-2000w-electric-motorcycle-motor.webp",
      alt: "2000W high speed brushless motor hub detail",
    },
    {
      id: 4,
      src: "/images/s9/s9-series-2000w-electric-motorcycle-dashboard.webp",
      alt: "Full LCD digital dashboard displaying 78kmh",
    },
    {
      id: 5,
      src: "/images/s9/s9-series-2000w-electric-motorcycle-brakes.webp",
      alt: "Large diameter hydraulic disc brakes front and rear",
    },
    {
      id: 6,
      src: "/images/s9/s9-series-2000w-electric-motorcycle-seat.webp",
      alt: "Spacious seat for rider and passenger comfort",
    },
    {
      id: 7,
      src: "/images/s9/s9-series-2000w-electric-motorcycle-suspension.webp",
      alt: "Reinforced hydraulic shock absorbers",
    },
    {
      id: 8,
      src: "/images/s9/s9-series-2000w-electric-motorcycle-night.webp",
      alt: "S9 electric motorcycle LED lighting system at night",
    },
  ],

  highlights: [
    { iconClass: "fas fa-bolt", label: "2000W Max Power" }, // 顶级动力
    { iconClass: "fas fa-gauge-high", label: "78 km/h Fast" }, // 顶级速度
    { iconClass: "fas fa-circle-notch", label: "12-inch Tires" }, // 顶级轮毂
    { iconClass: "fas fa-battery-full", label: "72V High Voltage" }, // 顶级电压
  ],

  // 价格策略：因为是旗舰，单价高，MOQ 门槛可以适当调整文案，强调“Container Mix”
  pricing: [
    { moq: "MOQ 5+", tag: "Sample Order", price: "Standard" }, // 高端车允许更小的试单
    { moq: "MOQ 24+", tag: "20ft Container", price: "Save 5%" },
    { moq: "MOQ 48+", tag: "40ft HQ", price: "Save 12%" }, // 大车装得少，折扣力度需核算
    { moq: "MOQ 100+", tag: "Distributor", price: "Save 18%" },
  ],

  specs: [
    { label: "Rated Power", value: "2000W High-Performance" },
    { label: "Top Speed", value: "78 km/h (Highway Capable)" },
    { label: "Battery Type", value: "Lead-acid / Lithium" },
    { label: "System Voltage", value: "72V (Recommended)" }, // 2000W 必须推 72V
    { label: "Charging", value: "110V-220V" },
    // 修正：前后轮胎尺寸不一样，这是运动车型的特征
    { label: "Front Tire", value: "90/80-12 Tubeless" },
    { label: "Rear Tire", value: "110/70-12 Tubeless (Wide)" },
    { label: "Braking", value: "F/R Large Disc Brakes" },
    { label: "Seat Height", value: "760 mm" },
    { label: "Dimensions", value: "1920 × 690 × 1150 mm" }, // 全尺寸
    { label: "Wheelbase", value: "1370 mm (Long)" },
    { label: "Net Weight", value: "86.8 kg (Stable Chassis)" },
  ],

  faqs: [
    {
      question: "Do I need a license to ride the S9 (78km/h)?",
      answer:
        "Yes. In most regions (EU, US), the S9 falls under the L3e (Motorcycle) category due to its speed (>45km/h). Riders typically require a valid motorcycle license and registration.",
    },
    {
      question: "Why does the S9 use 12-inch tires instead of 10-inch?",
      answer:
        "At speeds approaching 80km/h, 12-inch tires provide significantly better gyroscopic stability, pothole clearance, and cornering grip compared to smaller scooter tires.",
    },
    {
      question: "What is the range at full speed (78km/h)?",
      answer:
        "High-speed riding consumes more energy. With a 72V 35Ah Lithium pack, expect 60-70km range. For longer routes, we can upgrade to higher capacity custom battery packs.",
    },
    {
      question: "Can the S9 be used for highway commuting?",
      answer:
        "Yes. The 2000W motor and robust chassis allow the S9 to safely merge with faster traffic flows on urban expressways and ring roads.",
    },
    {
      question: "Is the charging time longer for the 72V system?",
      answer:
        "Standard charging takes 6-8 hours. However, we offer optional Fast Chargers (5A/8A) for Lithium versions to reduce downtime by 50%.",
    },
    {
      question: "How many S9 units fit in a container?",
      answer:
        "The S9 is a full-size motorcycle. A 40HQ container holds approx. 48 units (CBU) or 80 units (SKD). We optimize packing to keep freight costs competitive.",
    },
  ],

  shippingSections: [
    {
      title: "Packaging Details",
      items: [
        { label: "Dimensions", value: "185 × 55 × 85 cm (SKD)" }, // 大车包装尺寸
        { label: "Gross Weight", value: "Approx. 150 kg" }, // 86kg净重 + 电池 + 重型铁架
        {
          label: "Protection Level",
          value: "Heavy-Duty Iron Crate + Carton", // 必须用重型铁架
        },
        {
          label: "In the Box",
          value: "Vehicle, Fast Charger (Opt), Mirrors, VIN Plate",
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
          value: "80-90 Units (Assembly Line Req.)", // CKD 需要组装线
        },
      ],
    },
    {
      title: "Logistics & Compliance",
      items: [
        { label: "Lead Time", value: "25-30 days (High QC Req.)" }, // 高速车QC更严，时间留长点
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
  batteryOptions: ["72V Lead-acid", "72V Lithium", "72V Lithium (Long Range)"], // 增加长续航选项
};

export default s9Product;