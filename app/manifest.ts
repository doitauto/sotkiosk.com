import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SOTKIOSK – Self-Order Hardware & Software",
    short_name: "SOTKIOSK",
    description:
      "Self-Order Hardware & Software von SOTKIOSK: moderne Touch-Terminals mit Menüführung, Payment, Kassen-Anbindung und Standortverwaltung.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#020617",
    lang: "de",
    icons: [
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
    ],
  }
}
