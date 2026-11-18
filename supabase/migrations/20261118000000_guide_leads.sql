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

-- Newer Supabase projects don't grant API roles access to new tables automatically.
grant usage on schema public to service_role;
grant select, insert, update on table public.guide_leads to service_role;
grant usage, select on all sequences in schema public to service_role;
