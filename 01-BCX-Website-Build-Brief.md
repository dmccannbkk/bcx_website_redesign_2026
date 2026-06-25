# BCX Design — Website Build Brief (Revised)

**Purpose of this document:** Everything needed to build the live site, consolidated in one place. Reference HTML mockups (six files) are the visual/structural source of truth for layout, spacing, and interaction. This document is the source of truth for content, brand logic, and design tokens.

**This revision supersedes the original build brief.** Section 6 (Page-by-Page Content Summary) and Section 9 (Visual Asset Status) have changed materially — several planned visual elements were built, tested in place, and then deliberately removed when they didn't earn their place. This is documented below so the reasoning isn't lost.

---

## 1. Brand Positioning Summary

**Core line:** Your plan said one thing. Your results say another. We find the human reason — and fix it.

**Method line:** We find the problem behind the problem.

**Philosophy anchor (kintsugi):** The break tells you where to look. The repair, done properly, makes the thing more valuable and more distinctive than it was before.

**What BCX is not:** A training company, a marketing agency, an IT consultancy, an academic practice, or a strategy firm that hands off execution. Never use the retired phrase "Hacking Human Behaviour" or any variant.

**Tone rules:**
- No "versus" or competitive-bashing language toward academia, other consultancies, or synthetic-research competitors.
- No gendered or stereotyped framing of either founder.
- Plain language over jargon. No AI-speak.
- British English. No em-dashes in body copy where avoidable.

---

## 2. Site Architecture & Navigation

Five core pages, consistent header/footer across all:

1. **Homepage** — `bcx-homepage-v1.html`
2. **BCX Intelligence** — `bcx-intelligence.html`
3. **BCX Strategy** — `bcx-strategy.html`
4. **BCX Studio** — `bcx-studio.html`
5. **Work** — `bcx-work.html`
6. **About** — `bcx-about.html`

**Navigation order (header, every page):** Intelligence · Strategy · Studio · Work · About

**Important architectural rule:** The three pillars (Intelligence → Strategy → Studio) follow a natural sequence — diagnose, design, build — but each page must stand alone for a visitor who lands there directly without having seen the others. No page assumes prior context from another pillar page.

**Kindling** is BCX Design's proprietary diagnostic product, referenced prominently on the Intelligence page with a "Powered by Kindling" text badge. It does not yet have its own dedicated page in this build.

---

## 3. CTA Logic

**One CTA everywhere, with one deliberate exception:**

- **"Book a Call"** — header (every page), and closing CTA on Homepage, Work, Strategy, Studio, and About.
- **"Start with a Diagnostic"** — Intelligence page closing CTA only.

Both currently link to placeholder `#` anchors — connect to actual booking system at build time.

**Reassurance microcopy beneath every closing CTA:**
> A first conversation costs nothing and commits you to nothing. We will tell you honestly whether we can help.

---

## 4. Design Tokens

### Colours

| Token | Value | Usage |
|---|---|---|
| `--black` | `#000000` | Page background |
| `--surface` | `#0A0908` | Slightly raised sections |
| `--text` | `#F2F2F2` | Primary text |
| `--muted` | `#ADADAD` | Secondary text, labels, captions |
| `--line` | `rgba(140,140,140,0.18)` | Hairline borders |
| `--gold-solid` | `#d4ad57` | Solid gold accent |
| `--gold-foil` | Linear gradient, 115deg — `#6e4f17 → #b9892f → #e8c873 → #fff6d8 → #d9b24a → #a3781f → #7a5a1e → #d6b35f` | Hero headlines, metric numbers, CTA buttons, seam dividers |
| `--spark` | `#FF4C29` | Reserved exclusively for Kindling/Intelligence highlights |

Contrast verified: `--text` on `--black` = 18.76:1. `--muted` on `--black` = 9.36:1. Both pass WCAG AAA.

### Typography

Two typefaces only, fixed roles:

- **Serif — Cormorant.** Large display headlines, gold-foil hero statements, metric numbers, lead/accent elements.
- **Sans — Inter.** Body copy, navigation, labels, buttons, captions.

### Type Scale

| Tier | Size | Typical use |
|---|---|---|
| Smallest labels | 12px | Eyebrows, nav links, breadcrumbs, pillar tags |
| Caption/footer | 13px | Footer copy, closing reassurance, case context lines |
| Body copy | 15px | Descriptions, FAQ answers, symptom items |
| Sub-body | 16px | Closing sub-headlines |
| Lead/accent | 18px | Hero output statements, serif accent lines |
| Pillar headings | 26px | Section-level headings |

**Italic rule:** Minimum font-weight 400 on any italic text. 300-weight italic in Cormorant was tested and rejected — strokes too thin to read comfortably below display size.

