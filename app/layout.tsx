import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from '../components/CookieBanner'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SOTKIOSK – Self-Order-Terminals für Restaurants, Kantinen & Supermärkte',
  description:
    'Self-Order-Terminals mit eigener Software für Restaurants, Kantinen und Supermärkte. Miete ab 299 €/Monat oder Kauf ab 4.999 €. Made in Germany, DSGVO-konform.',
  keywords:
    'Self-Order-Terminal, Restaurant Kiosk, Supermarkt Terminal, Kantinen Software, SOTKIOSK, Bestellterminal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <CookieBanner />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
