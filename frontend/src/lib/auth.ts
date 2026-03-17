import { cookies } from "next/headers";

/**
 * Future-proof authentication abstraction.
 * Currently checks for a dummy cookie to simulate a logged-in state.
 * In the future, this will be replaced with:
 * return await supabase.auth.getSession();
 */
export async function isUserAuthorized(): Promise<boolean> {
  // Check if the user has an admin session cookie.
  // This perfectly mimics how real session tokens will be checked later.
  const cookieStore = await cookies();
  const hasToken = cookieStore.has("dd_admin_session");
  
  return hasToken;
}
