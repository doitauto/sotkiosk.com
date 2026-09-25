"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import Logo from "./Logo"

const navItems = [
  { href: "/pos/", label: "Kassensystem" },
  { href: "/#kiosk", label: "Self-Order Kiosk" },
  { href: "/#system", label: "Die Plattform" },
  { href: "/loesungen/", label: "Lösungen" },
  { href: "/#pricing", label: "Pakete" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container flex h-full items-center justify-between gap-5">
        <Link
          href="/"
          aria-label="SOTKIOSK – zur Startseite"
          className="shrink-0"
        >
          <Logo width={156} height={34} />
        </Link>
        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-6 lg:flex"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="site-button site-button-dark hidden sm:inline-flex"
        >
          Demo vereinbaren <ArrowUpRight size={17} />
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Menü öffnen"
              className="h-11 w-11"
            >
              <Menu size={23} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-[#f7f7f2]">
            <SheetTitle>Entdecken Sie SOTKIOSK</SheetTitle>
            <SheetDescription className="sr-only">
              Navigation zu Kassensystem, Self-Order, Plattform, Lösungen und
              Kontakt.
            </SheetDescription>
            <nav
              aria-label="Mobile Navigation"
              className="mt-8 flex flex-col gap-2"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-4 text-base font-semibold hover:bg-black/5"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="site-button site-button-dark mt-5"
              >
                Demo vereinbaren <ArrowUpRight size={17} />
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
