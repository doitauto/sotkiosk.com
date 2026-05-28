import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const BASE_URL = "https://sotkiosk.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const paths = ["", "agb", "cookies", "datenschutz", "impressum", "widerruf"]

  return paths.map((path) => ({
    url: path ? `${BASE_URL}/${path}/` : `${BASE_URL}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: path ? 0.5 : 1,
  }))
}
