import FadeIn from "./FadeIn";

const stats = [
  { value: "150+", label: "Spatial Events & Booths Delivered", sub: "Mumbai HQ & Pan-India" },
  { value: "85+", label: "Digital Performance Campaigns", sub: "Meta, Google, LinkedIn" },
  { value: "98%", label: "Client Retention & Partnership", sub: "Long-term Brand Trust" },
  { value: "12+", label: "Industry Recognitions & Excellence", sub: "Experiential & Digital" },
];

const pillars = [
  {
    number: "01",
    title: "Physical + Digital Synergy",
    description:
      "Every physical booth, expo pavilion, and live summit is designed as a digital content engine to scale reach beyond venue walls.",
  },
  {
    number: "02",
    title: "Spatial Fabrication Rigor",
    description:
      "In-house 3D architectural rendering, off-site set carpentry, AV production, and zero-delay on-site event execution.",
  },
  {
    number: "03",
    title: "Performance Ads Acquisition",
    description:
      "Full-funnel media buying, short-form reel video production, and conversion rate optimization engineered for revenue.",
  },
  {
    number: "04",
    title: "End-to-End Delivery Ownership",
    description:
      "From initial 3D design concept and pitch deck to venue teardown and post-campaign analytics reporting.",
  },
];

export default function CredibilitySection() {
  return (
    <section className="bg-[#0a0a0a] px-6 sm:px-8 lg:px-12 py-16 sm:py-20 text-[#f5f3ef] border-b border-neutral-800">
      <div className="mx-auto max-w-7xl space-y-16">
        {/* Header & Stats Grid */}
        <div className="space-y-10">
          <FadeIn duration={0.5}>
            <div className="flex flex-col justify-between gap-6 border-b border-neutral-800 pb-6 lg:flex-row lg:items-end">
              <div>
                <p className="mb-2 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                  Proven Track Record
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
                  Planning Labs by numbers.
                </h2>
              </div>
              <p className="max-w-md text-xs sm:text-sm text-neutral-400 leading-relaxed">
                A track record built on spatial craftsmanship, creative ad strategy, and client trust.
              </p>
            </div>
          </FadeIn>

          {/* Stats Bar */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <FadeIn key={stat.label} delay={idx * 0.1} duration={0.5}>
                <div className="bg-[#141414] rounded-xl p-6 border border-neutral-800 space-y-2">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white">
                    {stat.label}
                  </p>
                  <p className="text-[11px] font-mono text-neutral-500">
                    {stat.sub}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="space-y-8">
          <FadeIn duration={0.5}>
            <div className="border-b border-neutral-800 pb-4">
              <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                Core Operational Pillars
              </p>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
                The agency standard.
              </h3>
            </div>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, idx) => (
              <FadeIn key={pillar.number} delay={idx * 0.12} duration={0.5}>
                <div className="bg-[#141414] rounded-xl p-6 border border-neutral-800 space-y-3 h-full">
                  <span className="font-mono text-xs text-[#e24a29] font-bold">
                    PILLAR {pillar.number}
                  </span>
                  <h4 className="text-lg font-bold text-white font-display">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
