import { Metadata } from "next"
import LegalLayout from "../../components/LegalLayout"

export const metadata: Metadata = {
  title: "Datenschutzerklärung – SOTKIOSK",
  description: "Datenschutzerklärung von SOTKIOSK gemäß DSGVO",
}

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung" updated="Januar 2024">
      <section>
        <h2>1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können.
        </p>
        <h3>Datenerfassung auf dieser Website</h3>
        <p>
          <strong>
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </strong>
        </p>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
          „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung
          entnehmen.
        </p>
        <h3>Wie erfassen wir Ihre Daten?</h3>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
          ein Kontaktformular eingeben.
        </p>
        <p>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
          Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
          allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
          Uhrzeit des Seitenaufrufs).
        </p>
      </section>

      <section>
        <h2>2. Hosting</h2>
        <h3>Externes Hosting</h3>
        <p>
          Diese Website wird extern gehostet. Die personenbezogenen Daten, die
          auf dieser Website erfasst werden, werden auf den Servern des Hosters
          gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
          Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
          Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über
          eine Website generiert werden, handeln.
        </p>
        <p>
          Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung
          gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1
          lit. b DSGVO) und im Interesse einer sicheren, schnellen und
          effizienten Bereitstellung unseres Online-Angebots durch einen
          professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
      </section>

      <section>
        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
        <h3>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
          Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
          vertraulich und entsprechend den gesetzlichen
          Datenschutzbestimmungen sowie dieser Datenschutzerklärung.
        </p>
        <h3>Hinweis zur verantwortlichen Stelle</h3>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser
          Website ist:
        </p>
        <p>
          <strong>SOTKIOSK</strong>
          <br />
          Hauptstr. 18
          <br />
          89173 Lonsee
          <br />
          Deutschland
          <br />
          Telefon: 07336 8543
          <br />
          E-Mail: info@doitauto.de
        </p>
        <h3>Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
          bei uns, bis der Zweck für die Datenverarbeitung entfällt.
        </p>
      </section>

      <section>
        <h2>4. Datenerfassung auf dieser Website</h2>
        <h3>Server-Log-Dateien</h3>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch
          Informationen in so genannten Server-Log-Dateien, die Ihr Browser
          automatisch an uns übermittelt. Dies sind:
        </p>
        <ul>
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <h3>Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
          Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
          Fall von Anschlussfragen bei uns gespeichert.
        </p>
      </section>

      <section>
        <h2>5. Ihre Rechte</h2>
        <p>Sie haben folgende Rechte:</p>
        <ul>
          <li>
            <strong>Recht auf Auskunft</strong> über Ihre bei uns gespeicherten
            personenbezogenen Daten
          </li>
          <li>
            <strong>Recht auf Berichtigung</strong> unrichtiger oder
            unvollständiger Daten
          </li>
          <li>
            <strong>Recht auf Löschung</strong> Ihrer bei uns gespeicherten
            Daten
          </li>
          <li>
            <strong>Recht auf Einschränkung</strong> der Datenverarbeitung
          </li>
          <li>
            <strong>Recht auf Datenübertragbarkeit</strong>
          </li>
          <li>
            <strong>Widerspruchsrecht</strong> gegen die Verarbeitung Ihrer
            Daten
          </li>
          <li>
            <strong>Beschwerderecht</strong> bei einer Aufsichtsbehörde
          </li>
        </ul>
      </section>

      <section>
        <h2>6. SSL- bzw. TLS-Verschlüsselung</h2>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
          Eine verschlüsselte Verbindung erkennen Sie daran, dass die
          Adresszeile des Browsers von „http://" auf „https://" wechselt und an
          dem Schloss-Symbol in Ihrer Browserzeile.
        </p>
      </section>
    </LegalLayout>
  )
}
