"use client";

import { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { jobs } from "@/data/jobs";

type JobPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function JobDetailPage({ params }: JobPageProps) {
  const { slug } = use(params);
  const job = jobs.find((j) => j.slug === slug);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    fileName: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  if (!job) {
    notFound();
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill out all mandatory fields (Name, Email, Phone).");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f6f4f0] text-[#0d0d0d]">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-[#0d0d0d] text-[#f6f4f0] pt-36 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24 px-6 sm:px-8 lg:px-12 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex flex-wrap gap-2 text-xs font-mono uppercase tracking-wider text-neutral-300">
            <span className="rounded-full bg-[#e24a29] px-3.5 py-1 text-white font-semibold">
              {job.department}
            </span>
            <span className="rounded-full bg-white/10 px-3.5 py-1 text-white border border-white/15">
              {job.type}
            </span>
            <span className="rounded-full bg-white/10 px-3.5 py-1 text-white border border-white/15">
              {job.location}
            </span>
          </div>

          <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white font-display">
            {job.title}
          </h1>

          <p className="mt-4 max-w-2xl text-base text-neutral-300 leading-relaxed">
            {job.description}
          </p>
        </div>
      </section>

      {/* Details & Form Grid */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Job Specs */}
            <div className="space-y-10 lg:col-span-7">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0d0d0d] font-display">
                  Key Responsibilities
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {job.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 leading-relaxed"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e24a29] mt-2 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0d0d0d] font-display">
                  Candidate Requirements
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {job.requirements.map((req, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 leading-relaxed"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e24a29] mt-2 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 rounded-2xl bg-white border border-neutral-200/80 p-6 sm:p-8 shadow-sm space-y-5">
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-[#0d0d0d] font-display">
                    Apply for position
                  </h2>
                  <p className="text-xs text-neutral-500 leading-relaxed mt-1">
                    Submit your candidate profile. Our hiring team will review your application within 48 hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="rounded-xl bg-[#0d0d0d] text-white p-6 space-y-3 animate-fadeIn">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e24a29] text-white font-bold text-lg">
                      ✓
                    </div>
                    <h3 className="text-xl font-bold font-display">Application Received</h3>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Your application for <strong>{job.title}</strong> has been logged into Planning Labs HR.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", message: "", fileName: "" });
                      }}
                      className="text-xs font-semibold text-white underline underline-offset-4 pt-1 block cursor-pointer"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="rounded-lg bg-red-50 border border-red-200 text-red-700 p-3 text-xs font-medium">
                        {error}
                      </div>
                    )}

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-600 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Morgan"
                        className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3.5 py-2.5 text-xs focus:border-[#0d0d0d] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-600 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@example.com"
                        className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3.5 py-2.5 text-xs focus:border-[#0d0d0d] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-600 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3.5 py-2.5 text-xs focus:border-[#0d0d0d] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-600 mb-1">
                        Resume / Portfolio PDF
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
                        />
                        <div className="w-full rounded-xl border border-dashed border-neutral-300 bg-neutral-50 px-3.5 py-3 text-center text-xs text-neutral-600 hover:bg-neutral-100 transition-colors">
                          {formData.fileName ? (
                            <span className="font-semibold text-black">
                              📄 Attached: {formData.fileName}
                            </span>
                          ) : (
                            <span>📎 Click to attach Resume (PDF/DOC)</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-600 mb-1">
                        Cover Note / Summary
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Brief summary of relevant experience..."
                        className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3.5 py-2.5 text-xs focus:border-[#0d0d0d] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#e24a29] py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#0d0d0d] cursor-pointer shadow-sm"
                    >
                      Submit Candidate Application →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
