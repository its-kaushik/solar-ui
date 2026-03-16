# Technical Specification

## Kaushik Solar Power OPC Pvt Ltd — Company Website

**Version:** 1.1
**Date:** 2026-03-16
**References:** [BRD v1.1](./BRD.md)

---

## 1. Overview

This document translates the BRD into actionable technical specifications for the developer. It covers component architecture, data models, algorithms, integrations, and design tokens.

**Stack summary:** Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + MDX — fully static site with a single API route for contact form submission.

**Design philosophy:** Mobile-first. All components are designed for mobile screens first, then enhanced for larger viewports using Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`). This is non-negotiable — the majority of our target audience in Delhi will access the site via smartphones (WhatsApp link shares, Google searches on mobile).

---

## 2. Project Setup

### 2.1 Dependencies

```json
{
  "dependencies": {
    "next": "^15",
    "react": "^19",
    "react-dom": "^19",
    "lucide-react": "latest",
    "@next/mdx": "^15",
    "gray-matter": "^4",
    "next-mdx-remote": "^5",
    "resend": "^4",
    "framer-motion": "^11"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/react": "^19",
    "@types/node": "^22",
    "tailwindcss": "^4",
    "@tailwindcss/postcss": "^4",
    "@tailwindcss/typography": "^0.5"
  }
}
```

### 2.2 Environment Variables

```env
# .env.local (not committed to git)
RESEND_API_KEY=               # Resend API key for transactional email
CONTACT_EMAIL_TO=             # Email address to receive lead notifications
GOOGLE_SHEETS_WEBHOOK_URL=   # Webhook URL for Google Sheets integration (Make/Zapier)
NEXT_PUBLIC_WHATSAPP_NUMBER=  # WhatsApp number (with country code, no +)
NEXT_PUBLIC_PHONE_NUMBER=     # Phone number for click-to-call
NEXT_PUBLIC_GA_ID=            # Google Analytics 4 measurement ID
```

### 2.3 Next.js Configuration

- **Output:** `export` (static export) for all pages except the `/api/contact` route. If deploying on Vercel, use default (no `output: 'export'`) to keep the API route functional.
- **Images:** Configure `next/image` with `unoptimized: true` if static export, or use Vercel image optimization.
- **MDX:** Configure `@next/mdx` or `next-mdx-remote` for blog rendering.

---

## 3. Design Tokens (Tailwind Configuration)

### 3.1 Colors

```css
/* Defined in app/globals.css using Tailwind v4 CSS-first config */
@theme {
  --color-primary: #1E3A5F;        /* Deep Navy Blue */
  --color-primary-light: #2A4F7F;  /* Hover/lighter variant */
  --color-primary-dark: #142942;   /* Darker variant for footer */
  --color-secondary: #F59E0B;      /* Solar Amber */
  --color-secondary-light: #FBBF24;/* Hover variant */
  --color-accent: #10B981;         /* Leaf Green */
  --color-accent-light: #34D399;   /* Hover variant */
  --color-bg: #F3F4F6;             /* Warm Gray background */
  --color-bg-white: #FFFFFF;       /* Card/section backgrounds */
  --color-text: #1F2937;           /* Dark Charcoal */
  --color-text-light: #6B7280;     /* Secondary/muted text */
  --color-text-inverse: #FFFFFF;   /* Text on dark backgrounds */
}
```

### 3.2 Typography

```css
@theme {
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

- Load via `next/font/google` for performance (no external CSS request).
- Headings: `font-heading`, weights 600–800.
- Body: `font-body`, weights 400–600.
- Font sizes follow Tailwind defaults (`text-sm` through `text-5xl`).

### 3.3 Spacing & Layout

- Max content width: `max-w-7xl` (1280px) centered with `mx-auto px-4 sm:px-6 lg:px-8`.
- Section vertical spacing: `py-12 sm:py-16 lg:py-24`.
- Card border radius: `rounded-2xl`.
- Shadows: `shadow-md` for cards, `shadow-lg` for hover states.

### 3.4 Responsive Breakpoints

All styling is written **mobile-first** — the base (unprefixed) styles target phones, then `sm:`, `md:`, `lg:` progressively enhance for larger screens.

| Prefix | Min Width | Target Device | Usage |
|--------|-----------|---------------|-------|
| *(none)* | 0px | Mobile phones (portrait) | **Default — all base styles go here** |
| `sm:` | 640px | Large phones (landscape) / small tablets | Minor layout tweaks |
| `md:` | 768px | Tablets | 2-column grids, side-by-side layouts |
| `lg:` | 1024px | Laptops / desktops | Full multi-column layouts, larger spacing |
| `xl:` | 1280px | Large desktops | Max-width container, wider grids |

**Primary test device:** 375px width (iPhone SE) — if it looks good here, it works everywhere.

### 3.5 Touch Targets

- All clickable elements (buttons, links, form fields) must have a **minimum touch target of 44×44px** (Apple HIG / WCAG 2.5.5).
- CTA buttons: minimum height `h-12` (48px) on mobile.
- Nav links in mobile menu: minimum height `h-12` with full-width tap area.
- Form inputs: minimum height `h-12` on mobile, `text-base` (16px) to prevent iOS zoom on focus.

### 3.6 Contrast Verification

All text/background combinations must meet WCAG AA:

| Combination | Ratio | Pass |
|-------------|-------|------|
| `#1F2937` on `#FFFFFF` | 14.7:1 | Yes |
| `#1F2937` on `#F3F4F6` | 11.4:1 | Yes |
| `#FFFFFF` on `#1E3A5F` | 9.4:1 | Yes |
| `#FFFFFF` on `#F59E0B` | 2.2:1 | **Fail** — never use white text on amber |
| `#1E3A5F` on `#F59E0B` | 4.3:1 | Pass (large text only) |
| `#1F2937` on `#F59E0B` | 5.2:1 | Yes |

> **Rule:** Amber (`#F59E0B`) is used for icons, borders, accents, and backgrounds with dark text — **never** with white text on it.

---

## 4. Component Architecture

### 4.1 Component Tree

```
RootLayout (layout.tsx)
├── Header
│   ├── Logo (text placeholder)
│   ├── NavLinks
│   ├── MobileMenuButton
│   ├── MobileMenu (slide-out)
│   ├── CallButton (header CTA, visible on mobile)
│   └── WhatsAppButton (header CTA)
├── {children} ← Page content
├── WhatsAppFloatingButton (fixed bottom-right, all pages)
└── Footer
    ├── FooterLinks (4 columns)
    ├── ContactInfo
    ├── Credentials (CIN, GST, MSME)
    └── Copyright
```

### 4.2 Shared / Reusable Components

| Component | Props | Used On |
|-----------|-------|---------|
| `SectionWrapper` | `children, className, id` | Every page section — provides consistent max-width, padding |
| `SectionHeading` | `title, subtitle, centered?` | Section headers across all pages |
| `CTAButton` | `text, href, variant: 'primary' \| 'secondary' \| 'outline'` | All pages |
| `Card` | `children, className` | USPs, services, blog, portfolio |
| `WhatsAppFloatingButton` | — (reads env) | Root layout (all pages) |
| `WhatsAppButton` | `message?, className` | Header, contact section |
| `CallButton` | `className` | Header, contact section |
| `ContactForm` | `compact?: boolean` | Home (compact), Contact page (full) |
| `SubsidyTable` | `type: 'central' \| 'state' \| 'gbi'` | Home, Subsidy Guide |
| `TestimonialCard` | `testimonial: Testimonial` | Home, Our Work |
| `ProjectCard` | `project: Project` | Home, Our Work |
| `BlogCard` | `post: BlogPostMeta` | Home, Blog listing |
| `StepCard` | `step: number, title, description, icon` | Home (How It Works) |
| `USPCard` | `title, description, icon: LucideIcon` | Home (Why Choose Us) |
| `ServiceCard` | `title, description, href, icon` | Home (Services Overview) |
| `SEOHead` | `title, description, ogImage?, jsonLd?` | Every page via `generateMetadata` |

### 4.3 Page-Specific Components

| Component | Page | Notes |
|-----------|------|-------|
| `HeroSection` | Home | Full-width hero with background image, taglines, CTAs |
| `SubsidyStrip` | Home | Full-width amber/gradient banner |
| `SavingsSnapshot` | Home | Visual savings card/infographic |
| `SolarCalculator` | Solar Calculator | Interactive form + results display |
| `CalculatorForm` | Solar Calculator | Input fields (units, property type, area) |
| `CalculatorResults` | Solar Calculator | Output display (system size, cost, savings, etc.) |
| `BlogContent` | Blog [slug] | MDX renderer with custom components |
| `ServiceAreaMap` | About | Static map image showing service coverage |

### 4.4 Mobile-First Responsive Behavior per Component

Every component is designed for mobile first. The table below specifies how each component adapts across breakpoints.

**Layout Components:**

| Component | Mobile (< 640px) | Tablet (md: 768px) | Desktop (lg: 1024px) |
|-----------|-----------------|--------------------|--------------------|
| **Header** | Logo + hamburger menu icon. Nav links hidden. Call button visible. | Same as mobile. | Logo + horizontal nav links + WhatsApp & Call buttons. No hamburger. |
| **MobileMenu** | Full-screen slide-out overlay with stacked nav links (h-12 each). Close button. | Same as mobile. | Hidden — nav links are inline in header. |
| **Footer** | Single column — sections stacked vertically. | 2-column grid. | 4-column grid. |
| **WhatsAppFloatingButton** | `bottom-4 right-4`, 48×48px. Positioned above any bottom browser chrome. | `bottom-6 right-6`, 56×56px. | Same as tablet. |

**Home Page Sections:**

| Component | Mobile (< 640px) | Tablet (md: 768px) | Desktop (lg: 1024px) |
|-----------|-----------------|--------------------|--------------------|
| **HeroSection** | Full-width background image. Tagline `text-3xl`. CTAs stacked vertically, full-width buttons. Trust badges wrap into 2 rows. | Tagline `text-4xl`. CTAs side-by-side. Trust badges in single row. | Tagline `text-5xl`. Content left-aligned with image/illustration on right (or centered, design decision). |
| **SubsidyStrip** | Text `text-lg`, single line wrapping. CTA below text. | Text `text-xl`, CTA inline right. | Same as tablet with more padding. |
| **USPCards (Why Choose Us)** | 1 column — cards stacked vertically. | 2-column grid. | 3-column grid (2 rows × 3). |
| **ServiceCards** | 1 column — stacked. | 3-column grid (all in one row). | Same as tablet with larger cards. |
| **StepCards (How It Works)** | Vertical timeline — steps stacked with a connecting line. | Same as mobile but wider cards. | Horizontal stepper — 6 steps in a row with connecting arrows. |
| **SavingsSnapshot** | Full-width card, stacked content. | Centered card with max-width. | Same as tablet. |
| **TestimonialCarousel** | Horizontal scroll (swipeable), 1 card visible at a time, snap scrolling. | 2 cards visible. | 3 cards visible. |
| **ProjectCards (Portfolio)** | 1 column — stacked. | 2-column grid. | 3 or 4-column grid. |
| **BlogCards** | 1 column — stacked. | 2-column grid. | 3-column grid. |
| **ContactSection** | Form full-width, stacked fields. WhatsApp/Call buttons below form, full-width. | Form on left (60%), contact info on right (40%). | Same as tablet with more spacing. |

**Interactive Components:**

| Component | Mobile (< 640px) | Tablet (md: 768px) | Desktop (lg: 1024px) |
|-----------|-----------------|--------------------|--------------------|
| **SolarCalculator** | Single column — inputs stacked, full-width. Results appear below with slide-down animation. | Form and results side-by-side (50/50). | Same as tablet with more breathing room. |
| **CalculatorForm** | Inputs stacked vertically, full-width. Select dropdowns use native mobile selectors. Large touch targets (h-12). | Same layout, slightly narrower. | Same. |
| **CalculatorResults** | Results in a card, values stacked. Key numbers (`text-2xl` bold). Breakdown in a list format. | Results in a structured card with inline labels + values. | Same as tablet. |
| **ContactForm** | Fields stacked vertically, full-width. Submit button full-width `h-12`. | Fields can be 2-column where logical (name + phone side by side). Submit button auto-width. | Same as tablet. |

**Content Pages:**

| Component | Mobile (< 640px) | Tablet (md: 768px) | Desktop (lg: 1024px) |
|-----------|-----------------|--------------------|--------------------|
| **SubsidyTables** | Horizontally scrollable (`overflow-x-auto`) with a scroll hint shadow on the right edge. | Full table visible without scroll. | Same as tablet. |
| **Service comparison tables** | Horizontally scrollable. | Full table visible. | Same. |
| **Blog listing** | 1-column card stack. | 2-column grid. | 3-column grid (3×3 = 9 per page). |
| **Blog post content** | Full-width text, `prose` class for readability. Images full-width. | Centered content with `max-w-3xl`. | Same as tablet. |
| **FAQ accordions (Subsidy Guide)** | Full-width, large tap targets for expand/collapse. | Same. | Centered with `max-w-3xl`. |

### 4.5 Mobile-Specific UX Patterns

1. **Sticky mobile header** — Header stays fixed at top on scroll (`sticky top-0 z-50`). Compact height (~60px) to preserve screen real estate.

2. **Sticky mobile CTA bar** — On key pages (Home, Services, Calculator), show a sticky bottom bar on mobile with "Call" and "WhatsApp" buttons. Hidden on desktop (CTAs are in the header).
   ```
   ┌──────────────────────────────────┐
   │  [📞 Call Now]  [💬 WhatsApp]    │  ← Sticky bottom bar (mobile only)
   └──────────────────────────────────┘
   ```

3. **Native mobile inputs** — Use `type="tel"` for phone fields (opens numeric keypad), `type="email"` for email fields. Use native `<select>` for dropdowns on mobile (better UX than custom dropdowns).

4. **Scroll-to-section** — Hero CTA "Get Free Consultation" smooth-scrolls to the contact section on the same page (mobile users don't want to navigate to a separate page for a quick inquiry).

5. **Swipeable testimonials** — Use CSS scroll-snap (`overflow-x-auto snap-x snap-mandatory`) for the testimonial carousel. No JS carousel library needed.

6. **Tap-to-call** — All phone numbers wrapped in `<a href="tel:+91XXXXXXXXXX">` for one-tap calling.

7. **Image sizing** — Hero images: serve smaller crops on mobile via `next/image` `sizes` prop (e.g., `sizes="100vw"` on mobile, `50vw` on desktop). Reduce data transfer on mobile networks.

8. **Font sizes** — Minimum body text `text-sm` (14px) on mobile, never smaller. Headings scale down gracefully: `text-2xl sm:text-3xl lg:text-5xl`.

9. **No hover-only interactions** — Everything accessible via tap. Hover states are enhancement only (desktop). Card content must be fully visible without hovering.

10. **Bottom-sheet for mobile menu** — Consider a bottom-sliding sheet instead of top hamburger overlay, since the thumb zone is at the bottom of the screen. (Optional — standard hamburger is also fine.)

---

## 5. Data Models

### 5.1 TypeScript Interfaces

```typescript
// types/index.ts

export interface Testimonial {
  id: string;
  name: string;
  area: string;           // e.g., "Saket, South Delhi"
  systemSize: string;     // e.g., "3 KW"
  review: string;
  rating: number;         // 1-5
  image?: string;         // optional customer photo path
}

export interface Project {
  id: string;
  title: string;
  area: string;
  systemSize: string;
  systemType: 'on-grid' | 'off-grid' | 'hybrid';
  date: string;           // ISO date
  images: string[];       // paths to project photos
  description?: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;           // ISO date
  readTime: string;       // e.g., "5 min read"
  featuredImage: string;
  tags: string[];
}

export interface BlogPost extends BlogPostMeta {
  content: string;        // raw MDX content
}

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  propertyType: 'residential' | 'commercial';
  location: string;
  message?: string;
}

export interface CalculatorInput {
  monthlyUnits: number;
  propertyType: 'residential' | 'commercial';
  area: 'south-delhi' | 'faridabad' | 'gurgaon';
}

export interface CalculatorResult {
  systemSizeKW: number;
  estimatedCostMin: number;
  estimatedCostMax: number;
  centralSubsidy: number;
  stateSubsidy: number;
  totalSubsidy: number;
  netCostMin: number;
  netCostMax: number;
  monthlyGeneration: number;     // units
  monthlySavings: number;        // Rs
  annualGBI: number;             // Rs
  paybackYearsMin: number;
  paybackYearsMax: number;
  totalSavings25Years: number;   // Rs
  showContactForQuote: boolean;  // true if commercial > 15KW
}
```

### 5.2 Static Data Files

```typescript
// data/testimonials.ts — Placeholder data
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    area: 'Saket, South Delhi',
    systemSize: '3 KW',
    review: 'Excellent service from start to finish. The team handled everything including the subsidy paperwork. Very professional.',
    rating: 5,
  },
  // ... more placeholders
];

// data/projects.ts — Placeholder data
export const projects: Project[] = [
  {
    id: '1',
    title: 'Residential 3KW On-Grid System',
    area: 'Greater Kailash, South Delhi',
    systemSize: '3 KW',
    systemType: 'on-grid',
    date: '2026-02-15',
    images: ['/images/projects/placeholder-1.jpg'],
    description: 'Complete on-grid installation with net metering and PM Surya Ghar subsidy.',
  },
  // ... more placeholders
];
```

### 5.3 Blog Post Frontmatter Schema

```yaml
# content/blog/example-post.mdx
---
title: "PM Surya Ghar Yojana: How to Get Rs 78,000 Subsidy"
excerpt: "A complete guide to applying for the PM Surya Ghar Muft Bijli Yojana subsidy in Delhi."
date: "2026-03-15"
readTime: "8 min read"
featuredImage: "/images/blog/pm-surya-ghar-guide.jpg"
tags: ["subsidy", "pm-surya-ghar", "guide"]
---

MDX content here...
```

---

## 6. Solar Calculator — Detailed Algorithm

### 6.1 Constants

```typescript
// lib/calculator.ts

const CONSTANTS = {
  // Generation
  UNITS_PER_KW_PER_DAY: 4,          // Delhi average (considering seasons, weather)
  DAYS_PER_MONTH: 30,
  UNITS_PER_KW_PER_MONTH: 120,      // 4 × 30

  // Cost per KW (indicative, before subsidy)
  COST_PER_KW_MIN: 55000,           // Rs — lower end (on-grid, basic)
  COST_PER_KW_MAX: 65000,           // Rs — upper end (hybrid, premium)
  // NOTE: These are placeholder values. Update with actual pricing from the business.

  // Central Subsidy (PM Surya Ghar) — Residential only
  CENTRAL_SUBSIDY: {
    RATE_FIRST_2KW: 30000,           // Rs per KW for first 2 KW
    RATE_2_TO_3KW: 18000,            // Rs per KW for 2-3 KW
    MAX_CAPACITY_KW: 3,              // Subsidy capped at 3 KW
    MAX_AMOUNT: 78000,               // Rs
  },

  // Delhi State Subsidy — South Delhi only (BSES Rajdhani area)
  STATE_SUBSIDY: {
    RATE_PER_KW: 2000,               // Rs per KW
    MAX_BASIC: 10000,                // Rs cap on basic state subsidy
    ADDITIONAL_3KW: 30000,           // Rs additional for 3KW+ systems
    MIN_CAPACITY_FOR_ADDITIONAL: 3,  // KW
  },

  // Generation-Based Incentive (GBI) — Delhi, all consumer types
  GBI: {
    RATE_UPTO_3KW: 3,               // Rs per kWh
    RATE_3_TO_10KW: 2,              // Rs per kWh
    DURATION_YEARS: 5,
  },

  // BSES electricity rate (weighted average across slabs for estimation)
  AVG_ELECTRICITY_RATE: 7,          // Rs per unit (approximate weighted avg)

  // System lifespan
  PANEL_LIFESPAN_YEARS: 25,

  // Commercial threshold
  COMMERCIAL_QUOTE_THRESHOLD_KW: 15,
};
```

### 6.2 Calculation Functions

```typescript
export function calculateSystemSize(monthlyUnits: number): number {
  const rawSize = monthlyUnits / CONSTANTS.UNITS_PER_KW_PER_MONTH;
  // Round up to nearest 0.5 KW
  return Math.ceil(rawSize * 2) / 2;
}

export function calculateCentralSubsidy(
  systemSizeKW: number,
  propertyType: 'residential' | 'commercial'
): number {
  // Central subsidy is ONLY for residential
  if (propertyType === 'commercial') return 0;

  const cappedSize = Math.min(systemSizeKW, CONSTANTS.CENTRAL_SUBSIDY.MAX_CAPACITY_KW);

  if (cappedSize <= 2) {
    return cappedSize * CONSTANTS.CENTRAL_SUBSIDY.RATE_FIRST_2KW;
  }

  // First 2 KW at 30,000/KW + remaining at 18,000/KW
  const first2KW = 2 * CONSTANTS.CENTRAL_SUBSIDY.RATE_FIRST_2KW;  // 60,000
  const remaining = (cappedSize - 2) * CONSTANTS.CENTRAL_SUBSIDY.RATE_2_TO_3KW;
  return first2KW + remaining;
}

export function calculateStateSubsidy(
  systemSizeKW: number,
  area: 'south-delhi' | 'faridabad' | 'gurgaon'
): number {
  // State subsidy only for South Delhi (BSES Rajdhani area)
  if (area !== 'south-delhi') return 0;

  let subsidy = Math.min(
    systemSizeKW * CONSTANTS.STATE_SUBSIDY.RATE_PER_KW,
    CONSTANTS.STATE_SUBSIDY.MAX_BASIC
  );

  // Additional 30,000 for 3KW+ systems
  if (systemSizeKW >= CONSTANTS.STATE_SUBSIDY.MIN_CAPACITY_FOR_ADDITIONAL) {
    subsidy += CONSTANTS.STATE_SUBSIDY.ADDITIONAL_3KW;
  }

  return subsidy;
}

export function calculateGBI(systemSizeKW: number): number {
  const monthlyGeneration = systemSizeKW * CONSTANTS.UNITS_PER_KW_PER_MONTH;
  const annualGeneration = monthlyGeneration * 12;

  let ratePerKWh: number;
  if (systemSizeKW <= 3) {
    ratePerKWh = CONSTANTS.GBI.RATE_UPTO_3KW;
  } else {
    ratePerKWh = CONSTANTS.GBI.RATE_3_TO_10KW;
  }

  return annualGeneration * ratePerKWh; // Annual GBI
}

export function calculate(input: CalculatorInput): CalculatorResult {
  const systemSizeKW = calculateSystemSize(input.monthlyUnits);

  // Commercial > 15KW: show "contact us"
  const showContactForQuote =
    input.propertyType === 'commercial' &&
    systemSizeKW > CONSTANTS.COMMERCIAL_QUOTE_THRESHOLD_KW;

  const estimatedCostMin = systemSizeKW * CONSTANTS.COST_PER_KW_MIN;
  const estimatedCostMax = systemSizeKW * CONSTANTS.COST_PER_KW_MAX;

  const centralSubsidy = calculateCentralSubsidy(systemSizeKW, input.propertyType);
  const stateSubsidy = calculateStateSubsidy(systemSizeKW, input.area);
  const totalSubsidy = centralSubsidy + stateSubsidy;

  const netCostMin = estimatedCostMin - totalSubsidy;
  const netCostMax = estimatedCostMax - totalSubsidy;

  const monthlyGeneration = systemSizeKW * CONSTANTS.UNITS_PER_KW_PER_MONTH;
  const monthlySavings = monthlyGeneration * CONSTANTS.AVG_ELECTRICITY_RATE;
  const annualSavings = monthlySavings * 12;

  const annualGBI = calculateGBI(systemSizeKW);

  const totalAnnualBenefit = annualSavings + annualGBI;
  const paybackYearsMin = netCostMin / totalAnnualBenefit;
  const paybackYearsMax = netCostMax / totalAnnualBenefit;

  // 25-year savings: electricity savings for 25 years + GBI for 5 years
  const totalSavings25Years =
    annualSavings * CONSTANTS.PANEL_LIFESPAN_YEARS +
    annualGBI * CONSTANTS.GBI.DURATION_YEARS -
    netCostMin; // Use min cost for best-case savings

  return {
    systemSizeKW,
    estimatedCostMin,
    estimatedCostMax,
    centralSubsidy,
    stateSubsidy,
    totalSubsidy,
    netCostMin,
    netCostMax,
    monthlyGeneration,
    monthlySavings,
    annualGBI,
    paybackYearsMin: Math.round(paybackYearsMin * 10) / 10,
    paybackYearsMax: Math.round(paybackYearsMax * 10) / 10,
    totalSavings25Years,
    showContactForQuote,
  };
}
```

### 6.3 Calculator UX Flow

```
[User enters monthly units] → [Selects property type] → [Selects area]
        ↓
  Client-side calculation (instant, no API call)
        ↓
  [Results panel appears with animation]
  ┌─────────────────────────────────────────┐
  │ Recommended System: 3 KW               │
  │ Estimated Cost: ₹1,65,000 - ₹1,95,000  │
  │ Central Subsidy: -₹78,000              │
  │ State Subsidy: -₹30,000                │
  │ ─────────────────────────              │
  │ Your Net Cost: ₹57,000 - ₹87,000       │
  │                                         │
  │ Monthly Savings: ~₹2,520               │
  │ Annual GBI Income: ~₹4,320             │
  │ Payback Period: ~1.7 - 2.5 years       │
  │ 25-Year Total Savings: ₹X,XX,XXX       │
  └─────────────────────────────────────────┘
        ↓
  [CTA: "Get an Exact Quote" → WhatsApp/Contact form]
```

If `showContactForQuote` is true (commercial > 15KW):

```
  ┌─────────────────────────────────────────┐
  │ Recommended System: 50 KW              │
  │                                         │
  │ For commercial systems above 15 KW,     │
  │ pricing is customized based on site     │
  │ conditions.                             │
  │                                         │
  │ [Contact Us for a Free Assessment]      │
  └─────────────────────────────────────────┘
```

### 6.4 Input Validation

| Field | Validation | Error Message |
|-------|-----------|---------------|
| Monthly units | Required, number, min 50, max 50000 | "Please enter a valid number between 50 and 50,000" |
| Property type | Required, one of `residential`/`commercial` | "Please select a property type" |
| Area | Required, one of `south-delhi`/`faridabad`/`gurgaon` | "Please select your area" |

---

## 7. Contact Form — Integration Flow

### 7.1 Form Submission Sequence

```
[User fills form] → [Client-side validation]
        ↓
  POST /api/contact (JSON body)
        ↓
  API Route handler:
  ├── 1. Validate input (server-side)
  ├── 2. Send email via Resend API
  ├── 3. POST to Google Sheets webhook (fire-and-forget)
  └── 4. Return { success: true }
        ↓
  [Client shows success toast/message]
```

### 7.2 API Route Implementation

```typescript
// app/api/contact/route.ts

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body: ContactFormData = await request.json();

  // 1. Server-side validation
  if (!body.name || !body.phone || !body.propertyType || !body.location) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // 2. Send email notification
  await resend.emails.send({
    from: 'Kaushik Solar <noreply@yourdomain.com>',
    to: process.env.CONTACT_EMAIL_TO!,
    subject: `New Lead: ${body.name} — ${body.propertyType} — ${body.location}`,
    html: buildEmailHTML(body),
  });

  // 3. Append to Google Sheet (fire-and-forget, don't block response)
  if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
    fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        ...body,
        status: 'New',
      }),
    }).catch(console.error); // Don't fail the request if sheet append fails
  }

  // 4. Return success
  return Response.json({ success: true });
}
```

### 7.3 Email Template

Plain HTML email containing:
- Lead name, phone, email
- Property type, location
- Message/requirements
- Timestamp
- Quick-action links: `tel:` link to call, `https://wa.me/` link to WhatsApp the lead

### 7.4 Client-side Validation

| Field | Rules |
|-------|-------|
| Name | Required, min 2 chars, max 100 chars |
| Phone | Required, 10 digits (Indian mobile), regex: `/^[6-9]\d{9}$/` |
| Email | Optional, valid email format if provided |
| Property type | Required |
| Location | Required, min 3 chars |
| Message | Optional, max 500 chars |

### 7.5 Rate Limiting

Basic rate limiting on the API route to prevent spam:
- Max 5 submissions per IP per hour.
- Implement via a simple in-memory Map (sufficient for low-traffic site; no Redis needed).
- Return `429 Too Many Requests` if exceeded.

### 7.6 Honeypot Spam Protection

Add a hidden form field (e.g., `website`) that is invisible to real users but filled by bots:
- If `website` field has a value → silently discard the submission (return 200 but don't send email/sheet).
- No CAPTCHA needed for initial launch — honeypot + rate limiting should suffice.

---

## 8. Blog System — MDX Pipeline

### 8.1 File Structure

```
src/content/blog/
├── pm-surya-ghar-subsidy-guide.mdx
├── delhi-solar-subsidy-guide.mdx
├── on-grid-vs-off-grid-vs-hybrid.mdx
└── ...
```

### 8.2 MDX Loading Utility

```typescript
// lib/blog.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export function getAllPosts(): BlogPostMeta[] {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));

  const posts = files.map(filename => {
    const slug = filename.replace('.mdx', '');
    const fileContent = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8');
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      readTime: data.readTime,
      featuredImage: data.featuredImage,
      tags: data.tags || [],
    } as BlogPostMeta;
  });

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    readTime: data.readTime,
    featuredImage: data.featuredImage,
    tags: data.tags || [],
    content,
  };
}
```

### 8.3 Custom MDX Components

Override default HTML elements for styled blog content:

| Element | Custom Styling |
|---------|---------------|
| `h2`, `h3` | Brand font, proper spacing, anchor links |
| `p` | `text-text-light leading-relaxed` |
| `table` | Styled table with borders, striped rows |
| `blockquote` | Left-bordered callout with amber accent |
| `code` | Inline code styling |
| `img` | Wrapped in `next/image` with caption support |
| `a` | Brand-colored links with hover underline |

Additionally, provide custom components usable in MDX:

| Component | Usage in MDX | Purpose |
|-----------|-------------|---------|
| `<SubsidyTable />` | `<SubsidyTable type="central" />` | Embed subsidy tables in blog posts |
| `<CTABanner />` | `<CTABanner text="Ready to go solar?" />` | Inline call-to-action |
| `<Callout />` | `<Callout type="info">...</Callout>` | Info/warning/tip boxes |

### 8.4 Blog Pagination

- Show 9 posts per page (3×3 grid on desktop).
- Static pagination: generate pages at build time using `generateStaticParams`.
- URL pattern: `/blog` (page 1), `/blog/page/2`, `/blog/page/3`, etc.
- For the initial launch with < 10 posts, pagination won't be visible but the infrastructure will be ready.

---

## 9. SEO Implementation

### 9.1 Metadata per Page

```typescript
// Example: app/page.tsx (Home)
export const metadata: Metadata = {
  title: 'Kaushik Solar Power — Rooftop Solar Installation in Delhi',
  description: 'Get rooftop solar panels installed in Delhi with up to ₹1,08,000 government subsidy. BSES Rajdhani registered. Free consultation & 5 years maintenance.',
  openGraph: {
    title: 'Kaushik Solar Power — Rooftop Solar Installation in Delhi',
    description: 'Get rooftop solar panels installed in Delhi with up to ₹1,08,000 government subsidy.',
    images: ['/images/og-home.jpg'],
    type: 'website',
  },
};
```

Every page must have unique `title` and `description`. Format: `Page Title — Kaushik Solar Power`.

### 9.2 JSON-LD Structured Data

| Page | Schema Type | Key Fields |
|------|------------|------------|
| All pages | `LocalBusiness` | name, address, phone, url, areaServed, openingHours |
| Home | `LocalBusiness` + `Organization` | logo, sameAs (social links) |
| Subsidy Guide | `FAQPage` | FAQ question-answer pairs |
| Blog posts | `BlogPosting` | headline, datePublished, author, image |
| Services | `Service` | serviceType, provider, areaServed |

### 9.3 Sitemap

Auto-generate via `next-sitemap` or a custom `app/sitemap.ts`:

```typescript
// app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: '/', changeFrequency: 'weekly', priority: 1.0 },
    { url: '/about', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/services/residential', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/services/commercial', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/subsidy-guide', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/solar-calculator', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/contact', changeFrequency: 'yearly', priority: 0.6 },
    // ...
  ];

  const blogPosts = getAllPosts().map(post => ({
    url: `/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}
```

### 9.4 Robots.txt

```
# app/robots.ts
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://yourdomain.com/sitemap.xml
```

---

## 10. Image Strategy

### 10.1 Image Optimization

- Use `next/image` for all images — provides lazy loading, responsive sizing, and format optimization (WebP/AVIF).
- Set explicit `width` and `height` (or use `fill` with a sized container) to prevent layout shift (CLS).
- Hero images: load with `priority={true}` for LCP optimization.

### 10.2 Image Sources

| Type | Source | Format |
|------|--------|--------|
| Hero / banner | Stock photos (Unsplash, Pexels) or custom | WebP, 1920×1080 max |
| Blog featured images | Stock or custom | WebP, 1200×630 (OG-compatible) |
| Portfolio/project photos | Real photos (placeholder for now) | WebP, 800×600 |
| Icons / USPs | Lucide React (SVG, inline) | SVG |
| Logo | Text placeholder → future image swap | SVG preferred |

### 10.3 Placeholder Images

For launch, use placeholder images with a consistent style. Options:
- Curated stock photos from Unsplash (free, attribution-free)
- Placeholder with text overlay: "Coming Soon — Real Project Photo"

---

## 11. WhatsApp Integration

### 11.1 Floating Button

- Fixed position: `bottom-6 right-6` on all screen sizes.
- Green WhatsApp icon with subtle pulse animation to draw attention.
- On click: opens `https://wa.me/{WHATSAPP_NUMBER}?text={PREFILLED_MESSAGE}`.
- Pre-filled message: `"Hi, I'm interested in rooftop solar installation. Please share more details."`
- Z-index: ensure it's above all content but below modals.

### 11.2 Contextual WhatsApp Links

On certain pages, the WhatsApp link can carry context:
- Solar Calculator results: `"Hi, I calculated my solar needs: {systemSize} KW system for my {propertyType} in {area}. Please share a quote."`
- Service pages: `"Hi, I'm interested in {residential/commercial} solar installation. Please share more details."`

---

## 12. Analytics Setup

### 12.1 Google Analytics 4

Load via `next/script` with `strategy="afterInteractive"`:

```typescript
// app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="ga-init" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `}
</Script>
```

### 12.2 Event Tracking

| Event | Trigger | Parameters |
|-------|---------|------------|
| `contact_form_submit` | Form submitted successfully | `property_type`, `location` |
| `whatsapp_click` | WhatsApp button clicked | `page`, `context` |
| `call_click` | Call button clicked | `page` |
| `calculator_used` | Calculator results generated | `system_size`, `property_type`, `area` |
| `calculator_cta_click` | "Get Exact Quote" clicked after calculation | `system_size` |
| `blog_read` | Blog post viewed | `slug`, `read_time` |

---

## 13. Performance Budget

| Asset Type | Budget |
|------------|--------|
| JavaScript (total, compressed) | < 150 KB |
| CSS (total, compressed) | < 30 KB |
| Largest image (hero, above-fold) | < 200 KB |
| Web fonts | < 100 KB (2 fonts × 2 weights each) |
| Total page weight (initial load) | < 500 KB |

### 13.1 Optimization Techniques

- **Static generation** for all pages (build-time rendering, zero server compute).
- **Font optimization** via `next/font` (self-hosted, no render-blocking requests).
- **Image optimization** via `next/image` (automatic WebP/AVIF, responsive sizes).
- **Code splitting** — Next.js does this automatically per route.
- **Lazy loading** — images below the fold load on scroll (`loading="lazy"` is default in `next/image`).
- **Minimal client-side JS** — only the solar calculator and contact form need interactivity (`'use client'`). Everything else is server components.

---

## 14. Security Considerations

| Concern | Mitigation |
|---------|-----------|
| **XSS** | React's default escaping + no `dangerouslySetInnerHTML` (except MDX, which is developer-authored) |
| **CSRF** | API route validates `Content-Type: application/json` (browsers don't send JSON via form POST) |
| **Spam** | Honeypot field + IP-based rate limiting on contact form |
| **Data exposure** | No database, no user data stored. Leads go to email + Google Sheet (both externally managed). |
| **Env vars** | `.env.local` in `.gitignore`. Only `NEXT_PUBLIC_*` vars exposed to client. |
| **Dependency security** | Use `npm audit` in CI. Keep dependencies updated. |

---

## 15. Deployment

### 15.1 Vercel (Recommended)

- Connect GitHub repo → automatic deploys on push to `main`.
- Preview deployments for PRs.
- Edge network for global CDN.
- Serverless function for `/api/contact` route.
- Free tier sufficient for expected traffic.

### 15.2 Self-Hosted (Alternative)

If deploying on the user's server:
- Use `next build` + `next start` behind a reverse proxy (Nginx/Caddy).
- Or use `output: 'standalone'` for a minimal Node.js server.
- Set up SSL via Let's Encrypt / Certbot.
- PM2 or systemd for process management.

### 15.3 CI/CD

For either deployment option:
- **Lint:** `next lint` on every push.
- **Type check:** `tsc --noEmit` on every push.
- **Build:** `next build` — catches build errors.
- **Lighthouse CI** (optional): Run Lighthouse checks in CI to enforce performance/accessibility targets.

---

*This spec is a companion to the BRD. It should be updated if the BRD changes.*
