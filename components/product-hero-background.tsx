"use client";

import { useEffect, useRef } from "react";

const symbols = [
  "⚡",
  "🏍️",
  "🛵",
  "🚗",
  "🔋",
  "🔧",
  "🧰",
  "🛠️",
  "🔌",
  "⚙️",
];

export default function ProductHeroBackground() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    container.innerHTML = "";

    const count = 20;
    for (let i = 0; i < count; i += 1) {
      const particle = document.createElement("span");
      particle.className = "product-hero-particle";
      particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 15}s`;
      particle.style.animationDuration = `${10 + Math.random() * 10}s`;
      container.appendChild(particle);
    }
  }, []);

  return (
    <div className="product-hero-bg" aria-hidden="true">
      <div className="product-hero-grid" />
      <div className="product-hero-particles" ref={particlesRef} />
    </div>
  );
}
