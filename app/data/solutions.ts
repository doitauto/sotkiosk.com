/**
 * Anwendungsfall-Landingpages (SEO-Silo) für SOTKIOSK.
 *
 * Single source of truth für die Seiten unter /loesungen/<slug>/.
 * Das Template (app/loesungen/[slug]/page.tsx) rendert jede Lösung daraus und
 * erzeugt pro Seite eigenen Titel, Description, Canonical sowie BreadcrumbList-,
 * FAQPage- und Service-Structured-Data.
 *
 * Jede Lösung zielt bewusst auf ein eigenes Keyword-Cluster (eigene
 * Suchintention) – so kann jede URL für „ihre" Begriffe ranken, statt dass eine
 * einzelne Seite für alles konkurriert.
 */

export type SolutionFAQ = {
  question: string
  answer: string
}

export type Solution = {
  /** URL-Segment: /loesungen/<slug>/ */
  slug: string
  /** Kurzlabel für Navigation/Karten. */
  navLabel: string
  /** <title> – das Layout hängt automatisch „· SOTKIOSK" an, daher kurz halten. */
  metaTitle: string
  /** <meta name="description"> – 140–160 Zeichen, mit Haupt-Keyword. */
  metaDescription: string
  /** Harmlose Keyword-Liste (kein Google-Ranking-Faktor, dient interner Doku). */
  keywords: string
  /** Eyebrow über dem H1 (section-label). */
  eyebrow: string
  /** Einziges H1 der Seite – mit Haupt-Keyword. */
  h1: string
  /** Einleitungsabsatz unter dem H1. */
  heroLead: string
  /** Hero-Bild (lokales Asset). */
  heroImage: string
  heroImageAlt: string
  /** Kartentext auf der Übersichtsseite. */
  cardText: string
  /** 3–4 Nutzenversprechen. */
  benefits: { title: string; text: string }[]
  /** Keyword-reiche Funktions-Bullets. */
  featureBullets: string[]
  /** Für wen / typische Einsatzorte. */
  useCases: { title: string; text: string }[]
  /** Seiten-spezifische FAQ (→ FAQPage-Schema). */
  faqs: SolutionFAQ[]
  /** Optionale Live-Demo-Konfiguration (sonst Standard-Kiosk-Demo). */
  demo?: { url?: string; title?: string; label?: string }
}

