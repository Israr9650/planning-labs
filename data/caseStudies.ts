export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: "Experiential" | "Digital" | "Integrated";
  summary: string;
  image: string;
  objective: string;
  challenge: string;
  approach: string;
  execution: string;
  result: string;
  gallery: string[];
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-1",
    slug: "experiential-brand-footprint",
    title: "Multi-City Experiential Brand Footprint",
    client: "Prototype Client",
    industry: "Consumer Electronics",
    category: "Experiential",
    summary:
      "A prototype multi-city activation showcasing spatial design, interactive product stations, and high-footfall engagement.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1800&q=85",
    objective:
      "To showcase how physical activations can generate direct consumer trial and brand affinity across key urban centers.",
    challenge:
      "Maintaining brand design consistency across different venue layouts while keeping assembly turnarounds under tight venue windows.",
    approach:
      "We engineered a modular booth system that could adapt to varying floor sizes without losing visual impact or architectural aesthetic.",
    execution:
      "Deployed simultaneous execution teams across 4 major venues with centralized production monitoring and on-site logistics management.",
    result:
      "Demonstrated how modular spatial engineering allows seamless multi-city rollouts while maintaining high aesthetic standards.",
    gallery: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
    ],
    featured: true,
  },
  {
    id: "cs-2",
    slug: "integrated-digital-omnichannel",
    title: "Omnichannel Digital Launch Campaign",
    client: "Prototype Brand",
    industry: "Lifestyle & Apparel",
    category: "Digital",
    summary:
      "Connecting digital performance campaigns with social storytelling and custom interactive web landing pages.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1800&q=85",
    objective:
      "To build a cohesive digital funnel connecting top-of-funnel social awareness with direct conversion web touchpoints.",
    challenge:
      "Attracting Gen-Z and Millennial audiences with authentic video content while maintaining clear performance attribution.",
    approach:
      "Leveraged short-form video reels, creator partnerships, and a fast-loading editorial product experience web application.",
    execution:
      "Executed targeted Meta and Google ad splits alongside active community management and real-time performance tweaks.",
    result:
      "Illustrated how integrated digital execution produces strong engagement loops across creative content and web touchpoints.",
    gallery: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    ],
    featured: true,
  },
  {
    id: "cs-3",
    slug: "corporate-mice-summit",
    title: "Global Leadership & Innovation Convention",
    client: "Prototype Client",
    industry: "Enterprise Technology",
    category: "Integrated",
    summary:
      "Combining physical stage fabrication, live broadcast production, and digital attendee registration for a global summit.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1800&q=85",
    objective:
      "Delivering a unified event experience for both physical delegates and remote global attendees.",
    challenge:
      "Synchronizing live stage presentations with ultra-low latency broadcast streams across multiple time zones.",
    approach:
      "Integrated dual stage production workflows with dedicated media servers, interactive Q&A web portals, and custom LED set architecture.",
    execution:
      "Full show control, stage management, live video switching, and post-convention media archiving.",
    result:
      "Showcased seamless hybrid convention capabilities connecting live delegates with a global virtual audience.",
    gallery: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85",
    ],
    featured: false,
  },
];
