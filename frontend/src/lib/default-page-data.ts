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
        imageUrl: "/media/library/114d8fc6-cc7a-4f3a-8029-7b3fdf2351fa.jpg",
        imageAlt: "Een straat met bakstenen gevels, een fiets en de bibliotheek van Duinoord.",
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
        imageUrl: "/media/library/81176b1b-b95c-40bc-a866-150ce00ad38a.jpg",
        imageAlt:
          "Een informatiecaravan met informatie over woningisolatie en energiebesparing in de wijk.",
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
        imageUrl: "/media/library/0ab09380-4142-4e9d-b460-3d809bd71b2c.jpg",
        imageAlt: "Een Repair Cafe-kraam op de stoep met brochures en fietsen op de achtergrond.",
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
        imageUrl: "/media/library/3939c800-7c3c-4cb8-970c-efc07ec57f21.jpg",
        imageAlt: "Een groene straatmarkt in een woonwijk met planten, mensen en feestelijke versiering.",
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

const agendaData: Data = {
  content: [
    {
      type: "Hero",
      props: {
        id: "hero-agenda",
        eyebrow: "Site-breed",
        title: "Agenda voor buurtacties,\nmarkten en avonden",
        subtitle:
          "Hier bundelen we activiteiten uit alle vier de thema's. Zo zie je in een oogopslag wat eraan komt, waar je kunt aanhaken en welke verhalen we na afloop terug laten komen.",
        buttonText: "Meld een activiteit aan",
        buttonLink: "mailto:info@duurzaamduinoord.nl?subject=Activiteit%20voor%20de%20agenda",
        note: "Van infoavond tot tegelactie.",
        noteTone: "terracotta" as const,
        imageUrl: "/media/library/6d471d77-dc72-4f5d-89e6-2615114a9843.jpg",
        imageAlt:
          "Mensen op een evenement, die met elkaar in gesprek zijn aan een tafel met brochures. Boekenkasten en een deuropening zijn zichtbaar.",
        imageShape: "rounded" as const,
      },
    },
    {
      type: "RouteBand",
      props: {
        id: "agenda-routes",
        eyebrow: "Snel naar",
        title: "Drie manieren om de agenda te gebruiken",
        subtitle:
          "De pagina werkt als overzicht, archief en thematische ingang naar activiteiten in de wijk.",
        cardOneEyebrow: "Agenda",
        cardOneTitle: "Komende activiteiten",
        cardOneDescription:
          "Een helder overzicht van bijeenkomsten, buurtacties en marktmomenten waar je meteen op kunt aanhaken.",
        cardOneLinkText: "Ik wil meedoen",
        cardOneLinkHref: "/doe-mee",
        cardOneTone: "paper" as const,
        cardTwoEyebrow: "Archief",
        cardTwoTitle: "Terugblik en foto's",
        cardTwoDescription:
          "Geen losse resten van oude events, maar terugblikken die laten zien wat een activiteit opleverde voor de wijk.",
        cardTwoLinkText: "Lees verhalen",
        cardTwoLinkHref: "/leefomgeving",
        cardTwoTone: "moss" as const,
        cardThreeEyebrow: "Filters",
        cardThreeTitle: "Thema's en routes",
        cardThreeDescription:
          "Filter straks op energie, circulair, mobiliteit of leefomgeving en vind sneller iets dat past bij jouw vraag.",
        cardThreeLinkText: "Bekijk thema's",
        cardThreeLinkHref: "/",
        cardThreeTone: "glass" as const,
      },
    },
    {
      type: "Text",
      props: {
        id: "agenda-text",
        content:
          "De agenda is bedoeld als de gezamenlijke ritmepagina van Duurzaam Duinoord. Elke activiteit krijgt straks een vaste opbouw met wat je kunt verwachten, voor wie het is en hoe je meedoet.\n\nZo kunnen dezelfde activiteiten zichtbaar worden vanuit Energie, Circulaire economie, Mobiliteit en Leefomgeving, zonder dat we informatie hoeven te dupliceren.",
        tone: "paper" as const,
      },
    },
    {
      type: "BulletList",
      props: {
        id: "agenda-examples",
        title: "Wat je hier kunt verwachten",
        items:
          "Informatieavonden over autodelen, isoleren en warmtetransitie\nWijkacties zoals tegelwippen, groene markten en deelinitiatieven\nWorkshops, webinars en lezingen met praktische hand-outs\nTerugblikblokken met foto's en lessen uit eerdere activiteiten",
        tone: "moss" as const,
      },
    },
    {
      type: "FeaturedStory",
      props: {
        id: "agenda-featured",
        eyebrow: "Terugblik",
        title: "Go Green Markt als ontmoetingsplek voor alle thema's",
        description:
          "De markt laat goed zien hoe de nieuwe agenda moet werken: energieadvies, circulaire inspiratie, groene buurtideeën en gesprek over mobiliteit komen daar vanzelf samen.",
        linkText: "Vraag naar de volgende editie",
        linkHref: "mailto:info@duurzaamduinoord.nl?subject=Volgende%20Go%20Green%20Markt",
        imageOneUrl: "/media/library/55a7eb18-2efa-40bf-943e-8b2d3dae1bfc.jpg",
        imageOneAlt:
          "Buitenmarkt met planten; mensen kijken rond en kopen. Op de achtergrond een bakstenen gebouw.",
        imageTwoUrl: "/media/library/3939c800-7c3c-4cb8-970c-efc07ec57f21.jpg",
        imageTwoAlt:
          "Straatmarkt met mensen, een blauwe vlag, kleurrijke versieringen en gebouwen.",
        scrapTitle: "Themafilters",
        scrapText:
          "Energie, circulair, mobiliteit en leefomgeving kunnen in de agenda als labels naast elkaar bestaan.",
        quote:
          "\"Juist op zo'n dag merk je hoe makkelijk gesprekken tussen buren ontstaan als projecten zichtbaar en dichtbij zijn.\"",
        attribution: "Vrijwilliger Duurzaam Duinoord",
      },
    },
    {
      type: "ContactCTA",
      props: {
        id: "agenda-cta",
        title: "Wil je iets op de agenda zetten?",
        description:
          "Stuur ons een activiteit, idee of samenwerkingsvoorstel. Dan zorgen we dat het op de juiste plek in de site terugkomt.",
        buttonText: "Activiteit delen",
        buttonLink: "mailto:info@duurzaamduinoord.nl?subject=Activiteit%20delen",
        email: "info@duurzaamduinoord.nl",
        tone: "paper" as const,
        secondaryText: "Nieuwsbrief ontvangen",
        secondaryLink: "mailto:info@duurzaamduinoord.nl?subject=Aanmelding%20nieuwsbrief",
        tertiaryText: "Bekijk Doe mee",
        tertiaryLink: "/doe-mee",
      },
    },
  ],
  root: { props: { title: "Agenda" } },
  zones: {},
};

