import { Metadata } from 'next'
import BackToHome from '../../components/BackToHome'

export const metadata: Metadata = {
  title: 'Widerrufsbelehrung - SOTKIOSK',
  description: 'Widerrufsbelehrung von SOTKIOSK',
}

export default function WiderrufPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-12 relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="absolute inset-0 scan-lines" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <div className="cyber-card p-8 hover:animate-cyber-glow">
          <BackToHome />
          <h1 className="text-4xl font-bold text-gradient animate-shimmer mb-8 font-mono tracking-wider">WIDERRUFSBELEHRUNG</h1>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Widerrufsrecht</h2>
              <p>
                Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
              </p>
              <p className="mt-4">
                Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses.
              </p>
              <p className="mt-4">
                Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (<strong className="text-cyan-400">SOTKIOSK</strong>, Hauptstr. 18,
                89173 Lonsee, Deutschland, Telefon: <span className="text-purple-400 font-mono">07336 8543</span>, E-Mail: <span className="text-emerald-400 font-mono">info@doitauto.de</span>)
                mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail)
                über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
              </p>
              <p className="mt-4">
                Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht 
                vorgeschrieben ist.
              </p>
              <p className="mt-4">
                Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung 
                des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Folgen des Widerrufs</h2>
              <p>
                Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen 
                erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, 
                die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, 
                günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn 
                Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags 
                bei uns eingegangen ist.
              </p>
              <p className="mt-4">
                Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen 
                Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes 
                vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
              </p>
              <p className="mt-4">
                Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder 
                bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, 
                welches der frühere Zeitpunkt ist.
              </p>
              <p className="mt-4">
                Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem 
                Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden 
                oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von 
                vierzehn Tagen absenden.
              </p>
              <p className="mt-4">
                Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.
              </p>
              <p className="mt-4">
                Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust 
                auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht 
                notwendigen Umgang mit ihnen zurückzuführen ist.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Ausschluss des Widerrufsrechts</h2>
              <p>
                Das Widerrufsrecht besteht nicht bei Verträgen:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>
                  zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine 
                  individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die 
                  eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind
                </li>
                <li>
                  zur Lieferung von Waren, die schnell verderben können oder deren Verfallsdatum schnell 
                  überschritten würde
                </li>
                <li>
                  zur Lieferung versiegelter Waren, die aus Gründen des Gesundheitsschutzes oder der 
                  Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung nach der Lieferung 
                  entfernt wurde
                </li>
                <li>
                  zur Lieferung von Waren, die nach der Lieferung auf Grund ihrer Beschaffenheit 
                  untrennbar mit anderen Gütern vermischt wurden
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Muster-Widerrufsformular</h2>
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
                <p className="font-semibold mb-4">
                  (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und 
                  senden Sie es zurück.)
                </p>
                
                <div className="space-y-4">
                  <p>
                    <strong>An:</strong><br />
                    <span className="text-cyan-400">SOTKIOSK</span><br />
                    Hauptstr. 18<br />
                    89173 Lonsee<br />
                    Deutschland<br />
                    E-Mail: <span className="text-purple-400 font-mono">info@doitauto.de</span>
                  </p>
                  
                  <p>
                    Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den 
                    Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)
                  </p>
                  
                  <p>
                    Bestellt am (*)/erhalten am (*)
                  </p>
                  
                  <p>
                    Name des/der Verbraucher(s)
                  </p>
                  
                  <p>
                    Anschrift des/der Verbraucher(s)
                  </p>
                  
                  <p>
                    Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)
                  </p>
                  
                  <p>
                    Datum
                  </p>
                  
                  <p className="text-sm text-gray-600 mt-4">
                    (*) Unzutreffendes streichen.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Besondere Hinweise</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Dienstleistungen</h3>
                  <p>
                    Bei Verträgen über Dienstleistungen erlischt das Widerrufsrecht vorzeitig, wenn wir 
                    die Dienstleistung vollständig erbracht haben und mit der Ausführung der Dienstleistung 
                    erst begonnen haben, nachdem Sie dazu Ihre ausdrückliche Zustimmung gegeben haben und 
                    gleichzeitig Ihre Kenntnis davon bestätigt haben, dass Sie Ihr Widerrufsrecht bei 
                    vollständiger Vertragserfüllung durch uns verlieren.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Mietverträge</h3>
                  <p>
                    Bei Mietverträgen über Self Order Terminals beginnt die Widerrufsfrist mit dem Tag 
                    der Lieferung und Installation des Terminals. Das Widerrufsrecht erlischt vorzeitig, 
                    wenn Sie das Terminal bereits in Betrieb genommen haben und uns Ihre ausdrückliche 
                    Zustimmung zur vorzeitigen Inbetriebnahme erteilt haben.
                  </p>
                </div>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-cyan-500/30">
              <p className="text-sm text-gray-400 font-mono">
                Stand: Januar 2024<br />
                <span className="text-cyan-400">SOTKIOSK</span><br />
                Hauptstr. 18, 89173 Lonsee, Deutschland
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
