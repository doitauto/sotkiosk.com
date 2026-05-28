import type { Metadata } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from '../components/CookieBanner'
import { Toaster } from '@/components/ui/sonner'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const SITE_URL = 'https://sotkiosk.com'
const SITE_TITLE = 'SOTKIOSK – Self-Order Hardware & Software'
const SITE_DESCRIPTION =
  'Self-Order Hardware & Software von SOTKIOSK: moderne Touch-Terminals mit Menüführung, Payment, Kassen-Anbindung und Standortverwaltung für Gastronomie, Kantinen und Retail.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords:
    'Self-Order Software, SOT.KIOSK Kiosk Software, Restaurant Kiosk, Self Service Terminal, Kantinen Software, SOTKIOSK, Bestellterminal, Self-Checkout, Kiosk Hardware',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: SITE_URL,
    siteName: 'SOTKIOSK',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'SOTKIOSK Self-Order Kiosk Geräte und Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SOTKIOSK',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Android',
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  offers: {
    '@type': 'Offer',
    price: '299',
    priceCurrency: 'EUR',
    description: 'Software-Lizenz ab 299 € / Monat',
  },
  publisher: {
    '@type': 'Organization',
    name: 'doitauto',
    url: SITE_URL,
    email: 'info@doitauto.de',
    telephone: '+49 7336 8543',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hauptstr. 18',
      postalCode: '89173',
      addressLocality: 'Lonsee',
      addressCountry: 'DE',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-cyan-200 selection:text-slate-950">
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <CookieBanner />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
