import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  createAdminSessionToken,
  isAdminPasswordConfigured,
  isValidAdminPassword,
} from "../../../../lib/auth";

function shouldUseSecureCookies(request: NextRequest): boolean {
  const forwardedProto = request.headers.get("x-forwarded-proto");
  return request.nextUrl.protocol === "https:" || forwardedProto === "https";
}

export async function POST(request: NextRequest) {
  if (!isAdminPasswordConfigured()) {
    return NextResponse.json(
      { detail: "CMS_ADMIN_PASSWORD is not configured." },
      { status: 503 },
    );
  }

  const body = await request.json().catch(() => null);
  const password = typeof body?.password === "string" ? body.password : "";

  if (!isValidAdminPassword(password)) {
    return NextResponse.json({ detail: "Invalid password." }, { status: 401 });
  }

  const response = NextResponse.json({ status: "ok" });
  response.cookies.set({
    name: ADMIN_SESSION_COOKIE,
    value: createAdminSessionToken(),
    httpOnly: true,
    sameSite: "lax",
    secure: shouldUseSecureCookies(request),
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  return response;
}

export async function DELETE(request: NextRequest) {
  const response = NextResponse.json({ status: "ok" });
  response.cookies.set({
    name: ADMIN_SESSION_COOKIE,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    secure: shouldUseSecureCookies(request),
    path: "/",
    maxAge: 0,
  });

  return response;
}
