import React from "react";
import { ComponentConfig } from "@measured/puck";

export type GridProps = {
  columns: 1 | 2 | 3 | 4;
};

export const GridBlock: ComponentConfig<GridProps> = {
  fields: {
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
    columns: 3,
  },
  render: ({ columns, puck }) => {
    const RenderDropZone = puck.renderDropZone;

    // Breakpoints strategy: Always 1 col on mobile, then scale up
    const getGridClass = () => {
      switch (columns) {
        case 1:
          return "grid-cols-1";
        case 2:
          return "grid-cols-1 md:grid-cols-2";
        case 3:
          // The Organic staggered grid look
          return "grid-cols-1 md:grid-cols-3 [&>*:nth-child(even)]:md:translate-y-8";
        case 4:
          return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
        default:
          return "grid-cols-1 md:grid-cols-3";
      }
    };

    return (
      <section className="w-full py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
           <div className={`grid gap-8 md:gap-12 ${getGridClass()}`}>
             <RenderDropZone zone="grid-items" />
           </div>
        </div>
      </section>
    );
  },
};
