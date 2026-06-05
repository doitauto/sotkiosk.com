import Link from "next/link"
import { Check, Cloud, Layers3, ServerCog } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Reveal from "@/components/Reveal"

const packages = [
  {
    icon: ServerCog,
    number: "01",
    name: "Gerätepaket Komplett",
    price: "ab 8.999 €",
    cadence: "Kauf",
    description: 'Komplettpaket mit 27" oder 32" SOT.KIOSK Terminal.',
    features: [
      '27" oder 32" KIOSK',
      "SOTKIOSK Software inklusive",
      "Payment-ready Konfiguration",
      "Einrichtung & Inbetriebnahme",
    ],
    highlighted: true,
  },
  {
    icon: Cloud,
    number: "02",
    name: "All-in-One SOT.KIOSK",
    price: "ab 299 €",
    cadence: "/Monat",
    description:
      "Modernes Self-Service-Terminal inklusive Betrieb, Wartung und persönlichem Support.",
    features: [
      "Hochwertiges 27”/32” KIOSK",
      "Einrichtung & Konfiguration",
      "Remote-Service & Wartung",
      "Updates & Monitoring",
    ],
    highlighted: false,
  },
  {
    icon: Layers3,
    number: "03",
    name: "Projekt Rollout",
    price: "auf Anfrage",
    cadence: "",
    description: "Für Multi-Standort Rollouts und individuelle Anforderungen.",
    features: [
      "Individuelle Projektplanung",
      "Standort-Rollout",
      "Schnittstellen & Integration",
      "Persönliche Abstimmung",
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-slate-950 text-white">
      <Reveal className="container">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="section-label text-cyan-300">Gerätepakete + Software</p>
            <h2 className="mt-4 text-balance font-display text-4xl font-black leading-tight tracking-[-0.07em] text-white sm:text-6xl">
              Die passende Lösung für Ihren Standort.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:ml-auto">
            Modular, skalierbar und für den täglichen Einsatz entwickelt. Wählen
            Sie das passende Paket - wir kümmern uns um den Rest.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className={cn(
                "rounded-[1.7rem] border bg-white/[0.04] p-6 transition duration-300",
                item.highlighted
                  ? "border-cyan-300 shadow-[0_0_0_1px_rgba(103,232,249,0.4),0_24px_80px_rgba(34,211,238,0.18)]"
                  : "border-white/14 hover:border-white/30",
              )}
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/35 bg-cyan-300/10 text-cyan-300">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="mt-7 text-sm font-bold text-cyan-300">
                {item.number}
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                {item.name}
              </h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-slate-300">
                {item.description}
              </p>

              <div className="mt-6 border-t border-white/14 pt-6">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-black tracking-tight text-cyan-300">
                    {item.price}
                  </span>
                  {item.cadence && (
                    <span className="pb-1 text-sm text-slate-300">
                      {item.cadence}
                    </span>
                  )}
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center">
          <p className="text-sm leading-6 text-slate-300">
            Alle Pakete sind kombinierbar und werden vor Angebotserstellung auf
            Standort, Hardware und Integrationen abgestimmt.
          </p>
          <Button asChild className="rounded-full bg-cyan-300 px-6 font-extrabold text-slate-950 hover:bg-cyan-200">
            <Link href="#contact">Demo & Angebot anfragen</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
