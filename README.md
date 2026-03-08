# CentrBiz Core Frontend

Production-ready SaaS landing page for **CentrBiz** built with:

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Lucide React (icons)

## Run locally

```bash
# Node.js 18.18+ required
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Request Demo Email (Minimal Setup)

The `/request-demo` form posts to `/api/request-demo` and sends an email using Resend.

1. Copy `.env.example` to `.env.local`
2. Set:
   - `RESEND_API_KEY`
   - `DEMO_TO_EMAIL`
   - optional: `DEMO_FROM_EMAIL`

For quickest testing, keep:
- `DEMO_FROM_EMAIL="CentrBiz Demo <onboarding@resend.dev>"`

In production, use a verified sender domain in Resend.

## Structure

- `app/page.tsx` - Main landing page composition
- `app/login/page.tsx` - Login page
- `app/signup/page.tsx` - Sign-up page
- `app/request-demo/page.tsx` - Demo request page
- `app/contact/page.tsx` - Contact page
- `app/[slug]/page.tsx` - Reusable content pages (pricing, docs, support, legal, etc.)
- `components/landing/*` - Reusable landing sections
- `components/site/*` - Shared shell and hero for non-home pages
- `app/globals.css` - Brand tokens, shared styles, background motifs

## Notes

The page includes all required sections in this order:

1. Header / Navbar
2. Hero
3. Trust / Industry
4. Platform Ecosystem
5. Core Features
6. Modules
7. Dashboard Preview
8. Platform Infrastructure
9. How It Works
10. Benefits / Why CentrBiz
11. Final CTA
12. Footer
