import { Metadata } from 'next'
import BackToHome from '../../components/BackToHome'

export const metadata: Metadata = {
  title: 'Cookie-Richtlinie - SOTKIOSK',
  description: 'Cookie-Richtlinie von SOTKIOSK',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-12 relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="absolute inset-0 scan-lines" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <div className="cyber-card p-8 hover:animate-cyber-glow">
          <BackToHome />
          <h1 className="text-4xl font-bold text-gradient animate-shimmer mb-8 font-mono tracking-wider">COOKIE-RICHTLINIE</h1>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Was sind Cookies?</h2>
              <p>
                Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Gerät gespeichert werden, 
                wenn Sie eine Website besuchen. Sie ermöglichen es der Website, sich an Ihre Aktionen und 
                Präferenzen zu erinnern, sodass Sie diese nicht bei jedem Besuch oder beim Navigieren von 
                einer Seite zur anderen erneut eingeben müssen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Wie verwenden wir Cookies?</h2>
              <p>
                Wir verwenden Cookies, um Ihre Benutzererfahrung zu verbessern und die Funktionalität unserer 
                Website zu gewährleisten. Die von uns verwendeten Cookies fallen in die folgenden Kategorien:
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Arten von Cookies</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">1. Notwendige Cookies</h3>
                  <p className="mb-3">
                    Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich. 
                    Sie ermöglichen grundlegende Funktionen wie Seitennavigation und Zugriff auf sichere 
                    Bereiche der Website.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p><strong>Zweck:</strong> Grundlegende Website-Funktionalität</p>
                    <p><strong>Speicherdauer:</strong> Session oder bis zu 1 Jahr</p>
                    <p><strong>Rechtsgrundlage:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">2. Funktionale Cookies</h3>
                  <p className="mb-3">
                    Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung 
                    zu bieten. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir 
                    auf unseren Seiten verwenden.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p><strong>Zweck:</strong> Verbesserung der Benutzererfahrung</p>
                    <p><strong>Speicherdauer:</strong> Bis zu 2 Jahre</p>
                    <p><strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">3. Analytische Cookies</h3>
                  <p className="mb-3">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, 
                    indem sie Informationen anonym sammeln und melden. Dies hilft uns, die Website 
                    zu verbessern und zu optimieren.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p><strong>Zweck:</strong> Website-Analyse und -Optimierung</p>
                    <p><strong>Speicherdauer:</strong> Bis zu 2 Jahre</p>
                    <p><strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">4. Marketing-Cookies</h3>
                  <p className="mb-3">
                    Diese Cookies werden verwendet, um Werbung für Sie und Ihre Interessen relevanter zu machen. 
                    Sie werden auch verwendet, um die Anzahl der Anzeigen zu begrenzen und die Wirksamkeit 
                    von Werbekampagnen zu messen.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p><strong>Zweck:</strong> Personalisierte Werbung</p>
                    <p><strong>Speicherdauer:</strong> Bis zu 2 Jahre</p>
                    <p><strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Cookie-Verwaltung</h2>
              <div className="space-y-4">
                <p>
                  Sie haben die Kontrolle über die Cookies, die auf Ihrem Gerät gespeichert werden. 
                  Sie können Ihre Cookie-Einstellungen jederzeit ändern:
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Browser-Einstellungen</h4>
                    <p>
                      Die meisten Webbrowser ermöglichen es Ihnen, Cookies über die Browsereinstellungen 
                      zu kontrollieren. Sie können Cookies blockieren oder löschen, aber dies kann die 
                      Funktionalität der Website beeinträchtigen.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Cookie-Banner</h4>
                    <p>
                      Beim ersten Besuch unserer Website erscheint ein Cookie-Banner, über den Sie Ihre 
                      Einwilligung zu verschiedenen Cookie-Kategorien geben oder verweigern können.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Drittanbieter-Cookies</h2>
              <div className="space-y-4">
                <p>
                  Einige Cookies werden von Drittanbietern gesetzt, deren Dienste wir auf unserer Website verwenden:
                </p>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Google Analytics (falls verwendet)</h4>
                    <p>Zur Analyse des Website-Traffics und Nutzerverhalten</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Weitere Informationen: 
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                         className="text-blue-600 hover:text-blue-800 underline ml-1">
                        Google Privacy Policy
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Ihre Rechte</h2>
              <div className="space-y-4">
                <p>Sie haben folgende Rechte bezüglich der Verwendung von Cookies:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Das Recht, Ihre Einwilligung jederzeit zu widerrufen</li>
                  <li>Das Recht auf Auskunft über die gespeicherten Daten</li>
                  <li>Das Recht auf Löschung Ihrer Daten</li>
                  <li>Das Recht auf Datenübertragbarkeit</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Kontakt</h2>
              <div className="space-y-2">
                <p>
                  Bei Fragen zu unserer Cookie-Richtlinie können Sie uns kontaktieren:
                </p>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-cyan-400/30">
                  <p><strong className="text-cyan-400">SOTKIOSK</strong></p>
                  <p>Hauptstr. 18</p>
                  <p>89173 Lonsee</p>
                  <p>E-Mail: <span className="text-purple-400 font-mono">info@doitauto.de</span></p>
                  <p>Telefon: <span className="text-emerald-400 font-mono">07336 8543</span></p>
                </div>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Letzte Aktualisierung: Januar 2024<br />
                Diese Cookie-Richtlinie kann von Zeit zu Zeit aktualisiert werden. 
                Bitte überprüfen Sie diese Seite regelmäßig auf Änderungen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
