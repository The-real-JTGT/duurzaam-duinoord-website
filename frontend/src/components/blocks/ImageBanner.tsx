import { ComponentConfig } from "@measured/puck";
import { getImageShapeClass } from "../../design/theme-master";

export type ImageBannerProps = {
  imageUrl: string;
  altText: string;
  caption: string;
  shape: "organic" | "arch" | "rounded";
};

export const ImageBannerBlock: ComponentConfig<ImageBannerProps> = {
  fields: {
    imageUrl: { type: "text" },
    altText: { type: "text" },
    caption: { type: "text" },
    shape: {
      type: "select",
      options: [
        { label: "Organic", value: "organic" },
        { label: "Boog", value: "arch" },
        { label: "Afgerond", value: "rounded" },
      ],
    },
  },
  defaultProps: {
    imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&q=80",
    altText: "Groene wijk in Den Haag",
    caption: "",
    shape: "organic",
  },
  render: ({ imageUrl, altText, caption, shape }) => {
    return (
      <section className="px-4 py-8 md:px-8 md:py-12">
        <div className="dd-shell max-w-5xl">
          <div className={getImageShapeClass(shape)}>
            <img
              src={imageUrl}
              alt={altText}
              className="h-[320px] w-full object-cover transition duration-700 hover:scale-[1.02] md:h-[520px]"
            />
          </div>
          {caption ? (
            <p className="mt-4 text-center font-serif text-base italic text-foreground/70">{caption}</p>
          ) : null}
        </div>
      </section>
    );
  },
};
