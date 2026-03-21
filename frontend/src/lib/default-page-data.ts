import type { Data } from "@measured/puck";

const homepageData: Data = {
  content: [
    {
      type: "Hero",
      props: {
        id: "hero-home",
        eyebrow: "Curated artifact",
        title: "Duurzaam Duinoord,\nsamen.",
        subtitle:
          "Een burgerinitiatief gedreven door buren. We maken onze historische wijk klaar voor een groene toekomst, met behoud van het karakter dat we zo liefhebben.",
        buttonText: "Ontdek onze projecten",
        buttonLink: "/energie",
        note: "Onze wijk, onze toekomst.",
        noteTone: "terracotta" as const,
        imageUrl: "/media/library/6d471d77-dc72-4f5d-89e6-2615114a9843.jpg",
        imageAlt:
          "Mensen op een evenement, die met elkaar in gesprek zijn aan een tafel met brochures. Boekenkasten en een deuropening zijn zichtbaar.",
        imageShape: "organic" as const,
      },
    },
    {
      type: "SectionHeader",
      props: {
        id: "home-intro",
        eyebrow: "Waar we aan werken",
        title: "Vier thema's, een gedeelde buurtopgave",
        subtitle:
          "Samen zetten we stappen op thema's die het dagelijks leven in Duinoord zichtbaarder, groener en socialer maken.",
        alignment: "left" as const,
      },
    },
    {
      type: "Grid",
      props: {
        id: "home-themes",
        columns: 4 as const,
      },
    },
    {
      type: "ContactCTA",
      props: {
        id: "cta-home",
        title: "Hoe kunnen we je helpen?",
        description:
          "Of je nu een warmtepomp wilt installeren of wilt weten wat een logische eerste stap is voor jouw huis, we staan voor je klaar.",
        buttonText: "Ik wil verduurzamen",
        buttonLink: "/energie",
        email: "info@duurzaamduinoord.nl",
        tone: "paper" as const,
        secondaryText: "Ik heb een idee voor de wijk",
        secondaryLink: "mailto:info@duurzaamduinoord.nl?subject=Idee%20voor%20de%20wijk",
        tertiaryText: "Vraag een coach aan",
        tertiaryLink: "mailto:info@duurzaamduinoord.nl?subject=Vraag%20een%20coach%20aan",
      },
    },
    {
      type: "FeaturedStory",
      props: {
        id: "featured-story-home",
        eyebrow: "Uitgelicht",
        title: "De verborgen tuinen van Duinoord",
        description:
          "Achter de imposante gevels van de wijk liggen oases van rust en biodiversiteit. Onlangs openden buurtbewoners hun tuinpoorten voor een inspirerende wandeling.",
        linkText: "Lees het volledige verhaal",
        linkHref: "mailto:info@duurzaamduinoord.nl?subject=Meer%20over%20de%20verborgen%20tuinen",
        imageOneUrl: "/media/library/9e6a2983-e3df-4f4d-b3c7-22ff60232002.jpg",
        imageOneAlt: "Een klein bloembed met nieuwe planten naast de bakstenen muur en ramen van een gebouw.",
        imageTwoUrl: "/media/library/382f8da5-d1ef-4a2c-afdd-0e491534d4dd.jpg",
        imageTwoAlt: "Raam met uitzicht op een bloementuin, met rozen die tegen de muur omhoog klimmen.",
        scrapTitle: "Groene aders",
        scrapText: "Onze missie om elke straat te verbinden met biodiverse, koele plekken.",
        quote:
          "\"Ik wist niet dat er met een paar vierkante meter al zoveel mogelijk was. Nu heb ik zelf een regenton en nieuwe planten aangelegd.\"",
        attribution: "Annelies, buurtbewoner",
      },
    },
  ],
  root: { props: { title: "Home" } },
  zones: {
    "home-themes:grid-items": [
      {
        type: "FeatureCard",
        props: {
          id: "fc-energie",
          eyebrow: "Thema",
          title: "Energie",
          description:
            "Van warmtepompen tot collectieve inkoop van zonnepanelen. We helpen bewoners keuzes te maken die passen bij hun huis.",
          icon: "sun" as const,
          tone: "terracotta" as const,
          linkText: "Bekijk energie",
          linkHref: "/energie",
        },
      },
      {
        type: "FeatureCard",
        props: {
          id: "fc-circulair",
          eyebrow: "Thema",
          title: "Circulaire economie",
          description:
            "Deelboxen, reparatiecafes en een wijk waarin materialen langer meegaan. Praktisch, lokaal en samen bedacht.",
          icon: "recycle" as const,
          tone: "paper" as const,
          linkText: "Bekijk circulair",
          linkHref: "/circulair",
        },
      },
      {
        type: "FeatureCard",
        props: {
          id: "fc-mobiliteit",
          eyebrow: "Thema",
          title: "Mobiliteit",
          description:
            "Meer ruimte voor ontmoeting, fietsen en deelvervoer. Minder blik op straat en meer ademruimte voor de buurt.",
          icon: "home" as const,
          tone: "moss" as const,
          linkText: "Bekijk mobiliteit",
          linkHref: "/mobiliteit",
        },
      },
      {
        type: "FeatureCard",
        props: {
          id: "fc-leefomgeving",
          eyebrow: "Thema",
          title: "Leefomgeving",
          description:
            "Vergroening van straten en binnentuinen, met aandacht voor verkoeling, biodiversiteit en de schoonheid van Duinoord.",
          icon: "leaf" as const,
          tone: "paper" as const,
          linkText: "Bekijk leefomgeving",
          linkHref: "/leefomgeving",
        },
      },
    ],
  },
};

