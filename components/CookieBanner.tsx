'use client'

import { useState, useEffect } from 'react'
import { X, Cookie, Settings } from 'lucide-react'
import Link from 'next/link'

interface CookiePreferences {
  necessary: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    functional: false,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    }
    setPreferences(allAccepted)
    saveCookiePreferences(allAccepted)
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    }
    setPreferences(onlyNecessary)
    saveCookiePreferences(onlyNecessary)
    setShowBanner(false)
  }

  const handleSaveSettings = () => {
    saveCookiePreferences(preferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  const saveCookiePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      timestamp: new Date().toISOString(),
      preferences: prefs
    }))
    
    // Here you would typically integrate with your analytics/marketing tools
    // For example:
    // if (prefs.analytics) {
    //   // Initialize Google Analytics
    // }
    // if (prefs.marketing) {
    //   // Initialize marketing pixels
    // }
  }

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'necessary') return // Cannot be disabled
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  if (!showBanner) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {!showSettings ? (
            // Main Banner
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-start space-x-3">
                <Cookie className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Wir verwenden Cookies
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. 
                    Einige sind notwendig für die Funktionalität, andere helfen uns, die Website 
                    zu analysieren und zu verbessern. Sie können Ihre Einstellungen jederzeit anpassen.
                  </p>
                  <Link 
                    href="/cookies" 
                    className="text-blue-600 hover:text-blue-800 underline text-sm mt-1 inline-block"
                  >
                    Mehr über Cookies erfahren
                  </Link>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Einstellungen
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Nur notwendige
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          ) : (
            // Settings Panel
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Cookie-Einstellungen</h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Notwendige Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich 
                      und können nicht deaktiviert werden.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Funktionale Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Diese Cookies ermöglichen erweiterte Funktionalität und Personalisierung.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange('functional')}
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.functional 
                          ? 'bg-blue-600 justify-end' 
                          : 'bg-gray-300 justify-start'
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Analytische Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange('analytics')}
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.analytics 
                          ? 'bg-blue-600 justify-end' 
                          : 'bg-gray-300 justify-start'
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Marketing-Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Diese Cookies werden verwendet, um Werbung relevanter zu machen.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handlePreferenceChange('marketing')}
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.marketing 
                          ? 'bg-blue-600 justify-end' 
                          : 'bg-gray-300 justify-start'
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Abbrechen
                </button>
                <button
                  onClick={handleSaveSettings}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Einstellungen speichern
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
