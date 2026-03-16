"use client";

import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import { config } from "../../../puck.config";
import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import { getDefaultPageData } from "../../../lib/default-page-data";

import { use } from "react";

export default function Editor({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = use(params);
  const [data, setData] = useState<any>(null);
  const path = "/" + (slug?.join("/") || "");

  useEffect(() => {
    // Load the existing page content from Supabase
    const loadPage = async () => {
      const { data: page } = await supabase
        .from("pages")
        .select("content")
        .eq("slug", path)
        .maybeSingle();
      
      if (page && page.content) {
        setData(page.content);
      } else {
        // Use the pre-populated default data for known pages
        setData(getDefaultPageData(path));
      }
    };
    loadPage();
  }, [path]);

  // Handle saving the drag-and-drop layout back to Supabase
  const handlePublish = async (newContent: any) => {
    const { error } = await supabase
      .from("pages")
      .upsert({
        slug: path,
        title: "New Page", // Consider adding a UI field to edit this
        content: newContent,
        updated_at: new Date().toISOString()
      }, { onConflict: 'slug' });
      
    if (error) {
      alert("Error saving page: " + error.message);
    } else {
      alert("Page successfully saved!");
    }
  };

  if (!data) return <div className="p-8">Laden van editor...</div>;

  return (
    <Puck
      config={config}
      data={data}
      onPublish={handlePublish}
    />
  );
}
