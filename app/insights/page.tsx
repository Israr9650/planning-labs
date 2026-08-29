import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";
import { insights } from "@/data/insights";

export const metadata = {
  title: "Insights & Journal | Planning Labs",
  description:
    "Thought leadership and agency perspectives on physical spatial experiences, digital performance marketing, and event production.",
};

export default function InsightsPage() {
  const featured = insights.find((i) => i.featured) || insights[0];
  const others = insights.filter((i) => i.id !== featured.id);

  return (
    <main className="min-h-screen bg-[#f6f4f0] text-[#0d0d0d]">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-[#0d0d0d] text-[#f6f4f0] pt-36 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24 px-6 sm:px-8 lg:px-12 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
            Agency Journal & Perspectives
          </p>

          <div className="grid gap-8 lg:grid-cols-12">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.92] tracking-tight text-white lg:col-span-8 font-display">
              Insights &
              <br />
              <span className="italic font-serif font-normal text-neutral-300">perspectives.</span>
            </h1>

            <p className="self-end text-base text-neutral-300 leading-relaxed lg:col-span-4 lg:pb-2">
              Reflections on spatial marketing, event production, performance acquisition, and modern brand strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29] mb-4">
              FEATURED ARTICLE
            </p>
            <Link
              href={`/insights/${featured.slug}`}
              className="group grid gap-8 lg:grid-cols-12 rounded-2xl bg-white border border-neutral-200/80 p-6 sm:p-10 shadow-sm hover:border-neutral-400 hover:shadow-md transition-all duration-300"
            >
              <div className="editorial-image-container aspect-[16/10] rounded-xl bg-black lg:col-span-6 overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                    <span className="rounded-full bg-[#e24a29] text-white px-2.5 py-0.5 font-semibold">
                      {featured.category}
                    </span>
                    <span>·</span>
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span>{featured.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0d0d0d] group-hover:text-[#e24a29] transition-colors font-display">
                    {featured.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#0d0d0d] group-hover:text-[#e24a29]">
                  <span>Read Featured Article</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="px-6 sm:px-8 lg:px-12 py-12 sm:py-16 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29] mb-6">
            ALL JOURNAL ARTICLES
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((post) => (
              <Link
                key={post.id}
                href={`/insights/${post.slug}`}
                className="group block rounded-2xl bg-white border border-neutral-200/80 p-6 space-y-4 shadow-sm hover:border-neutral-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="editorial-image-container aspect-[16/10] rounded-xl bg-black overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500">
                    <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[#0d0d0d] font-semibold">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-[#0d0d0d] group-hover:text-[#e24a29] transition-colors leading-snug font-display">
                    {post.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#0d0d0d] group-hover:text-[#e24a29]">
                  <span>Read Article</span>
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
