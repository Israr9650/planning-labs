import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";
import { caseStudies } from "@/data/caseStudies";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;
  const cs = caseStudies.find((item) => item.slug === slug);

  if (!cs) {
    notFound();
  }

  const related = caseStudies.filter((item) => item.id !== cs.id);

  return (
    <main className="min-h-screen bg-[#f6f4f0] text-[#0d0d0d]">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0d0d0d] text-[#f6f4f0] pt-36 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24 px-6 sm:px-8 lg:px-12 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-300">
            <span className="rounded-full bg-[#e24a29] px-3.5 py-1 text-white font-semibold">
              {cs.category}
            </span>
            <span>·</span>
            <span>{cs.industry}</span>
          </div>

          <h1 className="max-w-5xl text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.92] tracking-tight text-white font-display">
            {cs.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-neutral-300 leading-relaxed">
            {cs.summary}
          </p>
        </div>
      </section>

      {/* Main Banner Image */}
      <section className="px-6 sm:px-8 lg:px-12 -mt-10 sm:-mt-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl aspect-[21/9] bg-black shadow-xl border border-neutral-800">
          <img
            src={cs.image}
            alt={cs.title}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Metadata Bar */}
      <section className="border-b border-neutral-200 px-6 sm:px-8 lg:px-12 py-8 bg-white mt-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#e24a29]">
                CLIENT / BRAND PARTNER
              </p>
              <p className="mt-1 text-lg font-bold text-[#0d0d0d] font-display">{cs.client}</p>
            </div>

            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#e24a29]">
                INDUSTRY SECTOR
              </p>
              <p className="mt-1 text-lg font-bold text-[#0d0d0d] font-display">{cs.industry}</p>
            </div>

            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#e24a29]">
                CAMPAIGN FORMAT
              </p>
              <p className="mt-1 text-lg font-bold text-[#0d0d0d] font-display">{cs.category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Breakdown */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4 space-y-2">
              <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                Strategic Breakdown
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0d0d0d] font-display">
                Campaign Architecture
              </h2>
            </div>

            <div className="space-y-8 lg:col-span-8">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#0d0d0d] font-display">Campaign Objective</h3>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
                  {cs.objective}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#0d0d0d] font-display">The Core Challenge</h3>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
                  {cs.challenge}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#0d0d0d] font-display">Strategic Approach</h3>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
                  {cs.approach}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#0d0d0d] font-display">Execution & Operations</h3>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
                  {cs.execution}
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-neutral-200/80 p-6 sm:p-8 shadow-sm space-y-2">
                <span className="font-mono text-xs text-[#e24a29] font-bold uppercase tracking-wider">
                  MEASURED IMPACT
                </span>
                <h3 className="text-lg font-bold text-[#0d0d0d] font-display">Outcomes & Evaluation</h3>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-700">
                  {cs.result}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {cs.gallery && cs.gallery.length > 0 && (
        <section className="bg-[#0d0d0d] text-[#f6f4f0] px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 border-b border-neutral-800">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 pb-4 border-b border-neutral-800">
              <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                Behind the Work
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
                Execution Gallery
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {cs.gallery.map((imgUrl, i) => (
                <div
                  key={i}
                  className="editorial-image-container aspect-[4/3] rounded-2xl bg-white/5 overflow-hidden border border-neutral-800"
                >
                  <img
                    src={imgUrl}
                    alt={`${cs.title} gallery frame ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      {related.length > 0 && (
        <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 border-b border-neutral-200">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-end justify-between gap-6 pb-4 border-b border-neutral-200">
              <div>
                <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                  More Case Archives
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#0d0d0d] font-display">
                  Related story archives.
                </h2>
              </div>
              <Link
                href="/case-studies"
                className="text-xs font-semibold uppercase tracking-wider text-[#0d0d0d] underline underline-offset-4 hover:text-[#e24a29]"
              >
                View All Case Studies →
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/case-studies/${item.slug}`}
                  className="group block space-y-3"
                >
                  <div className="editorial-image-container aspect-[16/10] rounded-2xl bg-black overflow-hidden shadow-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#e24a29] font-semibold">
                      {item.category} · {item.industry}
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
