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
const RECIPIENT_EMAIL = "info@doitauto.de"

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
          description: "Wir prüfen Ihre Anfrage und melden uns mit den nächsten Schritten.",
        })
        setFormData(initialFormData)
      } catch {
        toast.error("Versand fehlgeschlagen", {
          description: "Bitte schreiben Sie uns direkt an info@doitauto.de.",
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
      description: "Falls sich nichts öffnet, schreiben Sie uns an info@doitauto.de.",
    })
    setSubmitting(false)
  }

  return (
    <section id="contact" className="section bg-slate-950 pt-0 text-white">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[radial-gradient(circle_at_88%_18%,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,#020617,#101827)] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.42)] md:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="section-label text-cyan-300">
                  Persönlich & unverbindlich
                </p>
                <h2 className="mt-4 text-balance font-display text-4xl font-black leading-tight tracking-[-0.07em] text-white sm:text-6xl">
                  Demo & Angebot anfragen.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                  Erzählen Sie uns von Standort, Kasse und gewünschter Hardware.
                  Wir prüfen, welches Software- und Gerätepaket technisch passt.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <ContactItem
                  icon={Mail}
                  title="E-Mail"
                  value="info@doitauto.de"
                  href="mailto:info@doitauto.de"
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
              className="rounded-[2rem] border border-slate-200 bg-white p-5 text-slate-950 shadow-elevated sm:p-7"
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
                <Label htmlFor="interest" className="text-sm font-bold text-slate-800">
                  Interesse
                </Label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="mt-1.5 h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none ring-offset-white transition focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <option>Demo & Angebot</option>
                  <option>Gerätepaket Komplett 27&quot;/32&quot; KIOSK</option>
                  <option>All-in-One SOT.KIOSK</option>
                  <option>Projekt Rollout</option>
                  <option>Integration prüfen</option>
                </select>
              </div>

              <div className="mt-5">
                <Label htmlFor="message" className="text-sm font-bold text-slate-800">
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

              <p className="mt-4 text-xs leading-5 text-slate-500">
                Mit dem Absenden stimmen Sie unserer{" "}
                <a href="/datenschutz/" className="underline hover:text-slate-700">
                  Datenschutzerklärung
                </a>{" "}
                zu.
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
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
        {title}
      </p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </>
  )

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
      <div className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-cyan-300/10 text-cyan-300">
        <Icon className="h-5 w-5" />
      </div>
      {href ? (
        <a href={href} className="hover:text-cyan-200">
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
