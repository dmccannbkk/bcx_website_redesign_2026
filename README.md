# BCX Design — Website Mockups

Reference HTML mockups for the BCX Design website rebrand. These are working visual/structural mockups, not production code — see `docs/01-BCX-Website-Build-Brief.md` for the full build brief before using these to build the live site in Versal, Kimi, or any other tool.

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
- Known issues to fix before production, including that images are currently embedded as base64 inside the HTML and should be converted to proper external files
- Two unresolved content gaps (a placeholder metric on the Work page, and an excluded case study) that need real data before launch

`docs/02-Image-Video-Specification.md` has the original visual placement plan, though the build brief's Section 6 and 9 reflect the final, current state more accurately.

## Status

Content and design are approved. Not yet connected to a live booking/scheduling system — all CTA buttons currently point to placeholder links.
