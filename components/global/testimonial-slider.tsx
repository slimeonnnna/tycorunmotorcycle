"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "TYCORUN helped us cut delivery costs by 32% while improving rider uptime across every shift.",
    name: "Operations Director",
    title: "National Pizza Chain",
  },
  {
    quote:
      "Battery swaps went from a pain point to a 30-second routine with predictable maintenance planning.",
    name: "Fleet Manager",
    title: "MetroLogix",
  },
  {
    quote:
      "Service downtime dropped immediately once we standardized platform parts and trained our riders.",
    name: "Regional Ops Lead",
    title: "QuickDrop",
  },
  {
    quote:
      "Predictable availability and parts allocation let us scale faster without sacrificing delivery SLAs.",
    name: "Procurement Head",
    title: "UrbanFresh",
  },
  {
    quote: "Compliance support and launch readiness kept every new market rollout on time.",
    name: "Export Director",
    title: "PrimeCourier",
  },
];

export default function TestimonialSlider() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);

  const getClosestIndex = (scrollLeft: number) => {
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const distance = Math.abs(card.offsetLeft - scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollLeft = viewport.scrollLeft;
        const closestIndex = getClosestIndex(scrollLeft);

        setActiveIndex(closestIndex % testimonials.length);

        if (isDraggingRef.current) {
          ticking = false;
          return;
        }
        ticking = false;
      });
    };

    viewport.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      viewport.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const handlePointerDown = (event: PointerEvent) => {
      isDraggingRef.current = true;
      dragStartXRef.current = event.clientX;
      dragStartScrollRef.current = viewport.scrollLeft;
      viewport.setPointerCapture(event.pointerId);
      viewport.classList.add("is-dragging");
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const delta = event.clientX - dragStartXRef.current;
      viewport.scrollLeft = dragStartScrollRef.current - delta;
    };

    const handlePointerUp = (event: PointerEvent) => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      viewport.releasePointerCapture(event.pointerId);
      viewport.classList.remove("is-dragging");
    };

    viewport.addEventListener("pointerdown", handlePointerDown);
    viewport.addEventListener("pointermove", handlePointerMove);
    viewport.addEventListener("pointerup", handlePointerUp);
    viewport.addEventListener("pointercancel", handlePointerUp);
    viewport.addEventListener("pointerleave", handlePointerUp);

    return () => {
      viewport.removeEventListener("pointerdown", handlePointerDown);
      viewport.removeEventListener("pointermove", handlePointerMove);
      viewport.removeEventListener("pointerup", handlePointerUp);
      viewport.removeEventListener("pointercancel", handlePointerUp);
      viewport.removeEventListener("pointerleave", handlePointerUp);
    };
  }, []);

  const handleDotClick = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      viewportRef.current?.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    }
  };

  return (
    <section className="testimonial-area">
      <div className="testimonial-container">
        <div className="testimonial-title white-title">
          <h2>Trusted by Global Distributors</h2>
          <p>
            Factory-direct supply with OEM/ODM programs, documentation, and export-ready
            quality control.
          </p>
        </div>
        <div className="testimonial-viewport" ref={viewportRef}>
          <div className="testimonial-track">
            {testimonials.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="testimonial-card"
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
              >
                <div className="round-1 round"></div>
                <div className="round-2 round"></div>
                <p>{item.quote}</p>
                <div className="client-info">
                  <div className="client-video">
                    <span aria-hidden="true">
                      <img src="/svg/testimonial-play.svg" alt="" />
                    </span>
                  </div>
                  <div className="client-details">
                    <h6>{item.name}</h6>
                    <span>{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="testimonial-dots" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              aria-pressed={activeIndex === index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
