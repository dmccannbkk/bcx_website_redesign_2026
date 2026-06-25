# BCX Design — Image & Video Specification

**Purpose of this document:** Placement plan and production guidance for every visual asset on the site. One signature visual moment per page — never scattered decoration — consistent with the "visual density, minimal text strings" brief.

---

## Visual Philosophy

No generic stock photography of people in meetings, offices, or handshakes anywhere on the site. That look is exactly what BCX has spent this entire process trying to escape (the "IT consultancy / training company" perception problem).

Two visual languages only, used in fixed, non-overlapping territory:

- **Kintsugi imagery** — broken ceramic, visible gold seams, the texture of repair. Represents BCX Design as a company/philosophy. Used on: Homepage.
- **Ember/spark imagery** — the colour `--spark` (`#FF4C29`) made literal. Represents Kindling specifically, the named product. Used on: Intelligence only. Never used elsewhere — Kindling is a specific product, not a stand-in for BCX as a whole.
- **Abstract gold linework** — an extension of the sitewide "seam" motif into fuller background compositions. Used on: Strategy and Studio, each with its own distinct pattern so the two pillars don't read as identical.
- **Real photography** — the one deliberate exception, reserved only for the founder portrait on About.

---

## Page-by-Page Placement

### Homepage — Hero video (full-bleed, behind hero section only)

**What:** A slow, ambient video loop. A crack forming across a dark ceramic surface, gold finding the seam, the repair completing. No ember/fire imagery — this is pure kintsugi, representing the company, not the Kindling product.

**Where:** Full-bleed background behind the hero section only. Text sits on top with a dark gradient overlay for legibility. No other section of the homepage carries video or photography — client strip, case-pattern section, and pillar grid remain text/structure only.

**Mood/colour:** Near-black, with the gold seam as the only colour, matching `--gold-foil`. Slow pacing — this should feel contemplative, not energetic.

**Status:** Not yet produced. Requires either a commissioned macro videographer (best result) or a generated/stock abstract video loop matching the description above.

---

### About — Founder portrait (single combined image, above credentials)

**Status: FINISHED.** File: `about-founders-portrait-final.png` (and separately as `david-oval-portrait.png` / `rupali-oval-portrait.png` if needed as individual assets).

**Treatment:** Black-and-white, soft tonal grade (not high-contrast noir — that was tested and rejected as too harsh). Each founder cropped to an oval, head-height occupying ~45% of frame height (measured and matched between both, not eyeballed). Thin gold ring (3px) outlining each oval, matching `--gold-solid`. Black backgrounds graded to merge visually with the page's black background rather than reading as a bounded photo rectangle.

**Placement:** Directly above the credentials section, after the values line ("Behavioural science is a powerful tool...") and before the named David McCann / Rupali Babu credentials. This is the page's one "reveal" moment — the unified, unnamed philosophy and origin narrative resolves into two named, pictured people right before the credentials confirm who they are.

**Note:** This is a single combined asset (both founders), not two separately-placed images, per explicit direction.

The kintsugi photo originally planned for About's philosophy section (top of page) has been **removed** — that section is text-only.

---

### Work — Page-hero background photo only (short, contained)

**What:** A kintsugi photograph — broken ceramic with visible gold repair — used as a quiet background treatment.

**Where:** Behind the page hero only (breadcrumb, h1, sub-headline). Short vertical extent — does **not** extend behind the case-study carousel below it. The carousel remains text-only; it is already the densest part of the site and should not compete visually with a background image.

**Status:** Not yet produced. Needs sourcing or commissioning — a real photograph of a kintsugi-repaired bowl or vessel, lit to read clearly in a dark/black-dominant crop suitable for a website hero background (gold seam should remain legible against black).

---

### Intelligence — Ember/spark accent (small, contained)

**What:** Embers or sparks caught mid-glow in near-darkness — the literal visual translation of "Kindling." Small and contained, not full-bleed.

**Where:** In the hero's right-hand column, adjacent to the existing "Powered by Kindling" badge (which already uses `--spark` orange). This is a supporting accent next to the badge, not a dominant hero visual.

**Colour:** Must use or closely match `--spark` (`#FF4C29`). This is the one place on the entire site this colour-and-imagery combination appears.

**Status:** Not yet produced. Suitable for either a generated abstract image or a short macro photograph/loop of an ember catching.

---

### Strategy — Gold linework, Pattern A

**What:** An abstract geometric composition extending the sitewide gold "seam" motif into a fuller background treatment — architectural, diagram-like, not photographic. Think: a structural rendering of a fracture-and-repair line, not a picture of an object.

**Where:** Full-width background behind the page hero, similar scale/position to About's former photo zone.

**Status:** Not yet produced. This can be built directly in SVG/CSS using the same gold-foil gradient already defined in the design tokens — no photography or external generation required. Recommend building this natively in code using the existing `--gold-foil` gradient and the seam SVG technique already used sitewide, extended into a larger, more elaborate line composition.

---

### Studio — Gold linework, Pattern B

**What:** Same treatment family as Strategy, but a **distinct line pattern** — different angles, different composition — so the two pillar pages don't look identical to each other.

**Where:** Same placement logic as Strategy — full-width background behind the page hero.

**Status:** Not yet produced. Same recommendation as Strategy: build natively in SVG/CSS using existing gradient tokens, with a deliberately different line arrangement.

---

## Summary Table

| Page | Asset type | Status | Notes |
|---|---|---|---|
| Homepage | Video (kintsugi) | Not started | Full-bleed hero only |
| About | Photo (founders) | **Finished** | Single combined asset, above credentials |
| Work | Photo (kintsugi) | Not started | Page-hero only, not behind carousel |
| Intelligence | Image (ember/spark) | Not started | Small accent near Kindling badge |
| Strategy | Graphic (gold linework A) | Not started | Can be built natively in SVG/CSS |
| Studio | Graphic (gold linework B) | Not started | Can be built natively in SVG/CSS, distinct from Strategy's pattern |

---

## Technical Notes for Whoever Produces Remaining Assets

- Every image/video must work against a pure black (`#000000`) page background without showing a visible bounding rectangle — either through edge treatment, gradient fade, or (as done with the founder portrait) tonal grading that pushes the image's own background toward true black.
- Avoid any colour outside the established palette (black, the two greys, the gold family, and `--spark` orange where specifically appropriate) appearing prominently in any sourced or generated image — colour photography with visible skin tones, blue clothing, etc. was tested for the founder portrait and converted to black-and-white specifically to avoid introducing stray colour against the site's otherwise tightly controlled palette.
- The gold linework assets (Strategy, Studio) do not require external image generation — they are well suited to being built directly as SVG, reusing the existing `--gold-foil` gradient definition already in the codebase.