const doeMeeData: Data = {
  content: [
    {
      type: "Hero",
      props: {
        id: "hero-doe-mee",
        eyebrow: "Site-breed",
        title: "Doe mee met acties,\nwerkgroepen en ideeën",
        subtitle:
          "Duurzaam Duinoord groeit door bewoners die iets willen uitproberen, organiseren of mogelijk maken. Je hoeft niet alles te weten om van waarde te zijn.",
        buttonText: "Ik wil aansluiten",
        buttonLink: "mailto:info@duurzaamduinoord.nl?subject=Ik%20wil%20meedoen",
        note: "Klein beginnen is ook meedoen.",
        noteTone: "moss" as const,
        imageUrl: "/media/library/21f288e3-d6c3-4e22-937a-488b2a5cdf6e.jpg",
        imageAlt:
          "Een vrouw en een man zitten aan een tafel en voeren een gesprek. De man gebaart terwijl hij spreekt; de vrouw luistert.",
        imageShape: "arch" as const,
      },
    },
    {
      type: "RouteBand",
      props: {
        id: "join-routes",
        eyebrow: "Jouw route",
        title: "Vier manieren om aan te haken",
        subtitle:
          "Deze pagina bundelt de participatieroutes van de hele site en maakt de eerste stap concreet.",
        cardOneEyebrow: "Vrijwilliger",
        cardOneTitle: "Af en toe helpen",
        cardOneDescription:
          "Help mee bij bijeenkomsten, communicatie of praktische buurtacties. Ook losse inzet is waardevol.",
        cardOneLinkText: "Ik wil helpen",
        cardOneLinkHref: "mailto:info@duurzaamduinoord.nl?subject=Vrijwilliger%20worden",
        cardOneTone: "paper" as const,
        cardTwoEyebrow: "Werkgroep",
        cardTwoTitle: "Aansluiten bij een thema",
        cardTwoDescription:
          "Praat mee over warmte, leefomgeving, circulariteit of nieuwe buurtprojecten die op de site landen.",
        cardTwoLinkText: "Vraag naar werkgroepen",
        cardTwoLinkHref: "mailto:info@duurzaamduinoord.nl?subject=Werkgroepen%20Duurzaam%20Duinoord",
        cardTwoTone: "moss" as const,
        cardThreeEyebrow: "Op de hoogte",
        cardThreeTitle: "Nieuwsbrief en agenda",
        cardThreeDescription:
          "Blijf bij met nieuwe acties, evenementen en verhalen zonder steeds zelf alles te hoeven volgen.",
        cardThreeLinkText: "Bekijk agenda",
        cardThreeLinkHref: "/agenda",
        cardThreeTone: "ink" as const,
      },
    },
    {
      type: "Text",
      props: {
        id: "join-text",
        content:
          "Doe mee is de plek waar vrijwilligerswerk, werkgroepen, aanmeldingen voor acties en de nieuwsbrief samenkomen. Daarmee scheiden we de vraag 'wie zijn jullie?' van de vraag 'hoe kan ik bijdragen?'.\n\nDat maakt het voor nieuwe bezoekers veel makkelijker om meteen een passende eerste stap te kiezen.",
        tone: "paper" as const,
      },
    },
    {
      type: "BulletList",
      props: {
        id: "join-needs",
        title: "Waar we bewoners vaak voor zoeken",
        items:
          "Gastvrouwen en gastheren bij informatieavonden en markten\nMensen die mee willen denken in een werkgroep rond warmte, vergroening of circulariteit\nBuurtbewoners die verhalen, foto's of praktijkervaringen willen delen\nHanden bij concrete acties zoals tegelwippen, buurtevents en meetprojecten",
        tone: "moss" as const,
      },
    },
    {
      type: "FeaturedStory",
      props: {
        id: "join-story",
        eyebrow: "Samen maken we het",
        title: "Een wijkinitiatief groeit doordat mensen blijven instappen",
        description:
          "Soms begint meedoen met een gesprek aan een tafel, soms met helpen op een markt of door een buurtgenoot door te verwijzen. We willen die drempel zo laag mogelijk maken.",
        linkText: "Stuur ons jouw idee",
        linkHref: "mailto:info@duurzaamduinoord.nl?subject=Ik%20heb%20een%20idee%20voor%20Duurzaam%20Duinoord",
        imageOneUrl: "/media/library/62a99cb1-4f2a-446a-a9d3-eaf1aeaf4595.jpg",
        imageOneAlt:
          "Mensen aan een tafel met eten, planten en een laptop op een stadsstoep.",
        imageTwoUrl: "/media/library/3939c800-7c3c-4cb8-970c-efc07ec57f21.jpg",
        imageTwoAlt:
          "Straatmarkt met mensen, een blauwe vlag, kleurrijke versieringen en gebouwen.",
        scrapTitle: "Van idee naar actie",
        scrapText:
          "Een goede participatiepagina laat zien dat meedoen niet alleen voor vaste vrijwilligers is, maar ook voor nieuwsgierige buren.",
        quote:
          "\"Ik begon met een vraag over mijn huis en bleef hangen omdat ik merkte hoeveel energie er in de buurt zit.\"",
        attribution: "Buurtbewoner uit Duinoord",
      },
    },
    {
      type: "ContactCTA",
      props: {
        id: "join-cta",
        title: "Vertel waar jij warm van wordt",
        description:
          "We helpen je graag aan een eerste stap die past bij jouw tijd, kennis of nieuwsgierigheid.",
        buttonText: "Vrijwilliger worden",
        buttonLink: "mailto:info@duurzaamduinoord.nl?subject=Vrijwilliger%20worden",
        email: "info@duurzaamduinoord.nl",
        tone: "moss" as const,
        secondaryText: "Nieuwsbrief ontvangen",
        secondaryLink: "mailto:info@duurzaamduinoord.nl?subject=Aanmelding%20nieuwsbrief",
        tertiaryText: "Bekijk agenda",
        tertiaryLink: "/agenda",
      },
    },
  ],
  root: { props: { title: "Doe mee" } },
  zones: {},
};

