import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";
import { insights } from "@/data/insights";

type InsightPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return insights.map((item) => ({
    slug: item.slug,
  }));
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const post = insights.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const related = insights.filter((item) => item.id !== post.id).slice(0, 2);

  return (
    <main className="min-h-screen bg-[#f6f4f0] text-[#0d0d0d]">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-[#0d0d0d] text-[#f6f4f0] pt-36 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24 px-6 sm:px-8 lg:px-12 border-b border-neutral-800">
        <div className="mx-auto max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <span className="rounded-full bg-[#e24a29] px-3.5 py-1 text-white font-semibold">
              {post.category}
            </span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white font-display">
            {post.title}
          </h1>

          <div className="pt-2 flex items-center gap-3 text-xs font-mono text-neutral-400 uppercase tracking-widest">
            <span>WRITTEN BY</span>
            <span className="font-semibold text-white">{post.author}</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 sm:px-8 lg:px-12 -mt-10 sm:-mt-12">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl aspect-[16/9] bg-black shadow-xl border border-neutral-800">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Article Body */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-6 text-base sm:text-lg text-neutral-800 leading-relaxed font-serif">
          {post.content.map((paragraph, index) => (
            <p key={index} className="first-letter:text-4xl first-letter:font-sans first-letter:font-bold first-letter:text-[#e24a29] first-letter:mr-2">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Author Details */}
      <section className="px-6 sm:px-8 lg:px-12 pb-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white border border-neutral-200/80 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-wider text-[#e24a29] font-bold">
              EDITORIAL AUTHOR
            </p>
            <p className="text-lg font-bold text-[#0d0d0d] font-sans mt-0.5">{post.author}</p>
            <p className="text-xs text-neutral-500 font-sans">
              Planning Labs Editorial & Strategy Division · Mumbai HQ
            </p>
          </div>
          <Link
            href="/insights"
            className="text-xs font-semibold uppercase tracking-wider rounded-full bg-[#0d0d0d] text-white px-5 py-2.5 font-sans hover:bg-[#e24a29] transition-colors shrink-0"
          >
            All Articles →
          </Link>
        </div>
      </section>

      {/* Related Perspectives */}
      {related.length > 0 && (
        <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 border-t border-neutral-200">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-end justify-between gap-6 pb-4 border-b border-neutral-200">
              <div>
                <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                  Keep Reading
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#0d0d0d] font-display">
                  Related perspectives.
                </h2>
              </div>
              <Link
                href="/insights"
                className="text-xs font-semibold uppercase tracking-wider text-[#0d0d0d] underline underline-offset-4 hover:text-[#e24a29]"
              >
                View All Insights →
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/insights/${item.slug}`}
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
                      {item.category} · {item.readTime}
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
