import { ComponentConfig } from "@measured/puck";

export type GridProps = {
  id: string;
  columns: 1 | 2 | 3 | 4;
};

export const GridBlock: ComponentConfig<GridProps> = {
  fields: {
    id: { type: "text" },
    columns: {
      type: "select",
      options: [
        { label: "1 Column", value: 1 },
        { label: "2 Columns", value: 2 },
        { label: "3 Columns", value: 3 },
        { label: "4 Columns", value: 4 },
      ],
    },
  },
  defaultProps: {
    id: "grid-section",
    columns: 3,
  },
  render: ({ columns, puck }) => {
    const RenderDropZone = puck.renderDropZone;

    const getGridClass = () => {
      switch (columns) {
        case 1:
          return "grid-cols-1";
        case 2:
          return "grid-cols-1 md:grid-cols-2";
        case 3:
          return "grid-cols-1 md:grid-cols-2 xl:grid-cols-3 [&>*:nth-child(2)]:xl:translate-y-10";
        case 4:
          return "grid-cols-1 md:grid-cols-2 xl:grid-cols-4";
        default:
          return "grid-cols-1 md:grid-cols-2 xl:grid-cols-3";
      }
    };

    return (
      <section className="px-4 py-6 md:px-8 md:py-10">
        <div className="dd-shell">
          <div className={`grid gap-6 md:gap-8 ${getGridClass()}`}>
            <RenderDropZone zone="grid-items" />
          </div>
        </div>
      </section>
    );
  },
};
