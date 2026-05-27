"use client"

import { useState } from "react"

type Props = {
  width?: number
  height?: number
  className?: string
  alt?: string
}

export default function Logo({
  width = 140,
  height = 32,
  className = "",
  alt = "SOTKIOSK",
}: Props) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <span
        className={`inline-flex items-baseline font-semibold tracking-tight text-slate-900 ${className}`}
      >
        <span className="text-blue-600">SOT</span>
        <span>KIOSK</span>
      </span>
    )
  }

  return (
    <img
      src="/logo/sotkiosk-logo.svg"
      width={width}
      height={height}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      style={{ objectFit: "contain" }}
    />
  )
}
