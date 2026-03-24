import { redirect } from "next/navigation";
import { AdminLoginForm } from "../../../components/AdminLoginForm";
import {
  getSafeAdminNextPath,
  isAdminPasswordConfigured,
  isUserAuthorized,
} from "../../../lib/auth";

type LoginPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const nextParam = params.next;
  const nextPath = getSafeAdminNextPath(typeof nextParam === "string" ? nextParam : undefined);

  if (await isUserAuthorized()) {
    redirect(nextPath);
  }

  return (
    <AdminLoginForm
      nextPath={nextPath}
      passwordConfigured={isAdminPasswordConfigured()}
    />
  );
}
