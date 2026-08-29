"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d0d]/90 backdrop-blur-md py-4 border-b border-white/10"
          : "bg-gradient-to-b from-[#0d0d0d]/80 via-[#0d0d0d]/20 to-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Brand Mark */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white uppercase"
        >
          <span className="h-2 w-2 rounded-full bg-[#e24a29] transition-transform duration-300 group-hover:scale-125" />
          <span className="font-mono text-base tracking-tight">PLANNING LABS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 py-1 ${
                  isActive
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#e24a29]" />
                )}
              </Link>
            );
          })}

          <Link
            href="/search"
            className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400 hover:text-white transition-colors pl-2"
            aria-label="Search content"
          >
            <svg
              className="h-3.5 w-3.5 text-[#e24a29]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 0 0114 0z"
              />
            </svg>
            <span>Search</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#0d0d0d] transition-all duration-300 hover:bg-[#e24a29] hover:text-white shadow-sm"
          >
            <span>Let&apos;s Talk</span>
            <span className="text-xs">↗</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/search"
            className="p-2 text-neutral-300 hover:text-white"
            aria-label="Search"
          >
            <svg
              className="h-5 w-5 text-[#e24a29]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 0 0114 0z"
              />
            </svg>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 items-center px-4 rounded-full bg-white/10 text-white text-[11px] font-mono border border-white/15"
            aria-label="Toggle menu"
          >
            {menuOpen ? "CLOSE ✕" : "MENU ☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[64px] mx-4 rounded-2xl bg-[#0d0d0d] border border-neutral-800 p-6 text-white md:hidden shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navItems.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between border-b border-neutral-800 pb-3 text-lg font-semibold tracking-tight"
                >
                  <span className={isActive ? "text-[#e24a29]" : "text-neutral-200"}>
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-neutral-500">0{idx + 1}</span>
                </Link>
              );
            })}

            <div className="pt-2 flex flex-col gap-3">
              <Link
                href="/search"
                className="text-xs uppercase tracking-widest text-neutral-400 flex items-center justify-between py-2"
              >
                <span>Search Content Index</span>
                <span>→</span>
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-[#e24a29] px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white"
              >
                Start a Brief →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
