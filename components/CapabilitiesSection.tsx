import Link from "next/link";
import { services } from "@/data/services";

export default function CapabilitiesSection() {
  const experientialServices = services.filter(
    (s) => s.category === "Experiential Marketing"
  );
  const digitalServices = services.filter(
    (s) => s.category === "Digital Marketing"
  );

  return (
    <section className="bg-[#f5f3ef] px-6 sm:px-8 lg:px-12 py-16 sm:py-20 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 pb-8 lg:flex-row lg:items-end border-b border-neutral-200">
          <div>
            <p className="mb-2 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
              Agency Deliverables Matrix
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a0a0a] font-display">
              End-to-end capabilities.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:text-[#e24a29] transition-colors border-b border-neutral-300 pb-1"
          >
            <span>View Full 16-Service Catalog</span>
            <span>→</span>
          </Link>
        </div>

        {/* 2-column capabilities layout */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Experiential column */}
          <div className="space-y-5 bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
              <span className="font-mono text-xs font-bold tracking-widest text-[#e24a29]">
                CAPABILITIES / 01
              </span>
              <span className="rounded-full bg-[#0a0a0a] text-white px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider">
                Experiential
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-2xl font-bold tracking-tight text-[#0a0a0a] font-display">
                Experiential Marketing
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Transforming physical environments into immersive brand touchpoints through architectural trade booths, executive summits, and live activations.
              </p>
            </div>

            <ul className="space-y-1.5 pt-2 border-t border-neutral-100">
              {experientialServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center justify-between py-2 text-xs sm:text-sm hover:text-[#e24a29] transition-colors border-b border-neutral-100"
                  >
                    <span className="font-medium text-neutral-800 group-hover:text-[#e24a29]">
                      {service.title}
                    </span>
                    <span className="text-xs text-neutral-400 group-hover:translate-x-1 transition-transform">
                      ↗
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Digital column */}
          <div className="space-y-5 bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
              <span className="font-mono text-xs font-bold tracking-widest text-[#e24a29]">
                CAPABILITIES / 02
              </span>
              <span className="rounded-full bg-[#0a0a0a] text-white px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider">
                Digital
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-2xl font-bold tracking-tight text-[#0a0a0a] font-display">
                Digital Marketing
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Content creation, performance ad acquisition, SEO authority, and custom Next.js web applications built for growth and conversion.
              </p>
            </div>

            <ul className="space-y-1.5 pt-2 border-t border-neutral-100">
              {digitalServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center justify-between py-2 text-xs sm:text-sm hover:text-[#e24a29] transition-colors border-b border-neutral-100"
                  >
                    <span className="font-medium text-neutral-800 group-hover:text-[#e24a29]">
                      {service.title}
                    </span>
                    <span className="text-xs text-neutral-400 group-hover:translate-x-1 transition-transform">
                      ↗
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
