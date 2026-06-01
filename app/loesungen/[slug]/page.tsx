import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Check, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Reveal from "@/components/Reveal"
import LiveDemo from "@/app/components/LiveDemo"
import Contact from "@/app/components/Contact"
import { solutions, getSolution } from "@/app/data/solutions"

const SITE_URL = "https://sotkiosk.com"

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const solution = getSolution(slug)
  if (!solution) return {}

  const path = `/loesungen/${solution.slug}`
  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    keywords: solution.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url: `${SITE_URL}${path}/`,
      siteName: "SOTKIOSK",
      title: `${solution.metaTitle} · SOTKIOSK`,
      description: solution.metaDescription,
      images: [
        { url: solution.heroImage, alt: solution.heroImageAlt },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${solution.metaTitle} · SOTKIOSK`,
      description: solution.metaDescription,
      images: [solution.heroImage],
    },
  }
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const solution = getSolution(slug)
  if (!solution) notFound()

  const path = `/loesungen/${solution.slug}`
  const related = solutions.filter((item) => item.slug !== solution.slug)

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Start",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Lösungen",
            item: `${SITE_URL}/loesungen/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: solution.navLabel,
            item: `${SITE_URL}${path}/`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: solution.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "Service",
        name: solution.metaTitle,
        description: solution.metaDescription,
        serviceType: solution.navLabel,
        areaServed: "DE",
        url: `${SITE_URL}${path}/`,
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_22%,rgba(34,211,238,0.24),transparent_32%),linear-gradient(115deg,#020617_0%,#05070b_48%,#111827_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 -z-10 h-40 bg-gradient-to-t from-white to-transparent" />

        <div className="container pt-12 md:pt-16 lg:pt-20">
          {/* Breadcrumb */}
          <nav
            aria-label="Brotkrumen"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-400"
          >
            <Link href="/" className="hover:text-white">
              Start
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/loesungen/" className="hover:text-white">
              Lösungen
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-slate-200">{solution.navLabel}</span>
          </nav>

          <div className="grid items-center gap-12 pb-16 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24">
            <div className="max-w-2xl animate-fade-in-up">
              <p className="section-label text-cyan-300">{solution.eyebrow}</p>
              <h1 className="mt-4 text-balance font-display text-4xl font-black leading-[0.95] tracking-[-0.07em] text-white sm:text-5xl lg:text-6xl">
                {solution.h1}
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-slate-300">
                {solution.heroLead}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-14 rounded-2xl bg-cyan-300 px-7 text-base font-extrabold text-slate-950 shadow-[0_18px_60px_rgba(34,211,238,0.28)] hover:bg-cyan-200"
                >
                  <Link href="#contact">
                    Demo &amp; Angebot anfragen
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <LiveDemo
                  tone="outline"
                  url={solution.demo?.url}
                  title={solution.demo?.title}
                  label={solution.demo?.label ?? "Live-Demo starten"}
                />
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg animate-fade-in-up [animation-delay:120ms]">
              <div className="absolute -inset-8 rounded-[4rem] bg-cyan-300/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_30px_90px_rgba(2,6,23,0.45)]">
                <img
                  src={solution.heroImage}
                  alt={solution.heroImageAlt}
                  className="h-auto w-full rounded-[1.2rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-white">
        <Reveal className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label justify-center">Vorteile</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-black leading-tight tracking-[-0.06em] text-slate-950 sm:text-4xl">
              Warum {solution.navLabel} mit SOTKIOSK
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {solution.benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-soft"
              >
                <h3 className="text-lg font-bold text-slate-950">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Features + image */}
      <section className="section section-warm">
        <Reveal className="container">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="section-label">Funktionen</p>
              <h2 className="mt-4 text-balance font-display text-3xl font-black leading-tight tracking-[-0.06em] text-slate-950 sm:text-4xl">
                Alles, was {solution.navLabel} braucht.
              </h2>
              <ul className="mt-8 space-y-4">
                {solution.featureBullets.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-lg bg-slate-950 text-cyan-300">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-base leading-7 text-slate-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-3 shadow-card">
                <img
                  src={solution.heroImage}
                  alt={solution.heroImageAlt}
                  className="h-auto w-full rounded-[1.2rem] object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Use cases */}
      <section className="section bg-slate-950 text-white">
        <Reveal className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label justify-center text-cyan-300">
              Einsatzbereiche
            </p>
            <h2 className="mt-4 text-balance font-display text-3xl font-black leading-tight tracking-[-0.06em] text-white sm:text-4xl">
              Für Ihren Einsatz gemacht.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {solution.useCases.map((useCase) => (
              <article
                key={useCase.title}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur"
              >
                <h3 className="text-lg font-bold text-white">
                  {useCase.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {useCase.text}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="section section-warm">
        <Reveal className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label justify-center">Häufige Fragen</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-black leading-tight tracking-[-0.06em] text-slate-950 sm:text-4xl">
              {solution.navLabel}: kurz erklärt.
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {solution.faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="overflow-hidden rounded-[1.2rem] border border-slate-200 bg-white px-5 shadow-soft data-[state=open]:shadow-card"
                >
                  <AccordionTrigger className="text-left text-base font-bold text-slate-950 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </section>

      {/* Related solutions */}
      <section className="section bg-white">
        <Reveal className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label justify-center">Weitere Lösungen</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-black leading-tight tracking-[-0.06em] text-slate-950 sm:text-4xl">
              Ein System, viele Einsatzbereiche.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/loesungen/${item.slug}/`}
                className="group flex items-center justify-between gap-4 rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-soft transition hover:border-cyan-300 hover:shadow-card"
              >
                <span>
                  <span className="block text-base font-bold text-slate-950">
                    {item.navLabel}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-slate-600">
                    {item.cardText}
                  </span>
                </span>
                <ArrowRight className="h-5 w-5 flex-none text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-cyan-600" />
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Contact (shared) */}
      <Contact />
    </>
  )
}
