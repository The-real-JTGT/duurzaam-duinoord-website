import React from "react";
import { ComponentConfig } from "@measured/puck";

export type SectionHeaderProps = {
  title: string;
  subtitle: string;
  alignment: "left" | "center";
};

export const SectionHeaderBlock: ComponentConfig<SectionHeaderProps> = {
  fields: {
    title: { type: "text" },
    subtitle: { type: "textarea" },
    alignment: {
      type: "radio",
      options: [
        { label: "Links", value: "left" },
        { label: "Gecentreerd", value: "center" },
      ],
    },
  },
  defaultProps: {
    title: "Wat doen wij al?",
    subtitle: "",
    alignment: "center",
  },
  render: ({ title, subtitle, alignment }) => {
    const align = alignment === "center" ? "text-center" : "text-left";
    return (
      <div className={`w-full py-12 md:py-16 px-4 md:px-8 ${align}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed mx-auto">
              {subtitle}
            </p>
          )}
          {/* Decorative line */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="block w-12 h-px bg-primary/40" />
            <span className="block w-2 h-2 rounded-full bg-primary" />
            <span className="block w-12 h-px bg-primary/40" />
          </div>
        </div>
      </div>
    );
  },
};
