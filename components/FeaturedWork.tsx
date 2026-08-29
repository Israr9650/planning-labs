"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, ProjectCategory } from "@/data/projects";
import FadeIn from "./FadeIn";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", "Experiential", "Digital"];

const FeaturedWork = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="work"
      className="bg-[#f5f3ef] px-6 sm:px-8 lg:px-12 py-16 sm:py-20 border-b border-neutral-200"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header & Filter Controls */}
        <FadeIn duration={0.5}>
          <div className="flex flex-col justify-between gap-6 border-b border-neutral-200 pb-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-2 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                Selected Portfolio Showcase
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a0a0a] font-display">
                Work that makes an impact.
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const isActive = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#0a0a0a] text-white shadow-sm"
                        : "bg-transparent text-neutral-600 border border-neutral-300 hover:border-[#0a0a0a] hover:text-[#0a0a0a]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Project Grid */}
        <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {filteredProjects.map((project, idx) => (
            <FadeIn key={project.id} delay={(idx % 2) * 0.12} duration={0.5}>
              <Link
                href={`/work/${project.slug}`}
                className="group block space-y-3"
              >
                <div className="editorial-image-container relative aspect-[16/10] rounded-xl bg-black overflow-hidden shadow-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 flex items-end bg-black/0 p-5 transition-colors duration-300 group-hover:bg-black/25">
                    <span className="translate-y-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0a0a0a] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 shadow-md">
                      View Project Case →
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4 pt-1">
                  <div className="space-y-1">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#e24a29] font-semibold">
                      {project.category} · {project.service}
                    </p>

                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0a0a0a] group-hover:text-[#e24a29] transition-colors font-display">
                      {project.title}
                    </h3>
                  </div>

                  <span className="text-base text-neutral-400 group-hover:text-[#e24a29] group-hover:translate-x-0.5 transition-all">
                    ↗
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Footer Link */}
        <FadeIn duration={0.4} delay={0.2}>
          <div className="mt-10 border-t border-neutral-200 pt-6">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0a0a0a] hover:text-[#e24a29] transition-colors"
            >
              <span>View All Portfolio Cases</span>
              <span className="text-sm transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FeaturedWork;
