type Props = {
  width?: number
  height?: number
  className?: string
  alt?: string
  variant?: "light" | "dark"
}

export default function Logo({
  width = 140,
  height = 32,
  className = "",
  alt = "SOTKIOSK",
  variant = "dark",
}: Props) {
  const textColor = variant === "light" ? "text-white" : "text-slate-950"

  return (
    <span
      role="img"
      aria-label={alt}
      className={className}
      style={{ width, height }}
    >
      <span
        className={`inline-flex h-full items-center font-display text-[1.35rem] font-black uppercase leading-none tracking-[-0.08em] ${textColor}`}
      >
        <span>SOT</span>
        <span className="text-cyan-400">KIOSK</span>
      </span>
    </span>
  )
}
