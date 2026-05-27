"use client"

import { Award, Users, Lightbulb, Target, Bot, Cpu, Zap, Shield } from 'lucide-react'
import { useState } from 'react'

export default function About() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)

  const values = [
    {
      icon: Shield,
      title: 'QUANTUM QUALITY',
      description: 'Höchste Standards mit KI-Qualitätskontrolle',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      code: 'QUA_001'
    },
    {
      icon: Bot,
      title: 'AI SUPPORT',
      description: 'KI-gestützte Betreuung und 24/7 Quantum-Support',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      code: 'SUP_002'
    },
    {
      icon: Zap,
      title: 'HYPER INNOVATION',
      description: 'Kontinuierliche KI-Evolution unserer Technologie',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10',
      code: 'INN_003'
    },
    {
      icon: Cpu,
      title: 'NEURAL RELIABILITY',
      description: '99.9% Uptime mit Predictive Maintenance',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      code: 'REL_004'
    }
  ]

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-blue-900 via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="absolute inset-0 scan-lines" />

      {/* Holographic Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,0,255,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full cyber-card mb-8 animate-cyber-glow">
            <Bot className="h-5 w-5 text-cyan-400 mr-3 animate-pulse" />
            <span className="text-sm text-cyan-400 font-mono font-bold tracking-wider">ABOUT.SYSTEM</span>
            <div className="ml-3 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="text-gradient animate-shimmer">ÜBER</span>
            <span className="block neon-text font-mono tracking-wider">SOTKIOSK</span>
          </h2>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            <p>
              Wir sind Ihr Partner für <span className="text-cyan-400 font-semibold">innovative Self Order Terminal Lösungen</span>.
              Mit jahrelanger Erfahrung in der Entwicklung und dem Vertrieb von <span className="text-purple-400 font-semibold">KI-Kiosk-Systemen</span>
              haben wir bereits über <span className="neon-text font-mono">500+ Terminals</span> erfolgreich implementiert.
            </p>
            <p>
              Unser Team aus <span className="text-emerald-400 font-semibold">KI-Experten, Entwicklern und Technikern</span> arbeitet kontinuierlich daran,
              die besten Lösungen für Ihre Geschäftsanforderungen zu entwickeln. Von der ersten
              <span className="text-orange-400 font-semibold">Quantum-Beratung</span> bis zur langfristigen <span className="text-pink-400 font-semibold">Neural-Betreuung</span>
              stehen wir Ihnen zur Seite.
            </p>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "TERMINALS", color: "text-cyan-400" },
              { number: "99.9%", label: "UPTIME", color: "text-emerald-400" },
              { number: "24/7", label: "AI SUPPORT", color: "text-purple-400" },
              { number: "100+", label: "CLIENTS", color: "text-orange-400" }
            ].map((stat, index) => (
              <div key={index} className="cyber-card p-6 hover:animate-cyber-glow transition-all duration-300">
                <div className={`text-3xl font-black font-mono ${stat.color} mb-2 animate-digital-flicker`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 font-mono text-xs tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group"
              onMouseEnter={() => setHoveredValue(index)}
              onMouseLeave={() => setHoveredValue(null)}
            >
              <div className={`cyber-card p-8 hover:animate-cyber-glow transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 h-full border-cyan-400/30`}>
                {/* System Code */}
                <div className="absolute top-4 right-4 text-xs font-mono text-gray-500 opacity-50">
                  {value.code}
                </div>

                {/* Status Indicator */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className={`w-2 h-2 ${value.color.replace('text-', 'bg-')} rounded-full animate-pulse`}></div>
                  <div className="text-xs font-mono text-gray-400">ACTIVE</div>
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10 mt-8`}>
                  <value.icon className={`h-10 w-10 ${value.color}`} />
                  {hoveredValue === index && (
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl animate-pulse" />
                  )}
                </div>

                <h3 className={`text-xl font-bold mb-4 transition-colors relative z-10 font-mono tracking-wider ${value.color}`}>
                  {value.title}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors relative z-10 text-sm">
                  {value.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-6 relative">
                  <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${value.color.replace('text-', 'bg-')} rounded-full transition-all duration-1000 ${hoveredValue === index ? 'w-full' : 'w-0'}`}
                    ></div>
                  </div>
                </div>

                {/* Scan Line Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
