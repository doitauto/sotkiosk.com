"use client"

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Sparkles, ArrowRight, Bot, Zap, Shield, Cpu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'QUANTUM HOTLINE',
      content: '07336 8543',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      description: '24/7 AI-SUPPORT',
      code: 'PHONE_001'
    },
    {
      icon: Mail,
      title: 'NEURAL MAIL',
      content: 'info@doitauto.de',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      description: 'INSTANT RESPONSE',
      code: 'MAIL_002'
    },
    {
      icon: MapPin,
      title: 'COMMAND CENTER',
      content: 'Hauptstr. 18\n89173 Lonsee',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10',
      description: 'INNOVATION HUB',
      code: 'LOC_003'
    }
  ]

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-blue-900 via-gray-900 to-purple-900 relative overflow-hidden">
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
            <Bot className="h-5 w-5 text-cyan-400 mr-3 animate-pulse" />
            <span className="text-sm text-cyan-400 font-mono font-bold tracking-wider">CONTACT.SYSTEM</span>
            <div className="ml-3 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-gradient animate-shimmer">LASSEN SIE UNS</span>
            <span className="block neon-text font-mono tracking-wider">SPRECHEN</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Bereit für die <span className="text-cyan-400 font-semibold">Zukunft</span>? Lassen Sie uns gemeinsam die perfekte
            <span className="text-purple-400 font-semibold">KI-gestützte Self Order Terminal Lösung</span> für Ihr Unternehmen entwickeln.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="cyber-card p-6 hover:animate-cyber-glow transition-all duration-500 group">
                {/* System Code */}
                <div className="absolute top-4 right-4 text-xs font-mono text-gray-500 opacity-50">
                  {info.code}
                </div>

                {/* Status Indicator */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className={`w-2 h-2 ${info.color.replace('text-', 'bg-')} rounded-full animate-pulse`}></div>
                  <div className="text-xs font-mono text-gray-400">ONLINE</div>
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 ${info.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative mt-8`}>
                  <info.icon className={`h-10 w-10 ${info.color}`} />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
                </div>

                <h3 className={`text-xl font-bold mb-2 transition-colors relative z-10 font-mono tracking-wider text-center ${info.color}`}>
                  {info.title}
                </h3>

                <p className={`text-sm font-medium text-center mb-4 ${info.color} opacity-80`}>
                  {info.description}
                </p>

                <p className="text-gray-300 whitespace-pre-line group-hover:text-white transition-colors text-center font-mono text-sm">
                  {info.content}
                </p>

                {/* Connection Status */}
                <div className="mt-4 text-center">
                  <div className="text-xs font-mono text-gray-500">
                    CONNECTION: SECURE
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="relative overflow-hidden bg-white/80 backdrop-blur-xl border-gray-200 hover:border-blue-300 transition-all duration-500 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-3xl font-bold text-gray-900 text-center mb-2">
                  Nachricht senden
                </CardTitle>
                <p className="text-gray-600 text-center">Wir antworten innerhalb von 24 Stunden</p>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white transition-all duration-300 rounded-xl"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                        E-Mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white transition-all duration-300 rounded-xl"
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                      Unternehmen
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white transition-all duration-300 rounded-xl"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                      Nachricht *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white transition-all duration-300 rounded-xl resize-none"
                      placeholder="Erzählen Sie uns von Ihrem Projekt und wie wir Ihnen helfen können..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          Nachricht senden
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
