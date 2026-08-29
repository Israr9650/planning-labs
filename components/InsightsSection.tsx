import Link from "next/link";
import { insights } from "@/data/insights";
import FadeIn from "./FadeIn";

export default function InsightsSection() {
  const featuredInsights = insights.slice(0, 3);

  return (
    <section className="bg-[#0a0a0a] px-6 sm:px-8 lg:px-12 py-16 sm:py-20 text-[#f5f3ef] border-b border-neutral-800">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <FadeIn duration={0.5}>
          <div className="flex flex-col justify-between gap-6 pb-6 border-b border-neutral-800 lg:flex-row lg:items-end">
            <div>
              <p className="mb-2 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                Agency Journal
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
                Latest Insights.
              </h2>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-[#e24a29] transition-colors"
            >
              <span>Explore Journal Index</span>
              <span>→</span>
            </Link>
          </div>
        </FadeIn>

        {/* Insights Grid */}
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {featuredInsights.map((article, idx) => (
            <FadeIn key={article.id} delay={idx * 0.12} duration={0.5}>
              <Link
                href={`/insights/${article.slug}`}
                className="group block space-y-4"
              >
                <div className="editorial-image-container aspect-[16/10] bg-white/5 rounded-xl overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-3.5 left-3.5 bg-[#0a0a0a]/85 backdrop-blur-md text-white px-3 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border border-white/15">
                    {article.category}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-[#e24a29] transition-colors leading-snug font-display">
                  {article.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="pt-1 text-xs font-semibold uppercase tracking-wider text-neutral-300 group-hover:text-[#e24a29] flex items-center gap-2">
                  <span>Read Article</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