### Structural style

- Hard 1px borders only, no soft shadows.
- "Seam" motif: thin gold gradient SVG divider with shimmer animation, used between major sections sitewide.
- Generous whitespace over soft elevation.

---

## 5. Logo

Full lockup ("B-mark" + "bcx DESIGN" wordmark): viewBox `0 0 151 61`, 13 paths, `currentColor` fill. Used in header and footer on every page.

B-mark only (first 4 paths of the same source): viewBox `0 0 61 61`, used as the watermark/seal on the homepage hero.

---

## 6. Page-by-Page Content & Visual Summary

*(Full copy lives in the HTML files. This section now also documents final visual treatment per page, since several pages changed materially during the design pass.)*

### Homepage
**Copy:** Hero statement, client trust strip, three-case pattern-recognition section, three-pillar grid, closing CTA.

**Visual:** Static kintsugi bowl photograph (black-and-white, gold-repaired ceramic) as full-bleed hero background, dark gradient overlay for text legibility. **Originally specified as a video loop** (a 10-second break-and-repair sequence) — this was built, tested, and replaced with a static image at the client's request, since the static photo gave the same visual idea with less complexity and no looping-seam issue. The CSS class name `hero-video-bg` is a legacy name from that earlier version; it now contains only a static `<img>`, not a `<video>` element. Rename this class if doing a clean rebuild.

### Intelligence
**Copy:** Hero, symptom self-identification grid (Revenue/Efficiency/Performance), three-phase Kindling methodology, methodology-as-proof section, three objection-handling FAQs, CTA: Start with a Diagnostic.

**Visual: None — by deliberate decision.** An ember/spark image was sourced and tested as a small 32×32px thumbnail inside the "Powered by Kindling" badge. At that size none of the image's detail was legible, so it added visual noise without conveying anything. It was removed rather than forced. **This page intentionally carries no image.** Do not assume every page needs one — Intelligence is the proof that a placement only belongs if it actually earns its spot.

### Strategy
**Copy:** Hero ("A good strategy still fails if it ignores how people actually decide"), symptom grid (Go-To-Market/Transformation), five production outputs, two-case proof section, CTA: Book a Call.

**Visual: None — by deliberate decision.** An abstract gold-linework SVG pattern (a network of thin gold lines and node points, evoking decision pathways) was built natively in code as a hero background. It was removed after review because it competed visually with the headline text rather than supporting it. **This page now has a plain hero with no background graphic.**

### Studio
**Copy:** Hero ("Most products, campaigns, and programmes are designed around their intended function..."), symptom grid (Build/Repair), four production outputs, two-case proof section, CTA: Book a Call.

**Visual: None — by deliberate decision.** Same treatment and same outcome as Strategy — a second, visually distinct gold-linework pattern (right-angle structural lines rather than diagonal network lines) was built and then removed for the same reason: it interfered with text readability. **Plain hero, no background graphic.**

### Work
**Copy:** Eleven anonymised case studies in a carousel (2 cards/page desktop, 1 card/page mobile, Prev/Next navigation positioned above the cards, swipe-enabled). Semantic heading structure corrected — case metrics are `<h2>`, the three section labels per case ("The problem," "What we found," "What changed") are `<h3>`.

**Visual: Kintsugi bowl photograph, page-hero background only** (behind breadcrumb, h1, sub-headline — does not extend behind the carousel). This image went through three corrective passes worth knowing about if the source photo is ever swapped:
1. The original source file had pure white padding on all four sides that wasn't visible until measured directly — it was cropped out before any grading was applied.
2. The wall behind the bowl in the source photo is genuinely light grey, brighter than the bowl itself — a vertical darkening gradient was baked into the image (heavy at the top, fading out by the time it reaches the bowl) so the wall merges toward black rather than reading as a visible grey band.
3. The bowl was originally centred, which put it directly behind the left-aligned headline text. The canvas was extended with solid black space on the left and the bowl content shifted right, with a horizontal feather at the seam so the transition from black to photo isn't a hard cut. **This was necessary because `object-fit: cover` in this section's actual proportions crops vertically, not horizontally — adjusting `object-position` alone would have had no visible effect.** Any rebuild using a different image in this slot should check this same proportion issue before assuming a simple CSS position change will work.

