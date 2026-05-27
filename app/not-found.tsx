import Link from 'next/link'
import { ArrowLeft, AlertTriangle, Bot, Monitor } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="absolute inset-0 scan-lines" />
      
      {/* Holographic Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,0,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,0,255,0.1),transparent_50%)]" />
      </div>

      {/* Digital Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-400 rounded-full animate-digital-flicker"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Error Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full cyber-card mb-8 border-red-400/30">
            <AlertTriangle className="h-5 w-5 text-red-400 mr-3 animate-pulse" />
            <span className="text-sm text-red-400 font-mono font-bold tracking-wider">SYSTEM.ERROR</span>
            <div className="ml-3 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
          </div>

          {/* 404 Display */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-black font-mono mb-4">
              <span className="text-red-400 animate-digital-flicker">404</span>
            </h1>
            <div className="text-xs md:text-sm font-mono text-red-400 tracking-[0.3em] opacity-80 mb-6">
              PAGE.NOT.FOUND
            </div>
          </div>
          
          {/* Error Message */}
          <div className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
            <span className="text-red-400 font-mono tracking-wider animate-digital-flicker">
              SEITE NICHT GEFUNDEN
            </span>
          </div>
          
          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            Die angeforderte Seite konnte nicht gefunden werden. 
            <span className="text-cyan-400 font-semibold">System-Scan</span> ergab keine Treffer.
            Kehren Sie zur <span className="text-purple-400 font-semibold">Hauptkonsole</span> zurück.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="cyber-card border-cyan-400/50 text-cyan-400 hover:text-white hover:bg-cyan-500/10 px-8 py-4 text-lg font-semibold transition-all duration-300" asChild>
              <Link href="/">
                <ArrowLeft className="mr-3 h-5 w-5" />
                <span className="font-mono">ZURÜCK ZUR HAUPTKONSOLE</span>
              </Link>
            </Button>
          </div>

          {/* System Status */}
          <div className="mt-16 cyber-card p-6 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-mono text-gray-400">SYSTEM STATUS</span>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="space-y-2 text-xs font-mono text-gray-500">
              <div className="flex justify-between">
                <span>MAIN SYSTEM:</span>
                <span className="text-emerald-400">ONLINE</span>
              </div>
              <div className="flex justify-between">
                <span>REQUESTED PAGE:</span>
                <span className="text-red-400">NOT FOUND</span>
              </div>
              <div className="flex justify-between">
                <span>AI ASSISTANT:</span>
                <span className="text-cyan-400">READY</span>
              </div>
            </div>
          </div>

          {/* Terminal Signature */}
          <div className="mt-8">
            <div className="inline-flex items-center space-x-2 text-gray-500 font-mono text-xs">
              <Monitor className="h-3 w-3 animate-pulse" />
              <span>ERROR_CODE: 404_PAGE_NOT_FOUND</span>
              <div className="w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
              <span>TIMESTAMP: {new Date().toISOString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
