import type { Data } from "@measured/puck";

/**
 * Default Puck page data for each slug.
 * When the editor opens a page that has no Supabase data yet,
 * it will be pre-populated with these blocks so the user can
 * immediately start editing rather than starting from blank.
 */

const homepageData: Data = {
  content: [
    {
      type: "Hero",
      props: {
        id: "hero-home",
        title: "Welkom bij Duurzaam Duinoord",
        subtitle:
          "Een bewonersinitiatief voor een duurzame, aantrekkelijke en leefbare wijk in Den Haag. Samen werken we aan mobiliteit, energie, circulaire economie en onze leefomgeving.",
        buttonText: "Doe Mee",
        buttonLink: "/contact",
      },
    },
    {
      type: "SectionHeader",
      props: {
        id: "sh-themes",
        title: "Onze Thema's",
        subtitle: "Ontdek waar wij ons als wijk voor inzetten",
        alignment: "center" as const,
      },
    },
    {
      type: "FeatureCard",
      props: {
        id: "fc-mob",
        title: "Mobiliteit",
        description:
          "Slimme, schone vervoersoplossingen. Autodelen, fietsen en meer ruimte voor mensen.",
        icon: "home" as const,
      },
    },
    {
      type: "FeatureCard",
      props: {
        id: "fc-ener",
        title: "Energie",
        description:
          "Verduurzaming van historische woningen. Isolatie, warmtepompen en zonnepanelen.",
        icon: "sun" as const,
      },
    },
    {
      type: "FeatureCard",
      props: {
        id: "fc-circ",
        title: "Circulaire Economie",
        description:
          "Minder afval, meer hergebruik. Repair Café, deelplatforms en inzamelacties.",
        icon: "recycle" as const,
      },
    },
    {
      type: "FeatureCard",
      props: {
        id: "fc-leef",
        title: "Leefomgeving",
        description:
          "Een groenere, koelere wijk. Geveltuinen, tegelwippen en biodiversiteit.",
        icon: "leaf" as const,
      },
    },
    {
      type: "ContactCTA",
      props: {
        id: "cta-home",
        title: "Doe mee!",
        description:
          "Wil je meedoen met een van onze initiatieven? Neem contact met ons op of kom langs bij een van onze bijeenkomsten.",
        buttonText: "Neem Contact Op",
        buttonLink: "/contact",
        email: "info@duurzaamduinoord.nl",
      },
    },
  ],
  root: { props: { title: "Home" } },
  zones: {},
};

