import { UtensilsCrossed, Building2, ShoppingBag, Check } from "lucide-react"

const markets = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description:
      "Schnellere Tischrotation, höhere Bestellwerte und entlastetes Service-Personal – auch in Stoßzeiten.",
    benefits: [
      "Bestellungen direkt am Tisch oder im Eingang",
      "Foto-Menü mit Upselling-Vorschlägen",
      "Anbindung an gängige Kassensysteme",
    ],
    mockup: <RestaurantMockup />,
  },
  {
    icon: Building2,
    title: "Kantinen",
    description:
      "Reduzierte Schlangen in der Mittagspause, weniger Personalaufwand an der Kasse, klare Tageskarten.",
    benefits: [
      "Wechselnde Tageskarten zentral pflegen",
      "Bargeldlose Abrechnung mit Werksausweis",
      "Vorbestellung über Mitarbeiter-App",
    ],
    mockup: <CafeteriaMockup />,
  },
  {
    icon: ShoppingBag,
    title: "Supermärkte",
    description:
      "Self-Checkout-Lösungen, die Warteschlangen abbauen und Personal für beratungsintensivere Arbeit freisetzen.",
    benefits: [
      "Barcode-Scanner und Waage integrierbar",
      "Diebstahlschutz mit Gewichtsabgleich",
      "Alterskontrolle für Tabak und Alkohol",
    ],
    mockup: <SupermarketMockup />,
  },
]

export default function Markets() {
  return (
    <section id="markets" className="section section-alt">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Branchen</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Lösungen für die Branchen, die täglich tausende Bestellungen
            abwickeln
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            SOTKIOSK ist auf die spezifischen Anforderungen von Gastronomie,
            Betriebsverpflegung und Handel zugeschnitten.
          </p>
        </div>

        <div className="mt-20 space-y-24">
          {markets.map((market, idx) => (
            <div
              key={market.title}
              className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-16 ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-100">
                  <market.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  {market.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {market.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {market.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <Check className="h-3 w-3" />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1">{market.mockup}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MockupFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-blue-100/60 to-transparent blur-2xl" />
      <div className="rounded-[1.75rem] border border-slate-200 bg-white p-2 shadow-card">
        <div className="overflow-hidden rounded-[1.4rem] border border-slate-100 bg-white">
          {children}
        </div>
      </div>
    </div>
  )
}

function RestaurantMockup() {
  const items = [
    { name: "Burger Royal", price: "12,90 €", emoji: "🍔" },
    { name: "Pommes", price: "3,80 €", emoji: "🍟" },
    { name: "Cola 0,4l", price: "3,20 €", emoji: "🥤" },
  ]
  return (
    <MockupFrame>
      <div className="bg-gradient-to-b from-blue-50 to-white p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-blue-600">
          Burger Bar
        </p>
        <p className="mt-1 text-lg font-semibold text-slate-900">
          Was darf es heute sein?
        </p>
      </div>
      <div className="space-y-2 px-3 py-4">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-3"
          >
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-xl shadow-soft">
              {item.emoji}
            </span>
            <p className="flex-1 text-sm font-medium text-slate-900">
              {item.name}
            </p>
            <span className="text-sm font-semibold text-slate-900">
              {item.price}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-5 py-3 text-sm">
        <span className="text-slate-500">Summe</span>
        <span className="font-semibold text-slate-900">19,90 €</span>
      </div>
    </MockupFrame>
  )
}

function CafeteriaMockup() {
  const meals = [
    { name: "Spaghetti Bolognese", tag: "Klassiker", price: "5,80 €" },
    { name: "Linsen-Curry (vegan)", tag: "Veggie", price: "5,20 €" },
    { name: "Fisch mit Reis", tag: "Leicht", price: "6,40 €" },
  ]
  return (
    <MockupFrame>
      <div className="flex items-center justify-between bg-slate-900 px-5 py-4 text-white">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-300">
            Tageskarte
          </p>
          <p className="mt-1 text-sm font-semibold">Mittwoch, 12 – 14 Uhr</p>
        </div>
        <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-medium text-emerald-300">
          Aktiv
        </span>
      </div>
      <div className="space-y-2 px-3 py-4">
        {meals.map((meal, idx) => (
          <div
            key={meal.name}
            className={`flex items-center gap-3 rounded-xl px-3 py-3 ${
              idx === 1 ? "bg-blue-50 ring-1 ring-blue-200" : "bg-slate-50"
            }`}
          >
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-900">{meal.name}</p>
              <p className="mt-0.5 text-xs text-slate-500">{meal.tag}</p>
            </div>
            <span className="text-sm font-semibold text-slate-900">
              {meal.price}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-100 px-5 py-3 text-xs text-slate-500">
        Abrechnung über Werksausweis
      </div>
    </MockupFrame>
  )
}

function SupermarketMockup() {
  const items = [
    { name: "Vollmilch 1l", qty: "2 ×", price: "2,38 €" },
    { name: "Brot Mehrkorn", qty: "1 ×", price: "2,79 €" },
    { name: "Äpfel (kg)", qty: "0,820 kg", price: "1,89 €" },
  ]
  return (
    <MockupFrame>
      <div className="flex items-center justify-between bg-white px-5 py-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-blue-600">
            Self-Checkout
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">Kasse 3</p>
        </div>
        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
          Scan aktiv
        </span>
      </div>
      <div className="space-y-1 border-t border-slate-100 px-3 py-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded-lg px-2 py-2.5 text-sm"
          >
            <span className="text-slate-900">{item.name}</span>
            <div className="flex items-baseline gap-3">
              <span className="text-xs text-slate-500">{item.qty}</span>
              <span className="font-medium text-slate-900">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-5 py-3 text-sm">
        <span className="text-slate-500">Gesamt</span>
        <span className="text-base font-semibold text-slate-900">7,06 €</span>
      </div>
    </MockupFrame>
  )
}
