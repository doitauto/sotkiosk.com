import { ReactNode } from "react"
import BackToHome from "./BackToHome"

type Props = {
  title: string
  updated?: string
  children: ReactNode
}

export default function LegalLayout({ title, updated, children }: Props) {
  return (
    <div className="bg-white">
      <div className="container max-w-3xl py-16">
        <BackToHome />
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>
        {updated && (
          <p className="mt-2 text-sm text-slate-500">Stand: {updated}</p>
        )}
        <div className="legal-prose mt-10 space-y-10 text-slate-700">
          {children}
        </div>
      </div>
    </div>
  )
}
