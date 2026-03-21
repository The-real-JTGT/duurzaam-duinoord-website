# Image Library

This folder is the source of truth for editorial image selection.

## Copy assets here

Copy all downloaded image files into:

`frontend/public/media/library/`

The filename must match the `filename` field in `source-library.json`.

Example:

- metadata filename: `4c6f07c7-357e-44b5-965a-ec2a9d286fb1.jpg`
- image file location: `frontend/public/media/library/4c6f07c7-357e-44b5-965a-ec2a9d286fb1.jpg`
- public URL used in the site: `/media/library/4c6f07c7-357e-44b5-965a-ec2a9d286fb1.jpg`

## Metadata file

Paste the full exported library JSON into:

`frontend/src/content/image-library/source-library.json`

Keep the shape as:

```json
[
  {
    "originalUrl": "https://...",
    "pageUrl": "https://...",
    "filename": "uuid.jpg",
    "altText": "Short accessible alt text",
    "description": "Rich descriptive text for retrieval"
  }
]
```

## Build the searchable catalog

From `frontend/`, run:

```bash
npm run image-library:sync
```

This creates `catalog.generated.json` with:

- normalized search fields
- `assetStatus` as `local` or `remote`
- `resolvedUrl`, which prefers `/media/library/<filename>` when the local file exists

## Search the library

```bash
npm run image-library:search -- "geveltuin rozen straat"
npm run image-library:search -- "warmtetransitie diagram warmteverlies" --page-url "http://www.duurzaamduinoord.nl/warmtetransitie"
npm run image-library:search -- "energiecoaching dak zonnepanelen" --json
```

## Recommended LLM workflow

1. Search the library before assigning any `imageUrl`, `imageOneUrl`, or `imageTwoUrl`.
2. Prefer results with `assetStatus: local`.
3. Use `resolvedUrl` in the page code or Puck JSON.
4. Reuse the library `altText` unless the page needs a more context-specific alternative.
5. If the best result is still `remote`, copy that file into `public/media/library`, rerun sync, and use the local URL.

## Best future upgrade

The current repo preparation gives you a transparent keyword-first search workflow.

For the strongest autonomous image selection later, use:

1. hard metadata filters
2. keyword retrieval
3. vector retrieval
4. shortlist fusion
5. LLM re-ranking of only the top candidates

That tends to outperform pure semantic search on its own, especially for logos, diagrams, maps, and neighborhood-specific images.
