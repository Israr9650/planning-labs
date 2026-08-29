export type ProjectCategory = "Experiential" | "Digital";

export type Project = {
  id: number;
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  service: string;
  description: string;
  image: string;
  overview?: string;
  challenge?: string;
  approach?: string;
  execution?: string;
  result?: string;
  gallery?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "brand-experience",
    title: "Brand Experience & Activation",
    client: "Prototype Brand",
    category: "Experiential",
    service: "Brand Activations",
    description:
      "A large-scale brand experience designed around audience engagement, visual storytelling and live interaction.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1800&q=85",
    overview:
      "This experiential campaign brought together physical architectural fabrication, immersive sound design, and live brand interactions to engage thousands of attendees over a multi-day showcase.",
    challenge:
      "The primary goal was to transform a high-footfall physical space into a memorable brand touchpoint that encourages active participation rather than passive observation.",
    approach:
      "We conceived a spatial journey with intuitive touchpoints, combining custom fabricated displays with interactive digital installations.",
    execution:
      "Our team handled end-to-end event production, spatial layout, lighting, audio production, and on-site technical coordination across all operational days.",
    result:
      "Created a vibrant brand environment that generated high audience engagement, positive attendee feedback, and extended social media reach.",
    gallery: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
    ],
    featured: true,
  },
  {
    id: 2,
    slug: "digital-brand-campaign",
    title: "Digital Brand Launch Campaign",
    client: "Prototype Brand",
    category: "Digital",
    service: "Performance Marketing",
    description:
      "A digital-first campaign bringing creative content, design and digital communication together.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1800&q=85",
    overview:
      "An integrated digital campaign engineered to introduce a modern product lineup across targeted social and digital performance channels.",
    challenge:
      "Reaching a fragmented online demographic with messaging that stands out in crowded digital feeds.",
    approach:
      "Developed a multi-stage creative strategy: teaser video assets, educational motion graphics, and conversion-optimized ad creatives.",
    execution:
      "Managed campaign deployment, continuous audience segmentation, real-time creative iteration, and performance analytics tracking.",
    result:
      "Delivered strong click-through rates, consistent brand awareness growth, and high conversion efficiency across paid channels.",
    gallery: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    ],
    featured: true,
  },
  {
    id: 3,
    slug: "corporate-event",
    title: "Annual Corporate Leadership Summit",
    client: "Prototype Client",
    category: "Experiential",
    service: "Events & MICE",
    description:
      "A corporate experience combining event production, guest engagement and branded environments.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1800&q=85",
    overview:
      "A flagship corporate summit designed for key industry stakeholders featuring custom stage design, seamless show run control, and branded environments.",
    challenge:
      "Ensuring flawless execution for high-profile executive keynotes while maintaining high audience energy and engagement.",
    approach:
      "Designed a sleek, high-contrast stage setup with integrated LED displays, crisp sound engineering, and dedicated networking zones.",
    execution:
      "Managed vendor logistics, stage management, live video streaming, guest registration flow, and VIP hospitality services.",
    result:
      "Delivered an extraordinary summit experience praised by delegates for seamless timing, immersive presentation visuals, and executive polish.",
    gallery: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85",
    ],
    featured: true,
  },
  {
    id: 4,
    slug: "creative-digital-experience",
    title: "Interactive Web Brand Experience",
    client: "Prototype Brand",
    category: "Digital",
    service: "Website Development",
    description:
      "A digital creative experience focused on strong visual communication and audience interaction.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1800&q=85",
    overview:
      "A custom digital website experience built to showcase product features through rich micro-interactions and smooth editorial motion.",
    challenge:
      "Translating complex technical features into an intuitive, visually captivating web interface accessible across all device form factors.",
    approach:
      "Employed an editorial visual direction with bold typography, dynamic scroll animations, and optimized asset loading.",
    execution:
      "Built with modern frontend architecture, high-performance responsive styling, accessible semantic markup, and dynamic state management.",
    result:
      "Elevated online brand perception, increased user dwell time, and significantly lowered bounce rates across mobile visitors.",
    gallery: [
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85",
    ],
    featured: true,
  },
  {
    id: 5,
    slug: "exhibition-space",
    title: "Architectural Exhibition Pavilion",
    client: "Prototype Client",
    category: "Experiential",
    service: "Exhibitions & Stall Design",
    description:
      "A branded exhibition environment designed to create a clear and memorable visitor journey.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1800&q=85",
    overview:
      "A 3D spatial design and fabrication project for a major trade exhibition, focusing on open sightlines, branded touchpoints, and meeting spaces.",
    challenge:
      "Creating an architectural presence that stands out on a busy expo floor while maximizing internal meeting and product demo areas.",
    approach:
      "Utilized geometric structures, warm ambient lighting, elevated branding elements, and distinct product experience zones.",
    execution:
      "Precision structural fabrication, electrical rigging, graphic installation, and comprehensive teardown management.",
    result:
      "Attracted heavy foot traffic during trade days and generated high-quality business leads for the client sales team.",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
    ],
    featured: false,
  },
  {
    id: 6,
    slug: "social-content-campaign",
    title: "Social Media Storytelling Campaign",
    client: "Prototype Brand",
    category: "Digital",
    service: "Social Media Management",
    description:
      "A content-led social campaign built around consistent creative direction and digital storytelling.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1800&q=85",
    overview:
      "A multi-month creative content initiative producing short-form video reels, editorial carousels, and community engagement campaigns.",
    challenge:
      "Building organic audience loyalty and engagement in a highly competitive lifestyle brand segment.",
    approach:
      "Focused on high-aesthetic video storytelling, authentic user narratives, and strategic influencer amplification.",
    execution:
      "Produced 40+ custom video clips, managed daily publishing calendars, executed community responses, and optimized content based on analytics.",
    result:
      "Achieved a 3x increase in social channel engagements and built an active online brand community.",
    gallery: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1200&q=85",
    ],
    featured: false,
  },
];