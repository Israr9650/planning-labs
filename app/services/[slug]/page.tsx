import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Related category projects
  const categoryFilter =
    service.category === "Experiential Marketing" ? "Experiential" : "Digital";
  const relatedProjects = projects
    .filter((p) => p.category === categoryFilter)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-[#f6f4f0] text-[#0d0d0d]">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#0d0d0d] text-[#f6f4f0] pt-36 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24 px-6 sm:px-8 lg:px-12 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-700 px-3.5 py-1 text-[11px] font-mono uppercase tracking-widest text-[#e24a29]">
            <span>{service.category}</span>
          </div>

          <h1 className="max-w-5xl text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.92] tracking-tight text-white font-display">
            {service.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-neutral-300 leading-relaxed">
            {service.shortDescription}
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#e24a29] px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-[#0d0d0d] shadow-sm"
            >
              <span>Enquire About {service.title}</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <section className="px-6 sm:px-8 lg:px-12 -mt-10 sm:-mt-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl aspect-[21/9] bg-black shadow-xl border border-neutral-800">
          <img
            src={service.heroImage}
            alt={service.title}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Overview & Deliverables */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Overview */}
            <div className="lg:col-span-6 space-y-4">
              <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                Service Breakdown
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0d0d0d] font-display">
                Strategic overview.
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {service.overview}
              </p>
            </div>

            {/* Deliverables checklist */}
            <div className="lg:col-span-6 space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm">
              <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                Deliverables
              </p>
              <h3 className="text-xl font-bold tracking-tight text-[#0d0d0d] font-display">
                Capabilities Matrix
              </h3>
              <ul className="space-y-2 pt-2">
                {service.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-3 text-xs font-semibold uppercase tracking-wider text-neutral-800 py-2.5 border-b border-neutral-100"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#e24a29] mt-1 shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="bg-[#0d0d0d] text-[#f6f4f0] px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 pb-4 border-b border-neutral-800">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
              Execution Framework
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Delivery process.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="bg-[#161616] p-6 rounded-2xl border border-neutral-800 space-y-3"
              >
                <span className="font-mono text-xs text-[#e24a29] font-bold">
                  STEP {step.step}
                </span>
                <h3 className="text-lg font-bold text-white font-display">{step.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 border-b border-neutral-200">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end justify-between gap-6 pb-8 border-b border-neutral-200">
              <div>
                <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                  Selected Work
                </p>
                <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-[#0d0d0d] font-display">
                  Related portfolio cases.
                </h2>
              </div>
              <Link
                href="/work"
                className="text-xs font-semibold uppercase tracking-wider text-[#0d0d0d] underline underline-offset-4 hover:text-[#e24a29]"
              >
                View All Work →
              </Link>
            </div>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {relatedProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/work/${project.slug}`}
                  className="group block space-y-3"
                >
                  <div className="editorial-image-container aspect-[4/3] rounded-2xl bg-black overflow-hidden shadow-sm">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#e24a29] font-semibold">
                      {project.category} · {project.service}
                    </span>
                    <h3 className="mt-1 text-xl font-bold tracking-tight text-[#0d0d0d] group-hover:text-[#e24a29] transition-colors font-display">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
    </main>
  );
}
