import { ComponentConfig } from "@measured/puck";

export type FeaturedStoryProps = {
  eyebrow: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  imageOneUrl: string;
  imageOneAlt: string;
  imageTwoUrl: string;
  imageTwoAlt: string;
  scrapTitle: string;
  scrapText: string;
  quote: string;
  attribution: string;
};

export const FeaturedStoryBlock: ComponentConfig<FeaturedStoryProps> = {
  fields: {
    eyebrow: { type: "text" },
    title: { type: "text" },
    description: { type: "textarea" },
    linkText: { type: "text" },
    linkHref: { type: "text" },
    imageOneUrl: { type: "text" },
    imageOneAlt: { type: "text" },
    imageTwoUrl: { type: "text" },
    imageTwoAlt: { type: "text" },
    scrapTitle: { type: "text" },
    scrapText: { type: "textarea" },
    quote: { type: "textarea" },
    attribution: { type: "text" },
  },
  defaultProps: {
    eyebrow: "Uitgelicht",
    title: "De verborgen tuinen van Duinoord",
    description:
      "Achter de imposante gevels van de wijk liggen verrassend groene plekken. Tijdens een recente wandeling openden buurtbewoners hun poorten en deelden ze hoe kleine ingrepen een groot verschil maken.",
    linkText: "Lees het volledige verhaal",
    linkHref: "mailto:info@duurzaamduinoord.nl?subject=Meer%20over%20de%20verborgen%20tuinen",
    imageOneUrl:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80",
    imageOneAlt: "Groene bladeren",
    imageTwoUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    imageTwoAlt: "Groene tuin in de zon",
    scrapTitle: "Groene aders",
    scrapText: "Onze missie om elke straat te verbinden met biodiverse, koele plekken.",
    quote:
      "\"Ik wist niet dat er met een paar vierkante meter al zoveel mogelijk was. Nu heb ik zelf een regenton en nieuwe planten aangelegd.\"",
    attribution: "Annelies, buurtbewoner",
  },
  render: ({
    eyebrow,
    title,
    description,
    linkText,
    linkHref,
    imageOneUrl,
    imageOneAlt,
    imageTwoUrl,
    imageTwoAlt,
    scrapTitle,
    scrapText,
    quote,
    attribution,
  }) => {
    return (
      <section className="px-4 py-12 md:px-8 md:py-18">
        <div className="dd-shell grid items-center gap-12 lg:grid-cols-[1fr_1.02fr]">
          <div className="dd-story-grid sm:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-4">
              <div className="dd-story-thumb dd-story-thumb--small">
                <img src={imageOneUrl} alt={imageOneAlt || title} className="h-56 w-full object-cover" />
              </div>
              <div className="dd-panel dd-panel--paper dd-story-caption">
                <h3 className="font-serif text-2xl italic text-secondary">{scrapTitle}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/66">{scrapText}</p>
              </div>
            </div>

            <div className="pt-10">
              <div className="dd-story-thumb dd-story-thumb--large">
                <img src={imageTwoUrl} alt={imageTwoAlt || title} className="h-[22rem] w-full object-cover" />
              </div>
            </div>
          </div>

          <div className="md:pl-6">
            {eyebrow ? <p className="dd-heading-eyebrow">{eyebrow}</p> : null}
            <h2 className="dd-title max-w-lg">{title}</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-foreground/68">{description}</p>

            {linkText ? (
              <a
                href={linkHref}
                className="mt-8 inline-flex items-center gap-2 font-serif text-xl italic text-primary underline decoration-primary/25 underline-offset-8"
              >
                {linkText}
              </a>
            ) : null}

            {quote ? (
              <div className="dd-panel dd-panel--moss dd-story-quote mt-8">
                <p className="font-serif text-lg italic leading-8 text-secondary">{quote}</p>
                {attribution ? (
                  <p className="mt-3 text-xs uppercase tracking-[0.22em] text-secondary/75">{attribution}</p>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  },
};
