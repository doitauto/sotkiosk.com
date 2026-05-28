import { Building2, ShoppingBag, UtensilsCrossed } from "lucide-react"
import Reveal from "@/components/Reveal"

const industries = [
  {
    icon: UtensilsCrossed,
    title: "Gastronomie",
    text: "Self-Ordering für Quick-Service, Takeaway, Foodcourts und Restaurants mit hoher Frequenz.",
    points: ["Bestellen & bezahlen ohne Wartezeit", "Menüs, Extras und Upselling steuerbar", "Küche und Kasse bleiben synchron"],
  },
  {
    icon: Building2,
    title: "Kantine",
    text: "Digitale Tageskarten, weniger Kassenaufwand und klare Abläufe für Stoßzeiten.",
    points: ["Essenspläne zentral pflegen", "Standort- und Rollenlogik", "Ausweise oder QR-Prozesse integrierbar"],
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    text: "Self-Service für Märkte, Showrooms und serviceorientierte Verkaufsflächen.",
    points: ["Scanner- und Payment-Flows möglich", "Cross-Selling am Point of Interaction", "Einheitliches Erlebnis pro Standort"],
  },
]

export default function Industries() {
  return (
    <section id="industries" className="section bg-slate-950 text-white">
      <Reveal className="container">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="section-label text-cyan-300">Für Branchen gemacht</p>
            <h2 className="mt-4 text-balance font-display text-4xl font-black leading-tight tracking-[-0.07em] text-white sm:text-5xl">
              Ein System. Viele Einsatzbereiche.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Die Software bleibt gleich, die Oberfläche und Prozesse passen
              sich an Standort, Sortiment und Gerätetyp an.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {industries.map((industry) => (
              <article
                key={industry.title}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-300">
                  <industry.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">
                  {industry.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {industry.text}
                </p>
                <ul className="mt-5 space-y-3 text-sm text-slate-200">
                  {industry.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
