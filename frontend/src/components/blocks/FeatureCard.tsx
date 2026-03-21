import { ComponentConfig } from "@measured/puck";
import { ArrowRight, Bike, Leaf, Recycle, SunMedium } from "lucide-react";
import {
  getFeatureCardVariant,
  type FeatureCardTone,
} from "../../design/theme-master";

export type FeatureCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: "leaf" | "sun" | "recycle" | "home";
  tone: FeatureCardTone;
  linkText: string;
  linkHref: string;
};

const iconMap = {
  leaf: Leaf,
  sun: SunMedium,
  recycle: Recycle,
  home: Bike,
};

export const FeatureCardBlock: ComponentConfig<FeatureCardProps> = {
  fields: {
    eyebrow: { type: "text" },
    title: { type: "text" },
    description: { type: "textarea" },
    icon: {
      type: "select",
      options: [
        { label: "Leaf (Leefomgeving)", value: "leaf" },
        { label: "Sun (Energie)", value: "sun" },
        { label: "Recycle (Circulair)", value: "recycle" },
        { label: "Bike (Mobiliteit)", value: "home" },
      ],
    },
    tone: {
      type: "radio",
      options: [
        { label: "Terracotta", value: "terracotta" },
        { label: "Moss", value: "moss" },
        { label: "Paper", value: "paper" },
        { label: "Ink", value: "ink" },
      ],
    },
    linkText: { type: "text" },
    linkHref: { type: "text" },
  },
  defaultProps: {
    eyebrow: "Thema",
    title: "Nieuw initiatief",
    description: "Beschrijf hier een nieuw duurzaamheidsinitiatief voor de wijk.",
    icon: "leaf",
    tone: "paper",
    linkText: "Lees meer",
    linkHref: "/",
  },
  render: ({ eyebrow, title, description, icon, tone, linkText, linkHref }) => {
    const Icon = iconMap[icon] || Leaf;
    const variant = getFeatureCardVariant(tone);

    return (
      <article className={`${variant.cardClassName} transition-transform duration-300 hover:-translate-y-1`}>
        <div className={variant.iconClassName}>
          <Icon size={24} strokeWidth={1.7} />
        </div>
        {eyebrow ? <span className="dd-card__eyebrow">{eyebrow}</span> : null}
        <h3 className="dd-card__title">{title}</h3>
        <p className="dd-card__text">{description}</p>
        {linkText ? (
          <a href={linkHref} className="dd-card__link">
            {linkText}
            <ArrowRight size={16} />
          </a>
        ) : null}
      </article>
    );
  },
};
