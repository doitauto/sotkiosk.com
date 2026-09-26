"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import { Building2, Mail, MapPin, Phone, Send } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY
const RECIPIENT_EMAIL = "arif.calhan@sotkiosk.com"

type ContactFormData = {
  name: string
  email: string
  company: string
  locations: string
  interest: string
  message: string
}

type Web3FormsResponse = {
  success: boolean
  message?: string
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  company: "",
  locations: "",
  interest: "Demo & Angebot",
  message: "",
}

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState<ContactFormData>(initialFormData)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    if (WEB3FORMS_KEY) {
      try {
        const payload = new FormData()
        payload.append("access_key", WEB3FORMS_KEY)
        payload.append("subject", `Anfrage von ${formData.name} - SOTKIOSK`)
        payload.append("from_name", formData.name)
        payload.append("name", formData.name)
        payload.append("email", formData.email)
        payload.append("company", formData.company)
        payload.append("locations", formData.locations)
        payload.append("interest", formData.interest)
        payload.append("message", formData.message)

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: payload,
        })
        const data = (await res.json()) as Web3FormsResponse

        if (!res.ok || !data.success) {
          throw new Error(data.message || "Versand fehlgeschlagen")
        }

        toast.success("Nachricht gesendet", {
          description:
            "Wir prüfen Ihre Anfrage und melden uns mit den nächsten Schritten.",
        })
        setFormData(initialFormData)
      } catch {
        toast.error("Versand fehlgeschlagen", {
          description: "Bitte schreiben Sie uns direkt an arif.calhan@sotkiosk.com.",
        })
      } finally {
        setSubmitting(false)
      }
      return
    }

    const subject = encodeURIComponent(`SOTKIOSK Anfrage von ${formData.name}`)
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `E-Mail: ${formData.email}`,
        `Unternehmen: ${formData.company}`,
        `Standortanzahl: ${formData.locations}`,
        `Interesse: ${formData.interest}`,
        "",
        "Nachricht:",
        formData.message,
      ].join("\n"),
    )
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`
    toast.info("E-Mail-Programm wird geöffnet", {
      description:
        "Falls sich nichts öffnet, schreiben Sie uns an arif.calhan@sotkiosk.com.",
    })
    setSubmitting(false)
  }

  return (
    <section id="contact" className="site-section contact-section text-white">
      <div className="container">
        <div className="relative p-0">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="site-eyebrow text-[#c3dca2]">
                  Persönlich & unverbindlich
                </p>
                <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-5xl">
                  Gute Gespräche. Gute Lösungen.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#bac8b2]">
                  Erzählen Sie uns von Ihrem Betrieb. Wir zeigen Ihnen SOT POS
                  und Self-Order und finden gemeinsam das passende Setup.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <ContactItem
                  icon={Mail}
                  title="E-Mail"
                  value="arif.calhan@sotkiosk.com"
                  href="mailto:arif.calhan@sotkiosk.com"
                />
                <ContactItem
                  icon={Phone}
                  title="Telefon"
                  value="07336 8543"
                  href="tel:+4973368543"
                />
                <ContactItem
                  icon={MapPin}
                  title="Adresse"
                  value="Hauptstr. 18, 89173 Lonsee"
                />
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[#dce3d1] bg-[#f8faf4] p-5 text-[#19342b] sm:p-7"
            >
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ihr Name"
                  autoComplete="name"
                />
                <Field
                  id="email"
                  label="E-Mail"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ihre@email.de"
                  autoComplete="email"
                />
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field
                  id="company"
                  label="Unternehmen"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Ihr Unternehmen"
                  autoComplete="organization"
                />
                <Field
                  id="locations"
                  label="Standortanzahl"
                  value={formData.locations}
                  onChange={handleChange}
                  placeholder="z. B. 1, 3 oder 20+"
                />
              </div>

              <div className="mt-5">
                <Label
                  htmlFor="interest"
                  className="text-sm font-bold text-slate-800"
                >
                  Interesse
                </Label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="mt-1.5 h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none ring-offset-white transition focus-visible:ring-2 focus-visible:ring-[#71884e]"
                >
                  <option>Demo & Angebot</option>
                  <option>SOT POS Kassensystem</option>
                  <option>Self-Order Kiosk</option>
                  <option>Kasse + Kiosk + Küche</option>
                  <option>Projekt Rollout</option>
                  <option>Integration prüfen</option>
                </select>
              </div>

              <div className="mt-5">
                <Label
                  htmlFor="message"
                  className="text-sm font-bold text-slate-800"
                >
                  Nachricht <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Beschreiben Sie kurz Standort, Kassensystem, gewünschte Hardware und Zeitplan."
                  className="mt-1.5 resize-none rounded-xl"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-6 h-14 w-full rounded-2xl bg-slate-950 font-extrabold text-white hover:bg-slate-800 sm:w-auto"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Wird gesendet
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Demo & Angebot anfragen
                  </>
                )}
              </Button>

              {!WEB3FORMS_KEY && (
                <p className="mt-4 text-xs leading-5 text-slate-600">
                  Ihre Anfrage wird in Ihrem E-Mail-Programm vorbereitet. Dort
                  können Sie sie prüfen und versenden.
                </p>
              )}
              <p className="mt-4 text-xs leading-5 text-slate-500">
                Informationen zur Verarbeitung Ihrer Daten finden Sie in unserer{" "}
                <a
                  href="/datenschutz/"
                  className="underline hover:text-slate-700"
                >
                  Datenschutzerklärung
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: LucideIcon
  title: string
  value: string
  href?: string
}) {
  const content = (
    <>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c3dca2]">
        {title}
      </p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </>
  )

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
      <div className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-[#d8f69b]/10 text-[#c3dca2]">
        <Icon className="h-5 w-5" />
      </div>
      {href ? (
        <a href={href} className="hover:text-[#d8f69b]">
          {content}
        </a>
      ) : (
        <div>{content}</div>
      )}
    </div>
  )
}

function Field({
  id,
  label,
  type = "text",
  required = false,
  value,
  onChange,
  placeholder,
  autoComplete,
}: {
  id: keyof ContactFormData
  label: string
  type?: string
  required?: boolean
  value: string
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void
  placeholder?: string
  autoComplete?: string
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm font-bold text-slate-800">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <Input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-1.5 h-12 rounded-xl border-slate-200"
      />
    </div>
  )
}
