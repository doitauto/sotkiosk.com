"use client"

import { useState } from "react"
import {
  Accessibility,
  Camera,
  CreditCard,
  Palette,
  Printer,
  QrCode,
  Scale,
  ScanLine,
  TabletSmartphone,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Reveal from "@/components/Reveal"
import {
  devices,
  FEATURE_LABELS,
  FORM_FACTORS,
  type DeviceFeature,
  type FormFactor,
} from "@/app/data/devices"

const featureIcons: Record<DeviceFeature, LucideIcon> = {
  payment: CreditCard,
  printer: Printer,
  qrnfc: QrCode,
  scanner: ScanLine,
  scale: Scale,
  camera: Camera,
  accessibility: Accessibility,
}

const callouts: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Touchscreen",
    text: "P-CAP Multi-Touch für klare, schnelle Bedienung.",
    icon: TabletSmartphone,
  },
  {
    title: "Payment-Terminal",
    text: "EC, Kreditkarte und Wallets integrierbar.",
    icon: CreditCard,
  },
  {
    title: "Thermodrucker",
    text: "Schneller Bon-, Küchen- oder Ticketdruck.",
    icon: Printer,
  },
  {
    title: "QR / NFC",
    text: "Scannen, einlösen und identifizieren.",
    icon: QrCode,
  },
  {
    title: "Scanner & Waage",
    text: "Für Retail-, Self-Checkout- und Ticketing-Prozesse.",
    icon: ScanLine,
  },
  {
    title: "Branding möglich",
    text: "Gehäuse, Farben und UI passend zur Marke.",
    icon: Palette,
  },
]

type Filter = "Alle" | FormFactor

const filters: Filter[] = ["Alle", ...FORM_FACTORS]

export default function Devices() {
  const [filter, setFilter] = useState<Filter>("Alle")
  const [showTable, setShowTable] = useState(false)

  const visibleDevices =
    filter === "Alle"
      ? devices
      : devices.filter((device) => device.formFactor === filter)

  return (
    <section id="devices" className="section section-warm">
      <div className="container">
        <Reveal className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="section-label">SOT.KIOSK Geräteplattform</p>
            <h2 className="mt-4 text-balance font-display text-4xl font-black leading-tight tracking-[-0.07em] text-slate-950 sm:text-6xl">
              Viele Geräte. Eine Software.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:ml-auto">
            Von 15,6 bis 32 Zoll – als Standgerät, Wandmontage, Theken-Terminal
            oder wetterfeste Outdoor-Variante. SOTKIOSK läuft auf moderner
            Touch-Hardware mit Payment, Drucker, QR/NFC, Scanner und Waage.
          </p>
        </Reveal>

        {/* Device lineup banner */}
        <Reveal
          delay={80}
          className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-b from-white to-slate-100 shadow-card"
        >
          <img
            src="/kiosk-assets/alibaba/liviao-device-lineup-banner.jpg"
            alt="SOT.KIOSK Geräte: Standgeräte, Wandmontage und Payment-Terminal nebeneinander"
            className="h-auto w-full object-cover"
          />
        </Reveal>

        {/* Filter chips */}
        <div className="mt-12 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
            Bauform
          </span>
          {filters.map((item) => {
            const active = filter === item
            const count =
              item === "Alle"
                ? devices.length
                : devices.filter((d) => d.formFactor === item).length
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={active}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-bold transition-all duration-200",
                  active
                    ? "border-slate-950 bg-slate-950 text-white shadow-card"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50",
                )}
              >
                {item}
                <span
                  className={cn(
                    "ml-1.5 text-xs font-semibold",
                    active ? "text-cyan-300" : "text-slate-400",
                  )}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Device grid, remounted per filter for staggered reveals */}
        <div
          key={filter}
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleDevices.map((device, index) => (
            <Reveal
              key={device.id}
              delay={Math.min(index, 5) * 60}
              as="article"
              className={cn(
                "group flex flex-col overflow-hidden rounded-[1.6rem] border bg-white shadow-card transition-transform duration-300 hover:-translate-y-1",
                device.highlight
                  ? "border-cyan-300 ring-1 ring-cyan-300/40"
                  : "border-slate-200",
              )}
            >
              <div className="relative flex h-64 items-end justify-center overflow-hidden bg-gradient-to-b from-white to-slate-100">
                <img
                  src={device.image}
                  alt={`${device.name} – SOT.KIOSK Self-Order Kiosk`}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                  {device.sizes.map((size) => (
                    <span
                      key={size}
                      className="rounded-full border border-cyan-300 bg-cyan-50/90 px-2.5 py-1 text-xs font-extrabold text-cyan-700 backdrop-blur"
                    >
                      {size}
                    </span>
                  ))}
                </div>
                {device.highlight && (
                  <span className="absolute right-3 top-3 rounded-full bg-slate-950 px-2.5 py-1 text-xs font-bold text-cyan-300">
                    Beliebt
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-700">
                  {device.formFactor}
                </p>
                <h3 className="mt-1.5 text-lg font-bold tracking-tight text-slate-950">
                  {device.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {device.bestFor}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                  {device.features.map((feature) => {
                    const Icon = featureIcons[feature]
                    return (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
                      >
                        <Icon className="h-3.5 w-3.5 text-slate-500" />
                        {FEATURE_LABELS[feature]}
                      </span>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Hardware callouts shared by all devices */}
        <Reveal className="mt-16">
          <h3 className="text-center font-display text-2xl font-black tracking-[-0.05em] text-slate-950">
            Alle Geräte bieten
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {callouts.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-soft"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4 text-base font-bold text-slate-950">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Reveal>

        {/* Collapsible comparison table */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowTable((value) => !value)}
            aria-expanded={showTable}
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 shadow-soft transition hover:border-slate-400 hover:bg-slate-50"
          >
            {showTable ? "Vergleich ausblenden" : "Alle Modelle vergleichen"}
          </button>
        </div>

        {showTable && (
          <div className="mt-8 overflow-x-auto rounded-[1.6rem] border border-slate-200 bg-white shadow-card">
            <table className="w-full min-w-[44rem] text-left text-sm">
              <thead className="bg-slate-950 text-white">
                <tr>
                  {["Modell", "Bauform", "Größe", "Hardware", "Beste Nutzung"].map(
                    (head) => (
                      <th
                        key={head}
                        className="whitespace-nowrap px-4 py-3 font-semibold"
                      >
                        {head}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {devices.map((device) => (
                  <tr key={device.id} className="border-t border-slate-100">
                    <td className="px-4 py-4 font-semibold text-slate-900">
                      {device.name}
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      {device.formFactor}
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      {device.sizes.join(" · ")}
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      {device.features
                        .map((feature) => FEATURE_LABELS[feature])
                        .join(", ")}
                    </td>
                    <td className="px-4 py-4 text-slate-600">{device.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}
