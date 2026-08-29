import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
  title: "About Planning Labs | Experiential & Digital Marketing Agency",
  description:
    "Planning Labs brings physical spatial design and digital performance marketing together to create brand experiences that move people.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f6f4f0] text-[#0d0d0d]">
      <Navbar />

      {/* Hero Header */}
      <section className="relative bg-[#0d0d0d] text-[#f6f4f0] pt-36 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24 px-6 sm:px-8 lg:px-12 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
            Agency Overview
          </p>
          <h1 className="max-w-5xl text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.92] tracking-tight text-white font-display">
            Where physical spaces meet <span className="italic font-serif font-normal text-neutral-300">digital precision.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base sm:text-lg text-neutral-300 leading-relaxed">
            Planning Labs operates across two primary business verticals: Experiential Marketing and Digital Marketing. We turn ideas into real-world installations, live conventions, and digital acquisition campaigns that build long-term audience engagement.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4 space-y-2">
              <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                Core Philosophy
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0d0d0d] font-display">
                Two verticals. Single strategic focus.
              </h2>
            </div>

            <div className="space-y-6 lg:col-span-8 text-sm sm:text-base text-neutral-600 leading-relaxed">
              <p>
                Traditional marketing agencies often force brands to choose between physical event producers and digital performance ad agencies. Planning Labs was established in Mumbai to eliminate that trade-off.
              </p>
              <p>
                We believe that every physical event—whether an architectural booth at a trade expo, an executive conference, or a pop-up brand activation—is a content engine. When paired with real-time digital marketing, short-form reel distribution, and targeted ad funnels, physical activations reach millions beyond venue walls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Vertical Division */}
      <section className="bg-[#0d0d0d] text-[#f6f4f0] px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 border-b border-neutral-800 pb-8">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
              Agency Divisions
            </p>
            <h2 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
              Dual vertical synergy.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Experiential */}
            <div className="space-y-6 bg-[#161616] p-6 sm:p-8 rounded-2xl border border-neutral-800">
              <div className="inline-block rounded-full bg-[#e24a29] text-white px-3.5 py-0.5 text-[11px] font-mono uppercase tracking-wider font-semibold">
                VERTICAL 01
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
                Experiential Marketing
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Physical architecture, spatial design, trade booths, and live event production engineered for direct human connection.
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-300 pt-4 border-t border-neutral-800">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e24a29]" /> Corporate Conferences & Summits</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e24a29]" /> Exhibition Stalls & Architectural Pavilions</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e24a29]" /> High-Footfall Brand Activations & Pop-ups</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e24a29]" /> MICE & International Executive Retreats</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e24a29]" /> Product Launch Reveal Mechanics</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e24a29]" /> Outdoor Advertising & 3D Media Rigging</li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/services#experiential"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#e24a29] transition-colors"
                >
                  <span>Explore Experiential Services</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Digital */}
            <div className="space-y-6 bg-[#161616] p-6 sm:p-8 rounded-2xl border border-neutral-800">
              <div className="inline-block rounded-full bg-[#e24a29] text-white px-3.5 py-0.5 text-[11px] font-mono uppercase tracking-wider font-semibold">
                VERTICAL 02
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
                Digital Marketing
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Performance ads, short-form reel storytelling, SEO authority, and custom Next.js web applications built for growth.
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-300 pt-4 border-t border-neutral-800">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e24a29]" /> Social Media Strategy & Reel Production</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e24a29]" /> Paid Performance Ads (Meta, Google, LinkedIn)</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e24a29]" /> Technical SEO & Organic Search Authority</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e24a29]" /> Creator & Influencer Networks</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e24a29]" /> Modern Web Application Development</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#e24a29]" /> 3D CGI & Motion Graphics</li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/services#digital"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#e24a29] transition-colors"
                >
                  <span>Explore Digital Services</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Process */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29] mb-2">
            Workflow Framework
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-12 text-[#0d0d0d] font-display">
            Delivery process.
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 space-y-3 shadow-sm">
              <span className="font-mono text-xs font-bold text-[#e24a29]">PHASE 01</span>
              <h3 className="text-lg font-bold text-[#0d0d0d] font-display">Strategic Alignment</h3>
              <p className="text-xs leading-relaxed text-neutral-600">
                Deep dive into brand targets, spatial constraints, audience demographics, and key success metrics.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 space-y-3 shadow-sm">
              <span className="font-mono text-xs font-bold text-[#e24a29]">PHASE 02</span>
              <h3 className="text-lg font-bold text-[#0d0d0d] font-display">3D Concept & Render</h3>
              <p className="text-xs leading-relaxed text-neutral-600">
                Spatial architectural blueprints, photorealistic 3D stall renders, and creative media storyboards.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 space-y-3 shadow-sm">
              <span className="font-mono text-xs font-bold text-[#e24a29]">PHASE 03</span>
              <h3 className="text-lg font-bold text-[#0d0d0d] font-display">Fabrication & Prep</h3>
              <p className="text-xs leading-relaxed text-neutral-600">
                Off-site carpentry set building, AV rigging, performance ad creative assets, and technical walkthroughs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 space-y-3 shadow-sm">
              <span className="font-mono text-xs font-bold text-[#e24a29]">PHASE 04</span>
              <h3 className="text-lg font-bold text-[#0d0d0d] font-display">Live Show & Scaling</h3>
              <p className="text-xs leading-relaxed text-neutral-600">
                On-site show direction, real-time event broadcast, performance ad scaling, and analytics reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