const mobiliteitData: Data = {
  content: [
    {
      type: "Hero",
      props: {
        id: "hero-mobiliteit",
        eyebrow: "Thema",
        title: "Slimme mobiliteit voor een rustige straat",
        subtitle:
          "Schone, veilige vervoersoplossingen die de ruimte in Den Haag beter benutten. Minder autogebruik, meer delen en schonere lucht.",
        buttonText: "Doe mee met autodelen",
        buttonLink: "mailto:info@duurzaamduinoord.nl?subject=Autodelen%20in%20Duinoord",
        note: "Minder blik, meer buurt.",
        noteTone: "moss" as const,
        imageUrl:
          "https://images.unsplash.com/photo-1519583272095-6433daf26b6e?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Fietsers in een stedelijke straat",
        imageShape: "rounded" as const,
      },
    },
    {
      type: "SectionHeader",
      props: {
        id: "mobility-what",
        eyebrow: "Wat is het",
        title: "Slimme mobiliteit maakt meer ruimte voor mensen",
        subtitle: "",
        alignment: "left" as const,
      },
    },
    {
      type: "Text",
      props: {
        id: "mobility-text-1",
        content:
          "Slimme mobiliteit gaat om schone, veilige vervoersoplossingen die de ruimte in Den Haag beter benutten. Ons doel is Duinoord duurzamer, aantrekkelijk en leefbaar te houden, met minder autogebruik, meer delen en schonere lucht.\n\nDe gemeente stimuleert vormen van vervoer die zuinig omgaan met ruimte en goed zijn voor bewoners. Bijvoorbeeld lopen, fietsen en openbaar vervoer.",
        tone: "paper" as const,
      },
    },
    {
      type: "BulletList",
      props: {
        id: "mobility-benefits",
        title: "Voordelen van autodelen",
        items:
          "Je hebt geen kosten voor aanschaf, onderhoud en reparatie van een eigen auto\nJe betaalt geen wegenbelasting en autoverzekering\nVoor elke gelegenheid is er een passende auto\nVerzekering en beheer lopen via het deelplatform",
        tone: "paper" as const,
      },
    },
    {
      type: "BulletList",
      props: {
        id: "mobility-actions",
        title: "Wat doen wij al?",
        items:
          "Informatieavonden over autodelen in Duinoord\nAanwezigheid op de Go Green Markt\nVerkenning van deelfietsen en deelbakfietsen\nProjecten rond verkeersveiligheid en luchtkwaliteit",
        tone: "moss" as const,
      },
    },
    {
      type: "ContactCTA",
      props: {
        id: "mobility-cta",
        title: "Doe jij mee?",
        description: "Autodelen is goed voor de wijk en goed voor je portemonnee. Neem contact op en haak aan.",
        buttonText: "Neem contact op",
        buttonLink: "mailto:info@duurzaamduinoord.nl?subject=Mobiliteit%20in%20Duinoord",
        email: "info@duurzaamduinoord.nl",
        tone: "moss" as const,
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
        id: "hero-energie",
        eyebrow: "Thema",
        title: "Energie die past bij monumentale huizen",
        subtitle:
          "Het verduurzamen van historische woningen is een van de grootste opgaven in Duinoord. Comfortabeler wonen met een lagere energierekening en een kleinere voetafdruk.",
        buttonText: "Vraag advies aan",
        buttonLink: "mailto:info@duurzaamduinoord.nl?subject=Energieadvies",
        note: "Comfort en karakter kunnen samen gaan.",
        noteTone: "terracotta" as const,
        imageUrl:
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Woningen in een historische straat",
        imageShape: "arch" as const,
      },
    },
    {
      type: "SectionHeader",
      props: {
        id: "energy-current",
        eyebrow: "Wat doen wij al",
        title: "Praktische hulp, kennis delen en onderzoek",
        subtitle: "",
        alignment: "left" as const,
      },
    },
    {
      type: "BulletList",
      props: {
        id: "energy-existing",
        title: "Huidige activiteiten",
        items:
          "Energiecoaching door getrainde buurtgenoten\nVolgen van de warmtetransitie voor aardgasvrij Duinoord\nWarmtebeelden en CO2-meters voor inzicht in comfort en luchtkwaliteit\nWebinars, workshops en podcasts over energiethema's\nBewonersonderzoek naar het energiegebruik in de wijk",
        tone: "paper" as const,
      },
    },
    {
      type: "BulletList",
      props: {
        id: "energy-next",
        title: "Wat gaan we doen?",
        items:
          "Keuzehulp op basis van woningtype, bouwjaar en budget\nEen Duinoord-standaard voor monumentale herenhuizen\nOfferte-spreekuren voor isolatie, glas en warmtepompen\nEen duidelijke subsidiewijzer\nCollectieve inkoop en lenen van kleine energietools",
        tone: "moss" as const,
      },
    },
    {
      type: "ContactCTA",
      props: {
        id: "energy-cta",
        title: "Bespaar energie, bespaar geld",
        description: "Vraag gratis energiecoaching aan of meld je aan voor collectieve inkoopacties.",
        buttonText: "Vraag energiecoaching aan",
        buttonLink: "mailto:info@duurzaamduinoord.nl?subject=Energiecoaching",
        email: "info@duurzaamduinoord.nl",
        tone: "terracotta" as const,
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
        id: "hero-circulair",
        eyebrow: "Thema",
        title: "Circulair leven in de wijk",
        subtitle:
          "In een circulaire wijk bestaat afval niet meer, maar wordt het grondstof voor iets nieuws. Minder consumeren, materialen delen en kapotte spullen repareren.",
        buttonText: "Doe mee",
        buttonLink: "mailto:info@duurzaamduinoord.nl?subject=Circulaire%20economie",
        note: "Minder weggooien, meer waarde.",
        noteTone: "terracotta" as const,
        imageUrl:
          "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Tafels met gereedschap en materialen",
        imageShape: "rounded" as const,
      },
    },
    {
      type: "BulletList",
      props: {
        id: "circular-now",
        title: "Wat doen wij al?",
        items:
          "De kurkactie waarbij natuurkurk een tweede leven krijgt\nTegelwipacties met hergebruik of duurzame afvoer\nInspiratie op de Go Green Markt rond reparatie en hergebruik",
        tone: "paper" as const,
      },
    },
    {
      type: "BulletList",
      props: {
        id: "circular-next",
        title: "Wat gaan we doen?",
        items:
          "Een gids met lokale inleverpunten per materiaal\nEen materialenmarktplaats voor renovatieresten\nEen gereedschap-bieb en kleinschalige ruilmomenten\nMeer zichtbaarheid voor het Repair Cafe en praktische workshops",
        tone: "moss" as const,
      },
    },
    {
      type: "ContactCTA",
      props: {
        id: "circular-cta",
        title: "Minder afval, meer waarde",
        description: "Heb je iets te repareren, te ruilen of te delen? Sluit aan en help de wijk circulair te maken.",
        buttonText: "Meld je aan",
        buttonLink: "mailto:info@duurzaamduinoord.nl?subject=Circulaire%20economie",
        email: "info@duurzaamduinoord.nl",
        tone: "paper" as const,
      },
    },
  ],
  root: { props: { title: "Circulaire economie" } },
  zones: {},
};

