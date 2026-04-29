import type { MetadataRoute } from "next";

const BASE_URL = "https://mapsupportgunma.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/services/lp", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/line", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/meo", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/sns", changeFrequency: "monthly", priority: 0.9 },
    { path: "/legal/tokushoho", changeFrequency: "yearly", priority: 0.3 },
    { path: "/legal/privacy", changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
