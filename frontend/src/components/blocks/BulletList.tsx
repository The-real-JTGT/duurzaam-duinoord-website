import React from "react";
import { ComponentConfig } from "@measured/puck";

export type BulletListProps = {
  title: string;
  items: string;
};

export const BulletListBlock: ComponentConfig<BulletListProps> = {
  fields: {
    title: { type: "text" },
    items: { type: "textarea" },
  },
  defaultProps: {
    title: "Voordelen",
    items: "Geen kosten voor aanschaf en onderhoud\nGeen wegenbelasting en autoverzekering\nVoor elke gelegenheid een geschikte oplossing",
  },
  render: ({ title, items }) => {
    const bulletItems = items.split("\n").filter((item) => item.trim() !== "");

    return (
      <div className="w-full py-8 md:py-12 px-4 md:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-border shadow-soft">
          {title && (
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-8">
              {title}
            </h3>
          )}
          <ul className="space-y-4">
            {bulletItems.map((item, index) => (
              <li key={index} className="flex items-start gap-4 group">
                <span className="mt-1 w-6 h-6 flex-shrink-0 rounded-full bg-primary/15 flex items-center justify-center text-primary text-xs font-bold group-hover:bg-primary group-hover:text-white transition duration-300">
                  ✓
                </span>
                <span className="text-foreground/80 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  },
};
