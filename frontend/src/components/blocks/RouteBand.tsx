import { ComponentConfig } from "@measured/puck";
import { ArrowRight } from "lucide-react";
import { getPanelClass, type PanelTone } from "../../design/theme-master";

export type RouteBandProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cardOneEyebrow: string;
  cardOneTitle: string;
  cardOneDescription: string;
  cardOneLinkText: string;
  cardOneLinkHref: string;
  cardOneTone: PanelTone;
  cardTwoEyebrow: string;
  cardTwoTitle: string;
  cardTwoDescription: string;
  cardTwoLinkText: string;
  cardTwoLinkHref: string;
  cardTwoTone: PanelTone;
  cardThreeEyebrow: string;
  cardThreeTitle: string;
  cardThreeDescription: string;
  cardThreeLinkText: string;
  cardThreeLinkHref: string;
  cardThreeTone: PanelTone;
};

function RouteCard({
  eyebrow,
  title,
  description,
  linkText,
  linkHref,
  tone,
  offset,
}: {
  eyebrow: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  tone: PanelTone;
  offset?: string;
}) {
  return (
    <article className={`${getPanelClass(tone)} h-full p-7 md:p-8 ${offset || ""}`}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.24em] text-current/60">{eyebrow}</p>
      ) : null}
      <h3 className="mt-4 font-serif text-3xl italic leading-tight text-current">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-current/72">{description}</p>
      {linkText ? (
        <a
          href={linkHref}
          className="mt-6 inline-flex items-center gap-2 font-serif text-lg italic text-current underline decoration-current/25 underline-offset-8"
        >
          {linkText}
          <ArrowRight size={16} />
        </a>
      ) : null}
    </article>
  );
}

export const RouteBandBlock: ComponentConfig<RouteBandProps> = {
  fields: {
    eyebrow: { type: "text" },
    title: { type: "text" },
    subtitle: { type: "textarea" },
    cardOneEyebrow: { type: "text" },
    cardOneTitle: { type: "text" },
    cardOneDescription: { type: "textarea" },
    cardOneLinkText: { type: "text" },
    cardOneLinkHref: { type: "text" },
    cardOneTone: {
      type: "radio",
      options: [
        { label: "Paper", value: "paper" },
        { label: "Moss", value: "moss" },
        { label: "Glass", value: "glass" },
        { label: "Ink", value: "ink" },
      ],
    },
    cardTwoEyebrow: { type: "text" },
    cardTwoTitle: { type: "text" },
    cardTwoDescription: { type: "textarea" },
    cardTwoLinkText: { type: "text" },
    cardTwoLinkHref: { type: "text" },
    cardTwoTone: {
      type: "radio",
      options: [
        { label: "Paper", value: "paper" },
        { label: "Moss", value: "moss" },
        { label: "Glass", value: "glass" },
        { label: "Ink", value: "ink" },
      ],
    },
    cardThreeEyebrow: { type: "text" },
    cardThreeTitle: { type: "text" },
    cardThreeDescription: { type: "textarea" },
    cardThreeLinkText: { type: "text" },
    cardThreeLinkHref: { type: "text" },
    cardThreeTone: {
      type: "radio",
      options: [
        { label: "Paper", value: "paper" },
        { label: "Moss", value: "moss" },
        { label: "Glass", value: "glass" },
        { label: "Ink", value: "ink" },
      ],
    },
  },
  defaultProps: {
    eyebrow: "Snel naar",
    title: "Kies een route",
    subtitle: "Gebruik deze strip om drie duidelijke ingangen naar een pagina te tonen.",
    cardOneEyebrow: "Route",
    cardOneTitle: "Eerste stap",
    cardOneDescription: "Beschrijf hier de eerste route.",
    cardOneLinkText: "Lees meer",
    cardOneLinkHref: "/",
    cardOneTone: "paper",
    cardTwoEyebrow: "Route",
    cardTwoTitle: "Tweede stap",
    cardTwoDescription: "Beschrijf hier de tweede route.",
    cardTwoLinkText: "Lees meer",
    cardTwoLinkHref: "/",
    cardTwoTone: "moss",
    cardThreeEyebrow: "Route",
    cardThreeTitle: "Derde stap",
    cardThreeDescription: "Beschrijf hier de derde route.",
    cardThreeLinkText: "Lees meer",
    cardThreeLinkHref: "/",
    cardThreeTone: "glass",
  },
  render: ({
    eyebrow,
    title,
    subtitle,
    cardOneEyebrow,
    cardOneTitle,
    cardOneDescription,
    cardOneLinkText,
    cardOneLinkHref,
    cardOneTone,
    cardTwoEyebrow,
    cardTwoTitle,
    cardTwoDescription,
    cardTwoLinkText,
    cardTwoLinkHref,
    cardTwoTone,
    cardThreeEyebrow,
    cardThreeTitle,
    cardThreeDescription,
    cardThreeLinkText,
    cardThreeLinkHref,
    cardThreeTone,
  }) => {
    return (
      <section className="px-4 py-10 md:px-8 md:py-14">
        <div className="dd-shell">
          <div className="max-w-3xl">
            {eyebrow ? <p className="dd-heading-eyebrow">{eyebrow}</p> : null}
            <h2 className="dd-title">{title}</h2>
            {subtitle ? <p className="dd-subtitle mt-4 max-w-2xl">{subtitle}</p> : null}
          </div>

          <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3 md:gap-7">
            <RouteCard
              eyebrow={cardOneEyebrow}
              title={cardOneTitle}
              description={cardOneDescription}
              linkText={cardOneLinkText}
              linkHref={cardOneLinkHref}
              tone={cardOneTone}
            />
            <RouteCard
              eyebrow={cardTwoEyebrow}
              title={cardTwoTitle}
              description={cardTwoDescription}
              linkText={cardTwoLinkText}
              linkHref={cardTwoLinkHref}
              tone={cardTwoTone}
              offset="md:translate-y-6"
            />
            <RouteCard
              eyebrow={cardThreeEyebrow}
              title={cardThreeTitle}
              description={cardThreeDescription}
              linkText={cardThreeLinkText}
              linkHref={cardThreeLinkHref}
              tone={cardThreeTone}
            />
          </div>
        </div>
      </section>
    );
  },
};
