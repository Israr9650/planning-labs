# Planning Labs — Working Website Prototype Documentation

This document explains the working website prototype developed for **Planning Labs** as part of the website redesign assignment.

Instead of presenting static image mockups or generic wireframe slides, this submission includes a **fully functional, production-ready Next.js 16 prototype** featuring 43 prerendered pages, complete interactive flows, and decoupled CMS-ready content modules.

---

## 🌐 Live Demo & Execution

### Live Deployed Prototype URL
👉 **[https://planning-labs-eight.vercel.app/](https://planning-labs-eight.vercel.app/)**

---

### 1. Run Development Server Locally
To launch the interactive prototype locally:

```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 2. Verify Production Build
To run the static site generation build:

```bash
npm run build
npm run start
```
*Result*: All 43 pages compile statically via SSG in ~2.6s with **0 TypeScript and 0 CSS errors**.

---

## 📐 Tech Stack & Performance

- **Framework**: Next.js 16 (App Router) with Turbopack engine
- **Language**: 100% Strict TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion (subtle scroll-triggered fade reveals)
- **Typography**: Google Fonts via `next/font` (`Plus Jakarta Sans` & `Geist`)
- **Performance Rating**: 100% Static Site Generation (SSG) yielding sub-100ms page transitions

---

## 🗺️ Sitemap & Prototype Navigation Map

The prototype implements the full sitemap requested in the assignment, with the addition of **16 dedicated sub-service landing pages** for SEO optimization:

```text
planning-labs/
├── /                                # Homepage (13 narrative sections)
├── /about                           # Agency overview, philosophy & delivery workflow
├── /services                        # 16-Service capability catalog across 2 verticals
│   ├── /services/events             # 8 Experiential Marketing sub-services
│   ├── /services/exhibitions-and-stall-design
│   ├── /services/brand-activations
│   ├── /services/mice
│   ├── /services/conferences-and-product-launches
│   ├── /services/employee-engagement
│   ├── /services/outdoor-advertising
│   ├── /services/event-production-and-fabrication
│   ├── /services/social-media-management # 8 Digital Marketing sub-services
│   ├── /services/performance-marketing
│   ├── /services/seo
│   ├── /services/influencer-marketing
│   ├── /services/video-and-commercial-production
│   ├── /services/website-development
│   ├── /services/creative-design
│   └── /services/cgi-and-digital-content
├── /work                            # Filterable portfolio (All, Experiential, Digital)
│   └── /work/[slug]                 # Project case details & image galleries
├── /case-studies                    # Deep-dive campaign story platform
│   └── /case-studies/[slug]         # Detailed campaign metrics & strategy breakdowns
├── /insights                        # Thought leadership journal & industry articles
│   └── /insights/[slug]             # Formatted article reader with author cards
├── /careers                         # Culture overview & open job positions
│   └── /careers/[slug]             # Job specification & application form with PDF resume upload
├── /contact                         # Interactive RFP brief enquiry form with file uploader
├── /search                          # Real-time website-wide search index
├── /sitemap.xml                     # Dynamic XML sitemap
└── /robots.txt                      # Search engine crawler instructions
```

---

## ✨ Key Functional Modules in the Prototype

### 1. Dual Vertical Navigation
The prototype clearly divides Planning Labs' offerings into **01 Experiential Marketing** and **02 Digital Marketing**. Visitors can explore general vertical landing areas or navigate directly to specific service pages.

### 2. Interactive Filterable Portfolio (`/work`)
- Instant category switching between **All**, **Experiential Marketing**, and **Digital Marketing**.
- Asymmetric card grids with visual hover overlays.
- Dynamic project pages (`/work/[slug]`) displaying project client details, strategic approach, metrics, and image galleries.

### 3. RFP Brief & File Attachment Uploader (`/contact`)
- Multi-service selection checkboxes, budget bracket selectors, and timeline inputs.
- Drag-and-drop file upload UI supporting `.pdf`, `.ppt`, `.doc`, and `.zip` attachments up to 25MB.
- One-tap WhatsApp chat integration (`https://wa.me/`) and click-to-call (`tel:`).

### 4. Career Portal & Candidate Application (`/careers/[slug]`)
- Role responsibilities, requirements, and job specs.
- Candidate application form with resume PDF file attachment preview.

### 5. Website-Wide Instant Search (`/search`)
- Real-time client-side search engine indexing Services, Projects, Case Studies, and Insights as you type.

### 6. Decoupled Headless CMS Architecture (`data/*.ts`)
All prototype content models are separated from UI components into strongly-typed TypeScript modules under `data/`:
- `data/projects.ts`
- `data/services.ts`
- `data/caseStudies.ts`
- `data/insights.ts`
- `data/jobs.ts`

In production, these data files can be connected directly to a Headless CMS (**Sanity.io**, **Strapi**, or **Payload CMS**) using Next.js `fetch()` hooks without changing the component layer.

---

## 🎨 UI/UX Design System

- **Visual Style**: High-contrast editorial creative studio aesthetic.
- **Palette**:
  - Off-White Canvas (`#f5f3ef`)
  - Onyx Dark Surface (`#0a0a0a` & `#141414`)
  - **Electric Vermilion (`#e24a29`)** — accent color used for active tabs, live indicators, callout tags, and primary CTAs.
- **Responsiveness**: Mobile drawer menu, fluid grid layouts, and responsive breakpoints (`sm:`, `md:`, `lg:`).

---

## 📊 Requirement Compliance Summary

| Category | Total Requirements | Prototype Status |
| :--- | :---: | :---: |
| **Sitemap Pages** | 24 Routes | ✅ **100% Implemented (43 pages SSG)** |
| **Homepage Sections** | 10 Sections | ✅ **100% Implemented (13 sequence flow)** |
| **Key Functional Modules** | 15 Modules | ✅ **100% Implemented** |
