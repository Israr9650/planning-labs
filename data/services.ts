export type ServiceCategory = "Experiential Marketing" | "Digital Marketing";

export type Service = {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  heroImage: string;
  overview: string;
  capabilities: string[];
  process: { step: string; title: string; description: string }[];
  iconName?: string;
};

export const services: Service[] = [
  // Experiential Services
  {
    id: "exp-1",
    slug: "events",
    title: "Events",
    category: "Experiential Marketing",
    shortDescription:
      "Concept development, venue design, and flawless execution for live corporate and public events.",
    heroImage:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1800&q=85",
    overview:
      "We design and execute memorable live events that bring audiences together in meaningful physical environments. From intimate executive dinners to large-scale brand showcases, our team manages every detail from spatial strategy to show execution.",
    capabilities: [
      "Event Concept & Theme Design",
      "Venue Selection & Spatial Planning",
      "Stage & Audio-Visual Production",
      "Live Show Control & Directing",
      "Guest Management & Registration",
      "On-site Operations & Safety Protocols",
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Concept",
        description: "Understanding event objectives, audience expectations, and visual tone.",
      },
      {
        step: "02",
        title: "Spatial & Technical Design",
        description: "Drafting stage blueprints, sound plans, and guest flow pathways.",
      },
      {
        step: "03",
        title: "Fabrication & Rehearsal",
        description: "Building custom elements and running technical walkthroughs.",
      },
      {
        step: "04",
        title: "Live Show Delivery",
        description: "Flawless real-time control and guest experience management.",
      },
    ],
  },
  {
    id: "exp-2",
    slug: "exhibitions-and-stall-design",
    title: "Exhibitions & Stall Design",
    category: "Experiential Marketing",
    shortDescription:
      "Architectural 3D exhibition stalls and pavilions engineered for trade shows and expos.",
    heroImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1800&q=85",
    overview:
      "Our exhibition designs combine architectural presence with brand storytelling. We create custom booths, double-decker pavilions, and interactive display stands that draw high trade show traffic and convert casual visitors into leads.",
    capabilities: [
      "3D Spatial & Architecture Design",
      "Modular & Custom Stall Fabrication",
      "Interactive Product Demo Stations",
      "Lighting & Signage Rigging",
      "Expo Logistics & Material Transport",
      "On-site Technical Support & Teardown",
    ],
    process: [
      {
        step: "01",
        title: "Booth Brief & Guidelines",
        description: "Reviewing hall specs, dimensions, and client presentation goals.",
      },
      {
        step: "02",
        title: "3D Rendering & Plan Approval",
        description: "Creating photorealistic 3D stall visualizations and floorplans.",
      },
      {
        step: "03",
        title: "Workshop Off-site Build",
        description: "Pre-fabricating structural panels, counters, and lighting frames.",
      },
      {
        step: "04",
        title: "Expo Floor Installation",
        description: "Overnight assembly, electrical wiring, testing, and final polish.",
      },
    ],
  },
  {
    id: "exp-3",
    slug: "brand-activations",
    title: "Brand Activations",
    category: "Experiential Marketing",
    shortDescription:
      "High-touch experiential activations in malls, public plazas, and high-footfall spaces.",
    heroImage:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=85",
    overview:
      "Brand activations create direct physical encounters between consumers and products. We build immersive pop-up environments, interactive sampling setups, and gamified touchpoints that generate immediate emotional resonance.",
    capabilities: [
      "Pop-Up Environment Construction",
      "Gamified Consumer Interactions",
      "Product Sampling Setup & Logistics",
      "Permission & Location Licensing",
      "Promoter Training & Brand Ambassador Management",
      "Digital Amplification Integration",
    ],
    process: [
      {
        step: "01",
        title: "Engagement Strategy",
        description: "Identifying core audience touchpoints and experiential hooks.",
      },
      {
        step: "02",
        title: "Structure & Game Prototyping",
        description: "Building interactive elements and testing user flow.",
      },
      {
        step: "03",
        title: "Deployment & Staffing",
        description: "Setting up activation zones with trained brand ambassadors.",
      },
      {
        step: "04",
        title: "Capture & Measurement",
        description: "Collecting footfall metrics, consumer feedback, and social content.",
      },
    ],
  },
  {
    id: "exp-4",
    slug: "mice",
    title: "MICE (Meetings, Incentives, Conferences, Exhibitions)",
    category: "Experiential Marketing",
    shortDescription:
      "End-to-end management for international and regional business travel, retreats, and conventions.",
    heroImage:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1800&q=85",
    overview:
      "We deliver seamless corporate MICE programs tailored for executive groups and large delegations. From venue selection and travel coordination to thematic gala nights and conference schedules, we ensure frictionless corporate travel experiences.",
    capabilities: [
      "Corporate Travel & Destination Management",
      "Venue Sourcing & Contract Negotiation",
      "Conference Agenda & Speaker Operations",
      "Incentive Trips & Team Building Activities",
      "Thematic Gala Dinners & Entertainment",
      "Delegate Concierge & Transport Logistics",
    ],
    process: [
      {
        step: "01",
        title: "Destination Selection",
        description: "Analyzing locations, capacities, and flight connectivity.",
      },
      {
        step: "02",
        title: "Itinerary & Hospitality Planning",
        description: "Drafting detailed schedules, dining options, and session formats.",
      },
      {
        step: "03",
        title: "Logistics Coordination",
        description: "Securing travel bookings, room allocations, and AV infrastructure.",
      },
      {
        step: "04",
        title: "On-Ground Management",
        description: "Deploying dedicated travel directors to manage group movement.",
      },
    ],
  },
  {
    id: "exp-5",
    slug: "conferences-and-product-launches",
    title: "Conferences & Product Launches",
    category: "Experiential Marketing",
    shortDescription:
      "High-impact reveal events designed to make product unveilings dramatic and press-ready.",
    heroImage:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1800&q=85",
    overview:
      "Product launches require build-up, excitement, and a flawless moment of revelation. We design launch mechanics using custom kinetic screens, projection mapping, lighting sequences, and press-friendly environments.",
    capabilities: [
      "Launch Reveal Mechanics & Kinetic FX",
      "Keynote Stage & Screen Content Production",
      "Media & Influencer Management",
      "Livestream & Broadcast Engineering",
      "Product Demo & Hands-on Stations",
      "Executive Presentation Training",
    ],
    process: [
      {
        step: "01",
        title: "Reveal Narrative",
        description: "Crafting the story arc from introduction to curtain drop.",
      },
      {
        step: "02",
        title: "Multimedia Production",
        description: "Creating high-resolution stage animations and sound design.",
      },
      {
        step: "03",
        title: "Technical Rehearsals",
        description: "Fine-tuning audio visual cues, lighting timings, and cue cards.",
      },
      {
        step: "04",
        title: "Launch Execution",
        description: "Executing live keynote unveilings with broadcast quality.",
      },
    ],
  },
  {
    id: "exp-6",
    slug: "employee-engagement",
    title: "Employee Engagement",
    category: "Experiential Marketing",
    shortDescription:
      "Internal events, town halls, annual celebrations, and team-building experiences.",
    heroImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=85",
    overview:
      "Building culture and camaraderie through experiential internal events. We create uplifting annual days, interactive town halls, hackathons, and team recognition programs that align employees with corporate values.",
    capabilities: [
      "Company Annual Day Celebrations",
      "Interactive Town Hall Setups",
      "Employee Recognition Awards",
      "Thematic Team Building Workshops",
      "Internal Culture Branding & Merchandise",
      "Hybrid & Virtual Event Streaming",
    ],
    process: [
      {
        step: "01",
        title: "Culture Assessment",
        description: "Understanding company milestones and internal audience sentiment.",
      },
      {
        step: "02",
        title: "Format & Theme Concept",
        description: "Designing engaging activities and entertaining show sequences.",
      },
      {
        step: "03",
        title: "Event Operations",
        description: "Handling stage setups, catering, gaming zones, and schedules.",
      },
      {
        step: "04",
        title: "Post-event Highlights",
        description: "Editing highlight videos and photo packages for internal portals.",
      },
    ],
  },
  {
    id: "exp-7",
    slug: "outdoor-advertising",
    title: "Outdoor Advertising (OOH)",
    category: "Experiential Marketing",
    shortDescription:
      "High-visibility billboards, transit branding, and 3D outdoor media installations.",
    heroImage:
      "https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=1800&q=85",
    overview:
      "Outdoor advertising puts your brand message directly in the public line of sight. We plan, design, and execute traditional OOH, digital billboards (DOOH), transit wraps, and creative 3D outdoor installations in prime urban locations.",
    capabilities: [
      "Prime Billboard & DOOH Media Buying",
      "3D Spatial Outdoor Installations",
      "Airport & Transit Branding",
      "High-Impact Wallscapes & Banners",
      "Illuminated & LED Outdoor Structures",
      "Geotargeted Media Strategy",
    ],
    process: [
      {
        step: "01",
        title: "Location Mapping",
        description: "Selecting high-density traffic arterial routes and key hubs.",
      },
      {
        step: "02",
        title: "Creative Adaptations",
        description: "Formatting designs for large-scale outdoor readability.",
      },
      {
        step: "03",
        title: "Print & Fabrication",
        description: "Producing durable vinyl, LED panels, or 3D mockups.",
      },
      {
        step: "04",
        title: "Mounting & Monitoring",
        description: "Safe site installation, illumination audits, and photo reporting.",
      },
    ],
  },
  {
    id: "exp-8",
    slug: "event-production-and-fabrication",
    title: "Event Production & Fabrication",
    category: "Experiential Marketing",
    shortDescription:
      "In-house technical production, custom carpentry, metalwork, and AV staging.",
    heroImage:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1800&q=85",
    overview:
      "The backbone of physical experiences. Our event production division builds custom set designs, wooden stages, metallic frames, LED structures, and lighting grids to turn creative concepts into safe, engineered physical reality.",
    capabilities: [
      "Custom Set & Stage Carpentry",
      "Metal Structural Fabrication",
      "LED Screen & Audio Rigging",
      "Architectural Lighting Design",
      "3D CNC Printing & Sculpture",
      "Structural Engineering Compliance",
    ],
    process: [
      {
        step: "01",
        title: "Technical Blueprinting",
        description: "Translating creative concepts into engineering schematics.",
      },
      {
        step: "02",
        title: "Off-site Workshop Fabrication",
        description: "Cutting, welding, and painting set elements.",
      },
      {
        step: "03",
        title: "On-site Rigging & Lighting",
        description: "Installing trusses, screens, sound systems, and backdrops.",
      },
      {
        step: "04",
        title: "Safety Audits & Handover",
        description: "Conducting structural checks prior to audience entry.",
      },
    ],
  },

  // Digital Services
  {
    id: "dig-1",
    slug: "social-media-management",
    title: "Social Media Management",
    category: "Digital Marketing",
    shortDescription:
      "Strategic content creation, channel management, and community growth for digital platforms.",
    heroImage:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1800&q=85",
    overview:
      "We help brands maintain an active, high-aesthetic presence across platforms like Instagram, LinkedIn, YouTube, and X. Our team develops monthly content pillars, creates short-form reels, handles community replies, and tracks growth analytics.",
    capabilities: [
      "Content Strategy & Editorial Calendars",
      "Short-form Video Production (Reels / Shorts)",
      "Graphic Design & Carousel Layouts",
      "Community Management & Response",
      "Brand Voice & Copywriting",
      "Monthly Growth & Performance Reporting",
    ],
    process: [
      {
        step: "01",
        title: "Audit & Voice Definition",
        description: "Establishing brand guidelines, typography, and visual aesthetics.",
      },
      {
        step: "02",
        title: "Content Calendar & Shoot",
        description: "Planning monthly themes and executing video/graphic shoots.",
      },
      {
        step: "03",
        title: "Publishing & Engagement",
        description: "Scheduled posts, active story updates, and audience moderation.",
      },
      {
        step: "04",
        title: "Optimization & Insights",
        description: "Analyzing reach, engagement metrics, and refining content mix.",
      },
    ],
  },
  {
    id: "dig-2",
    slug: "performance-marketing",
    title: "Performance Marketing",
    category: "Digital Marketing",
    shortDescription:
      "Data-driven paid ad campaigns across Meta, Google Ads, LinkedIn, and programmatic networks.",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=85",
    overview:
      "Performance marketing engineered to deliver measurable return on ad spend (ROAS). We design conversion funnels, test high-performing ad creatives, optimize bidding algorithms, and continuously refine audience targeting.",
    capabilities: [
      "Meta Ads (Instagram & Facebook)",
      "Google Search & Shopping Ads",
      "LinkedIn B2B Lead Generation",
      "Retargeting & Dynamic Product Ads",
      "Conversion Funnel & Landing Page Optimization",
      "Real-time Analytics & Attribution Tracking",
    ],
    process: [
      {
        step: "01",
        title: "Funnel Strategy",
        description: "Mapping customer acquisition journeys and target CPA targets.",
      },
      {
        step: "02",
        title: "Creative Production",
        description: "Designing conversion-focused static, carousel, and video ads.",
      },
      {
        step: "03",
        title: "Campaign Setup & Testing",
        description: "Launching A/B audience splits and bid strategy testing.",
      },
      {
        step: "04",
        title: "Daily Optimization",
        description: "Scaling winning ad sets and eliminating low-performing angles.",
      },
    ],
  },
  {
    id: "dig-3",
    slug: "seo",
    title: "SEO (Search Engine Optimization)",
    category: "Digital Marketing",
    shortDescription:
      "Technical SEO, on-page optimization, and content strategy to rank high on search engines.",
    heroImage:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1800&q=85",
    overview:
      "Organic search visibility is a long-term compound growth engine. We fix technical web architecture issues, optimize keyword relevance, build authoritative backlink profiles, and publish content that ranks on Google.",
    capabilities: [
      "Technical SEO Audits & Core Web Vitals",
      "Keyword Research & Intent Mapping",
      "On-Page Content & Schema Markup",
      "Authority Link Building Strategies",
      "Local SEO & Google Business Optimization",
      "SEO Analytics & Rank Tracking",
    ],
    process: [
      {
        step: "01",
        title: "Comprehensive Audit",
        description: "Identifying crawl errors, page speed bottlenecks, and indexing gaps.",
      },
      {
        step: "02",
        title: "Keyword & Content Plan",
        description: "Targeting high-intent search terms across funnel stages.",
      },
      {
        step: "03",
        title: "On-Page & Technical Fixes",
        description: "Updating meta tags, semantic HTML markup, and site speed.",
      },
      {
        step: "04",
        title: "Ongoing Authority Building",
        description: "Publishing keyword-aligned content and earning quality backlinks.",
      },
    ],
  },
  {
    id: "dig-4",
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    category: "Digital Marketing",
    shortDescription:
      "End-to-end creator discovery, contract management, campaign strategy, and content delivery.",
    heroImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1800&q=85",
    overview:
      "Influencers bridge the gap between brand messages and authentic human endorsement. We curate nano, micro, and macro creator networks, manage brief delivery, ensure FTC compliance, and measure campaign reach.",
    capabilities: [
      "Creator Discovery & Brand Matchmaking",
      "Campaign Brief & Creative Direction",
      "Contracting, Rate Negotiation & Legal",
      "Content Approval & Quality Checks",
      "Influencer Event Activations",
      "ROI & Engagement Attribution",
    ],
    process: [
      {
        step: "01",
        title: "Creator Selection",
        description: "Filtering influencers by audience demographics, engagement rate, and style.",
      },
      {
        step: "02",
        title: "Brief & Contracting",
        description: "Sending product kits, script guidelines, and usage rights terms.",
      },
      {
        step: "03",
        title: "Content Review & Posting",
        description: "Reviewing draft posts to align with brand safety before live publishing.",
      },
      {
        step: "04",
        title: "Performance Report",
        description: "Tracking total reach, impressions, link clicks, and audience comments.",
      },
    ],
  },
  {
    id: "dig-5",
    slug: "video-and-commercial-production",
    title: "Video & Commercial Production",
    category: "Digital Marketing",
    shortDescription:
      "Cinematic brand films, commercial spots, event recap videos, and digital video assets.",
    heroImage:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1800&q=85",
    overview:
      "High-production video content tells stories like no other format. Our production team handles scripting, storyboarding, camera operations, lighting, sound design, color grading, and editing for television and web media.",
    capabilities: [
      "Scriptwriting & Storyboarding",
      "Cinematography & Multi-camera Shoots",
      "Direction & Talent Casting",
      "Sound Design & Original Score",
      "Color Grading & Post-production",
      "Vertical Video & Social Cutdowns",
    ],
    process: [
      {
        step: "01",
        title: "Pre-Production",
        description: "Developing creative scripts, shot lists, location scouting, and call sheets.",
      },
      {
        step: "02",
        title: "Principal Photography",
        description: "Executing live video production with professional cinema gear.",
      },
      {
        step: "03",
        title: "Post-Production",
        description: "Editing footage, adding sound FX, color grading, and titles.",
      },
      {
        step: "04",
        title: "Multi-Format Export",
        description: "Delivering master 4K cuts alongside social-friendly vertical versions.",
      },
    ],
  },
  {
    id: "dig-6",
    slug: "website-development",
    title: "Website Development",
    category: "Digital Marketing",
    shortDescription:
      "Custom, modern responsive web applications built with modern frontend frameworks.",
    heroImage:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1800&q=85",
    overview:
      "Your website is your digital flagship. We design and build fast, responsive, SEO-ready websites utilizing modern technologies like Next.js, React, Tailwind CSS, and headless CMS platforms for effortless content publishing.",
    capabilities: [
      "UI/UX Design & Interactive Prototypes",
      "Next.js & React App Router Architecture",
      "Responsive & Accessible Component Systems",
      "Headless CMS Integration (Sanity / Strapi)",
      "E-commerce & Web Application Engineering",
      "Performance Optimization & Web Security",
    ],
    process: [
      {
        step: "01",
        title: "UX Architecture & Wireframes",
        description: "Mapping page flows, navigation structures, and user journeys.",
      },
      {
        step: "02",
        title: "Visual Interface Design",
        description: "Crafting modern layouts, typography scale, and color systems.",
      },
      {
        step: "03",
        title: "Frontend Engineering",
        description: "Writing clean, component-driven TypeScript code.",
      },
      {
        step: "04",
        title: "Testing & Deployment",
        description: "Cross-browser testing, SEO audit, and production deployment.",
      },
    ],
  },
  {
    id: "dig-7",
    slug: "creative-design",
    title: "Creative Design & Branding",
    category: "Digital Marketing",
    shortDescription:
      "Visual identity design, brand guidelines, editorial graphics, and marketing assets.",
    heroImage:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1800&q=85",
    overview:
      "Great design elevates brand authority. We build cohesive visual identity systems, logos, typography palettes, brand guidelines, packaging concepts, and marketing collaterals that maintain brand integrity everywhere.",
    capabilities: [
      "Brand Identity & Logo Systems",
      "Visual Style Guides & Typography",
      "Packaging & Print Collateral Design",
      "Marketing Graphics & Digital Banners",
      "Motion Graphics & Iconography",
      "Art Direction for Photography",
    ],
    process: [
      {
        step: "01",
        title: "Brand Discovery",
        description: "Exploring brand values, competitor positioning, and visual moodboards.",
      },
      {
        step: "02",
        title: "Identity Concepts",
        description: "Drafting distinct logo marks, typography pairings, and color palettes.",
      },
      {
        step: "03",
        title: "System Application",
        description: "Testing design systems across business cards, packaging, and digital ads.",
      },
      {
        step: "04",
        title: "Guidelines Delivery",
        description: "Compiling master brand guidelines and asset export libraries.",
      },
    ],
  },
  {
    id: "dig-8",
    slug: "cgi-and-digital-content",
    title: "CGI & Digital Content",
    category: "Digital Marketing",
    shortDescription:
      "3D product animations, virtual environment visualizer, and CGI social teasers.",
    heroImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=85",
    overview:
      "CGI unlocks creative concepts that are impossible or cost-prohibitive to shoot physically. We produce photorealistic 3D product renders, hyper-realistic CGI outdoor media teasers (FOOH), and animated digital assets.",
    capabilities: [
      "Photorealistic 3D Product Renders",
      "3D Product Explainer Animations",
      "Fake Out of Home (FOOH) CGI Videos",
      "Virtual Set & Architectural Visualization",
      "VFX Compositing & Motion FX",
      "AR / VR Digital Assets",
    ],
    process: [
      {
        step: "01",
        title: "3D Modeling",
        description: "Constructing high-poly digital models of products and environments.",
      },
      {
        step: "02",
        title: "Texturing & Lighting",
        description: "Applying realistic materials, reflections, and light setups.",
      },
      {
        step: "03",
        title: "Animation & Camera Movement",
        description: "Choreographing dynamic camera angles and motion paths.",
      },
      {
        step: "04",
        title: "Rendering & Compositing",
        description: "High-resolution ray-trace rendering and final color pass.",
      },
    ],
  },
];
