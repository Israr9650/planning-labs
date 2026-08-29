"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";
import { projects, ProjectCategory } from "@/data/projects";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", "Experiential", "Digital"];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#f6f4f0] text-[#0d0d0d]">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-[#0d0d0d] text-[#f6f4f0] pt-36 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24 px-6 sm:px-8 lg:px-12 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
            Agency Portfolio
          </p>

          <div className="grid gap-8 lg:grid-cols-12">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.92] tracking-tight text-white lg:col-span-8 font-display">
              Work that
              <br />
              <span className="italic font-serif font-normal text-neutral-300">makes an impact.</span>
            </h1>

            <p className="self-end text-base text-neutral-300 leading-relaxed lg:col-span-4 lg:pb-2">
              A curated selection of experiential live activations, spatial booth builds, and digital performance campaigns created for forward-thinking brands.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Filters Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-y border-neutral-200 py-4 gap-4">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-neutral-500">
              FILTER BY VERTICAL
            </p>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const isActive = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#0d0d0d] text-white shadow-sm"
                        : "bg-transparent text-neutral-600 border border-neutral-300 hover:border-[#0d0d0d] hover:text-[#0d0d0d]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project count indicator */}
          <div className="py-4 text-[11px] font-mono text-neutral-500">
            SHOWING {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "PROJECT" : "PROJECTS"}
          </div>

          {/* Project Grid */}
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 mt-4">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className={`group block space-y-3 ${
                  index % 3 === 1 ? "sm:mt-12" : ""
                }`}
              >
                <div className="editorial-image-container relative aspect-[4/3] rounded-2xl bg-black overflow-hidden shadow-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 flex items-end bg-black/0 p-6 transition-colors duration-300 group-hover:bg-black/30">
                    <span className="translate-y-2 rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#0d0d0d] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 shadow-md">
                      View Project Details →
                    </span>
                  </div>
                </div>

                <div className="flex justify-between gap-4 items-start pt-1">
                  <div className="space-y-1">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#e24a29] font-semibold">
                      {project.category} · {project.service}
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0d0d0d] group-hover:text-[#e24a29] transition-colors font-display">
                      {project.title}
                    </h2>
                  </div>

                  <span className="text-lg text-neutral-400 group-hover:text-[#e24a29] group-hover:translate-x-0.5 transition-all">
                    ↗
                  </span>
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