const leefomgevingData: Data = {
  content: [
    {
      type: "Hero",
      props: {
        id: "hero-leefomgeving",
        eyebrow: "Thema",
        title: "Een groene, koele en gezonde leefomgeving",
        subtitle:
          "Samen maken we Duinoord groener en klimaatbestendiger, met aandacht voor biodiversiteit, water en prettige straten.",
        buttonText: "Doe mee",
        buttonLink: "mailto:info@duurzaamduinoord.nl?subject=Leefomgeving",
        note: "Elke straat kan zachter en groener worden.",
        noteTone: "moss" as const,
        imageUrl:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Groen plein met bomen en planten",
        imageShape: "organic" as const,
      },
    },
    {
      type: "SectionHeader",
      props: {
        id: "living-focus-header",
        eyebrow: "Onze focus",
        title: "Groen, water en een prettig microklimaat",
        subtitle: "",
        alignment: "center" as const,
      },
    },
    {
      type: "Grid",
      props: {
        id: "living-focus",
        columns: 2 as const,
      },
    },
    {
      type: "BulletList",
      props: {
        id: "living-actions",
        title: "Wat doen wij al?",
        items:
          "Jaarlijkse tegelwipactie\nOrganisatie van de Go Green Markt\nVergroende plekken in Duinoord zichtbaar maken\nWormenhotel en insectenhotel initiatieven\nLezingen over groene daken en fijnstofmetingen",
        tone: "paper" as const,
      },
    },
    {
      type: "BulletList",
      props: {
        id: "living-ideas",
        title: "Wat kunnen we nog meer doen?",
        items:
          "Subsidieregelingen beter zichtbaar maken op de site\nActies rond regentonnen en compostbakken\nInitiatieven voor plantaardig koken en lokaal verbouwen\nMeer samenwerking met andere Haagse vergroengroepen",
        tone: "moss" as const,
      },
    },
    {
      type: "ContactCTA",
      props: {
        id: "living-cta",
        title: "Vergroen jouw straat",
        description: "Wil je een geveltuin aanleggen, meedoen met tegelwippen of een regenton plaatsen? Neem contact op.",
        buttonText: "Doe mee",
        buttonLink: "mailto:info@duurzaamduinoord.nl?subject=Leefomgeving%20in%20Duinoord",
        email: "info@duurzaamduinoord.nl",
        tone: "moss" as const,
      },
    },
  ],
  root: { props: { title: "Leefomgeving" } },
  zones: {
    "living-focus:grid-items": [
      {
        type: "FeatureCard",
        props: {
          id: "living-green",
          eyebrow: "Focus",
          title: "Groen en biodiversiteit",
          description:
            "Geveltuinen, boomspiegels, inheemse planten en tegelwippen zorgen voor meer leven en verkoeling in de wijk.",
          icon: "leaf" as const,
          tone: "paper" as const,
          linkText: "Groene voorbeelden",
          linkHref: "mailto:info@duurzaamduinoord.nl?subject=Groene%20voorbeelden",
        },
      },
      {
        type: "FeatureCard",
        props: {
          id: "living-water",
          eyebrow: "Focus",
          title: "Water en klimaatadaptatie",
          description:
            "Regentonnen, waterdoorlatende bestrating en koele plekken helpen Duinoord beter omgaan met hitte en piekbuien.",
          icon: "home" as const,
          tone: "moss" as const,
          linkText: "Bekijk mogelijkheden",
          linkHref: "mailto:info@duurzaamduinoord.nl?subject=Klimaatadaptatie",
        },
      },
    ],
  },
};

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
