import { Metadata } from "next"
import LegalLayout from "../../components/LegalLayout"

export const metadata: Metadata = {
  title: "Impressum – SOTKIOSK",
  description: "Impressum und rechtliche Angaben von SOTKIOSK",
}

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum" updated="Januar 2024">
      <section>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          <strong>SOTKIOSK</strong>
          <br />
          Hauptstr. 18
          <br />
          89173 Lonsee
          <br />
          Deutschland
        </p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          <strong>Telefon:</strong> 07336 8543
          <br />
          <strong>Telefax:</strong> 07336 8544
          <br />
          <strong>E-Mail:</strong> info@doitauto.de
          <br />
          <strong>Website:</strong> www.doitauto.de
        </p>
      </section>

      <section>
        <h2>Inhaber</h2>
        <p>
          <strong>Arif Calhan</strong>
        </p>
      </section>

      <section>
        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
          <br />
          <strong>DE315503467</strong>
        </p>
      </section>

      <section>
        <h2>Verpackungsregistrierung</h2>
        <p>
          LUCID-Verpackungsregisternummer:
          <br />
          <strong>DE4321814040812</strong>
        </p>
      </section>

      <section>
        <h2>Verantwortlich für den Inhalt</h2>
        <p>
          <strong>Arif Calhan</strong>
          <br />
          Hauptstr. 18
          <br />
          89173 Lonsee
          <br />
          Deutschland
        </p>
      </section>

      <section>
        <h2>Haftungsausschluss</h2>
        <h3>Haftung für Inhalte</h3>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der
          Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
        <h3>Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich.
        </p>
        <h3>Urheberrecht</h3>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </p>
      </section>

      <section>
        <h2>Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
    </LegalLayout>
  )
}
