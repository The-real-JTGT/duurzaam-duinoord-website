# Image Library Implementation Plan

## Goal

When an LLM builds or updates pages in this repo, it should choose the best matching images from the Duurzaam Duinoord image library and use the correct site-served image URL.

## Recommended architecture

### 1. Store binary assets locally in the frontend

Put the actual image files in:

`frontend/public/media/library/`

Why:

- Next.js serves everything in `public/` directly.
- The final page code can use stable URLs like `/media/library/<filename>`.
- Editors and visitors are no longer dependent on old external CDN URLs.

### 2. Keep one metadata export as the library source of truth

Put the full JSON export in:

`frontend/src/content/image-library/source-library.json`

Why:

- It is easy for humans and agents to inspect.
- It keeps `filename`, `altText`, `description`, and `pageUrl` together.
- The descriptions become searchable retrieval text.

### 3. Generate a normalized catalog

Run:

```bash
cd frontend
npm run image-library:sync
```

This generates:

`frontend/src/content/image-library/catalog.generated.json`

The generated catalog adds:

- normalized search text
- `assetStatus`
- `publicUrl`
- `resolvedUrl`

### 4. Search before assigning images

Run:

```bash
npm run image-library:search -- "historische huizen groene straat"
```

The LLM or developer should use the top ranked `resolvedUrl` when writing:

- `Hero.imageUrl`
- `ImageBanner.imageUrl`
- `FeaturedStory.imageOneUrl`
- `FeaturedStory.imageTwoUrl`

## Ranking approach

The prepared repo search currently scores on:

- phrase matches in description and alt text
- token matches in alt text
- token matches in description
- token matches in `pageUrl`
- a bonus when the source page matches the requested page
- a bonus when the local asset already exists

This is a good Phase 1 because it is transparent, easy to debug, and works well when descriptions are already rich.

## Better production pattern

For production image selection, a hybrid pipeline is stronger than pure semantic search followed by an open-ended LLM ranking step.

Recommended flow:

1. Apply hard filters first.
2. Run keyword retrieval and vector retrieval in parallel.
3. Merge the candidate lists with reciprocal rank fusion or another simple weighted merge.
4. Re-rank only the top 10 to 20 candidates with a focused LLM prompt that includes the page goal and the image slot role.
5. Apply final deterministic checks for duplicates, local-asset preference, and minimum relevance.

Hard filters should remove obviously wrong matches before the expensive step, for example:

- logo vs photo vs diagram vs map
- source page or topic constraints
- file availability in the local asset folder
- language or campaign constraints

This avoids a common failure mode where the LLM spends effort comparing candidates that should never have been in the pool.

## Best next upgrade

For stronger automatic matching, add embeddings in Phase 2.

Recommended direction:

1. Create embeddings from a combined field such as `description + altText + pageUrl`.
2. Store the vectors in Supabase or another vector store.
3. Retrieve top matches semantically for a page brief like "community energy coaching in historic homes".
4. In parallel, keep the keyword retrieval already prepared in this repo.
5. Fuse the semantic and keyword results.
6. Re-rank the fused shortlist with local bonuses and page-path bonuses.

That gives you:

- better matches for abstract prompts
- less dependence on exact keyword overlap
- more reliable image selection for autonomous agents
- fewer misses when the best image has sparse or quirky wording

## Suggested workflow for future page generation

1. Draft the page structure in Puck blocks.
2. For each image slot, write a short search brief.
3. Search the library.
4. Pick the top local result with the best thematic fit.
5. Use `resolvedUrl` and the library `altText`.
6. Only fall back to remote URLs temporarily if the file has not been copied locally yet.

## Practical rollout order

1. Replace the sample metadata in `source-library.json` with the full export.
2. Copy all files into `frontend/public/media/library/`.
3. Run `npm run image-library:sync`.
4. Test 5 to 10 realistic searches.
5. Add asset-type tags such as `photo`, `logo`, `diagram`, `map`, `event`, `people`, `street`, and `garden`.
6. Update seeded page images and future prompts to use the library.
7. Add embeddings and LLM re-ranking after the keyword workflow proves out.
