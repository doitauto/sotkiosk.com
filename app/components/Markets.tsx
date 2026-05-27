"use client"

import { UtensilsCrossed, Building2, ShoppingBag, Bot, Zap, Shield } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Markets() {
  const [hoveredMarket, setHoveredMarket] = useState<number | null>(null)

  const markets = [
    {
      icon: UtensilsCrossed,
      title: 'RESTAURANTS',
      description: 'KI-optimierte Bestellprozesse mit Neural-Network-Empfehlungen für maximale Effizienz.',
      benefits: ['QUANTUM ORDERING', 'AI RECOMMENDATIONS', 'NEURAL ANALYTICS'],
      image: '/placeholder-o5n7t.png',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      code: 'REST_001'
    },
    {
      icon: Building2,
      title: 'KANTINEN',
      description: 'Hochleistungs-Terminals für Betriebskantinen mit Predictive-Load-Management.',
      benefits: ['PEAK-TIME AI', 'CASHLESS MATRIX', 'SMART PLANNING'],
      image: '/modern-cafeteria-digital-order.png',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      code: 'CANT_002'
    },
    {
      icon: ShoppingBag,
      title: 'SUPERMÄRKTE',
      description: 'Self-Checkout Revolution mit integrierter KI-Warensicherung und Fraud-Detection.',
      benefits: ['ZERO QUEUE AI', 'SMART SECURITY', 'HYPER CHECKOUT'],
      image: '/modern-self-checkout.png',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10',
      code: 'SUPER_003'
    }
  ]

  return (
    <section id="markets" className="py-32 bg-gradient-to-b from-purple-900 via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="absolute inset-0 scan-lines" />

      {/* Holographic Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(0,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(255,0,255,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full cyber-card mb-8 animate-cyber-glow">
            <Bot className="h-5 w-5 text-cyan-400 mr-3 animate-pulse" />
            <span className="text-sm text-cyan-400 font-mono font-bold tracking-wider">TARGET.MARKETS</span>
            <div className="ml-3 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-gradient animate-shimmer">UNSERE</span>
            <span className="block neon-text-pink font-mono tracking-wider">MÄRKTE</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            SOTKIOSK Terminals sind <span className="text-cyan-400 font-semibold">vielseitig einsetzbar</span> und perfekt angepasst
            an die spezifischen Anforderungen verschiedener <span className="text-purple-400 font-semibold">KI-optimierter Branchen</span>.
          </p>
        </div>

        <div className="space-y-20">
          {markets.map((market, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
              <div className="flex-1">
                <div className="max-w-lg">
                  {/* System Code */}
                  <div className="text-xs font-mono text-gray-500 mb-4 opacity-50">
                    {market.code}
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 ${market.bgColor} rounded-2xl flex items-center justify-center mb-8 group hover:scale-110 hover:rotate-6 transition-all duration-500 relative`}>
                    <market.icon className={`h-10 w-10 ${market.color}`} />
                    {hoveredMarket === index && (
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl animate-pulse" />
                    )}
                  </div>

                  <h3 className={`text-4xl font-bold mb-6 font-mono tracking-wider ${market.color}`}>
                    {market.title}
                  </h3>

                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    {market.description}
                  </p>

                  <ul className="space-y-4">
                    {market.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-400 group">
                        <div className={`w-3 h-3 ${market.color.replace('text-', 'bg-')} rounded-full mr-4 animate-pulse`} />
                        <span className="font-mono text-sm group-hover:text-gray-300 transition-colors">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Status */}
                  <div className="mt-8 flex items-center space-x-2 text-sm font-mono">
                    <div className={`w-2 h-2 ${market.color.replace('text-', 'bg-')} rounded-full animate-pulse`}></div>
                    <span className={market.color}>DEPLOYMENT READY</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative group">
                  {/* Holographic Frame */}
                  <div className={`absolute inset-0 ${market.color.replace('text-', 'bg-')}/20 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse`} />

                  {/* Terminal Frame */}
                  <div className="relative cyber-card p-4 hover:animate-cyber-glow">
                    <Image
                      src={market.image || "/placeholder.svg"}
                      alt={market.title}
                      width={600}
                      height={400}
                      className="relative rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Scan Line Overlay */}
                    <div className="absolute inset-4 bg-gradient-to-t from-transparent via-cyan-400/10 to-transparent animate-scan-line opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

                    {/* Status Indicators */}
                    <div className="absolute top-8 left-8 flex space-x-2">
                      <div className={`w-2 h-2 ${market.color.replace('text-', 'bg-')} rounded-full animate-pulse`}></div>
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
