import React from "react";
import Link from "next/link";

export function EditButton({ slug }: { slug: string }) {
  return (
    <Link
      href={`/edit/${slug}`}
      className="fixed bottom-8 right-8 z-40 inline-flex items-center gap-2 px-6 py-3 bg-foreground text-white rounded-full font-medium tracking-wide text-sm shadow-soft-xl transition duration-300 hover:scale-105 hover:shadow-2xl group"
    >
      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20 text-xs group-hover:bg-primary transition duration-300">
        ✏️
      </span>
      Bewerk Pagina
    </Link>
  );
}
