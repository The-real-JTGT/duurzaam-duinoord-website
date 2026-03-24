type PageContent = Record<string, any>;

async function parseError(response: Response) {
  try {
    const body = await response.json();
    if (body?.detail) {
      return body.detail;
    }
  } catch {
    // Ignore JSON parsing errors and fall back to the HTTP status text.
  }

  return response.statusText || `Request failed with status ${response.status}`;
}

export async function loadPageContent(slug: string): Promise<PageContent | null> {
  const response = await fetch(`/api/pages?slug=${encodeURIComponent(slug)}`, {
    method: "GET",
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  const page = await response.json();
  return page?.content ?? null;
}

export async function savePageContent(slug: string, content: PageContent, title?: string) {
  const response = await fetch("/api/pages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      slug,
      title,
      content,
    }),
  });

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  return response.json();
}
