import {
  imageLibraryCatalogPath,
  readJsonFile,
  searchCatalog,
} from "./image-library-utils.mjs";

function parseArgs(args) {
  const parsed = {
    limit: 5,
    pageUrl: "",
    json: false,
    query: "",
  };

  const freeText = [];

  for (let index = 0; index < args.length; index += 1) {
    const current = args[index];

    if (current === "--limit") {
      parsed.limit = Number(args[index + 1] || 5);
      index += 1;
      continue;
    }

    if (current === "--page-url") {
      parsed.pageUrl = args[index + 1] || "";
      index += 1;
      continue;
    }

    if (current === "--json") {
      parsed.json = true;
      continue;
    }

    freeText.push(current);
  }

  parsed.query = freeText.join(" ").trim();
  return parsed;
}

const args = parseArgs(process.argv.slice(2));

if (!args.query) {
  console.error('Usage: npm run image-library:search -- "geveltuin rozen straat"');
  process.exit(1);
}

const catalog = readJsonFile(imageLibraryCatalogPath, []);

if (!catalog.length) {
  console.error("The generated catalog is empty. Run `npm run image-library:sync` first.");
  process.exit(1);
}

const results = searchCatalog(catalog, args.query, {
  limit: args.limit,
  pageUrl: args.pageUrl,
});

if (args.json) {
  console.log(JSON.stringify(results, null, 2));
  process.exit(0);
}

if (!results.length) {
  console.log("No matching images found.");
  process.exit(0);
}

results.forEach((result, index) => {
  console.log(`${index + 1}. ${result.filename}`);
  console.log(`   score: ${result.score}`);
  console.log(`   status: ${result.assetStatus}`);
  console.log(`   resolvedUrl: ${result.resolvedUrl}`);
  if (result.pageUrl) {
    console.log(`   sourcePage: ${result.pageUrl}`);
  }
  if (result.altText) {
    console.log(`   altText: ${result.altText}`);
  }
  if (result.reasons.length) {
    console.log(`   reasons: ${result.reasons.join(", ")}`);
  }
  if (result.description) {
    const compactDescription =
      result.description.length > 220 ? `${result.description.slice(0, 217)}...` : result.description;
    console.log(`   description: ${compactDescription}`);
  }
});
