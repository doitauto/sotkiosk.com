import { Quote } from "lucide-react"

// TODO: Echte Kundenstimmen einsetzen. Diese Texte sind realistische Platzhalter,
// die mit Zustimmung der jeweiligen Kunden ersetzt werden sollten.
const testimonials = [
  {
    quote:
      "Seit dem Einsatz der SOTKIOSK-Terminals ist unser durchschnittlicher Bestellwert um 23 % gestiegen. Die Installation war an einem Vormittag erledigt.",
    name: "Markus Berger",
    role: "Inhaber",
    company: "Bistro am Rathaus",
    color: "from-blue-500 to-indigo-500",
  },
  {
    quote:
      "Unsere Mittagspausen-Schlangen sind deutlich kürzer. Die Tageskarten pflegen wir jetzt in 5 Minuten – früher waren es 30.",
    name: "Sandra Klein",
    role: "Leitung Betriebsverpflegung",
    company: "Werkkantine Süd",
    color: "from-emerald-500 to-teal-500",
  },
  {
    quote:
      "Der Self-Checkout läuft stabil, die Anbindung an unser Warenwirtschaftssystem hat sofort funktioniert. Support reagiert schnell.",
    name: "Thomas Reiner",
    role: "IT-Leitung",
    company: "Markt & Frisch",
    color: "from-amber-500 to-orange-500",
  },
]

export default function Testimonials() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Kundenstimmen</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Was unsere Kunden über SOTKIOSK sagen
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
            >
              <Quote
                className="h-6 w-6 text-blue-600"
                aria-hidden="true"
              />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                „{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                <span
                  className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${t.color} text-sm font-semibold text-white`}
                  aria-hidden="true"
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {t.role} · {t.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
