import type { MetadataRoute } from "next"
import { solutions } from "./data/solutions"

export const dynamic = "force-static"

const BASE_URL = "https://sotkiosk.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const entries: MetadataRoute.Sitemap = [
    { path: "", priority: 1 },
    { path: "loesungen", priority: 0.9 },
    ...solutions.map((solution) => ({
      path: `loesungen/${solution.slug}`,
      priority: 0.8,
    })),
    ...["agb", "cookies", "datenschutz", "impressum", "widerruf"].map((path) => ({
      path,
      priority: 0.4,
    })),
  ].map(({ path, priority }) => ({
    url: path ? `${BASE_URL}/${path}/` : `${BASE_URL}/`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }))

  return entries
}
