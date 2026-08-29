import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";
import { services } from "@/data/services";

export const metadata = {
  title: "Services & Capabilities | Planning Labs",
  description:
    "Explore our 16 core agency capabilities across Experiential Marketing (Events, Exhibitions, Activations) and Digital Marketing (Performance Ads, Social, SEO, Web Dev).",
};

export default function ServicesPage() {
  const experiential = services.filter(
    (s) => s.category === "Experiential Marketing"
  );
  const digital = services.filter(
    (s) => s.category === "Digital Marketing"
  );

  return (
    <main className="min-h-screen bg-[#f6f4f0] text-[#0d0d0d]">
      <Navbar />

      {/* Header */}
      <section className="bg-[#0d0d0d] text-[#f6f4f0] pt-36 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24 px-6 sm:px-8 lg:px-12 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
            Agency Capabilities Catalog
          </p>
          <h1 className="max-w-5xl text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.92] tracking-tight text-white font-display">
            Experiential & <span className="italic font-serif font-normal text-neutral-300">Digital Services.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-neutral-300 leading-relaxed">
            16 specialized marketing disciplines working in unison to build physical presence and digital performance for modern brands.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wider">
            <a
              href="#experiential"
              className="rounded-full bg-[#e24a29] text-white px-6 py-3 hover:bg-white hover:text-[#0d0d0d] transition-all shadow-sm"
            >
              Experiential Services (8) ↓
            </a>
            <a
              href="#digital"
              className="rounded-full border border-neutral-700 text-white px-6 py-3 hover:bg-white/10 transition-colors"
            >
              Digital Services (8) ↓
            </a>
          </div>
        </div>
      </section>

      {/* Experiential Section */}
      <section id="experiential" className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 scroll-mt-20 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 pb-6 border-b border-neutral-200 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-[#e24a29]">
                VERTICAL 01
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-[#0d0d0d] font-display">
                Experiential Marketing
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Bringing brands to life through live corporate events, spatial exhibition architecture, trade booths, and high-footfall activations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {experiential.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-neutral-200/80 bg-white p-6 flex flex-col justify-between hover:border-neutral-400 hover:shadow-md transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="editorial-image-container aspect-[16/10] rounded-xl bg-black overflow-hidden">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-[#0d0d0d] group-hover:text-[#e24a29] transition-colors font-display">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 text-xs font-semibold uppercase tracking-wider text-black flex items-center justify-between border-t border-neutral-100 mt-4 group-hover:text-[#e24a29]">
                  <span>View Deliverables</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Section */}
      <section id="digital" className="bg-[#0d0d0d] text-[#f6f4f0] px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 scroll-mt-20 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 pb-6 border-b border-neutral-800 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-[#e24a29]">
                VERTICAL 02
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
                Digital Marketing
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Performance ad acquisition, social media, search authority, content production, and custom Next.js web applications.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {digital.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-neutral-800 bg-[#161616] p-6 flex flex-col justify-between hover:border-neutral-700 transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="editorial-image-container aspect-[16/10] rounded-xl bg-black overflow-hidden">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-[#e24a29] transition-colors font-display">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 text-xs font-semibold uppercase tracking-wider text-white flex items-center justify-between border-t border-neutral-800 mt-4 group-hover:text-[#e24a29]">
                  <span>View Deliverables</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
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
