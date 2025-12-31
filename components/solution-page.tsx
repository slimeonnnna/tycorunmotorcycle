
"use client";

import Image from "next/image";
import Link from "next/link";

// --- STRUCTURAL DATA FOR PSEO (Replace this object with your JSON source) ---
const solutionData = {
  meta: {
    category: "Logistics & Warehousing",
    title: "Powering the 24/7 Autonomous Supply Chain",
    subtitle: "Eliminate charging downtime for AGVs and AMRs with our high-cycle LFP architecture and rapid-charge thermal management.",
    label: "Solution_ID: LOG_AMR_04"
  },
  challenges: [
    {
      title: "The Downtime Trap",
      description: "Standard lead-acid or low-grade lithium packs require 4-8 hours of charging, forcing fleets to buy 2x the robots just to maintain uptime."
    },
    {
      title: "Thermal Throttling",
      description: "Warehouse environments vary from -10°C freezers to 40°C loading docks. Generic packs throttle performance, slowing down logistics flow."
    },
    {
      title: "Cycle Life Degradation",
      description: "24/7 operations burn through standard batteries in 12 months. Replacement costs and labor disrupt ROI calculations."
    }
  ],
  solution: {
    heading: "Engineered for Continuous Op",
    description: "Our logistics-grade power systems utilize LiFePO4 chemistry paired with a custom thermal management layer, allowing for 1C charging rates without degradation.",
    features: [
      "Opportunistic Charging: 10% to 80% in 20 mins",
      "3000+ Cycle Life at 100% Depth of Discharge",
      "CANOpen integration with Fleet Management Systems",
      "Integrated heater mats for cold-storage ops"
    ]
  },
  specs: [
    { label: "Chemistry", value: "LFP (LiFePO4)" },
    { label: "Voltage", value: "24V / 48V" },
    { label: "Capacity", value: "100Ah - 400Ah" },
    { label: "Charge Rate", value: "1C Continuous" },
    { label: "IP Rating", value: "IP54 / IP65" },
    { label: "Comms", value: "CAN Bus 2.0B" },
  ],
  results: [
    { value: "40%", label: "Reduction in Fleet Size needed" },
    { value: "3x", label: "Longer Lifespan vs Lead Acid" },
    { value: "0", label: "Thermal Incidents Reported" }
  ]
};

