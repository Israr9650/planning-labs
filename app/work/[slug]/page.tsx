import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter(
      (item) =>
        item.category === project.category && item.id !== project.id
    )
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-[#f6f4f0] text-[#0d0d0d]">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative min-h-[70vh] overflow-hidden bg-black text-white pt-24">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-6 sm:px-8 lg:px-12 pb-16 pt-28">
          <div className="mb-4 flex flex-wrap gap-2 text-xs font-mono uppercase tracking-widest text-white/80">
            <span className="rounded-full bg-[#e24a29] px-3.5 py-1 text-white font-semibold">
              {project.category}
            </span>
            <span className="rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-white border border-white/20">
              {project.service}
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.92] tracking-tight text-white font-display">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Metadata Bar */}
      <section className="border-b border-neutral-200 px-6 sm:px-8 lg:px-12 py-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#e24a29]">
                CLIENT / BRAND PARTNER
              </p>
              <p className="mt-1 text-lg font-bold text-[#0d0d0d] font-display">{project.client}</p>
            </div>

            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#e24a29]">
                VERTICAL CATEGORY
              </p>
              <p className="mt-1 text-lg font-bold text-[#0d0d0d] font-display">{project.category}</p>
            </div>

            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#e24a29]">
                SERVICE SPECIALTY
              </p>
              <p className="mt-1 text-lg font-bold text-[#0d0d0d] font-display">{project.service}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Overview & Breakdown */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4 space-y-2">
              <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                Project Narrative
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0d0d0d] font-display">
                Background & Strategy
              </h2>
            </div>

            <div className="space-y-8 lg:col-span-8">
              {project.overview && (
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#0d0d0d] font-display">Overview</h3>
                  <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
                    {project.overview}
                  </p>
                </div>
              )}

              {project.challenge && (
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#0d0d0d] font-display">The Challenge</h3>
                  <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.approach && (
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#0d0d0d] font-display">Strategic Approach</h3>
                  <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
                    {project.approach}
                  </p>
                </div>
              )}

              {project.execution && (
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#0d0d0d] font-display">Execution & Production</h3>
                  <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
                    {project.execution}
                  </p>
                </div>
              )}

              {project.result && (
                <div className="rounded-2xl bg-white border border-neutral-200/80 p-6 sm:p-8 shadow-sm space-y-2">
                  <span className="font-mono text-xs text-[#e24a29] font-bold uppercase tracking-wider">
                    OUTCOME EVALUATION
                  </span>
                  <h3 className="text-lg font-bold text-[#0d0d0d] font-display">Project Result & Impact</h3>
                  <p className="text-sm sm:text-base leading-relaxed text-neutral-700">
                    {project.result}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="bg-[#0d0d0d] text-[#f6f4f0] px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 border-b border-neutral-800">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 pb-4 border-b border-neutral-800">
              <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                Visual Documentation
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
                Behind the scenes.
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {project.gallery.map((imgUrl, i) => (
                <div
                  key={i}
                  className="editorial-image-container aspect-[4/3] rounded-2xl bg-white/5 overflow-hidden border border-neutral-800"
                >
                  <img
                    src={imgUrl}
                    alt={`${project.title} gallery frame ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 border-b border-neutral-200">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-end justify-between gap-6 pb-4 border-b border-neutral-200">
              <div>
                <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                  More Case Archives
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#0d0d0d] font-display">
                  Related projects.
                </h2>
              </div>
              <Link
                href="/work"
                className="text-xs font-semibold uppercase tracking-wider text-[#0d0d0d] underline underline-offset-4 hover:text-[#e24a29]"
              >
                View All Work →
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {relatedProjects.map((item) => (
                <Link
                  key={item.id}
                  href={`/work/${item.slug}`}
                  className="group block space-y-3"
                >
                  <div className="editorial-image-container aspect-[4/3] rounded-2xl bg-black overflow-hidden shadow-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#e24a29] font-semibold">
                      {item.category}
                    </span>
                    <h3 className="mt-1 text-xl font-bold tracking-tight text-[#0d0d0d] group-hover:text-[#e24a29] transition-colors font-display">
                      {item.title}
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