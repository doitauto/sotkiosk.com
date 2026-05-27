import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from '../components/CookieBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SOTKIOSK - Self Order Terminals für Restaurants & Supermärkte',
  description: 'Professionelle Self Order Terminals mit eigener Software für Restaurants, Kantinen und Supermärkte. Miete oder Kauf verfügbar von SOTKIOSK.',
  keywords: 'Self Order Terminal, Restaurant Kiosk, Supermarkt Terminal, Kantinen Software, SOTKIOSK',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
