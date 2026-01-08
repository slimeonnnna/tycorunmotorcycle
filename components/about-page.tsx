
"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import * as THREE from "three";

import { cities } from "./cities-data";

function AboutAuthHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);
  const [isGold, setIsGold] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: {
      x: number;
      y: number;
      speed: number;
      opacity: number;
      fadeDelay: number;
      fadeStart: number;
      fadingOut: boolean;
    }[] = [];
    let particleCount = 0;
    let rafId = 0;

    const calculateParticleCount = () =>
      Math.floor((canvas.width * canvas.height) / 6000);

    const resetParticle = (p: {
      x: number;
      y: number;
      speed: number;
      opacity: number;
      fadeDelay: number;
      fadeStart: number;
      fadingOut: boolean;
    }) => {
      p.x = Math.random() * canvas.width;
      p.y = Math.random() * canvas.height;
      p.speed = Math.random() / 5 + 0.1;
      p.opacity = 1;
      p.fadeDelay = Math.random() * 600 + 100;
      p.fadeStart = Date.now() + p.fadeDelay;
      p.fadingOut = false;
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i += 1) {
        const particle = {
          x: 0,
          y: 0,
          speed: 0,
          opacity: 1,
          fadeDelay: 0,
          fadeStart: 0,
          fadingOut: false,
        };
        resetParticle(particle);
        particle.y = Math.random() * canvas.height;
        particles.push(particle);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.y -= particle.speed;
        if (particle.y < 0) {
          resetParticle(particle);
        }

        if (!particle.fadingOut && Date.now() > particle.fadeStart) {
          particle.fadingOut = true;
        }

        if (particle.fadingOut) {
          particle.opacity -= 0.008;
          if (particle.opacity <= 0) {
            resetParticle(particle);
          }
        }

        ctx.fillStyle = `rgba(${255 - Math.random() * 255 / 2}, 255, 255, ${particle.opacity})`;
        ctx.fillRect(particle.x, particle.y, 0.4, Math.random() * 2 + 1);
      });
      rafId = window.requestAnimationFrame(animate);
    };

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particleCount = calculateParticleCount();
      initParticles();
    };

    onResize();
    window.addEventListener("resize", onResize);
    initParticles();
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const container = globeRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 1, 1500);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const geometry = new THREE.BufferGeometry();
    const material = new THREE.PointsMaterial({ color: 0x22aaff, size: 3 });
    const radius = 500;

    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const positions = new Float32Array(cities.length * 3);
    const directions = new Float32Array(cities.length * 3);
    const factors = new Float32Array(cities.length);
    const growths = new Float32Array(cities.length);

    const geoToCartesian = (lat: number, lon: number) => {
      const latRad = (lat * Math.PI) / 180;
      const lonRad = (lon * Math.PI) / 180;
      const x = -400 * Math.cos(latRad) * Math.cos(lonRad);
      const y = 400 * Math.sin(latRad);
      const z = 400 * Math.cos(latRad) * Math.sin(lonRad);
      return [x, y, z] as const;
    };

    cities.forEach((city: [number, number], index: number) => {
      const [x, y, z] = geoToCartesian(city[0], city[1]);
      const offset = index * 3;
      positions[offset] = x;
      positions[offset + 1] = y;
      positions[offset + 2] = z;

      const length = Math.sqrt(x * x + y * y + z * z) || 1;
      directions[offset] = x / length;
      directions[offset + 1] = y / length;
      directions[offset + 2] = z / length;

      factors[index] = 100 + Math.random() * 1000;
      growths[index] = Math.min(0.9, 0.35 + Math.random());
    });

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const onResize = () => {
      const { clientWidth, clientHeight } = container;
      if (!clientWidth || !clientHeight) return;
      camera.aspect = clientWidth / clientHeight;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.position.z = 1500;
      camera.updateProjectionMatrix();
    };

    onResize();
    window.addEventListener("resize", onResize);

    let rafId = 0;
    const animate = () => {
      rafId = window.requestAnimationFrame(animate);

      for (let i = 0; i < cities.length; i += 1) {
        if (factors[i] > 1) {
          factors[i] *= growths[i];
        }
        const offset = i * 3;
        const scale = radius + factors[i];
        positions[offset] = directions[offset] * scale;
        positions[offset + 1] = directions[offset + 1] * scale;
        positions[offset + 2] = directions[offset + 2] * scale;
      }

      geometry.attributes.position.needsUpdate = true;

      const time = Date.now() * 0.00005;
      const hue = ((360 * (1.0 + time)) % 360) / 360;
      material.color.setHSL(hue, 0.5, 0.5);
      particles.rotation.y += 0.006;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(rafId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className={`about-auth-hero${isGold ? " gold" : ""}`}>
      <div className="header">
        <div className="mid-spot" onClick={() => setIsGold((prev) => !prev)}></div>

        <div className="spotlight">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <canvas id="particleCanvas" ref={canvasRef}></canvas>

      <div className="heroSubP">
        <span>Discover</span>
      </div>
      <div className="hero">
        <div className="heroT">
          <span>TYCORUN</span>
          <span>TYCORUN</span>
        </div>
      </div>
      <h1 className="heroP">
        A Global Electric Motorcycle Manufacturer, <br />
        Built for OEM Excellence.
      </h1>

      <div id="bucket" className="globe" ref={globeRef} aria-hidden="true"></div>
      <div className="hero-spacer"></div>

    </section>
  );
}

