
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const ProductDetailPage = () => {
  const productImages = [
    { id: 1, src: '/images/products/main-product.jpg', alt: 'Front View' },
    { id: 2, src: '/images/products/side-view.jpg', alt: 'Side View' },
    { id: 3, src: '/images/products/back-view.jpg', alt: 'Back View' },
    { id: 4, src: '/images/products/dashboard-detail.jpg', alt: 'Dashboard Detail' },
  ];
  const loopImages = [...productImages, ...productImages, ...productImages];

  const [mainImage, setMainImage] = useState('/images/products/main-product.jpg');
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

  const [motorPower, setMotorPower] = useState('2000W');
  const [batteryType, setBatteryType] = useState('Lithium-Ion');
  const [quantity, setQuantity] = useState(10);

  const pricingData = [
    { moq: 'MOQ 10+', price: '$850' },
    { moq: 'MOQ 50+', price: '$780' },
    { moq: 'MOQ 100+', price: '$720' },
    { moq: 'MOQ 200+', price: '$680' },
  ];

  const specData = [
    { iconClass: 'fas fa-motorcycle', label: '2000W Motor' },
    { iconClass: 'fas fa-bolt', label: '72V 40Ah Battery' },
    { iconClass: 'fas fa-gas-pump', label: '120km Range' },
    { iconClass: 'fas fa-certificate', label: 'CE Certified' },
  ];

  const [activeTab, setActiveTab] = useState('specifications');

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
  }, []);

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
    <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 md:pt-40 md:pb-24 overflow-x-hidden">
      {/* 页面标题 */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 mb-4">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/product" className="hover:text-blue-400 transition-colors">Product</Link>
          <span>/</span>
          <span className="text-gray-300">Model X-2000 Pro</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2">Model X-2000 Pro - Long Range Electric Logistics Moped</h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          High-performance electric moped designed for commercial logistics with superior range, durability, and swappable battery technology.
        </p>
      </div>

      {/* 主要内容区 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* 左侧图片区 - 添加吸顶效果 */}
        <div className="lg:sticky lg:top-24 lg:self-start space-y-6">

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
                <div className="mt-1 text-xs text-center text-gray-400">{image.alt}</div>
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
                  <span className="font-medium text-gray-300">{tier.moq}</span>
                  <span className="font-bold text-blue-400 text-lg">{tier.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 规格亮点 */}
          <div className="grid grid-cols-2 gap-4">
            {specData.map((spec, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700">
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
                {['1000W', '1500W', '2000W'].map((power) => (
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
                {['Lead-Acid', 'Lithium-Ion'].map((battery) => (
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
          <nav className="-mb-px flex space-x-8">
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
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold text-gray-100 mb-4">Technical Specifications</h3>
              <ul className="space-y-2">
                <li className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="font-medium text-gray-300">Motor Power:</span>
                  <span className="text-gray-200">{motorPower}</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="font-medium text-gray-300">Battery Type:</span>
                  <span className="text-gray-200">{batteryType}</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="font-medium text-gray-300">Battery Capacity:</span>
                  <span className="text-gray-200">72V 40Ah</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="font-medium text-gray-300">Max Range:</span>
                  <span className="text-gray-200">120 km (with full charge)</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="font-medium text-gray-300">Max Speed:</span>
                  <span className="text-gray-200">45 km/h</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="font-medium text-gray-300">Charging Time:</span>
                  <span className="text-gray-200">6-8 hours (standard), 3-4 hours (fast charger)</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="font-medium text-gray-300">Payload Capacity:</span>
                  <span className="text-gray-200">200 kg</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="font-medium text-gray-300">Gross Weight:</span>
                  <span className="text-gray-200">120 kg</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="font-medium text-gray-300">Braking System:</span>
                  <span className="text-gray-200">Disc brakes front/rear with CBS</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="font-medium text-gray-300">Certifications:</span>
                  <span className="text-gray-200">CE, TÜV, ISO 9001</span>
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div>
              <h3 className="text-xl font-bold text-gray-100 mb-4">Packaging & Shipping Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-200 mb-2">Packaging Details</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between border-b border-gray-700 pb-2">
                      <span className="font-medium text-gray-300">Package Size:</span>
                      <span className="text-gray-200">L180cm x W70cm x H110cm</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-700 pb-2">
                      <span className="font-medium text-gray-300">Gross Weight:</span>
                      <span className="text-gray-200">125 kg per unit</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-700 pb-2">
                      <span className="font-medium text-gray-300">Packaging Type:</span>
                      <span className="text-gray-200">Standard export carton with foam protection</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-700 pb-2">
                      <span className="font-medium text-gray-300">Container Loading:</span>
                      <span className="text-gray-200">20ft: 20 units | 40ft: 45 units</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-200 mb-2">Shipping Information</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between border-b border-gray-700 pb-2">
                      <span className="font-medium text-gray-300">Delivery Time:</span>
                      <span className="text-gray-200">15-25 days after payment confirmation</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-700 pb-2">
                      <span className="font-medium text-gray-300">Incoterms:</span>
                      <span className="text-gray-200">FOB, CIF, DDP available</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-700 pb-2">
                      <span className="font-medium text-gray-300">Shipping Ports:</span>
                      <span className="text-gray-200">Ningbo, Shanghai, Shenzhen</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-700 pb-2">
                      <span className="font-medium text-gray-300">Payment Terms:</span>
                      <span className="text-gray-200">T/T, L/C, Western Union</span>
                    </li>
                  </ul>
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
