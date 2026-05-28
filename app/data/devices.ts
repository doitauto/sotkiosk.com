/**
 * Geräte-Katalog für die SOTKIOSK Hardware-Galerie.
 *
 * Diese Datei ist die EINZIGE Quelle für die Geräte-Sektion. Neue Modelle
 * werden hier ergänzt – das UI (app/components/Devices.tsx) skaliert automatisch.
 *
 * `imageTodo: true` markiert Modelle, für die noch ein echtes Produktfoto
 * fehlt (OEM-Katalog auf Alibaba ist captcha-geblockt). Bis dahin wird ein
 * passender vorhandener Render als Platzhalter genutzt. Echtes Foto nach
 * public/kiosk-assets/ legen und `image` aktualisieren, dann `imageTodo` entfernen.
 */

export type FormFactor = "Standgerät" | "Wandmontage" | "Theke" | "Outdoor"

export type DeviceFeature =
  | "payment"
  | "printer"
  | "qrnfc"
  | "scanner"
  | "scale"
  | "camera"
  | "accessibility"

export type Device = {
  id: string
  name: string
  formFactor: FormFactor
  /** Verfügbare Bildschirmgrößen, z. B. ['21,5"', '27"']. */
  sizes: string[]
  image: string
  features: DeviceFeature[]
  bestFor: string
  /** Hebt das Modell als Empfehlung hervor. */
  highlight?: boolean
  /** true = wartet noch auf ein echtes Produktfoto. */
  imageTodo?: boolean
}

/** Filter-Reihenfolge in der Galerie. */
export const FORM_FACTORS: FormFactor[] = [
  "Standgerät",
  "Wandmontage",
  "Theke",
  "Outdoor",
]

/** Kurzlabels für die Hardware-Feature-Tags auf den Karten. */
export const FEATURE_LABELS: Record<DeviceFeature, string> = {
  payment: "Payment",
  printer: "Drucker",
  qrnfc: "QR / NFC",
  scanner: "Scanner",
  scale: "Waage",
  camera: "Kamera",
  accessibility: "Barrierearm",
}

export const devices: Device[] = [
  {
    id: "standgeraet-payment-27",
    name: "Standgerät Payment 27″",
    formFactor: "Standgerät",
    sizes: ['27"'],
    image: "/kiosk-assets/sot-kiosk-hero-kiosk.png",
    features: ["payment", "printer", "qrnfc"],
    bestFor: "Hohe Frequenz, Self-Order und Bezahlen vor Ort",
    highlight: true,
  },
  {
    id: "standgeraet-kompakt-215",
    name: "Standgerät Kompakt 21,5″",
    formFactor: "Standgerät",
    sizes: ['21,5"'],
    image: "/kiosk-assets/sot-kiosk-floor-kiosk.png",
    features: ["payment", "printer", "qrnfc"],
    bestFor: "Theken, kleine Flächen und Takeaway",
  },
  {
    id: "standgeraet-xl-32",
    name: "Standgerät XL 32″",
    formFactor: "Standgerät",
    sizes: ['32"'],
    image: "/kiosk-assets/sot-kiosk-floor-kiosk.png",
    features: ["payment", "printer", "qrnfc", "scanner"],
    bestFor: "Foodcourts und große, bebilderte Menüs",
    imageTodo: true,
  },
  {
    id: "standgeraet-barrierearm-24",
    name: "Standgerät Barrierearm 24″",
    formFactor: "Standgerät",
    sizes: ['24"'],
    image: "/kiosk-assets/sot-kiosk-floor-kiosk.png",
    features: ["payment", "printer", "qrnfc", "accessibility"],
    bestFor: "Barrierearme Bedienhöhe, inklusiver Zugang",
    imageTodo: true,
  },
  {
    id: "self-checkout-27-waage",
    name: "Self-Checkout 27″ mit Waage",
    formFactor: "Standgerät",
    sizes: ['27"'],
    image: "/kiosk-assets/sot-kiosk-floor-kiosk.png",
    features: ["payment", "printer", "scanner", "scale"],
    bestFor: "Retail Self-Checkout mit Barcode und Wiegen",
    imageTodo: true,
  },
  {
    id: "theke-kompakt-156",
    name: "Theke Kompakt 15,6″",
    formFactor: "Theke",
    sizes: ['15,6"'],
    image: "/kiosk-assets/sot-kiosk-compact-kiosk.png",
    features: ["payment", "qrnfc"],
    bestFor: "Tresen und begrenzter Platz",
    imageTodo: true,
  },
  {
    id: "theke-215",
    name: "Theke 21,5″",
    formFactor: "Theke",
    sizes: ['21,5"'],
    image: "/kiosk-assets/sot-kiosk-compact-kiosk.png",
    features: ["payment", "printer", "qrnfc"],
    bestFor: "Bestellannahme direkt am Tresen",
  },
  {
    id: "wandmontage-27",
    name: "Wandmontage 27″",
    formFactor: "Wandmontage",
    sizes: ['27"'],
    image: "/kiosk-assets/sot-kiosk-wall-kiosk.png",
    features: ["payment", "qrnfc"],
    bestFor: "Platzsparend an der Wand",
  },
  {
    id: "wandmontage-xl-32",
    name: "Wandmontage XL 32″",
    formFactor: "Wandmontage",
    sizes: ['32"'],
    image: "/kiosk-assets/sot-kiosk-wall-kiosk.png",
    features: ["payment", "qrnfc", "scanner"],
    bestFor: "Eingangsbereiche und Lobbys",
    imageTodo: true,
  },
  {
    id: "outdoor-27",
    name: "Outdoor Standgerät 27″",
    formFactor: "Outdoor",
    sizes: ['27"'],
    image: "/kiosk-assets/sot-kiosk-floor-kiosk.png",
    features: ["payment", "qrnfc", "camera"],
    bestFor: "Wetterfest für Drive-Thru und Außenbereich",
    imageTodo: true,
  },
]
