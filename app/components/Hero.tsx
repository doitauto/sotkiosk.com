import Image from "next/image"
import Link from "next/link"
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Monitor,
  MoveUpRight,
  ScanLine,
} from "lucide-react"

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy animate-fade-in-up">
            <p className="site-eyebrow">
              <span className="status-dot" /> Kasse. Kiosk. Küche. Verbunden.
            </p>
            <h1>
              Guter Service.
              <br />
              Beginnt mit einem
              <br />
              <span>guten System.</span>
            </h1>
            <p className="hero-lead">
              Ihr Team kassiert. Ihre Gäste bestellen selbst. SOTKIOSK verbindet
              Kassensystem, Self-Order Kiosk und Küche zu einem durchdachten
              Ablauf.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#contact" className="site-button site-button-dark">
                Persönliche Demo <ArrowUpRight size={18} />
              </Link>
              <Link
                href="#produkte"
                className="site-button site-button-outline"
              >
                System entdecken <ArrowDown size={17} />
              </Link>
            </div>
            <div className="hero-checks">
              <span>
                <Check size={15} /> Software & Hardware
              </span>
              <span>
                <Check size={15} /> Persönliche Einrichtung
              </span>
            </div>
          </div>
          <div
            className="hero-stage animate-fade-in-up"
            aria-label="SOT POS und SOTKIOSK Produktansichten"
          >
            <div className="hero-stage-orbit" aria-hidden="true" />
            <div className="stage-topline">
              <span>ONE CONNECTED EXPERIENCE</span>
              <span>01 — 04</span>
            </div>
            <div className="hero-pos-device">
              <div className="device-camera" aria-hidden="true" />
              <Image
                src="/product/sot-pos-studio.webp"
                alt="SOT POS Studio: Designvorschau mit Artikelübersicht und aktuellem Bon"
                width={1440}
                height={900}
                priority
                sizes="(max-width: 767px) 80vw, 540px"
              />
              <div className="device-wordmark">SOT POS</div>
            </div>
            <div className="hero-kiosk-device">
              <Image
                src="/product/self-order-kiosk.webp"
                alt="SOTKIOSK Bestellterminal mit Touchscreen, Kartenterminal und Belegdrucker"
                width={470}
                height={800}
                priority
                sizes="(max-width: 767px) 30vw, 180px"
              />
            </div>
            <div className="stage-product-label pos-label">
              <Monitor size={16} />
              <span>
                SOT POS<small>Für Ihr Team</small>
              </span>
            </div>
            <div className="stage-product-label kiosk-label">
              <ScanLine size={16} />
              <span>
                SELF-ORDER<small>Für Ihre Gäste</small>
              </span>
            </div>
            <div className="stage-bottomline">
              <span className="status-dot" /> Eine Plattform. Ein klarer Ablauf.
              <MoveUpRight size={16} />
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <p>Für Menschen, die Gastronomie leben.</p>
          <div>
            <span>Restaurants</span>
            <span>Cafés & Bäckereien</span>
            <span>Quick Service</span>
            <span>Foodcourts & Kantinen</span>
          </div>
        </div>
      </div>
    </section>
  )
}
