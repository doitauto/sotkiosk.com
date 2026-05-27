"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY
const RECIPIENT_EMAIL = "info@doitauto.de"

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    if (WEB3FORMS_KEY) {
      try {
        const payload = new FormData()
        payload.append("access_key", WEB3FORMS_KEY)
        payload.append("subject", `Anfrage von ${formData.name} – SOTKIOSK`)
        payload.append("from_name", formData.name)
        payload.append("name", formData.name)
        payload.append("email", formData.email)
        payload.append("company", formData.company)
        payload.append("message", formData.message)

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: payload,
        })
        const data = await res.json()

        if (data.success) {
          toast.success("Nachricht gesendet", {
            description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
          })
          setFormData({ name: "", email: "", company: "", message: "" })
        } else {
          throw new Error(data.message || "Versand fehlgeschlagen")
        }
      } catch (err) {
        toast.error("Versand fehlgeschlagen", {
          description: "Bitte schreiben Sie uns direkt an info@doitauto.de.",
        })
      } finally {
        setSubmitting(false)
      }
      return
    }

    const subject = encodeURIComponent(`Anfrage von ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\nUnternehmen: ${formData.company}\n\nNachricht:\n${formData.message}`,
    )
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`
    toast.info("E-Mail-Programm wird geöffnet", {
      description: "Falls sich nichts öffnet, schreiben Sie uns an info@doitauto.de.",
    })
    setSubmitting(false)
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Kontakt</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Lassen Sie uns über Ihr Projekt sprechen
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Schreiben Sie uns oder rufen Sie an – wir melden uns innerhalb von
            24 Stunden mit einem konkreten Vorschlag.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-5">
          <aside className="space-y-6 lg:col-span-2">
            <ContactItem
              icon={Phone}
              title="Telefon"
              value="07336 8543"
              href="tel:+4973368543"
              detail="Mo – Fr, 8:00 – 17:00 Uhr"
            />
            <ContactItem
              icon={Mail}
              title="E-Mail"
              value="info@doitauto.de"
              href="mailto:info@doitauto.de"
              detail="Antwort innerhalb von 24 Stunden"
            />
            <ContactItem
              icon={MapPin}
              title="Adresse"
              value="Hauptstr. 18, 89173 Lonsee"
              detail="Süddeutschland, nahe Ulm"
            />
            <ContactItem
              icon={Clock}
              title="Geschäftszeiten"
              value="Montag bis Freitag"
              detail="8:00 – 17:00 Uhr"
            />
          </aside>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8"
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

              <div className="mt-5">
                <Field
                  id="company"
                  label="Unternehmen"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Ihr Unternehmen (optional)"
                  autoComplete="organization"
                />
              </div>

              <div className="mt-5">
                <Label htmlFor="message" className="text-sm font-medium text-slate-700">
                  Nachricht <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Erzählen Sie kurz von Ihrem Standort und Ihren Anforderungen."
                  className="mt-1.5 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-6 w-full sm:w-auto"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Wird gesendet…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Nachricht senden
                  </>
                )}
              </Button>

              <p className="mt-4 text-xs text-slate-500">
                Mit dem Absenden stimmen Sie unserer{" "}
                <a href="/datenschutz" className="underline hover:text-slate-700">
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
  detail,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  value: string
  detail?: string
  href?: string
}) {
  const ValueTag = href ? "a" : "p"
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-100">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            {title}
          </p>
          <ValueTag
            {...(href ? { href } : {})}
            className={`mt-1 text-sm font-semibold text-slate-900 ${href ? "hover:text-blue-600" : ""}`}
          >
            {value}
          </ValueTag>
          {detail && <p className="mt-0.5 text-xs text-slate-500">{detail}</p>}
        </div>
      </div>
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
  id: string
  label: string
  type?: string
  required?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  autoComplete?: string
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm font-medium text-slate-700">
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
        className="mt-1.5"
      />
    </div>
  )
}
