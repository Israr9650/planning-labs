import Link from "next/link";
import FadeIn from "./FadeIn";

const verticals = [
  {
    number: "01",
    title: "Experiential Marketing",
    slug: "experiential",
    tagline: "Spatial Design & Live Operations",
    description:
      "From architectural trade booths and corporate summits to brand activations and product launches, we build live environments that bring brands into the physical world.",
    services: [
      "Corporate Conferences & Summits",
      "Exhibitions & Stall Architecture",
      "Brand Pop-Ups & Activations",
      "MICE & Destination Events",
      "Launch Reveal Mechanics",
      "Event Production & Staging",
    ],
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=85",
  },
  {
    number: "02",
    title: "Digital Marketing",
    slug: "digital",
    tagline: "Performance & Content Acquisition",
    description:
      "Creative storytelling, performance ad acquisition, SEO authority, and custom Next.js web applications built to connect brands with digital audiences.",
    services: [
      "Social Media & Short Reels",
      "Performance Ads (Meta / Google)",
      "SEO & Organic Authority",
      "Creator & Influencer Networks",
      "Next.js Web Applications",
      "3D CGI & Motion Graphics",
    ],
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1600&q=85",
  },
];

const Verticals = () => {
  return (
    <section
      id="services"
      className="bg-[#0a0a0a] px-6 sm:px-8 lg:px-12 py-16 sm:py-20 text-[#f5f3ef] border-b border-neutral-800"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <FadeIn duration={0.5}>
          <div className="mb-10 flex flex-col justify-between gap-6 border-b border-neutral-800 pb-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-2 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
                Core Business Divisions
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white font-display">
                Two verticals.
                <br />
                <span className="italic font-serif font-normal text-neutral-300">One cohesive</span> team.
              </h2>
            </div>

            <p className="max-w-md text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Spatial event execution and digital acquisition strategies designed to complement and amplify each other seamlessly.
            </p>
          </div>
        </FadeIn>

        {/* Vertical Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {verticals.map((vertical, idx) => (
            <FadeIn key={vertical.number} delay={idx * 0.15} duration={0.6}>
              <article className="group bg-[#141414] rounded-xl border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300 shadow-sm h-full">
                <div>
                  {/* Meta */}
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                    <span className="font-mono text-xs text-[#e24a29] font-bold tracking-widest">
                      VERTICAL {vertical.number}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      {vertical.tagline}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="my-5 aspect-[16/9] overflow-hidden rounded-lg bg-black relative editorial-image-container">
                    <img
                      src={vertical.image}
                      alt={vertical.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold tracking-tight text-white font-display">
                      {vertical.title}
                    </h3>

                    <p className="text-xs sm:text-sm leading-relaxed text-neutral-400">
                      {vertical.description}
                    </p>

                    <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 border-t border-neutral-800 pt-3">
                      {vertical.services.map((service) => (
                        <div
                          key={service}
                          className="text-xs text-neutral-300 flex items-center gap-2"
                        >
                          <span className="h-1 w-1 rounded-full bg-[#e24a29] shrink-0" />
                          <span className="truncate">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-neutral-800 mt-5">
                  <Link
                    href={`/services#${vertical.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white group-hover:text-[#e24a29] transition-colors"
                  >
                    <span>Explore {vertical.title} Capabilities</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;
