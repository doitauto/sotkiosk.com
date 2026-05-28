import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Reveal from "@/components/Reveal"

const faqs = [
  {
    question: "Welche Hardware wird unterstützt?",
    answer:
      "SOTKIOSK ist für moderne SOT.KIOSK Touch-Terminals mit Payment, Drucker und QR/NFC-Prozessen ausgelegt. Die konkrete Konfiguration prüfen wir vor dem Angebot.",
  },
  {
    question: "Kann SOTKIOSK mit meinem Kassensystem arbeiten?",
    answer:
      "Ja, die Software ist auf strukturierte Übergaben an Kasse, Küche oder Warenwirtschaft ausgelegt. Welche Schnittstelle sinnvoll ist, hängt vom bestehenden System und Prozess ab.",
  },
  {
    question: "Welche Zahlungsarten sind möglich?",
    answer:
      "Kartenzahlung und Wallet-Zahlungen können über passende Payment-Terminals eingebunden werden. Bargeld- oder Sonderprozesse planen wir nur, wenn sie zum Standort passen.",
  },
  {
    question: "Wie läuft ein Projektstart ab?",
    answer:
      "Wir klären Standort, Gerätetyp, Kasse, Payment, Menüstruktur und Rollout-Ziel. Danach erhalten Sie ein konkretes Angebot mit Software, Hardware und Einrichtung.",
  },
  {
    question: "Kann die Oberfläche gebrandet werden?",
    answer:
      "Ja. Farben, Inhalte, Kategorien und Startbildschirm können auf Marke, Sortiment und Standort angepasst werden.",
  },
  {
    question: "Gibt es Miete und Kauf?",
    answer:
      "Ja. Die Website zeigt die aktuellen Einstiegspunkte: Software ab 299 € pro Monat und Gerätepakete ab 4.999 € Kauf. Der finale Preis hängt von Konfiguration und Integration ab.",
  },
  {
    question: "In welchen Sprachen läuft die Bestelloberfläche?",
    answer:
      "Standardmäßig Deutsch, Englisch und Türkisch – pro Standort umschaltbar. Weitere Sprachen sind auf Anfrage möglich.",
  },
  {
    question: "Gibt es ein Küchen- und Gäste-Display?",
    answer:
      "Ja. Bestellungen erscheinen in Echtzeit auf dem Küchen-Display (KDS); fertige Bestellnummern werden auf einem Gäste- oder TV-Display aufgerufen – inklusive Tonsignal.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="section section-warm">
      <Reveal className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label justify-center">Häufige Fragen</p>
          <h2 className="mt-4 text-balance font-display text-4xl font-black leading-tight tracking-[-0.07em] text-slate-950 sm:text-5xl">
            Kurz und entscheidungsrelevant.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Für Details zu Ihrer Hardware, Kasse und Standortstruktur ist die
            Demo-Anfrage der schnellste Weg.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={faq.question}
                value={`item-${idx}`}
                className="overflow-hidden rounded-[1.2rem] border border-slate-200 bg-white px-5 shadow-soft data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="text-left text-base font-bold text-slate-950 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Reveal>
    </section>
  )
}
