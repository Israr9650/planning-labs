import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#f5f3ef] border-t border-neutral-800 pt-16 sm:pt-20 pb-12 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Main Grid */}
        <div className="grid gap-10 lg:grid-cols-12 pb-16 border-b border-neutral-800">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-base font-semibold uppercase tracking-tight text-white"
            >
              <span className="h-2 w-2 rounded-full bg-[#e24a29]" />
              <span className="font-mono tracking-tight text-lg">PLANNING LABS</span>
            </Link>

            <p className="max-w-md text-xs sm:text-sm leading-relaxed text-neutral-400">
              Planning Labs is a premium experiential and digital marketing agency based in Mumbai. We combine spatial design, live event production, and performance acquisition to build brand experiences that move people.
            </p>

            <div className="pt-2 text-xs font-mono uppercase tracking-widest text-[#e24a29]">
              MUMBAI · MAHARASHTRA · INDIA
            </div>

            {/* Official Social Links */}
            <div className="pt-3 flex flex-wrap gap-4 text-xs font-mono uppercase tracking-wider text-neutral-400">
              <a
                href="https://www.instagram.com/planninglabs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e24a29] transition-colors"
              >
                Instagram ↗
              </a>
              <a
                href="https://www.linkedin.com/company/planning-labs/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e24a29] transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://www.youtube.com/@Planning_Labs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e24a29] transition-colors"
              >
                YouTube ↗
              </a>
              <a
                href="https://www.behance.net/planninglabs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e24a29] transition-colors"
              >
                Behance ↗
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-500">
              SITE MAP
            </p>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-300">
              <li>
                <Link href="/work" className="hover:text-[#e24a29] transition-colors">
                  Our Work Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#e24a29] transition-colors">
                  Services Catalog (16)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#e24a29] transition-colors">
                  About Planning Labs
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-[#e24a29] transition-colors">
                  Case Studies Platform
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-[#e24a29] transition-colors">
                  Insights & Journal
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#e24a29] transition-colors">
                  Careers & Openings
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#e24a29] transition-colors">
                  Contact & Brief Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Verticals Breakdown */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-500">
              BUSINESS DIVISIONS
            </p>
            <div className="space-y-3 text-xs text-neutral-300">
              <div>
                <p className="font-semibold uppercase tracking-wider text-white">01 / Experiential Marketing</p>
                <p className="text-neutral-400 leading-relaxed mt-1">
                  Events · Exhibitions · Activations · MICE · Launches · OOH · Fabrication
                </p>
              </div>
              <div className="pt-2">
                <p className="font-semibold uppercase tracking-wider text-white">02 / Digital Marketing</p>
                <p className="text-neutral-400 leading-relaxed mt-1">
                  Social Media · Performance Ads · SEO · Influencers · Web Dev · CGI & Motion
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#e24a29] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white hover:text-[#0a0a0a] transition-colors shadow-sm"
              >
                <span>Start a Project Brief</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} Planning Labs. Official Agency Prototype.</p>
          <div className="flex items-center gap-6">
            <Link href="/search" className="hover:text-white transition-colors">
              Search Index
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              XML Sitemap
            </Link>
            <a
              href="https://www.planninglabs.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e24a29] transition-colors"
            >
              Official Website ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
