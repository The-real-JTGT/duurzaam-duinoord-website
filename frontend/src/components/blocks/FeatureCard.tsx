import React from "react";
import { ComponentConfig } from "@measured/puck";

export type FeatureCardProps = {
  title: string;
  description: string;
  icon: "leaf" | "sun" | "recycle" | "home";
};

export const FeatureCardBlock: ComponentConfig<FeatureCardProps> = {
  fields: {
    title: { type: "text" },
    description: { type: "textarea" },
    icon: {
      type: "select",
      options: [
        { label: "Leaf (Leefomgeving)", value: "leaf" },
        { label: "Sun (Energie)", value: "sun" },
        { label: "Recycle (Circulair)", value: "recycle" },
        { label: "Home (Mobiliteit)", value: "home" },
      ],
    },
  },
  defaultProps: {
    title: "Nieuw Initiatief",
    description: "Beschrijf hier uw nieuwe duurzaamheidsinitiatief voor de wijk.",
    icon: "leaf",
  },
  render: ({ title, description, icon }) => {
    // Simple icon mapping since we haven't wired up lucide-react dynamically yet
    const iconMap = {
      leaf: "🌿",
      sun: "☀️",
      recycle: "♻️",
      home: "🚲",
    };

    return (
      <div className="bg-white rounded-3xl p-8 border border-border shadow-soft transition duration-500 hover:-translate-y-2 hover:shadow-soft-md group">
        <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center text-3xl mb-6 text-primary group-hover:scale-110 transition duration-500">
          {iconMap[icon] || "🌿"}
        </div>
        <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">
          {title}
        </h3>
        <p className="text-foreground/70 leading-relaxed">
          {description}
        </p>
      </div>
    );
  },
};
