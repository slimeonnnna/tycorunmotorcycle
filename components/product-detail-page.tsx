
'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { ProductContent } from '@/data/products';

type ProductDetailPageProps = {
  product: ProductContent;
  shippingContent?: React.ReactNode;
  companyContent?: React.ReactNode;
};

const ProductDetailPage = ({ product, shippingContent, companyContent }: ProductDetailPageProps) => {
  const productImages = product.images;
  const loopImages = [...productImages, ...productImages, ...productImages];

  const initialIndex = Math.max(
    0,
    productImages.findIndex((image) => image.src === product.mainImage),
  );
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const mainImage = productImages[currentIndex]?.src ?? product.mainImage;
  const thumbnailTrackRef = useRef<HTMLDivElement | null>(null);
  const mainTrackRef = useRef<HTMLDivElement | null>(null);
  const mainViewportRef = useRef<HTMLDivElement | null>(null);
  const currentIndexRef = useRef(initialIndex);
  const tabNavRef = useRef<HTMLDivElement | null>(null);
  const thumbnailAutoScrollRef = useRef(false);
  const thumbnailDragRef = useRef({
    isDown: false,
    startX: 0,
    startY: 0,
    startTime: 0,
    scrollLeft: 0,
    moved: false,
    suppressClick: false,
    startTarget: null as HTMLElement | null,
    dragDistance: 0,
    overscroll: 0,
    lockAxis: null as 'x' | 'y' | null,
    resetTimer: 0 as number,
  });
  const mainAutoScrollRef = useRef(false);
  const mainScrollTimerRef = useRef(0 as number);
  const mainScrollRafRef = useRef(0 as number);
  const mainSnapRef = useRef({
    origin: 0,
    settleTimer: 0 as number,
  });
  const mainDragRef = useRef({
    isDown: false,
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    dragDistance: 0,
    lockAxis: null as 'x' | 'y' | null,
    pointerId: null as number | null,
  });
  const mainHoverRef = useRef(false);

  const cancelMainScrollAnimation = () => {
    window.clearTimeout(mainScrollTimerRef.current);
    if (mainScrollRafRef.current) {
      cancelAnimationFrame(mainScrollRafRef.current);
      mainScrollRafRef.current = 0;
    }
    mainAutoScrollRef.current = false;
  };

  const animateMainScrollTo = (target: number, duration = 500, onComplete?: () => void) => {
    const track = mainTrackRef.current;
    if (!track) {
      return;
    }
    cancelMainScrollAnimation();
    const start = track.scrollLeft;
    const delta = target - start;
    if (!delta) {
      onComplete?.();
      return;
    }
    mainAutoScrollRef.current = true;
    const startTime = performance.now();
    const easeInOut = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeInOut(progress);
      track.scrollLeft = start + delta * eased;
      if (progress < 1) {
        mainScrollRafRef.current = requestAnimationFrame(step);
      } else {
        track.scrollLeft = target;
        mainAutoScrollRef.current = false;
        mainScrollRafRef.current = 0;
        onComplete?.();
      }
    };
    mainScrollRafRef.current = requestAnimationFrame(step);
  };

  const recenterMainTrack = () => {
    const track = mainTrackRef.current;
    if (!track) {
      return;
    }
    const step = track.clientWidth;
    if (!step) {
      return;
    }
    const total = productImages.length;
    const cycle = step * total;
    if (!cycle) {
      return;
    }
    const normalized = ((track.scrollLeft % cycle) + cycle) % cycle;
    const target = normalized + cycle;
    if (Math.abs(track.scrollLeft - target) <= 0.5) {
      return;
    }
    mainAutoScrollRef.current = true;
    const delta = target - track.scrollLeft;
    track.scrollLeft = target;
    mainSnapRef.current.origin += delta;
    requestAnimationFrame(() => {
      mainAutoScrollRef.current = false;
    });
  };

  const scrollMainToIndex = (nextIndex: number, direction = 0) => {
    const track = mainTrackRef.current;
    if (!track) {
      return;
    }
    cancelMainScrollAnimation();
    const step = track.clientWidth;
    if (!step) {
      return;
    }
    const total = productImages.length;
    const cycle = step * total;
    if (!mainSnapRef.current.origin) {
      mainSnapRef.current.origin = cycle;
    }
    const base = mainSnapRef.current.origin;
    const normalized = ((nextIndex % total) + total) % total;
    const currentFloat = (track.scrollLeft - base) / step;
    const candidates = [normalized, normalized + total, normalized - total];
    let targetRaw = candidates[0];
    if (direction > 0) {
      let minForward = Number.POSITIVE_INFINITY;
      for (const candidate of candidates) {
        const adjusted = candidate < currentFloat - 0.001 ? candidate + total : candidate;
        const distance = adjusted - currentFloat;
        if (distance >= 0 && distance < minForward) {
          minForward = distance;
          targetRaw = adjusted;
        }
      }
    } else if (direction < 0) {
      let minBackward = Number.POSITIVE_INFINITY;
      for (const candidate of candidates) {
        const adjusted = candidate > currentFloat + 0.001 ? candidate - total : candidate;
        const distance = currentFloat - adjusted;
        if (distance >= 0 && distance < minBackward) {
          minBackward = distance;
          targetRaw = adjusted;
        }
      }
    } else {
      let minDistance = Math.abs(targetRaw - currentFloat);
      for (const candidate of candidates.slice(1)) {
        const distance = Math.abs(candidate - currentFloat);
        if (distance < minDistance) {
          minDistance = distance;
          targetRaw = candidate;
        }
      }
    }
    const target = base + step * targetRaw;
    const slideDistance = Math.max(1, Math.abs(targetRaw - currentFloat));
    const duration = Math.min(520, Math.max(180, 320 + slideDistance * 120));
    animateMainScrollTo(target, duration, () => {
      recenterMainTrack();
    });
  };

  const setCurrentIndexSafe = (nextIndex: number) => {
    setCurrentIndex(nextIndex);
    currentIndexRef.current = nextIndex;
  };

  const goToIndex = (nextIndex: number) => {
    if (!productImages.length) {
      return;
    }
    if (mainAutoScrollRef.current) {
      return;
    }
    const normalized = ((nextIndex % productImages.length) + productImages.length) % productImages.length;
    const direction = Math.sign(nextIndex - currentIndexRef.current);
    setCurrentIndexSafe(normalized);
    scrollMainToIndex(nextIndex, direction);
  };

  const handleThumbnailSelect = (imageSrc: string) => {
    const nextIndex = productImages.findIndex((image) => image.src === imageSrc);
    if (nextIndex !== -1) {
      goToIndex(nextIndex);
    }
  };

  const handlePrevMain = () => {
    goToIndex(currentIndex - 1);
  };

  const handleNextMain = () => {
    goToIndex(currentIndex + 1);
  };

  const [motorPower, setMotorPower] = useState(product.defaultPower);
  const [batteryType, setBatteryType] = useState(product.defaultBattery);
  const [quantity, setQuantity] = useState(10);
  const pricingData = product.pricing;
  const specData = product.highlights;
  const [activeTab, setActiveTab] = useState('specifications');
  const [isTabFading, setIsTabFading] = useState(false);
  const tabFadeTimerRef = useRef(0 as number);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  type ProductTab = 'specifications' | 'shipping' | 'company' | 'faq';
  const tabOrder: ProductTab[] = ['specifications', 'shipping', 'company', 'faq'];
  const activeTabIndex = Math.max(0, tabOrder.indexOf(activeTab as ProductTab));
  const tabSwipeRef = useRef({
    isDown: false,
    startX: 0,
    startY: 0,
    lockAxis: null as 'x' | 'y' | null,
  });

  const setActiveTabOnly = (nextTab: ProductTab) => {
    setActiveTab(nextTab);
  };

  const requestTabChange = (nextTab: ProductTab) => {
    if (nextTab === activeTab) {
      return;
    }
    const tabButton = tabNavRef.current?.querySelector<HTMLButtonElement>(
      `button[data-tab="${nextTab}"]`,
    );
    window.clearTimeout(tabFadeTimerRef.current);
    setIsTabFading(true);
    tabFadeTimerRef.current = window.setTimeout(() => {
      setActiveTabOnly(nextTab);
      scrollTabIntoViewOnMobile(tabButton ?? null);
      requestAnimationFrame(() => {
        setIsTabFading(false);
      });
    }, 160);
  };

  const scrollTabIntoViewOnMobile = (target: HTMLElement | null) => {
    if (!target) {
      return;
    }
    if (typeof window === 'undefined') {
      return;
    }
    if (!window.matchMedia('(max-width: 767px)').matches) {
      return;
    }
    target.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  const handleTabClick = (tab: ProductTab, target: HTMLButtonElement) => {
    requestTabChange(tab);
    scrollTabIntoViewOnMobile(target);
  };

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? null : index));
  };

  useEffect(() => {
    setMotorPower(product.defaultPower);
    setBatteryType(product.defaultBattery);
  }, [product.defaultPower, product.defaultBattery]);

  useEffect(() => {
    return () => {
      window.clearTimeout(tabFadeTimerRef.current);
    };
  }, []);

  useLayoutEffect(() => {
    const track = mainTrackRef.current;
    if (!track || !productImages.length) {
      return;
    }
    const step = track.clientWidth;
    if (!step) {
      return;
    }
    const cycle = step * productImages.length;
    const nextIndex = Math.max(
      0,
      productImages.findIndex((image) => image.src === product.mainImage),
    );
    mainSnapRef.current.origin = cycle;
    track.scrollLeft = cycle + step * nextIndex;
    setCurrentIndexSafe(nextIndex);
  }, [product.mainImage, productImages.length]);

  useEffect(() => {
    const track = mainTrackRef.current;
    if (!track) {
      return;
    }

    const getStep = () => track.clientWidth;

    const onScroll = () => {
      if (mainAutoScrollRef.current || mainDragRef.current.isDown) {
        return;
      }
      const step = getStep();
      if (!step) {
        return;
      }
      const cycle = step * productImages.length;
      if (!cycle) {
        return;
      }
      if (track.scrollLeft < cycle * 0.5 || track.scrollLeft > cycle * 1.5) {
        mainAutoScrollRef.current = true;
        const normalized = ((track.scrollLeft % cycle) + cycle) % cycle;
        const target = normalized + cycle;
        const delta = target - track.scrollLeft;
        mainSnapRef.current.origin += delta;
        requestAnimationFrame(() => {
          track.scrollLeft = target;
          mainAutoScrollRef.current = false;
        });
      }
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
    };
  }, [productImages.length]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (mainHoverRef.current || mainDragRef.current.isDown) {
        return;
      }
      goToIndex(currentIndex + 1);
    }, 4200);
    return () => {
      window.clearInterval(timer);
    };
  }, [currentIndex, productImages.length]);

  useEffect(() => {
    const track = thumbnailTrackRef.current;
    if (!track || thumbnailDragRef.current.isDown) {
      return;
    }
    const firstItem = track.querySelector<HTMLElement>('[data-thumb-item="true"]');
    const gapValue = Number.parseFloat(getComputedStyle(track).columnGap || '0') || 0;
    const step = (firstItem?.getBoundingClientRect().width || 0) + gapValue;
    if (!step) {
      return;
    }
    const imageIndex = productImages.findIndex((image) => image.src === mainImage);
    if (imageIndex < 0) {
      return;
    }
    const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
    const target = Math.min(maxScrollLeft, Math.max(0, step * imageIndex));
    thumbnailAutoScrollRef.current = true;
    track.scrollTo({ left: target, behavior: 'smooth' });
    window.setTimeout(() => {
      thumbnailAutoScrollRef.current = false;
    }, 160);
  }, [mainImage, productImages]);

  const handleThumbPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = thumbnailTrackRef.current;
    if (!track) {
      return;
    }
    if (event.pointerType !== 'touch') {
      event.preventDefault();
    }
    track.style.transition = 'none';
    thumbnailDragRef.current.isDown = true;
    thumbnailDragRef.current.startX = event.clientX;
    thumbnailDragRef.current.startY = event.clientY;
    thumbnailDragRef.current.startTime = performance.now();
    thumbnailDragRef.current.scrollLeft = track.scrollLeft;
    thumbnailDragRef.current.moved = false;
    thumbnailDragRef.current.suppressClick = false;
    thumbnailDragRef.current.startTarget = event.target as HTMLElement;
    thumbnailDragRef.current.dragDistance = 0;
    thumbnailDragRef.current.overscroll = 0;
    thumbnailDragRef.current.lockAxis = null;
    window.clearTimeout(thumbnailDragRef.current.resetTimer);
    mainDragRef.current.pointerId = event.pointerId;
  };

  const handleThumbPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = thumbnailTrackRef.current;
    if (!track || !thumbnailDragRef.current.isDown) {
      return;
    }
    const delta = event.clientX - thumbnailDragRef.current.startX;
    const deltaY = event.clientY - thumbnailDragRef.current.startY;
    const distance = Math.abs(delta);
    const absY = Math.abs(deltaY);
    if (!thumbnailDragRef.current.lockAxis) {
      if (distance < 6 && absY < 6) {
        return;
      }
      thumbnailDragRef.current.lockAxis = distance >= absY ? 'x' : 'y';
    }
    if (thumbnailDragRef.current.lockAxis === 'y') {
      thumbnailDragRef.current.isDown = false;
      thumbnailDragRef.current.dragDistance = 0;
      thumbnailDragRef.current.lockAxis = null;
      return;
    }
    event.preventDefault();
    if (distance > thumbnailDragRef.current.dragDistance) {
      thumbnailDragRef.current.dragDistance = distance;
    }
    if (distance > 0) {
      const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
      let nextScrollLeft = thumbnailDragRef.current.scrollLeft - delta;
      let overscroll = 0;
      if (nextScrollLeft < 0) {
        overscroll = nextScrollLeft;
        nextScrollLeft = 0;
      } else if (nextScrollLeft > maxScrollLeft) {
        overscroll = nextScrollLeft - maxScrollLeft;
        nextScrollLeft = maxScrollLeft;
      }
      thumbnailDragRef.current.overscroll = overscroll;
      track.scrollLeft = nextScrollLeft;
      if (overscroll !== 0) {
        track.style.transform = `translateX(${-overscroll * 0.35}px)`;
      } else {
        track.style.transform = 'translateX(0px)';
      }
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
        const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
        const snapped = Math.round(track.scrollLeft / step) * step;
        const target = Math.min(maxScrollLeft, Math.max(0, snapped));
        thumbnailAutoScrollRef.current = true;
        track.scrollTo({ left: target, behavior: 'smooth' });
        window.setTimeout(() => {
          thumbnailAutoScrollRef.current = false;
        }, 160);
      }
    }
    if (track) {
      track.style.transition = 'transform 200ms ease-out';
      track.style.transform = 'translateX(0px)';
      window.clearTimeout(thumbnailDragRef.current.resetTimer);
      thumbnailDragRef.current.resetTimer = window.setTimeout(() => {
        track.style.transition = 'none';
      }, 220);
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
    thumbnailDragRef.current.overscroll = 0;
    thumbnailDragRef.current.lockAxis = null;
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
    if (track) {
      track.style.transition = 'transform 200ms ease-out';
      track.style.transform = 'translateX(0px)';
      window.clearTimeout(thumbnailDragRef.current.resetTimer);
      thumbnailDragRef.current.resetTimer = window.setTimeout(() => {
        track.style.transition = 'none';
      }, 220);
    }
    thumbnailDragRef.current.isDown = false;
    thumbnailDragRef.current.moved = false;
    thumbnailDragRef.current.suppressClick = false;
    thumbnailDragRef.current.startTarget = null;
    thumbnailDragRef.current.dragDistance = 0;
    thumbnailDragRef.current.overscroll = 0;
    thumbnailDragRef.current.lockAxis = null;
  };

  const handleMainPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = mainTrackRef.current;
    if (!track) {
      return;
    }
    cancelMainScrollAnimation();
    mainDragRef.current.isDown = true;
    mainDragRef.current.startX = event.clientX;
    mainDragRef.current.startY = event.clientY;
    mainDragRef.current.scrollLeft = track.scrollLeft;
    mainDragRef.current.dragDistance = 0;
    mainDragRef.current.lockAxis = null;
    mainDragRef.current.pointerId = event.pointerType === 'touch' ? null : event.pointerId;
    if (event.pointerType !== 'touch') {
      track.setPointerCapture(event.pointerId);
    }
  };

  const handleMainPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = mainTrackRef.current;
    if (!track || !mainDragRef.current.isDown) {
      return;
    }
    const deltaX = event.clientX - mainDragRef.current.startX;
    const deltaY = event.clientY - mainDragRef.current.startY;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);
    if (!mainDragRef.current.lockAxis) {
      if (absX < 4 && absY < 4) {
        return;
      }
      mainDragRef.current.lockAxis = absX >= absY ? 'x' : 'y';
    }
    if (mainDragRef.current.lockAxis === 'y') {
      if (
        mainDragRef.current.pointerId !== null &&
        track.hasPointerCapture(mainDragRef.current.pointerId)
      ) {
        track.releasePointerCapture(mainDragRef.current.pointerId);
      }
      mainDragRef.current.pointerId = null;
      mainDragRef.current.isDown = false;
      mainDragRef.current.dragDistance = 0;
      mainDragRef.current.lockAxis = null;
      return;
    }
    if (
      event.pointerType !== 'touch' &&
      mainDragRef.current.pointerId !== null &&
      !track.hasPointerCapture(mainDragRef.current.pointerId)
    ) {
      track.setPointerCapture(mainDragRef.current.pointerId);
    }
    event.preventDefault();
    mainDragRef.current.dragDistance = Math.max(mainDragRef.current.dragDistance, absX);
    track.scrollLeft = mainDragRef.current.scrollLeft - deltaX;
    const step = track.clientWidth;
    if (step > 0 && productImages.length > 0) {
      const cycle = step * productImages.length;
      if (cycle > 0) {
        if (track.scrollLeft < cycle * 0.5 || track.scrollLeft > cycle * 1.5) {
          const normalized = ((track.scrollLeft % cycle) + cycle) % cycle;
          const target = normalized + cycle;
          const delta = target - track.scrollLeft;
          track.scrollLeft = target;
          mainDragRef.current.scrollLeft += delta;
          mainSnapRef.current.origin += delta;
        }
      }
    }
  };

  const handleMainPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = mainTrackRef.current;
    if (
      track &&
      mainDragRef.current.isDown &&
      mainDragRef.current.pointerId !== null &&
      track.hasPointerCapture(mainDragRef.current.pointerId)
    ) {
      track.releasePointerCapture(mainDragRef.current.pointerId);
    }
    if (track) {
      const step = track.clientWidth;
      if (step > 0 && productImages.length) {
        const base = mainSnapRef.current.origin;
        const offset = track.scrollLeft - base;
        const scrollDelta = track.scrollLeft - mainDragRef.current.scrollLeft;
        const threshold = step * 0.12;
        const currentFloat = offset / step;
        let targetIndex = Math.round(currentFloat);
        if (Math.abs(scrollDelta) > threshold) {
          targetIndex = scrollDelta > 0 ? Math.ceil(currentFloat) : Math.floor(currentFloat);
        }
        const target = base + targetIndex * step;
        const normalized =
          ((targetIndex % productImages.length) + productImages.length) % productImages.length;
        mainSnapRef.current.origin = target - normalized * step;
        animateMainScrollTo(target, 500, () => {
          recenterMainTrack();
        });
        setCurrentIndexSafe(normalized);
      }
    }
    mainDragRef.current.isDown = false;
    mainDragRef.current.dragDistance = 0;
    mainDragRef.current.lockAxis = null;
    mainDragRef.current.pointerId = null;
  };

  const handleMainPointerCancel = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = mainTrackRef.current;
    if (
      track &&
      mainDragRef.current.isDown &&
      mainDragRef.current.pointerId !== null &&
      track.hasPointerCapture(mainDragRef.current.pointerId)
    ) {
      track.releasePointerCapture(mainDragRef.current.pointerId);
    }
    mainDragRef.current.isDown = false;
    mainDragRef.current.dragDistance = 0;
    mainDragRef.current.lockAxis = null;
    mainDragRef.current.pointerId = null;
  };

  const handleMainMouseEnter = () => {
    mainHoverRef.current = true;
  };

  const handleMainMouseLeave = () => {
    mainHoverRef.current = false;
  };

  const handleTabSwipePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    tabSwipeRef.current.isDown = true;
    tabSwipeRef.current.startX = event.clientX;
    tabSwipeRef.current.startY = event.clientY;
    tabSwipeRef.current.lockAxis = null;
  };

  const handleTabSwipePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!tabSwipeRef.current.isDown) {
      return;
    }
    const deltaX = event.clientX - tabSwipeRef.current.startX;
    const deltaY = event.clientY - tabSwipeRef.current.startY;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);
    if (!tabSwipeRef.current.lockAxis) {
      if (absX < 6 && absY < 6) {
        return;
      }
      tabSwipeRef.current.lockAxis = absX >= absY ? 'x' : 'y';
    }
    if (tabSwipeRef.current.lockAxis === 'x') {
      event.preventDefault();
    }
  };

  const handleTabSwipePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!tabSwipeRef.current.isDown) {
      return;
    }
    const deltaX = event.clientX - tabSwipeRef.current.startX;
    const deltaY = event.clientY - tabSwipeRef.current.startY;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);
    const isHorizontal = absX > 40 && absX > absY;
    if (isHorizontal) {
      const currentIndex = tabOrder.indexOf(activeTab as ProductTab);
      if (currentIndex !== -1) {
        const direction = deltaX < 0 ? 1 : -1;
        const nextIndex = Math.min(tabOrder.length - 1, Math.max(0, currentIndex + direction));
        if (nextIndex !== currentIndex) {
          requestTabChange(tabOrder[nextIndex]);
        }
      }
    }
    tabSwipeRef.current.isDown = false;
    tabSwipeRef.current.lockAxis = null;
  };

  const handleTabSwipePointerCancel = () => {
    tabSwipeRef.current.isDown = false;
    tabSwipeRef.current.lockAxis = null;
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
        
        <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-[27px] font-semibold text-transparent md:text-5xl">
          {product.headline}
        </h1>
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
            <div
              ref={mainViewportRef}
              className="relative h-full w-full overflow-hidden"
              style={{ touchAction: 'pan-y' }}
              onMouseEnter={handleMainMouseEnter}
              onMouseLeave={handleMainMouseLeave}
            >
              <div
                ref={mainTrackRef}
                className="no-scrollbar main-carousel-track h-full w-full overflow-x-auto"
                style={{ touchAction: 'pan-y' }}
                onPointerDown={handleMainPointerDown}
                onPointerMove={handleMainPointerMove}
                onPointerUp={handleMainPointerUp}
                onPointerLeave={(event) => {
                  if (mainDragRef.current.pointerId === null) {
                    return;
                  }
                  handleMainPointerCancel(event);
                }}
                onPointerCancel={handleMainPointerCancel}
              >
                {loopImages.map((image, index) => {
                  const isPrimary = index === productImages.length + currentIndex;
                  const isFirstPrimary = isPrimary && currentIndex === initialIndex;
                  return (
                    <div key={`${image.id}-${index}`} className="main-carousel-slide h-full w-full">
                      <div className="relative h-full w-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 640px) 75vw, (max-width: 1024px) 70vw, 606px"
                          className="main-carousel-image object-contain"
                          priority={isFirstPrimary}
                          loading={isPrimary ? 'eager' : 'lazy'}
                          fetchPriority={isFirstPrimary ? 'high' : 'auto'}
                          draggable={false}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className="image-card__controls"
              onMouseEnter={handleMainMouseEnter}
              onMouseLeave={handleMainMouseLeave}
            >
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
          <div className="overflow-hidden">
            <div
              ref={thumbnailTrackRef}
              className="no-scrollbar thumbnail-track overflow-x-auto scroll-px-0"
              onPointerDown={handleThumbPointerDown}
              onPointerMove={handleThumbPointerMove}
              onPointerUp={handleThumbPointerUp}
              onPointerLeave={handleThumbPointerCancel}
              onPointerCancel={handleThumbPointerCancel}
            >
              {productImages.map((image) => (
                <div
                  key={image.id}
                  data-thumb-item="true"
                  style={
                    {
                      '--thumb-border-color': mainImage === image.src ? '#3b82f6' : '#374151',
                    } as React.CSSProperties
                  }
                  className="thumbnail-item group relative h-24 rounded-lg overflow-hidden transition-all"
                >
                  <span
                    className={`pointer-events-none absolute inset-0 bg-black/40 transition-opacity ${
                      mainImage === image.src ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                    }`}
                    aria-hidden="true"
                  ></span>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    data-image-src={image.src}
                    fill
                    sizes="(max-width: 768px) 45vw, 120px"
                    loading="lazy"
                    draggable={false}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
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
            <h2 className="text-lg font-medium text-gray-100 mb-3">Motor Power</h2>
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
            <h2 className="text-lg font-medium text-gray-100 mb-3">Battery Type</h2>
              <div className="grid grid-cols-2 gap-3 sm:flex sm:space-x-3">
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
          <nav
            ref={tabNavRef}
            className="-mb-px flex gap-4 overflow-x-auto no-scrollbar md:gap-0"
          >
            <button
              data-tab="specifications"
              onClick={(event) => handleTabClick('specifications', event.currentTarget)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer md:w-1/4 md:text-center ${
                activeTab === 'specifications'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-500'
              }`}
            >
              Full Specifications
            </button>
            <button
              data-tab="shipping"
              onClick={(event) => handleTabClick('shipping', event.currentTarget)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer md:w-1/4 md:text-center ${
                activeTab === 'shipping'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-500'
              }`}
            >
              Packaging & Shipping
            </button>
            <button
              data-tab="company"
              onClick={(event) => handleTabClick('company', event.currentTarget)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer md:w-1/4 md:text-center ${
                activeTab === 'company'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-500'
              }`}
            >
              Company Profile
            </button>
            <button
              data-tab="faq"
              onClick={(event) => handleTabClick('faq', event.currentTarget)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer md:w-1/4 md:text-center ${
                activeTab === 'faq'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-500'
              }`}
            >
              FAQ
            </button>
          </nav>
        </div>

        <div
          className={`tab-content-viewport py-8 scroll-mt-24 transition-opacity duration-300 ease-out ${
            isTabFading ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ touchAction: 'pan-y' }}
          onPointerDown={handleTabSwipePointerDown}
          onPointerMove={handleTabSwipePointerMove}
          onPointerUp={handleTabSwipePointerUp}
          onPointerLeave={handleTabSwipePointerCancel}
          onPointerCancel={handleTabSwipePointerCancel}
        >
          <div className={activeTab === 'specifications' ? 'block' : 'hidden'}>
            <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6">
              <div className="grid gap-8 lg:grid-cols-2">
              <div className="flex h-full flex-col justify-center">
                <h2 className="text-xl font-bold text-gray-100 mb-3">Performance & Fleet Specs</h2>
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
                      <h3 className="text-base font-semibold text-gray-100">{scenario.title}</h3>
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
          </div>

          <div className={activeTab === 'shipping' ? 'block' : 'hidden'}>
            {shippingContent ?? (
              <div className="space-y-6 rounded-2xl border border-gray-800 bg-gray-900/40 p-5">
                <h2 className="text-xl font-bold text-gray-100">Packaging & Shipping Information</h2>
                <div className="space-y-6">
                  {product.shippingSections?.map((section, sectionIndex) => (
                    <div
                      key={`${section.title}-${sectionIndex}`}
                      className="rounded-2xl border border-gray-700/70 bg-gray-900/60 p-5"
                    >
                      <div className="mb-3 flex items-center gap-2">
                        <span
                          className={`h-4 w-1 rounded-full ${
                            sectionIndex === 0
                              ? "bg-blue-500/80"
                              : sectionIndex === 1
                                ? "bg-emerald-400/80"
                                : "bg-blue-500/90"
                          }`}
                        ></span>
                        <i
                          className={`text-sm ${
                            sectionIndex === 0
                              ? "fas fa-box text-blue-400"
                              : sectionIndex === 1
                                ? "fas fa-truck-loading text-emerald-300"
                                : "fas fa-shield-alt text-blue-500/90"
                          }`}
                          aria-hidden="true"
                        ></i>
                        <h3 className="font-bold text-gray-200">{section.title}</h3>
                      </div>
                      <table className="w-full border-collapse text-sm">
                        <tbody>
                          {section.items.map((item, itemIndex) => (
                            <tr key={`${item.label}-${itemIndex}`} className="border-b border-gray-700">
                              <th scope="row" className="py-2 pr-4 text-left font-medium text-gray-300">
                                {item.label}
                              </th>
                              <td className="py-2 text-right text-gray-200">{item.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className={activeTab === 'company' ? 'block' : 'hidden'}>
            <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-5">
              <h2 className="text-xl font-bold text-gray-100 mb-4">Company Profile</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  TYCORUN is a leading manufacturer of electric vehicles specializing in commercial-grade electric motorcycles and scooters. With over 10 years of experience in the industry, we serve customers worldwide with reliable, cost-effective solutions for last-mile delivery and urban transportation.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                    <h3 className="font-bold text-blue-400 mb-2">Production Capacity</h3>
                    <p className="text-gray-200">50,000+ units per month</p>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                    <h3 className="font-bold text-green-400 mb-2">R&D Team</h3>
                    <p className="text-gray-200">Over 50 engineers</p>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                    <h3 className="font-bold text-purple-400 mb-2">Export Markets</h3>
                    <p className="text-gray-200">Over 50 countries</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-bold text-gray-200 mb-2">Quality Certifications</h3>
                  <p className="text-gray-300">We hold ISO 9001 certification and our products are CE, TÜV, EPA, DOT approved for international markets.</p>
                  <section className="border-t border-gray-800 pt-10 mt-10">
                    <div className="mb-6">
                      <h3 className="text-base font-bold text-white uppercase tracking-wider mb-1">
                        Global Compliance Matrix
                      </h3>
                      <p className="text-base text-gray-400">
                        Verified standards for international road legality and safety.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="relative bg-gray-900 border-l-2 border-blue-500 p-4 rounded-r-lg shadow-lg group hover:bg-gray-800 transition-colors cursor-default">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-base text-gray-500 font-mono">EU MARKET</div>
                          <div className="text-base bg-green-900/30 text-green-400 px-1.5 py-0.5 rounded border border-green-500/30">
                            VALID
                          </div>
                        </div>
                        <div className="text-base font-bold text-white mb-1">EEC / E-Mark</div>
                        <div className="text-base text-gray-400">L1e / L3e Homologation</div>
                        <div className="mt-3 text-base text-gray-600 font-mono group-hover:text-blue-400 transition-colors">
                          REF: (EU) No 168/2013
                        </div>
                      </div>
                      <div className="relative bg-gray-900 border-l-2 border-blue-500 p-4 rounded-r-lg shadow-lg group hover:bg-gray-800 transition-colors cursor-default">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-base text-gray-500 font-mono">USA MARKET</div>
                          <div className="text-base bg-green-900/30 text-green-400 px-1.5 py-0.5 rounded border border-green-500/30">
                            VALID
                          </div>
                        </div>
                        <div className="text-base font-bold text-white mb-1">DOT / EPA</div>
                        <div className="text-base text-gray-400">NHTSA Registered</div>
                        <div className="mt-3 text-base text-gray-600 font-mono group-hover:text-blue-400 transition-colors">
                          REF: 49 CFR Part 571
                        </div>
                      </div>
                      <div className="relative bg-gray-900 border-l-2 border-orange-500 p-4 rounded-r-lg shadow-lg group hover:bg-gray-800 transition-colors cursor-default">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-base text-gray-500 font-mono">LOGISTICS</div>
                          <div className="text-base bg-green-900/30 text-green-400 px-1.5 py-0.5 rounded border border-green-500/30">
                            SAFE
                          </div>
                        </div>
                        <div className="text-base font-bold text-white mb-1">UN38.3 / MSDS</div>
                        <div className="text-base text-gray-400">Lithium Transport Cert</div>
                        <div className="mt-3 text-base text-gray-600 font-mono group-hover:text-orange-400 transition-colors">
                          STD: UN Manual Tests 38.3
                        </div>
                      </div>
                      <div className="relative bg-gray-900 border-l-2 border-purple-500 p-4 rounded-r-lg shadow-lg group hover:bg-gray-800 transition-colors cursor-default">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-base text-gray-500 font-mono">FACTORY</div>
                          <div className="text-base bg-green-900/30 text-green-400 px-1.5 py-0.5 rounded border border-green-500/30">
                            AUDITED
                          </div>
                        </div>
                        <div className="text-base font-bold text-white mb-1">ISO 9001:2015</div>
                        <div className="text-base text-gray-400">Quality Management</div>
                        <div className="mt-3 text-base text-gray-600 font-mono group-hover:text-purple-400 transition-colors">
                          STD: ISO 9001:2015
                        </div>
                      </div>
                      <div className="relative bg-gray-900 border-l-2 border-blue-500 p-4 rounded-r-lg shadow-lg group hover:bg-gray-800 transition-colors cursor-default">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-base text-gray-500 font-mono">REGISTRATION</div>
                          <div className="text-base bg-green-900/30 text-green-400 px-1.5 py-0.5 rounded border border-green-500/30">
                            ACTIVE
                          </div>
                        </div>
                        <div className="text-base font-bold text-white mb-1">CoC</div>
                        <div className="text-base text-gray-400">Registration Doc</div>
                        <div className="mt-3 text-base text-gray-600 font-mono group-hover:text-blue-400 transition-colors">
                          DOC: COC-2024-01
                        </div>
                      </div>
                      <div className="relative bg-gray-900 border-l-2 border-emerald-500 p-4 rounded-r-lg shadow-lg group hover:bg-gray-800 transition-colors cursor-default">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-base text-gray-500 font-mono">DURABILITY</div>
                          <div className="text-base bg-green-900/30 text-green-400 px-1.5 py-0.5 rounded border border-green-500/30">
                            TESTED
                          </div>
                        </div>
                        <div className="text-base font-bold text-white mb-1">IP67</div>
                        <div className="text-base text-gray-400">Waterproof Rating</div>
                        <div className="mt-3 text-base text-gray-600 font-mono group-hover:text-emerald-400 transition-colors">
                          RATING: IP67
                        </div>
                      </div>
                      <div className="relative bg-gray-900 border-l-2 border-indigo-500 p-4 rounded-r-lg shadow-lg group hover:bg-gray-800 transition-colors cursor-default">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-base text-gray-500 font-mono">COMPLIANCE</div>
                          <div className="text-base bg-green-900/30 text-green-400 px-1.5 py-0.5 rounded border border-green-500/30">
                            ACTIVE
                          </div>
                        </div>
                        <div className="text-base font-bold text-white mb-1">RoHS</div>
                        <div className="text-base text-gray-400">Material Compliance</div>
                        <div className="mt-3 text-base text-gray-600 font-mono group-hover:text-indigo-400 transition-colors">
                          CERT: RH-2024-EU
                        </div>
                      </div>
                      <div className="relative bg-gray-900 border-l-2 border-cyan-500 p-4 rounded-r-lg shadow-lg group hover:bg-gray-800 transition-colors cursor-default">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-base text-gray-500 font-mono">IDENTITY</div>
                          <div className="text-base bg-green-900/30 text-green-400 px-1.5 py-0.5 rounded border border-green-500/30">
                            ASSIGNED
                          </div>
                        </div>
                        <div className="text-base font-bold text-white mb-1">WMI Code</div>
                        <div className="text-base text-gray-400">World Manufacturer ID</div>
                        <div className="mt-3 text-base text-gray-600 font-mono group-hover:text-cyan-400 transition-colors">
                          REF: ISO 3780:2009
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div className={activeTab === 'faq' ? 'block' : 'hidden'}>
            <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-5">
              <h2 className="text-xl font-bold text-gray-100 mb-4">FAQ</h2>
              <div className="space-y-5">
                {product.faqs.map((faq, index) => (
                  <div
                    key={faq.question}
                    onClick={() => handleFaqToggle(index)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        handleFaqToggle(index);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-expanded={openFaqIndex === index}
                    className="group rounded-xl border border-gray-800/70 bg-gray-900/60 p-4 cursor-pointer transition duration-300 ease-out hover:-translate-y-0.5 hover:border-blue-500/50 hover:bg-gray-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                  >
                    <div className="flex w-full items-center justify-between text-left">
                      <h3 className="text-base font-semibold text-gray-100 transition-colors duration-300 group-hover:text-blue-100">
                        {faq.question}
                      </h3>
                      <div
                        className={`ml-4 text-sm text-blue-300 transition-transform duration-300 ${
                          openFaqIndex === index ? 'rotate-45' : 'rotate-0'
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </div>
                    </div>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                        openFaqIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-3 text-sm text-gray-300">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
