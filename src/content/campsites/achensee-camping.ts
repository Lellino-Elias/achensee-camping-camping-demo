import type { CampsiteConfig } from "../types";

const IMG = "/campsites/achensee-camping";

const achenseeCamping: CampsiteConfig = {
  name: "Seecamping Wimmer",
  shortName: "Wimmer",
  slug: "achensee-camping",
  ort: "Maurach am Achensee",
  region: "Tirol",
  brandKind: "Seecamping",
  see: "Achensee",
  regionLong: "Achensee · Maurach · Tirol · Österreich",

  heroVariant: "center",

  claim: "Dein Sommer am kristallklaren Achensee",
  claimEmphasis: "kristallklaren Achensee",
  emailDetail: "eure Lage direkt am Achensee, nur 100 Meter vom Badestrand",
  intro:
    "Direkt am Ufer des Achensees, eingebettet zwischen Bäumen und gepflegten Wiesen: Bis zum Badestrand sind es 100 Meter, zur Schiffsanlegestelle 250 — Restaurant und Brötchenservice gibt es gleich dazu.",

  logo: { src: `${IMG}/logo-53b4610c48.png`, alt: "Seecamping Wimmer Logo" },

  statement: {
    text: "Vom Stellplatz bis zum Badestrand sind es keine hundert Schritte.",
    emphasis: "keine hundert Schritte",
  },

  pillars: [
    {
      title: "Direkt am Achensee",
      text: "Der Platz liegt unmittelbar am Ufer des Achensees — der Badestrand ist in 100 Metern erreicht.",
      image: { src: `${IMG}/activity-b6bd9d99af.webp`, alt: "Luftbild: Seecamping Wimmer am Strand des Achensees" },
    },
    {
      title: "Stellplätze mit Seeblick",
      text: "Großzügige Wiesenplätze mit Blick auf See und Berge, jeder mit eigenem Stromanschluss.",
      image: { src: `${IMG}/gallery-3c71b732b3.webp`, alt: "Stellplätze am Achensee mit Bergpanorama" },
    },
    {
      title: "Mitten in der Bergwelt",
      text: "Rund um den See türmen sich Rofan und Karwendel — Tiroler Bergpanorama direkt vom Vorzelt.",
      image: { src: `${IMG}/gallery-dc390bcdc8.webp`, alt: "Camper mit Blick auf Berge und Achensee" },
    },
  ],

  usps: [
    "Direkt am Achensee",
    "Badestrand in 100 m",
    "Restaurant am Platz",
    "Strom an jedem Platz",
    "Hunde willkommen",
    "Brötchenservice täglich",
  ],

  trust: {
    heading: "Klein, fein und direkt am See",
    headingEmphasis: "direkt am See",
    intro:
      "Ein familiär geführter Platz, den Gäste für den freundlichen Empfang, die gepflegten Sanitäranlagen und das gute Restaurant am Platz schätzen — direkt am kristallklaren Achensee.",
  },

  awards: [],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/hero-843cd7daf9.webp`, alt: "Luftaufnahme vom Achensee mit Segelbooten und Tiroler Bergen" },
  },

  camping: {
    heading: "Camping direkt am Wasser",
    intro:
      "Ein überschaubarer, gepflegter Platz unmittelbar am See: parzellierte Stellplätze mit Strom, Restaurant, Brötchenservice und kurze Wege zu Strand, Schiff und Supermarkt.",
    features: [
      {
        title: "Parzellierte Stellplätze",
        text: "Jeder Platz ist großzügig parzelliert, mit eigenem Stromanschluss (10 A) und ohne Anschlussgebühren.",
        image: { src: `${IMG}/gallery-f59cf24d65.webp`, alt: "Parzellierte Stellplätze des Seecamping Wimmer von oben" },
      },
      {
        title: "E-Bike-Verleih am Platz",
        text: "Direkt am Platz mietest du hochwertige E-Bikes und erkundest die Seenlandschaft Tirols — Kinderanhänger buchbar.",
        image: { src: `${IMG}/gallery-a9880872eb.webp`, alt: "Radfahrer auf dem Seeuferweg am Achensee" },
      },
      {
        title: "Zentrale Lage am See",
        text: "Badestrand in 100 Metern, Schiffsanlegestelle in 250 — und der Supermarkt liegt direkt gegenüber.",
        image: { src: `${IMG}/gallery-079bdc324c.webp`, alt: "Luftaufnahme der zentralen Lage des Campingplatzes am Achensee" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an den Achensee",
    modes: [
      {
        title: "Mit dem Auto",
        text: "A12 Inntalautobahn bis Abfahrt Wiesing, dann über die B181 in rund zehn Minuten nach Maurach.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Jenbach (ÖBB), weiter mit der nostalgischen Achenseebahn oder dem Bus hinauf nach Maurach.",
      },
      {
        title: "Flughafen",
        text: "Innsbruck rund 50 Minuten, München etwa anderthalb Stunden — beide bequem über die A12 erreichbar.",
      },
    ],
  },

  galerie: {
    heading: "Rund um den Achensee",
    headingEmphasis: "Achensee",
    intro:
      "500 km Wanderwege, Schifffahrt seit 1887 und Bergbahnen ringsum — die Urlaubsregion Achensee beginnt direkt vor dem Platz.",
    tag: "April bis Oktober",
    images: [
      { src: `${IMG}/activity-3e590dbd69.webp`, alt: "Wandern mit Bergpanorama über dem Achensee" },
      { src: `${IMG}/gallery-ff18161186.webp`, alt: "Schiff der Achenseeschifffahrt am Steg" },
    ],
  },

  booking: {
    heading: "Wann kommst du an den Achensee?",
    headingEmphasis: "an den Achensee",
    intro:
      "Wähle Zeitraum und Personen — wir bestätigen deine Wunschposition persönlich. Online buchbar über das Buchungsportal.",
    pricesArePlaceholder: false,
    priceNote: "ab-Preis Nebensaison (Saison C) · Paket für 2 Personen · zzgl. Kurtaxe € 3 pro Person/Tag ab 15 Jahren",
    highlight: {
      title: "Direkt am Badestrand",
      text: "Vom Stellplatz sind es nur 100 Meter bis zum Strand am Achensee.",
    },
    categories: [
      { id: "stellplatz", label: "Wohnwagen & Wohnmobil", perNight: 37, perExtraGuest: 10 },
      { id: "zelt", label: "Zeltplatz", perNight: 30, perExtraGuest: 10 },
    ],
  },

  kontakt: {
    coords: { lat: 47.432862, lng: 11.734691 },
    tel: "+43 5243 20238",
    telHref: "tel:+43524320238",
    mail: "info@achensee-camping.at",
    facebook: "https://www.facebook.com/See-Camping-WImmer-1114478655340050/",
    adresse: "Achenseestrasse 75 · 6212 Maurach · Tirol",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping" },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
    { label: "Kontakt", href: "#kontakt" },
  ],
};

export default achenseeCamping;