const mobiliteitData: Data = {
  content: [
    {
      type: "Hero",
      props: {
        id: "hero-mob",
        title: "Slimme Mobiliteit",
        subtitle:
          "Schone, veilige vervoersoplossingen die de ruimte in Den Haag beter benutten. Minder autogebruik, meer delen en schonere lucht.",
        buttonText: "Doe mee met autodelen",
        buttonLink: "mailto:info@duurzaamduinoord.nl",
      },
    },
    {
      type: "SectionHeader",
      props: {
        id: "sh-mob-wat",
        title: "Wat is het?",
        subtitle: "",
        alignment: "left" as const,
      },
    },
    {
      type: "Text",
      props: {
        id: "txt-mob-1",
        content:
          "Slimme mobiliteit, ook smart mobility genoemd, gaat om schone, veilige vervoersoplossingen die de ruimte in Den Haag beter benutten. Ons doel is Duinoord duurzamer, aantrekkelijk en leefbaar te houden, met minder autogebruik, meer delen en schonere lucht.\n\nDe gemeente is bezig met een mobiliteitstransitie. Dit betekent dat de gemeente manieren van vervoer aanmoedigt die zuinig met de ruimte omgaan en goed zijn voor de stad en zijn inwoners. Bijvoorbeeld lopen, fietsen en openbaar vervoer.",
      },
    },
    {
      type: "SectionHeader",
      props: {
        id: "sh-mob-doen",
        title: "Wat doen wij al?",
        subtitle: "",
        alignment: "left" as const,
      },
    },
    {
      type: "Text",
      props: {
        id: "txt-mob-2",
        content:
          "In Duinoord zijn we bezig vooral met promotie voor het autodelen door onze bewonersgroep. De meeste auto's in Nederland staan het grootste deel van de tijd stil, en een gemiddelde autobezitter betaalt ongeveer €650-750 per maand. Autodelen is goed voor de wijk en goed voor je portemonnee!",
      },
    },
    {
      type: "BulletList",
      props: {
        id: "bl-mob-voor",
        title: "Voordelen van autodelen",
        items:
          "Je hebt geen kosten voor de aanschaf, onderhoud en reparatie van een eigen auto\nJe betaalt geen wegenbelasting en autoverzekering\nVoor elke gelegenheid een geschikte auto\nGeen zorg om verzekering, deze biedt het deelautoplatform aan",
      },
    },
    {
      type: "BulletList",
      props: {
        id: "bl-mob-act",
        title: "Promotieactiviteiten",
        items:
          "Informatieavonden over autodelen in Duinoord\nAutodelen Duinoord aanwezig op de Go Green Markt",
      },
    },
    {
      type: "SectionHeader",
      props: {
        id: "sh-mob-future",
        title: "Wat zouden we nog kunnen doen?",
        subtitle: "",
        alignment: "left" as const,
      },
    },
    {
      type: "BulletList",
      props: {
        id: "bl-mob-future",
        title: "Toekomstige initiatieven",
        items:
          "Fietsstimuleringsacties in de wijk\nDeelfietsen of deelbakfietsen\nProjecten rond verkeersveiligheid en luchtkwaliteit",
      },
    },
    {
      type: "ContactCTA",
      props: {
        id: "cta-mob",
        title: "Doe jij mee?",
        description:
          "Autodelen is goed voor de wijk en goed voor je portemonnee! Neem contact met ons op.",
        buttonText: "Neem Contact Op",
        buttonLink: "mailto:info@duurzaamduinoord.nl",
        email: "info@duurzaamduinoord.nl",
      },
    },
  ],
  root: { props: { title: "Mobiliteit" } },
  zones: {},
};

const energieData: Data = {
  content: [
    {
      type: "Hero",
      props: {
        id: "hero-en",
        title: "Energie in Duinoord",
        subtitle:
          "Het verduurzamen van onze historische woningen is een van de belangrijkste uitdagingen. Comfortabeler wonen met een lagere energierekening en een kleinere ecologische voetafdruk.",
        buttonText: "Vraag advies aan",
        buttonLink: "mailto:info@duurzaamduinoord.nl",
      },
    },
    {
      type: "SectionHeader",
      props: {
        id: "sh-en-doen",
        title: "Wat doen wij al?",
        subtitle: "",
        alignment: "left" as const,
      },
    },
    {
      type: "BulletList",
      props: {
        id: "bl-en-doen",
        title: "Huidige activiteiten",
        items:
          "Energiecoaching – Getrainde buurtgenoten geven gratis advies op maat over jouw woning\nWarmtetransitie – Wij volgen de gemeentelijke plannen voor een aardgasvrij Duinoord\nMetingen – Warmtebeelden om lekken op te sporen en CO₂-meters voor een gezond binnenklimaat\nKennis delen – Via webinars, workshops en onze eigen podcast over energiethematiek\nOnderzoek – We brengen het energiegebruik van de wijk in kaart via bewonersonderzoek",
      },
    },
    {
      type: "SectionHeader",
      props: {
        id: "sh-en-future",
        title: "Wat gaan we doen?",
        subtitle: "",
        alignment: "left" as const,
      },
    },
    {
      type: "BulletList",
      props: {
        id: "bl-en-help",
        title: "Hulp bij beslissen",
        items:
          "Keuzehulp 'Wat past bij mijn woning?' – Praktische stappenplannen op basis van bouwjaar en budget\n'De Duinoord-standaard' – Verduurzamingspaden voor monumentale herenhuizen (1890-1910)\nOfferte-spreekuur – Samen offertes voor isolatie, glas en warmtepompen doornemen\nSubsidie-wijzer – Eén helder overzicht van beschikbare vergoedingen",
      },
    },
    {
      type: "BulletList",
      props: {
        id: "bl-en-learn",
        title: "Leren van de buren",
        items:
          "Maatregel van de maand – Elke maand één concrete ingreep met checklist en kosten\nBewonersverhalen & case studies – Eerlijke verhalen over comfort, geluid en leerpunten\nVaste kennisbank – Bibliotheek met webinars en hand-outs",
      },
    },
    {
      type: "BulletList",
      props: {
        id: "bl-en-samen",
        title: "Samen aan de slag",
        items:
          "Try-before-you-buy (Energie-bieb) – Leen radiatorventilatoren, energiemeters of een inductieplaat\nCollectieve inkoop – Samen sterker bij aanschaf van isolatie, glas of warmtepompen\nEnergiebesparingschallenge – Een sportieve strijd tussen straten\nZon zonder dak – Hulp voor bewoners die willen investeren in zonne-energie",
      },
    },
    {
      type: "ContactCTA",
      props: {
        id: "cta-en",
        title: "Bespaar energie, bespaar geld",
        description:
          "Vraag gratis energiecoaching aan of meld je aan voor onze collectieve inkoopacties.",
        buttonText: "Vraag Advies Aan",
        buttonLink: "mailto:info@duurzaamduinoord.nl",
        email: "info@duurzaamduinoord.nl",
      },
    },
  ],
  root: { props: { title: "Energie" } },
  zones: {},
};

