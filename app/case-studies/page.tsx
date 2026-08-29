import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";
import { caseStudies } from "@/data/caseStudies";

export const metadata = {
  title: "Case Studies | Planning Labs",
  description:
    "Explore in-depth case study breakdowns of physical experiential activations, digital performance campaigns, and integrated brand rollouts.",
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#f6f4f0] text-[#0d0d0d]">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-[#0d0d0d] text-[#f6f4f0] pt-36 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24 px-6 sm:px-8 lg:px-12 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
            Case Archive Platform
          </p>

          <div className="grid gap-8 lg:grid-cols-12">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.92] tracking-tight text-white lg:col-span-8 font-display">
              Deep dive
              <br />
              <span className="italic font-serif font-normal text-neutral-300">campaign stories.</span>
            </h1>

            <p className="self-end text-base text-neutral-300 leading-relaxed lg:col-span-4 lg:pb-2">
              Detailed technical and strategic breakdowns of our experiential activations and digital performance frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Listing */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <Link
                key={cs.id}
                href={`/case-studies/${cs.slug}`}
                className="group block rounded-2xl border border-neutral-200/80 bg-white overflow-hidden shadow-sm hover:border-neutral-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="editorial-image-container aspect-[16/10] bg-black relative">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute top-3.5 left-3.5 bg-[#0d0d0d]/85 backdrop-blur-md text-white px-3 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold border border-white/15">
                      {cs.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#e24a29] font-bold">
                      <span>{cs.industry}</span>
                      <span className="text-neutral-400">{cs.client}</span>
                    </div>

                    <h2 className="text-xl font-bold tracking-tight text-[#0d0d0d] group-hover:text-[#e24a29] transition-colors font-display">
                      {cs.title}
                    </h2>

                    <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                      {cs.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#0d0d0d] group-hover:text-[#e24a29]">
                    <span>Read Full Case Breakdown</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