**Known placeholder:** Bethel AG Church case (#11) shows "3 → 1" with a visible red placeholder note — needs a real performance metric from the client before launch.

**Excluded:** Varthana case is fully excluded — no usable public metric exists yet.

### About
**Copy:** Unified "we" narrative — no "David says / Rupali says" structure anywhere. Sequence: kintsugi philosophy → unnamed origin stories → how the two founders' instincts complement each other → the values line → founder portrait → named credentials.

**Visual: Founder portrait, finished and built in.** A single combined image: both founders, black-and-white, each in an oval crop with a thin gold ring (3px), positioned side by side. Sits between the values line and the credentials section, as planned.

**Two corrections made to this page after initial build, both now fixed:**
1. The founder portrait was specified and approved but never actually inserted into the HTML — it existed only in a planning diagram. This is now corrected; the real image is embedded in the file.
2. The portrait shows Rupali on the left, David on the right. The credentials section below it originally listed David first — now corrected to match the portrait's order (Rupali, then David). A stray "Behavioural Science Expert, FAO" tag on David's credentials, which had been explicitly removed earlier in the project, had crept back in — removed again.

**Two paragraphs are centre-aligned** (both the text and the block itself, via `margin: 0 auto` plus `text-align: center` — a `max-width` alone does not centre a block without auto margins):
- "Between these two instincts — diagnostic rigour and commercial clarity — BCX Design applies the same standard of evidence to understanding a problem that it applies to solving one."
- "Behavioural science is a powerful tool. We apply it in the interest of the people it is ultimately designed to serve — the customer, the employee, the user. Not against them."

**Credentials:**
- Rupali Babu · Co-Founder · TEDx Speaker — Social Impact · Responsible AI · Behavioural Design · Performance Measurement
- David McCann · Co-Founder — Applied Behavioural Science · Customer Experience · Data Science · Product Design · AI Strategy

---

## 7. Pillar Tagging System (Work page)

Each case study carries one or more pillar tags reflecting what was actually delivered:

- **Intelligence** (colour: `--spark` `#FF4C29`) — diagnostic/audit work
- **Strategy** (colour: `--gold-solid` `#d4ad57`) — intervention design
- **Studio** (colour: `--muted` `#ADADAD`) — build/execution

Audited and corrected across all eleven cases.

---

## 8. Visual Philosophy — Revised

The original brief stated "one signature visual moment per page." **That rule has been superseded by a more honest one: a visual moment only belongs on a page if it actually adds something a sighted visitor would miss without it.**

Three of six pages ended up with no image or graphic at all — Intelligence, Strategy, and Studio. In each case something was built, reviewed in context, and removed because it competed with the text or was too small to read. This is the correct outcome, not a gap to fill later. If a future contributor is tempted to add a visual to one of these three pages purely for the sake of "every page should have one," they should be aware this was tried and deliberately reversed.

Where visuals remain — Homepage, Work, About — each is load-bearing: it's either the first thing a visitor sees (Homepage), a quiet contextual backdrop that doesn't compete with dense content (Work), or the one moment the page reveals who the founders actually are (About).

---

## 9. Visual Asset Status (Final)

| Page | Asset | Status |
|---|---|---|
| Homepage | Static kintsugi bowl photo, full-bleed hero | **Finished and built in** |
| Work | Kintsugi bowl photo, page-hero background, graded and right-shifted | **Finished and built in** |
| About | Founder portrait, combined oval B&W image with gold rings | **Finished and built in** |
| Intelligence | — | **Decided against.** No image. |
| Strategy | — | **Decided against.** No image, no graphic. |
| Studio | — | **Decided against.** No image, no graphic. |

All image/photo assets currently in the HTML files are embedded as base64 data URIs rather than linked external files. **This was a workaround for this preview environment, which could not reliably resolve relative file paths to sibling assets.** Before final production build, convert these back to proper external image files with real `src` paths — base64 embedding bloats page weight and prevents caching/streaming. This applies to the homepage background image, the Work page background image, and the About page founder portrait.

---

## 10. Known Gaps — Resolve Before Launch

1. **Bethel AG Church case** needs a real performance metric (currently placeholder "3 → 1").
2. **Varthana case** needs a usable public metric before it can be added back to Work.
3. **Kindling pricing** is deliberately not published anywhere on the site — confirmed decision, not an oversight.
4. **Base64-embedded images** (see Section 9) should be converted to proper external files before production deployment.
5. **Accessibility heading audit** — completed on the Work page (case metrics and section labels now use proper `<h2>`/`<h3>` tags instead of styled `<span>`). Not yet done on Intelligence's FAQ section (`objection-q`) or About's founder name elements (`cred-name`) — consider the same audit there if SEO/accessibility is a priority before launch.
6. **Legacy CSS class name** — `hero-video-bg` on the homepage no longer contains a video, only a static image. Harmless as-is, but worth renaming during a clean rebuild to avoid confusing future editors.

---

## 11. Booking/Contact Integration

All CTA buttons currently point to placeholder anchors. Before launch, connect "Book a Call" (header + closing CTAs) and "Start with a Diagnostic" (Intelligence only) to the actual scheduling system BCX uses.
