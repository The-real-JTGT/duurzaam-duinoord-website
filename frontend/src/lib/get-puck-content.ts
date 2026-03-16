import { supabase } from "./supabase";

/**
 * Fetches Puck page content from Supabase for a given slug.
 * Returns the content if it exists and has blocks, otherwise null.
 */
export async function getPuckContent(slug: string) {
  const { data: page } = await supabase
    .from("pages")
    .select("content")
    .eq("slug", slug)
    .maybeSingle();

  if (page && page.content && page.content.content && page.content.content.length > 0) {
    return page.content;
  }

  return null;
}
