import type { Metadata } from "next"
import Hero from "./components/Hero"
import ProductExperience from "./components/ProductExperience"
import {
  ConnectedPlatform,
  KioskSection,
  HardwareSection,
  IndustrySection,
  PackageSection,
} from "./components/PlatformSections"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"

export const metadata: Metadata = {
  title: {
    absolute: "SOTKIOSK – Kassensystem & Self-Order für die Gastronomie",
  },
  description:
    "SOT POS Kassensystem und SOTKIOSK Self-Order: Kasse, Bestellterminal, Küchen-Display und Backoffice für Ihre Gastronomie. Jetzt entdecken und Demo vereinbaren.",
  alternates: { canonical: "/" },
}

export default function Home() {
  return (
    <>
      <Hero />
      <ProductExperience />
      <ConnectedPlatform />
      <KioskSection />
      <HardwareSection />
      <IndustrySection />
      <PackageSection />
      <FAQ />
      <Contact />
    </>
  )
}
