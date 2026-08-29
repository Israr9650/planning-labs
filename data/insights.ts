export type Insight = {
  id: string;
  slug: string;
  title: string;
  category: "Experiential" | "Digital" | "Strategy" | "Culture";
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
};

export const insights: Insight[] = [
  {
    id: "ins-1",
    slug: "what-makes-an-experiential-campaign-memorable",
    title: "What Makes an Experiential Campaign Memorable?",
    category: "Experiential",
    excerpt:
      "Physical encounters leave lasting impressions when spatial design, sensory touchpoints, and audience participation converge.",
    content: [
      "In an era where consumers scroll past thousands of digital ads every day, physical experiences offer something digital cannot easily replicate: multi-sensory presence. When an individual steps into a thoughtfully crafted space, their memory registers sound, spatial depth, lighting, and human interaction.",
      "The first pillar of memorable spatial design is clarity of narrative. An event or activation shouldn't feel like a collection of disconnected photo booths. Instead, the layout should guide visitors through an intuitive storyline, starting with curiosity at entry and ending with a clear brand takeaway.",
      "Secondly, active participation beats passive viewing every time. When attendees co-create an outcome—whether through interactive digital displays, customized product sampling, or live challenges—their emotional investment doubles.",
      "Finally, physical events must be designed with post-event digital sharing in mind. Architectural lighting, clear spatial sightlines, and shareable visual moments ensure that a 3-day physical activation reverberates across digital channels for weeks.",
    ],
    author: "Planning Labs Strategy Team",
    date: "August 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1800&q=85",
    featured: true,
  },
  {
    id: "ins-2",
    slug: "why-physical-and-digital-experiences-work-better-together",
    title: "Why Physical and Digital Experiences Work Better Together",
    category: "Strategy",
    excerpt:
      "The most effective brand strategies treat physical events and digital campaigns as complementary layers of a single story.",
    content: [
      "For years, marketing departments treated experiential teams and digital performance teams as separate entities working in silos. Experiential built physical presence; digital ran ads and social media accounts. Today, leading brands recognize that the real magic happens at their intersection.",
      "A physical activation acts as a rich content engine for digital channels. High-quality video captures from a live pop-up turn into high-converting social reels and performance ads. Conversely, digital channels build anticipation before a physical launch and sustain conversation after the doors close.",
      "By integrating QR touchpoints, NFC interactions, and web-based registration tools into physical installations, brands can capture real-time consumer data without disrupting the physical experience.",
      "The takeaway is simple: don't choose between physical and digital. Build unified campaigns where each medium amplifies the strength of the other.",
    ],
    author: "Planning Labs Strategy Team",
    date: "July 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1800&q=85",
    featured: true,
  },
  {
    id: "ins-3",
    slug: "how-brands-can-use-events-beyond-the-event-day",
    title: "How Brands Can Use Events Beyond the Event Day",
    category: "Experiential",
    excerpt:
      "Extending the lifespan of live events through pre-event teaser campaigns, real-time broadcasts, and post-event content archives.",
    content: [
      "A common pitfall in event planning is focusing 90% of energy on the event day itself, leaving post-event momentum on the table. A 1-day conference or product launch shouldn't end when the stage lights go down.",
      "Pre-event engagement begins weeks prior with speaker spotlight clips, countdown teasers, and interactive polls that build audience expectations.",
      "During the event, dedicated media capture teams should produce short recap edits in real-time for immediate social distribution while enthusiasm is at its peak.",
      "Post-event, keynote recordings can be repurposed into blog articles, podcast episodes, short video reels, and downloadable industry whitepapers, giving your event investment a multi-month lifecycle.",
    ],
    author: "Planning Labs Strategy Team",
    date: "June 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1800&q=85",
    featured: false,
  },
  {
    id: "ins-4",
    slug: "building-stronger-brand-experiences-through-content",
    title: "Building Stronger Brand Experiences Through Content",
    category: "Digital",
    excerpt:
      "How consistent visual identity, editorial storytelling, and video production build long-term brand equity.",
    content: [
      "Content is not just fuel for social media algorithms; it is the visual voice of your brand. When every piece of content—from a quick story post to a 3-minute brand film—adheres to a refined aesthetic, audience trust grows exponentially.",
      "Consistency in typography, color grading, and tone of voice communicates professional rigor. It signals that your brand values precision.",
      "Investing in custom photography and video production over generic stock assets ensures your brand stands out with authentic character.",
      "Focus on creating value-driven content that educates, entertains, or inspires your audience rather than broadcasting constant sales pitches.",
    ],
    author: "Planning Labs Content Team",
    date: "May 2026",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1800&q=85",
    featured: false,
  },
];
