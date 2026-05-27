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
  { href: "/#features", label: "Funktionen" },
  { href: "/#markets", label: "Branchen" },
  { href: "/#pricing", label: "Preise" },
  { href: "/#faq", label: "FAQ" },
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
          ? "border-b border-slate-200 bg-white/80 backdrop-blur-md"
          : "bg-white/0",
      )}
    >
      <div className="container flex h-full items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="SOTKIOSK – zur Startseite">
          <Logo width={140} height={32} className="h-8 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button asChild size="sm">
            <Link href="/#contact">Beratung anfragen</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menü öffnen">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="mt-8 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link href="/#contact" onClick={() => setOpen(false)}>
                  Beratung anfragen
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
