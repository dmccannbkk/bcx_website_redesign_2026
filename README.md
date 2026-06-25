# BCX Design — Website Mockups

Reference HTML mockups for the BCX Design website rebrand. These are working visual/structural mockups, not production code — see `docs/01-BCX-Website-Build-Brief.md` for the full build brief before using these to build the live site in Versal, Kimi, or any other tool.

## Folder structure

```
bcx-homepage-v1.html
bcx-intelligence.html
bcx-strategy.html
bcx-studio.html
bcx-work.html
bcx-about.html
images/
  homepage-hero-bowl.jpg
  work-hero-bowl.jpg
  about-founder-portrait.jpg
docs/
  01-BCX-Website-Build-Brief.md
  02-Image-Video-Specification.md
```

**Important:** the `images` folder must stay in the same location relative to the HTML files (i.e. upload it alongside them, not nested differently) — three pages (Homepage, Work, About) reference these files by relative path. If the `images` folder is missing or moved, those three pages will be missing their photos.

## Pages

- `bcx-homepage-v1.html` — Homepage
- `bcx-intelligence.html` — BCX Intelligence
- `bcx-strategy.html` — BCX Strategy
- `bcx-studio.html` — BCX Studio
- `bcx-work.html` — Work (case studies)
- `bcx-about.html` — About

## Before building the live site

Read `docs/01-BCX-Website-Build-Brief.md` first. It documents:
- All approved copy and design tokens (colours, fonts, type scale)
- Which pages intentionally have no image (this was tested and decided deliberately — don't add images back without reading why)
- The reasoning behind the three images that do exist, including a couple of real bugs caught and fixed during processing (white padding on source photos, a background-merge issue, a metric label mismatch) — worth reading before swapping any of them out
- One unresolved content gap (an excluded case study, Varthana, with no usable public metric yet) that needs real data before launch
- One content decision pending confirmation: whether the Bethel AG Church case study's placeholder metric ("3 → 1") should be treated as final, or still needs a real performance number before launch

`docs/02-Image-Video-Specification.md` has the original visual placement plan, though the build brief's Section 6 and 9 reflect the final, current state more accurately.

## Status

Content and design are approved. Images are finished, real external files (not base64). Not yet connected to a live booking/scheduling system — all CTA buttons currently point to placeholder links.
