import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Logo from "./Logo"
import { solutions } from "@/app/data/solutions"

const productLinks = [
  { href: "/#software", label: "Software" },
  { href: "/#devices", label: "Geräte" },
  { href: "/#industries", label: "Branchen" },
  { href: "/#pricing", label: "Preise" },
  { href: "/#faq", label: "FAQ" },
]

const solutionLinks = [
  { href: "/loesungen", label: "Alle Lösungen" },
  ...solutions.map((solution) => ({
    href: `/loesungen/${solution.slug}`,
    label: solution.navLabel,
  })),
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

const contactItems = [
  {
    icon: Phone,
    href: "tel:+4973368543",
    label: "Telefon",
    value: "07336 8543",
  },
  {
    icon: Mail,
    href: "mailto:info@doitauto.de",
    label: "E-Mail",
    value: "info@doitauto.de",
  },
  {
    icon: MapPin,
    label: "Anschrift",
    value: "Hauptstr. 18, 89173 Lonsee",
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="overflow-hidden border-t border-slate-900 bg-slate-950 text-white">
      <div className="container py-12 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <Logo width={148} height={32} variant="light" className="h-8 w-[148px]" />
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
              SOTKIOSK liefert Self-Order Software für moderne Touch-Terminals:
              Menüführung, Payment, Kasse und Standortverwaltung für
              Gastronomie, Kantinen und Retail.
            </p>
          </div>

          <nav aria-label="Lösungen">
            <h3 className="text-sm font-semibold text-white">Lösungen</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Produkt und Unternehmen">
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
          </nav>

          <nav aria-label="Rechtliches">
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
          </nav>
        </div>

        <div className="mt-10 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {contactItems.map((item) => {
            const Icon = item.icon
            const content = (
              <>
                <Icon className="h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {item.label}
                  </span>
                  <span className="mt-1 block truncate text-sm text-slate-300">
                    {item.value}
                  </span>
                </span>
              </>
            )

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="flex min-w-0 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-cyan-300/40 hover:bg-white/[0.06]"
              >
                {content}
              </a>
            ) : (
              <div
                key={item.label}
                className="flex min-w-0 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                {content}
              </div>
            )
          })}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row md:items-center">
          <p>© {currentYear} SOTKIOSK. Alle Rechte vorbehalten.</p>
          <p>USt-ID DE315503467</p>
        </div>
      </div>
    </footer>
  )
}
