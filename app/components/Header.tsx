"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import Logo from "./Logo"

const navItems = [
  { href: "/loesungen", label: "Lösungen" },
  { href: "/#software", label: "Software" },
  { href: "/#devices", label: "Geräte" },
  { href: "/#system", label: "System" },
  { href: "/#pricing", label: "Preise" },
  { href: "/#contact", label: "Kontakt" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-16 transition-all duration-200",
        scrolled
          ? "border-b border-white/10 bg-slate-950/88 shadow-[0_18px_60px_rgba(2,6,23,0.18)] backdrop-blur-xl"
          : "bg-slate-950",
      )}
    >
      <div className="container flex h-full items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="SOTKIOSK – zur Startseite">
          <Logo width={148} height={32} variant="light" className="h-8 w-[148px]" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button asChild size="sm" className="rounded-full bg-cyan-300 px-5 font-semibold text-slate-950 hover:bg-cyan-200">
            <Link href="/#contact">Demo anfragen</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menü öffnen" className="text-white hover:bg-white/10 hover:text-white">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-slate-800 bg-slate-950 text-white">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="mt-8 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-4 rounded-full bg-cyan-300 font-semibold text-slate-950 hover:bg-cyan-200">
                <Link href="/#contact" onClick={() => setOpen(false)}>
                  Demo anfragen
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
