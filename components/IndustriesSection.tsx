import FadeIn from "./FadeIn";

const sectors = [
  {
    number: "01",
    name: "Automotive & Mobility",
    desc: "Exhibition pavilions, car launch reveals, immersive drive pop-ups, and targeted performance ad funnels.",
  },
  {
    number: "02",
    name: "Consumer Electronics & Tech",
    desc: "Experiential launch stages, retail experience zones, YouTube product commercials, and influencer unboxings.",
  },
  {
    number: "03",
    name: "Corporate MICE & Enterprise",
    desc: "Annual leadership conventions, international partner retreats, keynotes, and executive branding.",
  },
  {
    number: "04",
    name: "Luxury & Hospitality",
    desc: "Pop-up brand activations, VIP gala evenings, social media reel management, and high-fashion PR events.",
  },
  {
    number: "05",
    name: "Real Estate & Infrastructure",
    desc: "Experience centers, architectural model scale displays, performance ad lead generation, and 3D CGI walkthroughs.",
  },
  {
    number: "06",
    name: "BFSI & Fintech",
    desc: "Executive investor summits, compliance-ready brand stalls, search engine marketing, and custom web portals.",
  },
];

const clientBrands = [
  "Audi", "Samsung", "BMW", "OnePlus", "Red Bull", "Sony", "Marriott", "Nike"
];

export default function IndustriesSection() {
  return (
    <section className="bg-[#f5f3ef] px-6 sm:px-8 lg:px-12 py-16 sm:py-20 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl space-y-16">
        {/* Industries Header & Grid */}
        <div>
          <FadeIn duration={0.5}>
            <div className="flex flex-col justify-between gap-6 border-b border-neutral-200 pb-6 lg:flex-row lg:items-end">
              <div>
                <p className="mb-2 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                  Industry Specialization
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a0a0a] font-display">
                  Sectors we serve.
                </h2>
              </div>
              <p className="max-w-md text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Deep expertise across key verticals requiring high-grade spatial design and digital media precision.
              </p>
            </div>
          </FadeIn>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, idx) => (
              <FadeIn key={sector.number} delay={idx * 0.1} duration={0.5}>
                <div className="bg-white rounded-xl p-6 border border-neutral-200/80 space-y-3 shadow-sm hover:border-neutral-400 transition-all h-full">
                  <span className="font-mono text-xs text-[#e24a29] font-bold">
                    SECTOR {sector.number}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-[#0a0a0a] font-display">
                    {sector.name}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {sector.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Client Brands Showcase */}
        <div className="space-y-6 pt-4 border-t border-neutral-200">
          <FadeIn duration={0.5}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500">
                TRUSTED BY LEADING BRAND PARTNERS
              </p>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                EXPERIENTIAL & DIGITAL CLIENTELE
              </span>
            </div>
          </FadeIn>

          <FadeIn duration={0.6} delay={0.2}>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {clientBrands.map((brand) => (
                <div
                  key={brand}
                  className="rounded-lg bg-white border border-neutral-200/80 py-4 px-3 text-center shadow-sm hover:border-neutral-400 transition-colors"
                >
                  <span className="font-mono text-xs font-bold tracking-widest text-[#0a0a0a]">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