const overOnsData: Data = {
  content: [
    {
      type: "Hero",
      props: {
        id: "hero-over-ons",
        eyebrow: "Site-breed",
        title: "Over Duurzaam Duinoord",
        subtitle:
          "We zijn een bewonersinitiatief dat historische charme koppelt aan praktische stappen voor een groene, aantrekkelijke en leefbare wijk in Den Haag.",
        buttonText: "Neem contact op",
        buttonLink: "mailto:info@duurzaamduinoord.nl?subject=Contact%20via%20de%20website",
        note: "Buurtkennis als startpunt.",
        noteTone: "terracotta" as const,
        imageUrl: "/media/library/114d8fc6-cc7a-4f3a-8029-7b3fdf2351fa.jpg",
        imageAlt:
          "Een boekwinkelpui met glazen ramen, een fiets en auto's geparkeerd op een straat met bakstenen muren.",
        imageShape: "organic" as const,
      },
    },
    {
      type: "RouteBand",
      props: {
        id: "about-routes",
        eyebrow: "Basis",
        title: "Wat bezoekers hier moeten vinden",
        subtitle:
          "Deze pagina brengt identiteit, aanpak en samenwerking samen zonder de participatieroutes te vermengen.",
        cardOneEyebrow: "Wie wij zijn",
        cardOneTitle: "Bewonersinitiatief",
        cardOneDescription:
          "Een buurtnabije organisatie, gedragen door mensen die Duinoord van binnenuit kennen.",
        cardOneLinkText: "Neem contact op",
        cardOneLinkHref: "mailto:info@duurzaamduinoord.nl?subject=Wie%20zijn%20jullie",
        cardOneTone: "paper" as const,
        cardTwoEyebrow: "Missie",
        cardTwoTitle: "Praktisch en wijkgericht",
        cardTwoDescription:
          "We maken duurzame keuzes tastbaar en passend bij een historische wijk met veel verschillende bewoners.",
        cardTwoLinkText: "Bekijk thema's",
        cardTwoLinkHref: "/",
        cardTwoTone: "moss" as const,
        cardThreeEyebrow: "Samenwerking",
        cardThreeTitle: "Partners en contacten",
        cardThreeDescription:
          "Projecten groeien sneller als bewoners, experts en lokale partners elkaar via dezelfde site weten te vinden.",
        cardThreeLinkText: "Samenwerken",
        cardThreeLinkHref: "mailto:info@duurzaamduinoord.nl?subject=Samenwerking%20met%20Duurzaam%20Duinoord",
        cardThreeTone: "glass" as const,
      },
    },
    {
      type: "Text",
      props: {
        id: "about-text",
        content:
          "De nieuwe structuur maakt een duidelijk onderscheid tussen Over ons en Doe mee. Hier vertellen we wie we zijn, hoe we werken en met welke partners en bewoners we de wijk stap voor stap verduurzamen.\n\nDaardoor blijft de site warmer en begrijpelijker: bezoekers hoeven niet eerst de organisatie te ontleden voordat ze weten waar ze moeten zijn.",
        tone: "paper" as const,
      },
    },
    {
      type: "BulletList",
      props: {
        id: "about-principles",
        title: "Onze aanpak in het kort",
        items:
          "We vertrekken vanuit de vragen en mogelijkheden van bewoners in Duinoord\nWe verbinden praktische hulp aan grotere buurtopgaven zoals warmte, circulariteit en vergroening\nWe bouwen thematisch, zodat nieuwe projecten een logische plek krijgen in plaats van losse eilandjes te worden\nWe werken graag samen met partners, maar houden de toon dichtbij, helder en wijkgericht",
        tone: "moss" as const,
      },
    },
    {
      type: "ImageBanner",
      props: {
        id: "about-map",
        imageUrl: "/media/library/d4d5c213-9597-4217-bbaf-0d24b730da29.jpg",
        altText: "Historische kaart van de wijk Duinoord met straten en begrenzing.",
        caption:
          "De identiteit van de wijk blijft een uitgangspunt: verduurzamen met respect voor de bestaande stad.",
        shape: "rounded" as const,
      },
    },
    {
      type: "ContactCTA",
      props: {
        id: "about-cta",
        title: "Zoek je contact of samenwerking?",
        description:
          "Stuur ons een bericht als je wilt samenwerken, een vraag hebt over de wijkaanpak of benieuwd bent hoe jouw initiatief kan aansluiten.",
        buttonText: "Mail ons",
        buttonLink: "mailto:info@duurzaamduinoord.nl?subject=Contact%20Duurzaam%20Duinoord",
        email: "info@duurzaamduinoord.nl",
        tone: "paper" as const,
        secondaryText: "Bekijk Doe mee",
        secondaryLink: "/doe-mee",
        tertiaryText: "Naar agenda",
        tertiaryLink: "/agenda",
      },
    },
  ],
  root: { props: { title: "Over ons" } },
  zones: {},
};

export function getDefaultPageData(slug: string): Data {
  const defaults: Record<string, Data> = {
    "/": homepageData,
    "/home": homepageData,
    "/mobiliteit": mobiliteitData,
    "/energie": energieData,
    "/circulair": circulairData,
    "/leefomgeving": leefomgevingData,
    "/agenda": agendaData,
    "/doe-mee": doeMeeData,
    "/over-ons": overOnsData,
  };

  return defaults[slug] || { content: [], root: { props: { title: "" } }, zones: {} };
}
