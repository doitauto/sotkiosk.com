"use client"

import { useState } from "react"
import {
  CreditCard,
  Hand,
  ListOrdered,
  ShoppingBag,
  Sparkles,
  Store,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Reveal from "@/components/Reveal"

type OrderType = "vorort" | "mitnehmen"

const orderTypes: {
  id: OrderType
  label: string
  icon: LucideIcon
  image: string
  alt: string
}[] = [
  {
    id: "vorort",
    label: "Vor Ort",
    icon: UtensilsCrossed,
    image: "/kiosk-assets/screens/welcome-doener.png",
    alt: "SOTKIOSK Bestelltyp-Auswahl: Vor Ort genießen",
  },
  {
    id: "mitnehmen",
    label: "Zum Mitnehmen",
    icon: ShoppingBag,
    image: "/kiosk-assets/screens/order-type-mitnehmen.png",
    alt: "SOTKIOSK Bestelltyp-Auswahl: Zum Mitnehmen / To-Go",
  },
]

const steps: { title: string; text: string; icon: LucideIcon }[] = [
  {
    icon: Hand,
    title: "Willkommen",
    text: "Der Startbildschirm begrüßt Gäste – inkl. zeitgesteuerter Aktionen und Promos.",
  },
  {
    icon: UtensilsCrossed,
    title: "Bestelltyp",
    text: "Vor Ort oder zum Mitnehmen – die Steuer (19 % / 7 %) wird automatisch gesetzt.",
  },
  {
    icon: ListOrdered,
    title: "Menü & Extras",
    text: "Kategorien, Varianten, Add-ons und Sonderwünsche – mit Allergen-Kennzeichnung.",
  },
  {
    icon: Sparkles,
    title: "Warenkorb",
    text: "Bestellung prüfen, Coupon einlösen und Treuepunkte sammeln.",
  },
  {
    icon: CreditCard,
    title: "Bezahlen",
    text: "Karte, Wallet oder bar – mit Beleg und automatischem Küchenbon.",
  },
  {
    icon: Store,
    title: "Abholung",
    text: "Bestellnummer wird vergeben und auf dem Gäste-Display aufgerufen.",
  },
]

export default function GuestExperience() {
  const [active, setActive] = useState<OrderType>("vorort")
  const current = orderTypes.find((type) => type.id === active) ?? orderTypes[0]

  return (
    <section
      id="erlebnis"
      className="section bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-label justify-center">Gäste-Erlebnis</p>
          <h2 className="mt-4 text-balance font-display text-4xl font-black leading-tight tracking-[-0.07em] text-slate-950 sm:text-5xl">
            So bestellen Ihre Gäste.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Vom Willkommensbildschirm bis zur Bezahlung – in Sekunden, in
            mehreren Sprachen und im Look Ihrer Marke. Echte Oberflächen aus dem
            laufenden Betrieb.
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Interaktiver Bestelltyp-Screen im Kiosk-Rahmen */}
          <Reveal>
            <div className="mb-5 inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-soft">
              {orderTypes.map((type) => {
                const activeType = type.id === active
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setActive(type.id)}
                    aria-pressed={activeType}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all duration-200",
                      activeType
                        ? "bg-slate-950 text-white shadow-card"
                        : "text-slate-600 hover:text-slate-900",
                    )}
                  >
                    <type.icon className="h-4 w-4" />
                    {type.label}
                  </button>
                )
              })}
            </div>

            <figure className="relative rounded-[1.8rem] border-[6px] border-slate-950 bg-slate-950 shadow-elevated">
              <div className="overflow-hidden rounded-[1.2rem]">
                <img
                  key={current.id}
                  src={current.image}
                  alt={current.alt}
                  className="h-auto w-full animate-fade-in-up object-cover"
                />
              </div>
              <figcaption className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-300 px-4 py-1 text-xs font-extrabold uppercase tracking-wide text-slate-950 shadow-card">
                {current.label}
              </figcaption>
            </figure>
            <p className="mt-6 text-center text-sm text-slate-500">
              Touch-Auswahl auf dem Terminal – Inhalte, Bilder und Sprache je
              Standort und Marke konfigurierbar.
            </p>
          </Reveal>

          {/* Ablauf-Schritte */}
          <Reveal delay={120}>
            <ol className="space-y-1">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-slate-950 text-cyan-300">
                      <step.icon className="h-5 w-5" />
                    </span>
                    {index < steps.length - 1 && (
                      <span className="my-1 w-px flex-1 bg-slate-200" />
                    )}
                  </div>
                  <div className="pb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-cyan-700">
                        0{index + 1}
                      </span>
                      <h3 className="text-base font-bold text-slate-950">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        {/* Weitere Betriebsmodi: Spenden-Kiosk */}
        <Reveal className="mt-16 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card">
          <div className="grid items-center gap-8 p-6 sm:grid-cols-[auto_1fr] sm:p-8">
            <div className="mx-auto w-44 overflow-hidden rounded-[1.4rem] border-4 border-slate-950 bg-slate-950 shadow-elevated">
              <img
                src="/kiosk-assets/screens/payment-amount.png"
                alt="SOTKIOSK im Spenden-Kiosk-Modus: Spendenbetrag wählen"
                className="h-auto w-full"
              />
            </div>
            <div>
              <p className="section-label">Mehr als Gastronomie</p>
              <h3 className="mt-3 text-balance font-display text-2xl font-black tracking-[-0.05em] text-slate-950 sm:text-3xl">
                Auch als Spenden-Kiosk konfigurierbar.
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Dieselbe Plattform, ein anderer Modus: Spendenbeträge,
                Kampagnen-Branding und ein eigener Ablauf – ohne separate
                Software. Self-Order, Self-Checkout und Spenden laufen auf einer
                Basis.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
