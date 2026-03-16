import React from "react";
import { ComponentConfig } from "@measured/puck";

export type ImageBannerProps = {
  imageUrl: string;
  altText: string;
  caption: string;
  shape: "rectangle" | "arch" | "rounded";
};

export const ImageBannerBlock: ComponentConfig<ImageBannerProps> = {
  fields: {
    imageUrl: { type: "text" },
    altText: { type: "text" },
    caption: { type: "text" },
    shape: {
      type: "select",
      options: [
        { label: "Rechthoek", value: "rectangle" },
        { label: "Boog (Arch)", value: "arch" },
        { label: "Afgerond", value: "rounded" },
      ],
    },
  },
  defaultProps: {
    imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&q=80",
    altText: "Groene wijk in Den Haag",
    caption: "",
    shape: "arch",
  },
  render: ({ imageUrl, altText, caption, shape }) => {
    const shapeClasses = {
      rectangle: "rounded-3xl",
      arch: "rounded-t-full rounded-b-3xl",
      rounded: "rounded-[40px]",
    };

    return (
      <div className="w-full py-8 md:py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className={`overflow-hidden ${shapeClasses[shape]} shadow-soft-xl`}>
            <img
              src={imageUrl}
              alt={altText}
              className="w-full h-[300px] md:h-[500px] object-cover transition duration-700 hover:scale-105"
            />
          </div>
          {caption && (
            <p className="text-center text-sm text-foreground/50 mt-4 italic font-serif">
              {caption}
            </p>
          )}
        </div>
      </div>
    );
  },
};