function SolutionHero() {
  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="md:flex md:justify-between md:items-center">
          <div className="max-w-3xl mb-8 md:mb-0" data-aos="fade-up">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent font-mono text-sm tracking-wider uppercase">
                {solutionData.meta.category}
              </span>
            </div>
            <h1 className="mb-6 font-nacelle text-4xl font-semibold text-gray-100 md:text-5xl">
              {solutionData.meta.title}
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              {solutionData.meta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn group bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                <span className="relative inline-flex items-center">
                  Request Datasheet
                  <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </Link>
            </div>
          </div>
          
          {/* Technical Visual / ID Tag */}
          <div className="relative" data-aos="fade-left" data-aos-delay="200">
             <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl backdrop-blur-sm">
                <div className="font-mono text-xs text-gray-500 mb-2">SYSTEM_CONFIG</div>
                <div className="text-blue-400 font-mono text-lg font-bold">{solutionData.meta.label}</div>
                <div className="mt-4 space-y-2">
                   <div className="h-1 w-32 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-blue-500"></div>
                   </div>
                   <div className="h-1 w-24 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-blue-500 opacity-60"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Challenges() {
  return (
    <section className="relative border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-12">
          <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4" data-aos="fade-up">The Challenge</h2>
          <p className="text-gray-400" data-aos="fade-up" data-aos-delay="100">Why off-the-shelf batteries fail in {solutionData.meta.category}.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {solutionData.challenges.map((challenge, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 p-8 transition-colors hover:border-gray-700"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-200">
                   <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="font-nacelle text-xl font-semibold text-gray-100 mb-3">{challenge.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-400 text-xs font-mono mb-6">
                TYCORUN_SOLUTION_ARCH
             </div>
             <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-6">{solutionData.solution.heading}</h2>
             <p className="text-gray-400 mb-8 leading-relaxed">
               {solutionData.solution.description}
             </p>
             <ul className="space-y-4">
                {solutionData.solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-blue-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{feature}</span>
                  </li>
                ))}
             </ul>
          </div>
          
          <div className="relative" data-aos="fade-left">
            <div className="relative rounded-2xl border border-gray-800 bg-gray-900 p-1">
               <div className="absolute inset-0 bg-linear-to-tr from-blue-500/5 to-transparent rounded-2xl pointer-events-none"></div>
               {/* Abstract Technical Diagram */}
               <div className="aspect-square md:aspect-[4/3] relative rounded-xl bg-gray-950 overflow-hidden flex items-center justify-center">
                  <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
                     <defs>
                        <pattern id="sol-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                           <circle cx="1" cy="1" r="1" fill="#374151" />
                        </pattern>
                     </defs>
                     <rect width="100%" height="100%" fill="url(#sol-grid)" />
                     
                     {/* Diagram Elements */}
                     <rect x="50" y="50" width="300" height="200" rx="4" stroke="#4B5563" strokeWidth="2" fill="#111827" fillOpacity="0.5" />
                     
                     {/* Modules */}
                     <g transform="translate(70, 70)">
                        <rect width="60" height="160" rx="2" stroke="#3B82F6" strokeWidth="2" fill="#1E3A8A" fillOpacity="0.2" />
                        <path d="M30 0 V 160" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 2"/>
                     </g>
                     <g transform="translate(140, 70)">
                        <rect width="60" height="160" rx="2" stroke="#3B82F6" strokeWidth="2" fill="#1E3A8A" fillOpacity="0.2" />
                        <path d="M30 0 V 160" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 2"/>
                     </g>
                     
                     {/* BMS */}
                     <g transform="translate(240, 70)">
                        <rect width="90" height="100" rx="4" stroke="#10B981" strokeWidth="2" fill="#064E3B" fillOpacity="0.2" />
                        <text x="45" y="55" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="bold">BMS</text>
                     </g>
                     
                     {/* Thermal Lines */}
                     <path d="M 70 250 H 330" stroke="#EF4444" strokeWidth="2" />
                     <text x="200" y="270" textAnchor="middle" fill="#EF4444" fontSize="10">Active Thermal Management Layer</text>
                     
                     {/* Connection */}
                     <path d="M 200 150 H 240" stroke="#E5E7EB" strokeWidth="2" markerEnd="url(#arrow)" />
                  </svg>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecsAndResults() {
  return (
    <section className="bg-gray-900 border-t border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
         <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Specs Table */}
            <div className="lg:col-span-7" data-aos="fade-up">
               <h3 className="text-xl font-semibold text-gray-100 mb-6">Technical Specifications</h3>
               <div className="overflow-hidden rounded-xl border border-gray-800">
                  <table className="w-full text-left text-sm text-gray-400">
                     <thead className="bg-gray-950 text-gray-200">
                        <tr>
                           <th className="px-6 py-4 font-medium">Parameter</th>
                           <th className="px-6 py-4 font-medium">Specification</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-800 bg-gray-900/50">
                        {solutionData.specs.map((spec, idx) => (
                           <tr key={idx} className="hover:bg-gray-800/50 transition-colors">
                              <td className="px-6 py-4 font-medium text-gray-300">{spec.label}</td>
                              <td className="px-6 py-4 font-mono text-blue-400">{spec.value}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            {/* Impact Metrics */}
            <div className="lg:col-span-5 flex flex-col justify-center" data-aos="fade-up" data-aos-delay="200">
               <h3 className="text-xl font-semibold text-gray-100 mb-6">Operational Impact</h3>
               <div className="space-y-6">
                  {solutionData.results.map((res, idx) => (
                     <div key={idx} className="bg-gray-950 border border-gray-800 p-6 rounded-xl flex items-center justify-between">
                        <div>
                           <div className="text-3xl font-nacelle font-bold text-gray-100">{res.value}</div>
                           <div className="text-sm text-gray-500">{res.label}</div>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-blue-900/20 flex items-center justify-center text-blue-500">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </div>
    </section>
  );
}

export default function SolutionPage() {
  return (
    <>
      <SolutionHero />
      <Challenges />
      <Architecture />
      <SpecsAndResults />
    </>
  );
}
