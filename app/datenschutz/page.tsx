import { Metadata } from 'next'
import BackToHome from '../../components/BackToHome'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung - SOTKIOSK',
  description: 'Datenschutzerklärung von SOTKIOSK gemäß DSGVO',
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-12 relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="absolute inset-0 scan-lines" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <div className="cyber-card p-8 hover:animate-cyber-glow">
          <BackToHome />
          <h1 className="text-4xl font-bold text-gradient animate-shimmer mb-8 font-mono tracking-wider">DATENSCHUTZERKLÄRUNG</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Datenschutz auf einen Blick</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Allgemeine Hinweise</h3>
                  <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                    passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                    persönlich identifiziert werden können.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Datenerfassung auf dieser Website</h3>
                  <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
                  <p>
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                    können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Wie erfassen wir Ihre Daten?</h3>
                  <p>
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um 
                    Daten handeln, die Sie in ein Kontaktformular eingeben.
                  </p>
                  <p className="mt-2">
                    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
                    IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder 
                    Uhrzeit des Seitenaufrufs).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Hosting</h2>
              <div className="space-y-4">
                <p>
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                
                <div>
                  <h3 className="font-semibold mb-2">Externes Hosting</h3>
                  <p>
                    Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
                    werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, 
                    Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und 
                    sonstige Daten, die über eine Website generiert werden, handeln.
                  </p>
                  <p className="mt-2">
                    Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und 
                    bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und 
                    effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Datenschutz</h3>
                  <p>
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                    personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie 
                    dieser Datenschutzerklärung.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 text-cyan-400">Hinweis zur verantwortlichen Stelle</h3>
                  <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                  <div className="mt-2 space-y-1">
                    <p><strong className="text-cyan-400">SOTKIOSK</strong></p>
                    <p>Hauptstr. 18</p>
                    <p>89173 Lonsee</p>
                    <p>Deutschland</p>
                    <p>Telefon: <span className="text-purple-400 font-mono">07336 8543</span></p>
                    <p>E-Mail: <span className="text-emerald-400 font-mono">info@doitauto.de</span></p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Speicherdauer</h3>
                  <p>
                    Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben 
                    Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Datenerfassung auf dieser Website</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Server-Log-Dateien</h3>
                  <p>
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                    die Ihr Browser automatisch an uns übermittelt. Dies sind:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Kontaktformular</h3>
                  <p>
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                    inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                    von Anschlussfragen bei uns gespeichert.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Ihre Rechte</h2>
              
              <div className="space-y-4">
                <p>Sie haben folgende Rechte:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Recht auf Auskunft</strong> über Ihre bei uns gespeicherten personenbezogenen Daten</li>
                  <li><strong>Recht auf Berichtigung</strong> unrichtiger oder unvollständiger Daten</li>
                  <li><strong>Recht auf Löschung</strong> Ihrer bei uns gespeicherten Daten</li>
                  <li><strong>Recht auf Einschränkung</strong> der Datenverarbeitung</li>
                  <li><strong>Recht auf Datenübertragbarkeit</strong></li>
                  <li><strong>Widerspruchsrecht</strong> gegen die Verarbeitung Ihrer Daten</li>
                  <li><strong>Beschwerderecht</strong> bei einer Aufsichtsbehörde</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">6. SSL- bzw. TLS-Verschlüsselung</h2>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine 
                SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
                des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
