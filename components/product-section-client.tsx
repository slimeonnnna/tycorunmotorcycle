"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import imagesLoaded from "imagesloaded";
import { TweenMax } from "gsap";
import * as THREE from "three";

type ProductSlide = {
  subtitle: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

type ProductSectionClientProps = {
  slides: ProductSlide[];
  kicker: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export function ProductSectionClient({
  slides,
  kicker,
  title,
  description,
  ctaLabel,
  ctaHref,
}: ProductSectionClientProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const slideSubtitleRef = useRef<HTMLDivElement>(null);
  const slideTitleRef = useRef<HTMLDivElement>(null);
  const slideDescRef = useRef<HTMLParagraphElement>(null);
  const slideCtaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initializedRef.current || !sliderRef.current) return;

    initializedRef.current = true;
    const parent = sliderRef.current;
    const images = Array.from(parent.querySelectorAll("img"));

    let cleanup = () => {};
    const displacementSlider = (opts: {
      parent: HTMLElement;
      images: HTMLImageElement[];
    }) => {
      const vertex = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
      `;

      const fragment = `
        varying vec2 vUv;
        uniform sampler2D currentImage;
        uniform sampler2D nextImage;
        uniform float dispFactor;
        void main() {
            vec2 uv = vUv;
            vec4 _currentImage;
            vec4 _nextImage;
            float intensity = 0.3;
            vec4 orig1 = texture2D(currentImage, uv);
            vec4 orig2 = texture2D(nextImage, uv);
            _currentImage = texture2D(currentImage, vec2(uv.x, uv.y + dispFactor * (orig2 * intensity)));
            _nextImage = texture2D(nextImage, vec2(uv.x, uv.y + (1.0 - dispFactor) * (orig1 * intensity)));
            vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
            gl_FragColor = finalTexture;
        }
      `;

      const sliderImages: any[] = [];
      const baseWidth = 500;
      const baseHeight = 500;
      let renderW = baseWidth;
      let renderH = baseHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0x000000, 0);
      const setRendererSize = () => {
        const parentWidth = opts.parent.clientWidth || baseWidth;
        const isMobile = window.matchMedia("(max-width: 1024px)").matches;
        const maxSize = isMobile ? parentWidth : 500;
        const nextSize = Math.max(260, Math.round(maxSize));
        renderW = nextSize;
        renderH = nextSize;
        renderer.setSize(renderW, renderH);
        renderer.domElement.style.width = `${nextSize}px`;
        renderer.domElement.style.height = `${nextSize}px`;
        renderer.domElement.style.maxWidth = "500px";
        renderer.domElement.style.maxHeight = "500px";
        if (isMobile) {
          renderer.domElement.style.left = "0";
          renderer.domElement.style.top = "0";
          renderer.domElement.style.transform = "none";
          renderer.domElement.style.margin = "0 auto";
          renderer.domElement.style.display = "block";
        } else {
          renderer.domElement.style.left = "55%";
          renderer.domElement.style.top = "15%";
          renderer.domElement.style.transform = "none";
          renderer.domElement.style.margin = "0";
          renderer.domElement.style.display = "block";
        }
      };
      setRendererSize();
      opts.parent.appendChild(renderer.domElement);

      const loader = new THREE.TextureLoader();
      loader.crossOrigin = "anonymous";

      images.forEach((img) => {
        const image = loader.load(`${img.getAttribute("src")}?v=${Date.now()}`);
        image.magFilter = image.minFilter = THREE.LinearFilter;
        image.anisotropy = renderer.capabilities.getMaxAnisotropy();
        sliderImages.push(image);
      });

      const scene = new THREE.Scene();
      scene.background = null;
      const camera = new THREE.OrthographicCamera(
        renderW / -2,
        renderW / 2,
        renderH / 2,
        renderH / -2,
        1,
        1000,
      );
      camera.position.z = 1;

      const mat = new THREE.ShaderMaterial({
        uniforms: {
          dispFactor: { type: "f", value: 0.0 },
          currentImage: { type: "t", value: sliderImages[0] },
          nextImage: { type: "t", value: sliderImages[1] },
        },
        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: true,
        opacity: 1.0,
      });

      const geometry = new THREE.PlaneGeometry(baseWidth, baseHeight, 1, 1);
      const object = new THREE.Mesh(geometry, mat);
      object.position.set(0, 0, 0);
      scene.add(object);

      const animateText = (element: HTMLElement | null) => {
        if (!element) return;
        TweenMax.killTweensOf(element);
        TweenMax.fromTo(
          element,
          0.35,
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, ease: "expo.out" },
        );
      };

      const applySlideContent = (slideId: number) => {
        setActiveSlide(slideId);
        requestAnimationFrame(() => {
          animateText(slideSubtitleRef.current);
          animateText(slideTitleRef.current);
          animateText(slideDescRef.current);
          animateText(slideCtaRef.current);
        });
      };

      const addEvents = () => {
        const pagination = opts.parent.querySelector("#product-pagination");
        if (!pagination) return;
        const pagButtons = Array.from(
          pagination.querySelectorAll<HTMLButtonElement>("button"),
        );
        let isAnimating = false;
        let currentIndex = 0;
        let startTime = performance.now();
        let pausedAt: number | null = null;
        let isInView = true;
        let rafId = 0;
        const duration = 6000;

        const setProgress = (progress: number) => {
          const progressDeg = `${progress * 360}deg`;
          pagButtons.forEach((button, index) => {
            button.style.setProperty(
              "--progress",
              index === currentIndex ? progressDeg : "0deg",
            );
          });
        };

        const pause = () => {
          if (pausedAt === null) {
            pausedAt = performance.now();
          }
        };

        const resume = () => {
          if (pausedAt !== null) {
            startTime += performance.now() - pausedAt;
            pausedAt = null;
          }
        };

        const goToSlide = (slideId: number, startFactor = 0) => {
          if (isAnimating || slideId === currentIndex) return;
          isAnimating = true;

          const active = pagination.querySelector(".active");
          if (active) active.className = "";
          pagButtons[slideId].className = "active";

          currentIndex = slideId;
          setProgress(0);

          mat.uniforms.nextImage.value = sliderImages[slideId];
          mat.uniforms.nextImage.needsUpdate = true;
          if (startFactor > 0) {
            mat.uniforms.dispFactor.value = startFactor;
          }

          TweenMax.to(
            mat.uniforms.dispFactor,
            Math.max(0.2, 1 - startFactor),
            {
              value: 1,
              ease: "expo.inOut",
              onComplete: () => {
                mat.uniforms.currentImage.value = sliderImages[slideId];
                mat.uniforms.currentImage.needsUpdate = true;
                mat.uniforms.dispFactor.value = 0.0;
                isAnimating = false;
                startTime = performance.now();
                setProgress(0);
              },
            },
          );

          applySlideContent(slideId);
        };

        pagButtons.forEach((el) => {
          el.addEventListener("click", function handleClick() {
            const slideId = parseInt(this.dataset.slide || "0", 10);
            goToSlide(slideId);
          });
        });

        const hoverTarget = opts.parent.parentElement || opts.parent;
        let isTouchMode = false;
        const handlePointerEnter = (event: PointerEvent) => {
          if (event.pointerType === "touch") return;
          pause();
        };
        const handlePointerLeave = (event: PointerEvent) => {
          if (event.pointerType === "touch" || isTouchMode) return;
          resume();
        };
        const handlePointerDown = (event: PointerEvent) => {
          if (event.pointerType !== "touch") return;
          isTouchMode = true;
          if (pausedAt === null) {
            pause();
          } else {
            resume();
          }
        };
        hoverTarget.addEventListener("pointerenter", handlePointerEnter);
        hoverTarget.addEventListener("pointerleave", handlePointerLeave);
        hoverTarget.addEventListener("pointerdown", handlePointerDown);

        let dragStartX = 0;
        let dragStartY = 0;
        let isDragging = false;
        const dragThreshold = 30;

        const handleDragEnd = (event: PointerEvent) => {
          if (!isDragging) return;
          const deltaX = event.clientX - dragStartX;
          const absX = Math.abs(deltaX);
          const absY = Math.abs(event.clientY - dragStartY);
          isDragging = false;
          window.removeEventListener("pointerup", handleDragEnd);
          window.removeEventListener("pointercancel", handleDragEnd);
          if (absX < dragThreshold || absX < absY * 1.73) return;
          const goNext = deltaX < 0;
          const nextIndex = goNext
            ? (currentIndex + 1) % sliderImages.length
            : (currentIndex - 1 + sliderImages.length) % sliderImages.length;
          goToSlide(nextIndex);
        };

        const handleDragStart = (event: PointerEvent) => {
          if (event.pointerType === "mouse" && event.button !== 0) return;
          const rect = renderer.domElement.getBoundingClientRect();
          const isInsideCanvas =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;
          if (!isInsideCanvas) return;
          isDragging = true;
          dragStartX = event.clientX;
          dragStartY = event.clientY;
          if (event.pointerType === "touch") {
            event.preventDefault();
          }
          window.addEventListener("pointerup", handleDragEnd);
          window.addEventListener("pointercancel", handleDragEnd);
        };

        opts.parent.addEventListener("pointerdown", handleDragStart);

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              isInView = entry.isIntersecting;
              if (!isInView) {
                pause();
              } else {
                resume();
              }
            });
          },
          { threshold: 0.4 },
        );
        observer.observe(opts.parent);

        const tick = (now: number) => {
          if (isInView && pausedAt === null && !isAnimating) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setProgress(progress);
            if (elapsed >= duration) {
              const nextIndex = (currentIndex + 1) % sliderImages.length;
              goToSlide(nextIndex);
            }
          }
          rafId = requestAnimationFrame(tick);
        };

        setProgress(0);
        rafId = requestAnimationFrame(tick);

        cleanup = () => {
          hoverTarget.removeEventListener("pointerenter", handlePointerEnter);
          hoverTarget.removeEventListener("pointerleave", handlePointerLeave);
          hoverTarget.removeEventListener("pointerdown", handlePointerDown);
          opts.parent.removeEventListener("pointerdown", handleDragStart);
          window.removeEventListener("pointerup", handleDragEnd);
          window.removeEventListener("pointercancel", handleDragEnd);
          observer.disconnect();
          cancelAnimationFrame(rafId);
        };
      };

      addEvents();

      const handleResize = () => {
        setRendererSize();
        const isMobile = window.matchMedia("(max-width: 1024px)").matches;
        const fitScale = isMobile ? 1 : 1;
        camera.left = renderW / -2;
        camera.right = renderW / 2;
        camera.top = renderH / 2;
        camera.bottom = renderH / -2;
        camera.updateProjectionMatrix();
        object.scale.set(
          (renderW / baseWidth) * fitScale,
          (renderH / baseHeight) * fitScale,
          1,
        );
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      cleanup = () => window.removeEventListener("resize", handleResize);

      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();
    };

    imagesLoaded(images, () => {
      setIsLoading(false);
      displacementSlider({ parent, images: images as HTMLImageElement[] });
    });
    return () => cleanup();
  }, [slides]);

  return (
    <section
      className={`product-slider${isLoading ? " product-slider--loading" : ""}`}
      translate="no"
    >
      <div data-aos="fade-up" data-aos-delay={200} className="py-12 mx-auto max-w-6xl px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
          <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
            {kicker}
          </span>
        </div>
        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-base text-gray-500">{description}</p>
      </div>
      <div data-aos="fade-up" data-aos-delay={400} className="product-bubbles" aria-hidden="true">
        <ul className="product-bubbles__list">
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={`bubble-${index}`}></li>
          ))}
        </ul>
      </div>
      <div data-aos="fade-up" data-aos-delay={400} className="mx-auto max-w-6xl px-4 sm:px-6">
        <div id="product-slider" ref={sliderRef}>
          <div className="slider-inner">
            <div id="product-slider-content">
              <div id="product-slide-subtitle" ref={slideSubtitleRef}>
                {slides[activeSlide].subtitle}
              </div>
              <div id="product-slide-title" ref={slideTitleRef} className="process-card-heading text-white">
                {slides[activeSlide].title}
              </div>
              <p id="product-slide-desc" ref={slideDescRef}>
                {slides[activeSlide].description}
              </p>
              <div ref={slideCtaRef}>
                <Link
                  className="group relative z-10 mt-[15px] inline-flex h-12 w-44 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 text-sm font-semibold text-gray-300 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-blue-300/60 hover:bg-white/15 hover:text-white focus:outline focus:outline-2 focus:outline-white/60 focus:outline-offset-4"
                  href={slides[activeSlide]?.href ?? ctaHref}
                >
                  <span className="relative z-20">{ctaLabel}</span>
                  <span className="pointer-events-none absolute right-1 top-1 z-10 h-12 w-12 rounded-full bg-blue-500/40 blur-lg transition-all duration-500 group-hover:right-10 group-hover:-bottom-6"></span>
                  <span className="pointer-events-none absolute right-6 top-2 z-10 h-16 w-16 rounded-full bg-blue-300/35 blur-lg transition-all duration-500 group-hover:-right-6"></span>
                </Link>
              </div>
            </div>
          </div>

          {slides.map((slide) => (
            <img key={slide.image} src={slide.image} alt={`${slide.title} photo`} />
          ))}

          <div id="product-pagination">
            {slides.map((_, index) => (
              <button
                key={`slide-${index}`}
                className={index === 0 ? "active" : ""}
                data-slide={index}
                aria-label={`Show slide ${index + 1}`}
                type="button"
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
