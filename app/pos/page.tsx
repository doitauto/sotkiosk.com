import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  Check,
  CreditCard,
  FileText,
  LayoutGrid,
  ReceiptText,
  Users,
  Wallet,
} from "lucide-react"
import Contact from "../components/Contact"

export const metadata: Metadata = {
  title: "SOT POS – Kassensystem für Ihre Gastronomie",
  description:
    "Lernen Sie SOT POS kennen: Thekenkasse mit Artikelkatalog, offenen Bons, Zahlungen, Belegjournal und Tagesabschluss. Gemeinsam mit Self-Order und Küche gedacht.",
  alternates: { canonical: "/pos/" },
}

const features = [
  {
    icon: LayoutGrid,
    title: "Verkaufen mit Überblick",
    text: "Artikel über Kategorien, Favoriten oder Suche finden. Auswahlgruppen und Extras direkt in der Bestellung erfassen.",
  },
  {
    icon: ReceiptText,
    title: "Bons im Griff",
    text: "Offene Bons parken und wieder aufnehmen. Belege im Journal nachvollziehen und Erstattungen mit Bezug zum Verkauf bearbeiten.",
  },
  {
    icon: CreditCard,
    title: "Zahlung im Ablauf",
    text: "Bar- und Kartenzahlungsabläufe, Trinkgeld und Erstattungen. Das Kartenterminal wird passend zur Gerätekonfiguration angebunden.",
  },
  {
    icon: Wallet,
    title: "Ein klarer Tagesabschluss",
    text: "Kassenzählung, Geldbewegungen sowie X- und Z-Abschluss unterstützen die tägliche Abrechnung Ihres Betriebs.",
  },
  {
    icon: Users,
    title: "Ihr Team, klare Rechte",
    text: "Bediener und Berechtigungen organisieren. Neue Abläufe im Trainingsbetrieb kennenlernen, bevor der Verkauf startet.",
  },
  {
    icon: FileText,
    title: "Rechnungen & Auswertungen",
    text: "Firmenrechnungen und Berichte verwalten. Exportfunktionen werden bei der Einrichtung auf Ihren Ablauf und die Buchhaltung abgestimmt.",
  },
]

export default function PosPage() {
  return (
    <>
      <section className="pos-page-hero site-section">
        <div className="container">
          <p className="site-eyebrow">
            <span className="status-dot" /> SOT POS · Das Kassensystem
          </p>
          <h1>
            Ihr Team hat viel vor.
            <br />
            <span>Die Kasse denkt mit.</span>
          </h1>
          <p>
            Ein aufgeräumter Arbeitsplatz für den Verkauf an der Theke.
            <br className="hidden md:block" /> Mit allem, was zwischen
            Bestellung und Tagesabschluss zählt.
          </p>
          <Link className="site-button site-button-dark" href="#contact">
            SOT POS in einer Demo erleben <ArrowUpRight size={18} />
          </Link>
          <figure className="pos-page-screen">
            <div className="screen-frame">
              <Image
                src="/product/sot-pos-studio.webp"
                width={1440}
                height={900}
                priority
                alt="SOT POS Studio Designvorschau: Produktkatalog, Kategorien, aktueller Bon und Zahlung"
                sizes="(max-width: 1100px) 94vw, 1100px"
              />
            </div>
            <figcaption>
              SOT POS Studio · Designvorschau mit Beispieldaten. Der
              Funktionsumfang wird in der persönlichen Demo gezeigt.
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="site-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="site-eyebrow">Gemacht für den Arbeitsalltag</p>
              <h2>
                Vom ersten Verkauf
                <br />
                bis zum Feierabend.
              </h2>
            </div>
            <p>
              Weniger Wege durch die Oberfläche. Mehr Klarheit für die Aufgaben,
              die jeden Tag wiederkommen.
            </p>
          </div>
          <div className="pos-feature-grid">
            {features.map((feature) => (
              <article key={feature.title}>
                <feature.icon size={26} strokeWidth={1.5} />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="site-section connected-section">
        <div className="container pos-connected">
          <div>
            <p className="site-eyebrow">Die Kasse ist erst der Anfang</p>
            <h2>
              Am Tresen gestartet.
              <br />
              <span>Im ganzen Betrieb verbunden.</span>
            </h2>
            <p>
              Ergänzen Sie Ihre Kasse um Self-Order Terminals, ein
              Küchen-Display und den digitalen Bestellaufruf. Katalog und Geräte
              verwalten Sie im gemeinsamen Backoffice.
            </p>
            <Link href="/#system" className="site-button site-button-lime">
              Die Plattform entdecken <ArrowUpRight size={18} />
            </Link>
          </div>
          <ul className="pos-connected-list">
            {[
              "Self-Order als zusätzlicher Bestellkanal",
              "Produktionshinweise für die Küche",
              "Bestellnummern auf dem Gäste-Display",
              "Zentrale Katalog- und Geräteverwaltung",
            ].map((text) => (
              <li key={text}>
                <Check size={20} />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="site-section">
        <div className="container pos-introduction">
          <p className="site-eyebrow">Gemeinsam zum passenden Setup</p>
          <h2>
            Erst kennenlernen.
            <br />
            Dann richtig einrichten.
          </h2>
          <div className="pos-onboarding">
            {[
              {
                title: "01 · Ihren Alltag verstehen",
                text: "Wir klären Sortiment, Thekenablauf, Geräte, Zahlungsarten und Anforderungen an die Buchhaltung.",
              },
              {
                title: "02 · SOT POS erleben",
                text: "Sie lernen die Oberfläche und die für Ihren Betrieb relevanten Funktionen in einer persönlichen Demo kennen.",
              },
              {
                title: "03 · Den Start vorbereiten",
                text: "Hardware, Einrichtung und Schulung werden abgestimmt. Die Produktivfreigabe erfolgt für die geprüfte Konfiguration.",
              },
            ].map((step) => (
              <article key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="availability-note">
            <strong>Aktueller Stand von SOT POS</strong>
            <p>
              Thekenverkauf, Belegjournal und Tagesabschluss sind implementiert.
              Die Freigaben für echte Zahlungs- und Druckerhardware sowie die
              TSE-Anbindung sind noch in Prüfung. Verfügbarkeit und
              Einsatzumfang stimmen wir vor einem Angebot verbindlich mit Ihnen
              ab.
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}
