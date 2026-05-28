"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Cookie, Settings, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

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
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) setShowBanner(true)
  }, [])

  const saveAndClose = (prefs: CookiePreferences) => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({
        timestamp: new Date().toISOString(),
        preferences: prefs,
      }),
    )
    setShowBanner(false)
    setShowSettings(false)
  }

  if (!showBanner) return null

  if (showSettings) {
    return (
      <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 backdrop-blur-sm sm:items-center sm:p-4">
        <div className="relative w-full max-w-2xl rounded-t-[1.6rem] border border-slate-200 bg-white shadow-elevated sm:rounded-[1.6rem]">
          <div className="flex items-start justify-between border-b border-slate-200 px-6 py-5">
            <div>
              <h2 className="font-display text-xl font-black tracking-[-0.05em] text-slate-950">
                Cookie-Einstellungen
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Wählen Sie, welche Cookies Sie zulassen möchten.
              </p>
            </div>
            <button
              onClick={() => setShowSettings(false)}
              className="rounded-md p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
              aria-label="Schließen"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="max-h-[60vh] space-y-4 overflow-y-auto px-6 py-5">
            <CookieRow
              title="Notwendige Cookies"
              description="Erforderlich für Grundfunktionen der Website. Können nicht deaktiviert werden."
              checked
              disabled
            />
            <CookieRow
              title="Funktionale Cookies"
              description="Ermöglichen erweiterte Funktionen und Personalisierung."
              checked={preferences.functional}
              onChange={(v) =>
                setPreferences((current) => ({ ...current, functional: v }))
              }
            />
            <CookieRow
              title="Analytische Cookies"
              description="Helfen uns zu verstehen, wie die Website genutzt wird."
              checked={preferences.analytics}
              onChange={(v) =>
                setPreferences((current) => ({ ...current, analytics: v }))
              }
            />
            <CookieRow
              title="Marketing-Cookies"
              description="Werden für personalisierte Werbung verwendet."
              checked={preferences.marketing}
              onChange={(v) =>
                setPreferences((current) => ({ ...current, marketing: v }))
              }
            />
          </div>

          <div className="flex flex-col-reverse gap-2 border-t border-slate-200 px-6 py-4 sm:flex-row sm:justify-end">
            <Button variant="outline" onClick={() => setShowSettings(false)}>
              Abbrechen
            </Button>
            <Button
              onClick={() => saveAndClose(preferences)}
              className="bg-slate-950 text-white hover:bg-slate-800"
            >
              Einstellungen speichern
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-4xl rounded-[1.6rem] border border-white/10 bg-slate-950/92 p-5 text-white shadow-[0_30px_100px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-300">
            <Cookie className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-white">
              Wir verwenden Cookies
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-300">
              Einige sind notwendig, andere helfen uns die Website zu
              verbessern.{" "}
              <Link
                href="/cookies"
                className="font-semibold text-cyan-300 underline-offset-4 hover:underline"
              >
                Mehr erfahren
              </Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row lg:flex-shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowSettings(true)}
            className="text-slate-200 hover:bg-white/10 hover:text-white"
          >
            <Settings className="h-4 w-4" />
            Einstellungen
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            onClick={() =>
              saveAndClose({
                necessary: true,
                functional: false,
                analytics: false,
                marketing: false,
              })
            }
          >
            Nur notwendige
          </Button>
          <Button
            size="sm"
            className="bg-cyan-300 font-bold text-slate-950 hover:bg-cyan-200"
            onClick={() =>
              saveAndClose({
                necessary: true,
                functional: true,
                analytics: true,
                marketing: true,
              })
            }
          >
            Alle akzeptieren
          </Button>
        </div>
      </div>
    </div>
  )
}

function CookieRow({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  title: string
  description: string
  checked: boolean
  disabled?: boolean
  onChange?: (v: boolean) => void
}) {
  const id = title.toLowerCase().replace(/\s+/g, "-")
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex-1">
        <Label htmlFor={id} className="text-sm font-semibold text-slate-900">
          {title}
        </Label>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
      </div>
      <Switch
        id={id}
        checked={checked}
        disabled={disabled}
        onCheckedChange={onChange}
        className="mt-1"
      />
    </div>
  )
}
