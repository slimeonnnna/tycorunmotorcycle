"use client";

import { useEffect, useRef, useState } from "react";

import { cities } from "../cities-data";

export default function AboutAuthHero() {
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

        ctx.fillStyle = `rgba(${255 - (Math.random() * 255) / 2}, 255, 255, ${particle.opacity})`;
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

    let cancelled = false;
    let rafId = 0;
    let renderer: any = null;
    let geometry: any = null;
    let material: any = null;

    const init = async () => {
      const THREE = await import("three");
      if (cancelled) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, 1, 1, 1500);
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      geometry = new THREE.BufferGeometry();
      material = new THREE.PointsMaterial({ color: 0x22aaff, size: 3 });
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
        if (!clientWidth || !clientHeight || !renderer) return;
        camera.aspect = clientWidth / clientHeight;
        renderer.setSize(clientWidth, clientHeight, false);
        camera.position.z = 1500;
        camera.updateProjectionMatrix();
      };

      onResize();
      window.addEventListener("resize", onResize);

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
      };
    };

    let cleanupResize: (() => void) | undefined;
    init().then((cleanup) => {
      cleanupResize = cleanup;
    });

    return () => {
      cancelled = true;
      if (cleanupResize) cleanupResize();
      window.cancelAnimationFrame(rafId);
      geometry?.dispose();
      material?.dispose();
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement);
        }
      }
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
