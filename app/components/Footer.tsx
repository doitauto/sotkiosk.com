import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Logo from "./Logo"

const productLinks = [
  { href: "/#features", label: "Funktionen" },
  { href: "/#pricing", label: "Preise" },
  { href: "/#markets", label: "Branchen" },
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
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo width={140} height={32} className="h-8 w-auto" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              SOTKIOSK liefert Self-Order-Terminals mit eigener Software für
              Restaurants, Kantinen und Supermärkte – Made in Germany,
              DSGVO-konform.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-600" aria-hidden="true" />
                <a href="tel:+4973368543" className="hover:text-slate-900">
                  07336 8543
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-600" aria-hidden="true" />
                <a href="mailto:info@doitauto.de" className="hover:text-slate-900">
                  info@doitauto.de
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-blue-600" aria-hidden="true" />
                <span>
                  Hauptstr. 18
                  <br />
                  89173 Lonsee
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Produkt</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-slate-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-sm font-semibold text-slate-900">Unternehmen</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-slate-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Rechtliches</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-slate-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-8 text-xs text-slate-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} SOTKIOSK. Alle Rechte vorbehalten.</p>
          <p>Hauptstr. 18 · 89173 Lonsee · USt-ID DE315503467</p>
        </div>
      </div>
    </footer>
  )
}