class TycCarousel {
  root: HTMLDivElement;
  viewport: HTMLDivElement;
  track: HTMLDivElement;
  slides: HTMLElement[];
  prevBtn: HTMLButtonElement | null;
  nextBtn: HTMLButtonElement | null;
  pagination: HTMLDivElement | null;
  isFF: boolean;
  n: number;
  ro: ResizeObserver | null = null;
  viewRect: DOMRect | null = null;
  pointerMoveRafId = 0;
  lastPointerEvent: PointerEvent | null = null;
  lastRenderTs = 0;
  dots: HTMLButtonElement[] = [];
  slideW = 0;
  state = {
    index: 0,
    pos: 0,
    width: 0,
    height: 0,
    gap: 28,
    dragging: false,
    hovering: false,
    pointerId: null as number | null,
    x0: 0,
    dragDx: 0,
    v: 0,
    t0: 0,
    animating: false,
  };
  opts: {
    gap: number;
    peek: number;
    rotateY: number;
    zDepth: number;
    scaleDrop: number;
    blurMax: number;
    activeLeftBias: number;
    transitionMs: number;
    keyboard: boolean;
    breakpoints: {
      mq: string;
      gap: number;
      peek: number;
      rotateY: number;
      zDepth: number;
      scaleDrop: number;
      activeLeftBias: number;
    }[];
  };
  handlers: Array<{ target: EventTarget; type: string; handler: EventListener }> =
    [];

  constructor(root: HTMLDivElement, opts: Partial<TycCarousel["opts"]> = {}) {
    this.root = root;
    this.viewport = root.querySelector(".tycCarousel-viewport") as HTMLDivElement;
    this.track = root.querySelector(".tycCarousel-track") as HTMLDivElement;
    this.slides = Array.from(
      root.querySelectorAll(".tycCarousel-slide")
    ) as HTMLElement[];
    this.prevBtn = root.querySelector(".tycCarousel-prev");
    this.nextBtn = root.querySelector(".tycCarousel-next");
    this.pagination = root.querySelector(".tycCarousel-pagination");
    this.isFF = typeof (window as Window & { InstallTrigger?: unknown })
      .InstallTrigger !== "undefined";
    this.n = this.slides.length;
    this.opts = Object.assign(
      {
        gap: 28,
        peek: 0.15,
        rotateY: 34,
        zDepth: 150,
        scaleDrop: 0.09,
        blurMax: 2.0,
        activeLeftBias: 0.12,
        transitionMs: 900,
        keyboard: false,
        breakpoints: [
          {
            mq: "(max-width: 1200px)",
            gap: 24,
            peek: 0.12,
            rotateY: 28,
            zDepth: 120,
            scaleDrop: 0.08,
            activeLeftBias: 0.1,
          },
          {
            mq: "(max-width: 1000px)",
            gap: 18,
            peek: 0.09,
            rotateY: 22,
            zDepth: 90,
            scaleDrop: 0.07,
            activeLeftBias: 0.09,
          },
          {
            mq: "(max-width: 768px)",
            gap: 14,
            peek: 0.06,
            rotateY: 16,
            zDepth: 70,
            scaleDrop: 0.06,
            activeLeftBias: 0.08,
          },
          {
            mq: "(max-width: 560px)",
            gap: 12,
            peek: 0.05,
            rotateY: 12,
            zDepth: 60,
            scaleDrop: 0.05,
            activeLeftBias: 0.07,
          },
        ],
      },
      opts
    );
    if (this.isFF) {
      this.opts.rotateY = 10;
      this.opts.zDepth = 0;
      this.opts.blurMax = 0;
    }
    this._init();
  }

  destroy() {
    this.handlers.forEach(({ target, type, handler }) => {
      target.removeEventListener(type, handler);
    });
    this.handlers = [];
    if (this.ro) {
      this.ro.disconnect();
      this.ro = null;
    }
  }

  _on(target: EventTarget, type: string, handler: EventListener) {
    target.addEventListener(type, handler);
    this.handlers.push({ target, type, handler });
  }

  _init() {
    this._setupDots();
    this._bind();
    this._preloadImages();
    this._measure();
    this.goTo(0, false);
  }

  _setupDots() {
    if (!this.pagination) return;
    this.pagination.innerHTML = "";
    this.dots = this.slides.map((_, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "tycCarousel-dot";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-label", `Go to slide ${i + 1}`);
      b.addEventListener("click", () => {
        this.goTo(i);
      });
      this.pagination?.appendChild(b);
      return b;
    });
  }

