import {
  BarChart3,
  Gift,
  Languages,
  MonitorCheck,
  MousePointerClick,
  Network,
  Plug,
  ShieldCheck,
  Tv,
  Zap,
  type LucideIcon,
} from "lucide-react"
import Reveal from "@/components/Reveal"
import LiveDemo from "./LiveDemo"

const modules: {
  icon: LucideIcon
  title: string
  text: string
  tag: string
  demoUrl?: string
  demoTitle?: string
}[] = [
  {
    icon: MonitorCheck,
    title: "Küchen-Display (KDS)",
    text: "Bestellungen erscheinen in Echtzeit in der Küche – mit Status, Filtern und anpassbarem Layout. Keine verlorenen Bons.",
    tag: "Echtzeit · WebSocket",
    demoUrl:
      "https://kiosk.sotkiosk.com/kitchen-display/6e148ec7-34b9-4318-922a-0b724054e3cb",
    demoTitle: "SOTKIOSK Küchen-Display (KDS) – Live-Demo",
  },
  {
    icon: Tv,
    title: "Gäste- & TV-Display",
    text: "Fertige Bestellnummern werden auf dem Bildschirm aufgerufen – mit Animation und Tonsignal für klare Abholung.",
    tag: "Aufruf-Anzeige",
    demoUrl:
      "https://kiosk.sotkiosk.com/tv-display/7647cb27-2179-4e7e-89ff-2596f1441979",
    demoTitle: "SOTKIOSK Gäste- & TV-Display – Live-Demo",
  },
  {
    icon: Gift,
    title: "Treue & Coupons",
    text: "Punkte sammeln, Geburtstagsrabatte und QR-Coupons – fest oder prozentual, zeitlich steuerbar.",
    tag: "Kundenbindung",
  },
  {
    icon: Network,
    title: "Backoffice & Multi-Filiale",
    text: "Company → Filiale → Kiosk: Inhalte, Preise, Rollen und Geräte zentral verwalten – inkl. Auswertungen.",
    tag: "Skaliert mit Standorten",
  },
]

const extras: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: MousePointerClick,
    title: "Intuitive Bedienung",
    text: "Klare Menüs und große Touch-Targets – Bestellung in unter 30 Sekunden.",
  },
  {
    icon: ShieldCheck,
    title: "Sichere Zahlungen",
    text: "PCI-DSS-konforme Terminals, Apple Pay und Google Pay – inkl. Beleg.",
  },
  {
    icon: Zap,
    title: "Schnelle Abwicklung",
    text: "Bestellungen landen sofort in Küche und Kasse – keine Doppeleingabe.",
  },
  {
    icon: BarChart3,
    title: "Analysen & Reports",
    text: "Umsatz, Spitzenzeiten und Top-Produkte – täglich und pro Standort.",
  },
  {
    icon: Plug,
    title: "Kassen-Anbindung",
    text: "Strukturierte Übergabe an gängige POS-, Küchen- und ERP-Systeme.",
  },
  {
    icon: Languages,
    title: "Mehrsprachig",
    text: "Deutsch, Englisch und Türkisch – pro Standort umschaltbar.",
  },
]

export default function SystemModules() {
  return (
    <section id="system" className="section bg-slate-950 text-white">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-label justify-center text-cyan-300">
            Komplettsystem
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-black leading-tight tracking-[-0.07em] text-white sm:text-5xl">
            Mehr als Bestellen – das ganze System.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Self-Order ist nur der Anfang. SOTKIOSK verbindet Terminal, Küche,
            Gäste-Display, Treueprogramm und Backoffice zu einer Plattform.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {modules.map((module, index) => (
            <Reveal
              key={module.title}
              delay={Math.min(index, 3) * 70}
              as="article"
              className="group rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur transition-colors hover:border-cyan-300/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-14 w-14 flex-none place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-300">
                  <module.icon className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-cyan-200">
                  {module.tag}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                {module.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {module.text}
              </p>
              {module.demoUrl && (
                <LiveDemo
                  url={module.demoUrl}
                  title={module.demoTitle}
                  label="Live ansehen"
                  tone="outline"
                  className="mt-5 h-11 px-5 text-sm"
                />
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
            Außerdem an Bord
          </p>
          <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {extras.map((extra) => (
              <div key={extra.title} className="flex gap-4">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-xl border border-white/12 bg-white/[0.05] text-cyan-300">
                  <extra.icon className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">{extra.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {extra.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
