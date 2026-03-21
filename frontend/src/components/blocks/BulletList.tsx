import { ComponentConfig } from "@measured/puck";
import { getListClass } from "../../design/theme-master";

export type BulletListProps = {
  title: string;
  items: string;
  tone: "paper" | "moss" | "ink";
};

export const BulletListBlock: ComponentConfig<BulletListProps> = {
  fields: {
    title: { type: "text" },
    items: { type: "textarea" },
    tone: {
      type: "radio",
      options: [
        { label: "Paper", value: "paper" },
        { label: "Moss", value: "moss" },
        { label: "Ink", value: "ink" },
      ],
    },
  },
  defaultProps: {
    title: "Voordelen",
    items:
      "Geen kosten voor aanschaf en onderhoud\nGeen wegenbelasting en autoverzekering\nVoor elke gelegenheid een geschikte oplossing",
    tone: "paper",
  },
  render: ({ title, items, tone }) => {
    const bulletItems = items.split("\n").filter((item) => item.trim() !== "");

    return (
      <section className="px-4 py-8 md:px-8 md:py-10">
        <div className={`dd-shell max-w-4xl p-8 md:p-10 ${getListClass(tone)}`}>
          {title ? <h3 className="mb-7 font-serif text-3xl italic text-current">{title}</h3> : null}
          <ul className="dd-list">
            {bulletItems.map((item, index) => (
              <li key={index} className="dd-list__item">
                <span className="dd-list__bullet" aria-hidden="true">+</span>
                <span className="leading-8">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  },
};
