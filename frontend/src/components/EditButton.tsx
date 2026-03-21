import Link from "next/link";
import { Pencil } from "lucide-react";
import { designMaster } from "../design/theme-master";

export function EditButton({ slug }: { slug: string }) {
  return (
    <Link
      href={`/edit/${slug}`}
      className={`${designMaster.buttons.primary} fixed bottom-6 right-6 z-40 shadow-soft-xl`}
    >
      <Pencil size={16} />
      Bewerk pagina
    </Link>
  );
}
