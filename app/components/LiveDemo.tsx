"use client"

import { useEffect, useState } from "react"
import { ExternalLink, MonitorPlay } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * Echte, voll funktionsfähige Kiosk-App als Live-Demo.
 * Die App ist für 1920×1080 optimiert. Statt sie zu verkleinern (würde die
 * Mobil-/Eng-Breakpoints der App auslösen), rendern wir das iframe in nativer
 * Auflösung und skalieren den Wrapper per CSS-transform → die echte Oberfläche
 * bleibt 1:1 erhalten. Das iframe wird erst beim Öffnen gemountet (lazy), damit
 * die schwere App die Marketing-Seite nicht bei jedem Aufruf lädt.
 */

const DEMO_URL =
  "https://kiosk.sotkiosk.com/order-type?kiosk=90f3834b-2961-4b26-8908-6dfe13fa04d5"
const NATIVE_W = 1920
const NATIVE_H = 1080

export default function LiveDemo({
  url = DEMO_URL,
  label = "Live-Demo starten",
  title = "SOTKIOSK Live-Demo",
  tone = "cyan",
  className,
}: {
  url?: string
  label?: string
  title?: string
  tone?: "cyan" | "outline"
  className?: string
}) {
  const [open, setOpen] = useState(false)
  // scale = optische Verkleinerung (breitenbasiert), frameH = interne
  // iframe-Viewport-Höhe in CSS-px. frameH füllt die verfügbare Modal-Höhe;
  // ist der App-Inhalt höher (z.B. scrollbare Spenden-Betragswahl), scrollt
  // das iframe nativ – nichts wird mehr abgeschnitten.
  const [{ scale, frameH }, setDims] = useState({ scale: 0, frameH: NATIVE_H })

  const toneClasses =
    tone === "outline"
      ? "border border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white/10 hover:text-white"
      : "bg-cyan-300 text-slate-950 hover:bg-cyan-200"

  useEffect(() => {
    if (!open) return
    const compute = () => {
      // Breitenbasiertes Scale: App rendert immer im 1920px-TV-/Desktop-
      // Layout. Nicht über 1:1 hochskalieren (sonst unscharf). availH lässt
      // ~96px für den Footer-Link + Abstand.
      const availW = window.innerWidth * 0.96
      const availH = window.innerHeight - 96
      const nextScale = Math.min(availW / NATIVE_W, 1)
      // Interne iframe-Höhe so wählen, dass die skalierte Box availH füllt.
      // Mindestens NATIVE_H, damit kurze Screens nicht gestaucht werden.
      const nextFrameH = Math.max(Math.round(availH / nextScale), NATIVE_H)
      setDims({ scale: nextScale, frameH: nextFrameH })
    }
    compute()
    window.addEventListener("resize", compute)
    return () => window.removeEventListener("resize", compute)
  }, [open])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className={cn(
            "h-14 gap-2 rounded-2xl px-7 text-base font-extrabold",
            toneClasses,
            className,
          )}
        >
          <MonitorPlay className="h-5 w-5" />
          {label}
        </Button>
      </DialogTrigger>

      <DialogContent className="w-auto max-w-none border-0 bg-transparent p-0 shadow-none [&>button]:!right-3 [&>button]:!top-3 [&>button]:!grid [&>button]:!h-9 [&>button]:!w-9 [&>button]:!place-items-center [&>button]:!rounded-full [&>button]:!bg-slate-900/70 [&>button]:!text-white [&>button]:!opacity-100 [&>button]:!ring-1 [&>button]:!ring-white/25 [&>button]:!backdrop-blur hover:[&>button]:!bg-slate-900 [&>button>svg]:!h-5 [&>button>svg]:!w-5">
        <DialogTitle className="sr-only">{title}</DialogTitle>

        <div
          className="overflow-hidden rounded-[1.4rem] border-[6px] border-slate-950 bg-slate-950 shadow-elevated"
          style={
            scale > 0
              ? { width: NATIVE_W * scale, height: frameH * scale }
              : undefined
          }
        >
          {open && scale > 0 ? (
            <iframe
              src={url}
              title={title}
              width={NATIVE_W}
              height={frameH}
              loading="lazy"
              allow="fullscreen; clipboard-write; payment"
              style={{
                transform: `scale(${scale})`,
                transformOrigin: "top left",
                border: 0,
              }}
            />
          ) : (
            <div className="grid h-[60vh] w-[80vw] place-items-center text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Live-Demo wird geladen…
              </span>
            </div>
          )}
        </div>

        <div className="mt-3 flex items-center justify-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            In neuem Tab öffnen
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
