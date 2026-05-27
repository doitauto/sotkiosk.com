"use client"

import { ShoppingCart, CreditCard, Headphones, Settings, ArrowUpRight, Zap, Bot, Cpu, Rocket, Monitor, Cloud, Shield } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null)

  const services = [
    {
      icon: Rocket,
      title: 'TERMINAL LEASE',
      description: 'Flexible Mietmodelle mit KI-Optimierung. Zero-Investment-Start für maximale Skalierbarkeit.',
      features: ['QUANTUM BILLING', 'AUTO MAINTENANCE', 'INSTANT UPGRADE'],
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      borderColor: 'border-cyan-400/30',
      code: 'LEASE_001',
      price: 'AB 299€/MONAT'
    },
    {
      icon: Monitor,
      title: 'TERMINAL PURCHASE',
      description: 'Premium Hardware-Investment mit lebenslanger KI-Software-Updates und Quantum-Garantie.',
      features: ['LIFETIME AI UPDATES', 'QUANTUM WARRANTY', 'FULL OWNERSHIP'],
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30',
      code: 'PURCHASE_002',
      price: 'AB 4.999€'
    },
    {
      icon: Bot,
      title: 'AI SOFTWARE',
      description: 'Maßgeschneiderte KI-Algorithmen mit maschinellem Lernen und Predictive Analytics.',
      features: ['NEURAL NETWORKS', 'API MATRIX', 'CLOUD NATIVE'],
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10',
      borderColor: 'border-emerald-400/30',
      code: 'AI_SOFT_003',
      price: 'AB 199€/MONAT'
    },
    {
      icon: Shield,
      title: 'QUANTUM SUPPORT',
      description: 'KI-gestützter 24/7 Support mit Predictive Maintenance und Instant-Response-Garantie.',
      features: ['AI CHATBOT', 'PREDICTIVE REPAIR', 'QUANTUM RESPONSE'],
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/30',
      code: 'SUPPORT_004',
      price: 'INKLUSIVE'
    }
  ]

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-purple-900 via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="absolute inset-0 scan-lines" />

      {/* Holographic Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,0,255,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full cyber-card mb-8 animate-cyber-glow">
            <Cpu className="h-5 w-5 text-cyan-400 mr-3 animate-pulse" />
            <span className="text-sm text-cyan-400 font-mono font-bold tracking-wider">SERVICE.MATRIX</span>
            <div className="ml-3 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-gradient animate-shimmer">PREMIUM</span>
            <span className="block neon-text-pink font-mono tracking-wider">SOLUTIONS</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Von der <span className="text-cyan-400 font-semibold">KI-Beratung</span> bis zur <span className="text-purple-400 font-semibold">Quantum-Wartung</span> -
            wir bieten Ihnen eine komplette Next-Gen Lösung für Ihre Self Order Terminal Bedürfnisse.
          </p>

          {/* Service Status */}
          <div className="flex justify-center items-center space-x-8 text-sm font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400">ALL SYSTEMS GO</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400">24/7 ACTIVE</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className={`relative overflow-hidden cyber-card p-8 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 h-full ${service.borderColor} hover:animate-cyber-glow`}>
                {/* System Code */}
                <div className="absolute top-4 right-4 text-xs font-mono text-gray-500 opacity-50">
                  {service.code}
                </div>

                {/* Status Indicator */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className={`w-2 h-2 ${service.color.replace('text-', 'bg-')} rounded-full animate-pulse`}></div>
                  <div className="text-xs font-mono text-gray-400">ONLINE</div>
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10 mt-8`}>
                  <service.icon className={`h-10 w-10 ${service.color}`} />
                  {activeService === index && (
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl animate-pulse" />
                  )}
                  {/* Holographic effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent animate-scan-line opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <h3 className={`text-xl font-bold mb-4 transition-colors relative z-10 font-mono tracking-wider text-center ${service.color}`}>
                  {service.title}
                </h3>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className={`text-2xl font-bold font-mono ${service.color} animate-digital-flicker`}>
                    {service.price}
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors relative z-10 text-sm text-center mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center group-hover:text-gray-300 transition-colors">
                      <div className={`w-2 h-2 ${service.color.replace('text-', 'bg-')} rounded-full mr-3 animate-pulse`} />
                      <span className="font-mono">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <div className="flex items-center justify-center">
                  <button className={`flex items-center space-x-2 px-4 py-2 ${service.borderColor} border rounded-lg ${service.color} hover:bg-white/5 transition-all duration-300 font-mono text-sm`}>
                    <span>ACTIVATE</span>
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="mt-6 relative">
                  <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${service.color.replace('text-', 'bg-')} rounded-full transition-all duration-1000 ${activeService === index ? 'w-full' : 'w-0'}`}
                    ></div>
                  </div>
                  <div className="text-xs font-mono text-gray-500 mt-2 text-center">
                    {activeService === index ? 'SYSTEM READY' : 'STANDBY MODE'}
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
