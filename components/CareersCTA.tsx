import Link from "next/link";
import FadeIn from "./FadeIn";

export default function CareersCTA() {
  return (
    <section className="bg-[#f5f3ef] px-6 sm:px-8 lg:px-12 py-16 sm:py-20 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl">
        <FadeIn duration={0.6}>
          <div className="rounded-2xl bg-[#0a0a0a] text-white p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-xl relative overflow-hidden">
            <div className="space-y-3 max-w-2xl">
              <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                Join Planning Labs
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-tight">
                We&apos;re building experiences that move people.
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Looking for spatial producers, digital performance strategists, 3D exhibition architects, and full stack web developers.
              </p>
            </div>

            <Link
              href="/careers"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#e24a29] px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-[#0a0a0a] shrink-0 shadow-sm"
            >
              <span>Explore Open Positions</span>
              <span>→</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
