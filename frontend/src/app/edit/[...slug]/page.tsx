import { redirect } from "next/navigation";
import { EditPageClient } from "../../../components/EditPageClient";
import { buildAdminLoginUrl, isUserAuthorized } from "../../../lib/auth";

export default async function Editor({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const editSlug = slug?.join("/") || "home";

  if (!(await isUserAuthorized())) {
    redirect(buildAdminLoginUrl(`/edit/${editSlug}`));
  }

  return <EditPageClient slug={slug ?? []} />;
}
