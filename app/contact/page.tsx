"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Experiential Marketing",
    message: "",
    fileName: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError("Please fill out all mandatory fields (Name, Email, Phone, Message).");
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
          <p className="mb-4 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
            Direct Agency Enquiry
          </p>

          <div className="grid gap-8 lg:grid-cols-12">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.92] tracking-tight text-white lg:col-span-8 font-display">
              Let&apos;s talk about
              <br />
              <span className="italic font-serif font-normal text-neutral-300">your next idea.</span>
            </h1>

            <p className="self-end text-base text-neutral-300 leading-relaxed lg:col-span-4 lg:pb-2">
              Whether you need event production, spatial booth architecture, performance ads, or an integrated campaign, our team is ready to respond.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Contact Channels */}
            <div className="space-y-8 lg:col-span-5">
              <div>
                <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                  Direct Channels
                </p>
                <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-[#0d0d0d] font-display">
                  Get in touch directly.
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Planning Labs is headquartered in Mumbai. Reach out via email, phone, or send your brief through the enquiry form.
                </p>
              </div>

              <div className="space-y-5 rounded-2xl bg-white border border-neutral-200/80 p-6 sm:p-8 shadow-sm">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#e24a29]">
                    HEADQUARTERS
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#0d0d0d]">
                    Mumbai, Maharashtra, India
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100">
                  <p className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#e24a29]">
                    EMAIL ENQUIRY
                  </p>
                  <a
                    href="mailto:info@planninglabs.in"
                    className="mt-1 text-sm font-semibold text-[#0d0d0d] hover:text-[#e24a29] transition-colors block"
                  >
                    info@planninglabs.in
                  </a>
                </div>

                <div className="pt-3 border-t border-neutral-100">
                  <p className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#e24a29]">
                    PHONE & WHATSAPP
                  </p>
                  <div className="mt-1.5 flex flex-col gap-1.5">
                    <a
                      href="tel:+919820000000"
                      className="text-xs font-semibold text-[#0d0d0d] hover:text-[#e24a29]"
                    >
                      📞 +91 98200 00000 (Office Desk)
                    </a>
                    <a
                      href="https://wa.me/919820000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 hover:underline"
                    >
                      💬 Chat on WhatsApp →
                    </a>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-100">
                  <p className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#e24a29]">
                    OFFICIAL WEBSITE
                  </p>
                  <a
                    href="https://www.planninglabs.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-xs font-semibold text-[#0d0d0d] hover:text-[#e24a29] block"
                  >
                    www.planninglabs.in ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white border border-neutral-200/80 p-6 sm:p-10 shadow-sm space-y-6">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-[#0d0d0d] font-display">
                    Project Brief Enquiry
                  </h2>
                  <p className="text-xs text-neutral-500 leading-relaxed mt-1">
                    Share your campaign scope, event target dates, or attach an RFP document.
                  </p>
                </div>

                {submitted ? (
                  <div className="rounded-xl bg-[#0d0d0d] text-white p-8 space-y-4 animate-fadeIn">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e24a29] text-white font-bold text-lg">
                      ✓
                    </div>
                    <h3 className="text-2xl font-bold font-display">Brief Received</h3>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Your project brief has been logged into our agency system. A Planning Labs strategist will contact you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          service: "Experiential Marketing",
                          message: "",
                          fileName: "",
                        });
                      }}
                      className="text-xs font-semibold uppercase tracking-wider text-white underline underline-offset-4 pt-1 block cursor-pointer"
                    >
                      Submit another brief
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="rounded-lg bg-red-50 border border-red-200 text-red-700 p-3 text-xs font-medium">
                        {error}
                      </div>
                    )}

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-600 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Rahul Sharma"
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
                          placeholder="rahul@company.com"
                          className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3.5 py-2.5 text-xs focus:border-[#0d0d0d] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
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
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          placeholder="Company name"
                          className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3.5 py-2.5 text-xs focus:border-[#0d0d0d] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-600 mb-1">
                        Primary Service Requirement
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3.5 py-2.5 text-xs focus:border-[#0d0d0d] focus:outline-none cursor-pointer"
                      >
                        <option value="Experiential Marketing">Experiential Marketing (Events, Stalls, Activations)</option>
                        <option value="Digital Marketing">Digital Marketing (Performance Ads, Social, SEO)</option>
                        <option value="Integrated Campaign">Integrated Campaign (Physical + Digital)</option>
                        <option value="Exhibitions & Stall Design">Exhibitions & Stall Architecture</option>
                        <option value="Website Development">Website Development & Tech</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-600 mb-1">
                        Project Brief / Details *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us about target dates, budget scope, or general project specs..."
                        className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3.5 py-2.5 text-xs focus:border-[#0d0d0d] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-600 mb-1">
                        Attach Brief Document / RFP File
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,.ppt,.pptx,.zip"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
                        />
                        <div className="w-full rounded-xl border border-dashed border-neutral-300 bg-neutral-50 px-3.5 py-3.5 text-center text-xs text-neutral-600 hover:bg-neutral-100 transition-colors">
                          {formData.fileName ? (
                            <span className="font-semibold text-black">
                              📄 Attached: {formData.fileName}
                            </span>
                          ) : (
                            <span>📎 Click or drop project brief (PDF, PPT, DOC up to 25MB)</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#e24a29] py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#0d0d0d] cursor-pointer shadow-sm"
                    >
                      Send Brief Enquiry →
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
