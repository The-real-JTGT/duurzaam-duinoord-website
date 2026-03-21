import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const frontendRoot = path.resolve(__dirname, "..");
export const imageLibraryContentDir = path.join(frontendRoot, "src", "content", "image-library");
export const imageLibrarySourcePath = path.join(imageLibraryContentDir, "source-library.json");
export const imageLibraryCatalogPath = path.join(imageLibraryContentDir, "catalog.generated.json");
export const imageLibraryAssetDir = path.join(frontendRoot, "public", "media", "library");

export function ensureImageLibraryDirectories() {
  fs.mkdirSync(imageLibraryContentDir, { recursive: true });
  fs.mkdirSync(imageLibraryAssetDir, { recursive: true });
}

export function readJsonFile(filePath, fallbackValue) {
  if (!fs.existsSync(filePath)) {
    return fallbackValue;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  if (!raw.trim()) {
    return fallbackValue;
  }

  return JSON.parse(raw);
}

export function writeJsonFile(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

export function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/https?:\/\//g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function tokenize(value) {
  return Array.from(new Set(normalizeText(value).split(" ").filter((token) => token.length > 1)));
}

export function getPagePath(pageUrl) {
  try {
    const url = new URL(pageUrl);
    return url.pathname || "/";
  } catch {
    return "";
  }
}

export function getPublicAssetUrl(filename) {
  return `/media/library/${filename}`;
}

export function buildCatalog(rawEntries) {
  return rawEntries
    .filter((entry) => entry && entry.filename)
    .map((entry, index) => {
      const filename = String(entry.filename || "").trim();
      const localAssetPath = path.join(imageLibraryAssetDir, filename);
      const assetExists = fs.existsSync(localAssetPath);
      const pagePath = getPagePath(entry.pageUrl);
      const description = String(entry.description || "").trim();
      const altText = String(entry.altText || "").trim();
      const searchableDescription = [description, altText, entry.pageUrl, pagePath, filename]
        .filter(Boolean)
        .join(" ");

      return {
        id: filename || `asset-${index + 1}`,
        filename,
        originalUrl: String(entry.originalUrl || "").trim(),
        pageUrl: String(entry.pageUrl || "").trim(),
        pagePath,
        altText,
        description,
        assetStatus: assetExists ? "local" : "remote",
        publicUrl: assetExists ? getPublicAssetUrl(filename) : "",
        resolvedUrl: assetExists ? getPublicAssetUrl(filename) : String(entry.originalUrl || "").trim(),
        searchableText: normalizeText(searchableDescription),
        descriptionText: normalizeText(description),
        altTextText: normalizeText(altText),
        pageUrlText: normalizeText(entry.pageUrl),
        pagePathText: normalizeText(pagePath),
        filenameText: normalizeText(filename),
        keywords: tokenize(searchableDescription),
      };
    });
}

export function scoreEntry(entry, query, options = {}) {
  const normalizedQuery = normalizeText(query);
  const queryTokens = tokenize(query);
  const requestedPageUrl = String(options.pageUrl || "").trim();
  const requestedPagePath = getPagePath(requestedPageUrl);
  const reasons = [];
  let score = 0;

  if (normalizedQuery && entry.searchableText.includes(normalizedQuery)) {
    score += 40;
    reasons.push("exact phrase match");
  }

  for (const token of queryTokens) {
    if (entry.altTextText.includes(token)) {
      score += 12;
      reasons.push(`alt text:${token}`);
      continue;
    }

    if (entry.descriptionText.includes(token)) {
      score += 9;
      reasons.push(`description:${token}`);
      continue;
    }

    if (entry.pagePathText.includes(token) || entry.pageUrlText.includes(token)) {
      score += 7;
      reasons.push(`page:${token}`);
      continue;
    }

    if (entry.filenameText.includes(token)) {
      score += 3;
      reasons.push(`filename:${token}`);
    }
  }

  if (requestedPageUrl && entry.pageUrl.toLowerCase() === requestedPageUrl.toLowerCase()) {
    score += 22;
    reasons.push("same source page");
  } else if (requestedPagePath && entry.pagePath === requestedPagePath) {
    score += 14;
    reasons.push("same source path");
  }

  if (entry.assetStatus === "local") {
    score += 6;
    reasons.push("local asset ready");
  }

  return {
    score,
    reasons: Array.from(new Set(reasons)),
  };
}

export function searchCatalog(catalog, query, options = {}) {
  const limit = Number(options.limit || 5);

  return catalog
    .map((entry) => {
      const ranking = scoreEntry(entry, query, options);
      return {
        ...entry,
        score: ranking.score,
        reasons: ranking.reasons,
      };
    })
    .filter((entry) => entry.score > 0)
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score;
      }

      if (left.assetStatus !== right.assetStatus) {
        return left.assetStatus === "local" ? -1 : 1;
      }

      return left.filename.localeCompare(right.filename);
    })
    .slice(0, limit);
}
