# Implementation Plan

## Kaushik Solar Power OPC Pvt Ltd — Company Website

**Version:** 1.0
**Date:** 2026-03-16
**References:** [BRD v1.1](./BRD.md) | [Tech Spec v1.0](./TECH_SPEC.md)

---

## Approach

The build is organized into **6 phases**, ordered by dependency — each phase produces a working, deployable state. Components shared across pages are built first so that page-specific work snaps in cleanly.

---

## Phase 1 — Project Foundation

**Goal:** Scaffolded project, configured tooling, global layout shell, deployable (even if mostly empty).

| # | Task | Details |
|---|------|---------|
| 1.1 | Initialize Next.js 15 project | `npx create-next-app@latest` with TypeScript, Tailwind CSS, App Router, ESLint |
| 1.2 | Configure Tailwind design tokens | Colors, fonts, spacing as defined in Tech Spec §3 |
| 1.3 | Set up `next/font` | Load Plus Jakarta Sans (headings) and Inter (body) |
| 1.4 | Create global styles | `globals.css` with theme variables, base resets, Tailwind imports |
| 1.5 | Create TypeScript types | `types/index.ts` — all interfaces from Tech Spec §5.1 |
| 1.6 | Build `SectionWrapper` component | Consistent max-width, padding wrapper used across all pages |
| 1.7 | Build `SectionHeading` component | Reusable section title + subtitle |
| 1.8 | Build `CTAButton` component | Primary, secondary, outline variants. Min height h-12 (48px) for mobile touch targets |
| 1.9 | Build `Header` component | Logo (text), nav links, mobile hamburger menu (full-screen slide-out with h-12 tap targets), call/WhatsApp buttons. Sticky on mobile (`sticky top-0 z-50`) |
| 1.10 | Build `Footer` component | 1-column on mobile → 2-col on tablet → 4-col on desktop. Contact info, credentials, copyright |
| 1.11 | Build `WhatsAppFloatingButton` | Fixed `bottom-4 right-4` on mobile, `bottom-6 right-6` on desktop. 48px touch target. Pulse animation |
| 1.12 | Build `MobileCTABar` component | Sticky bottom bar (mobile only, hidden on `lg:`) with Call + WhatsApp buttons. Full-width, h-14 |
| 1.13 | Set up root `layout.tsx` | Header + Footer + floating WhatsApp + mobile CTA bar wrapping all pages |
| 1.14 | Create `.env.example` | Template with all env vars (no values) |
| 1.15 | Set up `.gitignore` | Ensure `.env.local`, `node_modules`, `.next` are excluded |
| 1.16 | **Commit** | `"feat: project foundation — layout shell, design tokens, shared components"` |

**Deliverable:** A site with header, footer, floating WhatsApp button, and sticky mobile CTA bar that renders on every route. Must look correct on 375px width before anything else.

**Mobile verification before commit:** Open in browser DevTools at 375px width and verify:
- Header shows logo + hamburger (no horizontal overflow)
- Mobile menu opens full-screen with tappable links
- Footer stacks in single column
- WhatsApp floating button doesn't overlap content
- Sticky mobile CTA bar is visible at bottom

---

## Phase 2 — Home Page

**Goal:** Complete, polished home page — the most important page for first impressions and SEO.

**Dependency:** Phase 1 (layout shell, shared components)

| # | Task | Details |
|---|------|---------|
| 2.1 | Build `HeroSection` | Background image, taglines, 2 CTA buttons, trust badges |
| 2.2 | Build `SubsidyStrip` | Full-width amber banner with subsidy headline |
| 2.3 | Build `USPCard` + Why Choose Us section | 6 cards with Lucide icons |
| 2.4 | Build `ServiceCard` + Services Overview | 3 cards linking to service pages |
| 2.5 | Build `StepCard` + How It Works section | 6-step visual process |
| 2.6 | Build `SavingsSnapshot` | Visual savings card for 3KW system |
| 2.7 | Build `TestimonialCard` + carousel | Placeholder testimonials, horizontal scroll or carousel |
| 2.8 | Build `ProjectCard` + portfolio preview | 3-4 placeholder project cards |
| 2.9 | Build `BlogCard` + blog preview section | 3 placeholder blog cards (will link to real posts later) |
| 2.10 | Build `ContactForm` (compact variant) | Name, phone, property type, location — used on Home page |
| 2.11 | Build Contact section | Form + WhatsApp + Call + address |
| 2.12 | Assemble Home page (`app/page.tsx`) | Compose all sections, add SEO metadata, JSON-LD |
| 2.13 | Source placeholder images | Hero, project photos from Unsplash/Pexels |
| 2.14 | **Commit** | `"feat: complete home page with all sections"` |

**Deliverable:** Fully functional home page with all 11 sections. Contact form UI works but doesn't submit yet (API comes in Phase 4).

---

## Phase 3 — Content Pages

**Goal:** All static content pages built and linked from navigation.

**Dependency:** Phase 2 (shared cards, section components)