const circulairData: Data = {
  content: [
    {
      type: "Hero",
      props: {
        id: "hero-ci",
        title: "Circulaire Economie",
        subtitle:
          "In een circulaire wijk bestaat afval niet meer, maar is het een grondstof voor iets nieuws. Minder consumeren, materialen delen en kapotte spullen repareren.",
        buttonText: "Doe mee",
        buttonLink: "mailto:info@duurzaamduinoord.nl",
      },
    },
    {
      type: "SectionHeader",
      props: {
        id: "sh-ci-doen",
        title: "Wat doen wij al?",
        subtitle: "",
        alignment: "left" as const,
      },
    },
    {
      type: "BulletList",
      props: {
        id: "bl-ci-doen",
        title: "Huidige initiatieven",
        items:
          "Duinoord onder de Kurk – Succesvolle inzamelactie waarbij natuurkurk een tweede leven krijgt als isolatiemateriaal\nTegelwipacties – Gewipte tegels krijgen een nieuwe bestemming of worden duurzaam afgevoerd\nEvents & inspiratie – Tijdens de Go Green Markt laten we hergebruik en reparatie in de praktijk zien",
      },
    },
    {
      type: "SectionHeader",
      props: {
        id: "sh-ci-future",
        title: "Wat gaan we doen?",
        subtitle: "",
        alignment: "left" as const,
      },
    },
    {
      type: "BulletList",
      props: {
        id: "bl-ci-opruim",
        title: "Hulp bij opruimen & hergebruik",
        items:
          "'Waar kan ik het kwijt?'-gids – Overzicht per materiaal met alle lokale inleverpunten\nMaterialen-marktplaats – Platform voor renovatieresten binnen de wijk\nKurkactie 2.0 – Inzichtelijk maken hoeveel kurk wordt opgehaald",
      },
    },
    {
      type: "BulletList",
      props: {
        id: "bl-ci-delen",
        title: "Samen delen & ruilen",
        items:
          "Gereedschap-bieb (Library of Things) – Lenen in plaats van kopen\nMaandelijks mini-ruilmoment – Laagdrempelig ruilen van kleding en spullen\nCompost-routekaart – Overzicht van wormenhotels en compostplekken",
      },
    },
    {
      type: "BulletList",
      props: {
        id: "bl-ci-repair",
        title: "Reparatie & vakmanschap",
        items:
          "Repair Café Duinoord – Agenda, succesverhalen en aanmeldformulier\nWorkshops repareren – Praktische avonden voor fiets, kleding en elektra\nUpcycling voor oude huizen – Circulair restaureren met historische uitstraling",
      },
    },
    {
      type: "ContactCTA",
      props: {
        id: "cta-ci",
        title: "Minder afval, meer waarde",
        description:
          "Heb je iets te repareren, te ruilen of te delen? Kom naar ons Repair Café of neem contact op!",
        buttonText: "Meld Je Aan",
        buttonLink: "mailto:info@duurzaamduinoord.nl",
        email: "info@duurzaamduinoord.nl",
      },
    },
  ],
  root: { props: { title: "Circulaire Economie" } },
  zones: {},
};

