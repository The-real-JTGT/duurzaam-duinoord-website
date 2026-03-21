import { ComponentConfig } from "@measured/puck";

export type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  alignment: "left" | "center";
};

export const SectionHeaderBlock: ComponentConfig<SectionHeaderProps> = {
  fields: {
    eyebrow: { type: "text" },
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
    eyebrow: "Hoofdstuk",
    title: "Wat doen wij al?",
    subtitle: "",
    alignment: "center",
  },
  render: ({ eyebrow, title, subtitle, alignment }) => {
    const centered = alignment === "center";

    return (
      <section className={`px-4 py-10 md:px-8 md:py-14 ${centered ? "text-center" : "text-left"}`}>
        <div className={`dd-shell ${centered ? "max-w-4xl" : "max-w-5xl"}`}>
          {eyebrow ? <p className="dd-heading-eyebrow">{eyebrow}</p> : null}
          <h2 className="dd-title">{title}</h2>
          {subtitle ? (
            <p className={`dd-subtitle mt-4 max-w-2xl ${centered ? "mx-auto" : ""}`}>
              {subtitle}
            </p>
          ) : null}
        </div>
      </section>
    );
  },
};
