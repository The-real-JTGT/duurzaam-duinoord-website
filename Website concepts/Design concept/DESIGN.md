```markdown
# Design System: The Digital Scrapbook

## 1. Overview & Creative North Star
**Creative North Star: The Curated Artifact**

This design system rejects the sterile, "pixel-perfect" rigidity of modern SaaS interfaces in favor of a tactile, editorial experience. Inspired by the organic growth of nineteenth-century Dutch architecture and the weathered charm of a community scrapbook, this system prioritizes **Charming Chaos**. 

The goal is to make the digital interface feel like a collection of physical objects—notes, sketches, and photos—laid out on a kitchen table. We achieve this through "intentional imperfection": overlapping containers, asymmetrical compositions, and a total absence of harsh geometric lines. By breaking the grid, we invite the user into a space that feels neighborly, historic, and deeply human.

---

## 2. Colors & Surface Philosophy
Our palette is rooted in the earth and history of the neighborhood: deep terracotta clays, mossy garden greens, and sun-bleached parchment.

### The "No-Line" Rule
**Hard borders are strictly prohibited.** To define sections, designers must use tonal shifts between surface tokens. For example, a `surface-container-low` section should sit directly against a `surface` background. If the transition feels too subtle, increase the contrast between tiers rather than adding a stroke.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, physical materials.
- **Base Layer:** `surface` (#fef9f2) acts as the parchment foundation.
- **Secondary Layer:** `surface-container-low` (#f8f3ec) defines large content areas.
- **Highlight Layer:** `surface-container-highest` (#e6e2db) or `secondary-container` (#cfe6c4) is used for interactive "scraps" or pinned notes.

### Signature Textures & Gradients
To avoid a "flat" digital look, apply a subtle linear gradient to primary CTAs: transitioning from `primary` (#672110) at the top-left to `primary-container` (#853724) at the bottom-right. This creates a soft, "stamped ink" depth that flat color cannot replicate.

---

## 3. Typography
The typography system is a conversation between the academic history of the neighborhood and the friendly accessibility of its modern residents.

*   **Display & Headlines (Newsreader):** Use Newsreader—specifically its **italic** variants—to inject personality and a "hand-inked" feel. The high x-height and serif detail evoke nineteenth-century newspapers and archival documents.
*   **UI & Body (Plus Jakarta Sans):** For functional clarity, use the rounded Plus Jakarta Sans. Its soft terminals mirror our "no sharp corners" philosophy, ensuring that even dense sustainability data feels approachable.

**The Hierarchy of Intent:**
- **Display-LG (3.5rem, Newsreader):** Reserved for emotional storytelling and hero headers.
- **Headline-MD (1.75rem, Newsreader Italic):** Used for section titles to create a "scrapbook caption" vibe.
- **Title-MD (1.125rem, Plus Jakarta Sans):** For navigation and card headings.
- **Body-LG (1rem, Plus Jakarta Sans):** For all narrative text, ensuring high legibility on parchment backgrounds.

---

## 4. Elevation & Depth
Depth in this system is organic, not mechanical. We move away from the "shadow = altitude" logic of Material Design toward a "layering of paper" logic.

### The Layering Principle
Achieve hierarchy by stacking `surface-container` tiers. A `surface-container-lowest` card placed on a `surface-container-low` section creates a natural "lift."

### Ambient Shadows
When a component must float (e.g., a "pinned" call-to-action), use an ultra-diffused shadow:
- **Blur:** 24px–40px
- **Opacity:** 4%–6%
- **Color:** Use a tinted version of `on-surface` (a warm, dark brown) rather than pure black to maintain the "sunlit" warmth of the parchment.

### Glassmorphism & The "Vellum" Effect
For floating navigation or overlays, use semi-transparent `surface` colors with a `backdrop-blur` (12px–20px). This mimics vellum paper, allowing the "chaos" of the background elements to bleed through softly, maintaining a sense of place.

---

## 5. Components

### Buttons
Buttons should feel like physical "toggles" or hand-cut labels.
- **Primary:** Background `primary` (#672110), text `on-primary`, with `ROUND_FULL` corners.
- **Secondary:** Background `secondary-container` (#cfe6c4), text `on-secondary-container`.
- **States:** On hover, do not change color; instead, apply a subtle `2px` upward translation to mimic the tactile spring of a physical button.

### Cards & Layouts
- **The "Scrap" Card:** Forbid divider lines. Use `surface-container-high` (#ece7e1) for the card body. Use `ROUND_XL` (3rem) or `ROUND_FULL` for corners.
- **Intentional Tilt:** For hero images or featured "scraps," apply a subtle rotation (between -1.5 and +1.5 degrees) to break the digital grid.

### Inputs & Fields
- **Styling:** Use `surface-container-lowest` (#ffffff) for the input well.
- **Borders:** Only use the "Ghost Border" (outline-variant at 20% opacity) for focus states. Otherwise, rely on the tonal shift from the surrounding container.

### Signature Component: The "Pinned Note"
A small, high-contrast container using `primary-container` (#853724) and `Newsreader Italic` text, typically overlapping the edge of a card or image. This serves as a "Director's Note" or a community tip.

---

## 6. Do’s and Don’ts

### Do:
*   **Do overlap elements.** Allow an image to partially cover a text block or a "pinned note" to break the boundary of a container.
*   **Do use white space as a divider.** Use the `Spacing Scale (16 or 20)` to separate major sections instead of lines.
*   **Do lean into asymmetry.** If a row has three cards, try making the middle one slightly taller or shifted 10px off-center.

### Don't:
*   **Don't use 90-degree corners.** Even a "sharp" corner should have at least a `ROUND_SM` (0.5rem) radius.
*   **Don't use pure black (#000000).** Use `on-surface` (#1d1c18) for all text and `tertiary` (#3c3831) for darker accents to keep the palette warm.
*   **Don't use standard "Drop Shadows."** If it looks like a default CSS shadow, it’s too heavy. It should feel like a soft glow or a natural paper-fold shadow.
*   **Don't align everything to a rigid grid.** While a base grid exists for accessibility, the *visual* weight should feel balanced but "un-anchored."