const leefomgevingData: Data = {
  content: [
    {
      type: "Hero",
      props: {
        id: "hero-le",
        title: "Duurzame Leefomgeving",
        subtitle:
          "Een prettige, gezonde en groene wijk voor mens én natuur. Samen maken we Duinoord groener en koeler.",
        buttonText: "Doe mee",
        buttonLink: "mailto:info@duurzaamduinoord.nl",
      },
    },
    {
      type: "SectionHeader",
      props: {
        id: "sh-le-focus",
        title: "Onze focus",
        subtitle: "",
        alignment: "center" as const,
      },
    },
    {
      type: "FeatureCard",
      props: {
        id: "fc-le-groen",
        title: "Groen & Biodiversiteit",
        description:
          "Geveltuinen, boomspiegels, bijen/vlinderhotels, inheemse planten en tegelwippen voor een groene, natuurinclusieve wijk.",
        icon: "leaf" as const,
      },
    },
    {
      type: "FeatureCard",
      props: {
        id: "fc-le-water",
        title: "Klimaatadaptatie & Water",
        description:
          "Regentonnen, waterdoorlatende bestrating, groene koele plekken en bewust omgaan met water.",
        icon: "home" as const,
      },
    },
    {
      type: "SectionHeader",
      props: {
        id: "sh-le-doen",
        title: "Wat doen wij al?",
        subtitle: "",
        alignment: "left" as const,
      },
    },
    {
      type: "BulletList",
      props: {
        id: "bl-le-doen",
        title: "Huidige activiteiten",
        items:
          "Jaarlijkse tegelwipactie\nOrganisatie van de Go Green Markt\nZichtbaar maken vergroende plekken in Duinoord\nTest met wormenhotel\nInsectenhotels maken\nLezing over kurksedumdaken\nFijnstofmetingen\nUitlenen van CO₂-meter om binnenklimaat te meten",
      },
    },
    {
      type: "SectionHeader",
      props: {
        id: "sh-le-future",
        title: "Wat zouden we nog kunnen doen?",
        subtitle: "",
        alignment: "left" as const,
      },
    },
    {
      type: "BulletList",
      props: {
        id: "bl-le-future",
        title: "Toekomstige ideeën",
        items:
          "Subsidieregelingen op de website noemen (klimaatadaptatie gemeente)\nMinikwekerij inrichten op het Helena van Doeverenplantsoen\nActies rondom regentonnen en compostbakken\nInitiatieven rondom plantaardig eten, koken en je eigen groenten verbouwen",
      },
    },
    {
      type: "BulletList",
      props: {
        id: "bl-le-anderen",
        title: "Wat doen anderen?",
        items:
          "Werkgroep Groen Duinoord – informatie over vergroening en klimplanten\nStadstuinen opzetten – Zeeheldentuin, Schilderswijk\nWerkgroep Groene Kansen Statenkwartier – inspiratiedagen en geveltuincompetities",
      },
    },
    {
      type: "ContactCTA",
      props: {
        id: "cta-le",
        title: "Vergroen jouw straat!",
        description:
          "Wil je een geveltuin aanleggen, meedoen met tegelwippen of een regenton plaatsen? Neem contact met ons op!",
        buttonText: "Doe Mee",
        buttonLink: "mailto:info@duurzaamduinoord.nl",
        email: "info@duurzaamduinoord.nl",
      },
    },
  ],
  root: { props: { title: "Duurzame Leefomgeving" } },
  zones: {},
};

/**
 * Returns default Puck data for a given slug.
 * Used by the editor when no Supabase data exists yet.
 */
export function getDefaultPageData(slug: string): Data {
  const defaults: Record<string, Data> = {
    "/": homepageData,
    "/home": homepageData,
    "/mobiliteit": mobiliteitData,
    "/energie": energieData,
    "/circulair": circulairData,
    "/leefomgeving": leefomgevingData,
  };

  return defaults[slug] || { content: [], root: { props: { title: "" } }, zones: {} };
}
