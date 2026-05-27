import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function BackToHome() {
  return (
    <div className="mb-6">
      <Link 
        href="/" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Zurück zur Startseite
      </Link>
    </div>
  )
}
