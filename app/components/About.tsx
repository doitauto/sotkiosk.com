const stats = [
  { number: "500+", label: "Terminals im Einsatz" },
  { number: "99,9 %", label: "Verfügbarkeit" },
  { number: "24/7", label: "Support" },
  { number: "100+", label: "Kunden in Deutschland" },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow">Über SOTKIOSK</span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Ein Partner aus Süddeutschland – mit Fokus auf Verlässlichkeit
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              SOTKIOSK entwickelt und vertreibt Self-Order-Terminals für
              Restaurants, Kantinen und Supermärkte. Wir liefern Hardware und
              Software aus einer Hand und kümmern uns nach der Installation um
              Wartung, Updates und Support.
            </p>
            <p>
              Unser Team aus Entwicklern und Technikern arbeitet eng mit unseren
              Kunden zusammen – von der ersten Beratung bis zum laufenden
              Betrieb. So entstehen Terminals, die sich im Alltag bewähren und
              messbar zur Entlastung beitragen.
            </p>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 bg-white px-6 py-8"
            >
              <dt className="text-sm text-slate-500">{stat.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight text-slate-900">
                {stat.number}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
