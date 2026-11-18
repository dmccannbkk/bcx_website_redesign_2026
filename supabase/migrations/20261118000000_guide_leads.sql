-- Leads from the free guide download (website) and imported game leads (DailyPlay).
create table if not exists public.guide_leads (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  email text not null check (position('@' in email) > 1),
  first_name text,
  marketing_consent boolean not null default false,
  source text not null default 'website',   -- 'website' or 'dailyplay'
  guide text not null,
  user_agent text,
  unique (email, guide)
);

-- Row level security on, with no policies: only the server (service role key) can read or write.
alter table public.guide_leads enable row level security;

-- Private bucket for the guide PDF. Files are only reachable through short-lived signed links.
insert into storage.buckets (id, name, public)
values ('guides', 'guides', false)
on conflict (id) do nothing;
