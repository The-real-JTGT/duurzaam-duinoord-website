import { Render } from "@measured/puck/rsc";
import { notFound } from "next/navigation";
import { EditButton } from "../../components/EditButton";
import { isUserAuthorized } from "../../lib/auth";
import { getDefaultPageData } from "../../lib/default-page-data";
import { supabase } from "../../lib/supabase";
import { config } from "../../puck.config";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = "/" + (slug?.join("/") || "");
  const fallback = getDefaultPageData(path);
  const fallbackTitle = fallback.root?.props?.title || "Duurzaam Duinoord";

  const { data: page } = await supabase
    .from("pages")
    .select("title")
    .eq("slug", path)
    .maybeSingle();

  return {
    title: page?.title || fallbackTitle,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = "/" + (slug?.join("/") || "");
  const fallback = getDefaultPageData(path);
  const canEdit = await isUserAuthorized();

  const { data: page, error } = await supabase
    .from("pages")
    .select("content")
    .eq("slug", path)
    .maybeSingle();

  if (error) {
    return notFound();
  }

  const data = page?.content?.content?.length ? page.content : fallback;
  const editSlug = slug?.join("/") || "home";

  if (!data?.content?.length) {
    return notFound();
  }

  return (
    <>
      <Render config={config} data={data} />
      {canEdit ? <EditButton slug={editSlug} /> : null}
    </>
  );
}
