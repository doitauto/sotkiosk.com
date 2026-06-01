import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Reveal from "@/components/Reveal"
import { solutions } from "@/app/data/solutions"

const SITE_URL = "https://sotkiosk.com"

export const metadata: Metadata = {
  title: "Lösungen – Self-Order, Self-Checkout, Spenden & Digital Signage",
  description:
    "SOTKIOSK Lösungen im Überblick: Self-Order Terminal, Restaurant-Kiosk, Döner & Imbiss, digitale Spendensäule, Self-Checkout, Kantine und Digital Signage – eine Plattform.",
  keywords:
    "Self-Order Lösungen, Kiosk Lösungen, Selbstbedienungsterminal, Self-Checkout, digitale Spendensäule, Digital Signage, Bestellterminal",
  alternates: { canonical: "/loesungen" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: `${SITE_URL}/loesungen/`,
    siteName: "SOTKIOSK",
    title: "SOTKIOSK Lösungen – eine Plattform, viele Einsatzbereiche",
    description:
      "Self-Order Terminal, Restaurant-Kiosk, Döner & Imbiss, digitale Spendensäule, Self-Checkout, Kantine und Digital Signage – alle Lösungen von SOTKIOSK im Überblick.",
    images: [{ url: "/og.png", alt: "SOTKIOSK Self-Order Kiosk Lösungen" }],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: `${SITE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Lösungen",
          item: `${SITE_URL}/loesungen/`,
        },
      ],
    },
    {
      "@type": "ItemList",
      itemListElement: solutions.map((solution, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: solution.navLabel,
        url: `${SITE_URL}/loesungen/${solution.slug}/`,
      })),
    },
  ],
}

export default function SolutionsIndexPage() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_22%,rgba(34,211,238,0.24),transparent_32%),linear-gradient(115deg,#020617_0%,#05070b_48%,#111827_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 -z-10 h-40 bg-gradient-to-t from-white to-transparent" />
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label justify-center text-cyan-300">Lösungen</p>
            <h1 className="mt-4 text-balance font-display text-4xl font-black leading-[0.95] tracking-[-0.07em] text-white sm:text-5xl lg:text-6xl">
              Eine Plattform. Viele Einsatzbereiche.
            </h1>
            <p className="mt-6 text-pretty text-lg leading-8 text-slate-300">
              Vom Self-Order Terminal über die digitale Spendensäule bis zum
              Digital Signage: SOTKIOSK deckt alle Selbstbedienungs-Szenarien mit
              einer Software und passender Hardware ab.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <Reveal className="container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/loesungen/${solution.slug}/`}
                className="group flex flex-col overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-card transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-b from-white to-slate-100">
                  <img
                    src={solution.heroImage}
                    alt={solution.heroImageAlt}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-lg font-bold tracking-tight text-slate-950">
                    {solution.navLabel}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                    {solution.cardText}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-cyan-700">
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  )
}
