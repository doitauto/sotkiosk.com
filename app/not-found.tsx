import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-white">
      <div className="container max-w-xl py-16 text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
          Fehler 404
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Seite nicht gefunden
        </h1>
        <p className="mt-4 text-base text-slate-600">
          Die von Ihnen aufgerufene Seite existiert nicht oder wurde verschoben.
          Kehren Sie zur Startseite zurück oder kontaktieren Sie uns.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Zur Startseite
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/#contact">Kontakt aufnehmen</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
