import { createHash } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_SESSION_COOKIE = "dd_admin_session";

function getAdminPassword(): string {
  return process.env.CMS_ADMIN_PASSWORD?.trim() ?? "";
}

export function isAdminPasswordConfigured(): boolean {
  return Boolean(getAdminPassword());
}

export function buildAdminLoginUrl(nextPath = "/"): string {
  return `/admin/login?next=${encodeURIComponent(nextPath)}`;
}

export function isValidAdminPassword(password: string): boolean {
  const configuredPassword = getAdminPassword();
  return Boolean(configuredPassword) && password === configuredPassword;
}

export function createAdminSessionToken(): string {
  const configuredPassword = getAdminPassword();
  if (!configuredPassword) {
    return "";
  }

  return createHash("sha256").update(configuredPassword).digest("hex");
}

/**
 * Temporary demo auth backed by a single password and an HttpOnly cookie.
 * This keeps the editor hidden in production until proper auth is added.
 */
export async function isUserAuthorized(): Promise<boolean> {
  const expectedToken = createAdminSessionToken();
  if (!expectedToken) {
    return false;
  }

  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_SESSION_COOKIE)?.value === expectedToken;
}
