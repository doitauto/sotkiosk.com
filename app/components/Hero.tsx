import Link from "next/link"
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  { name: "Margherita", price: "8,90 €", emoji: "🍕" },
  { name: "Pasta Carbonara", price: "11,50 €", emoji: "🍝" },
  { name: "Caesar Salad", price: "9,20 €", emoji: "🥗" },
  { name: "Tiramisu", price: "5,80 €", emoji: "🍰" },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 -z-10 bg-grid-slate opacity-50"
        style={{ backgroundSize: "48px 48px", maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)" }}
      />
      <div className="absolute inset-0 -z-10 bg-radial-blue" />

      <div className="container py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Self-Order-Terminals · Made in Germany
            </span>

            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Self-Order-Terminals, die sich für sich selbst bezahlen.
            </h1>

            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              Reduzieren Sie Wartezeiten um bis zu 60 %, steigern Sie den
              durchschnittlichen Bestellwert und entlasten Sie Ihr Personal –
              mit Hard- und Software aus einer Hand.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-6 text-base">
                <Link href="#contact">
                  Beratung anfragen
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-6 text-base"
              >
                <Link href="#pricing">Preise ansehen</Link>
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                500+ Terminals im Einsatz
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                DSGVO-konform
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Made in Germany
              </li>
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-tr from-blue-100 via-blue-50 to-transparent blur-2xl" />
            <TerminalMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function TerminalMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm rotate-0 lg:rotate-[-2deg]">
      <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-3 shadow-elevated">
        <div className="overflow-hidden rounded-[1.4rem] bg-white">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-blue-600">
                Trattoria Bella
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                Hauptgerichte
              </p>
            </div>
            <div className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
              Geöffnet
            </div>
          </div>

          <div className="space-y-2 px-3 py-4">
            {menuItems.map((item, idx) => (
              <div
                key={item.name}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 transition-colors ${
                  idx === 0 ? "bg-blue-50 ring-1 ring-blue-200" : "bg-slate-50"
                }`}
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-xl shadow-soft">
                  {item.emoji}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-500">Verfügbar</p>
                </div>
                <span className="text-sm font-semibold text-slate-900">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-100 bg-slate-50 px-5 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">2 Artikel im Warenkorb</p>
                <p className="text-base font-semibold text-slate-900">
                  20,40 €
                </p>
              </div>
              <button
                type="button"
                disabled
                className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
              >
                Zur Kasse
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-slate-700" />
      </div>
    </div>
  )
}
