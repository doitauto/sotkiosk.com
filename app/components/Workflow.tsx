import { ArrowRight, Database, MonitorCog, Printer, Smartphone } from "lucide-react"

const steps = [
  {
    icon: MonitorCog,
    title: "Backoffice",
    text: "Menüs, Preise, Rollen und Standorte zentral pflegen.",
  },
  {
    icon: Smartphone,
    title: "Kiosk",
    text: "Gäste bestellen und bezahlen direkt am Terminal.",
  },
  {
    icon: Printer,
    title: "POS / Küche",
    text: "Bestellungen, Bons und Status werden weitergegeben.",
  },
  {
    icon: Database,
    title: "Auswertung",
    text: "Umsätze, Geräte und Sortimente bleiben nachvollziehbar.",
  },
]

export default function Workflow() {
  return (
    <section id="workflow" className="section bg-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label justify-center">Prozess</p>
          <h2 className="mt-4 text-balance font-display text-4xl font-black leading-tight tracking-[-0.07em] text-slate-950 sm:text-5xl">
            Vom Menü bis zum Küchenbon synchron.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            SOTKIOSK verbindet Terminal, Kasse und Standortverwaltung zu einem
            klaren Ablauf. Keine doppelte Pflege, keine losen Insellösungen.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <article className="h-full rounded-[1.6rem] border border-slate-200 bg-slate-50 p-6 shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-cyan-300">
                  <step.icon className="h-5 w-5" />
                </div>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
                  0{index + 1}
                </p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
              </article>
              {index < steps.length - 1 && (
                <div className="absolute right-[-1.15rem] top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-cyan-700 shadow-soft lg:grid">
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
