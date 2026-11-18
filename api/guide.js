// Vercel serverless function: POST /api/guide
// 1. Checks the Cloudflare Turnstile token (proves a human filled in the form).
// 2. Saves the email to the Supabase table guide_leads.
// 3. Returns a short-lived signed link to the guide PDF in a private Supabase Storage bucket.
//
// Environment variables (set in Vercel → Project → Settings → Environment Variables):
//   SUPABASE_URL               e.g. https://abcd1234.supabase.co
//   SUPABASE_SERVICE_ROLE_KEY  server-only key; never put this in the HTML
//   TURNSTILE_SECRET_KEY       from Cloudflare Turnstile
//   GUIDE_BUCKET               optional, default "guides"
//   GUIDE_PATH                 optional, default "when-your-best-reps-push-back-on-ai.pdf"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LINK_SECONDS = 600; // the download link works for 10 minutes

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY,
    TURNSTILE_SECRET_KEY,
    GUIDE_BUCKET = 'guides',
    GUIDE_PATH = 'when-your-best-reps-push-back-on-ai.pdf',
  } = process.env;
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !TURNSTILE_SECRET_KEY) {
    console.error('guide: missing environment variables');
    return res.status(500).json({ error: 'Not configured' });
  }

  let body = req.body || {};
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { return res.status(400).json({ error: 'Bad request' }); }
  }

  // Honeypot: real people never see or fill this field.
  if (body.website) return res.status(400).json({ error: 'Bad request' });

  const email = String(body.email || '').trim().toLowerCase();
  const firstName = String(body.firstName || '').trim().slice(0, 80) || null;
  const marketingConsent = body.marketingConsent === true;
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return res.status(400).json({ error: 'Please enter a valid email' });
  }

  // 1. Human check
  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: new URLSearchParams({ secret: TURNSTILE_SECRET_KEY, response: String(body.token || ''), remoteip: ip }),
  }).then((r) => r.json()).catch(() => ({ success: false }));
  if (!verify.success) return res.status(400).json({ error: 'Human check failed' });

  const headers = {
    apikey: SUPABASE_SERVICE_ROLE_KEY,
    Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    'Content-Type': 'application/json',
  };

  // 2. Save the lead (one row per email and guide; a repeat download updates consent)
  const save = await fetch(`${SUPABASE_URL}/rest/v1/guide_leads?on_conflict=email,guide`, {
    method: 'POST',
    headers: { ...headers, Prefer: 'resolution=merge-duplicates,return=minimal' },
    body: JSON.stringify({
      email,
      first_name: firstName,
      marketing_consent: marketingConsent,
      source: 'website',
      guide: GUIDE_PATH,
      user_agent: String(req.headers['user-agent'] || '').slice(0, 300),
    }),
  });
  if (!save.ok) {
    console.error('guide: save failed', save.status, await save.text());
    return res.status(500).json({ error: 'Could not save' });
  }

  // 3. Short-lived download link
  const sign = await fetch(`${SUPABASE_URL}/storage/v1/object/sign/${GUIDE_BUCKET}/${GUIDE_PATH}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ expiresIn: LINK_SECONDS }),
  });
  const signed = await sign.json().catch(() => ({}));
  if (!sign.ok || !signed.signedURL) {
    console.error('guide: signing failed', sign.status, signed);
    return res.status(500).json({ error: 'Could not prepare the guide' });
  }
  const url = `${SUPABASE_URL}/storage/v1${signed.signedURL}&download=${encodeURIComponent(GUIDE_PATH)}`;
  return res.status(200).json({ url });
};
