import { NextRequest, NextResponse } from "next/server";
import { isUserAuthorized } from "../../../lib/auth";

function getBackendBaseUrl(): string {
  const defaultUrl =
    process.env.NODE_ENV === "production" ? "http://backend:8000" : "http://127.0.0.1:8000";

  return (process.env.BACKEND_INTERNAL_URL ?? defaultUrl).replace(/\/$/, "");
}

function getInternalHeaders(): HeadersInit {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (process.env.BACKEND_INTERNAL_TOKEN) {
    headers["X-Internal-Token"] = process.env.BACKEND_INTERNAL_TOKEN;
  }

  return headers;
}

async function proxyResponse(response: Response) {
  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body = await response.json();
    return NextResponse.json(body, { status: response.status });
  }

  const text = await response.text();
  return new NextResponse(text, {
    status: response.status,
    headers: {
      "Content-Type": contentType || "text/plain; charset=utf-8",
    },
  });
}

export async function GET(request: NextRequest) {
  if (!(await isUserAuthorized())) {
    return NextResponse.json({ detail: "Unauthorized." }, { status: 401 });
  }

  const slug = request.nextUrl.searchParams.get("slug");
  if (!slug) {
    return NextResponse.json({ detail: "Missing slug query parameter." }, { status: 400 });
  }

  const backendUrl = `${getBackendBaseUrl()}/pages?slug=${encodeURIComponent(slug)}`;
  const response = await fetch(backendUrl, {
    method: "GET",
    headers: getInternalHeaders(),
    cache: "no-store",
  });

  return proxyResponse(response);
}

export async function POST(request: NextRequest) {
  if (!(await isUserAuthorized())) {
    return NextResponse.json({ detail: "Unauthorized." }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body.slug !== "string" || typeof body.content !== "object" || body.content === null) {
    return NextResponse.json({ detail: "Invalid page payload." }, { status: 400 });
  }

  const response = await fetch(`${getBackendBaseUrl()}/pages`, {
    method: "POST",
    headers: getInternalHeaders(),
    body: JSON.stringify(body),
    cache: "no-store",
  });

  return proxyResponse(response);
}
