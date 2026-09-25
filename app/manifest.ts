import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SOTKIOSK – Kassensystem & Self-Order",
    short_name: "SOTKIOSK",
    description:
      "SOT POS Kassensystem, Self-Order Kiosk, Küchen-Display und Backoffice für Ihre Gastronomie.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f7f2",
    theme_color: "#19342b",
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
