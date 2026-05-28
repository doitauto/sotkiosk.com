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

export const metadata: Metadata = {
  title: 'SOTKIOSK – Self-Order Software für kompatible Liviao Kiosks',
  description:
    'Premium Self-Order Software für moderne Touch-Terminals: Menüführung, Payment, Kassen-Anbindung und Standortverwaltung für Gastronomie, Kantinen und Retail.',
  keywords:
    'Self-Order Software, Liviao Kiosk Software, Restaurant Kiosk, Self Service Terminal, Kantinen Software, SOTKIOSK, Bestellterminal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-cyan-200 selection:text-slate-950">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <CookieBanner />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
