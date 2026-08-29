# Planning Labs — Official Website Redesign

Welcome to the official website codebase for **Planning Labs**, an experiential and digital marketing agency based in Mumbai.

🌐 **Live Prototype Demo**: [https://planning-labs-eight.vercel.app/](https://planning-labs-eight.vercel.app/)

This project is a redesign built from the ground up to reflect the full scope of Planning Labs' capabilities. It unplugs the agency from a traditional static template and provides a modern, fast, content-rich platform built on Next.js 16.

---

## 📌 Project Goals & Context

Planning Labs operates across two primary business verticals:

1. **Experiential Marketing**: Spatial booth design, live event production, corporate summits, brand activations, MICE, product launches, outdoor advertising, and fabrication.
2. **Digital Marketing**: Performance ad campaigns, social media strategy, SEO, influencer networks, commercial video production, web development, creative design, and CGI content.

The objective of this website is to serve as:
- A visual portfolio showcasing past client campaigns and spatial builds.
- A lead-generation funnel with an RFP brief and file upload facility.
- An SEO content hub for industry insights and agency thought leadership.
- A career portal for hiring new creative and technical talent.

---

## 🛠️ Tech Stack & Key Choices

- **Framework**: **Next.js 16 (App Router)** with **Turbopack** for rapid local dev builds and sub-100ms page transitions.
- **Language**: **TypeScript** (Strict Mode) — all data models, props, and components are fully typed.
- **Styling**: **Tailwind CSS v4** — utility-first styling with custom color tokens.
- **Animation**: **Framer Motion** — used sparingly for smooth scroll reveals and clean UI transitions without slowing down page performance.
- **Typography**: Google Fonts via `next/font` — **Plus Jakarta Sans** for display headers paired with **Geist** for body text.

---

## 📁 Project Structure & Route Map

```text
planning-labs/
├── app/
│   ├── page.tsx                    # Homepage (13 narrative sections)
│   ├── layout.tsx                  # Root layout containing Navbar, Footer & Global Metadata
│   ├── globals.css                 # Global CSS tokens and font imports
│   ├── not-found.tsx               # Custom 404 page styled to match agency aesthetics
│   ├── robots.ts                   # Search crawler directives
│   ├── sitemap.ts                  # Dynamic XML sitemap generator
│   │
│   ├── about/                      # About Planning Labs (agency manifesto, workflow & values)
│   │   └── page.tsx
│   │
│   ├── services/                   # Service catalog & dedicated landing pages
│   │   ├── page.tsx                # Overview of all 16 services across both verticals
│   │   └── [slug]/page.tsx         # Dynamic service pages (e.g., /services/events, /services/seo)
│   │
│   ├── work/                       # Portfolio listing & project details
│   │   ├── page.tsx                # Filterable project portfolio (All, Experiential, Digital)
│   │   └── [slug]/page.tsx         # In-depth project case pages with image galleries
│   │
│   ├── case-studies/               # Campaign story platform
│   │   ├── page.tsx                # List of deep-dive case studies
│   │   └── [slug]/page.tsx         # Full campaign breakdown (Challenge, Approach, Key Metrics)
│   │
│   ├── insights/                   # Agency blog & thought leadership
│   │   ├── page.tsx                # Article grid with read times and publication dates
│   │   └── [slug]/page.tsx         # Formatted article reader with author profiles
│   │
│   ├── careers/                    # Culture overview & job applications
│   │   ├── page.tsx                # List of open positions with department tags
│   │   └── [slug]/page.tsx         # Job spec details & candidate application form with PDF upload
│   │
│   ├── contact/                    # Enquiry & project brief submission
│   │   └── page.tsx                # RFP form with file uploader, WhatsApp link & click-to-call
│   │
│   └── search/                     # Website-wide search interface
│       └── page.tsx                # Real-time search index filtering services, work, case studies & insights
│
├── components/                     # Modular React UI components
│   ├── Navbar.tsx                  # Top header with mobile drawer & quick search trigger
│   ├── Footer.tsx                  # Footer with business vertical breakdowns & contact details
│   ├── Hero.tsx                    # Main hero section with CTA triggers
│   ├── Intro.tsx                   # Agency manifesto section
│   ├── Verticals.tsx               # Dual vertical spotlight cards (Experiential + Digital)
│   ├── FeaturedWork.tsx            # Filterable project showcase grid
│   ├── CapabilitiesSection.tsx     # 16-service capability matrix
│   ├── CredibilitySection.tsx      # Agency achievements & core operational pillars
│   ├── IndustriesSection.tsx       # Sector breakdown (Tech, Auto, Retail, Corporate, etc.)
│   ├── CaseStudiesSection.tsx      # Deep-dive campaign previews
│   ├── TestimonialsSection.tsx     # Client partnership philosophy & feedback
│   ├── InsightsSection.tsx         # Latest journal article preview
│   ├── CareersCTA.tsx              # Open hiring prompt banner
│   ├── ContactCTA.tsx              # Bottom lead-generation banner
│   └── FadeIn.tsx                  # Framer Motion scroll animation wrapper
│
├── data/                           # Centralized TypeScript content models
│   ├── projects.ts                 # Project records, categories, challenge statements & galleries
│   ├── services.ts                 # Detailed specs for all 16 services
│   ├── caseStudies.ts              # In-depth campaign records and key business metrics
│   ├── insights.ts                 # Blog posts, article content & author metadata
│   └── jobs.ts                     # Job openings, role responsibilities & requirements
│
└── public/                         # Static images and icons
```

---

## 🎨 Design System & Visual Choices

The visual direction follows an **editorial agency aesthetic** — clean, high-contrast, and restrained:

- **Color Tokens**:
  - **Light Background**: Studio Off-White (`#f5f3ef`)
  - **Dark Surface**: Onyx Dark (`#0a0a0a` & `#141414`)
  - **Brand Accent**: **Electric Vermilion (`#e24a29`)** — used intentionally for active navigation tabs, bullet indicators, hover states, and primary CTAs.
- **Layout & Rhythm**: Asymmetric grids, generous padding, and clear typographic hierarchy to give content room to breathe.

---

## 💡 Key Features Implemented

### 1. Dual Vertical Spotlight
The navigation and homepage make it immediately clear that Planning Labs handles both physical installations (*Experiential*) and online campaigns (*Digital*). Visitors can browse all 16 service offerings or jump into specific landing pages.

### 2. Category-Filterable Work Portfolio (`/work`)
Users can switch between **All Work**, **Experiential**, and **Digital** projects instantly. Individual project pages include client details, strategy summaries, metrics, and visual galleries.

### 3. Interactive RFP Brief Uploader (`/contact`)
Allows prospective clients to select services, specify budget brackets, outline project timelines, and attach brief documents (`.pdf`, `.ppt`, `.doc`, `.zip` up to 25MB). Includes direct WhatsApp chat and click-to-call links.

### 4. Job Application System (`/careers/[slug]`)
Detailed job descriptions with a candidate application form supporting resume PDF uploads.

### 5. Website-Wide Search (`/search`)
Instant client-side search engine indexing Services, Projects, Case Studies, and Insights as you type.

### 6. Headless CMS Ready Architecture
All content is decoupled from components into strongly-typed TypeScript modules in `data/`. In production, these local data files can be replaced with API calls to **Sanity.io**, **Strapi**, or **Payload CMS** with zero changes required in the presentation layer.

---

## 🚀 How to Run Locally

### 1. Prerequisites
Make sure you have Node.js (v18.0.0 or higher) and `npm` installed.

### 2. Installation
Clone the repository and install dependencies:

```bash
cd planning-labs
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build Verification

```bash
npm run build
npm run start
```

This compiles all 43 pages statically via Next.js SSG to verify that there are no broken links, missing props, or TypeScript build errors.

---

## 📈 SEO & Performance Strategy

- **Static Site Generation (SSG)**: 43 prerendered pages guarantee sub-100ms load times and optimal search crawler indexing.
- **Dynamic Sitemap**: `app/sitemap.ts` auto-generates `sitemap.xml` covering static pages and dynamic slug routes.
- **Robots & Meta**: `app/robots.ts` handles crawler indexing directives, while `app/layout.tsx` sets up OpenGraph tags for rich social sharing cards on LinkedIn, Twitter, and WhatsApp.
