
"use client";

import Link from "next/link";

export default function Cta() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="relative w-full" data-aos="fade-up">
            {/* 
              Main Card Container 
              - Inherits 'hc-card' class for base transitions and hover states (border rotation).
              - Overrides dimensions (!w-full, !h-auto) to fit the CTA layout.
              - Overrides hover scale to be more subtle for a large element.
            */}
            <div className="hc-card group relative !h-auto !w-full overflow-hidden !rounded-3xl bg-gray-900 shadow-2xl transition-all duration-500 hover:!scale-[1.02] hover:!rounded-3xl z-10">
              
              {/* Inherited Border Effect (Rotates on hover) */}
              <div className="hc-card-border"></div>

              {/* Content Container */}
              <div className="relative z-10 flex min-h-[360px] w-full flex-col items-center justify-center p-8 text-center">
                
                {/* Default State: Logo & SVG (Visible by default on Desktop, Hidden on Mobile) */}
                <div className="hidden md:flex absolute inset-0 flex-col items-center justify-center transition-all duration-500 group-hover:scale-90 group-hover:opacity-0 group-hover:blur-sm">
                  <div className="mb-4 flex items-center justify-center rounded-full bg-gray-800/50 p-6 shadow-lg backdrop-blur-sm ring-1 ring-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <defs>
                        <linearGradient
                          id="cta-logo-gradient"
                          x1="4"
                          y1="4"
                          x2="28"
                          y2="28"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#2563EB" />
                          <stop offset="1" stopColor="#3B82F6" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#cta-logo-gradient)"
                        d="M26 6H12.5L6.5 12V15H17L26 6Z"
                      />
                      <circle cx="26" cy="6" r="2" fill="#2563EB" />
                      <path
                        fill="url(#cta-logo-gradient)"
                        d="M6 26H19.5L25.5 20V17H15L6 26Z"
                      />
                      <circle cx="6" cy="26" r="2" fill="#3B82F6" />
                    </svg>
                  </div>
                  <div className="font-nacelle text-2xl font-semibold text-gray-200">
                    Slimeon Industrial
                  </div>
                  <div className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-blue-500">
                    Interactive
                  </div>
                </div>

                {/* Hover State: CTA Content (Always visible on Mobile, reveal on hover for Desktop) */}
                <div className="flex max-w-2xl flex-col items-center justify-center transition-all duration-500 opacity-100 translate-y-0 md:opacity-0 md:translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 md:group-hover:delay-500">
                  <h2 className="mb-4 font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl">
                    Ready to Engineer Your Advantage?
                  </h2>
                  <p className="mb-8 text-lg text-gray-400">
                    Start your custom battery project with our rapid prototyping track.
                  </p>
                  
                  <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Link
                      href="/contact"
                      className="btn group bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                    >
                      <span className="relative inline-flex items-center">
                        Contact Us
                        <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                          -&gt;
                        </span>
                      </span>
                    </Link>
                    <a
                      className="btn relative bg-gray-800 text-gray-300 hover:bg-gray-700"
                      href="#0"
                    >
                      Download Datasheet
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Inherited Ripple Effect (Sibling to hc-card to work with CSS selectors) */}
            <div className="hc-ripple z-0 !rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
