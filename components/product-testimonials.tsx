"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const getAvatarStyle = (name: string) => {
  const colors = ["#2563EB", "#4F46E5", "#3B82F6", "#60A5FA", "#1D4ED8"];
  const index = name.length % colors.length;
  return colors[index];
};

const EngineerAvatar = ({ name }: { name: string }) => {
  const color = getAvatarStyle(name);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2);

  return (
    <div
      className="flex h-10 w-10 items-center justify-center rounded-full border-2 bg-gray-800 font-mono text-xs font-bold text-gray-200"
      style={{ borderColor: color }}
    >
      {initials}
    </div>
  );
};

const testimonialsData = [
  {
    name: "European Distributor",
    company: "EEC Market",
    content:
      "Documentation was complete and the EEC compliance package made homologation straightforward for multiple EU countries.",
    categories: [1, 2],
  },
  {
    name: "South American Assembler",
    company: "CKD Program",
    content:
      "Switching from CBU to CKD reduced duties and shortened our landed cost cycle by 25%.",
    categories: [1, 4],
  },
  {
    name: "Middle East Importer",
    company: "Regional Dealer Network",
    content:
      "Fast lead times and consistent QC allowed us to plan monthly arrivals with low warranty exposure.",
    categories: [1, 3],
  },
  {
    name: "African Fleet Operator",
    company: "Delivery & Mobility",
    content:
      "Spare parts planning and service documentation helped our technicians scale after-sales support quickly.",
    categories: [1, 5],
  },
  {
    name: "LATAM Distributor",
    company: "ODM Partner",
    content:
      "We launched a localized trim within 60 days using their ODM process and tooling support.",
    categories: [1, 5],
  },
  {
    name: "SEA Importer",
    company: "Urban Mobility",
    content:
      "Container loading specs and steel rack packaging improved our shipping efficiency immediately.",
    categories: [1, 2],
  },
  {
    name: "GCC Dealer Group",
    company: "Hot Climate Market",
    content:
      "Climate durability testing reduced heat-related failures and improved our dealer confidence.",
    categories: [1, 3],
  },
  {
    name: "OEM Partner",
    company: "Private Label",
    content:
      "Branding, badge engineering, and compliance support were handled end-to-end.",
    categories: [1, 4],
  },
  {
    name: "Global Integrator",
    company: "Multi-Region Supply",
    content:
      "They operate like a true factory partner, not a reseller. That trust enabled repeat orders.",
    categories: [1, 2],
  },
];

const getCategoryLabel = (categories: number[]) => {
  if (categories.includes(2)) return "DISTRIBUTOR";
  if (categories.includes(3)) return "IMPORTER";
  if (categories.includes(4)) return "OEM/ODM";
  if (categories.includes(5)) return "FLEET";
  return "PARTNER";
};

const CARD_WIDTH = 300;
const GAP = 24;

