"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type AdminLoginFormProps = {
  nextPath: string;
  passwordConfigured: boolean;
};

export function AdminLoginForm({ nextPath, passwordConfigured }: AdminLoginFormProps) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!passwordConfigured) {
      setError("CMS_ADMIN_PASSWORD is not configured.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/admin/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        setError(body?.detail || "Login failed.");
        return;
      }

      router.push(nextPath);
      router.refresh();
    } catch {
      setError("Login failed.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-16">
      <div className="rounded-[28px] border border-black/10 bg-white/95 p-8 shadow-xl">
        <p className="text-sm uppercase tracking-[0.24em] text-black/50">Demo Editor</p>
        <h1 className="mt-3 text-3xl font-semibold text-black">Sign in to edit content</h1>
        <p className="mt-3 text-sm text-black/70">
          This temporary login protects the demo editor until full authentication is built.
        </p>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-black" htmlFor="password">
            Admin password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-2xl border border-black/15 px-4 py-3 outline-none transition focus:border-black/40"
            autoComplete="current-password"
            disabled={submitting}
          />
          {error ? <p className="text-sm text-red-700">{error}</p> : null}
          <button
            type="submit"
            className="w-full rounded-2xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-black/85 disabled:cursor-not-allowed disabled:bg-black/50"
            disabled={submitting}
          >
            {submitting ? "Signing in..." : "Sign in"}
          </button>
        </form>
        <p className="mt-6 text-sm text-black/60">
          <Link href="/" className="underline underline-offset-4">
            Back to website
          </Link>
        </p>
      </div>
    </main>
  );
}
