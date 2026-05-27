"use client"

import { Smartphone, Shield, Zap, BarChart3, Wifi, Users, Bot, Cpu, Brain, Rocket, Eye, Globe } from 'lucide-react'
import { useState } from 'react'

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const features = [
    {
      icon: Brain,
      title: 'NEURAL INTERFACE',
      description: 'KI-gestützte Benutzeroberfläche mit maschinellem Lernen für personalisierte Erfahrungen',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      borderColor: 'border-cyan-400/30',
      delay: '0ms',
      code: 'AI_NEURAL_001'
    },
    {
      icon: Shield,
      title: 'QUANTUM SECURITY',
      description: 'Quantenverschlüsselung und biometrische Multi-Faktor-Authentifizierung',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30',
      delay: '100ms',
      code: 'SEC_QUANTUM_002'
    },
    {
      icon: Zap,
      title: 'HYPER SPEED',
      description: 'Edge-Computing mit 5G-Integration für Echtzeit-Datenverarbeitung',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10',
      borderColor: 'border-emerald-400/30',
      delay: '200ms',
      code: 'SPEED_EDGE_003'
    },
    {
      icon: BarChart3,
      title: 'PREDICTIVE ANALYTICS',
      description: 'Machine Learning Algorithmen für Verkaufsprognosen und Kundenverhalten',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/30',
      delay: '300ms',
      code: 'ANALYTICS_ML_004'
    },
    {
      icon: Wifi,
      title: 'OMNI SYNC',
      description: 'Multi-Cloud Integration mit IoT-Vernetzung und API-Management',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30',
      delay: '400ms',
      code: 'SYNC_CLOUD_005'
    },
    {
      icon: Globe,
      title: 'GLOBAL MATRIX',
      description: 'Weltweite Skalierung mit KI-Übersetzung und lokaler Anpassung',
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
      borderColor: 'border-pink-400/30',
      delay: '500ms',
      code: 'GLOBAL_AI_006'
    }
  ]

  return (
    <section id="features" className="py-32 bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="absolute inset-0 scan-lines" />

      {/* Holographic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(0,255,0,0.1),transparent_50%)]" />
      </div>

      {/* Digital Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-digital-flicker"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}

        {/* Matrix Rain */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-emerald-400 to-transparent animate-matrix-rain opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full cyber-card mb-8 animate-cyber-glow">
            <Bot className="h-5 w-5 text-cyan-400 mr-3 animate-pulse" />
            <span className="text-sm text-cyan-400 font-mono font-bold tracking-wider">SYSTEM.FEATURES</span>
            <div className="ml-3 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-gradient animate-shimmer">ADVANCED</span>
            <span className="block neon-text font-mono tracking-wider">TECHNOLOGY</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Unsere Self Order Terminals sind mit <span className="text-cyan-400 font-semibold">KI der nächsten Generation</span> ausgestattet
            und bieten Ihren Kunden ein <span className="text-purple-400 font-semibold">revolutionäres Erlebnis</span>.
          </p>

          {/* System Status */}
          <div className="flex justify-center items-center space-x-6 text-sm font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400">SYSTEMS ONLINE</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400">AI READY</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-purple-400">QUANTUM SECURE</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: feature.delay }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`relative overflow-hidden cyber-card p-8 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 h-full ${feature.borderColor} hover:animate-cyber-glow`}>
                {/* System Code */}
                <div className="absolute top-4 right-4 text-xs font-mono text-gray-500 opacity-50">
                  {feature.code}
                </div>

                {/* Status Indicator */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className={`w-2 h-2 ${feature.color.replace('text-', 'bg-')} rounded-full animate-pulse`}></div>
                  <div className="text-xs font-mono text-gray-400">ACTIVE</div>
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10 mt-8`}>
                  <feature.icon className={`h-10 w-10 ${feature.color}`} />
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl animate-pulse" />
                  )}
                  {/* Holographic effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent animate-scan-line opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <h3 className={`text-2xl font-bold mb-4 transition-colors relative z-10 font-mono tracking-wider ${feature.color}`}>
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors relative z-10 text-sm">
                  {feature.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-6 relative">
                  <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${feature.color.replace('text-', 'bg-')} rounded-full transition-all duration-1000 ${hoveredIndex === index ? 'w-full' : 'w-0'}`}
                    ></div>
                  </div>
                  <div className="text-xs font-mono text-gray-500 mt-2">
                    {hoveredIndex === index ? 'SYSTEM READY' : 'STANDBY MODE'}
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