| # | Task | Details |
|---|------|---------|
| 3.1 | Build About Us page | Company story, founder placeholder, credentials, service area, values |
| 3.2 | Build Residential Solar page | System types table, equipment, EPC scope, warranty info, subsidy callout |
| 3.3 | Build Commercial Solar page | Benefits, system sizes, financing, service areas |
| 3.4 | Build Maintenance & AMC page | Free maintenance details, what's covered, post-5-year placeholder |
| 3.5 | Build Subsidy Guide — PM Surya Ghar | Eligibility, amounts table, application process, documents, FAQs |
| 3.6 | Build Subsidy Guide — Delhi State Subsidy | State subsidy, GBI details with examples, other benefits |
| 3.7 | Build Subsidy Guide — How to Apply | Step-by-step guide, "we handle it for you" emphasis |
| 3.8 | Build Subsidy Guide index page | Links to 3 sub-pages, overview of all subsidies |
| 3.9 | Build Our Work page | Portfolio grid (placeholder) + testimonials section (placeholder) |
| 3.10 | Build Contact page | Full contact form + contact info + map placeholder |
| 3.11 | Build Privacy Policy page | Standard privacy policy adapted to the business |
| 3.12 | Build Terms & Conditions page | Standard terms adapted to the business |
| 3.13 | Add SEO metadata to all pages | Unique title, description, OG tags, JSON-LD per page |
| 3.14 | **Commit** | `"feat: all content pages — services, subsidy guide, contact, legal"` |

**Deliverable:** All pages navigable, content-complete, and SEO-tagged. Navigation fully functional.

---

## Phase 4 — Interactive Features

**Goal:** Solar calculator, contact form submission (email + Google Sheets), and analytics.

**Dependency:** Phase 3 (contact page, all pages exist for analytics)

| # | Task | Details |
|---|------|---------|
| 4.1 | Implement calculator logic | `lib/calculator.ts` — all functions from Tech Spec §6 |
| 4.2 | Build `CalculatorForm` component | Input fields with validation (units, property type, area) |
| 4.3 | Build `CalculatorResults` component | Results display with animation, conditional "contact us" for commercial > 15KW |
| 4.4 | Build Solar Calculator page | Compose form + results, add disclaimer, contextual WhatsApp CTA |
| 4.5 | Implement contact form API route | `app/api/contact/route.ts` — validation, email via Resend, Google Sheets webhook |
| 4.6 | Build email HTML template | Lead notification email with contact details + quick-action links |
| 4.7 | Add honeypot spam protection | Hidden `website` field in contact form |
| 4.8 | Add rate limiting | In-memory IP-based rate limiter on API route |
| 4.9 | Wire contact form to API | Connect both compact (Home) and full (Contact page) forms to the API route |
| 4.10 | Add form success/error states | Toast or inline message after submission |
| 4.11 | Set up Google Analytics 4 | Script in layout, GA_ID from env |
| 4.12 | Add event tracking | Custom events: form submit, WhatsApp click, call click, calculator used |
| 4.13 | **Commit** | `"feat: solar calculator, contact form API, analytics"` |

**Deliverable:** Calculator is interactive and accurate. Contact form sends email + logs to Google Sheet. Analytics tracking all key events.

---

## Phase 5 — Blog System

**Goal:** MDX blog fully functional with initial posts.

**Dependency:** Phase 2 (BlogCard component), Phase 1 (layout)

| # | Task | Details |
|---|------|---------|
| 5.1 | Set up MDX pipeline | Configure `next-mdx-remote` or `@next/mdx`, install `gray-matter` |
| 5.2 | Implement `lib/blog.ts` | `getAllPosts()`, `getPostBySlug()` utilities |
| 5.3 | Create custom MDX components | Styled headings, tables, blockquotes, callouts, CTABanner, SubsidyTable |
| 5.4 | Build blog listing page | Grid of BlogCards, pagination infrastructure |
| 5.5 | Build blog post page (`[slug]`) | MDX rendering, featured image, date, read time, related posts, end CTA |
| 5.6 | Implement `generateStaticParams` | Pre-render all blog posts at build time |
| 5.7 | Write 2-3 initial blog posts | Priority: PM Surya Ghar guide, On-Grid vs Off-Grid, Delhi solar savings |
| 5.8 | Wire blog preview on Home page | Show latest 3 real posts instead of placeholders |
| 5.9 | Add blog SEO | `BlogPosting` JSON-LD, unique meta per post |
| 5.10 | **Commit** | `"feat: MDX blog system with initial posts"` |

**Deliverable:** Blog listing and individual post pages work. 2-3 real posts published. Home page shows latest posts.

---

## Phase 6 — Polish & Launch Prep

**Goal:** Final quality pass, SEO infrastructure, performance optimization, deployment.

**Dependency:** All previous phases

