import React from "react";
import { ComponentConfig } from "@measured/puck";

export type HeroProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
};

export const HeroBlock: ComponentConfig<HeroProps> = {
  fields: {
    title: { type: "text" },
    subtitle: { type: "textarea" },
    buttonText: { type: "text" },
    buttonLink: { type: "text" },
  },
  defaultProps: {
    title: "Welkom bij Duurzaam Duinoord",
    subtitle:
      "Een initiatief voor een duurzame, aantrekkelijke en leefbare wijk. Samen werken we aan mobiliteit, energie, circulaire economie en onze leefomgeving.",
    buttonText: "Doe Mee",
    buttonLink: "/contact",
  },
  render: ({ title, subtitle, buttonText, buttonLink }) => {
    return (
      <section className="relative w-full py-32 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-8 tracking-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-12 leading-relaxed">
            {subtitle}
          </p>
          {buttonText && (
            <a
              href={buttonLink}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-medium tracking-widest uppercase text-sm transition duration-300 hover:bg-opacity-90 hover:scale-105"
            >
              {buttonText}
            </a>
          )}
        </div>
        
        {/* Soft decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>
    );
  },
};
