"use client"

import { ArrowRight, Play, Sparkles, Zap, Monitor, Cpu, Wifi, Shield, Bot, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentText, setCurrentText] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const heroTexts = [
    "SELF-SERVICE REVOLUTION",
    "KI-GESTÜTZTE TERMINALS",
    "ZUKUNFT DES HANDELS",
    "DIGITALE TRANSFORMATION"
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false)
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % heroTexts.length)
        setIsTyping(true)
      }, 500)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute inset-0 scan-lines" />

      {/* Dynamic Holographic Orbs */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-hologram"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-400/30 to-teal-500/30 rounded-full blur-3xl animate-hologram animation-delay-4000" />
      </div>

      {/* Floating Cyber Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-pulse-ring" />
        <div className="absolute top-40 right-32 w-2 h-2 bg-purple-400 rounded-full animate-digital-flicker" />
        <div className="absolute bottom-32 left-1/4 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-cyber-glow" />
        <Monitor className="absolute top-32 right-1/4 h-8 w-8 text-cyan-400 animate-hologram" />
        <Cpu className="absolute bottom-40 right-20 h-6 w-6 text-purple-400 animate-pulse" />
        <Wifi className="absolute top-1/2 left-20 h-7 w-7 text-emerald-400 animate-digital-flicker" />

        {/* Matrix Rain Effect */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-20 bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-matrix-rain opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Cyber Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full cyber-card mb-8 animate-cyber-glow">
            <Bot className="h-5 w-5 text-cyan-400 mr-3 animate-pulse" />
            <span className="text-sm text-cyan-400 font-mono font-bold tracking-wider">SYSTEM.ONLINE</span>
            <div className="ml-3 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>

          {/* Main Logo */}
          <div className="mb-8">
            <div className="flex justify-center">
              <Link href="/">
                <img src="/logo/sotkiosk-logo-1.png" alt="SOTKIOSK – zur Startseite" className="h-56 md:h-72 lg:h-96 w-auto object-contain mx-auto hover:scale-[1.02] transition-transform duration-300" />
              </Link>
            </div>
            <div className="mt-4 text-xs md:text-sm font-mono text-cyan-400 tracking-[0.3em] opacity-80">
              SELF-SERVICE TECHNOLOGY SOLUTIONS
            </div>
          </div>

          {/* Dynamic Subtitle */}
          <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight h-20 flex items-center justify-center">
            <span className={`neon-text terminal-text transition-all duration-500 ${isTyping ? 'opacity-100' : 'opacity-50'}`}>
              {heroTexts[currentText]}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Revolutionieren Sie Ihr Business mit <span className="text-cyan-400 font-semibold">KI-gestützten</span> Self Order Terminals.
            Eigene Software, futuristische Hardware, <span className="text-purple-400 font-semibold">grenzenlose Möglichkeiten</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="group relative overflow-hidden cyber-card hover:animate-cyber-glow px-8 py-4 text-lg font-semibold transition-all duration-300" asChild>
              <Link href="#contact">
                <span className="relative z-10 flex items-center text-white">
                  <Rocket className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                  SYSTEM AKTIVIEREN
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </Button>

            <Button variant="outline" size="lg" className="group cyber-card border-cyan-500/50 text-cyan-400 hover:text-white hover:bg-cyan-500/10 px-8 py-4 text-lg font-semibold transition-all duration-300">
              <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              LIVE DEMO
            </Button>
          </div>

          {/* Cyber Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "AKTIVE TERMINALS", color: "text-cyan-400", icon: Monitor },
              { number: "99.9%", label: "SYSTEM UPTIME", color: "text-emerald-400", icon: Shield },
              { number: "24/7", label: "KI-SUPPORT", color: "text-purple-400", icon: Bot }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="cyber-card p-6 hover:animate-cyber-glow transition-all duration-300 relative">
                  <div className="flex items-center justify-center mb-4">
                    <stat.icon className={`h-8 w-8 ${stat.color} animate-pulse`} />
                  </div>
                  <div className={`text-4xl font-black font-mono ${stat.color} mb-2 animate-digital-flicker`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-mono text-sm tracking-wider">{stat.label}</div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Futuristic Terminal Mockup */}
      <div className="absolute bottom-0 right-10 hidden xl:block">
        <div className="relative animate-hologram">
          <div className="w-40 h-60 cyber-card rounded-t-3xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500 animate-cyber-glow">
            <div className="w-full h-40 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-t-3xl p-4 relative overflow-hidden">
              {/* Screen */}
              <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center shadow-inner relative">
                <div className="text-center">
                  <div className="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse-ring">
                    <Monitor className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div className="text-xs font-mono font-bold text-cyan-400 mb-1">SOTKIOSK</div>
                  <div className="text-[8px] font-mono text-gray-400">SYSTEM READY</div>
                </div>
                {/* Scan lines */}
                <div className="absolute inset-0 scan-lines opacity-30"></div>
              </div>
              {/* Holographic effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-400/10 to-transparent animate-scan-line"></div>
            </div>
            {/* Base */}
            <div className="w-full h-20 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-3xl flex items-center justify-center">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-2000"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-4000"></div>
              </div>
            </div>
          </div>
          {/* Shadow/Reflection */}
          <div className="absolute -bottom-2 -left-2 w-44 h-64 bg-gradient-to-b from-cyan-500/10 to-purple-500/10 rounded-t-3xl shadow-xl opacity-30 -z-10 blur-sm" />
        </div>
      </div>
    </section>
  )
}
