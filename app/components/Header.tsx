"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Monitor, Zap, Cpu, Wifi } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-lg shadow-cyan-500/20'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          <Link href="/" className="flex items-center group">
            <Logo height={120} width={480} className="h-[120px] w-auto" alt="SOT KIOSK – Self-Service Tech" />
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {[
              { href: "/", label: "Home", icon: Monitor },
              { href: "/#services", label: "Services", icon: Zap },
              { href: "/#features", label: "Features", icon: Cpu },
              { href: "/#markets", label: "Märkte", icon: Wifi },
              { href: "/#about", label: "Über uns", icon: Monitor }
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-2">
                  <item.icon className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                  <span className="font-medium">{item.label}</span>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
            <Button
              asChild
              className="ml-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              <Link href="/#contact" className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span>Kontakt</span>
              </Link>
            </Button>
          </nav>

          <button
            className="md:hidden relative p-2 text-gray-300 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              {isMenuOpen ? (
                <X className="h-6 w-6 animate-spin" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/30">
            <div className="px-4 py-6 space-y-4">
              {[
                { href: "/", label: "Home", icon: Monitor },
                { href: "/#services", label: "Services", icon: Zap },
                { href: "/#features", label: "Features", icon: Cpu },
                { href: "/#markets", label: "Märkte", icon: Wifi },
                { href: "/#about", label: "Über uns", icon: Monitor }
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5 opacity-70 group-hover:opacity-100" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <Link
                  href="/#contact"
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Zap className="h-5 w-5" />
                  <span>Kontakt</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
