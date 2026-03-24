"use client";

import { useEffect, useState } from "react";
import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import { config } from "../puck.config";
import { getDefaultPageData } from "../lib/default-page-data";
import { loadPageContent, savePageContent } from "../lib/pages-api";

export function EditPageClient({ slug }: { slug: string[] }) {
  const [data, setData] = useState<any>(null);
  const path = "/" + (slug?.join("/") || "");

  useEffect(() => {
    const loadPage = async () => {
      try {
        const pageContent = await loadPageContent(path);
        setData(pageContent || getDefaultPageData(path));
      } catch {
        setData(getDefaultPageData(path));
      }
    };

    loadPage();
  }, [path]);

  const handlePublish = async (newContent: any) => {
    const title = newContent?.root?.props?.title || "New Page";

    try {
      await savePageContent(path, newContent, title);
      alert("Page successfully saved!");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      alert("Error saving page: " + message);
    }
  };

  if (!data) {
    return <div className="p-8">Laden van editor...</div>;
  }

  return <Puck config={config} data={data} onPublish={handlePublish} />;
}
