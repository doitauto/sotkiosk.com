import type { Metadata, Viewport } from "next"
import { Manrope, Space_Grotesk } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import CookieBanner from "../components/CookieBanner"
import { Toaster } from "@/components/ui/sonner"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const SITE_URL = "https://sotkiosk.com"
const SITE_TITLE = "SOTKIOSK – Kassensystem & Self-Order für die Gastronomie"
const SITE_DESCRIPTION =
  "SOT POS Kassensystem und SOTKIOSK Self-Order: Kasse, Bestellterminal, Küchen-Display und Backoffice für Ihre Gastronomie. Entdecken Sie Ihr passendes System."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · SOTKIOSK",
  },
  description: SITE_DESCRIPTION,
  keywords:
    "Kassensystem Gastronomie, SOT POS, Self-Order Kiosk, Restaurant Kasse, Self Service Terminal, SOTKIOSK, Bestellterminal, Küchen-Display, Kiosk Hardware",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "SOTKIOSK",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SOTKIOSK – Kassensystem und Self-Order für die Gastronomie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#19342b",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "SOTKIOSK",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.svg`,
      },
      image: `${SITE_URL}/og.png`,
      email: "arif.calhan@sotkiosk.com",
      telephone: "+49 7336 8543",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hauptstr. 18",
        postalCode: "89173",
        addressLocality: "Lonsee",
        addressCountry: "DE",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+49 7336 8543",
        email: "arif.calhan@sotkiosk.com",
        availableLanguage: ["de", "en", "tr"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      inLanguage: "de-DE",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: "SOTKIOSK",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Android",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-[#d8f69b] selection:text-[#19342b]">
        <a href="#main-content" className="skip-link">
          Zum Inhalt springen
        </a>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <Header />
        <main id="main-content" className="site-main">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