| # | Task | Details |
|---|------|---------|
| 6.1 | Generate sitemap | `app/sitemap.ts` — all pages + blog posts |
| 6.2 | Generate robots.txt | `app/robots.ts` — allow all, disallow `/api/` |
| 6.3 | Add favicon and app icons | Favicon, apple-touch-icon, web manifest |
| 6.4 | Mobile QA pass (priority) | Test **every page** at 375px width. Verify: no horizontal scroll, all touch targets ≥ 44px, forms usable with thumb, tables scrollable, sticky bars visible, images not overflowing, text readable without zoom |
| 6.5 | Tablet + Desktop QA pass | Test at 768px and 1280px. Verify grid layouts, side-by-side sections, header nav visibility |
| 6.6 | Accessibility audit | Run Lighthouse accessibility, fix any issues, verify contrast, alt text, ARIA, keyboard nav |
| 6.7 | Performance audit | Run Lighthouse on **mobile simulation** (throttled 4G). Optimize any page below 90 score |
| 6.8 | Cross-browser testing | Chrome, Firefox, Safari (iOS), Edge — especially test Safari on iPhone (most common mobile browser in urban India after Chrome) |
| 6.9 | Add 404 page | Custom `not-found.tsx` with navigation back to home |
| 6.10 | Add loading states | Skeleton loaders or spinner for calculator results, form submission |
| 6.11 | Final content review | Verify all text, links, phone numbers, email addresses |
| 6.12 | Set up deployment | Vercel connection or server deployment with Nginx + PM2 |
| 6.13 | Configure domain | DNS setup once domain is purchased |
| 6.14 | Set up Google Search Console | Verify domain, submit sitemap |
| 6.15 | **Final commit** | `"chore: launch prep — sitemap, robots, favicon, QA fixes"` |

**Deliverable:** Production-ready website. All Lighthouse scores meet targets on **mobile simulation** (Performance 90+, SEO 95+, Accessibility 95+).

---

## Phase Summary

| Phase | What | Key Deliverable |
|-------|------|----------------|
| **1** | Foundation | Layout shell, design tokens, shared components |
| **2** | Home Page | Complete landing page with all 11 sections |
| **3** | Content Pages | All static pages (services, subsidy guide, contact, legal) |
| **4** | Interactive Features | Solar calculator, form API, analytics |
| **5** | Blog | MDX blog with initial posts |
| **6** | Polish & Launch | SEO infra, QA, performance, deployment |

---

## Dependency Graph

```
Phase 1 (Foundation)
   ↓
Phase 2 (Home Page)
   ↓
Phase 3 (Content Pages)    Phase 5 (Blog) ← can start after Phase 2
   ↓                            ↓
Phase 4 (Interactive)          (merges into Home page blog preview)
   ↓                            ↓
Phase 6 (Polish & Launch) ←────┘
```

> **Note:** Phase 5 (Blog) can be built in parallel with Phase 3/4 since it only depends on the layout shell and BlogCard from Phase 2. However, if building sequentially, the order above is recommended.

---

## Parallel Work Opportunities

If multiple people are working on this:

| Stream A | Stream B |
|----------|----------|
| Phase 3 (Content Pages) | Phase 5 (Blog System) |
| Phase 4 (Calculator + Form API) | Phase 5.7 (Write blog posts) |

---

## Pre-Launch Checklist

Before going live, verify:

**Mobile (test at 375px width — highest priority):**
- [ ] No horizontal scrolling on any page
- [ ] All buttons/links have ≥ 44px touch targets
- [ ] Header shows logo + hamburger, mobile menu opens/closes correctly
- [ ] Sticky mobile CTA bar (Call + WhatsApp) visible at bottom
- [ ] WhatsApp floating button doesn't overlap CTA bar or content
- [ ] Contact form is usable with one thumb — fields large enough, keyboard opens correctly
- [ ] Solar calculator inputs/results fully visible without horizontal scroll
- [ ] Tables (subsidy, comparison) scroll horizontally with visible scroll hint
- [ ] Images scale down properly, no overflow
- [ ] Text is readable without pinch-to-zoom (min 14px body text)
- [ ] Phone number input opens numeric keypad
- [ ] Tap-to-call works on phone numbers

**Functionality (all devices):**
- [ ] Contact form sends email to correct address
- [ ] Contact form logs to Google Sheet
- [ ] WhatsApp button opens correct number with pre-filled message
- [ ] Call button dials correct number
- [ ] Solar calculator produces accurate results for edge cases (1KW, 3KW, 10KW, commercial 20KW)
- [ ] All internal links work (no 404s)

**SEO:**
- [ ] Every page has unique title + description
- [ ] sitemap.xml accessible and lists all pages
- [ ] robots.txt allows crawling
- [ ] JSON-LD validates (test with Google Rich Results Test)

**Analytics:**
- [ ] GA4 tracking page views
- [ ] Custom events firing (form submit, WhatsApp click, call click, calculator used)

**Quality (run Lighthouse in mobile simulation mode):**
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 95
- [ ] Lighthouse SEO ≥ 95
- [ ] All images have alt text
- [ ] Favicon displays correctly
- [ ] 404 page works

**Deployment:**
- [ ] `.env.local` is NOT in git
- [ ] Domain and SSL configured (when domain is purchased)
- [ ] Google Search Console verified and sitemap submitted

---

*This plan will be updated if the BRD or Tech Spec change.*
