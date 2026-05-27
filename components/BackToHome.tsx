import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BackToHome() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
    >
      <ArrowLeft className="h-4 w-4" />
      Zurück zur Startseite
    </Link>
  )
}
