# NEXLIC — Business Operating State

Last updated: 2026-09-24 (Europe/Madrid)

## Goal
Get the first paying customer for NEXLIC, then repeat. Optimize for revenue, not feature volume.

## Brand
Name: NEXLIC
Positioning: Inteligencia para contratación pública.
Core promise: No mostramos más licitaciones; priorizamos cuáles merece la pena perseguir.
Primary market: Spain.
Primary customer profile: SMEs and mid-market firms already selling to or bidding with public administrations.

## Current offer
Founding 20: €79/month.
Includes onboarding/configuration, company profile, opportunity matching, summaries, alerts.
Initial close path: show real opportunities first, then paid access.

## Product / URLs
Production: https://nexlic.netlify.app
Repository: christian-cangussu/radar-mvp
Stack: Next.js + React + TypeScript + Supabase + Netlify.
Supabase project: Radar.
Public tables created: leads, companies, opportunities, company_opportunities.
Landing form writes leads into Supabase.
Dashboard/demo route exists.
Social OpenGraph preview exists.

## Engineering rule
No feature work while production build is red.
One logical change per commit.
Read exact build error before patching.
After patch, verify green build before additional changes.
Do not stack speculative fixes.

## Recent build incident
A JSX bug was introduced in app/page.tsx by writing a literal \\n between <li> elements. Fixed in commit f5dd5672e36a241a289b295831080e76f64ab9c4.
A later Netlify build also reported /opengraph-image prerender issues:
- dynamic font failed to download
- a div with multiple children lacked explicit display style
These must be considered resolved only after a verified green production deploy.

## Acquisition
LinkedIn launch post scheduled through Metricool for 2026-09-24 11:00 Europe/Madrid with URL:
https://nexlic.netlify.app/?utm_source=linkedin&utm_medium=organic&utm_campaign=launch

No indiscriminate cold email. Spanish commercial-email rules must be respected.
Prefer:
- inbound requests
- LinkedIn/public content
- personalized demos
- lawful contact routes / existing relationship / permission
- partnerships

## Sales stack
Close: connected. Sales pipeline includes Preview Ready -> Demo Completed -> Proposal Sent -> Contract Sent -> Won/Lost.
Calendly: connected.
Event: NEXLIC — Análisis de oportunidades
Booking URL: https://calendly.com/christiancangussu99/30min
Event availability: Europe/Madrid, Monday-Friday 09:00-17:00.
Gmail: connected.
Clay: connected.
Crustdata: connected.
Metricool: connected.
PayPal: connected.

## Current prospects with personalized previews
1. agap2 Spain
   Demo: https://nexlic.netlify.app/demo/agap2
   Close stage: Preview Ready
   Founding 20 opportunity: €79/month

2. Recodme
   Demo: https://nexlic.netlify.app/demo/recodme
   Close stage: Preview Ready
   Founding 20 opportunity: €79/month

3. SOTEC CONSULTING
   Demo: https://nexlic.netlify.app/demo/sotec
   Close stage: Preview Ready
   Founding 20 opportunity: €79/month

## Payment
PayPal connector is active.
A PayPal payment-link creation form has been prepared for:
NEXLIC Founding 20 - Primer mes
Amount: €79 EUR
Product ID: NEXLIC-F20-M1
Return URL: https://nexlic.netlify.app
It requires the account-side confirmation/form submission before a real link exists.
Do not claim payment checkout is live until PayPal returns an actual payment_link_url.

## Automations
NEXLIC Lead Watch:
- checks Supabase for new inbound leads hourly
- researches submitted company
- creates/updates Close record
- creates NEXLIC opportunity
- replies only to leads that explicitly submitted/requested information
- includes Calendly optionally

A separate short sprint is used for autonomous business execution when requested.

## Operating priorities
1. Keep production green.
2. Verify lead form writes successfully.
3. Verify LinkedIn launch post and real site preview.
4. Find companies with repeated public-contract activity.
5. Build personalized pages using real, open opportunities.
6. Move qualified companies into Close.
7. Convert to meeting or explicit interest.
8. Take payment only with a verified PayPal link/invoice.
9. Record factual wins/losses and iterate pricing/offer.

## Safety / truthfulness
Never fabricate clients, traction, tender fit, savings, contract eligibility, or results.
Scores shown to prospects are preliminary until company profile and tender documents are reviewed.
Use official/public procurement evidence for claims about live opportunities.
