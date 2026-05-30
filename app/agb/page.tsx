import { Metadata } from "next"
import LegalLayout from "../../components/LegalLayout"

export const metadata: Metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen von SOTKIOSK",
  alternates: { canonical: "/agb" },
}

export default function AGBPage() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen" updated="Januar 2024">
      <section>
        <h2>§ 1 Geltungsbereich</h2>
        <p>
          (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten
          für alle Verträge zwischen <strong>SOTKIOSK</strong> (nachfolgend
          „Anbieter") und ihren Kunden über die Vermietung und den Verkauf von
          Self-Order-Terminals sowie die Erbringung damit verbundener
          Dienstleistungen.
        </p>
        <p>
          (2) Abweichende, entgegenstehende oder ergänzende Allgemeine
          Geschäftsbedingungen des Kunden werden nicht Vertragsbestandteil, es
          sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
        </p>
      </section>

      <section>
        <h2>§ 2 Vertragsschluss</h2>
        <p>
          (1) Die Darstellung der Produkte und Dienstleistungen auf unserer
          Website stellt kein rechtlich bindendes Angebot dar, sondern eine
          Aufforderung zur Abgabe eines Angebots.
        </p>
        <p>
          (2) Durch das Absenden einer Anfrage über unser Kontaktformular oder
          per E-Mail gibt der Kunde ein verbindliches Angebot ab. Der Vertrag
          kommt durch unsere schriftliche Auftragsbestätigung zustande.
        </p>
      </section>

      <section>
        <h2>§ 3 Leistungen</h2>
        <p>
          (1) Der Anbieter vermietet und verkauft Self-Order-Terminals sowie
          zugehörige Software und Hardware.
        </p>
        <p>
          (2) Bei Mietverträgen umfasst die Leistung die Bereitstellung,
          Installation, Wartung und den Support der Terminals während der
          Vertragslaufzeit.
        </p>
        <p>
          (3) Bei Kaufverträgen umfasst die Leistung die Lieferung,
          Installation und eine Gewährleistung gemäß den gesetzlichen
          Bestimmungen.
        </p>
      </section>

      <section>
        <h2>§ 4 Preise und Zahlungsbedingungen</h2>
        <p>
          (1) Alle Preise verstehen sich zuzüglich der gesetzlichen
          Mehrwertsteuer.
        </p>
        <p>
          (2) Bei Mietverträgen sind die Mietzahlungen monatlich im Voraus zu
          entrichten.
        </p>
        <p>
          (3) Bei Kaufverträgen ist der Kaufpreis nach Lieferung und
          Installation innerhalb von 14 Tagen ohne Abzug zur Zahlung fällig.
        </p>
        <p>
          (4) Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9
          Prozentpunkten über dem Basiszinssatz der Europäischen Zentralbank
          berechnet.
        </p>
      </section>

      <section>
        <h2>§ 5 Lieferung und Installation</h2>
        <p>(1) Die Lieferung erfolgt an die vom Kunden angegebene Adresse.</p>
        <p>
          (2) Die Installation wird durch qualifizierte Techniker des Anbieters
          durchgeführt.
        </p>
        <p>
          (3) Der Kunde stellt die erforderlichen Voraussetzungen
          (Stromversorgung, Internetanschluss, geeigneter Aufstellplatz) zur
          Verfügung.
        </p>
      </section>

      <section>
        <h2>§ 6 Gewährleistung und Haftung</h2>
        <p>
          (1) Für Kaufverträge gelten die gesetzlichen
          Gewährleistungsbestimmungen.
        </p>
        <p>
          (2) Bei Mietverträgen gewährleistet der Anbieter die ordnungsgemäße
          Funktion der Terminals während der Vertragslaufzeit.
        </p>
        <p>
          (3) Die Haftung des Anbieters ist auf Vorsatz und grobe
          Fahrlässigkeit beschränkt, es sei denn, es handelt sich um die
          Verletzung wesentlicher Vertragspflichten oder Schäden aus der
          Verletzung des Lebens, des Körpers oder der Gesundheit.
        </p>
      </section>

      <section>
        <h2>§ 7 Vertragslaufzeit und Kündigung</h2>
        <p>
          (1) Mietverträge haben eine Mindestlaufzeit von 12 Monaten und
          verlängern sich automatisch um weitere 12 Monate, wenn sie nicht mit
          einer Frist von 3 Monaten zum Ende der Laufzeit gekündigt werden.
        </p>
        <p>
          (2) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund
          bleibt unberührt.
        </p>
        <p>(3) Kündigungen bedürfen der Schriftform.</p>
      </section>

      <section>
        <h2>§ 8 Datenschutz</h2>
        <p>
          (1) Der Anbieter verarbeitet personenbezogene Daten des Kunden
          ausschließlich zur Vertragserfüllung und gemäß den Bestimmungen der
          Datenschutz-Grundverordnung (DSGVO).
        </p>
        <p>
          (2) Weitere Informationen zum Datenschutz finden sich in unserer
          Datenschutzerklärung.
        </p>
      </section>

      <section>
        <h2>§ 9 Schlussbestimmungen</h2>
        <p>
          (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss
          des UN-Kaufrechts.
        </p>
        <p>
          (2) Erfüllungsort und Gerichtsstand ist der Sitz des Anbieters,
          sofern der Kunde Vollkaufmann, juristische Person des öffentlichen
          Rechts oder öffentlich-rechtliches Sondervermögen ist.
        </p>
        <p>
          (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
          werden, berührt dies die Wirksamkeit der übrigen Bestimmungen nicht.
        </p>
      </section>
    </LegalLayout>
  )
}
