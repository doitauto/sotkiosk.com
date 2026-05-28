import { CreditCard, FileCheck2, Languages, Percent, type LucideIcon } from "lucide-react"
import Reveal from "@/components/Reveal"

const items: {
  icon: LucideIcon
  title: string
  text: string
}[] = [
  {
    icon: FileCheck2,
    title: "LMIV-konform",
    text: "14 Allergene & 12 Zusatzstoffe sauber gekennzeichnet.",
  },
  {
    icon: Percent,
    title: "Steuer-Automatik",
    text: "19 % vor Ort, 7 % to-go – automatisch je Bestelltyp.",
  },
  {
    icon: CreditCard,
    title: "Payment-Partner",
    text: "SumUp & ZVT-EC-Terminals (PAYONE, Sparkasse, VR Payment).",
  },
  {
    icon: Languages,
    title: "Mehrsprachig",
    text: "Oberfläche pro Standort umschaltbar.",
  },
]

const languages = ["Deutsch", "English", "Türkçe"]

export default function TrustStrip() {
  return (
    <section className="border-y border-slate-200 bg-white py-14 md:py-16">
      <div className="container">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="section-label">Standards & Vertrauen</p>
          <div className="flex flex-wrap items-center gap-2">
            {languages.map((language) => (
              <span
                key={language}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700"
              >
                {language}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={80}
          className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-slate-950 text-cyan-300">
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-extrabold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
