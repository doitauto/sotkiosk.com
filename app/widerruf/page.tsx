import { Metadata } from "next"
import LegalLayout from "../../components/LegalLayout"

export const metadata: Metadata = {
  title: "Widerrufsbelehrung – SOTKIOSK",
  description: "Widerrufsbelehrung von SOTKIOSK",
}

export default function WiderrufPage() {
  return (
    <LegalLayout title="Widerrufsbelehrung" updated="Januar 2024">
      <section>
        <h2>Widerrufsrecht</h2>
        <p>
          Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
          diesen Vertrag zu widerrufen.
        </p>
        <p>
          Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des
          Vertragsschlusses.
        </p>
        <p>
          Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (<strong>SOTKIOSK</strong>,
          Hauptstr. 18, 89173 Lonsee, Deutschland, Telefon: 07336 8543, E-Mail:
          info@doitauto.de) mittels einer eindeutigen Erklärung (z. B. ein mit
          der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen
          Vertrag zu widerrufen, informieren.
        </p>
        <p>
          Sie können dafür das beigefügte Muster-Widerrufsformular verwenden,
          das jedoch nicht vorgeschrieben ist.
        </p>
        <p>
          Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung
          über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist
          absenden.
        </p>
      </section>

      <section>
        <h2>Folgen des Widerrufs</h2>
        <p>
          Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen,
          die wir von Ihnen erhalten haben, einschließlich der Lieferkosten
          (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass
          Sie eine andere Art der Lieferung als die von uns angebotene,
          günstigste Standardlieferung gewählt haben), unverzüglich und
          spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem
          die Mitteilung über Ihren Widerruf dieses Vertrags bei uns
          eingegangen ist.
        </p>
        <p>
          Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie
          bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit
          Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall
          werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
        </p>
        <p>
          Wir können die Rückzahlung verweigern, bis wir die Waren wieder
          zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass
          Sie die Waren zurückgesandt haben, je nachdem, welches der frühere
          Zeitpunkt ist.
        </p>
        <p>
          Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen
          vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses
          Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die
          Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von
          vierzehn Tagen absenden.
        </p>
        <p>Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.</p>
        <p>
          Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen,
          wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit,
          Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang
          mit ihnen zurückzuführen ist.
        </p>
      </section>

      <section>
        <h2>Ausschluss des Widerrufsrechts</h2>
        <p>Das Widerrufsrecht besteht nicht bei Verträgen:</p>
        <ul>
          <li>
            zur Lieferung von Waren, die nicht vorgefertigt sind und für deren
            Herstellung eine individuelle Auswahl oder Bestimmung durch den
            Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen
            Bedürfnisse des Verbrauchers zugeschnitten sind
          </li>
          <li>
            zur Lieferung von Waren, die schnell verderben können oder deren
            Verfallsdatum schnell überschritten würde
          </li>
          <li>
            zur Lieferung versiegelter Waren, die aus Gründen des
            Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet
            sind, wenn ihre Versiegelung nach der Lieferung entfernt wurde
          </li>
          <li>
            zur Lieferung von Waren, die nach der Lieferung auf Grund ihrer
            Beschaffenheit untrennbar mit anderen Gütern vermischt wurden
          </li>
        </ul>
      </section>

      <section>
        <h2>Muster-Widerrufsformular</h2>
        <p>
          Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses
          Formular aus und senden Sie es zurück.
        </p>
        <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-700">
          <p className="font-semibold">An:</p>
          <p className="mt-2">
            SOTKIOSK
            <br />
            Hauptstr. 18
            <br />
            89173 Lonsee
            <br />
            Deutschland
            <br />
            E-Mail: info@doitauto.de
          </p>
          <p className="mt-4">
            Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen
            Vertrag über den Kauf der folgenden Waren (*) / die Erbringung der
            folgenden Dienstleistung (*)
          </p>
          <p className="mt-3">Bestellt am (*) / erhalten am (*)</p>
          <p className="mt-3">Name des/der Verbraucher(s)</p>
          <p className="mt-3">Anschrift des/der Verbraucher(s)</p>
          <p className="mt-3">
            Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)
          </p>
          <p className="mt-3">Datum</p>
          <p className="mt-4 text-xs text-slate-500">
            (*) Unzutreffendes streichen.
          </p>
        </div>
      </section>

      <section>
        <h2>Besondere Hinweise</h2>
        <h3>Dienstleistungen</h3>
        <p>
          Bei Verträgen über Dienstleistungen erlischt das Widerrufsrecht
          vorzeitig, wenn wir die Dienstleistung vollständig erbracht haben und
          mit der Ausführung der Dienstleistung erst begonnen haben, nachdem
          Sie dazu Ihre ausdrückliche Zustimmung gegeben haben und gleichzeitig
          Ihre Kenntnis davon bestätigt haben, dass Sie Ihr Widerrufsrecht bei
          vollständiger Vertragserfüllung durch uns verlieren.
        </p>
        <h3>Mietverträge</h3>
        <p>
          Bei Mietverträgen über Self-Order-Terminals beginnt die
          Widerrufsfrist mit dem Tag der Lieferung und Installation des
          Terminals. Das Widerrufsrecht erlischt vorzeitig, wenn Sie das
          Terminal bereits in Betrieb genommen haben und uns Ihre ausdrückliche
          Zustimmung zur vorzeitigen Inbetriebnahme erteilt haben.
        </p>
      </section>
    </LegalLayout>
  )
}
