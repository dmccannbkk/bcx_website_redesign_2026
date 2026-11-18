# Programmes pages and the free guide download

Two new pages, converted from the "BCX Programmes pages" design canvas:

- `bcx-programmes.html`: the programmes index (AI for Sales Managers, AI for Sales Teams)
- `bcx-ai-for-sales-managers.html`: the workshop page, with a new **free guide** section

## How the guide download works

1. The visitor enters a work email (first name optional), ticks the marketing box if they want updates, and passes a **Cloudflare Turnstile** check (usually invisible; a click at most).
2. The form posts to `/api/guide` (a Vercel serverless function, `api/guide.js`), which:
   - rejects the request if the Turnstile check fails, the email is invalid, or a hidden bot-trap field is filled in;
   - saves the email to the Supabase table `guide_leads` (one row per email and guide; a repeat download updates the consent flag);
   - returns a **signed link to the PDF that expires after 10 minutes**, from a private Supabase Storage bucket.
3. The browser starts the download. The PDF itself is never publicly reachable, so the link can't be shared or scraped.

## One-time setup

1. **Supabase**
   - Run `supabase/migrations/20261118000000_guide_leads.sql` (SQL Editor → paste → Run). It creates the `guide_leads` table (row level security on, no public access) and a private bucket called `guides`.
   - Upload the guide PDF to the `guides` bucket as `when-your-best-reps-push-back-on-ai.pdf`.
2. **Cloudflare Turnstile** (free): Cloudflare dashboard → Turnstile → Add site → domain `bcx-design.com` (add `localhost` and the Vercel preview domain for testing). Copy the **site key** and **secret key**.
   - The site key is already in `bcx-ai-for-sales-managers.html` (it is public).
3. **Vercel** → Project → Settings → Environment Variables:
   - `SUPABASE_URL` (Supabase → Project Settings → API)
   - `SUPABASE_SECRET_KEY` (Project Settings → API Keys → Secret keys, `sb_secret_...`; server-only, never in the HTML)
   - `TURNSTILE_SECRET_KEY`
   - optional: `GUIDE_BUCKET` (default `guides`), `GUIDE_PATH` (default `when-your-best-reps-push-back-on-ai.pdf`)
   - Redeploy after adding them.
4. **Images:** add `images/programmes/ai-sales-managers-hero.jpg` and `images/programmes/facilitators.jpg` (from the design canvas).

## Seeing and using the leads

Supabase → Table Editor → `guide_leads`. Export as CSV any time. Only email people about sessions and programmes if `marketing_consent` is true.

DailyPlay game leads can go in the same table: download them from DailyPlay (Reports → CTA Leads), set `source` to `dailyplay` and `guide` to the PDF name, and import the CSV in the Table Editor. That keeps one list.

## Still placeholders on the workshop page

- Three of the four film cards (the manager, the pioneer, the middle). Daniel's film plays from YouTube (https://youtu.be/Jhdy6-XOu1U). To add another film, copy Daniel's `yt-facade` button and change `data-yt` to the new video's ID; the YouTube player only loads (and sets cookies) when someone presses play.
- The "Apply for a seat" buttons point to the details section on the page; swap in the workshop's Maven link when ready.
