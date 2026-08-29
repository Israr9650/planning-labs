import { MetadataRoute } from "next";
import { projects } from "../data/projects";
import { services } from "../data/services";
import { caseStudies } from "../data/caseStudies";
import { insights } from "../data/insights";
import { jobs } from "../data/jobs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.planninglabs.in";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/work",
    "/case-studies",
    "/insights",
    "/careers",
    "/contact",
    "/search",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseStudyRoutes = caseStudies.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const insightRoutes = insights.map((i) => ({
    url: `${baseUrl}/insights/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const jobRoutes = jobs.map((j) => ({
    url: `${baseUrl}/careers/${j.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...projectRoutes,
    ...serviceRoutes,
    ...caseStudyRoutes,
    ...insightRoutes,
    ...jobRoutes,
  ];
}
