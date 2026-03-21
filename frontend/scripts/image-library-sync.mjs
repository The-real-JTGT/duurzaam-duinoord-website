import {
  buildCatalog,
  ensureImageLibraryDirectories,
  imageLibraryAssetDir,
  imageLibraryCatalogPath,
  imageLibrarySourcePath,
  readJsonFile,
  writeJsonFile,
} from "./image-library-utils.mjs";

ensureImageLibraryDirectories();

const rawEntries = readJsonFile(imageLibrarySourcePath, []);

if (!Array.isArray(rawEntries)) {
  console.error(`Expected an array in ${imageLibrarySourcePath}.`);
  process.exit(1);
}

const catalog = buildCatalog(rawEntries);
writeJsonFile(imageLibraryCatalogPath, catalog);

const localCount = catalog.filter((entry) => entry.assetStatus === "local").length;
const remoteCount = catalog.length - localCount;

console.log(`Image library synced.`);
console.log(`Source file: ${imageLibrarySourcePath}`);
console.log(`Catalog file: ${imageLibraryCatalogPath}`);
console.log(`Asset folder: ${imageLibraryAssetDir}`);
console.log(`Entries: ${catalog.length}`);
console.log(`Local assets: ${localCount}`);
console.log(`Remote-only assets: ${remoteCount}`);
