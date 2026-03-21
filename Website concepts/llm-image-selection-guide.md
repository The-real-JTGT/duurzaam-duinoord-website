# LLM Image Selection Guide

## Purpose

This guide explains how an LLM should choose images from the Duurzaam Duinoord image library when generating or updating website pages.

The goal is:

- use the existing image library instead of random stock images
- choose images that fit the page topic and image slot
- use the correct local site URL in the final code or Puck JSON

## Core rule

Before filling any image field, the LLM should search the image library.

Do not invent image URLs when a relevant library image exists.

## Available backend endpoint

Use:

`POST /image-library/search`

Example local development URL:

`http://127.0.0.1:8000/image-library/search`

## Request shape

Send JSON like:

```json
{
  "query": "hero image for energy coaching on a rooftop with solar panels",
  "limit": 5,
  "page_url": "https://duurzaamduinoord.nl/energiecoaching",
  "asset_types": ["photo"],
  "local_only": true
}
```

### Fields

- `query`
  Free-text search brief for the exact image slot.
- `limit`
  Usually `5` to `8`.
- `page_url`
  Optional but recommended. Helps boost images that came from the same or similar source page.
- `asset_types`
  Optional but strongly recommended.
- `local_only`
  Usually `true`. This prefers images already present in `frontend/public/media/library/`.

## Response fields that matter

Each result includes:

- `resolved_url`
- `alt_text`
- `description`
- `asset_type`
- `tags`
- `semantic_score`
- `keyword_score`
- `final_score`
- `reasons`
- `search_strategy`

### What they mean

- `semantic_score`
  Embedding-based relevance.
- `keyword_score`
  Bonus score from exact words in alt text, description, page URL, type, and local-asset status.
- `final_score`
  The combined ranking score. Prefer higher values.
- `resolved_url`
  The URL that should be used in page content.
- `search_strategy`
  `rpc` or `python_fallback`. Either is acceptable for selection.

## Asset type guide

Use `asset_types` to avoid bad matches.

Common values:

- `photo`
- `logo`
- `diagram`
- `chart`
- `map`
- `document`
- `flag`
- `icon`

### Recommended defaults by slot

- `Hero.imageUrl` -> `["photo"]`
- `ImageBanner.imageUrl` -> usually `["photo"]`
- `FeaturedStory.imageOneUrl` -> `["photo"]`
- `FeaturedStory.imageTwoUrl` -> `["photo"]`
- explainer section about heat loss -> `["diagram"]`
- statistics section -> `["chart"]`
- historic district section -> `["map"]`
- partner or brand section -> `["logo"]`

## How the LLM should write the query

The query should describe:

1. the page topic
2. the image slot role
3. the visual subject
4. the desired mood or use

### Good query examples

- `hero image for energy coaching in Duinoord with people on a rooftop and solar panels`
- `community event indoors with brochures and people talking at a table`
- `geveltuin with roses against a historic facade in a quiet street`
- `diagram showing heat loss in a house`
- `historic map of Duinoord neighborhood`

### Bad query examples

- `nice image`
- `green`
- `something about sustainability`
- `homepage image`

## Selection algorithm for the LLM

When the response comes back, choose images in this order:

1. Prefer the highest `final_score`.
2. Prefer a result with the correct `asset_type`.
3. Prefer a result whose `description` clearly matches the slot.
4. Prefer `local_only: true` results.
5. Prefer images with a matching `page_url` when the page topic is very specific.
6. Avoid repeating the same image multiple times on one page unless repetition is intentional.

## Decision rules by slot

### Hero image

Pick an image that:

- immediately communicates the page theme
- works as a strong single visual
- is broad and inviting rather than overly technical

Avoid:

- charts
- diagrams
- logos
- low-context detail shots unless the page is intentionally intimate

### Image banner

Pick an image that:

- illustrates the nearby content section directly
- can work at wide aspect ratios
- is visually clear without requiring much explanation

### Featured story images

Pick images that:

- feel editorial and human
- work together as a pair
- do not duplicate each other too closely

If selecting two images for the same story:

1. choose the strongest top match first
2. choose a second image that supports the same topic with a slightly different composition or detail

## How to use the chosen result in code

Use:

- `resolved_url` for the image URL
- `alt_text` for the alt text unless the page needs a more context-specific accessible description

### Example for `Hero`

```json
{
  "type": "Hero",
  "props": {
    "id": "hero-energiecoaching",
    "eyebrow": "Energiecoaching",
    "title": "Samen slimmer verduurzamen",
    "subtitle": "Praktisch advies voor bewoners van Duinoord.",
    "buttonText": "Vraag advies aan",
    "buttonLink": "mailto:info@duurzaamduinoord.nl?subject=Energiecoaching",
    "note": "Praktisch en persoonlijk.",
    "noteTone": "moss",
    "imageUrl": "/media/library/66f1695e-c03b-4e1a-8f5c-64fc879656e3.jpg",
    "imageAlt": "Drie mensen op een dak naast een dakluik en zonnepanelen. De man op de voorgrond glimlacht.",
    "imageShape": "rounded"
  }
}
```

## Fallback rules

If no result is clearly relevant:

1. broaden the query once
2. remove overly narrow words
3. keep the `asset_type`
4. search again

If the first search still fails:

1. try without `page_url`
2. increase `limit` to `8`
3. choose the best semantically relevant image only if it is not misleading

If no safe match exists:

- leave the image field empty
- or use a neutral fallback image only if the page design requires one

Do not use a wrong image just because one exists.

## Suggested LLM workflow for page generation

For each image slot:

1. identify the slot type
2. decide the `asset_type`
3. write a focused search query
4. call `POST /image-library/search`
5. inspect the top 3 results
6. choose the best result using `final_score` plus human-fit judgment
7. write `resolved_url` and `alt_text` into the page data

## Recommended examples

### Example 1: Energiecoaching hero

Request:

```json
{
  "query": "hero image for energy coaching on a rooftop with solar panels",
  "limit": 5,
  "page_url": "https://duurzaamduinoord.nl/energiecoaching",
  "asset_types": ["photo"],
  "local_only": true
}
```

Expected behavior:

- prefer a rooftop coaching or solar-related photo
- reject logos, charts, maps, and diagrams

### Example 2: Warmtetransitie explainer

Request:

```json
{
  "query": "diagram showing heat loss in a house",
  "limit": 5,
  "page_url": "https://duurzaamduinoord.nl/warmtetransitie",
  "asset_types": ["diagram"],
  "local_only": true
}
```

Expected behavior:

- prefer the heat-loss diagram
- do not choose a sunset cover image if the slot is explanatory

### Example 3: Leefomgeving section

Request:

```json
{
  "query": "geveltuin with roses against a historic facade in a quiet street",
  "limit": 5,
  "asset_types": ["photo"],
  "local_only": true
}
```

Expected behavior:

- prefer the geveltuin image
- use the local library URL

## Short instruction block for future LLM prompts

You can paste this into future build prompts:

```text
If a page needs images, use the Duurzaam Duinoord image library first. For each image slot, call POST /image-library/search with a slot-specific query, a matching asset_types filter, and local_only=true. Choose from the top results using final_score, then verify that the description fits the slot. Use resolved_url as the image URL and alt_text as the default alt text. Do not use random stock images when a relevant library image exists.
```
