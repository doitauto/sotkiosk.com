import {
  CreditCard,
  MapPinned,
  Printer,
  Settings2,
  Utensils,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

const modules = [
  {
    icon: Utensils,
    title: "Menü & Upselling",
    text: "Menüs, Optionen und Empfehlungen zentral steuern und in Echtzeit auf allen Kiosken ausspielen.",
  },
  {
    icon: CreditCard,
    title: "Payment & Bon",
    text: "Zahlungsarten, Belege und Bons konfigurieren. Zahlungen und Belege synchron halten.",
  },
  {
    icon: Settings2,
    title: "Kassen-Anbindung",
    text: "Bestellungen und Zahlungen in Echtzeit an die Kasse senden - inkl. Status-Rückmeldung.",
  },
  {
    icon: MapPinned,
    title: "Standortverwaltung",
    text: "Mandanten, Geräte und Rollen verwalten. Inhalte und Preise standortspezifisch steuern.",
  },
]

const processCards = [
  {
    title: "Backoffice",
    text: "Menüs, Preise und Inhalte zentral erstellen. Änderungen werden in Echtzeit an alle Kioske verteilt.",
    visual: <LaptopMini />,
  },
  {
    title: "Kiosk",
    text: "Kiosk empfängt alle Inhalte und Preise live. Bestellungen und Zahlungen werden sofort übertragen.",
    visual: <KioskMini />,
  },
  {
    title: "POS / Küche",
    text: "Bestellungen landen an der Kasse und in der Küche. Status und Zahlungen bleiben synchron.",
    visual: <PrinterMini />,
  },
]

export default function Software() {
  return (
    <section id="software" className="section bg-white pt-24">
      <div className="container">
        <div className="relative min-h-[62rem] overflow-hidden lg:min-h-[55rem] xl:min-h-[48rem]">
          <div className="relative z-10 max-w-[35rem]">
            <p className="section-label">SOTKIOSK Software</p>
            <h2 className="mt-4 max-w-[31rem] text-balance font-display text-4xl font-black leading-[0.98] tracking-[-0.075em] text-slate-950 sm:text-5xl xl:text-6xl">
              <span className="block">Eine Software.</span>
              <span className="block">Alle Kiosk-Prozesse.</span>
            </h2>
            <p className="mt-6 max-w-[26rem] text-lg leading-8 text-slate-600">
              Menüs, Preise, Zahlungen, Bons und Standorte zentral verwalten -
              auf dem Terminal, im Backoffice und an der Kasse synchron.
            </p>
          </div>

          <div className="relative z-10 mt-10 grid max-w-[20rem] gap-4 sm:max-w-none sm:grid-cols-2 lg:max-w-[17rem] lg:grid-cols-1">
            {modules.map((module) => (
              <FeatureCard key={module.title} {...module} />
            ))}
          </div>

          <div className="pointer-events-none relative z-0 mt-10 lg:absolute lg:left-[18rem] lg:top-[22rem] lg:mt-0 lg:w-[56rem] xl:left-[17rem] xl:top-[20rem] xl:w-[60rem]">
            <div className="absolute inset-x-12 bottom-4 h-16 rounded-full bg-slate-950/14 blur-3xl" />
            <img
              src="/kiosk-assets/software-dashboard-laptop.png"
              alt="SOTKIOSK Backoffice Dashboard mit Menü-Management, Bestellungen, Gerätestatus und Zahlungs-Sync"
              className="relative h-auto w-full max-w-none object-contain drop-shadow-[0_24px_60px_rgba(15,23,42,0.14)]"
            />
          </div>

          <div className="pointer-events-none relative z-0 mx-auto mt-8 w-[18rem] sm:w-[22rem] lg:absolute lg:right-0 lg:top-[3rem] lg:mt-0 lg:w-[21rem] xl:-right-2 xl:top-[1rem] xl:w-[25rem]">
            <div className="absolute inset-x-8 bottom-0 h-16 rounded-full bg-slate-950/20 blur-3xl" />
            <img
              src="/kiosk-assets/software-terminal-kiosk.png"
              alt="SOTKIOSK Terminal-Bestelloberfläche auf einem SOT.KIOSK Kiosk"
              className="relative h-auto w-full max-w-none object-contain drop-shadow-[0_30px_70px_rgba(15,23,42,0.22)]"
            />
          </div>
        </div>

        <div className="relative z-10 mt-8 grid gap-4 lg:grid-cols-3 xl:mt-2">
          {processCards.map((card, index) => (
            <ProcessCard key={card.title} index={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon
  title: string
  text: string
}) {
  return (
    <article className="relative overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white/95 p-5 shadow-soft backdrop-blur">
      <div className="absolute inset-y-0 left-0 w-1 bg-cyan-400" />
      <div className="flex items-start gap-4">
        <div className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-slate-950 text-cyan-300 shadow-soft">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-base font-extrabold tracking-tight text-slate-950">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
        </div>
      </div>
    </article>
  )
}

function ProcessCard({
  title,
  text,
  visual,
  index,
}: {
  title: string
  text: string
  visual: ReactNode
  index: number
}) {
  return (
    <article className="relative rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-soft">
      <div className="flex items-center gap-5">
        <div className="w-28 flex-none">{visual}</div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.12em] text-cyan-700">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
        </div>
      </div>
      {index < processCards.length - 1 && (
        <div className="absolute -right-5 top-1/2 hidden h-px w-10 bg-cyan-300 lg:block">
          <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-cyan-300" />
        </div>
      )}
    </article>
  )
}

function LaptopMini() {
  return (
    <div className="rounded-xl bg-slate-950 p-1 shadow-card">
      <div className="rounded-lg bg-white p-2">
        <div className="h-2 w-10 rounded bg-cyan-300" />
        <div className="mt-2 grid grid-cols-2 gap-1">
          <span className="h-8 rounded bg-slate-100" />
          <span className="h-8 rounded bg-slate-100" />
        </div>
      </div>
      <div className="mx-auto h-1 w-16 rounded-b bg-slate-700" />
    </div>
  )
}

function KioskMini() {
  return (
    <div className="mx-auto w-10 rounded-lg bg-slate-950 p-1 shadow-card">
      <div className="h-16 rounded bg-gradient-to-b from-slate-800 to-slate-950 p-1">
        <span className="mt-8 block h-2 rounded bg-cyan-300" />
      </div>
      <div className="h-10 rounded-b bg-slate-900" />
    </div>
  )
}

function PrinterMini() {
  return (
    <div className="mx-auto w-20 rounded-xl bg-slate-950 p-2 shadow-card">
      <div className="mx-auto mb-2 h-7 w-10 rounded-t bg-white shadow-soft" />
      <Printer className="mx-auto h-8 w-8 text-cyan-300" />
    </div>
  )
}