  _preloadImages() {
    this.slides.forEach((sl) => {
      const card = sl.querySelector(".mzaCard");
      if (!card) return;
      const bg = getComputedStyle(card).getPropertyValue("--mzaCard-bg");
      const m = /url\((?:'|")?([^'")]+)(?:'|")?\)/.exec(bg);
      if (m && m[1]) {
        const img = new Image();
        img.src = m[1];
      }
    });
  }

  _bind() {
    if (this.prevBtn) {
      this._on(this.prevBtn, "click", () => {
        this.prev();
      });
    }
    if (this.nextBtn) {
      this._on(this.nextBtn, "click", () => {
        this.next();
      });
    }
    const pe = this.viewport;
    this._on(pe, "pointerdown", (e) => this._onDragStart(e as PointerEvent));
    this._on(pe, "pointermove", (e) => this._onPointerMove(e as PointerEvent));
    this._on(pe, "pointerup", (e) => this._onDragEnd(e as PointerEvent));
    this._on(pe, "pointercancel", (e) => this._onDragEnd(e as PointerEvent));
    this._on(pe, "pointerenter", () => {
      this.state.hovering = true;
    });
    this._on(pe, "pointerleave", () => {
      this.state.hovering = false;
      if (!this.state.dragging) this._resetTilt();
    });
    this.ro = new ResizeObserver(() => this._measure());
    this.ro.observe(this.viewport);
    this.opts.breakpoints.forEach((bp) => {
      const m = window.matchMedia(bp.mq);
      const apply = () => {
        Object.keys(bp).forEach((k) => {
          if (k !== "mq") {
            this.opts[k as keyof TycCarousel["opts"]] =
              bp[k as keyof typeof bp] as never;
          }
        });
        this._measure();
        this._render();
      };
      if (m.addEventListener) {
        m.addEventListener("change", apply);
        this.handlers.push({ target: m, type: "change", handler: apply });
      } else if (m.addListener) {
        m.addListener(apply);
        this.handlers.push({
          target: m,
          type: "change",
          handler: apply as EventListener,
        });
      }
      if (m.matches) apply();
    });
    this._on(window, "orientationchange", () =>
      setTimeout(() => this._measure(), 250)
    );
  }

  _measure() {
    const viewRect = this.viewport.getBoundingClientRect();
    this.viewRect = viewRect;
    const rootRect = this.root.getBoundingClientRect();
    const pagRect = this.pagination?.getBoundingClientRect();
    const pagBottom = pagRect?.bottom ?? rootRect.bottom;
    const pagHeight = pagRect?.height ?? 0;
    const bottomGap = Math.max(12, Math.round(rootRect.bottom - pagBottom));
    const pagSpace = pagHeight + bottomGap;
    const availH = viewRect.height - pagSpace;
    const cardH = Math.max(220, Math.min(430, Math.round(availH * 0.67)));
    this.state.width = viewRect.width;
    this.state.height = viewRect.height;
    this.state.gap = this.opts.gap;
    this.slideW = Math.min(880, this.state.width * (1 - this.opts.peek * 2));
    this.root.style.setProperty("--mzaPagH", `${pagSpace}px`);
    this.root.style.setProperty("--mzaCardH", `${cardH}px`);
  }

  _onPointerMove(e: PointerEvent) {
    if (!this.state.dragging && !this.state.hovering) return;
    this.lastPointerEvent = e;
    if (this.pointerMoveRafId) return;
    this.pointerMoveRafId = window.requestAnimationFrame(() => {
      this.pointerMoveRafId = 0;
      const evt = this.lastPointerEvent;
      if (!evt) return;
      if (this.state.dragging || this.state.hovering) {
        this._applyTilt(evt);
      }
      this._applyDrag(evt);
    });
  }

  _applyTilt(e: PointerEvent) {
    const r = this.viewRect || this.viewport.getBoundingClientRect();
    const mx = (e.clientX - r.left) / r.width - 0.5;
    const my = (e.clientY - r.top) / r.height - 0.5;
    this.root.style.setProperty("--mzaTiltX", (my * -6).toFixed(3));
    this.root.style.setProperty("--mzaTiltY", (mx * 6).toFixed(3));
  }

  _resetTilt() {
    this.root.style.setProperty("--mzaTiltX", "0");
    this.root.style.setProperty("--mzaTiltY", "0");
  }

  _onDragStart(e: PointerEvent) {
    if (this.state.animating) return;
    if (e.pointerType === "mouse") {
      if (e.button !== 0) return;
      e.preventDefault();
    }
    this.state.dragging = true;
    this.state.pointerId = e.pointerId;
    this.viewport.setPointerCapture(e.pointerId);
    this.state.x0 = e.clientX;
    this.state.dragDx = 0;
    this.state.t0 = performance.now();
    this.state.v = 0;
  }

