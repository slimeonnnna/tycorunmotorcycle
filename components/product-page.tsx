
import Image from "next/image";

function ProductHero() {
  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center pb-12 md:pb-16">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
            <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent font-mono text-sm tracking-wider uppercase">End-to-End Architecture</span>
          </div>
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl" data-aos="fade-up">
            More Than Just a Battery Pack
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">
            Slimeon delivers a unified power platform. We integrate high-density cells, thermal logic, and intelligent BMS into a ruggedized enclosure designed for your specific chassis.
          </p>
        </div>
        <div className="relative mx-auto max-w-5xl" data-aos="fade-up" data-aos-delay="400">
          <div className="relative rounded-2xl border border-gray-800 bg-gray-900/40 p-1 backdrop-blur-sm">
             <div className="absolute inset-0 z-0 opacity-20">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                   <pattern id="prod-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="1" height="1" fill="#4B5563"/></pattern>
                   <rect width="100%" height="100%" fill="url(#prod-grid)"/>
                </svg>
             </div>
             <div className="aspect-[16/7] relative z-10 flex items-center justify-center overflow-hidden rounded-xl bg-gray-950/80">
                <svg viewBox="0 0 900 400" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                   <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" /></marker>
                   </defs>
                   <g transform="translate(50, 140)">
                      <rect x="0" y="0" width="160" height="120" rx="16" fill="#111827" stroke="#2563EB" strokeWidth="2" />
                      <rect x="60" y="30" width="40" height="6" rx="2" fill="#3B82F6" />
                      <rect x="50" y="45" width="60" height="6" rx="2" fill="#3B82F6" opacity="0.8" />
                      <rect x="40" y="60" width="80" height="6" rx="2" fill="#3B82F6" opacity="0.6" />
                      <text x="80" y="95" textAnchor="middle" fill="#E5E7EB" fontSize="14" fontWeight="600" fontFamily="var(--font-nacelle)">Slimeon</text>
                      <text x="80" y="112" textAnchor="middle" fill="#9CA3AF" fontSize="10" fontFamily="monospace">Unified Platform</text>
                   </g>
                   <path d="M 210 200 H 260" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowhead)" />
                   <text x="235" y="190" textAnchor="middle" fill="#3B82F6" fontSize="10" fontWeight="bold">INTEGRATED</text>
                   <g transform="translate(270, 50)">
                      <rect x="0" y="0" width="360" height="300" rx="20" fill="#1F2937" fillOpacity="0.2" stroke="#4B5563" strokeWidth="2" strokeDasharray="8 8" />
                      <rect x="100" y="-12" width="160" height="24" rx="12" fill="#111827" stroke="#4B5563" />
                      <text x="180" y="4" textAnchor="middle" fill="#9CA3AF" fontSize="11" fontWeight="600" letterSpacing="1">RUGGEDIZED ENCLOSURE</text>
                      <g transform="translate(30, 40)">
                         <rect width="90" height="220" rx="8" fill="#111827" stroke="#374151" strokeWidth="1" />
                         <g transform="translate(25, 30)">
                            <circle cx="10" cy="10" r="8" stroke="#3B82F6" strokeWidth="1.5" />
                            <circle cx="30" cy="10" r="8" stroke="#3B82F6" strokeWidth="1.5" />
                            <circle cx="10" cy="35" r="8" stroke="#3B82F6" strokeWidth="1.5" />
                            <circle cx="30" cy="35" r="8" stroke="#3B82F6" strokeWidth="1.5" />
                            <circle cx="10" cy="60" r="8" stroke="#3B82F6" strokeWidth="1.5" />
                            <circle cx="30" cy="60" r="8" stroke="#3B82F6" strokeWidth="1.5" />
                         </g>
                         <text x="45" y="180" textAnchor="middle" fill="#E5E7EB" fontSize="12" fontWeight="600">High-Density</text>
                         <text x="45" y="195" textAnchor="middle" fill="#9CA3AF" fontSize="11">Cells</text>
                      </g>
                      <g transform="translate(135, 40)">
                         <rect width="90" height="220" rx="8" fill="#111827" stroke="#374151" strokeWidth="1" />
                         <g transform="translate(30, 30)">
                            <path d="M15 0 V 60" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="15" cy="70" r="6" fill="#EF4444" />
                            <path d="M5 20 H 25 M 5 35 H 25 M 5 50 H 25" stroke="#EF4444" strokeWidth="1" />
                         </g>
                         <text x="45" y="180" textAnchor="middle" fill="#E5E7EB" fontSize="12" fontWeight="600">Thermal</text>
                         <text x="45" y="195" textAnchor="middle" fill="#9CA3AF" fontSize="11">Logic</text>
                      </g>
                      <g transform="translate(240, 40)">
                         <rect width="90" height="220" rx="8" fill="#111827" stroke="#374151" strokeWidth="1" />
                         <g transform="translate(25, 30)">
                            <rect x="5" y="10" width="30" height="40" rx="2" stroke="#10B981" strokeWidth="2" />
                            <path d="M0 20 H 5 M 0 30 H 5 M 0 40 H 5" stroke="#10B981" />
                            <path d="M35 20 H 40 M 35 30 H 40 M 35 40 H 40" stroke="#10B981" />
                         </g>
                         <text x="45" y="180" textAnchor="middle" fill="#E5E7EB" fontSize="12" fontWeight="600">Intelligent</text>
                         <text x="45" y="195" textAnchor="middle" fill="#9CA3AF" fontSize="11">BMS</text>
                      </g>
                   </g>
                   <path d="M 630 200 H 680" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrowhead)" />
                   <g transform="translate(690, 140)">
                      <rect x="0" y="0" width="160" height="120" rx="16" fill="#111827" stroke="#374151" strokeWidth="2" />
                      <g transform="translate(30, 40)">
                         <path d="M10 20 H 90" stroke="#E5E7EB" strokeWidth="2" />
                         <circle cx="20" cy="25" r="10" stroke="#E5E7EB" strokeWidth="2" />
                         <circle cx="80" cy="25" r="10" stroke="#E5E7EB" strokeWidth="2" />
                         <path d="M20 10 L 30 0 H 70 L 80 10" stroke="#E5E7EB" strokeWidth="2" fill="none"/>
                      </g>
                      <text x="80" y="95" textAnchor="middle" fill="#E5E7EB" fontSize="14" fontWeight="600" fontFamily="var(--font-nacelle)">Vehicle</text>
                      <text x="80" y="112" textAnchor="middle" fill="#9CA3AF" fontSize="10" fontFamily="monospace">Specific Chassis</text>
                   </g>
                   <path d="M 130 140 V 120 H 770 V 140" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3" fill="none" />
                   <text x="450" y="110" textAnchor="middle" fill="#3B82F6" fontSize="10" letterSpacing="2" opacity="0.8">END-TO-END POWER DELIVERY</text>
                </svg>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemLayers() {
  const layers = [
    { id: "01", title: "Cell Array", subtitle: "The Core Engine", description: "We source Tier-1 automotive grade cells (Samsung SDI, LG, CATL). Whether you need cylindrical (18650/21700) or prismatic formats, we match impedance and capacity to <1% variance.", features: ["NMC / LFP Chemistries", "Laser-welded busbars", "Cell-level fusing"] },
    { id: "02", title: "Thermal Matrix", subtitle: "Active Safety", description: "Heat is the enemy of longevity. Our designs incorporate phase-change materials (PCM), liquid cooling plates, or thermal interface gaps to maintain optimal ΔT across the pack.", features: ["Liquid Cooling Plates", "Aerogel Propagation Barriers", "Temp Sensors x 12"] },
    { id: "03", title: "Slimeon BMS", subtitle: "Digital Brain", description: "Our proprietary BMS handles SoC/SoH algorithms with 99.5% accuracy. Includes redundant protection circuits and CAN/RS485/Bluetooth communication interfaces.", features: ["Dual-Core Processor", "Black Box Data Logging", "Remote Firmware Updates"] },
    { id: "04", title: "Rugged Enclosure", subtitle: "Physical Shield", description: "From extruded aluminum to IP67-rated injection molded plastics. Designed to withstand 50G shock and vibration profiles common in industrial robotics.", features: ["IP67 / IP6K9K Rated", "EMI/RFI Shielding", "Custom Mounting Points"] }
  ];

  return (
    <section className="relative border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-12 md:mb-16 text-center">
           <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4">Anatomy of a Slimeon System</h2>
           <p className="text-gray-400 max-w-2xl mx-auto">A battery is a system of systems. We optimize every layer for performance density and safety.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           <div className="relative order-2 lg:order-1" data-aos="fade-right">
              <div className="relative flex flex-col gap-4">
                 <div className="h-24 w-full rounded-xl border border-gray-700 bg-gray-900/80 p-4 flex items-center justify-between shadow-lg transform translate-x-4"><span className="font-mono text-xs text-gray-500">LAYER_04 [ENCLOSURE]</span><div className="h-2 w-24 bg-gray-700 rounded-full"></div></div>
                 <div className="h-20 w-full rounded-xl border border-blue-900/50 bg-blue-900/10 p-4 flex items-center justify-between shadow-lg backdrop-blur-sm z-10 border-l-4 border-l-blue-500">
                    <span className="font-mono text-xs text-blue-400">LAYER_03 [BMS_LOGIC]</span>
                    <div className="flex gap-2"><div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div><div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse delay-75"></div><div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse delay-150"></div></div>
                 </div>
                 <div className="h-16 w-full rounded-xl border border-gray-800 bg-gray-900/60 p-4 flex items-center justify-between shadow-lg transform translate-x-4"><span className="font-mono text-xs text-gray-500">LAYER_02 [THERMAL]</span><div className="h-2 w-32 bg-linear-to-r from-red-900/50 to-blue-900/50 rounded-full"></div></div>
                 <div className="h-32 w-full rounded-xl border border-gray-800 bg-gray-900 p-4 flex items-center justify-between shadow-lg transform translate-x-8"><span className="font-mono text-xs text-gray-500">LAYER_01 [CELLS]</span><div className="grid grid-cols-6 gap-2">{[...Array(12)].map((_,i) => (<div key={i} className="h-4 w-4 rounded-full bg-gray-700 border border-gray-600"></div>))}</div></div>
              </div>
           </div>
           <div className="order-1 lg:order-2 space-y-8">
              {layers.map((layer, index) => (
                 <div key={index} className="group" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="flex items-baseline gap-4 mb-2">
                       <span className="text-sm font-mono text-blue-500 font-bold">{layer.id}</span>
                       <h3 className="text-xl font-semibold text-gray-200 group-hover:text-white transition-colors">{layer.title} <span className="text-gray-600 font-normal text-base ml-2">/ {layer.subtitle}</span></h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3 pl-10 border-l border-gray-800 group-hover:border-blue-500/30 transition-colors">{layer.description}</p>
                    <ul className="pl-10 flex gap-4 text-xs font-mono text-gray-500">{layer.features.map((feat, i) => (<li key={i} className="flex items-center gap-1"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>{feat}</li>))}</ul>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}

function SpecGrid() {
  const specs = [
    { category: "Voltage Platforms", items: [{ label: "Low Voltage", value: "12V / 24V / 48V" }, { label: "High Voltage", value: "96V - 800V" }, { label: "Architecture", value: "Master-Slave" }] },
    { category: "Energy Density", items: [{ label: "Gravimetric", value: "Up to 260 Wh/kg" }, { label: "Volumetric", value: "Up to 550 Wh/L" }, { label: "Cell Type", value: "NMC 811 / LFP" }] },
    { category: "Communication", items: [{ label: "Protocols", value: "CAN 2.0B / J1939 / RS485" }, { label: "IoT", value: "4G LTE / WiFi / GPS" }, { label: "Connector", value: "Amphenol / TE" }] },
    { category: "Environmental", items: [{ label: "Discharge Temp", value: "-30°C to +60°C" }, { label: "Charge Temp", value: "0°C to +45°C" }, { label: "IP Rating", value: "IP65 / IP67" }] }
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
         <div className="mb-12">
            <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4">Technical Capabilities</h2>
            <p className="text-gray-400">Our standard configurations cover 90% of industrial use cases. For the other 10%, we build custom.</p>
         </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((group, idx) => (
               <div key={idx} className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-colors">
                  <div className="bg-gray-800/50 px-6 py-3 border-b border-gray-800"><h3 className="font-semibold text-gray-200 text-sm">{group.category}</h3></div>
                  <div className="p-6 space-y-4">{group.items.map((item, i) => (<div key={i}><div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</div><div className="text-sm font-mono text-blue-400">{item.value}</div></div>))}</div>
               </div>
            ))}
         </div>
         <div className="mt-12 flex justify-center">
            <button className="btn-sm bg-gray-800 text-gray-200 hover:bg-gray-700 border border-gray-700 flex items-center gap-2">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
               Download Full Spec Sheet (PDF)
            </button>
         </div>
      </div>
    </section>
  );
}

function ProcessSteps() {
  const steps = [
    { title: "Requirements", desc: "Load profile analysis & mech constraints." },
    { title: "Engineering", desc: "CAD, Thermal CFD, & Circuit design." },
    { title: "Prototyping", desc: "Functional samples in 7-10 days." },
    { title: "Validation", desc: "UN 38.3 & Cycle life testing." },
    { title: "Production", desc: "Automated assembly & EOL testing." },
  ];

  return (
    <section className="bg-gray-950 border-t border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
           <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4">From Concept to Production</h2>
           <p className="text-gray-400">Our agile NRE process is designed to get your hardware to market faster.</p>
        </div>
        <div className="relative">
           <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gray-800 z-0"></div>
           <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {steps.map((step, idx) => (
                 <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                    <div className="w-12 h-12 rounded-full bg-gray-900 border-2 border-gray-700 text-gray-400 flex items-center justify-center font-bold mb-4 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors">{idx + 1}</div>
                    <h3 className="text-lg font-semibold text-gray-200 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500 max-w-[150px]">{step.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}

function Applications() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
         <div className="mb-12">
            <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4">Built for Heavy Duty</h2>
         </div>
         <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 aspect-[4/3]">
               <div className="absolute inset-0 bg-linear-to-t from-gray-950 to-transparent opacity-90 z-10" />
               <div className="absolute bottom-0 left-0 p-6 z-20">
                  <div className="text-blue-500 text-xs font-mono uppercase tracking-widest mb-1">Robotics</div>
                  <h3 className="text-xl font-semibold text-gray-100">Warehouse AGVs</h3>
                  <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">24/7 operation with fast-charging LFP chemistry and opportunistic charging logic.</p>
               </div>
               <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <svg width="100%" height="100%"><pattern id="app-grid-1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#4B5563" /></pattern><rect width="100%" height="100%" fill="url(#app-grid-1)" /></svg>
               </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 aspect-[4/3]">
               <div className="absolute inset-0 bg-linear-to-t from-gray-950 to-transparent opacity-90 z-10" />
               <div className="absolute bottom-0 left-0 p-6 z-20">
                  <div className="text-blue-500 text-xs font-mono uppercase tracking-widest mb-1">Industrial</div>
                  <h3 className="text-xl font-semibold text-gray-100">Construction Equipment</h3>
                  <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">High-voltage systems (400V+) designed for high torque loads and extreme vibration.</p>
               </div>
               <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                   <svg width="100%" height="100%"><path d="M0 0 L 100 100" stroke="#4B5563" strokeWidth="1"/><path d="M100 0 L 0 100" stroke="#4B5563" strokeWidth="1"/></svg>
               </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 aspect-[4/3]">
               <div className="absolute inset-0 bg-linear-to-t from-gray-950 to-transparent opacity-90 z-10" />
               <div className="absolute bottom-0 left-0 p-6 z-20">
                  <div className="text-blue-500 text-xs font-mono uppercase tracking-widest mb-1">Medical</div>
                  <h3 className="text-xl font-semibold text-gray-100">Mobile Healthcare</h3>
                  <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Redundant safety architecture for life-critical mobile workstations and ventilators.</p>
               </div>
               <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <svg width="100%" height="100%"><rect x="0" y="0" width="100%" height="100%" fill="none" stroke="#4B5563" strokeWidth="20" strokeDasharray="10 10" /></svg>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <SystemLayers />
      <SpecGrid />
      <Applications />
      <ProcessSteps />
    </>
  );
}
