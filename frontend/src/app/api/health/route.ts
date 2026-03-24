import { NextResponse } from "next/server";
import { isAdminPasswordConfigured } from "../../../lib/auth";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    editorAuthConfigured: isAdminPasswordConfigured(),
  });
}
