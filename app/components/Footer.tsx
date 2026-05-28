import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Logo from "./Logo"

const productLinks = [
  { href: "/#software", label: "Software" },
  { href: "/#devices", label: "Geräte" },
  { href: "/#industries", label: "Branchen" },
  { href: "/#pricing", label: "Preise" },
  { href: "/#faq", label: "FAQ" },
]

const companyLinks = [
  { href: "/#about", label: "Über uns" },
  { href: "/#contact", label: "Kontakt" },
]

const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/agb", label: "AGB" },
  { href: "/widerruf", label: "Widerruf" },
  { href: "/cookies", label: "Cookies" },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 text-white">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo width={148} height={32} variant="light" className="h-8 w-[148px]" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              SOTKIOSK liefert Self-Order Software für moderne Touch-Terminals:
              Menüführung, Payment, Kasse und Standortverwaltung für
              Gastronomie, Kantinen und Retail.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                <a href="tel:+4973368543" className="hover:text-white">
                  07336 8543
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                <a href="mailto:info@doitauto.de" className="hover:text-white">
                  info@doitauto.de
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-cyan-300" aria-hidden="true" />
                <span>
                  Hauptstr. 18
                  <br />
                  89173 Lonsee
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Produkt</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-sm font-semibold text-white">Unternehmen</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Rechtliches</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} SOTKIOSK. Alle Rechte vorbehalten.</p>
          <p>Hauptstr. 18 · 89173 Lonsee · USt-ID DE315503467</p>
        </div>
      </div>
    </footer>
  )
}
