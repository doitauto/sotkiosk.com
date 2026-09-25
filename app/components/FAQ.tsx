import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Was ist SOT POS – und was ist SOTKIOSK?",
    answer:
      "SOT POS ist unser Kassensystem für die Bedienung durch Ihr Team. Am SOTKIOSK Self-Order Terminal bestellen Ihre Gäste selbst. Beide Produktbereiche gehören zur gleichen Plattform mit Katalogverwaltung, Küche und Backoffice.",
  },
  {
    question: "Kann ich das Kassensystem bereits kennenlernen?",
    answer:
      "Ja, in einer persönlichen Demo zeigen wir Ihnen SOT POS und besprechen Ihren Einsatz. Die Thekenkasse, das Belegjournal und der Tagesabschluss sind implementiert. Freigaben für echte Payment- und Druckerhardware sowie die TSE-Anbindung sind noch in Prüfung. Den verfügbaren Einsatzumfang klären wir vor dem Angebot.",
  },
  {
    question: "Welche Hardware wird unterstützt?",
    answer:
      "SOTKIOSK ist für moderne SOT.KIOSK Touch-Terminals mit Payment, Drucker und QR/NFC-Prozessen ausgelegt. Die konkrete Konfiguration prüfen wir vor dem Angebot.",
  },
  {
    question: "Kann SOTKIOSK mit meinem Kassensystem arbeiten?",
    answer:
      "Neben unserem eigenen Kassensystem SOT POS prüfen wir die Anbindung an bestehende Systeme. Ob eine Integration möglich ist und welchen Umfang sie hat, hängt von der verfügbaren Schnittstelle und Ihrem Ablauf ab.",
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
    question: "Was kostet das passende System?",
    answer:
      "Sie erhalten ein individuelles Angebot. Der Preis richtet sich nach Softwaremodulen, Hardware, Zahlungsanbindung und Einrichtung. Wir besprechen mit Ihnen, ob eine Kasse, ein Kiosk oder ein Gesamtsystem sinnvoll ist und welche Kauf- oder Mietoptionen zur Verfügung stehen.",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function FAQ() {
  return (
    <section id="faq" className="site-section faq-section">
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      <div className="container faq-layout">
        <div>
          <p className="site-eyebrow">Gut zu wissen</p>
          <h2>
            Gute Fragen.
            <br />
            Klare Antworten.
          </h2>
          <p className="mt-5 max-w-xs text-sm leading-7 text-[#637169]">
            Noch etwas offen? Wir sprechen gern persönlich über Ihren Betrieb
            und das passende System.
          </p>
        </div>

        <div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={faq.question}
                value={`item-${idx}`}
                className="border-b border-[#d9dfd0] py-2"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-[#19342b] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-slate-600">
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
