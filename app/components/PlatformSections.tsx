import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChefHat,
  Coffee,
  CreditCard,
  LayoutDashboard,
  ListOrdered,
  Monitor,
  Printer,
  ScanLine,
  Settings2,
  Store,
  UtensilsCrossed,
} from "lucide-react"
import LiveDemo from "./LiveDemo"

const workflow = [
  {
    icon: ScanLine,
    title: "Bestellen",
    text: "Persönlich an der Kasse oder selbstständig am Kiosk.",
  },
  {
    icon: CreditCard,
    title: "Kassieren",
    text: "Zahlungen und Belege im passenden Ablauf Ihres Betriebs.",
  },
  {
    icon: ChefHat,
    title: "Zubereiten",
    text: "Die Küche erhält Bestellung, Extras und Produktionshinweise.",
  },
  {
    icon: ListOrdered,
    title: "Ausgeben",
    text: "Fertige Bestellnummern übersichtlich am Gäste-Display aufrufen.",
  },
]

export function ConnectedPlatform() {
  return (
    <section id="system" className="site-section connected-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="site-eyebrow">
              Vom ersten Wunsch bis zum letzten Bon
            </p>
            <h2>
              Ein guter Ablauf.
              <br />
              <span>Für alle Beteiligten.</span>
            </h2>
          </div>
          <p>
            Vorne ein entspanntes Gästeerlebnis. Hinten ein Team, das den
            Überblick behält. Dazwischen: SOTKIOSK.
          </p>
        </div>
        <div className="workflow-grid">
          {workflow.map((step, index) => (
            <article key={step.title}>
              <div className="workflow-top">
                <step.icon size={25} strokeWidth={1.5} />
                <span>0{index + 1}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {index < workflow.length - 1 ? (
                <ArrowRight className="workflow-arrow" size={20} />
              ) : null}
            </article>
          ))}
        </div>
        <div className="connected-foot">
          <LayoutDashboard size={20} />
          <p>
            <strong>Im Hintergrund läuft alles zusammen.</strong> Sortiment,
            Geräte und Benutzer zentral im Backoffice verwalten.
          </p>
          <Link href="#produkte">
            Plattform ansehen <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function KioskSection() {
  return (
    <section id="kiosk" className="site-section kiosk-section">
      <div className="container kiosk-grid">
        <div className="kiosk-photo">
          <Image
            src="/product/self-order-kiosk.webp"
            alt="Self-Order Terminal von SOTKIOSK mit integrierter Zahlung und Drucker"
            width={470}
            height={800}
            sizes="(max-width: 767px) 90vw, 500px"
          />
          <span className="photo-chip">
            <span className="status-dot" /> SELF-ORDER. GANZ SELBSTVERSTÄNDLICH.
          </span>
          <div className="photo-caption">
            Ein Touch.
            <br />
            Viele Möglichkeiten.
          </div>
        </div>
        <div className="kiosk-copy">
          <p className="site-eyebrow">SOTKIOSK Self-Order</p>
          <h2>
            Mehr Auswahl.
            <br />
            Mehr Freiraum.
            <br />
            <span>Für Ihre Gäste.</span>
          </h2>
          <p>
            Ein guter Kiosk macht das Bestellen einfach. Ihre Gäste entdecken
            das Menü, stellen ihre Lieblingskombination zusammen und wählen in
            ihrem eigenen Tempo. Ihr Team gewinnt Freiraum für Zubereitung und
            Service.
          </p>
          <div className="kiosk-feature-grid">
            {[
              {
                icon: UtensilsCrossed,
                title: "Ihr Menü im Mittelpunkt",
                text: "Bilder, Kategorien, Auswahlgruppen und Extras.",
              },
              {
                icon: CreditCard,
                title: "Zahlung im Bestellfluss",
                text: "Passende Terminals für Karte und kontaktlose Zahlung.",
              },
              {
                icon: Settings2,
                title: "Im Look Ihrer Marke",
                text: "Farben, Inhalte und Startbildschirm individuell gestalten.",
              },
              {
                icon: Printer,
                title: "Von der Order zum Bon",
                text: "Beleg- und Küchendruck passend zur Konfiguration.",
              },
            ].map((feature) => (
              <div key={feature.title}>
                <feature.icon size={21} strokeWidth={1.6} />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
          <LiveDemo
            label="Kiosk live ausprobieren"
            className="site-button site-button-dark !rounded-full !text-sm"
          />
          <Link
            href="/loesungen/self-order-terminal/"
            className="text-link mt-5"
          >
            Mehr über Self-Order <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function HardwareSection() {
  return (
    <section id="devices" className="site-section hardware-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="site-eyebrow">Der richtige Platz für gute Technik</p>
            <h2>
              Passt zu Ihrem Betrieb.
              <br />
              Und auf Ihre Fläche.
            </h2>
          </div>
          <p>
            Vom kompakten Arbeitsplatz bis zum freistehenden Terminal. Wir
            stimmen Hardware, Payment und Drucker auf Ihren Einsatz ab.
          </p>
        </div>
        <div className="hardware-grid">
          {[
            {
              title: "Die Thekenkasse",
              tag: "SOT POS",
              text: "Übersichtlicher Touch-Arbeitsplatz für Ihre Bestellannahme und den täglichen Verkauf.",
              image: "/product/sot-pos-studio.webp",
              width: 1440,
              height: 900,
              style: "hardware-pos",
              href: "/pos/",
            },
            {
              title: "Das Standgerät",
              tag: "SELF-ORDER",
              text: "Ein sichtbarer Bestellpunkt mit Platz für Touchscreen, Payment und Belegdruck.",
              image: "/kiosk-assets/alibaba/liviao-payment-stand-27.jpg",
              width: 1000,
              height: 1000,
              style: "",
              href: "/#contact",
            },
            {
              title: "Die Wandlösung",
              tag: "PLATZSPAREND",
              text: "Self-Ordering dort, wo die Fläche knapp ist. Die passende Montage planen wir mit Ihnen.",
              image: "/kiosk-assets/alibaba/liviao-wallmount-pair.jpg",
              width: 1000,
              height: 1000,
              style: "",
              href: "/#contact",
            },
          ].map((device) => (
            <Link
              href={device.href}
              key={device.title}
              className="hardware-card"
            >
              <div className={`hardware-image ${device.style}`}>
                <Image
                  src={device.image}
                  alt={device.title}
                  width={device.width}
                  height={device.height}
                  sizes="(max-width: 767px) 90vw, 400px"
                />
                <span>{device.tag}</span>
              </div>
              <div className="hardware-copy">
                <h3>
                  {device.title}
                  <ArrowUpRight size={20} />
                </h3>
                <p>{device.text}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="section-note">
          Abbildungen zeigen Beispielkonfigurationen. Modell, Größe und
          Peripherie werden im Angebot festgelegt. POS-Abbildung:
          Designvorschau.
        </p>
      </div>
    </section>
  )
}

export function IndustrySection() {
  return (
    <section id="industries" className="site-section industry-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="site-eyebrow">So vielseitig wie Gastronomie</p>
            <h2>
              Ihr Konzept.
              <br />
              Unser gemeinsamer Nenner.
            </h2>
          </div>
          <Link className="text-link" href="/loesungen/">
            Alle Lösungen entdecken <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="industry-grid">
          {[
            {
              icon: UtensilsCrossed,
              title: "Restaurant & Quick Service",
              text: "Bestellungen an der Theke und am Kiosk aufnehmen, Sonderwünsche weitergeben und Abholung organisieren.",
              href: "/loesungen/restaurant-kiosk/",
              label: "01",
            },
            {
              icon: Coffee,
              title: "Café, Bäckerei & Imbiss",
              text: "Ein klarer Verkaufsablauf für Kaffee, Snacks und Takeaway – auch wenn sich die nächste Stoßzeit ankündigt.",
              href: "/loesungen/doener-imbiss-kasse/",
              label: "02",
            },
            {
              icon: Store,
              title: "Kantine & Foodcourt",
              text: "Self-Service-Bestellpunkte und ein zentral gepflegtes Sortiment für viele Gäste und unterschiedliche Angebote.",
              href: "/loesungen/kantine/",
              label: "03",
            },
          ].map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="industry-card"
            >
              <div>
                <industry.icon size={28} strokeWidth={1.4} />
                <span>{industry.label}</span>
              </div>
              <h3>{industry.title}</h3>
              <p>{industry.text}</p>
              <span className="text-link">
                Lösung entdecken <ArrowUpRight size={17} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PackageSection() {
  return (
    <section id="pricing" className="site-section package-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="site-eyebrow">Ihr Einstieg in SOTKIOSK</p>
            <h2>
              Klein starten.
              <br />
              Passend weiterdenken.
            </h2>
          </div>
          <p>
            Eine neue Kasse, ein Self-Order Terminal oder ein gemeinsames
            System: Wir stellen das Paket für Ihren Betrieb zusammen.
          </p>
        </div>
        <div className="package-grid">
          {[
            {
              icon: Monitor,
              name: "SOT POS",
              label: "DIE KASSE FÜR IHR TEAM",
              text: "Für den Verkauf an der Theke – mit Katalog, offenen Bons und Tagesabschluss.",
              features: [
                "POS-Software und Einrichtung",
                "Passende Kassenhardware",
                "Abstimmung von Payment und Druck",
              ],
              action: "POS-Demo anfragen",
              highlight: false,
            },
            {
              icon: ScanLine,
              name: "SOT Kiosk",
              label: "DER BESTELLPUNKT FÜR IHRE GÄSTE",
              text: "Self-Ordering mit einem Geräte- und Softwarepaket für Ihren Standort.",
              features: [
                "Touch-Terminal und Kiosk-Software",
                "Menü und Branding einrichten",
                "Payment und Belegausgabe abstimmen",
              ],
              action: "Kiosk-Angebot anfragen",
              highlight: true,
            },
            {
              icon: LayoutDashboard,
              name: "Das Gesamtsystem",
              label: "VOM TRESEN BIS IN DIE KÜCHE",
              text: "Kasse, Kiosk, Küche und Backoffice als gemeinsam geplante Lösung.",
              features: [
                "Individuelle Prozessplanung",
                "Geräte und Module nach Bedarf",
                "Einrichtung und begleiteter Start",
              ],
              action: "Projekt besprechen",
              highlight: false,
            },
          ].map((pack) => (
            <article
              key={pack.name}
              className={`package-card ${pack.highlight ? "highlighted" : ""}`}
            >
              <div className="package-icon">
                <pack.icon size={25} strokeWidth={1.5} />
              </div>
              <p className="site-eyebrow">{pack.label}</p>
              <h3>{pack.name}</h3>
              <p>{pack.text}</p>
              <ul className="feature-checklist">
                {pack.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="package-price">
                Individuelles Angebot<span>Abgestimmt auf Ihren Betrieb</span>
              </div>
              <Link
                href="#contact"
                className={`site-button ${pack.highlight ? "site-button-lime" : "site-button-outline"}`}
              >
                {pack.action}
                <ArrowUpRight size={17} />
              </Link>
            </article>
          ))}
        </div>
        <p className="section-note">
          Der Umfang richtet sich nach Modulen, Hardware und Einrichtung. Vor
          dem Start stimmen wir die technische Konfiguration und benötigten
          Freigaben mit Ihnen ab.
        </p>
      </div>
    </section>
  )
}
