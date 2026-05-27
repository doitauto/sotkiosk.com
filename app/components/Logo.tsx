"use client"

import { useState } from 'react'

type Props = {
  width?: number
  height?: number
  className?: string
  alt?: string
}

export default function Logo({ width = 180, height = 60, className = '', alt = 'SOTKIOSK Logo' }: Props) {
  const [error, setError] = useState(false)
  if (error) {
    return (
      <span className={`inline-block font-black tracking-tight ${className}`} style={{ fontSize: Math.max(16, Math.floor(height * 0.6)) }}>
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">SOTKIOSK</span>
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
      style={{ objectFit: 'contain' }}
    />
  )
}

