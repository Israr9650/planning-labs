"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] flex flex-col justify-between overflow-hidden bg-[#0a0a0a] text-[#f5f3ef] pt-32 pb-10 sm:pt-36 sm:pb-12 lg:pt-40 lg:pb-16 px-6 sm:px-8 lg:px-12 border-b border-neutral-800">
      {/* Background image overlay */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1.03, opacity: 0.35 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2400&q=90')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/40" />

      {/* Hero Body Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl pt-4 sm:pt-8">
        <div className="max-w-4xl space-y-6">
          {/* Label Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-300"
          >
            <span className="h-2 w-2 rounded-full bg-[#e24a29] animate-pulse" />
            <span>Experiential + Digital Marketing Agency · Mumbai</span>
          </motion.div>

          {/* High Impact Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.94] tracking-tight text-white font-display"
          >
            Ideas that
            <br />
            <span className="italic font-serif font-normal text-neutral-300">move</span> people.
          </motion.h1>

          {/* Lead Paragraph & CTAs Grid */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 grid gap-6 lg:grid-cols-12 lg:items-end"
          >
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed lg:col-span-7">
              We connect brands with audiences in the real world through spatial booth engineering and live event production, amplified everywhere with performance digital marketing.
            </p>

            <div className="lg:col-span-5 lg:flex lg:justify-end items-center gap-4">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#e24a29] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-[#0a0a0a] shadow-sm"
              >
                <span>Explore Work</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors border-b border-neutral-700 pb-1"
              >
                <span>Start a Project Brief</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Metadata Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 mx-auto w-full max-w-7xl pt-10 sm:pt-14"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-neutral-800 pt-5 text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-400">
          <div className="flex items-center gap-6">
            <span>01 / Spatial Experiences</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">02 / Performance Digital</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Scroll Down</span>
            <span className="animate-bounce text-[#e24a29]">↓</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
