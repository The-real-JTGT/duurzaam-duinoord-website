import { Render } from "@measured/puck/rsc";
import { config } from "../../puck.config";
import { supabase } from "../../lib/supabase";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = "/" + (slug?.join("/") || "");
  const { data: page } = await supabase
    .from("pages")
    .select("title")
    .eq("slug", path)
    .maybeSingle();

  return {
    title: page?.title || "Duurzaam Duinoord",
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = "/" + (slug?.join("/") || "");
  
  // Fetch the page data from our Supabase database
  const { data: page, error } = await supabase
    .from("pages")
    .select("content")
    .eq("slug", path)
    .maybeSingle();

  if (error || !page) {
    return notFound();
  }

  // Render the drag-and-drop JSON content using Puck and our custom Blocks
  return <Render config={config} data={page.content} />;
}
