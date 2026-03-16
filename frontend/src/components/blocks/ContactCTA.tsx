import React from "react";
import { ComponentConfig } from "@measured/puck";

export type ContactCTAProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  email: string;
};

export const ContactCTABlock: ComponentConfig<ContactCTAProps> = {
  fields: {
    title: { type: "text" },
    description: { type: "textarea" },
    buttonText: { type: "text" },
    buttonLink: { type: "text" },
    email: { type: "text" },
  },
  defaultProps: {
    title: "Doe mee!",
    description:
      "Wil je meedoen met een van onze initiatieven? Neem contact met ons op of kom langs bij een van onze bijeenkomsten.",
    buttonText: "Neem Contact Op",
    buttonLink: "/contact",
    email: "info@duurzaamduinoord.nl",
  },
  render: ({ title, description, buttonText, buttonLink, email }) => {
    return (
      <section className="w-full py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-foreground text-white rounded-[40px] p-12 md:p-16 text-center relative overflow-hidden">
          {/* Decorative background circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/3" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {title}
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {buttonText && (
                <a
                  href={buttonLink}
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-medium tracking-widest uppercase text-sm transition duration-300 hover:bg-opacity-90 hover:scale-105"
                >
                  {buttonText}
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white rounded-full font-medium tracking-wide text-sm transition duration-300 hover:bg-white/10"
                >
                  ✉ {email}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  },
};
