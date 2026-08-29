export type Job = {
  id: string;
  slug: string;
  title: string;
  department: "Experiential" | "Digital" | "Design" | "Operations" | "Strategy";
  location: string;
  type: "Full-Time" | "Contract" | "Hybrid";
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
};

export const jobs: Job[] = [
  {
    id: "job-1",
    slug: "senior-experiential-event-producer",
    title: "Senior Experiential Event Producer",
    department: "Experiential",
    location: "Mumbai, India (On-site / Hybrid)",
    type: "Full-Time",
    experience: "4 - 6 Years",
    description:
      "We are looking for an experienced Event Producer to lead spatial setup, AV vendor management, stage execution, and client coordination for high-profile brand experiences and corporate summits.",
    responsibilities: [
      "Manage end-to-end production timelines, budgets, and technical vendor teams.",
      "Lead stage direction, lighting setup, audio production, and live show run-sheets.",
      "Collaborate with 3D designers and spatial architects to translate concepts into fabricated reality.",
      "Serve as primary client contact on-site during build days and event days.",
      "Ensure compliance with venue safety standards and local authority permits.",
    ],
    requirements: [
      "4+ years of hands-on experience producing corporate events, exhibitions, or brand activations.",
      "Deep understanding of stage AV, LED screen rigging, lighting consoles, and structural fabrication.",
      "Proven track record of managing multi-vendor operations under tight turnarounds.",
      "Strong crisis management and real-time problem solving on live show floors.",
      "Excellent communication and team leadership capabilities.",
    ],
  },
  {
    id: "job-2",
    slug: "digital-marketing-campaign-manager",
    title: "Digital Marketing & Performance Manager",
    department: "Digital",
    location: "Mumbai, India (Hybrid)",
    type: "Full-Time",
    experience: "3 - 5 Years",
    description:
      "Drive paid acquisition funnels across Meta, Google Ads, and LinkedIn for agency clients while supervising social media content deployment and analytics.",
    responsibilities: [
      "Design, launch, and optimize performance marketing ad campaigns across digital channels.",
      "Analyze CPA, ROAS, and conversion metrics to optimize ad budgets and bid strategies.",
      "Work closely with creative designers to brief conversion-focused video and image ad assets.",
      "Prepare transparent performance dashboards and strategic growth insights for clients.",
      "Manage social media publishing calendars and campaign distribution channels.",
    ],
    requirements: [
      "3+ years managing paid advertising campaigns with proven performance track records.",
      "Expertise in Meta Ads Manager, Google Ads, Google Analytics 4, and conversion tracking pixels.",
      "Strong analytical mindset with proficiency in Excel/Sheets and data visualization.",
      "Knowledge of SEO best practices and content funnel strategy is a major plus.",
      "Bachelor's degree in Marketing, Communications, or related field.",
    ],
  },
  {
    id: "job-3",
    slug: "3d-spatial-exhibition-designer",
    title: "3D Spatial & Exhibition Designer",
    department: "Design",
    location: "Mumbai, India (On-site)",
    type: "Full-Time",
    experience: "2 - 4 Years",
    description:
      "Conceptualize and render 3D exhibition stalls, stage sets, outdoor pop-ups, and brand experience environments.",
    responsibilities: [
      "Create high-resolution 3D renders and technical elevation drawings for exhibition booths and stage sets.",
      "Develop spatial layouts that optimize visitor flow, lighting, and brand signage placement.",
      "Select materials, finishes, and structural components suitable for fabrication budgets.",
      "Work closely with workshop carpenters and fabricators during structural construction.",
    ],
    requirements: [
      "Proficiency in 3D software (3ds Max, Maya, Blender, SketchUp, or Rhino) and rendering engines (V-Ray, Corona, or Lumion).",
      "Solid knowledge of material properties, modular exhibition systems, and carpentry techniques.",
      "Portfolio showcasing built 3D stall designs or event setups.",
      "Ability to handle tight turnaround deadlines without sacrificing aesthetic quality.",
    ],
  },
  {
    id: "job-4",
    slug: "full-stack-web-developer",
    title: "Full Stack Web Developer (Next.js & React)",
    department: "Digital",
    location: "Mumbai, India / Remote",
    type: "Full-Time",
    experience: "1 - 3 Years",
    description:
      "Build high-performance, modern web applications, client portals, and interactive brand experiences using Next.js, TypeScript, and modern CSS.",
    responsibilities: [
      "Develop responsive, accessible, component-driven web applications.",
      "Integrate headless CMS platforms (Sanity, Strapi) and RESTful/GraphQL APIs.",
      "Optimize website performance, Core Web Vitals, and search engine optimization (SEO).",
      "Collaborate with UI/UX designers to translate Figma design tokens into clean code.",
    ],
    requirements: [
      "Strong command of React, Next.js (App Router), TypeScript, and Tailwind CSS.",
      "Experience with modern Git workflows, responsive design principles, and web performance optimization.",
      "Familiarity with state management, form validation, and server/client component boundaries.",
      "Clean coding habits with emphasis on reusable component design.",
    ],
  },
];
