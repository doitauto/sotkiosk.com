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
  const textColor = variant === "light" ? "text-[#f7f7f2]" : "text-[#19342b]"

  return (
    <span
      role="img"
      aria-label={alt}
      className={`inline-flex items-center ${className}`}
      style={{ width, height }}
    >
      <span
        className={`inline-flex h-full items-center font-display text-[1.35rem] font-black uppercase leading-none tracking-[-0.08em] ${textColor}`}
      >
        <span>SOT</span>
        <span>KIOSK</span>
        <span
          aria-hidden="true"
          className="ml-1.5 mb-0.5 h-2 w-2 self-end rounded-full bg-[#b4ce7a]"
        />
      </span>
    </span>
  )
}
