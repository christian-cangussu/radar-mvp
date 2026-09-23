create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  website text not null,
  email text,
  contact_name text,
  company_name text,
  source text not null default 'website',
  status text not null default 'new' check (status in ('new','qualified','contacted','demo','won','lost')),
  notes text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

alter table public.leads enable row level security;

drop policy if exists "public_can_submit_lead" on public.leads;
create policy "public_can_submit_lead"
on public.leads
for insert
to anon, authenticated
with check (
  length(trim(website)) >= 3
  and length(website) <= 500
  and (email is null or length(email) <= 320)
);

revoke all on public.leads from anon, authenticated;
grant insert (website, email, contact_name, company_name, source, metadata)
on public.leads to anon, authenticated;

create table if not exists public.companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  domain text unique,
  industry text,
  location text,
  employee_count integer,
  procurement_signal text,
  profile jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.companies enable row level security;

create table if not exists public.opportunities (
  id uuid primary key default gen_random_uuid(),
  external_id text unique,
  title text not null,
  contracting_authority text,
  cpv text,
  estimated_value numeric,
  currency text not null default 'EUR',
  location text,
  deadline timestamptz,
  source_url text,
  source_name text,
  summary text,
  raw_data jsonb not null default '{}'::jsonb,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists opportunities_deadline_idx on public.opportunities (deadline);
create index if not exists opportunities_cpv_idx on public.opportunities (cpv);
create index if not exists opportunities_published_idx on public.opportunities (published_at desc);

alter table public.opportunities enable row level security;

create table if not exists public.company_opportunities (
  company_id uuid not null references public.companies(id) on delete cascade,
  opportunity_id uuid not null references public.opportunities(id) on delete cascade,
  score integer not null check (score between 0 and 100),
  reasons jsonb not null default '[]'::jsonb,
  status text not null default 'new' check (status in ('new','review','saved','dismissed','applied')),
  created_at timestamptz not null default now(),
  primary key (company_id, opportunity_id)
);

create index if not exists company_opportunities_score_idx on public.company_opportunities (score desc);

alter table public.company_opportunities enable row level security;
