"use client"

import { useId, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  Check,
  ChefHat,
  LayoutDashboard,
  Monitor,
  ScanLine,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import LiveDemo from "./LiveDemo"

type ProductId = "pos" | "kiosk" | "kitchen" | "backoffice"
type Product = {
  id: ProductId
  label: string
  icon: LucideIcon
  eyebrow: string
  title: string
  text: string
  features: string[]
}
const products: Product[] = [
  {
    id: "pos",
    label: "Kassensystem",
    icon: Monitor,
    eyebrow: "SOT POS · DER ARBEITSPLATZ FÜR IHR TEAM",
    title: "Weniger Tippen. Mehr Gastfreundschaft.",
    text: "Artikel finden, Extras wählen, Bons parken und Zahlungen abwickeln. SOT POS bündelt die täglichen Aufgaben an der Theke in einer aufgeräumten Oberfläche.",
    features: [
      "Artikel, Auswahlgruppen & Favoriten",
      "Offene Bons, Erstattungen & Belegjournal",
      "Kassenzählung und X-/Z-Abschluss",
    ],
  },
  {
    id: "kiosk",
    label: "Self-Order Kiosk",
    icon: ScanLine,
    eyebrow: "SOT KIOSK · BESTELLEN IM EIGENEN TEMPO",
    title: "Ihre Gäste haben die Wahl.",
    text: "Appetitliche Produktbilder, verständliche Kategorien und individuell wählbare Extras begleiten Ihre Gäste von der ersten Auswahl bis zur Bestellung.",
    features: [
      "Vor Ort oder zum Mitnehmen",
      "Menüs, Extras & mehrsprachige Bedienung",
      "Payment und Belegdruck je Konfiguration",
    ],
  },
  {
    id: "kitchen",
    label: "Küchen-Display",
    icon: ChefHat,
    eyebrow: "KDS · DER ÜBERBLICK IN DER KÜCHE",
    title: "Jede Bestellung. Klar im Blick.",
    text: "Bestellungen und Produktionshinweise kommen auf dem Küchen-Display zusammen. Ihr Team sieht, was ansteht, und aktualisiert den Status direkt am Bildschirm.",
    features: [
      "Bestelleingang in Echtzeit",
      "Produktionshinweise und Sonderwünsche",
      "Bestellstatus für Küche und Abholung",
    ],
  },
  {
    id: "backoffice",
    label: "Backoffice",
    icon: LayoutDashboard,
    eyebrow: "BACKOFFICE · ALLES AN EINEM ORT",
    title: "Mehr Überblick. Weniger Routine.",
    text: "Pflegen Sie Ihr Sortiment, organisieren Sie Geräte und verwalten Sie Benutzer zentral. So entsteht eine gemeinsame Grundlage für Kasse und Kiosk.",
    features: [
      "Artikel, Kategorien & Verfügbarkeit",
      "Firmen, Filialen, Geräte und Rollen",
      "Auswertungen und Exportfunktionen",
    ],
  },
]

export default function ProductExperience() {
  const [activeId, setActiveId] = useState<ProductId>("pos")
  const id = useId()
  const active =
    products.find((product) => product.id === activeId) ?? products[0]
  return (
    <section id="produkte" className="site-section product-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="site-eyebrow">Ein System. Viele Möglichkeiten.</p>
            <h2>
              Alles, was Ihren
              <br />
              Betrieb weiterbringt.
            </h2>
          </div>
          <p>
            Kasse, Self-Order, Küche und Verwaltung.
            <br className="hidden md:block" /> Aufeinander abgestimmt – für
            Ihren Alltag.
          </p>
        </div>
        <div
          className="product-tabs"
          role="tablist"
          aria-label="Produktbereiche"
        >
          {products.map((product, index) => (
            <button
              key={product.id}
              type="button"
              role="tab"
              id={`${id}-tab-${product.id}`}
              aria-selected={activeId === product.id}
              aria-controls={`${id}-panel`}
              tabIndex={activeId === product.id ? 0 : -1}
              onClick={() => setActiveId(product.id)}
              onKeyDown={(event) => {
                const nextIndex =
                  event.key === "ArrowRight"
                    ? (index + 1) % products.length
                    : event.key === "ArrowLeft"
                      ? (index - 1 + products.length) % products.length
                      : event.key === "Home"
                        ? 0
                        : event.key === "End"
                          ? products.length - 1
                          : null
                if (nextIndex === null) return
                event.preventDefault()
                setActiveId(products[nextIndex].id)
                document
                  .getElementById(`${id}-tab-${products[nextIndex].id}`)
                  ?.focus()
              }}
            >
              <product.icon size={19} />
              {product.label}
            </button>
          ))}
        </div>
        <div
          className="product-panel"
          role="tabpanel"
          id={`${id}-panel`}
          aria-labelledby={`${id}-tab-${activeId}`}
          tabIndex={0}
        >
          <div className="product-panel-copy">
            <p className="site-eyebrow">{active.eyebrow}</p>
            <h3>{active.title}</h3>
            <p>{active.text}</p>
            <ul className="feature-checklist">
              {active.features.map((feature) => (
                <li key={feature}>
                  <Check size={17} />
                  {feature}
                </li>
              ))}
            </ul>
            {activeId === "pos" ? (
              <Link className="text-link" href="/pos/">
                SOT POS kennenlernen <ArrowUpRight size={18} />
              </Link>
            ) : activeId === "kiosk" ? (
              <LiveDemo
                label="Kiosk live ausprobieren"
                className="site-button site-button-dark !h-12 !rounded-full !text-sm"
              />
            ) : (
              <Link className="text-link" href="#contact">
                In einer Demo erleben <ArrowUpRight size={18} />
              </Link>
            )}
          </div>
          <div className={`product-panel-visual visual-${activeId}`}>
            {activeId === "pos" ? (
              <figure>
                <div className="screen-frame">
                  <Image
                    src="/product/sot-pos-studio.webp"
                    width={1440}
                    height={900}
                    alt="Designvorschau der SOT POS Kasse mit Artikeln und Bon"
                    sizes="(max-width: 1023px) 90vw, 720px"
                  />
                </div>
                <figcaption>
                  SOT POS Studio · Designvorschau mit Beispieldaten
                </figcaption>
              </figure>
            ) : activeId === "kiosk" ? (
              <figure>
                <Image
                  src="/product/kiosk-order.webp"
                  width={1000}
                  height={667}
                  alt="Auswahl der Bestellart in der SOTKIOSK Bestelloberfläche"
                  sizes="(max-width: 1023px) 90vw, 720px"
                />
                <figcaption>
                  SOTKIOSK · Beispiel einer gestalteten Bestelloberfläche
                </figcaption>
              </figure>
            ) : activeId === "kitchen" ? (
              <KitchenPreview />
            ) : (
              <BackofficePreview />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function KitchenPreview() {
  return (
    <div className="kitchen-preview">
      <div className="preview-heading">
        <span>
          <ChefHat size={20} /> Küche
        </span>
        <small>Darstellungsbeispiel</small>
      </div>
      <div className="kitchen-columns">
        {[
          {
            number: "042",
            status: "Neu",
            lines: ["2 × Smash Burger", "1 × Pommes", "Ohne Zwiebeln"],
            tone: "new",
          },
          {
            number: "041",
            status: "In Zubereitung",
            lines: ["1 × Green Bowl", "1 × Hauslimonade", "Zum Mitnehmen"],
            tone: "preparing",
          },
          {
            number: "039",
            status: "Abholbereit",
            lines: ["2 × Cappuccino", "1 × Croissant", "Vor Ort"],
            tone: "ready",
          },
        ].map((order) => (
          <div key={order.number} className={`kitchen-ticket ${order.tone}`}>
            <span className="ticket-status">{order.status}</span>
            <strong>#{order.number}</strong>
            <div>
              {order.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <span className="ticket-bottom">
              {order.tone === "ready"
                ? "Bereit zur Ausgabe"
                : "Bestellung im Blick"}
            </span>
          </div>
        ))}
      </div>
      <p className="preview-caption">Vom Bestelleingang bis zur Abholung.</p>
    </div>
  )
}

function BackofficePreview() {
  return (
    <div className="backoffice-preview">
      <div className="preview-heading">
        <span>
          <LayoutDashboard size={20} /> Ihr Backoffice
        </span>
        <small>Darstellungsbeispiel</small>
      </div>
      <div className="backoffice-stats">
        <div>
          <span>Sortiment</span>
          <strong>Einmal pflegen.</strong>
        </div>
        <div>
          <span>Verkaufskanäle</span>
          <strong>Gezielt steuern.</strong>
        </div>
      </div>
      <div className="catalog-preview">
        <div>
          <span>Artikel</span>
          <span>Verfügbar auf</span>
        </div>
        {["Smash Burger", "Green Bowl", "Hauslimonade"].map((name) => (
          <div key={name}>
            <strong>{name}</strong>
            <span>
              <span>POS</span>
              <span>Kiosk</span>
            </span>
          </div>
        ))}
      </div>
      <p className="preview-caption">
        Produkte, Preise und Verfügbarkeit zentral organisiert.
      </p>
    </div>
  )
}
