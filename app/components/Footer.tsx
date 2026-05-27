"use client"

import { Monitor, Mail, Phone, MapPin, Bot, Zap, Shield, Cpu, Globe, Rocket } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Logo from './Logo'

export default function Footer() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 grid-overlay opacity-5" />
      <div className="absolute inset-0 scan-lines" />

      {/* Holographic Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,255,0.05),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Logo height={48} width={200} className="h-12 w-auto" alt="SOT KIOSK – Self-Service Tech" />
            </div>

            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Ihr Partner für <span className="text-cyan-400 font-semibold">innovative Self Order Terminal Lösungen</span>.
              Wir entwickeln und vertreiben <span className="text-purple-400 font-semibold">maßgeschneiderte KI-Kiosk-Systeme</span>
              für Restaurants, Kantinen und Supermärkte.
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, text: "07336 8543", color: "text-cyan-400" },
                { icon: Mail, text: "info@doitauto.de", color: "text-emerald-400" },
                { icon: MapPin, text: "Hauptstr. 18, 89173 Lonsee", color: "text-purple-400" }
              ].map((contact, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                  <div className={`p-2 rounded-lg bg-gray-800/50 group-hover:bg-gray-700/50 transition-colors`}>
                    <contact.icon className={`h-4 w-4 ${contact.color}`} />
                  </div>
                  <span className="font-mono text-sm">{contact.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div
            className="group"
            onMouseEnter={() => setHoveredSection('services')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h3 className="text-lg font-bold mb-6 flex items-center space-x-2">
              <Rocket className="h-5 w-5 text-cyan-400" />
              <span className="font-mono tracking-wider">SERVICES</span>
            </h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { name: "TERMINAL LEASE", icon: Zap },
                { name: "TERMINAL PURCHASE", icon: Monitor },
                { name: "AI SOFTWARE", icon: Bot },
                { name: "QUANTUM SUPPORT", icon: Shield }
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href="#services"
                    className="flex items-center space-x-3 hover:text-cyan-400 transition-colors group/item font-mono text-sm"
                  >
                    <service.icon className="h-4 w-4 opacity-60 group-hover/item:opacity-100" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div
            className="group"
            onMouseEnter={() => setHoveredSection('markets')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h3 className="text-lg font-bold mb-6 flex items-center space-x-2">
              <Globe className="h-5 w-5 text-purple-400" />
              <span className="font-mono tracking-wider">MARKETS</span>
            </h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { name: "RESTAURANTS", href: "#markets" },
                { name: "KANTINEN", href: "#markets" },
                { name: "SUPERMÄRKTE", href: "#markets" },
                { name: "ÜBER UNS", href: "#about" }
              ].map((market, index) => (
                <li key={index}>
                  <Link
                    href={market.href}
                    className="flex items-center space-x-3 hover:text-purple-400 transition-colors group/item font-mono text-sm"
                  >
                    <div className="w-2 h-2 bg-purple-400/60 rounded-full group-hover/item:bg-purple-400 transition-colors"></div>
                    <span>{market.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* System Status Bar */}
        <div className="mt-16 mb-8">
          <div className="cyber-card p-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-400 font-mono text-sm">SYSTEM ONLINE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-400 font-mono text-sm">AI ACTIVE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-purple-400 font-mono text-sm">SECURE</span>
                </div>
              </div>

              <div className="text-gray-400 font-mono text-sm">
                UPTIME: 99.9% | RESPONSE: &lt;50ms
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-500/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-gray-400 font-mono text-sm mb-2">
                &copy; 2024 SOTKIOSK. Alle Rechte vorbehalten.
              </p>
              <p className="text-gray-500 font-mono text-xs">
                POWERED BY QUANTUM AI TECHNOLOGY
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end space-x-4 lg:space-x-6 text-sm">
              {[
                { name: "Impressum", href: "/impressum" },
                { name: "Datenschutz", href: "/datenschutz" },
                { name: "AGB", href: "/agb" },
                { name: "Widerruf", href: "/widerruf" },
                { name: "Cookies", href: "/cookies" }
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors font-mono relative group"
                >
                  {link.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Terminal Signature */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-500 font-mono text-xs">
            <Cpu className="h-3 w-3 animate-pulse" />
            <span>TERMINAL_ID: SOT-KIOSK-2024</span>
            <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
            <span>STATUS: OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
