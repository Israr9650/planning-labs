import Link from "next/link";
import FadeIn from "./FadeIn";

const Intro = () => {
  return (
    <section
      id="about"
      className="bg-[#f5f3ef] px-6 sm:px-8 lg:px-12 py-16 sm:py-20 border-b border-neutral-200"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Label Column */}
          <div className="lg:col-span-3 space-y-3">
            <FadeIn direction="right" duration={0.4}>
              <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                Agency Manifesto
              </p>
              <div className="h-0.5 w-6 bg-[#e24a29] mt-2" />
            </FadeIn>
          </div>

          {/* Statement Column */}
          <div className="lg:col-span-9 space-y-6">
            <FadeIn duration={0.6} delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#0a0a0a] font-display">
                We turn ideas into <span className="font-serif italic font-normal text-neutral-700">experiences</span>, campaigns, and conversations that people remember.
              </h2>
            </FadeIn>

            <FadeIn duration={0.6} delay={0.25}>
              <div className="grid gap-6 sm:grid-cols-2 pt-2 border-t border-neutral-200">
                <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
                  Planning Labs brings spatial event engineering and digital performance marketing together under one roof. We design environments that command attention on-site, and run campaigns that scale reach online.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
                  Based in Mumbai, our multidisciplinary team collaborates with forward-thinking brands across trade exhibitions, product launch summits, brand pop-ups, and full-funnel digital acquisitions.
                </p>
              </div>
            </FadeIn>

            <FadeIn duration={0.4} delay={0.35}>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0a0a0a] hover:text-[#e24a29] transition-colors"
              >
                <span>Read Full Agency Overview</span>
                <span className="text-sm transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