  _applyDrag(e: PointerEvent) {
    if (!this.state.dragging || e.pointerId !== this.state.pointerId) return;
    const dx = e.clientX - this.state.x0;
    const dt = Math.max(16, performance.now() - this.state.t0);
    this.state.v = dx / dt;
    this.state.dragDx = dx;
    const slideSpan = this.slideW + this.state.gap;
    this.state.pos = this._mod(this.state.index - dx / slideSpan, this.n);
    this._render();
  }

  _onDragEnd(e?: PointerEvent) {
    if (!this.state.dragging || (e && e.pointerId !== this.state.pointerId)) {
      return;
    }
    this.state.dragging = false;
    try {
      if (this.state.pointerId != null) {
        this.viewport.releasePointerCapture(this.state.pointerId);
      }
    } catch {}
    this.state.pointerId = null;
    if (!this.state.hovering) this._resetTilt();
    const slideSpan = this.slideW + this.state.gap;
    const v = this.state.v;
    const dx = this.state.dragDx;
    const velocityThreshold = 0.12;
    const distanceThreshold = 0.06;
    const distanceMove = Math.abs(dx) > slideSpan * distanceThreshold;
    const velocityMove = Math.abs(v) > velocityThreshold;
    let target = Math.round(this.state.pos);
    if (distanceMove || velocityMove) {
      const dir = Math.sign(distanceMove ? dx : v);
      if (dir !== 0) target = this.state.index - dir;
    }
    this.goTo(this._mod(target, this.n));
  }

  prev() {
    this.goTo(this._mod(this.state.index - 1, this.n));
  }

  next() {
    this.goTo(this._mod(this.state.index + 1, this.n));
  }

  goTo(i: number, animate = true) {
    const start = this.state.pos || this.state.index;
    const end = this._nearest(start, i);
    const dur = animate ? this.opts.transitionMs : 0;
    const t0 = performance.now();
    const ease = (x: number) => 1 - Math.pow(1 - x, 4);
    this.state.animating = true;
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / dur);
      const p = dur ? ease(t) : 1;
      this.state.pos = start + (end - start) * p;
      this._render();
      if (t < 1) window.requestAnimationFrame(step);
      else this._afterSnap(i);
    };
    window.requestAnimationFrame(step);
  }

  _afterSnap(i: number) {
    this.state.index = this._mod(Math.round(this.state.pos), this.n);
    this.state.pos = this.state.index;
    this.state.animating = false;
    this._render(true);
  }

  _nearest(from: number, target: number) {
    let d = target - Math.round(from);
    if (d > this.n / 2) d -= this.n;
    if (d < -this.n / 2) d += this.n;
    return Math.round(from) + d;
  }

  _mod(i: number, n: number) {
    return ((i % n) + n) % n;
  }

  _render(markActive = false) {
    if (!markActive) {
      const now = performance.now();
      if (now - this.lastRenderTs < 16) return;
      this.lastRenderTs = now;
    } else {
      this.lastRenderTs = performance.now();
    }
    const span = this.slideW + this.state.gap;
    const tiltX = parseFloat(this.root.style.getPropertyValue("--mzaTiltX") || "0");
    const tiltY = parseFloat(this.root.style.getPropertyValue("--mzaTiltY") || "0");
    for (let i = 0; i < this.n; i += 1) {
      let d = i - this.state.pos;
      if (d > this.n / 2) d -= this.n;
      if (d < -this.n / 2) d += this.n;
      const weight = Math.max(0, 1 - Math.abs(d) * 2);
      const biasActive = -this.slideW * this.opts.activeLeftBias * weight;
      const tx = d * span + biasActive;
      const isActiveLike = Math.abs(d) < 0.55;
      const depth = -Math.abs(d) * this.opts.zDepth * (isActiveLike ? 1 : 0.55);
      const rot = -d * this.opts.rotateY * (isActiveLike ? 1 : 0.6);
      const scale = 1 - Math.min(Math.abs(d) * this.opts.scaleDrop, 0.42);
      const blurMax = this.opts.blurMax * (isActiveLike ? 1 : 0.45);
      const blur = Math.min(Math.abs(d) * blurMax, blurMax);
      const z = Math.round(1000 - Math.abs(d) * 10);
      const s = this.slides[i];
      if (this.isFF) {
        s.style.transform = `translate(${tx}px,-50%) scale(${scale})`;
        s.style.filter = "none";
      } else {
        s.style.transform = `translate3d(${tx}px,-50%,${depth}px) rotateY(${rot}deg) scale(${scale})`;
        s.style.filter = `blur(${blur}px)`;
      }
      s.style.zIndex = `${z}`;
      const dAbs = Math.abs(d);
      s.dataset.state =
        Math.round(this.state.index) === i ? "active" : dAbs <= 1.1 ? "near" : "rest";
      const card = s.querySelector(".mzaCard") as HTMLElement | null;
      if (!card) continue;
      const parBase = Math.max(-1, Math.min(1, -d));
      const parX = parBase * 48 + tiltY * 2.0;
      const parY = tiltX * -1.5;
      const bgX = parBase * -64 + tiltY * -2.4;
      card.style.setProperty("--mzaParX", `${parX.toFixed(2)}px`);
      card.style.setProperty("--mzaParY", `${parY.toFixed(2)}px`);
      card.style.setProperty("--mzaParBgX", `${bgX.toFixed(2)}px`);
      card.style.setProperty("--mzaParBgY", `${(parY * 0.35).toFixed(2)}px`);
    }
    const active = this._mod(Math.round(this.state.pos), this.n);
    this.dots.forEach((d, i) =>
      d.setAttribute("aria-selected", i === active ? "true" : "false")
    );
  }
}

function AboutCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = carouselRef.current;
    if (!root) return;
    const instance = new TycCarousel(root, { transitionMs: 900 });
    return () => {
      instance.destroy();
    };
  }, []);

  return (
    <section className="tycCarouselSection">
      <div
        className="tycCarousel"
        id="tycCarousel"
        aria-roledescription="carousel"
        aria-label="Featured cards"
        ref={carouselRef}
      >
        <div className="tycCarousel-viewport" tabIndex={0}>
          <div className="tycCarousel-track">
            <article
              className="tycCarousel-slide"
              role="group"
              aria-roledescription="slide"
              aria-label="1 of 5"
            >
              <div
                className="mzaCard"
                style={
                  {
                    "--mzaCard-bg":
                      "url('/webp/1.webp')",
                  } as CSSProperties
                }
              >
                <header className="mzaCard-head mzaPar-1">
                  <p className="mzaCard-kicker">Capacity in motion</p>
                  <h2 className="mzaCard-title">Manufacturing Plant</h2>
                </header>
                <p className="mzaCard-text mzaPar-2">
                  Automated precision drives consistency.
                  <br />
                  200,000 units annual capacity ready for scale.
                </p>
                <footer className="mzaCard-actions mzaPar-3">
                  <a
                    className="group relative z-10 mt-[15px] inline-flex h-12 w-44 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 text-sm font-semibold text-gray-300 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-blue-300/60 hover:bg-white/15 hover:text-white focus:outline focus:outline-2 focus:outline-white/60 focus:outline-offset-4"
                    href="/contact"
                  >
                    <span className="relative z-20">Explore Facility</span>
                    <span className="pointer-events-none absolute right-1 top-1 z-10 h-12 w-12 rounded-full bg-blue-500/40 blur-lg transition-all duration-500 group-hover:right-10 group-hover:-bottom-6"></span>
                    <span className="pointer-events-none absolute right-6 top-2 z-10 h-16 w-16 rounded-full bg-blue-300/35 blur-lg transition-all duration-500 group-hover:-right-6"></span>
                  </a>
                </footer>
              </div>
            </article>

            <article
              className="tycCarousel-slide"
              role="group"
              aria-roledescription="slide"
              aria-label="2 of 5"
            >
              <div
                className="mzaCard"
                style={
                  {
                    "--mzaCard-bg":
                      "url('/webp/2.webp')",
                  } as CSSProperties
                }
              >
                <header className="mzaCard-head mzaPar-1">
                  <p className="mzaCard-kicker">Power unified</p>
                  <h2 className="mzaCard-title">Vertical Integration</h2>
                </header>
                <p className="mzaCard-text mzaPar-2">
                  In-house battery meets chassis logic.
                  <br />
                  Controlling cost and quality at the source.
                </p>
                <footer className="mzaCard-actions mzaPar-3">
                  <a
                    className="group relative z-10 mt-[15px] inline-flex h-12 w-44 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 text-sm font-semibold text-gray-300 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-blue-300/60 hover:bg-white/15 hover:text-white focus:outline focus:outline-2 focus:outline-white/60 focus:outline-offset-4"
                    href="/contact"
                  >
                    <span className="relative z-20">See Technology</span>
                    <span className="pointer-events-none absolute right-1 top-1 z-10 h-12 w-12 rounded-full bg-blue-500/40 blur-lg transition-all duration-500 group-hover:right-10 group-hover:-bottom-6"></span>
                    <span className="pointer-events-none absolute right-6 top-2 z-10 h-16 w-16 rounded-full bg-blue-300/35 blur-lg transition-all duration-500 group-hover:-right-6"></span>
                  </a>
                </footer>
              </div>
            </article>

            <article
              className="tycCarousel-slide"
              role="group"
              aria-roledescription="slide"
              aria-label="3 of 5"
            >
              <div
                className="mzaCard"
                style={
                  {
                    "--mzaCard-bg":
                      "url('/webp/3.webp')",
                  } as CSSProperties
                }
              >
                <header className="mzaCard-head mzaPar-1">
                  <p className="mzaCard-kicker">Design evolution</p>
                  <h2 className="mzaCard-title">R&amp;D Engineering</h2>
                </header>
                <p className="mzaCard-text mzaPar-2">
                  From concept sketches to homologation.
                  <br />
                  Building innovation into every production model.
                </p>
                <footer className="mzaCard-actions mzaPar-3">
                  <a
                    className="group relative z-10 mt-[15px] inline-flex h-12 w-44 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 text-sm font-semibold text-gray-300 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-blue-300/60 hover:bg-white/15 hover:text-white focus:outline focus:outline-2 focus:outline-white/60 focus:outline-offset-4"
                    href="/contact"
                  >
                    <span className="relative z-20">View Capabilities</span>
                    <span className="pointer-events-none absolute right-1 top-1 z-10 h-12 w-12 rounded-full bg-blue-500/40 blur-lg transition-all duration-500 group-hover:right-10 group-hover:-bottom-6"></span>
                    <span className="pointer-events-none absolute right-6 top-2 z-10 h-16 w-16 rounded-full bg-blue-300/35 blur-lg transition-all duration-500 group-hover:-right-6"></span>
                  </a>
                </footer>
              </div>
            </article>

            <article
              className="tycCarousel-slide"
              role="group"
              aria-roledescription="slide"
              aria-label="4 of 5"
            >
              <div
                className="mzaCard"
                style={
                  {
                    "--mzaCard-bg":
                      "url('/webp/4.webp')",
                  } as CSSProperties
                }
              >
                <header className="mzaCard-head mzaPar-1">
                  <p className="mzaCard-kicker">Standards verified</p>
                  <h2 className="mzaCard-title">Quality Control</h2>
                </header>
                <p className="mzaCard-text mzaPar-2">
                  ISO 9001 protocols at every stage.
                  <br />
                  Rigorous testing ensures zero defects globally.
                </p>
                <footer className="mzaCard-actions mzaPar-3">
                  <a
                    className="group relative z-10 mt-[15px] inline-flex h-12 w-44 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 text-sm font-semibold text-gray-300 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-blue-300/60 hover:bg-white/15 hover:text-white focus:outline focus:outline-2 focus:outline-white/60 focus:outline-offset-4"
                    href="/contact"
                  >
                    <span className="relative z-20">Check Standards</span>
                    <span className="pointer-events-none absolute right-1 top-1 z-10 h-12 w-12 rounded-full bg-blue-500/40 blur-lg transition-all duration-500 group-hover:right-10 group-hover:-bottom-6"></span>
                    <span className="pointer-events-none absolute right-6 top-2 z-10 h-16 w-16 rounded-full bg-blue-300/35 blur-lg transition-all duration-500 group-hover:-right-6"></span>
                  </a>
                </footer>
              </div>
            </article>

            <article
              className="tycCarousel-slide"
              role="group"
              aria-roledescription="slide"
              aria-label="5 of 5"
            >
              <div
                className="mzaCard"
                style={
                  {
                    "--mzaCard-bg":
                      "url('/webp/5.webp')",
                  } as CSSProperties
                }
              >
                <header className="mzaCard-head mzaPar-1">
      <p className="mzaCard-kicker">Supply unbound</p>
      <h2 className="mzaCard-title">Global Logistics</h2>
                </header>
                <p className="mzaCard-text mzaPar-2">
                  Seamless SKD and CKD solutions.
                  <br />
                  Delivering efficiency from our dock to yours.
                </p>
                <footer className="mzaCard-actions mzaPar-3">
                  <a
                    className="group relative z-10 mt-[15px] inline-flex h-12 w-44 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 text-sm font-semibold text-gray-300 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-blue-300/60 hover:bg-white/15 hover:text-white focus:outline focus:outline-2 focus:outline-white/60 focus:outline-offset-4"
                    href="/contact"
                  >
                    <span className="relative z-20">Shipping Terms</span>
                    <span className="pointer-events-none absolute right-1 top-1 z-10 h-12 w-12 rounded-full bg-blue-500/40 blur-lg transition-all duration-500 group-hover:right-10 group-hover:-bottom-6"></span>
                    <span className="pointer-events-none absolute right-6 top-2 z-10 h-16 w-16 rounded-full bg-blue-300/35 blur-lg transition-all duration-500 group-hover:-right-6"></span>
                  </a>
                </footer>
              </div>
            </article>
          </div>
        </div>

        <div className="tycCarousel-controls" aria-label="Controls">
          <button
            className="tycCarousel-prev"
            aria-label="Previous slide"
            type="button"
          >
            ‹
          </button>
          <button
            className="tycCarousel-next"
            aria-label="Next slide"
            type="button"
          >
            ›
          </button>
        </div>

        <div
          className="tycCarousel-pagination"
          role="tablist"
          aria-label="Slide navigation"
        ></div>
      </div>
    </section>
  );
}

