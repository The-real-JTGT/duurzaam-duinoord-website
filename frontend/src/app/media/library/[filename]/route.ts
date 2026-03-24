import { promises as fs } from "node:fs";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

const MEDIA_LIBRARY_DIR =
  process.env.MEDIA_LIBRARY_ASSET_DIR?.trim() || path.join(process.cwd(), "public", "media", "library");

const CONTENT_TYPES: Record<string, string> = {
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
};

function getContentType(filename: string): string {
  return CONTENT_TYPES[path.extname(filename).toLowerCase()] ?? "application/octet-stream";
}

function resolveAssetPath(filename: string): string | null {
  const safeFilename = path.basename(filename);
  if (!safeFilename || safeFilename !== filename) {
    return null;
  }

  return path.join(MEDIA_LIBRARY_DIR, safeFilename);
}

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ filename: string }> },
) {
  const { filename } = await context.params;
  const assetPath = resolveAssetPath(filename);

  if (!assetPath) {
    return NextResponse.json({ detail: "Invalid file path." }, { status: 400 });
  }

  try {
    const file = await fs.readFile(assetPath);

    return new NextResponse(file, {
      headers: {
        "Cache-Control": "public, max-age=3600",
        "Content-Type": getContentType(filename),
      },
    });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return NextResponse.json({ detail: "File not found." }, { status: 404 });
    }

    return NextResponse.json({ detail: "Unable to read file." }, { status: 500 });
  }
}
