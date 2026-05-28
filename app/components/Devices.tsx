import {
  CreditCard,
  Palette,
  Printer,
  QrCode,
  ScanLine,
  TabletSmartphone,
  type LucideIcon,
} from "lucide-react"

type DeviceCallout = {
  title: string
  text: string
  icon: LucideIcon
}

const callouts: DeviceCallout[] = [
  {
    title: "Touchscreen",
    text: "P-CAP Multi-Touch für klare Bedienung.",
    icon: TabletSmartphone,
  },
  {
    title: "Payment-Terminal",
    text: "EC, Kreditkarte und Wallets integrierbar.",
    icon: CreditCard,
  },
  {
    title: "Thermodrucker",
    text: "Schneller Bon- oder Ticketdruck.",
    icon: Printer,
  },
  {
    title: "QR/NFC",
    text: "Scannen, einlösen und identifizieren.",
    icon: QrCode,
  },
  {
    title: "Scanner optional",
    text: "Für Retail- und Ticketing-Prozesse.",
    icon: ScanLine,
  },
  {
    title: "Branding möglich",
    text: "Gehäuse, Farben und UI passend zur Marke.",
    icon: Palette,
  },
]

const deviceRows = [
  ["Kompakt Standgerät", "21,5 Zoll", "Theken, kleine Flächen, Takeaway"],
  ["Floor-Stand Payment Kiosk", "27 Zoll", "Hohe Frequenz, Payment vor Ort"],
  ["Wall-Mount Kiosk", "27-32 Zoll", "Platzsparende Wandflächen"],
]

const devices = [
  {
    size: "21,5 Zoll",
    label: "Kompakt Standgerät",
    image: "/kiosk-assets/liviao-compact-kiosk.png",
    alt: "Kompaktes Liviao-kompatibles Standgerät mit Payment-Terminal",
  },
  {
    size: "27 Zoll",
    label: "Floor-Stand Payment Kiosk",
    image: "/kiosk-assets/liviao-floor-kiosk.png",
    alt: "Liviao-kompatibler Floor-Stand Payment Kiosk mit Drucker und Kartenterminal",
  },
  {
    size: "27-32 Zoll",
    label: "Wall-Mount Kiosk",
    image: "/kiosk-assets/liviao-wall-kiosk.png",
    alt: "Liviao-kompatibler Wall-Mount Kiosk mit Touchscreen und Payment",
  },
]

export default function Devices() {
  return (
    <section id="devices" className="section section-warm">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="section-label">Kompatible Liviao-Geräteplattform</p>
            <h2 className="mt-4 text-balance font-display text-4xl font-black leading-tight tracking-[-0.07em] text-slate-950 sm:text-6xl">
              Geräte, die zur Software passen.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:ml-auto">
            Von 21,5 Zoll bis 32 Zoll, als Standgerät oder Wall-Mount:
            SOTKIOSK läuft auf modernen Touch-Terminals mit Payment, Drucker,
            QR/NFC und optionalem Scanner.
          </p>
        </div>

        <div className="mt-16 grid gap-10 xl:grid-cols-[1.12fr_0.88fr]">
          <div>
            <div className="grid items-end gap-5 sm:grid-cols-3">
              {devices.map((device, index) => (
                <article
                  key={device.label}
                  className={`rounded-[1.8rem] border border-slate-200 bg-white p-4 shadow-card ${
                    index === 1 ? "sm:-translate-y-4" : ""
                  }`}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full border border-cyan-300 bg-cyan-50 px-3 py-1 text-xs font-extrabold text-cyan-700">
                      {device.size}
                    </span>
                  </div>
                  <div className="flex h-[22rem] items-end justify-center overflow-hidden rounded-[1.2rem] bg-gradient-to-b from-white to-slate-100">
                    <img
                      src={device.image}
                      alt={device.alt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-center text-sm font-bold text-slate-950">
                    {device.label}
                  </h3>
                </article>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-card">
              <div className="grid grid-cols-3 bg-slate-950 text-sm font-semibold text-white">
                {["Gerätetyp", "Bildschirmgröße", "Beste Nutzung"].map((item) => (
                  <div key={item} className="border-r border-white/10 px-4 py-3 last:border-r-0">
                    {item}
                  </div>
                ))}
              </div>
              {deviceRows.map(([type, size, usage]) => (
                <div key={type} className="grid grid-cols-3 border-t border-slate-100 text-sm">
                  <div className="px-4 py-4 font-semibold text-slate-900">{type}</div>
                  <div className="px-4 py-4 text-slate-600">{size}</div>
                  <div className="px-4 py-4 text-slate-600">{usage}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {callouts.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
