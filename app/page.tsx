import type { Metadata } from "next"
import Hero from "./components/Hero"
import Software from "./components/Software"
import GuestExperience from "./components/GuestExperience"
import Devices from "./components/Devices"
import SystemModules from "./components/SystemModules"
import Workflow from "./components/Workflow"
import Industries from "./components/Industries"
import TrustStrip from "./components/TrustStrip"
import Pricing from "./components/Pricing"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Software />
      <GuestExperience />
      <Devices />
      <SystemModules />
      <Workflow />
      <Industries />
      <TrustStrip />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  )
}
