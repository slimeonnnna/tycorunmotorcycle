
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Handle scroll for header visibility
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDown = currentScrollY > lastScrollY;

      // Keep header visible at the very top (buffer of 10px)
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (scrollDown) {
        setIsVisible(false);
        // Also close mobile menu if scrolling down
        setMobileMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }) => {
      if (!mobileMenuOpen || !mobileMenuRef.current || !triggerRef.current) return;
      if (
        !mobileMenuRef.current.contains(target as Node) &&
        !triggerRef.current.contains(target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (!mobileMenuOpen || keyCode !== 27) return;
      setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-2 z-30 w-full md:top-5 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-24"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex gap-6 text-sm font-medium text-gray-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="hover:text-blue-500 transition-colors"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/solution"
                  className="hover:text-blue-500 transition-colors"
                >
                  Solution
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-blue-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="hidden flex-1 items-center justify-end gap-3 md:flex">
            <li>
              <Link
                href="/contact"
                className="btn-sm bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              ref={triggerRef}
              className={`group inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none ${
                mobileMenuOpen ? "bg-gray-800 text-white" : ""
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="4"
                  width="24"
                  height="2"
                  rx="1"
                  className={`origin-center transform transition-all duration-200 ${
                    mobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
                  }`}
                />
                <rect
                  y="11"
                  width="24"
                  height="2"
                  rx="1"
                  className={`transition-all duration-200 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <rect
                  y="18"
                  width="24"
                  height="2"
                  rx="1"
                  className={`origin-center transform transition-all duration-200 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""
                  }`}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          ref={mobileMenuRef}
          className={`absolute left-0 top-full mt-2 w-full origin-top transform overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 shadow-xl transition-all duration-200 ease-in-out md:hidden ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100 visible max-h-96"
              : "-translate-y-2 opacity-0 invisible max-h-0"
          }`}
        >
          <div className="px-4 py-4 space-y-4">
            <nav>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
                    className="block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solution"
                    className="block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Solution
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="border-t border-gray-800 pt-4">
              <Link
                href="/contact"
                className="btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
