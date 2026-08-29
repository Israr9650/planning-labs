"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { insights } from "@/data/insights";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const q = query.toLowerCase().trim();

  // Filter projects
  const matchedProjects = q
    ? projects.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.service.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    : [];

  // Filter services
  const matchedServices = q
    ? services.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          s.shortDescription.toLowerCase().includes(q)
      )
    : [];

  // Filter case studies
  const matchedCaseStudies = q
    ? caseStudies.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.industry.toLowerCase().includes(q) ||
          c.summary.toLowerCase().includes(q)
      )
    : [];

  // Filter insights
  const matchedInsights = q
    ? insights.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.category.toLowerCase().includes(q) ||
          i.excerpt.toLowerCase().includes(q)
      )
    : [];

  const totalResults =
    matchedProjects.length +
    matchedServices.length +
    matchedCaseStudies.length +
    matchedInsights.length;

  return (
    <main className="min-h-screen bg-[#f6f4f0] text-[#0d0d0d]">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-[#0d0d0d] text-[#f6f4f0] pt-36 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24 px-6 sm:px-8 lg:px-12 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
            Agency Content Index
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
            Search Planning Labs
          </h1>

          {/* Search Bar */}
          <div className="mt-6 max-w-2xl relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, projects, case studies, insights..."
              className="w-full rounded-full border border-neutral-700 bg-[#161616] px-6 py-4 pr-12 text-sm text-white placeholder-neutral-500 focus:border-[#e24a29] focus:outline-none shadow-xl transition-colors"
              autoFocus
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs font-mono font-bold"
              >
                ✕
              </button>
            )}
          </div>

          <div className="mt-3 text-xs font-mono text-neutral-400">
            {q ? (
              <span>Found {totalResults} matching results for &quot;{query}&quot;</span>
            ) : (
              <span>Try searching for &quot;events&quot;, &quot;SEO&quot;, &quot;digital&quot;, or &quot;activation&quot;</span>
            )}
          </div>
        </div>
      </section>

      {/* Results Display */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {!q ? (
            <div className="py-12 text-center text-neutral-400 font-mono text-xs uppercase tracking-widest">
              Type a keyword above to search agency deliverables.
            </div>
          ) : totalResults === 0 ? (
            <div className="rounded-2xl bg-white border border-neutral-200/80 p-8 text-center text-neutral-600 space-y-2 shadow-sm">
              <p className="text-xl font-bold text-[#0d0d0d] font-display">No matching content found.</p>
              <p className="text-xs">Try searching for &quot;events&quot;, &quot;performance&quot;, &quot;exhibition&quot;, or &quot;content&quot;.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {/* Services Results */}
              {matchedServices.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                    <h2 className="text-xl font-bold tracking-tight text-[#0d0d0d] font-display">
                      Services ({matchedServices.length})
                    </h2>
                    <Link
                      href="/services"
                      className="text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-[#e24a29]"
                    >
                      All Services →
                    </Link>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {matchedServices.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="group rounded-2xl bg-white border border-neutral-200/80 p-5 space-y-2 shadow-sm hover:border-neutral-400 transition-all"
                      >
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#e24a29]">
                          {service.category}
                        </span>
                        <h3 className="text-base font-bold text-[#0d0d0d] group-hover:text-[#e24a29] transition-colors font-display">
                          {service.title}
                        </h3>
                        <p className="text-xs text-neutral-600 leading-relaxed line-clamp-2">
                          {service.shortDescription}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects Results */}
              {matchedProjects.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                    <h2 className="text-xl font-bold tracking-tight text-[#0d0d0d] font-display">
                      Projects ({matchedProjects.length})
                    </h2>
                    <Link
                      href="/work"
                      className="text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-[#e24a29]"
                    >
                      All Work →
                    </Link>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {matchedProjects.map((project) => (
                      <Link
                        key={project.id}
                        href={`/work/${project.slug}`}
                        className="group rounded-2xl bg-white border border-neutral-200/80 p-5 space-y-2 shadow-sm hover:border-neutral-400 transition-all"
                      >
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#e24a29]">
                          {project.category} · {project.service}
                        </span>
                        <h3 className="text-base font-bold text-[#0d0d0d] group-hover:text-[#e24a29] transition-colors font-display">
                          {project.title}
                        </h3>
                        <p className="text-xs text-neutral-600 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Case Studies Results */}
              {matchedCaseStudies.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                    <h2 className="text-xl font-bold tracking-tight text-[#0d0d0d] font-display">
                      Case Studies ({matchedCaseStudies.length})
                    </h2>
                    <Link
                      href="/case-studies"
                      className="text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-[#e24a29]"
                    >
                      All Case Studies →
                    </Link>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {matchedCaseStudies.map((cs) => (
                      <Link
                        key={cs.id}
                        href={`/case-studies/${cs.slug}`}
                        className="group rounded-2xl bg-white border border-neutral-200/80 p-5 space-y-2 shadow-sm hover:border-neutral-400 transition-all"
                      >
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#e24a29]">
                          {cs.category} · {cs.industry}
                        </span>
                        <h3 className="text-base font-bold text-[#0d0d0d] group-hover:text-[#e24a29] transition-colors font-display">
                          {cs.title}
                        </h3>
                        <p className="text-xs text-neutral-600 leading-relaxed line-clamp-2">
                          {cs.summary}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Insights Results */}
              {matchedInsights.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                    <h2 className="text-xl font-bold tracking-tight text-[#0d0d0d] font-display">
                      Insights ({matchedInsights.length})
                    </h2>
                    <Link
                      href="/insights"
                      className="text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-[#e24a29]"
                    >
                      All Articles →
                    </Link>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {matchedInsights.map((article) => (
                      <Link
                        key={article.id}
                        href={`/insights/${article.slug}`}
                        className="group rounded-2xl bg-white border border-neutral-200/80 p-5 space-y-2 shadow-sm hover:border-neutral-400 transition-all"
                      >
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#e24a29]">
                          {article.category} · {article.readTime}
                        </span>
                        <h3 className="text-base font-bold text-[#0d0d0d] group-hover:text-[#e24a29] transition-colors font-display">
                          {article.title}
                        </h3>
                        <p className="text-xs text-neutral-600 leading-relaxed line-clamp-2">
                          {article.excerpt}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