function HeroAbout() {
  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="max-w-2xl" data-aos="fade-up">
            <h1 className="mb-6 font-nacelle text-4xl font-semibold text-gray-100 md:text-5xl">
              Factory-Direct OEM/ODM <br />
              <span className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-transparent">
                Global Distribution
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-2">We deliver complete electric motorcycle programs for OEMs and distributors.</p>
            <p className="text-lg text-gray-500">Compliance, QC, and supply chain execution are built into every platform.</p>
          </div>
          <div className="relative" data-aos="fade-up" data-aos-delay="200">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
               <svg className="w-full h-full absolute inset-0 opacity-40" viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
                  <defs><pattern id="grid-hero" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#374151" /></pattern></defs>
                  <rect width="100%" height="100%" fill="url(#grid-hero)" />
                  <path d="M 50 112 H 350" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="50" cy="112" r="4" fill="#2563EB" />
                  <circle cx="200" cy="112" r="8" fill="#1F2937" stroke="#2563EB" strokeWidth="2" />
                  <circle cx="350" cy="112" r="4" fill="#2563EB" />
                  <rect x="180" y="40" width="40" height="40" rx="4" stroke="#4B5563" fill="#111827" />
                  <path d="M 200 80 V 112" stroke="#4B5563" />
                  <rect x="180" y="145" width="40" height="40" rx="4" stroke="#4B5563" fill="#111827" />
                  <path d="M 200 145 V 112" stroke="#4B5563" />
               </svg>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gray-950/80 border border-gray-700 px-4 py-2 rounded-full backdrop-blur-md">
                    <span className="text-xs font-mono text-blue-400">SYS_ARCH_V4.0</span>
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-6 -left-6 z-10 bg-gray-900 border border-gray-700 p-4 rounded-lg shadow-xl hidden md:block">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Platform</div>
              <div className="text-sm font-semibold text-gray-200">End-to-End OEM Supply</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="relative border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5" data-aos="fade-right">
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-3">Why We Exist</h2>
            <h3 className="font-nacelle text-3xl font-semibold text-gray-100 mb-6">The market lacks factory-direct OEM/ODM partners.</h3>
            <p className="text-gray-400 leading-relaxed">
              Importers need confidence in compliance, QC, and delivery cadence,
              not just product specs.
              <br /><br />
              We build the entire platform so documentation, serviceability, and
              production stability stay consistent from sample to shipment.
            </p>
          </div>
          <div className="hidden md:block md:col-span-1"></div>
          <div className="md:col-span-6 flex flex-col justify-center space-y-8" data-aos="fade-left">
            <div className="pl-6 border-l-2 border-blue-500/30">
              <h4 className="text-lg font-semibold text-gray-200 mb-2">OEM-Ready Systems</h4>
              <p className="text-gray-400 text-sm">We design the frame, motor, controls, and battery as one export-ready system with clear documentation.</p>
            </div>
            <div className="pl-6 border-l-2 border-gray-800">
              <h4 className="text-lg font-semibold text-gray-200 mb-2">Export Reliability</h4>
              <p className="text-gray-400 text-sm">We validate durability and QC to reduce warranty exposure across regions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="mb-12 md:mb-16">
           <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4" data-aos="fade-up">What We Build</h2>
           <p className="text-gray-400 max-w-2xl" data-aos="fade-up" data-aos-delay="100">Our stack covers the full motorcycle platform, from chassis to connected services.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-gray-800 border border-gray-800 rounded-2xl overflow-hidden">
          <article className="bg-gray-950 p-8 md:p-12 hover:bg-gray-900 transition-colors duration-300 group">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 border border-gray-700 group-hover:border-blue-500/50 transition-colors">
              <svg className="h-5 w-5 text-gray-300 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="font-nacelle text-xl font-semibold text-gray-100 mb-3">Electric Motorcycles</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">Complete bikes designed for distributor readiness, compliance, and regional positioning.</p>
            <div className="text-xs font-mono text-blue-500 uppercase tracking-wider">Vehicle Platform</div>
          </article>
          <article className="bg-gray-950 p-8 md:p-12 hover:bg-gray-900 transition-colors duration-300 group">
             <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 border border-gray-700 group-hover:border-blue-500/50 transition-colors">
              <svg className="h-5 w-5 text-gray-300 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
            </div>
            <h3 className="font-nacelle text-xl font-semibold text-gray-100 mb-3">Integrated Powertrain</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">Motor and controller integration optimized for stable QC and documentation.</p>
            <div className="text-xs font-mono text-blue-500 uppercase tracking-wider">Powertrain</div>
          </article>
          <article className="bg-gray-950 p-8 md:p-12 hover:bg-gray-900 transition-colors duration-300 group">
             <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 border border-gray-700 group-hover:border-blue-500/50 transition-colors">
              <svg className="h-5 w-5 text-gray-300 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h3 className="font-nacelle text-xl font-semibold text-gray-100 mb-3">Battery System</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">High-density packs integrated into the frame for stable handling and real-world range.</p>
            <div className="text-xs font-mono text-blue-500 uppercase tracking-wider">Energy System</div>
          </article>
          <article className="bg-gray-950 p-8 md:p-12 hover:bg-gray-900 transition-colors duration-300 group">
             <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 border border-gray-700 group-hover:border-blue-500/50 transition-colors">
              <svg className="h-5 w-5 text-gray-300 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <h3 className="font-nacelle text-xl font-semibold text-gray-100 mb-3">Connected Experience</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">App connectivity, diagnostics, and service insights designed for dealer operations.</p>
            <div className="text-xs font-mono text-blue-500 uppercase tracking-wider">Software Layer</div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Principles() {
  const principles = [
    { title: "Compliance First", desc: "Documentation, labeling, and tests are built into every program from day one." },
    { title: "Stable Supply", desc: "We plan sourcing and production for consistent deliveries, not one-off runs." },
    { title: "QC by Design", desc: "100% functional testing and traceability reduce warranty exposure." },
    { title: "Serviceability", desc: "Parts planning and diagnostics are designed for dealers and fleets." }
  ];

  return (
    <section className="relative bg-gray-900/30 border-y border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="md:flex md:justify-between md:items-start mb-12">
          <div className="max-w-xl">
             <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4" data-aos="fade-up">How We Think</h2>
             <p className="text-gray-400" data-aos="fade-up" data-aos-delay="100">Our principles guide how we build export-ready platforms for global partners.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, index) => (
            <div key={index} className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gray-800" data-aos="fade-up" data-aos-delay={index * 100}>
              <h3 className="text-lg font-semibold text-gray-200 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Markets() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
           <div className="lg:col-span-4" data-aos="fade-right">
             <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-6">Who We Serve</h2>
             <p className="text-gray-400 mb-6">We build for distributors, OEM partners, and fleet operators who need export-ready supply.</p>
             <div className="inline-flex items-center gap-2 text-sm text-blue-500 font-medium">
                <span>View Partnership Stories</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
             </div>
           </div>
           <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl" data-aos="fade-up" data-aos-delay="100">
                <div className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4"><span className="text-xl">D</span></div>
                <h3 className="text-gray-200 font-semibold mb-2">Distributors</h3>
                <p className="text-xs text-gray-500">Importer-ready products with compliance packs and steady delivery cadence.</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl" data-aos="fade-up" data-aos-delay="200">
                <div className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4"><span className="text-xl">O</span></div>
                <h3 className="text-gray-200 font-semibold mb-2">OEM / ODM</h3>
                <p className="text-xs text-gray-500">Branding, trims, and SKD/CKD options to match local policy and duties.</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl" data-aos="fade-up" data-aos-delay="300">
                <div className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4"><span className="text-xl">F</span></div>
                <h3 className="text-gray-200 font-semibold mb-2">Fleet Operators</h3>
                <p className="text-xs text-gray-500">High-uptime programs with parts planning and service documentation.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <div className="text-3xl font-nacelle font-bold text-gray-100 mb-1">2018</div>
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Founded</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl font-nacelle font-bold text-gray-100 mb-1">Shenzhen</div>
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Global HQ</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl font-nacelle font-bold text-gray-100 mb-1">ISO 9001</div>
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Certified Mfg</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl font-nacelle font-bold text-gray-100 mb-1">50+</div>
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">OEM Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FactoryTour() {
  const highlights = [
    { label: "Production Base", value: "100,000+ sqm" },
    { label: "Cell Capacity", value: "10 GWh / year" },
    { label: "Pack Capacity", value: "20 GWh / year" },
    { label: "Automation", value: "750+ machines" },
  ];

  const footprint = [
    { label: "Swap Cabinets + EVs Shipped", value: "100,000+" },
    { label: "Export Coverage", value: "40+ countries" },
    { label: "Core Markets", value: "Africa / Middle East / LATAM" },
  ];

  return (
    <section className="border-t border-gray-800 bg-gray-900/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div data-aos="fade-up">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent text-sm uppercase tracking-widest font-mono">
                Factory Tour
              </span>
            </div>
            <h2 className="font-nacelle text-3xl font-semibold text-gray-100 mb-4">
              End-to-End Manufacturing You Can Audit
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              TYCORUN operates a comprehensive production base that covers
              battery cells, battery swap cabinets, and electric vehicles. From
              R&amp;D and design to large-scale manufacturing and deployment, we
              deliver high-efficiency, high-ROI swapping solutions for two- and
              four-wheel platforms.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We focus on fast-growing new-energy transportation markets and
              respond quickly to local needs while scaling globally with
              standardized processes and quality control.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-950/60 p-6" data-aos="fade-left">
            <div className="text-xs uppercase tracking-widest text-gray-500">Factory Metrics</div>
            <div className="mt-4 grid gap-4">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-gray-500">{item.label}</span>
                  <span className="text-sm text-gray-300">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-gray-800 pt-4">
              <div className="text-xs uppercase tracking-widest text-gray-500">Global Footprint</div>
              <div className="mt-3 space-y-2">
                {footprint.map((item) => (
                  <div key={item.label} className="flex items-center justify-between text-sm text-gray-300">
                    <span>{item.label}</span>
                    <span className="text-blue-400">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutAuthHero />
      <AboutCarousel />
      <HeroAbout />
      <Mission />
      <Products />
      <Principles />
      <Markets />
      <FactoryTour />
      <Stats />
    </>
  );
}
