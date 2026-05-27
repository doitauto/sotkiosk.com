import {
  MousePointerClick,
  ShieldCheck,
  Zap,
  BarChart3,
  Plug,
  Languages,
} from "lucide-react"

const features = [
  {
    icon: MousePointerClick,
    title: "Intuitive Bedienoberfläche",
    description:
      "Klare Menüstruktur und große Touch-Targets – Gäste finden ihre Bestellung auch ohne Erklärung in unter 30 Sekunden.",
  },
  {
    icon: ShieldCheck,
    title: "Sichere Zahlungen",
    description:
      "PCI-DSS-konforme Kartenterminals, Apple Pay und Google Pay direkt integriert – inklusive Bewirtungsbeleg.",
  },
  {
    icon: Zap,
    title: "Schnelle Bestellabwicklung",
    description:
      "Bestellungen landen in Echtzeit in Küche und Kasse. Keine doppelte Eingabe, keine verlorenen Tickets.",
  },
  {
    icon: BarChart3,
    title: "Verkaufsanalysen & Reports",
    description:
      "Auswertungen zu Umsatz, Spitzenzeiten und Top-Produkten – täglich, wöchentlich, pro Standort.",
  },
  {
    icon: Plug,
    title: "Anbindung an Ihr Kassensystem",
    description:
      "Standard-Schnittstellen zu gängigen POS- und ERP-Systemen. Migration ohne Neuinstallation Ihrer Infrastruktur.",
  },
  {
    icon: Languages,
    title: "Mehrsprachig",
    description:
      "Deutsch, Englisch, Türkisch, Arabisch und mehr – mit einem Klick. Ideal für internationale Standorte.",
  },
]

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Funktionen</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Alles, was Sie für reibungslose Self-Service-Prozesse brauchen
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Hard- und Software sind aufeinander abgestimmt – mit Funktionen, die
            sich im täglichen Betrieb bewähren.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-card"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-100">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
