import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Wie lange dauert die Lieferung und Installation?",
    answer:
      "Standard-Terminals liefern wir innerhalb von 7–10 Werktagen. Die Installation vor Ort dauert in der Regel 2–4 Stunden inklusive Konfiguration und Mitarbeiter-Einweisung.",
  },
  {
    question: "Welche Zahlungsmethoden unterstützt das Terminal?",
    answer:
      "Alle gängigen Kartenzahlungen (Girocard, Visa, Mastercard, AMEX), Apple Pay und Google Pay. Auf Wunsch lassen sich auch Bargeldmodule und werkseigene Kantinenkarten integrieren.",
  },
  {
    question: "Funktioniert die Software mit meinem bestehenden Kassensystem?",
    answer:
      "Wir bieten Standard-Schnittstellen zu den meisten POS- und ERP-Systemen am Markt (z. B. Vectron, Gastronovi, Lightspeed, SAP). Für individuelle Integrationen entwickeln wir passende Connectoren.",
  },
  {
    question: "Was passiert bei einem technischen Defekt?",
    answer:
      "Im Miet-Modell senden wir Ihnen innerhalb von 48 Stunden ein Austauschgerät. Beim Kauf greift unsere 24-monatige Garantie, optional erweiterbar auf bis zu 5 Jahre Service-Vertrag.",
  },
  {
    question: "Kann ich die Miete jederzeit kündigen?",
    answer:
      "Die Mindestlaufzeit beträgt 12 Monate. Danach ist die Miete monatlich kündbar mit einer Frist von 30 Tagen zum Monatsende.",
  },
  {
    question: "Ist die Software DSGVO-konform?",
    answer:
      "Ja. Alle Daten werden auf Servern in Deutschland verarbeitet, Zahlungsdaten gehen nie über unsere Systeme (PCI-DSS). Auf Anfrage stellen wir Ihnen einen AV-Vertrag und ein TOM-Konzept zur Verfügung.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Häufige Fragen</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Antworten auf die wichtigsten Fragen
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Keine passende Antwort dabei? Schreiben Sie uns – wir melden uns
            innerhalb von 24 Stunden.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={faq.question}
                value={`item-${idx}`}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white px-5 shadow-soft data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="text-left text-base font-medium text-slate-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
