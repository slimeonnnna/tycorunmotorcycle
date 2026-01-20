
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { ProductContent } from '@/data/products';

type ProductDetailPageProps = {
  product: ProductContent;
};

const ProductDetailPage = ({ product }: ProductDetailPageProps) => {
  const productImages = product.images;
  const loopImages = [...productImages, ...productImages, ...productImages];

  const [mainImage, setMainImage] = useState(product.mainImage);
  const thumbnailTrackRef = useRef<HTMLDivElement | null>(null);
  const thumbnailAutoScrollRef = useRef(false);
  const thumbnailSnapRef = useRef({
    origin: 0,
    settleTimer: 0 as number,
  });
  const thumbnailDragRef = useRef({
    isDown: false,
    startX: 0,
    startTime: 0,
    scrollLeft: 0,
    moved: false,
    suppressClick: false,
    startTarget: null as HTMLElement | null,
    dragDistance: 0,
  });

  const handleThumbnailSelect = (imageSrc: string) => {
    setMainImage(imageSrc);
  };

  const handlePrevMain = () => {
    const currentIndex = productImages.findIndex((image) => image.src === mainImage);
    const nextIndex = currentIndex === -1 ? 0 : (currentIndex - 1 + productImages.length) % productImages.length;
    setMainImage(productImages[nextIndex].src);
  };

  const handleNextMain = () => {
    const currentIndex = productImages.findIndex((image) => image.src === mainImage);
    const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % productImages.length;
    setMainImage(productImages[nextIndex].src);
  };

  const [motorPower, setMotorPower] = useState(product.defaultPower);
  const [batteryType, setBatteryType] = useState(product.defaultBattery);
  const [quantity, setQuantity] = useState(10);
  const pricingData = product.pricing;
  const specData = product.highlights;
  const [activeTab, setActiveTab] = useState('specifications');

  useEffect(() => {
    setMainImage(product.mainImage);
    setMotorPower(product.defaultPower);
    setBatteryType(product.defaultBattery);
  }, [product.mainImage, product.defaultPower, product.defaultBattery]);

  useEffect(() => {
    const track = thumbnailTrackRef.current;
    if (!track) {
      return;
    }

    const getStep = () => {
      const firstItem = track.querySelector<HTMLElement>('[data-thumb-item="true"]');
      const gapValue = Number.parseFloat(getComputedStyle(track).columnGap || '0') || 0;
      const itemWidth = firstItem?.getBoundingClientRect().width || 0;
      return itemWidth + gapValue;
    };

    const moveToMiddle = () => {
      const step = getStep();
      if (step > 0) {
        const cycle = step * productImages.length;
        track.scrollLeft = cycle;
        thumbnailSnapRef.current.origin = cycle;
      } else {
        const third = track.scrollWidth / 3;
        track.scrollLeft = third;
        thumbnailSnapRef.current.origin = third;
      }
    };

    const handleSettleSnap = () => {
      const step = getStep();
      if (!step) {
        return;
      }
      const origin = thumbnailSnapRef.current.origin;
      const nextLeftEdge = origin + step;
      if (track.scrollLeft > origin && track.scrollLeft < nextLeftEdge) {
        const rightVisible = nextLeftEdge - track.scrollLeft;
        if (rightVisible < step / 2) {
          thumbnailAutoScrollRef.current = true;
          track.scrollTo({ left: origin, behavior: 'smooth' });
          window.setTimeout(() => {
            thumbnailAutoScrollRef.current = false;
          }, 120);
        }
      }
    };

    const onScroll = () => {
      if (thumbnailAutoScrollRef.current) {
        return;
      }
      if (thumbnailDragRef.current.isDown) {
        return;
      }
      const step = getStep();
      if (!step) {
        return;
      }
      const cycle = step * productImages.length;
      if (track.scrollLeft < cycle * 0.5 || track.scrollLeft > cycle * 1.5) {
        thumbnailAutoScrollRef.current = true;
        const normalized = ((track.scrollLeft % cycle) + cycle) % cycle;
        const target = normalized + cycle;
        const delta = target - track.scrollLeft;
        thumbnailSnapRef.current.origin += delta;
        requestAnimationFrame(() => {
          track.scrollLeft = target;
          thumbnailAutoScrollRef.current = false;
        });
      }
      window.clearTimeout(thumbnailSnapRef.current.settleTimer);
      thumbnailSnapRef.current.settleTimer = window.setTimeout(handleSettleSnap, 160);
    };

    const rafId = requestAnimationFrame(moveToMiddle);
    track.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      track.removeEventListener('scroll', onScroll);
    };
  }, [productImages.length]);

  const handleThumbPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = thumbnailTrackRef.current;
    if (!track) {
      return;
    }
    event.preventDefault();
    thumbnailDragRef.current.isDown = true;
    thumbnailDragRef.current.startX = event.clientX;
    thumbnailDragRef.current.startTime = performance.now();
    thumbnailDragRef.current.scrollLeft = track.scrollLeft;
    thumbnailDragRef.current.moved = false;
    thumbnailDragRef.current.suppressClick = false;
    thumbnailDragRef.current.startTarget = event.target as HTMLElement;
    thumbnailDragRef.current.dragDistance = 0;
    track.setPointerCapture(event.pointerId);
  };

  const handleThumbPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = thumbnailTrackRef.current;
    if (!track || !thumbnailDragRef.current.isDown) {
      return;
    }
    event.preventDefault();
    const delta = event.clientX - thumbnailDragRef.current.startX;
    const distance = Math.abs(delta);
    if (distance > thumbnailDragRef.current.dragDistance) {
      thumbnailDragRef.current.dragDistance = distance;
    }
    if (distance > 0) {
      const firstItem = track.querySelector<HTMLElement>('[data-thumb-item="true"]');
      const gapValue = Number.parseFloat(getComputedStyle(track).columnGap || '0') || 0;
      const step = (firstItem?.getBoundingClientRect().width || 0) + gapValue;
      if (!step) {
        return;
      }
      const cycle = step * productImages.length;
      let nextScrollLeft = thumbnailDragRef.current.scrollLeft - delta;
      if (nextScrollLeft < cycle * 0.5) {
        nextScrollLeft += cycle;
        thumbnailDragRef.current.scrollLeft += cycle;
        thumbnailSnapRef.current.origin += cycle;
      } else if (nextScrollLeft > cycle * 1.5) {
        nextScrollLeft -= cycle;
        thumbnailDragRef.current.scrollLeft -= cycle;
        thumbnailSnapRef.current.origin -= cycle;
      }
      track.scrollLeft = nextScrollLeft;
    }
  };

  const handleThumbPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = thumbnailTrackRef.current;
    if (track && thumbnailDragRef.current.isDown) {
      track.releasePointerCapture(event.pointerId);
    }
    const dragThreshold = 4;
    const dragged = thumbnailDragRef.current.dragDistance > 0;
    const moved = thumbnailDragRef.current.dragDistance > dragThreshold;
    if (track && dragged) {
      const firstItem = track.querySelector<HTMLElement>('[data-thumb-item="true"]');
      const gapValue = Number.parseFloat(getComputedStyle(track).columnGap || '0') || 0;
      const step = (firstItem?.getBoundingClientRect().width || 0) + gapValue;
      if (step > 0) {
        const base = thumbnailSnapRef.current.origin;
        const offset = track.scrollLeft - base;
        const snappedOffset = Math.round(offset / step) * step;
        const target = base + snappedOffset;
        thumbnailAutoScrollRef.current = true;
        track.scrollTo({ left: target, behavior: 'smooth' });
        window.setTimeout(() => {
          thumbnailAutoScrollRef.current = false;
        }, 160);
      }
    }
    if (!moved) {
      const startTarget = thumbnailDragRef.current.startTarget;
      const img = startTarget?.closest?.('img[data-image-src]') as HTMLImageElement | null;
      const imageSrc = img?.dataset.imageSrc;
      if (imageSrc) {
        handleThumbnailSelect(imageSrc);
      }
    }
    thumbnailDragRef.current.isDown = false;
    thumbnailDragRef.current.moved = moved;
    thumbnailDragRef.current.startTarget = null;
    if (moved) {
      window.setTimeout(() => {
        thumbnailDragRef.current.suppressClick = false;
      }, 220);
    } else {
      thumbnailDragRef.current.suppressClick = false;
    }
  };

  const handleThumbPointerCancel = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = thumbnailTrackRef.current;
    if (track && thumbnailDragRef.current.isDown) {
      track.releasePointerCapture(event.pointerId);
    }
    thumbnailDragRef.current.isDown = false;
    thumbnailDragRef.current.moved = false;
    thumbnailDragRef.current.suppressClick = false;
    thumbnailDragRef.current.startTarget = null;
    thumbnailDragRef.current.dragDistance = 0;
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-12 md:pt-40 md:pb-24">
      {/* 页面标题 */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 mb-4">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/product" className="hover:text-blue-400 transition-colors">Product</Link>
          <span>/</span>
          <span className="text-gray-300">{product.name}</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2">{product.headline}</h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          {product.description}
        </p>
      </div>

      {/* 主要内容区 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* 左侧图片区 - 添加吸顶效果 */}
        <div
          className="lg:sticky lg:self-start space-y-6 transition-[top] duration-300 ease-in-out"
          style={{ top: "var(--header-offset, 6rem)" }}
        >

          {/* 主图 */}
          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 aspect-square flex items-center justify-center border border-gray-700 shadow-lg">
            <img 
              src={mainImage} 
              alt="Main product view" 
              className="w-full h-full object-contain"
            />
            <div className="image-card__controls">
              <button
                type="button"
                className="carousel-arrow-button"
                aria-label="Previous slide"
                onClick={handlePrevMain}
              >
                <div className="button-box">
                  <span className="button-elem" aria-hidden="true">
                    <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                    </svg>
                  </span>
                  <span className="button-elem" aria-hidden="true">
                    <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                    </svg>
                  </span>
                </div>
              </button>
              <button
                type="button"
                className="carousel-arrow-button carousel-arrow-button--next"
                aria-label="Next slide"
                onClick={handleNextMain}
              >
                <div className="button-box">
                  <span className="button-elem" aria-hidden="true">
                    <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                    </svg>
                  </span>
                  <span className="button-elem" aria-hidden="true">
                    <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                    </svg>
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* 缩略图网格 */}
          <div
            ref={thumbnailTrackRef}
            className="no-scrollbar thumbnail-track overflow-x-auto scroll-px-0"
            onPointerDown={handleThumbPointerDown}
            onPointerMove={handleThumbPointerMove}
            onPointerUp={handleThumbPointerUp}
            onPointerLeave={handleThumbPointerCancel}
            onPointerCancel={handleThumbPointerCancel}
          >
            {loopImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                data-thumb-item="true"
                style={
                  {
                    '--thumb-border-color': mainImage === image.src ? '#3b82f6' : '#374151',
                  } as React.CSSProperties
                }
                className="thumbnail-item rounded-lg overflow-hidden transition-all"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  data-image-src={image.src}
                  draggable={false}
                  className="w-full h-24 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 右侧业务逻辑区 */}
        <div className="space-y-8 lg:flex lg:flex-col lg:min-h-[calc(100vh-6rem)]">
          {/* 价格表 */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-gray-100 mb-4">Pricing Tiers</h2>
            <div className="space-y-3">
              {pricingData.map((tier, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="flex flex-col items-start gap-2 font-medium text-gray-300 sm:flex-row sm:items-center sm:gap-2">
                    {tier.moq}
                    <span className="rounded-full border border-blue-500/60 bg-blue-600/20 px-2 py-0.5 text-[10px] uppercase tracking-wide text-blue-100">
                      {tier.tag}
                    </span>
                  </span>
                  <span className="font-bold text-blue-400 text-lg">{tier.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 规格亮点 */}
          <div className="grid grid-cols-2 gap-4">
            {specData.map((spec, index) => (
              <div key={index} className="flex flex-col items-center gap-2 text-center bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700 sm:flex-row sm:items-center sm:gap-3 sm:text-left">
                <i className={`${spec.iconClass} text-blue-500 text-xl`}></i>
                <span className="font-medium text-gray-300">{spec.label}</span>
              </div>
            ))}
          </div>

          {/* 配置选择器 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-100 mb-3">Motor Power</h3>
              <div className="flex space-x-3">
                {product.powerOptions.map((power) => (
                  <button
                    key={power}
                    onClick={() => setMotorPower(power)}
                    className={`px-4 py-2 rounded-lg border ${
                      motorPower === power 
                        ? 'bg-blue-600 text-white border-blue-600' 
                        : 'bg-gray-800/50 text-gray-300 border-gray-700'
                    }`}
                  >
                    {power}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-100 mb-3">Battery Type</h3>
              <div className="flex space-x-3">
                {product.batteryOptions.map((battery) => (
                  <button
                    key={battery}
                    onClick={() => setBatteryType(battery)}
                    className={`px-4 py-2 rounded-lg border ${
                      batteryType === battery 
                        ? 'bg-blue-600 text-white border-blue-600' 
                        : 'bg-gray-800/50 text-gray-300 border-gray-700'
                    }`}
                  >
                    {battery}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 行动区 */}
          <div className="space-y-4 lg:mt-auto">
            <div>
              <label className="block text-lg font-medium text-gray-100 mb-2">Quantity</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full p-3 border border-gray-700 bg-gray-800/50 text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-lg transition duration-300">
              Inquire Now / Request Quote
            </button>

            <button className="w-full flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 border border-gray-700">
              <i className="fas fa-download mr-2"></i>
              <span>Download Datasheet (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      {/* 底部标签区 */}
      <div className="mt-16">
        <div className="border-b border-gray-700">
          <nav className="-mb-px flex space-x-8 overflow-x-auto pr-4 no-scrollbar">
            <button
              onClick={() => setActiveTab('specifications')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'specifications'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-500'
              }`}
            >
              Full Specifications
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'shipping'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-500'
              }`}
            >
              Packaging & Shipping
            </button>
            <button
              onClick={() => setActiveTab('company')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'company'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-500'
              }`}
            >
              Company Profile
            </button>
          </nav>
        </div>

        <div className="py-8">
          {activeTab === 'specifications' && (
            <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-2 sm:p-6">
              <div className="grid gap-8 lg:grid-cols-2">
              <div className="flex h-full flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-100 mb-3">Performance & Fleet Specs</h3>
                <p className="text-gray-400">
                  {product.specIntro}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  {product.specBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {product.scenarios.map((scenario) => (
                    <div
                      key={scenario.title}
                      className="relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-4"
                    >
                      <i
                        className={`${scenario.iconClass} pointer-events-none absolute -right-3 top-[2px] text-blue-500/20 text-6xl`}
                        aria-hidden="true"
                      ></i>
                      <h4 className="text-base font-semibold text-gray-100">{scenario.title}</h4>
                      <p className="mt-2 text-base text-gray-400">{scenario.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
                <div className="overflow-hidden rounded-2xl border border-blue-500/25 bg-gradient-to-br from-gray-950/90 via-gray-900/60 to-gray-950/90 shadow-[0_0_30px_rgba(59,130,246,0.12)]">
                  <div className="flex items-center justify-between border-b border-blue-500/20 bg-gray-950/80 px-4 py-3">
                    <div className="flex items-center gap-2 text-base uppercase tracking-[0.2em] text-blue-200/80">
                      <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                      Spec Sheet
                    </div>
                    <span className="text-base text-blue-300/70">Precision Output</span>
                  </div>
                  <div className="px-4 py-4 font-mono text-base text-blue-100/90">
                    <div className="text-blue-300/70">Calibration-grade metrics, verified on every batch.</div>
                    <table className="mt-3 w-full border-collapse">
                      <tbody>
                        {product.specs.map((spec) => (
                          <tr key={spec.label} className="border-b border-blue-500/10">
                            <th
                              scope="row"
                              className="py-2 pr-4 text-left font-medium text-blue-200/80 align-top"
                            >
                              {spec.label.toUpperCase()}
                            </th>
                            <td className="py-2 text-right text-blue-100/90">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="space-y-6 rounded-2xl border border-gray-800 bg-gray-900/40 p-5">
              <h3 className="text-xl font-bold text-gray-100">Packaging & Shipping Information</h3>
              <div className="space-y-6">
                <div className="rounded-2xl border border-gray-700/70 bg-gray-900/60 p-5">
                  <h4 className="font-bold text-gray-200 mb-2">Packaging Details</h4>
                  <table className="w-full border-collapse text-sm">
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                          Dimensions
                        </th>
                        <td className="py-2 text-right text-gray-200">180 × 70 × 110 cm (CBU Standard)</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                          Gross Weight
                        </th>
                        <td className="py-2 text-right text-gray-200">125 kg per unit</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                          Protection Level
                        </th>
                        <td className="py-2 text-right text-gray-200">Steel Frame + 7-layer Carton (Inside)</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                          Safety Features
                        </th>
                        <td className="py-2 text-right text-gray-200">Moisture-proof wrap & shock-absorbing foam</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="rounded-2xl border border-gray-700/70 bg-gray-900/60 p-5">
                  <h4 className="font-bold text-gray-200 mb-2">Container Loading Efficiency</h4>
                  <table className="w-full border-collapse text-sm">
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                          CBU Mode (Fully Assembled)
                        </th>
                        <td className="py-2 text-right text-gray-200">20GP: 20 Units</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                          CBU Mode (Fully Assembled)
                        </th>
                        <td className="py-2 text-right text-blue-300">40HQ: 45 Units (Optimized)</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                          SKD/CKD Mode (Cost Saving)
                        </th>
                        <td className="py-2 text-right text-gray-200">40HQ: 75+ Units (Contact for layout plan)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="rounded-2xl border border-gray-700/70 bg-gray-900/60 p-5">
                  <h4 className="font-bold text-gray-200 mb-2">Logistics & Compliance</h4>
                  <table className="w-full border-collapse text-sm">
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                          Lead Time
                        </th>
                        <td className="py-2 text-right text-gray-200">15-25 days (Production)</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                          Battery Compliance
                        </th>
                        <td className="py-2 text-right text-gray-200">MSDS / UN38.3 Certified</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                          Incoterms
                        </th>
                        <td className="py-2 text-right text-gray-200">EXW, FOB, CIF, DDP</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                          Loading Ports
                        </th>
                        <td className="py-2 text-right text-gray-200">Ningbo / Shanghai (Priority)</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                          Payment Terms
                        </th>
                        <td className="py-2 text-right text-gray-200">30% deposit, balance before shipment</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'company' && (
            <div>
              <h3 className="text-xl font-bold text-gray-100 mb-4">Company Profile</h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  TYCORUN is a leading manufacturer of electric vehicles specializing in commercial-grade electric motorcycles and scooters. With over 10 years of experience in the industry, we serve customers worldwide with reliable, cost-effective solutions for last-mile delivery and urban transportation.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                    <h4 className="font-bold text-blue-400 mb-2">Production Capacity</h4>
                    <p className="text-gray-200">50,000+ units per month</p>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                    <h4 className="font-bold text-green-400 mb-2">R&D Team</h4>
                    <p className="text-gray-200">Over 50 engineers</p>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                    <h4 className="font-bold text-purple-400 mb-2">Export Markets</h4>
                    <p className="text-gray-200">Over 50 countries</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-bold text-gray-200 mb-2">Quality Certifications</h4>
                  <p className="text-gray-300">We hold ISO 9001 certification and our products are CE, TÜV, EPA, DOT approved for international markets.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
