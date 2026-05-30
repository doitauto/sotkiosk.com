/**
 * Device catalog for the SOTKIOSK hardware gallery.
 *
 * This file is the single source for the devices section. Add new models here;
 * the UI (app/components/Devices.tsx) scales automatically.
 *
 * Product images are stored locally under public/kiosk-assets/ so the exported
 * site does not depend on external image hotlinks.
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
  /** Available screen sizes, e.g. ['21,5"', '27"']. */
  sizes: string[]
  image: string
  features: DeviceFeature[]
  bestFor: string
  /** Highlights the model as recommended. */
  highlight?: boolean
}

/** Filter order in the gallery. */
export const FORM_FACTORS: FormFactor[] = [
  "Standgerät",
  "Wandmontage",
  "Theke",
  "Outdoor",
]

/** Short labels for the hardware feature tags on cards. */
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
    image: "/kiosk-assets/alibaba/liviao-payment-stand-27.jpg",
    features: ["payment", "printer", "qrnfc"],
    bestFor: "Hohe Frequenz, Self-Order und Bezahlen vor Ort",
    highlight: true,
  },
  {
    id: "standgeraet-kompakt-215",
    name: "Standgerät Kompakt 21,5″",
    formFactor: "Standgerät",
    sizes: ['21,5"'],
    image: "/kiosk-assets/alibaba/liviao-stand-restaurant-215.jpg",
    features: ["payment", "printer", "qrnfc"],
    bestFor: "Theken, kleine Flächen und Takeaway",
  },
  {
    id: "standgeraet-xl-32",
    name: "Standgerät XL 32″",
    formFactor: "Standgerät",
    sizes: ['32"'],
    image: "/kiosk-assets/alibaba/liviao-stand-black-215.jpg",
    features: ["payment", "printer", "qrnfc", "scanner"],
    bestFor: "Foodcourts und große, bebilderte Menüs",
  },
  {
    id: "standgeraet-barrierearm-24",
    name: "Standgerät Barrierearm 24″",
    formFactor: "Standgerät",
    sizes: ['24"'],
    image: "/kiosk-assets/alibaba/liviao-payment-stand-27.jpg",
    features: ["payment", "printer", "qrnfc", "accessibility"],
    bestFor: "Barrierearme Bedienhöhe, inklusiver Zugang",
  },
  {
    id: "self-checkout-27-waage",
    name: "Self-Checkout 27″ mit Waage",
    formFactor: "Standgerät",
    sizes: ['27"'],
    image: "/kiosk-assets/alibaba/liviao-stand-lineup.jpg",
    features: ["payment", "printer", "scanner", "scale"],
    bestFor: "Retail Self-Checkout mit Barcode und Wiegen",
  },
  {
    id: "theke-kompakt-156",
    name: "Theke Kompakt 15,6″",
    formFactor: "Theke",
    sizes: ['15,6"'],
    image: "/kiosk-assets/alibaba/liviao-wall-payment-27.jpg",
    features: ["payment", "qrnfc"],
    bestFor: "Tresen und begrenzter Platz",
  },
  {
    id: "theke-215",
    name: "Theke 21,5″",
    formFactor: "Theke",
    sizes: ['21,5"'],
    image: "/kiosk-assets/alibaba/liviao-stand-restaurant-215.jpg",
    features: ["payment", "printer", "qrnfc"],
    bestFor: "Bestellannahme direkt am Tresen",
  },
  {
    id: "wandmontage-27",
    name: "Wandmontage 27″",
    formFactor: "Wandmontage",
    sizes: ['27"'],
    image: "/kiosk-assets/alibaba/liviao-wallmount-pair.jpg",
    features: ["payment", "qrnfc"],
    bestFor: "Platzsparend an der Wand",
  },
  {
    id: "wandmontage-xl-32",
    name: "Wandmontage XL 32″",
    formFactor: "Wandmontage",
    sizes: ['32"'],
    image: "/kiosk-assets/alibaba/liviao-wallmount-pair.jpg",
    features: ["payment", "qrnfc", "scanner"],
    bestFor: "Eingangsbereiche und Lobbys",
  },
  {
    id: "outdoor-27",
    name: "Outdoor Standgerät 27″",
    formFactor: "Outdoor",
    sizes: ['27"'],
    image: "/kiosk-assets/alibaba/liviao-stand-black-215.jpg",
    features: ["payment", "qrnfc", "camera"],
    bestFor: "Wetterfest für Drive-Thru und Außenbereich",
  },
]
