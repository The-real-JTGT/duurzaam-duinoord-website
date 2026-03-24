import { ComponentConfig } from "@measured/puck";
import { ArrowRight, Leaf } from "lucide-react";
import { designMaster, getImageShapeClass, getNoteClass } from "../../design/theme-master";

export type HeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  note: string;
  noteTone: "terracotta" | "moss";
  imageUrl: string;
  imageAlt: string;
  imageShape: "organic" | "arch" | "rounded";
};

export const HeroBlock: ComponentConfig<HeroProps> = {
  fields: {
    eyebrow: { type: "text" },
    title: { type: "text" },
    subtitle: { type: "textarea" },
    buttonText: { type: "text" },
    buttonLink: { type: "text" },
    note: { type: "textarea" },
    noteTone: {
      type: "radio",
      options: [
        { label: "Terracotta", value: "terracotta" },
        { label: "Moss", value: "moss" },
      ],
    },
    imageUrl: { type: "text" },
    imageAlt: { type: "text" },
    imageShape: {
      type: "select",
      options: [
        { label: "Organic", value: "organic" },
        { label: "Arch", value: "arch" },
        { label: "Rounded", value: "rounded" },
      ],
    },
  },
  defaultProps: {
    eyebrow: "Samen verduurzamen",
    title: "Duurzaam Duinoord,\nsamen.",
    subtitle:
      "Een burgerinitiatief gedreven door buren. We maken onze historische wijk klaar voor een groene toekomst, met behoud van het karakter dat we zo liefhebben.",
    buttonText: "Ontdek onze projecten",
    buttonLink: "/energie",
    note: "\"Onze wijk, onze toekomst\"",
    noteTone: "terracotta",
    imageUrl: "/media/library/6d471d77-dc72-4f5d-89e6-2615114a9843.jpg",
    imageAlt: "Mensen op een evenement, die met elkaar in gesprek zijn aan een tafel met brochures.",
    imageShape: "organic",
  },
  render: ({
    eyebrow,
    title,
    subtitle,
    buttonText,
    buttonLink,
    note,
    noteTone,
    imageUrl,
    imageAlt,
    imageShape,
  }) => {
    return (
      <section className="px-4 pb-12 pt-12 md:px-8 md:pb-18 md:pt-20">
        <div className="dd-shell grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,500px)]">
          <div className="max-w-2xl">
            {eyebrow ? <p className="dd-heading-eyebrow">{eyebrow}</p> : null}
            <h1 className="dd-display whitespace-pre-line">{title}</h1>
            <p className="dd-subtitle mt-6 max-w-xl">{subtitle}</p>

            {buttonText ? (
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={buttonLink} className={designMaster.buttons.primary}>
                  {buttonText}
                  <ArrowRight size={16} />
                </a>
              </div>
            ) : null}
          </div>

          <div className="relative mx-auto w-full max-w-[32rem]">
            <div className={`${getImageShapeClass(imageShape)} min-h-[360px] bg-secondary-container`}>
              {imageUrl ? (
                <img src={imageUrl} alt={imageAlt || title} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full min-h-[360px] items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(207,230,196,0.55),_transparent_35%),linear-gradient(145deg,_rgba(255,255,255,0.55),_rgba(133,55,36,0.16))] text-primary">
                  <Leaf size={72} strokeWidth={1.2} />
                </div>
              )}
            </div>

            {note ? (
              <div className="absolute -bottom-6 left-4 sm:-left-6">
                <p className={getNoteClass(noteTone)}>{note}</p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  },
};
