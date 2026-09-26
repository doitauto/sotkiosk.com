import Link from "next/link"
import { ArrowUpRight, Mail, Phone } from "lucide-react"
import Logo from "./Logo"

const columns = [
  {
    title: "Die Plattform",
    links: [
      { href: "/pos/", label: "SOT POS Kassensystem" },
      { href: "/#kiosk", label: "Self-Order Kiosk" },
      { href: "/#system", label: "Küche & Backoffice" },
      { href: "/#devices", label: "Hardware" },
      { href: "/#pricing", label: "Pakete & Einrichtung" },
    ],
  },
  {
    title: "Entdecken",
    links: [
      { href: "/loesungen/", label: "Alle Lösungen" },
      { href: "/loesungen/restaurant-kiosk/", label: "Gastronomie" },
      { href: "/loesungen/kantine/", label: "Kantine" },
      { href: "/loesungen/spendensaeule/", label: "Digitale Spendensäule" },
      { href: "/#faq", label: "Häufige Fragen" },
    ],
  },
]
const legalLinks = [
  { href: "/impressum/", label: "Impressum" },
  { href: "/datenschutz/", label: "Datenschutz" },
  { href: "/agb/", label: "AGB" },
  { href: "/widerruf/", label: "Widerruf" },
  { href: "/cookies/", label: "Cookies" },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Logo width={170} height={36} variant="light" />
            <p>
              Gute Technik im Hintergrund.
              <br />
              Guter Service im Mittelpunkt.
            </p>
            <span>
              Kassensystem, Self-Order und mehr.
              <br />
              Für den Alltag Ihrer Gastronomie.
            </span>
          </div>
          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2>{column.title}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="footer-contact">
            <h2>Wir sind für Sie da.</h2>
            <a href="mailto:arif.calhan@sotkiosk.com">
              <Mail size={15} />
              arif.calhan@sotkiosk.com
            </a>
            <a href="tel:+4973368543">
              <Phone size={15} />
              07336 8543
            </a>
            <p>
              Hauptstr. 18
              <br />
              89173 Lonsee, Deutschland
            </p>
            <Link href="/#contact" className="footer-demo">
              Sprechen wir über Ihren Betrieb <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SOTKIOSK</p>
          <nav aria-label="Rechtliches">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <span>Made for hospitality.</span>
        </div>
      </div>
    </footer>
  )
}
