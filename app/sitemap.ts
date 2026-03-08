import type { MetadataRoute } from "next";

const routes = [
  "",
  "/login",
  "/signup",
  "/request-demo",
  "/contact",
  "/pricing",
  "/docs",
  "/integrations",
  "/modules",
  "/company",
  "/careers",
  "/partners",
  "/news",
  "/support",
  "/status",
  "/guides",
  "/developer-hub",
  "/changelog",
  "/api-reference",
  "/security",
  "/legal",
  "/terms",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://centrbiz.com";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
