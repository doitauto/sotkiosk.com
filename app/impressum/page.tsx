import { Metadata } from 'next'
import BackToHome from '../../components/BackToHome'

export const metadata: Metadata = {
  title: 'Impressum - SOTKIOSK',
  description: 'Impressum und rechtliche Angaben von SOTKIOSK',
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-12 relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="absolute inset-0 scan-lines" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <div className="cyber-card p-8 hover:animate-cyber-glow">
          <BackToHome />
          <h1 className="text-4xl font-bold text-gradient animate-shimmer mb-8 font-mono tracking-wider">IMPRESSUM</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-cyan-400 mb-4 font-mono tracking-wider">ANGABEN GEMÄSS § 5 TMG</h2>
              <div className="text-gray-300 space-y-2">
                <p><strong className="text-cyan-400">SOTKIOSK</strong></p>
                <p>Hauptstr. 18</p>
                <p>89173 Lonsee</p>
                <p>Deutschland</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-400 mb-4 font-mono tracking-wider">KONTAKT</h2>
              <div className="text-gray-300 space-y-2">
                <p><strong>Telefon:</strong> <span className="text-cyan-400 font-mono">07336 8543</span></p>
                <p><strong>Telefax:</strong> <span className="text-cyan-400 font-mono">07336 8544</span></p>
                <p><strong>E-Mail:</strong> <span className="text-purple-400 font-mono">info@doitauto.de</span></p>
                <p><strong>Website:</strong> <span className="text-emerald-400 font-mono">www.doitauto.de</span></p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-emerald-400 mb-4 font-mono tracking-wider">INHABER</h2>
              <div className="text-gray-300">
                <p><strong className="text-emerald-400">Arif Calhan</strong></p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-orange-400 mb-4 font-mono tracking-wider">UMSATZSTEUER-ID</h2>
              <div className="text-gray-300">
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:</p>
                <p><strong className="text-orange-400 font-mono">DE315503467</strong></p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-pink-400 mb-4 font-mono tracking-wider">VERPACKUNGSREGISTRIERUNG</h2>
              <div className="text-gray-300">
                <p>LUCID-Verpackungsregisternummer:</p>
                <p><strong className="text-pink-400 font-mono">DE4321814040812</strong></p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-4 font-mono tracking-wider">VERANTWORTLICH FÜR DEN INHALT</h2>
              <div className="text-gray-300 space-y-2">
                <p><strong className="text-blue-400">Arif Calhan</strong></p>
                <p>Hauptstr. 18</p>
                <p>89173 Lonsee</p>
                <p>Deutschland</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Haftungsausschluss</h2>
              
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold mb-2">Haftung für Inhalte</h3>
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                    allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                    unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Haftung für Links</h3>
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                    Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Urheberrecht</h3>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                    Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                    Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-pink-400 mb-4 font-mono tracking-wider">STREITSCHLICHTUNG</h2>
              <div className="text-gray-300">
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"
                     className="text-cyan-400 hover:text-purple-400 underline ml-1 font-mono">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="mt-2">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
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
