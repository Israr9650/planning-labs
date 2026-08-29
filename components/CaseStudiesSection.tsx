import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import FadeIn from "./FadeIn";

export default function CaseStudiesSection() {
  return (
    <section className="bg-[#0a0a0a] px-6 sm:px-8 lg:px-12 py-16 sm:py-20 text-[#f5f3ef] border-b border-neutral-800">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <FadeIn duration={0.5}>
          <div className="flex flex-col justify-between gap-6 pb-6 border-b border-neutral-800 lg:flex-row lg:items-end">
            <div>
              <p className="mb-2 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                Deep-Dive Platform
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
                Case studies.
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-[#e24a29] transition-colors"
            >
              <span>View All Case Studies</span>
              <span>→</span>
            </Link>
          </div>
        </FadeIn>

        {/* Case Studies Grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {caseStudies.map((cs, idx) => (
            <FadeIn key={cs.id} delay={idx * 0.12} duration={0.5}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group block bg-[#141414] rounded-xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 shadow-sm flex flex-col justify-between h-full"
              >
                <div>
                  <div className="editorial-image-container aspect-[16/10] bg-black relative">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute top-3.5 left-3.5 bg-[#0a0a0a]/85 backdrop-blur-md text-white px-3 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border border-white/15">
                      {cs.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#e24a29]">
                      <span>{cs.industry}</span>
                      <span className="text-neutral-400">{cs.client}</span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#e24a29] transition-colors font-display">
                      {cs.title}
                    </h3>

                    <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3">
                      {cs.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white">
                    <span>Read Case Study</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
