import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const tiers = [
  {
    name: "Miete",
    price: "ab 299 €",
    cadence: "/Monat",
    description:
      "Flexibel starten ohne hohe Anfangsinvestition. Ideal für einzelne Standorte und Testphasen.",
    features: [
      "Terminal-Hardware inklusive",
      "Software-Updates inklusive",
      "Standard-Support per Mail",
      "Monatlich kündbar nach 12 Monaten",
      "Austauschgerät bei Defekt",
    ],
    cta: "Beratung anfragen",
    href: "#contact",
    highlighted: false,
  },
  {
    name: "Kauf",
    price: "ab 4.999 €",
    cadence: "einmalig",
    description:
      "Dauerhaft im eigenen Besitz. Die wirtschaftlichste Lösung ab dem zweiten Jahr.",
    features: [
      "Einmalige Investition, dauerhafter Besitz",
      "24 Monate Garantie auf die Hardware",
      "Software-Lizenz inklusive",
      "Priority-Support per Telefon",
      "Vor-Ort-Installation buchbar",
    ],
    cta: "Beratung anfragen",
    href: "#contact",
    highlighted: true,
    badge: "Beliebt",
  },
  {
    name: "Enterprise",
    price: "auf Anfrage",
    cadence: "",
    description:
      "Für Ketten, Filialisten und individuelle Integrationen mit mehreren Standorten.",
    features: [
      "Mehrere Standorte zentral verwalten",
      "Custom-Integration mit ERP/POS",
      "Dedizierter Account-Manager",
      "SLA mit garantierter Reaktionszeit",
      "Schulung Ihres Personals",
    ],
    cta: "Kontakt aufnehmen",
    href: "#contact",
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Preise</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Transparente Preise – passend zu Ihrem Modell
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Mieten, kaufen oder individuell konfigurieren – wir finden gemeinsam
            das Modell, das zu Ihrem Standort passt.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-white p-8 transition-all duration-200",
                tier.highlighted
                  ? "border-blue-600 shadow-elevated ring-1 ring-blue-600"
                  : "border-slate-200 shadow-soft hover:shadow-card",
              )}
            >
              {tier.highlighted && tier.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 hover:bg-blue-600">
                  {tier.badge}
                </Badge>
              )}

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{tier.description}</p>
              </div>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-slate-900">
                  {tier.price}
                </span>
                {tier.cadence && (
                  <span className="text-sm text-slate-500">{tier.cadence}</span>
                )}
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={tier.highlighted ? "default" : "outline"}
                className="mt-8 w-full"
                size="lg"
              >
                <Link href={tier.href}>{tier.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Alle Preise zzgl. MwSt. Installation und Schulung optional buchbar.
        </p>
      </div>
    </section>
  )
}
