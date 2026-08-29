import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";
import { jobs } from "@/data/jobs";

export const metadata = {
  title: "Careers & Culture | Planning Labs",
  description:
    "Join the Planning Labs team in Mumbai. Explore open positions in event production, performance marketing, 3D spatial design, and web development.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#f6f4f0] text-[#0d0d0d]">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-[#0d0d0d] text-[#f6f4f0] pt-36 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24 px-6 sm:px-8 lg:px-12 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
            Careers & Agency Culture
          </p>

          <div className="grid gap-8 lg:grid-cols-12">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.92] tracking-tight text-white lg:col-span-8 font-display">
              Build things that
              <br />
              <span className="italic font-serif font-normal text-neutral-300">move people.</span>
            </h1>

            <p className="self-end text-base text-neutral-300 leading-relaxed lg:col-span-4 lg:pb-2">
              We are constantly seeking passionate spatial producers, performance strategists, 3D visual architects, and software engineers in Mumbai.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29] mb-2">
            Culture Principles
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-10 text-[#0d0d0d] font-display">
            Why join Planning Labs?
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white border border-neutral-200/80 p-6 space-y-3 shadow-sm">
              <span className="font-mono text-xs text-[#e24a29] font-bold">01</span>
              <h3 className="text-lg font-bold text-[#0d0d0d] font-display">Cross-Disciplinary Rigor</h3>
              <p className="text-xs leading-relaxed text-neutral-600">
                Work at the intersection of live event engineering, physical staging, and digital performance ad technology.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-neutral-200/80 p-6 space-y-3 shadow-sm">
              <span className="font-mono text-xs text-[#e24a29] font-bold">02</span>
              <h3 className="text-lg font-bold text-[#0d0d0d] font-display">High-Impact Ownership</h3>
              <p className="text-xs leading-relaxed text-neutral-600">
                Own projects end-to-end, from spatial layout blueprints to high-traffic web software releases.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-neutral-200/80 p-6 space-y-3 shadow-sm">
              <span className="font-mono text-xs text-[#e24a29] font-bold">03</span>
              <h3 className="text-lg font-bold text-[#0d0d0d] font-display">Collaborative Growth</h3>
              <p className="text-xs leading-relaxed text-neutral-600">
                A culture that values technical precision, creative boldness, and practical problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-[#0d0d0d] text-[#f6f4f0] px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 border-b border-neutral-800 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                Current Opportunities
              </p>
              <h2 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
                Open positions ({jobs.length})
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              MUMBAI HQ / HYBRID AVAILABLE
            </span>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <Link
                key={job.id}
                href={`/careers/${job.slug}`}
                className="group block rounded-2xl bg-[#161616] border border-neutral-800 p-6 sm:p-8 hover:border-neutral-700 transition-all duration-300 shadow-sm"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2 text-xs font-mono uppercase tracking-wider text-neutral-300">
                      <span className="rounded-full bg-[#e24a29] px-3 py-0.5 text-white font-semibold">
                        {job.department}
                      </span>
                      <span className="rounded-full bg-white/10 px-3 py-0.5 text-white border border-white/15">
                        {job.type}
                      </span>
                      <span className="rounded-full bg-white/10 px-3 py-0.5 text-white border border-white/15">
                        {job.experience}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#e24a29] transition-colors font-display">
                      {job.title}
                    </h3>

                    <p className="text-xs text-neutral-400 line-clamp-2 max-w-3xl leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white group-hover:text-[#e24a29] group-hover:translate-x-1 transition-all">
                    <span>Apply Now</span>
                    <span>→</span>
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
