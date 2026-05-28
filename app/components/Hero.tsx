import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  CreditCard,
  MapPinned,
  Printer,
  QrCode,
  ReceiptText,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import LiveDemo from "./LiveDemo"

const featureStrip = [
  { icon: ReceiptText, label: "Intuitive Menüführung" },
  { icon: CreditCard, label: "Sichere Zahlungen" },
  { icon: Printer, label: "Kasse & Belege integriert" },
  { icon: MapPinned, label: "Standorte zentral verwalten" },
]

const hardwareCallouts = [
  {
    icon: CreditCard,
    title: "Integriertes Payment",
    text: "Kartenzahlung, Wallets und Terminal-Status im Prozess.",
  },
  {
    icon: Printer,
    title: "Thermodrucker",
    text: "Belege, Bestellnummern und Küchenbons sauber ausgeben.",
  },
  {
    icon: QrCode,
    title: "QR & NFC",
    text: "Mobile Payment, Coupons und Identifikation vorbereiten.",
  },
  {
    icon: ShieldCheck,
    title: "Betriebsbereit",
    text: "Robuste Touch-Terminals für frequentierte Standorte.",
  },
]

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_22%,rgba(34,211,238,0.24),transparent_32%),linear-gradient(115deg,#020617_0%,#05070b_48%,#111827_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="container pt-16 md:pt-20 lg:pt-24">
        <div className="grid items-center gap-12 pb-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:pb-20">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-balance font-display text-5xl font-black leading-[0.92] tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Self-Order Software für{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                SOT.KIOSK Kiosks.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
              Verkaufen Sie SOTKIOSK als komplette Bestelllösung auf modernen
              Touch-Terminals - mit Menüführung, Payment, Kasse und
              Standortverwaltung aus einer Hand.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-2xl bg-cyan-300 px-7 text-base font-extrabold text-slate-950 shadow-[0_18px_60px_rgba(34,211,238,0.28)] hover:bg-cyan-200"
              >
                <Link href="#contact">
                  Demo anfragen
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <LiveDemo tone="outline" />
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {featureStrip.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 border-l border-white/14 pl-4 text-sm text-slate-300"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-300">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl animate-fade-in-up [animation-delay:120ms]">
            <div className="absolute -inset-8 rounded-[4rem] bg-cyan-300/15 blur-3xl" />
            <div className="relative grid gap-5 lg:grid-cols-[1fr_12rem]">
              <div className="relative mx-auto w-full max-w-[24rem]">
                <img
                  src="/kiosk-assets/sot-kiosk-hero-kiosk.png"
                  alt="SOT.KIOSK Self-Service Kiosk mit SOTKIOSK Bestelloberfläche"
                  className="relative z-10 h-auto w-full [mask-image:radial-gradient(ellipse_at_center,black_62%,transparent_100%)] drop-shadow-[0_44px_80px_rgba(0,0,0,0.55)]"
                />
                <div className="absolute inset-x-10 bottom-3 h-10 rounded-full bg-black/70 blur-2xl" />
              </div>
              <div className="hidden flex-col justify-center gap-5 lg:flex">
                {hardwareCallouts.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="mt-1 grid h-9 w-9 flex-none place-items-center rounded-xl border border-white/15 bg-white/8 text-cyan-300">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative -mb-16 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_30px_90px_rgba(15,23,42,0.18)] md:p-6">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <BackofficePreview />
            <div className="flex flex-col justify-center p-2 md:p-5">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">
                <BadgeCheck className="h-4 w-4" />
                Zentrale Verwaltung
              </div>
              <h2 className="mt-4 text-balance font-display text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-4xl">
                Volle Kontrolle über Produkte, Preise und Geräte.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Inhalte im Backoffice pflegen, sofort auf kompatible Kiosks
                ausspielen und Bestellungen sauber an Kasse oder Küche
                übergeben.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BackofficePreview() {
  const rows = [
    ["Cheeseburger Menü", "Aktiv", "10,90 €"],
    ["Crispy Chicken", "Aktiv", "10,90 €"],
    ["Limonade Zitrone", "Sync", "3,20 €"],
  ]

  return (
    <div className="overflow-hidden rounded-[1.4rem] border border-slate-200 bg-slate-950 shadow-card">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="font-display text-sm font-black tracking-[-0.06em] text-white">
          SOT<span className="text-cyan-300">KIOSK</span>
        </span>
        <span className="rounded-full bg-cyan-300/12 px-3 py-1 text-xs font-medium text-cyan-200">
          Berlin Mitte
        </span>
      </div>
      <div className="grid md:grid-cols-[9rem_1fr]">
        <div className="hidden border-r border-white/10 p-4 text-sm text-slate-400 md:block">
          {["Übersicht", "Menü", "Bestellungen", "Zahlungen", "Geräte"].map(
            (item, index) => (
              <div
                key={item}
                className={`rounded-xl px-3 py-2 ${
                  index === 0 ? "bg-cyan-300/12 text-cyan-200" : ""
                }`}
              >
                {item}
              </div>
            ),
          )}
        </div>
        <div className="bg-white p-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Menü-Management
              </p>
              <div className="mt-3 space-y-3">
                {rows.map(([name, status, price]) => (
                  <div key={name} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {name}
                      </p>
                      <p className="text-xs text-emerald-600">{status}</p>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      {price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Geräte-Status
              </p>
              <div className="mt-4 space-y-3 text-sm">
                {["Kiosk 01 Eingang", "Kiosk 02 Terrasse", "Kiosk 03 Foodcourt"].map(
                  (device, index) => (
                    <div key={device} className="flex items-center justify-between">
                      <span className="text-slate-700">{device}</span>
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          index === 2 ? "bg-amber-400" : "bg-emerald-500"
                        }`}
                      />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
