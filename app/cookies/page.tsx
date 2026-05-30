import { Metadata } from "next"
import LegalLayout from "../../components/LegalLayout"

export const metadata: Metadata = {
  title: "Cookie-Richtlinie",
  description: "Cookie-Richtlinie von SOTKIOSK",
  alternates: { canonical: "/cookies" },
}

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie-Richtlinie" updated="Januar 2024">
      <section>
        <h2>Was sind Cookies?</h2>
        <p>
          Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen
          Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie
          ermöglichen es der Website, sich an Ihre Aktionen und Präferenzen zu
          erinnern, sodass Sie diese nicht bei jedem Besuch oder beim
          Navigieren von einer Seite zur anderen erneut eingeben müssen.
        </p>
      </section>

      <section>
        <h2>Wie verwenden wir Cookies?</h2>
        <p>
          Wir verwenden Cookies, um Ihre Benutzererfahrung zu verbessern und die
          Funktionalität unserer Website zu gewährleisten. Die von uns
          verwendeten Cookies fallen in die folgenden Kategorien.
        </p>
      </section>

      <section>
        <h2>Arten von Cookies</h2>
        <h3>1. Notwendige Cookies</h3>
        <p>
          Diese Cookies sind für das ordnungsgemäße Funktionieren der Website
          unerlässlich. Sie ermöglichen grundlegende Funktionen wie
          Seitennavigation und Zugriff auf sichere Bereiche der Website.
        </p>
        <CookieDetail
          purpose="Grundlegende Website-Funktionalität"
          duration="Session oder bis zu 1 Jahr"
          legalBasis="Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)"
        />

        <h3>2. Funktionale Cookies</h3>
        <p>
          Diese Cookies ermöglichen es der Website, erweiterte Funktionalität
          und Personalisierung zu bieten. Sie können von uns oder von
          Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten
          verwenden.
        </p>
        <CookieDetail
          purpose="Verbesserung der Benutzererfahrung"
          duration="Bis zu 2 Jahre"
          legalBasis="Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)"
        />

        <h3>3. Analytische Cookies</h3>
        <p>
          Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website
          interagieren, indem sie Informationen anonym sammeln und melden. Dies
          hilft uns, die Website zu verbessern und zu optimieren.
        </p>
        <CookieDetail
          purpose="Website-Analyse und -Optimierung"
          duration="Bis zu 2 Jahre"
          legalBasis="Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)"
        />

        <h3>4. Marketing-Cookies</h3>
        <p>
          Diese Cookies werden verwendet, um Werbung für Sie und Ihre
          Interessen relevanter zu machen. Sie werden auch verwendet, um die
          Anzahl der Anzeigen zu begrenzen und die Wirksamkeit von
          Werbekampagnen zu messen.
        </p>
        <CookieDetail
          purpose="Personalisierte Werbung"
          duration="Bis zu 2 Jahre"
          legalBasis="Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)"
        />
      </section>

      <section>
        <h2>Cookie-Verwaltung</h2>
        <p>
          Sie haben die Kontrolle über die Cookies, die auf Ihrem Gerät
          gespeichert werden. Sie können Ihre Cookie-Einstellungen jederzeit
          ändern.
        </p>
        <h3>Browser-Einstellungen</h3>
        <p>
          Die meisten Webbrowser ermöglichen es Ihnen, Cookies über die
          Browsereinstellungen zu kontrollieren. Sie können Cookies blockieren
          oder löschen, aber dies kann die Funktionalität der Website
          beeinträchtigen.
        </p>
        <h3>Cookie-Banner</h3>
        <p>
          Beim ersten Besuch unserer Website erscheint ein Cookie-Banner, über
          den Sie Ihre Einwilligung zu verschiedenen Cookie-Kategorien geben
          oder verweigern können.
        </p>
      </section>

      <section>
        <h2>Drittanbieter-Cookies</h2>
        <p>
          Einige Cookies werden von Drittanbietern gesetzt, deren Dienste wir
          auf unserer Website verwenden:
        </p>
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">
            Google Analytics (falls verwendet)
          </p>
          <p className="mt-2">
            Zur Analyse des Website-Traffics und des Nutzerverhaltens.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Weitere Informationen:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
          </p>
        </div>
      </section>

      <section>
        <h2>Ihre Rechte</h2>
        <p>Sie haben folgende Rechte bezüglich der Verwendung von Cookies:</p>
        <ul>
          <li>Das Recht, Ihre Einwilligung jederzeit zu widerrufen</li>
          <li>Das Recht auf Auskunft über die gespeicherten Daten</li>
          <li>Das Recht auf Löschung Ihrer Daten</li>
          <li>Das Recht auf Datenübertragbarkeit</li>
        </ul>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>Bei Fragen zu unserer Cookie-Richtlinie können Sie uns kontaktieren:</p>
        <p>
          <strong>SOTKIOSK</strong>
          <br />
          Hauptstr. 18
          <br />
          89173 Lonsee
          <br />
          E-Mail: info@doitauto.de
          <br />
          Telefon: 07336 8543
        </p>
      </section>
    </LegalLayout>
  )
}

function CookieDetail({
  purpose,
  duration,
  legalBasis,
}: {
  purpose: string
  duration: string
  legalBasis: string
}) {
  return (
    <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
      <p>
        <strong>Zweck:</strong> {purpose}
      </p>
      <p>
        <strong>Speicherdauer:</strong> {duration}
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> {legalBasis}
      </p>
    </div>
  )
}