export const solutions: Solution[] = [
  {
    slug: "self-order-terminal",
    navLabel: "Self-Order Terminal",
    metaTitle: "Self-Order Terminal für die Gastronomie",
    metaDescription:
      "Self-Order Terminal & Selbstbedienungsterminal für die Gastronomie: Bestellen und bezahlen ohne Wartezeit, höhere Bons, weniger Kassenstress. Demo anfragen.",
    keywords:
      "Self-Order Terminal, Selbstbedienungsterminal, Bestellterminal Gastronomie, Self-Ordering Kiosk, Bestellsystem Gastronomie, SB-Terminal",
    eyebrow: "Self-Order Terminal",
    h1: "Self-Order Terminal für die Gastronomie",
    heroLead:
      "Mit dem SOTKIOSK Self-Order Terminal bestellen und bezahlen Ihre Gäste eigenständig am Touchscreen – ohne Wartezeit, mit Bildern, Extras und Upselling. Das Selbstbedienungsterminal entlastet die Kasse und erhöht nachweislich den durchschnittlichen Bonwert.",
    heroImage: "/kiosk-assets/sot-kiosk-hero-kiosk.png",
    heroImageAlt:
      "Self-Order Terminal von SOTKIOSK mit Touch-Bestelloberfläche für die Gastronomie",
    cardText:
      "Selbstbedienungsterminal zum Bestellen und Bezahlen – höhere Bons, kürzere Wartezeiten, weniger Kassenstress.",
    benefits: [
      {
        title: "Höhere Bonwerte",
        text: "Bilder, Empfehlungen und Add-ons am Bestellterminal führen zu größeren Bestellungen – ganz ohne Verkaufsdruck am Tresen.",
      },
      {
        title: "Kürzere Wartezeiten",
        text: "Mehrere Gäste bestellen parallel am Self-Order Terminal. Die Schlange an der Kasse wird spürbar kürzer.",
      },
      {
        title: "Weniger Fehler",
        text: "Gäste wählen Varianten und Sonderwünsche selbst – strukturiert an Kasse und Küche übergeben, ohne Übertragungsfehler.",
      },
    ],
    featureBullets: [
      "Touch-Menüführung mit Kategorien, Varianten, Extras und Allergen-Kennzeichnung",
      "Vor Ort oder zum Mitnehmen – Steuersatz (19 % / 7 %) wird automatisch gesetzt",
      "Integriertes Payment: Karte, kontaktlos und Wallet direkt am Terminal",
      "Beleg- und Küchenbon-Druck sowie Bestellnummern-Aufruf am Gäste-Display",
      "Mehrsprachig (Deutsch, Englisch, Türkisch) – pro Standort umschaltbar",
      "Zentrale Verwaltung von Menüs, Preisen und Geräten im Backoffice",
    ],
    useCases: [
      {
        title: "Quick-Service & Fast-Food",
        text: "Hohe Frequenz, schnelle Abläufe und parallele Bestellannahme über mehrere Self-Order Terminals.",
      },
      {
        title: "Restaurants & Cafés",
        text: "Self-Ordering als Ergänzung zum Service – für Stoßzeiten, Außenbereich und Self-Pickup.",
      },
      {
        title: "Foodcourts & Filialen",
        text: "Einheitliches Bestellterminal über mehrere Standorte mit zentral gepflegten Inhalten.",
      },
    ],
    faqs: [
      {
        question: "Was kostet ein Self-Order Terminal?",
        answer:
          "Das Gerätepaket Komplett mit 27\" oder 32\" Terminal startet ab 4.999 € im Kauf, die All-in-One-Variante ab 299 € pro Monat inklusive Betrieb und Wartung. Der finale Preis hängt von Konfiguration und Integration ab.",
      },
      {
        question: "Lässt sich das Selbstbedienungsterminal an meine Kasse anbinden?",
        answer:
          "Ja. SOTKIOSK ist auf strukturierte Übergaben an Kasse, Küche und Warenwirtschaft ausgelegt. Welche Schnittstelle sinnvoll ist, klären wir vor dem Angebot anhand Ihres bestehenden Systems.",
      },
      {
        question: "Steigert ein Self-Order Terminal wirklich den Umsatz?",
        answer:
          "Self-Order Terminals erhöhen erfahrungsgemäß den durchschnittlichen Bonwert, weil Gäste in Ruhe wählen und Empfehlungen sowie Extras sichtbar sind. Gleichzeitig sinkt der Druck an der Kasse zu Stoßzeiten.",
      },
    ],
  },
  {
    slug: "restaurant-kiosk",
    navLabel: "Restaurant-Kiosk",
    metaTitle: "Restaurant-Kiosk & Self-Ordering fürs Restaurant",
    metaDescription:
      "Restaurant-Kiosk für Self-Ordering: Gäste bestellen und bezahlen am Terminal, Bestellungen laufen direkt in Küche und Kasse. Mehrsprachig & gebrandet. Demo anfragen.",
    keywords:
      "Restaurant Kiosk, Self-Ordering Restaurant, Bestellsystem Restaurant, Bestellterminal Restaurant, Kiosk Restaurant",
    eyebrow: "Restaurant-Kiosk",
    h1: "Restaurant-Kiosk für modernes Self-Ordering",
    heroLead:
      "Der SOTKIOSK Restaurant-Kiosk bringt Self-Ordering in Ihr Restaurant: Gäste stellen ihre Bestellung am Touch-Terminal zusammen, bezahlen direkt und die Bestellung landet ohne Umweg in Küche und Kasse. Im Look Ihrer Marke und in mehreren Sprachen.",
    heroImage: "/kiosk-assets/sot-kiosk-floor-kiosk.png",
    heroImageAlt:
      "Restaurant-Kiosk von SOTKIOSK als Standgerät mit Self-Ordering-Oberfläche",
    cardText:
      "Self-Ordering fürs Restaurant – gebrandet, mehrsprachig und direkt mit Küche und Kasse verbunden.",
    benefits: [
      {
        title: "Mehr Tische pro Stunde",
        text: "Schnellere Bestellannahme am Kiosk entlastet den Service und erhöht den Durchsatz in Stoßzeiten.",
      },
      {
        title: "Ihre Marke im Mittelpunkt",
        text: "Startbildschirm, Farben, Kategorien und Aktionen lassen sich vollständig auf Ihr Restaurant branden.",
      },
      {
        title: "Küche bleibt synchron",
        text: "Bestellungen erscheinen in Echtzeit auf dem Küchen-Display (KDS), fertige Nummern werden am Gäste-Display aufgerufen.",
      },
    ],
    featureBullets: [
      "Self-Ordering mit bebilderten Menüs, Menüschritten und Sonderwünschen",
      "Vor-Ort- und To-Go-Modus mit automatischem Steuersatz",
      "Bezahlung per Karte, kontaktlos oder Wallet direkt am Restaurant-Kiosk",
      "Küchen-Display (KDS) und Gäste-/Aufruf-Display inklusive Tonsignal",
      "Coupons, Treuepunkte und zeitgesteuerte Aktionen",
      "Mehrere Standorte zentral verwalten – Inhalte und Preise pro Filiale",
    ],
    useCases: [
      {
        title: "Casual & Quick Casual",
        text: "Bestellen am Kiosk, Essen am Tisch genießen – ideal für Burger, Bowls, Pizza und Pasta.",
      },
      {
        title: "Systemgastronomie",
        text: "Einheitliche Oberfläche und Preise über alle Restaurants einer Kette.",
      },
      {
        title: "Lieferung & Abholung",
        text: "To-Go- und Pickup-Prozesse mit klarer Bestellnummern-Logik am Display.",
      },
    ],
    faqs: [
      {
        question: "Ersetzt der Restaurant-Kiosk meinen Service?",
        answer:
          "Nein – der Kiosk ergänzt Ihren Service. Er übernimmt Standardbestellungen und Stoßzeiten, sodass Ihr Team mehr Zeit für Gäste, Küche und Qualität hat.",
      },
      {
        question: "Kann die Oberfläche im Design meines Restaurants erscheinen?",
        answer:
          "Ja. Farben, Inhalte, Kategorien, Bilder und Startbildschirm werden auf Marke und Sortiment angepasst. Auch das Gehäuse-Branding ist möglich.",
      },
      {
        question: "In welchen Sprachen bestellen meine Gäste?",
        answer:
          "Standardmäßig Deutsch, Englisch und Türkisch, pro Standort umschaltbar. Weitere Sprachen sind auf Anfrage möglich.",
      },
    ],
  },
  {
    slug: "doener-imbiss-kasse",
    navLabel: "Döner & Imbiss",
    metaTitle: "Bestellterminal für Döner-Laden & Imbiss",
    metaDescription:
      "Kiosk-Bestellsystem für Döner-Laden, Imbiss und Fast-Food: Selbstbedienungsterminal mit Payment, Bon und Küchenbon. Take-away & Vor Ort. Demo & Angebot anfragen.",
    keywords:
      "Kiosk Bestellsystem Döner, Bestellterminal Döner, Selbstbedienungsterminal Imbiss, Imbiss Kasse, Fast-Food Terminal, Take-Away Terminal",
    eyebrow: "Döner · Imbiss · Fast-Food",
    h1: "Bestellterminal für Döner-Laden & Imbiss",
    heroLead:
      "Das SOTKIOSK Selbstbedienungsterminal ist wie gemacht für Döner-Laden, Imbiss und Fast-Food: Gäste stellen Döner, Dürüm, Box und Beilagen selbst zusammen, bezahlen direkt und die Bestellung landet sofort als Küchenbon in der Produktion. Weniger Stress am Tresen, mehr Durchsatz zur Stoßzeit.",
    heroImage: "/kiosk-assets/screens/welcome-doener.png",
    heroImageAlt:
      "Bestelloberfläche für Döner und Imbiss auf einem SOTKIOSK Selbstbedienungsterminal",
    cardText:
      "Selbstbedienungsterminal für Döner-Laden, Imbiss und Fast-Food – Take-away, Payment und Küchenbon inklusive.",
    benefits: [
      {
        title: "Tresen entlasten",
        text: "Gäste bestellen selbst am Terminal, während Ihr Team durchgehend produziert. Die Schlange löst sich schneller auf.",
      },
      {
        title: "Extras & Soßen sichtbar",
        text: "Beilagen, Soßen und Upgrades werden aktiv angeboten – das hebt den Bon, ohne dass jemand nachfragen muss.",
      },
      {
        title: "Stoßzeiten im Griff",
        text: "Mittags- und Abendrush mit mehreren parallelen Bestellungen statt Engpass an einer Kasse.",
      },
    ],
    featureBullets: [
      "Schnellauswahl für Döner, Dürüm, Box, Menüs und Beilagen mit Extras",
      "Vor Ort oder zum Mitnehmen mit automatischem Steuersatz (19 % / 7 %)",
      "Kartenzahlung, kontaktlos und Wallet direkt am Imbiss-Terminal",
      "Küchenbon- und Belegdruck, Bestellnummern-Aufruf am Display",
      "Mehrsprachig – ideal für gemischtes Laufpublikum",
      "Gehäuse und Oberfläche im Branding Ihres Ladens",
    ],
    useCases: [
      {
        title: "Döner & Dürüm",
        text: "Klassiker, Boxen und Menüs mit Soßen- und Extra-Auswahl in Sekunden zusammengestellt.",
      },
      {
        title: "Imbiss & Snackbar",
        text: "Pommes, Burger, Snacks und Getränke – schnelle Selbstbedienung mit Payment.",
      },
      {
        title: "Take-away & Lieferdienste",
        text: "To-Go-Bestellungen mit klarer Nummern-Logik für die Abholung.",
      },
    ],
    faqs: [
      {
        question: "Lohnt sich ein Bestellterminal für einen kleinen Döner-Laden?",
        answer:
          "Gerade bei Stoßzeiten ja: Ein Selbstbedienungsterminal nimmt Bestellungen parallel auf, während Ihr Team produziert. Schon ein Terminal kann die Schlange am Tresen deutlich verkürzen und den Bon erhöhen.",
      },
      {
        question: "Welche Geräte passen in einen Imbiss mit wenig Platz?",
        answer:
          "Es gibt kompakte Theken-Terminals (ab 15,6\") und platzsparende Wandmontage-Varianten – ebenso 21,5\"–32\" Standgeräte für mehr Sichtbarkeit. Wir wählen die Bauform passend zu Ihrer Fläche.",
      },
      {
        question: "Kann ich Soßen, Extras und Menüpreise selbst pflegen?",
        answer:
          "Ja. Menüs, Extras und Preise pflegen Sie zentral im Backoffice; Änderungen werden in Echtzeit auf das Terminal ausgespielt.",
      },
    ],
  },
  {
    slug: "spendensaeule",
    navLabel: "Digitale Spendensäule",
    metaTitle: "Digitale Spendensäule & Spendenterminal",
    metaDescription:
      "Digitale Spendensäule für Kirche, Verein und Moschee: bargeldlos spenden per Karte, kontaktlos und Wallet. Spendenbeträge, Kampagnen-Branding und Kollekte digital.",
    keywords:
      "Digitale Spendensäule, Spendenterminal, Spendenautomat, Spendenkiosk, EC-Spendenbox, bargeldlos spenden, Kollekte digital",
    eyebrow: "Digitale Spendensäule",
    h1: "Digitale Spendensäule & Spendenterminal",
    heroLead:
      "Mit der SOTKIOSK Spendensäule sammeln Kirchen, Vereine und Moscheen bargeldlos Spenden: Spender wählen am Touchscreen einen Betrag und zahlen per Karte, kontaktlos oder Smartphone. Auch ohne Bargeld erreichen Sie jüngere Besucher – Gemeinden berichten von spürbar höheren Spenden.",
    heroImage: "/kiosk-assets/screens/payment-amount.png",
    heroImageAlt:
      "Digitale Spendensäule von SOTKIOSK mit Auswahl des Spendenbetrags am Touchscreen",
    cardText:
      "Bargeldlos spenden per Karte und Wallet – für Kirche, Verein und Moschee, mit Kampagnen-Branding.",
    benefits: [
      {
        title: "Mehr Spenden ohne Bargeld",
        text: "Immer weniger Besucher tragen Bargeld bei sich. Eine digitale Spendensäule fängt genau diese Spenden auf.",
      },
      {
        title: "Beträge & Kampagnen steuerbar",
        text: "Feste Beträge, freie Eingabe, Spendenzwecke und Kampagnen-Branding lassen sich zentral konfigurieren.",
      },
      {
        title: "Eine Plattform, mehrere Modi",
        text: "Dieselbe Technik wie unsere Bestellterminals – nur im Spenden-Modus. Kein separates System nötig.",
      },
    ],
    featureBullets: [
      "Spendenbetrag per Knopfdruck oder freie Eingabe am Touchscreen",
      "Bargeldlos: Karte, kontaktlos und Wallet (Apple Pay / Google Pay)",
      "Kampagnen-Branding, Spendenzwecke und eigene Startbildschirme",
      "Kollekten- und Zweck-Umschaltung nach Zeitplan möglich",
      "Stand-, Wand- und Theken-Varianten für Kirche, Verein und Foyer",
      "Zentrale Verwaltung mehrerer Standorte und Geräte",
    ],
    useCases: [
      {
        title: "Kirchen & Gemeinden",
        text: "Kollekte und Spenden digital – mit umschaltbaren Zwecken nach Kollektenplan.",
      },
      {
        title: "Vereine & Stiftungen",
        text: "Spendenkampagnen bei Veranstaltungen, im Vereinsheim oder am Infostand.",
      },
      {
        title: "Moscheen & soziale Einrichtungen",
        text: "Diskrete, schnelle und bargeldlose Spende direkt vor Ort.",
      },
    ],
    faqs: [
      {
        question: "Wie funktioniert die digitale Spendensäule?",
        answer:
          "Der Spender wählt am Display einen Betrag – fest hinterlegt oder frei eingegeben – und hält Karte oder Smartphone an das Terminal. Die Spende ist in Sekunden bargeldlos abgeschlossen.",
      },
      {
        question: "Für wen eignet sich ein Spendenterminal?",
        answer:
          "Für Kirchen, Gemeinden, Vereine, Stiftungen, Moscheen und soziale Einrichtungen, die bargeldlose Spenden und Kollekten ermöglichen möchten.",
      },
      {
        question: "Kann ich verschiedene Spendenzwecke und Kampagnen hinterlegen?",
        answer:
          "Ja. Spendenzwecke, Beträge, Texte und Branding werden zentral gepflegt und lassen sich – etwa nach Kollektenplan – zeitgesteuert umschalten.",
      },
    ],
    demo: {
      url: "https://kiosk.sotkiosk.com/donation/bee9a6aa-6239-4368-916b-f50f44fb8941/bf12fecc-114e-43ee-b23f-8f865ae8330c",
      title: "SOTKIOSK Spenden-Kiosk – Live-Demo",
      label: "Spenden-Demo ansehen",
    },
  },
  {
    slug: "self-checkout",
    navLabel: "Self-Checkout",
    metaTitle: "Self-Checkout & SB-Kasse für den Einzelhandel",
    metaDescription:
      "Self-Checkout für den Einzelhandel: SB-Kasse mit Scanner, Waage und Payment. Kunden scannen und bezahlen selbst, Schlangen werden kürzer. Demo & Angebot anfragen.",
    keywords:
      "Self-Checkout, SB-Kasse, Selbstbedienungskasse, Self-Checkout Einzelhandel, Self-Checkout Terminal, SB-Kasse Retail",
    eyebrow: "Self-Checkout · Retail",
    h1: "Self-Checkout & SB-Kasse für den Einzelhandel",
    heroLead:
      "Mit dem SOTKIOSK Self-Checkout scannen und bezahlen Ihre Kunden selbst: Barcode scannen, Ware wiegen, kontaktlos bezahlen – fertig. Die Selbstbedienungskasse verkürzt Schlangen, entlastet Ihr Personal und sorgt für ein modernes Einkaufserlebnis.",
    heroImage: "/kiosk-assets/alibaba/liviao-stand-lineup.jpg",
    heroImageAlt:
      "Self-Checkout SB-Kasse von SOTKIOSK mit Scanner und Waage für den Einzelhandel",
    cardText:
      "SB-Kasse mit Scanner, Waage und Payment – Kunden bezahlen selbst, Schlangen werden kürzer.",
    benefits: [
      {
        title: "Kürzere Schlangen",
        text: "Mehrere Self-Checkout-Stationen wickeln Bezahlvorgänge parallel ab – besonders in Stoßzeiten.",
      },
      {
        title: "Personal gezielt einsetzen",
        text: "Ihr Team betreut mehrere SB-Kassen gleichzeitig und ist für Beratung statt Kassieren frei.",
      },
      {
        title: "Modernes Einkaufserlebnis",
        text: "Schnelles, kontaktloses Bezahlen am Self-Checkout-Terminal – wie Kunden es aus großen Ketten kennen.",
      },
    ],
    featureBullets: [
      "Barcode-Scanner und Waage für Stück- und Gewichtsartikel",
      "Kontaktlose Kartenzahlung und Wallet direkt an der SB-Kasse",
      "Beleg- und Quittungsdruck am Terminal",
      "Stand- und Theken-Varianten von 21,5\" bis 32\"",
      "Zentrale Artikel- und Preispflege im Backoffice",
      "Mehrsprachige Oberfläche und barrierearme Bedienhöhe verfügbar",
    ],
    useCases: [
      {
        title: "Märkte & Convenience",
        text: "Schneller Self-Checkout für Hofläden, Kioske, Bäckereien und Convenience-Flächen.",
      },
      {
        title: "Showrooms & Fachhandel",
        text: "Bezahlen am Point of Interaction ohne Weg zur klassischen Kasse.",
      },
      {
        title: "Kantinen & Betriebsverpflegung",
        text: "Selbstbedienungskasse für die schnelle Abrechnung in der Mittagspause.",
      },
    ],
    faqs: [
      {
        question: "Welche Hardware braucht eine SB-Kasse?",
        answer:
          "Für den Self-Checkout sind Scanner und – bei Gewichtsartikeln – eine Waage sinnvoll, dazu ein Payment-Terminal und ein Belegdrucker. Wir konfigurieren das Gerät passend zu Ihrem Sortiment.",
      },
      {
        question: "Eignet sich Self-Checkout auch für kleine Flächen?",
        answer:
          "Ja. Es gibt kompakte Theken- und platzsparende Standvarianten, sodass sich eine SB-Kasse auch in kleineren Märkten und Läden umsetzen lässt.",
      },
      {
        question: "Wie wird der Self-Checkout an mein Warenwirtschaftssystem angebunden?",
        answer:
          "SOTKIOSK ist auf strukturierte Übergaben an Kasse und Warenwirtschaft ausgelegt. Die passende Schnittstelle klären wir vor dem Angebot anhand Ihres Systems.",
      },
    ],
  },
  {
    slug: "kantine",
    navLabel: "Kantine",
    metaTitle: "Kantinen-Terminal & Bezahlsystem für Kantinen",
    metaDescription:
      "Kantinen-Terminal für Betriebsrestaurants und Mensen: digitale Tageskarte, schnelle Essensausgabe und bargeldlose Bezahlung. Weniger Kassenstau in der Mittagspause.",
    keywords:
      "Kantinen Terminal, Bezahlsystem Kantine, Self-Order Kantine, Essensausgabe Terminal, Mensa Terminal, Betriebsrestaurant Kiosk",
    eyebrow: "Kantine · Betriebsverpflegung",
    h1: "Kantinen-Terminal für schnelle Mittagspausen",
    heroLead:
      "Das SOTKIOSK Kantinen-Terminal bringt Tempo in die Mittagspause: Gäste sehen die digitale Tageskarte, wählen ihr Gericht und bezahlen bargeldlos – ohne langen Kassenstau. Essenspläne und Preise pflegen Sie zentral, Ausweise und QR-Prozesse lassen sich einbinden.",
    heroImage: "/kiosk-assets/sot-kiosk-compact-kiosk.png",
    heroImageAlt:
      "Kantinen-Terminal von SOTKIOSK mit digitaler Tageskarte und bargeldloser Bezahlung",
    cardText:
      "Digitale Tageskarte, schnelle Essensausgabe und bargeldlose Bezahlung – weniger Stau in der Mittagspause.",
    benefits: [
      {
        title: "Stoßzeiten entzerren",
        text: "Mehrere Terminals nehmen die Mittags-Welle parallel auf – kürzere Wartezeiten an der Ausgabe.",
      },
      {
        title: "Tageskarten zentral pflegen",
        text: "Essenspläne, Preise und Allergene werden zentral gepflegt und tagesaktuell ausgespielt.",
      },
      {
        title: "Standorte & Rollen",
        text: "Mandanten-, Standort- und Rollenlogik für mehrere Betriebsrestaurants oder Mensen.",
      },
    ],
    featureBullets: [
      "Digitale Tages- und Wochenkarte mit Allergen-Kennzeichnung",
      "Bargeldlose Bezahlung per Karte, kontaktlos und Wallet",
      "Ausweis-, Mitarbeiter- oder QR-Prozesse integrierbar",
      "Standortspezifische Inhalte, Preise und Subventionslogik",
      "Übergabe an Kasse, Küche und Essensausgabe",
      "Mehrsprachige Oberfläche und barrierearme Bedienung",
    ],
    useCases: [
      {
        title: "Betriebsrestaurants",
        text: "Schnelle Selbstbedienung mit Subventions- und Ausweislogik für Mitarbeitende.",
      },
      {
        title: "Mensen & Bildung",
        text: "Hoher Durchsatz zur Mittagszeit mit klaren, digitalen Tageskarten.",
      },
      {
        title: "Care & Health",
        text: "Strukturierte Essensausgabe in Einrichtungen mit festen Abläufen.",
      },
    ],
    faqs: [
      {
        question: "Kann das Kantinen-Terminal Mitarbeiterausweise verarbeiten?",
        answer:
          "Ja. Ausweis-, Mitarbeiter- oder QR-/NFC-Prozesse lassen sich einbinden – auch für Subventionen oder Kostenstellen. Den konkreten Ablauf klären wir vor dem Angebot.",
      },
      {
        question: "Wie aktuell sind die Tageskarten?",
        answer:
          "Sie pflegen Essenspläne, Preise und Allergene zentral im Backoffice; Änderungen erscheinen in Echtzeit auf den Terminals – ideal für täglich wechselnde Menüs.",
      },
      {
        question: "Funktioniert das Bezahlsystem über mehrere Standorte?",
        answer:
          "Ja. Mit Mandanten-, Standort- und Rollenlogik verwalten Sie mehrere Betriebsrestaurants oder Mensen zentral mit jeweils eigenen Inhalten und Preisen.",
      },
    ],
  },
  {
    slug: "digital-signage",
    navLabel: "Digital Signage",
    metaTitle: "Digitale Menütafel & Digital Signage für Gastronomie",
    metaDescription:
      "Digitale Menütafel & Digital Signage für die Gastronomie: Speisekarte und Angebote auf Smart-TVs anzeigen, zentral steuern und tagesaktuell ändern – über alle Standorte.",
    keywords:
      "Digital Signage, digitale Menütafel, digitales Menüboard, digitale Speisekarte, Digital Signage Gastronomie, Smart TV Menüboard",
    eyebrow: "Digital Signage · Smart TV",
    h1: "Digitale Menütafel & Digital Signage für die Gastronomie",
    heroLead:
      "Mit SOTKIOSK Digital Signage zeigen Sie Speisekarte, Preise und Angebote als digitale Menütafel auf jedem Smart-TV. Dasselbe Backoffice, das Ihre Kiosks bespielt, steuert auch die Menüboards und Gäste-Displays – zentral, in Echtzeit und über alle Standorte hinweg.",
    heroImage: "/kiosk-assets/software-dashboard-laptop.png",
    heroImageAlt:
      "SOTKIOSK Backoffice steuert digitale Menütafel und Digital Signage auf Smart-TVs",
    cardText:
      "Speisekarte und Angebote als digitale Menütafel auf Smart-TVs – zentral gesteuert, tagesaktuell.",
    benefits: [
      {
        title: "Ein System für Kiosk & Display",
        text: "Menüs und Preise pflegen Sie einmal – sie erscheinen auf Bestellterminal und digitaler Menütafel gleichzeitig.",
      },
      {
        title: "Tagesaktuell statt Kreidetafel",
        text: "Angebote, Preise und Aktionen ändern Sie in Sekunden – zeitgesteuert und ohne Druckkosten.",
      },
      {
        title: "Über alle Standorte",
        text: "Zentral verwaltete Inhalte werden filialübergreifend auf alle Smart-TVs ausgespielt.",
      },
    ],
    featureBullets: [
      "Digitale Menüboards und Speisekarten auf handelsüblichen Smart-TVs",
      "Zentrale Inhalts- und Preispflege im Backoffice – in Echtzeit ausgespielt",
      "Zeitgesteuerte Inhalte: Frühstück, Mittag, Happy Hour automatisch",
      "Gäste- und Aufruf-Display für fertige Bestellnummern inkl. Tonsignal",
      "Filial- und standortspezifische Inhalte über eine Oberfläche",
      "Konsistent mit der Kiosk-Oberfläche – ein Branding für alles",
    ],
    useCases: [
      {
        title: "Quick-Service & Fast-Food",
        text: "Digitale Menüboards über der Theke, synchron mit den Self-Order Terminals.",
      },
      {
        title: "Cafés & Bäckereien",
        text: "Tagesangebote und Preise flexibel anzeigen – ohne Kreidetafel und Nachdruck.",
      },
      {
        title: "Filialisten & Ketten",
        text: "Einheitliche Speisekarten-Displays zentral über alle Standorte steuern.",
      },
    ],
    faqs: [
      {
        question: "Brauche ich spezielle Hardware für die digitale Menütafel?",
        answer:
          "In der Regel genügen handelsübliche Smart-TVs. Die Inhalte kommen aus demselben SOTKIOSK Backoffice, das auch Ihre Kiosks steuert – so bleibt alles konsistent.",
      },
      {
        question: "Kann ich Kiosk und Menüboard gemeinsam pflegen?",
        answer:
          "Ja, das ist der Kern: Menüs, Preise und Aktionen pflegen Sie einmal zentral, und sie erscheinen synchron auf Bestellterminal und digitaler Menütafel.",
      },
      {
        question: "Lassen sich Inhalte zeitgesteuert anzeigen?",
        answer:
          "Ja. Sie können Speisekarten und Angebote nach Tageszeit oder Zeitplan automatisch wechseln lassen – etwa Frühstück, Mittagskarte und Happy Hour.",
      },
    ],
  },
]

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug)
}
