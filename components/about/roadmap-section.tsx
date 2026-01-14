"use client";

import { useEffect, useRef, useState } from "react";

export default function RoadmapSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const styleRef = useRef<HTMLStyleElement | null>(null);
  const [shouldInit, setShouldInit] = useState(false);

  useEffect(() => {
    if (styleRef.current) return;
    const style = document.createElement("style");
    style.setAttribute("data-carousel", "about");
    style.textContent = `
.carousel-shell {
  overflow: hidden;
  font-family: var(--font-inter), sans-serif;
  background: #030712;
  position: relative;
  min-height: 100vh;
  overscroll-behavior-x: contain;
  touch-action: pan-y;
}
.carousel-shell::before,
.carousel-shell::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 140px;
  pointer-events: none;
  z-index: 2;
  filter: blur(24px);
  opacity: 0.85;
}

.carousel-shell .carousel-heading {
  position: absolute;
  top: 32px;
  left: 0;
  right: 0;
  z-index: 3;
  pointer-events: none;
  text-align: center;
}
.carousel-shell #projector {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
.carousel-shell .carousel {
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
}
.carousel-shell .carousel-item {
  --items: 8;
  --width: clamp(150px, 30vw, 300px);
  --height: clamp(200px, 40vw, 400px);
  --x: calc(var(--active) * 800%);
  --y: calc(var(--active) * -200%);
  --rot: calc(var(--active) * 120deg);
  --opacity: calc(var(--zIndex) / var(--items) * 3 - 2);
  --scale: 1;
  overflow: hidden;
  position: absolute;
  z-index: var(--zIndex);
  width: var(--width);
  height: var(--height);
  margin: calc(var(--height) * -0.5) 0 0 calc(var(--width) * -0.5);
  border-radius: 14px;
  top: 50%;
  left: 50%;
  user-select: none;
  transform-origin: 0% 100%;
  box-shadow: 0 10px 50px 10px rgba(0, 0, 0, 0.5);
  background: transparent;
  pointer-events: all;
  transform: translate(var(--x), var(--y)) rotate(var(--rot)) scale(var(--scale));
  transition: transform 0.8s cubic-bezier(0, 0.02, 0, 1);
}
@media (max-width: 640px) {
  .carousel-shell .carousel-item {
    --scale: 1.5;
    transform-origin: 50% 50%;
  }
}
.carousel-shell .carousel-item .carousel-box {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.8s cubic-bezier(0, 0.02, 0, 1);
  opacity: var(--opacity);
  font-family: var(--font-nacelle), sans-serif;
  border-radius: inherit;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 20px 60px rgba(3, 7, 18, 0.35);
}
.carousel-shell .carousel-item.is-active .carousel-box {
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  box-shadow: 0 24px 70px rgba(3, 7, 18, 0.45);
}
.carousel-shell .carousel-item .carousel-box::before {
  content: '';
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5));
}
.carousel-shell .carousel-item .title {
  position: absolute;
  z-index: 1;
  color: #fff;
  bottom: 20px;
  left: 20px;
  transition: opacity 0.8s cubic-bezier(0, 0.02, 0, 1);
  font-size: clamp(20px, 3vw, 30px);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
}
.carousel-shell .carousel-item .num {
  position: absolute;
  z-index: 1;
  color: #fff;
  top: 10px;
  left: 20px;
  transition: opacity 0.8s cubic-bezier(0, 0.02, 0, 1);
  font-size: clamp(20px, 10vw, 80px);
}
.carousel-shell .carousel-item .carousel-media {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0));
  pointer-events: none;
}
.carousel-shell .layout {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.carousel-shell .layout::before {
  content: '';
  position: absolute;
  z-index: 1;
  top: 0;
  left: 90px;
  width: 10px;
  height: 100%;
  border: 1px solid #fff;
  border-top: none;
  border-bottom: none;
  opacity: 0.15;
}
.carousel-shell .layout .box {
  position: absolute;
  bottom: 0;
  left: 30px;
  color: #fff;
  transform-origin: 0% 10%;
  transform: rotate(-90deg);
  font-size: 9px;
  line-height: 1.4;
  text-transform: uppercase;
  opacity: 0.4;
}
    `;
    document.head.appendChild(style);
    styleRef.current = style;
    return () => {
      style.remove();
      styleRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let didCancel = false;
    const scheduleInit = () => {
      if (didCancel) return;
      setShouldInit(true);
    };
    if ("requestIdleCallback" in window) {
      const idleId = (window as Window & { requestIdleCallback?: (cb: () => void) => number })
        .requestIdleCallback?.(scheduleInit);
      return () => {
        didCancel = true;
        if (idleId && "cancelIdleCallback" in window) {
          (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(idleId);
        }
      };
    }
    const timeoutId = globalThis.setTimeout(scheduleInit, 300);
    return () => {
      didCancel = true;
      globalThis.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!shouldInit) return;
    let cancelled = false;
    let cleanup: (() => void) | null = null;

    const init = async () => {
      const gsapModule = await import("gsap");
      const createjs = await import("@createjs/easeljs");
      if (cancelled) return;

      const { TweenMax, Power1, Power3 } = gsapModule;

      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("lenis:pause"));
      }
      const root = sectionRef.current;
      if (!root) return;

      let progress = 0;
      let currentProgress = 0;
      let startX = 0;
      let active = 0;
      let isDown = false;
      let smoothRafId = 0;

      const speedDrag = -0.1;

      const items = root.querySelectorAll<HTMLElement>(".carousel-item");

      const getZindex = (array: Element[], index: number) =>
        array.map((_, i) => (index === i ? array.length : array.length - Math.abs(index - i)));

      const displayItems = (item: HTMLElement, index: number, activeIndex: number) => {
        const zIndex = getZindex(Array.from(items), activeIndex)[index];
        item.style.setProperty("--zIndex", String(zIndex));
        item.style.setProperty("--active", String((index - activeIndex) / items.length));
        if (index === activeIndex) {
          item.classList.add("is-active");
        } else {
          item.classList.remove("is-active");
        }
      };

      const animate = () => {
        if (!items.length) return;
        currentProgress = Math.max(0, Math.min(currentProgress, 100));
        active = Math.floor((currentProgress / 100) * (items.length - 1));
        items.forEach((item, index) => displayItems(item, index, active));
      };

      animate();

      const smoothAnimate = () => {
        const delta = progress - currentProgress;
        currentProgress += delta * 0.12;
        if (Math.abs(delta) < 0.01) {
          currentProgress = progress;
        }
        animate();
        smoothRafId = window.requestAnimationFrame(smoothAnimate);
      };

      smoothRafId = window.requestAnimationFrame(smoothAnimate);

      const setTargetIndex = (index: number) => {
        if (!items.length) return;
        const nextIndex = Math.max(0, Math.min(items.length - 1, index));
        progress = (nextIndex / (items.length - 1)) * 100;
      };

      const itemHandlers: Array<{ item: HTMLElement; handler: () => void }> = [];
      items.forEach((item, index) => {
        const handler = () => {
          setTargetIndex(index);
        };
        item.addEventListener("click", handler);
        itemHandlers.push({ item, handler });
      });

      const getClientX = (event: MouseEvent | TouchEvent) => {
        if ("touches" in event && event.touches.length) {
          return event.touches[0].clientX;
        }
        if ("clientX" in event) {
          return event.clientX;
        }
        return 0;
      };

      const handleMouseMove = (event: MouseEvent | TouchEvent) => {
        if (!isDown) return;
        const x = getClientX(event);
        const mouseProgress = (x - startX) * speedDrag;
        progress += mouseProgress;
        startX = x;
        animate();
      };

      const handleMouseDown = (event: MouseEvent | TouchEvent) => {
        isDown = true;
        startX = getClientX(event);
      };

      const handleMouseUp = () => {
        isDown = false;
      };

      root.addEventListener("mousedown", handleMouseDown);
      root.addEventListener("mousemove", handleMouseMove);
      root.addEventListener("mouseup", handleMouseUp);
      root.addEventListener("touchstart", handleMouseDown, { passive: true });
      root.addEventListener("touchmove", handleMouseMove, { passive: true });
      root.addEventListener("touchend", handleMouseUp);

      let particleEngine: any = null;
      let tickHandler: (() => void) | null = null;
      let resizeHandler: (() => void) | null = null;

      const initParticles = () => {
        const canvas = document.getElementById("projector") as HTMLCanvasElement | null;
        if (!canvas) return;
        const canvasEl = canvas;

        function range(min: number, max: number) {
          return min + (max - min) * Math.random();
        }

        function round(num: number, precision: number) {
          const decimal = Math.pow(10, precision);
          return Math.round(decimal * num) / decimal;
        }

        function weightedRange(
          to: number,
          from: number,
          decimalPlaces?: number,
          weighted?: [number, number] | null,
          weightStrength?: number
        ) {
          const safeFrom = from ?? 0;
          const safeDecimalPlaces = decimalPlaces ?? 0;
          const safeWeighted = weighted ?? null;
          const safeWeightStrength = weightStrength ?? 0;
          if (to === safeFrom) return to;
          if (safeWeighted && Math.random() <= safeWeightStrength) {
            return round(
              Math.random() * (safeWeighted[1] - safeWeighted[0]) + safeWeighted[0],
              safeDecimalPlaces
            );
          }
          return round(Math.random() * (to - safeFrom) + safeFrom, safeDecimalPlaces);
        }

        function ParticleEngine(this: any, canvasId: string) {
          if (!(this instanceof ParticleEngine)) {
            return new (ParticleEngine as any)(canvasId);
          }

          const engine = this as any;
          engine.canvas_id = canvasId;
          engine.stage = new createjs.Stage(canvasId);
          engine.totalWidth = engine.canvasWidth = (canvasEl.width = canvasEl.offsetWidth);
          engine.totalHeight = engine.canvasHeight = (canvasEl.height = canvasEl.offsetHeight);
          engine.compositeStyle = "lighter";

          engine.particleSettings = [
            {
              id: "small",
              num: 160,
              fromX: 0,
              toX: engine.totalWidth,
              ballwidth: 3,
              alphamax: 0.35,
              areaHeight: 0.5,
              color: "#0cdbf3",
              fill: false,
            },
            {
              id: "medium",
              num: 60,
              fromX: 0,
              toX: engine.totalWidth,
              ballwidth: 8,
              alphamax: 0.25,
              areaHeight: 1,
              color: "#6fd2f3",
              fill: true,
            },
            {
              id: "large",
              num: 6,
              fromX: 0,
              toX: engine.totalWidth,
              ballwidth: 30,
              alphamax: 0.2,
              areaHeight: 1,
              color: "#93e9f3",
              fill: true,
            },
          ];
          engine.particleArray = [];
          engine.lights = [
            { ellipseWidth: 400, ellipseHeight: 100, alpha: 0.6, offsetX: 0, offsetY: 0, color: "#6ac6e8" },
            { ellipseWidth: 350, ellipseHeight: 250, alpha: 0.3, offsetX: -50, offsetY: 0, color: "#54d5e8" },
            { ellipseWidth: 100, ellipseHeight: 80, alpha: 0.2, offsetX: 80, offsetY: -50, color: "#2ae8d8" },
          ];

          engine.stage.compositeOperation = engine.compositeStyle;

          function drawBgLight() {
            for (let i = 0; i < engine.lights.length; i += 1) {
              const light = new createjs.Shape();
              light.graphics
                .beginFill(engine.lights[i].color)
                .drawEllipse(0, 0, engine.lights[i].ellipseWidth, engine.lights[i].ellipseHeight);
              light.regX = engine.lights[i].ellipseWidth / 2;
              light.regY = engine.lights[i].ellipseHeight / 2;
              light.y = light.initY = engine.totalHeight / 2 + engine.lights[i].offsetY;
              light.x = light.initX = engine.totalWidth / 2 + engine.lights[i].offsetX;

              const blurFilter = new createjs.BlurFilter(
                engine.lights[i].ellipseWidth,
                engine.lights[i].ellipseHeight,
                1
              );
              const bounds = blurFilter.getBounds();
              light.filters = [blurFilter];
              light.cache(
                bounds.x - engine.lights[i].ellipseWidth / 2,
                bounds.y - engine.lights[i].ellipseHeight / 2,
                bounds.width * 2,
                bounds.height * 2
              );
              light.alpha = engine.lights[i].alpha;
              light.compositeOperation = "screen";
              engine.stage.addChildAt(light, 0);
              engine.lights[i].elem = light;
            }

            TweenMax.fromTo(
              engine.lights[0].elem,
              10,
              { scaleX: 1.5, x: engine.lights[0].elem.initX, y: engine.lights[0].elem.initY },
              { yoyo: true, repeat: -1, ease: Power1.easeInOut, scaleX: 2, scaleY: 0.7 }
            );
            TweenMax.fromTo(
              engine.lights[1].elem,
              12,
              { x: engine.lights[1].elem.initX, y: engine.lights[1].elem.initY },
              {
                delay: 5,
                yoyo: true,
                repeat: -1,
                ease: Power1.easeInOut,
                scaleY: 1.25,
                scaleX: 1.25,
                y: engine.totalHeight / 2 - 50,
                x: engine.totalWidth / 2 + 100,
              }
            );
            TweenMax.fromTo(
              engine.lights[2].elem,
              8,
              { x: engine.lights[2].elem.initX, y: engine.lights[2].elem.initY },
              {
                delay: 2,
                yoyo: true,
                repeat: -1,
                ease: Power1.easeInOut,
                scaleY: 1.5,
                scaleX: 1.5,
                y: engine.totalHeight / 2,
                x: engine.totalWidth / 2 - 200,
              }
            );
          }

          function drawParticles() {
            const queue: any[] = [];
            for (let i = 0; i < engine.particleSettings.length; i += 1) {
              const ball = engine.particleSettings[i];
              for (let s = 0; s < ball.num; s += 1) {
                queue.push(ball);
              }
            }

            let idx = 0;
            const batchSize = 24;
            const buildBatch = () => {
              const end = Math.min(queue.length, idx + batchSize);
              for (let i = idx; i < end; i += 1) {
                const ball = queue[i];
                let circle;
                if (ball.fill) {
                  circle = new createjs.Shape();
                  circle.graphics.beginFill(ball.color).drawCircle(0, 0, ball.ballwidth);
                  const blurFilter = new createjs.BlurFilter(ball.ballwidth / 2, ball.ballwidth / 2, 1);
                  circle.filters = [blurFilter];
                  const bounds = blurFilter.getBounds();
                  circle.cache(-50 + bounds.x, -50 + bounds.y, 100 + bounds.width, 100 + bounds.height);
                } else {
                  circle = new createjs.Shape();
                  circle.graphics.beginStroke(ball.color).setStrokeStyle(1).drawCircle(0, 0, ball.ballwidth);
                }

                circle.alpha = range(0, 0.1);
                circle.alphaMax = ball.alphamax;
                circle.distance = ball.ballwidth * 2;
                circle.ballwidth = ball.ballwidth;
                circle.flag = ball.id;
                engine.applySettings(circle, ball.fromX, ball.toX, ball.areaHeight);
                circle.speed = range(2, 10);
                circle.y = circle.initY;
                circle.x = circle.initX;
                circle.scaleX = circle.scaleY = range(0.3, 1);

                engine.stage.addChild(circle);
                animateBall(circle);
                engine.particleArray.push(circle);
              }

              idx = end;
              if (idx < queue.length) {
                requestAnimationFrame(buildBatch);
              }
            };

            buildBatch();
          }

          engine.applySettings = (circle: any, positionX: number, totalWidth: number, areaHeight: number) => {
            circle.speed = range(1, 3);
            circle.initY = weightedRange(
              0,
              engine.totalHeight,
              1,
              [
                (engine.totalHeight * (2 - areaHeight / 2)) / 4,
                (engine.totalHeight * (2 + areaHeight / 2)) / 4,
              ],
              0.8
            );
            circle.initX = weightedRange(
              positionX,
              totalWidth,
              1,
              [positionX + (totalWidth - positionX) / 4, positionX + ((totalWidth - positionX) * 3) / 4],
              0.6
            );
          };

          function animateBall(ball: any) {
            const scale = range(0.3, 1);
            const xpos = range(ball.initX - ball.distance, ball.initX + ball.distance);
            const ypos = range(ball.initY - ball.distance, ball.initY + ball.distance);
            const speed = ball.speed;
            TweenMax.to(ball, speed, {
              scaleX: scale,
              scaleY: scale,
              x: xpos,
              y: ypos,
              onComplete: animateBall,
              onCompleteParams: [ball],
              ease: Power3.easeInOut,
            });
            TweenMax.to(ball, speed / 2, {
              alpha: range(0.1, ball.alphaMax),
              onComplete: fadeout,
              onCompleteParams: [ball, speed],
            });
          }

          function fadeout(ball: any, speed: number) {
            ball.speed = range(2, 10);
            TweenMax.to(ball, speed / 2, { alpha: 0 });
          }

          drawBgLight();
          drawParticles();
        }

        const engineRender = () => {
          particleEngine.stage.update();
        };

        const engineResize = () => {
          const el = document.getElementById(particleEngine.canvas_id) as HTMLCanvasElement | null;
          if (!el) return;
          particleEngine.totalWidth = particleEngine.canvasWidth = (el.width = el.offsetWidth);
          particleEngine.totalHeight = particleEngine.canvasHeight = (el.height = el.offsetHeight);
          engineRender();
          for (let i = 0; i < particleEngine.particleArray.length; i += 1) {
            particleEngine.applySettings(
              particleEngine.particleArray[i],
              0,
              particleEngine.totalWidth,
              particleEngine.particleArray[i].areaHeight
            );
          }
          for (let j = 0; j < particleEngine.lights.length; j += 1) {
            particleEngine.lights[j].elem.initY =
              particleEngine.totalHeight / 2 + particleEngine.lights[j].offsetY;
            particleEngine.lights[j].elem.initX =
              particleEngine.totalWidth / 2 + particleEngine.lights[j].offsetX;
            TweenMax.to(particleEngine.lights[j].elem, 0.5, {
              x: particleEngine.lights[j].elem.initX,
              y: particleEngine.lights[j].elem.initY,
            });
          }
        };

        particleEngine = new (ParticleEngine as any)("projector");
        tickHandler = engineRender;
        resizeHandler = engineResize;
        createjs.Ticker.framerate = 24;
        createjs.Ticker.addEventListener("tick", tickHandler);
        window.addEventListener("resize", resizeHandler);
      };

      initParticles();
      if (typeof window !== "undefined") {
        window.setTimeout(() => {
          window.dispatchEvent(new Event("lenis:resume"));
        }, 0);
      }

      cleanup = () => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("lenis:resume"));
        }
        itemHandlers.forEach(({ item, handler }) => item.removeEventListener("click", handler));
        root.removeEventListener("mousedown", handleMouseDown);
        root.removeEventListener("mousemove", handleMouseMove);
        root.removeEventListener("mouseup", handleMouseUp);
        root.removeEventListener("touchstart", handleMouseDown);
        root.removeEventListener("touchmove", handleMouseMove);
        root.removeEventListener("touchend", handleMouseUp);
        if (tickHandler) {
          createjs.Ticker.removeEventListener("tick", tickHandler);
        }
        if (resizeHandler) {
          window.removeEventListener("resize", resizeHandler);
        }
        window.cancelAnimationFrame(smoothRafId);
      };
    };

    init();

    return () => {
      cancelled = true;
      if (cleanup) cleanup();
    };
  }, [shouldInit]);

  const carouselMarkup = `
<div class="carousel-heading">
  <div class="who-subP mb-3"><span class="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">Growth Timeline</span></div>
  <h2 class="text-white text-3xl md:text-4xl xl:text-5xl font-semibold max-w-3xl mx-auto mb-10 leading-snug"><span class="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-transparent">Milestones That Built TYCORUN</span></h2>
</div>

<canvas id="projector">Your browser does not support the Canvas element.</canvas>

<div class="carousel">
  <div class="carousel-item">
    <div class="carousel-box">
      <h3 class="title">Factory Launch</h3>
      <div class="num">2019</div>
      <div class="carousel-media"></div>
    </div>
  </div>
  <div class="carousel-item">
    <div class="carousel-box">
      <h3 class="title">First OEM Program</h3>
      <div class="num">2020</div>
      <div class="carousel-media"></div>
    </div>
  </div>
  <div class="carousel-item">
    <div class="carousel-box">
      <h3 class="title">Model Lineup Expansion</h3>
      <div class="num">2021</div>
      <div class="carousel-media"></div>
    </div>
  </div>
  <div class="carousel-item">
    <div class="carousel-box">
      <h3 class="title">QC System Upgrade</h3>
      <div class="num">2022</div>
      <div class="carousel-media"></div>
    </div>
  </div>
  <div class="carousel-item">
    <div class="carousel-box">
      <h3 class="title">Export Markets Opened</h3>
      <div class="num">2023</div>
      <div class="carousel-media"></div>
    </div>
  </div>
  <div class="carousel-item">
    <div class="carousel-box">
      <h3 class="title">High-Speed Platform</h3>
      <div class="num">2024</div>
      <div class="carousel-media"></div>
    </div>
  </div>
  <div class="carousel-item">
    <div class="carousel-box">
      <h3 class="title">ODM Customization</h3>
      <div class="num">2025</div>
      <div class="carousel-media"></div>
    </div>
  </div>
  <div class="carousel-item">
    <div class="carousel-box">
      <h3 class="title">Next-Gen Preview</h3>
      <div class="num">2026</div>
      <div class="carousel-media"></div>
    </div>
  </div>
</div>

<svg style="display: none">
  <symbol id="ico-instagram" viewBox="0 0 35 35">
    <circle opacity=".2" cx="17.5" cy="17.5" r="17" stroke="var(--fill)" fill="none"></circle>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24.944 20.476c.028-.457.042-1.282.042-2.476s-.014-2.019-.042-2.476c-.056-1.09-.378-1.93-.965-2.517s-1.422-.91-2.503-.965C21.018 12.014 20.194 12 19 12s-2.019.014-2.476.042c-1.081.047-1.92.368-2.517.965s-.918 1.436-.965 2.518C13.014 15.98 13 16.805 13 18c0 1.194.014 2.019.042 2.476.047 1.09.368 1.93.965 2.517s1.436.91 2.518.965c.466.028 1.29.042 2.475.042 1.184 0 2.01-.014 2.476-.042 1.072-.047 1.906-.368 2.503-.965.597-.597.918-1.436.965-2.517ZM19 13.075h-1.427c-.186 0-.438.01-.755.029a11.61 11.61 0 0 0-.797.07c-.215.028-.401.08-.56.154-.26.102-.489.251-.685.447-.196.196-.35.425-.461.685-.056.15-.103.336-.14.56a7.843 7.843 0 0 0-.084.811 7.113 7.113 0 0 0-.014.741c.01.178.01.453 0 .826-.01.373-.01.573 0 .601.01.028.01.228 0 .601s-.01.648 0 .826c-.01.177-.014.424-.014.74 0 .318.028.588.084.812l-.14.56c.112.26.265.489.461.685.196.196.425.345.685.447.15.056.336.108.56.154.224.047.49.07.797.07.308 0 .56.01.755.028.196.019.471.019.826 0 .354-.019.554-.019.601 0 .047.019.242.019.587 0s.62-.019.826 0c.205.019.456.01.755-.028.298-.037.569-.06.811-.07.242-.01.424-.06.546-.154.26-.102.494-.251.699-.447a1.75 1.75 0 0 0 .447-.686c.056-.149.103-.335.14-.559.038-.224.066-.494.084-.811.019-.317.023-.564.014-.741a11.82 11.82 0 0 1 0-.826c.01-.373.01-.573 0-.601-.01-.028-.01-.228 0-.601s.01-.648 0-.826c-.01-.177-.014-.424-.014-.74 0-.318-.028-.588-.084-.812l-.14-.56a1.956 1.956 0 0 0-1.147-1.133 3.979 3.979 0 0 0-.545-.153 3.915 3.915 0 0 0-.811-.07c-.326 0-.578-.01-.755-.028a5.916 5.916 0 0 0-.826 0c-.372.019-.568.019-.587 0Zm3.706 2.225c.14-.14.21-.308.21-.504a.57.57 0 0 0-.21-.503.767.767 0 0 0-.517-.21.718.718 0 0 0-.504.21.622.622 0 0 0-.21.503c.01.196.08.364.21.504s.299.21.504.21c.205 0 .377-.07.517-.21ZM22.063 18c0 .849-.298 1.576-.895 2.182a2.882 2.882 0 0 1-2.168.895 3.075 3.075 0 0 1-2.182-.895c-.606-.588-.904-1.315-.895-2.182.01-.867.308-1.594.895-2.182.588-.587 1.315-.886 2.182-.895.867-.01 1.59.29 2.168.895.578.606.876 1.333.895 2.182Zm-1.077 0a1.95 1.95 0 0 0-.573-1.413A1.897 1.897 0 0 0 19 16c-.56 0-1.03.196-1.413.587A2.001 2.001 0 0 0 17 18c-.01.55.186 1.021.587 1.413.401.391.872.587 1.413.587.54 0 1.012-.196 1.413-.587.4-.392.592-.863.573-1.413Z"
      transform="translate(-1.5 -0.5)"
      fill="var(--fill)"
    ></path>
  </symbol>
  <symbol id="ico-linkedin" viewBox="0 0 35 35">
    <circle opacity=".2" cx="17.5" cy="17.5" r="17" stroke="var(--fill)" fill="none"></circle>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.3025 14.0835C15.3025 14.3845 15.1934 14.6403 14.9752 14.851C14.757 15.0617 14.4786 15.167 14.14 15.167C13.8014 15.167 13.5267 15.0617 13.316 14.851C13.1053 14.6403 13 14.3807 13 14.0722C13 13.7637 13.1053 13.5079 13.316 13.3047C13.5267 13.1016 13.8051 13 14.1512 13C14.4974 13 14.772 13.1016 14.9752 13.3047C15.1783 13.5079 15.2874 13.7675 15.3025 14.0835ZM13.0677 23V16.0248H15.2348V23H13.0677ZM16.4763 16.0248C16.5064 16.8676 16.5214 17.6125 16.5214 18.2596V23H18.7111V18.9819C18.7111 18.7111 18.7336 18.5305 18.7788 18.4402C18.9895 17.8984 19.3582 17.6275 19.8849 17.6275C20.6223 17.6275 20.991 18.1317 20.991 19.14V23H23.158V18.8691C23.158 17.8758 22.9285 17.1272 22.4695 16.623C22.0105 16.1189 21.4048 15.8668 20.6524 15.8668C19.6742 15.8668 18.9594 16.243 18.5079 16.9955H18.4628L18.3499 16.0248H16.4763Z"
      transform="translate(0 -1)"
      fill="var(--fill)"
    ></path>
  </symbol>
</svg>

  `;

  return (
    <section
      ref={sectionRef}
      className="carousel-shell"
      dangerouslySetInnerHTML={{ __html: carouselMarkup }}
    />
  );
}