export default function ProductTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const tripleTestimonials = [...testimonialsData, ...testimonialsData, ...testimonialsData];
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const animationFrameId = useRef<number>(0);
  const isDown = useRef(false);
  const [singleSetWidth, setSingleSetWidth] = useState(
    testimonialsData.length * (CARD_WIDTH + GAP),
  );

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const updateSingleSetWidth = () => {
      const cards = Array.from(
        container.querySelectorAll<HTMLElement>(".testimonial-card"),
      );
      if (cards.length >= 2) {
        const span = cards[1].offsetLeft - cards[0].offsetLeft;
        if (span > 0) {
          setSingleSetWidth(span * testimonialsData.length);
        }
      }
    };

    updateSingleSetWidth();
    window.addEventListener("resize", updateSingleSetWidth);
    return () => window.removeEventListener("resize", updateSingleSetWidth);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = singleSetWidth;
    }
  }, [singleSetWidth]);

  const checkInfiniteScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const buffer = CARD_WIDTH + GAP;
    if (container.scrollLeft >= singleSetWidth * 2 - buffer) {
      container.scrollLeft -= singleSetWidth;
      scrollLeftRef.current -= singleSetWidth;
    } else if (container.scrollLeft < singleSetWidth + buffer) {
      container.scrollLeft += singleSetWidth;
      scrollLeftRef.current += singleSetWidth;
    }
  }, [singleSetWidth]);

  const applyInertia = useCallback(() => {
    if (!scrollRef.current) return;
    velocity.current *= 0.95;
    scrollRef.current.scrollLeft -= velocity.current;
    checkInfiniteScroll();
    if (Math.abs(velocity.current) > 0.1) {
      animationFrameId.current = requestAnimationFrame(applyInertia);
    }
  }, [checkInfiniteScroll]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    setIsDragging(true);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
    lastX.current = e.pageX;
    velocity.current = 0;
    cancelAnimationFrame(animationFrameId.current);
    scrollRef.current.classList.add("is-dragging");
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown.current || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = x - startX.current;
      scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
      checkInfiniteScroll();
      const newVelocity = e.pageX - lastX.current;
      velocity.current = newVelocity;
      lastX.current = e.pageX;
    };
    const handleMouseUp = () => {
      if (!isDown.current) return;
      isDown.current = false;
      setIsDragging(false);
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = requestAnimationFrame(applyInertia);
      scrollRef.current?.classList.remove("is-dragging");
    };
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      scrollRef.current?.classList.remove("is-dragging");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, applyInertia, checkInfiniteScroll]);

  useEffect(() => {
    return () => cancelAnimationFrame(animationFrameId.current);
  }, []);

  return (
    <div className="mx-auto w-full border-t border-gray-800 bg-gray-950 overflow-hidden">
      <div className="py-12 md:py-20">
        <div data-aos="fade-up" data-aos-delay={200} className="mx-auto max-w-3xl px-4 pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Trusted by Global Distributors
          </h2>
          <p className="text-lg text-gray-400">
            Factory-direct supply with OEM/ODM programs, documentation, and export-ready quality control.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay={400} className="group relative w-full">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-12 bg-linear-to-r from-gray-950 to-transparent md:w-32" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-12 bg-linear-to-l from-gray-950 to-transparent md:w-32" />
          <div
            ref={scrollRef}
            className={`flex gap-6 overflow-x-auto px-6 pb-16 pt-8 md:px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none] ${isDragging ? "cursor-grabbing" : "cursor-grab"} !scroll-auto`}
            onMouseDown={handleMouseDown}
          >
            {tripleTestimonials.map((testimonial, index) => {
              const staggerOffsets = ["mt-0", "mt-12", "mt-4", "mt-16", "mt-2"];
              const relativeIndex = index % testimonialsData.length;
              const marginTop = staggerOffsets[relativeIndex % staggerOffsets.length];
              const isKeyClient =
                testimonial.company.includes("Siemens") ||
                testimonial.company.includes("Lockheed") ||
                testimonial.company.includes("Boston");
              const widthClass = "w-[300px] flex-none";
              const bgClass = isKeyClient
                ? "bg-linear-to-br from-gray-900 via-blue-900/10 to-gray-900 border-blue-500/40 shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)]"
                : "bg-linear-to-br from-gray-900 via-gray-800/20 to-gray-900 border-gray-800 hover:border-blue-500/40";

              return (
                <div
                  key={`${testimonial.name}-${index}`}
                  className={`testimonial-card relative flex flex-col justify-between rounded-xl border p-6 backdrop-blur-sm transition-[border-color,box-shadow] duration-500 ${widthClass} ${marginTop} ${bgClass}`}
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div
                        className={`inline-flex items-center gap-2 rounded-full px-2 py-1 text-[10px] font-medium tracking-wide ring-1 ring-inset ${
                          isKeyClient
                            ? "bg-blue-900/20 text-blue-300 ring-blue-500/30"
                            : "bg-gray-800/50 text-gray-400 ring-gray-700"
                        }`}
                      >
                        {getCategoryLabel(testimonial.categories)}
                      </div>
                      {isKeyClient && (
                        <div className="flex gap-1">
                          <div className="h-1 w-1 rounded-full bg-blue-500 animate-pulse"></div>
                          <div className="h-1 w-1 rounded-full bg-blue-500 animate-pulse delay-75"></div>
                          <div className="h-1 w-1 rounded-full bg-blue-500 animate-pulse delay-150"></div>
                        </div>
                      )}
                    </div>
                    <p className="mb-6 font-light leading-relaxed text-gray-300 text-sm">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div
                    className={`flex items-center gap-4 border-t pt-4 ${
                      isKeyClient ? "border-blue-500/20" : "border-gray-800/50"
                    }`}
                  >
                    <EngineerAvatar name={testimonial.name} />
                    <div>
                      <div className="text-sm font-semibold text-gray-200">{testimonial.name}</div>
                      <div
                        className={`font-mono text-xs ${
                          isKeyClient ? "text-blue-400" : "text-gray-500"
                        }`}
                      >
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
