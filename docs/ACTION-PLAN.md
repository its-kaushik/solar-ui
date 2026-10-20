# Raytrix Energy — Website Action Plan

**Last updated:** 20 October 2026
**Sources merged:** the July 2026 site audit (`AUDIT.md`) + competitive teardown of SolarSquare (India's #1 home-solar brand, `solarsquare.in`).
**Purpose:** one prioritized backlog for everything left to do, tagged by where the idea came from, what it's blocked on, and how much effort it is.

---

## How to read this

**Status**
- ✅ **Done** — shipped & committed
- 🟡 **Partial** — some of it done, gap remains
- ⏸️ **Parked** — needs an asset or decision from us, not code
- ⬜ **To do** — buildable now

**Source tags**
- `A#` = numbered action in `AUDIT.md` §12 · `A§x` = audit section reference
- `SS` = learned from the SolarSquare teardown

**Effort:** S (hours) · M (1–2 days) · L (3+ days) — **Priority:** P0 (do first) · P1 · P2

**Blocker:** what it's waiting on — `code` (just build it) · `asset` (photo/video/number) · `decision` (your call) · `content` (copy from you)

---

## 1. Already shipped ✅ (for context — don't redo)

Registered address + CIN + GSTIN (footer, contact, about, JSON-LD) · LocalBusiness / Organization / Service / FAQPage / WebSite / BreadcrumbList / BlogPosting schema · homepage FAQ block · Google 5.0★ trust strip under hero · 25 real verified reviews replacing placeholders · "Book a Free Site Survey" CTA rewrite · optional monthly-bill dropdown on the form · 6-step timeline durations · blog-post CTAs · **Faridabad & Gurgaon service-area pages** · footer polish (icons, tagline, credentials) · lazy-loaded contact map · per-page OpenGraph · **corrected the Haryana "non-subsidy" error everywhere** · "Enjoy Free Solar Power" → "Start Generating Your Own Power" · **Delhi state subsidy raised to ₹78,000 (Sept 2026 policy) — ₹1,56,000 combined, rolled out sitewide + calculator; GBI limited to Delhi** · **calculator → WhatsApp / email lead capture** (pre-filled numbers, `source: calculator` tagged in email + Sheet) · **real logo** sitewide (header, footer, favicon/app icons, OG, schema) · **Faridabad branch office** (A-140, Ashoka Enclave - 2) on contact/footer/home, Faridabad page map + FAQ, and as a second location in schema.

---

## 2. The backlog (merged & prioritized)

### 🔴 P0 — Trust layer & the conversion leak (the audit's "fix before spending a rupee on ads")

| Item | Source | Status | Effort | Blocker | Notes |
|---|---|---|---|---|---|
| **Real install photos** everywhere (site + Our Work) | `A1` `A§4` | ⏸️ | S | asset | Audit's #1 "Critical". Even phone shots: wide + panel close-up + net meter + customer. |
| **Calculator → WhatsApp lead capture** (pre-fill their calculated numbers into the wa.me message) | `A5` | ✅ | M | code | Shipped Oct 2026: WhatsApp pre-fill + email-me-my-price form. Calculator no longer shows system cost — only subsidy, savings, payback. |
| **Before/after BSES bill image** (redacted) | `A13` | ⏸️ | S | asset | "Most persuasive single image in residential solar marketing." |
| **Domain email** hello@raytrixenergy.com (forward to Gmail) | `A2` | ⏸️ | S | decision | Gmail contradicts the registered-company positioning. |
| **Reformat testimonials around the bill-delta** ("₹8,000 → ₹600") | `SS` `A17` | ⬜ | S | code | SolarSquare leads every review with the number. Uses reviews we already have. |
| **Dated, specific local install count** ("X rooftops in South Delhi as of Jul 2026") | `SS` `A6` | ⬜ | S | content | Their strongest local signal is one dated sentence. Small honest numbers beat none. |
| **Founder photo + first-person story** on About | `A4` `A6` `A§7-3` | ⏸️/🟡 | S | asset | Story was de-corporatised; still needs a face + a real anecdote. For an OPC the founder *is* the brand. |

### 🟠 P1 — Pricing, product depth & buyer anxieties

| Item | Source | Status | Effort | Blocker | Notes |
|---|---|---|---|---|---|
| **`/pricing` page** — 2/3/5 kW cards: cost → subsidy → net cost → 25-yr savings/ROI | `A19` `SS` | ⬜ | M | content | SolarSquare's proven table format. Frame it "**₹0 upfront** — subsidy covers the down payment, savings cover the EMI." Just needs your real prices. |
| **Name inverter & battery brands** on Residential | `A16` `A§3` | ⬜ | S | content | The component that fails first; savvy buyers ask. SolarSquare *hides* brands — naming Growatt/Deye/etc. is our transparency edge. |
| **Monitoring-app pitch** ("track generation live from your phone") | `SS` `A§3` | ⬜ | S | content | Free once inverter brand is named — most ship an app (Growatt/Solis). |
| **Anxiety-answering FAQ/content** — all buildable now: | `A§3` `SS` | ⬜ | M | code | The exact questions the audit says a real buyer has. SolarSquare answers each: |
| &nbsp;&nbsp;• Roof area needed ("1 kW ≈ 80–100 sq ft") | `A§3` | ⬜ | S | code | #1 question Delhi homeowners ask. |
| &nbsp;&nbsp;• Roof leakage / waterproofing (+ consider a **leak warranty**) | `A§3` `SS` | ⬜ | S | content | SS offers a "1-yr ₹1 lakh leakage warranty" + names the anchoring method. Strong trust device. |
| &nbsp;&nbsp;• "Can I run my AC?" (kW → appliances) | `A§3` `SS` | ⬜ | S | code | SS: "3 kW runs one 1.5-ton AC + fans/lights/TV/washing machine/fridge." |
| &nbsp;&nbsp;• Cleaning, monsoon/dust soiling, monitoring, "what if I sell the house" | `A§3` | ⬜ | S | code | Extend our existing FAQ quality to these. |
| **Service SLA / breakdown response** ("we respond to breakdowns within X hrs") | `A§3` | ⬜ | S | content | No complaint/underperformance process stated — real gap for a 25-yr product. |
| **Package the 5-yr maintenance as a named plan** (+ optional savings promise) | `SS` | ⬜ | M | decision | SS trademarks commodity stuff (WindPro Mount™, GoodZero™ money-back guarantee). Naming turns a feature into a differentiator. |
| **Response-time promise** upgrade "within 24 hrs" → "we call within 4 working hours" | `A8` | 🟡 | S | decision | Success state exists; tighten the promise + honour it (leads go cold in 24 h). |

### 🟡 P1 — Local SEO (city pages already beat SolarSquare — now extend the lead)

> Our Faridabad/Gurgaon pages already out-local theirs: we name DHBVN, explain Haryana-vs-Delhi subsidy honestly, and tag real local reviews — none of which they do. Add what they *do* have:

| Item | Source | Status | Effort | Blocker | Notes |
|---|---|---|---|---|---|
| Per-city **dated install count** + city-specific **pricing table** | `SS` | ⬜ | S | content | Their only real local edge. |
| Per-city **"can I run AC" / price FAQ** | `SS` | ⬜ | S | code | Their city FAQs all lead with price + AC answers. |
| **`/service-areas` hub index** page (bare URL currently 404s) | `A§9` | ⬜ | S | code | Nothing links to it yet; tidy + linkable. |
| **Google Business Profile** review-request loop (WhatsApp the review link at subsidy-credit = peak happiness) | `A4` `A§9-1` | 🟡 | S | process | GBP exists w/ 25 reviews & is surfaced on-site. Systematise the ask. |
| **NAP consistency** across Justdial / IndiaMART / Sulekha / socials | `A§9-3` | ⬜ | S | process | Same Name/Address/Phone everywhere — now for **both** offices. Copy addresses exactly from `src/data/offices.ts`. |
| **Google Business Profile for the Faridabad office** | `A§9` | ⬜ | S | process | Separate verified GBP listing at A-140, Ashoka Enclave - 2 — the biggest local-pack lever for Faridabad searches. Then swap its share link into `faridabadOffice.mapsUrl`. |

### 🟢 P2 — Copy, growth levers & polish

| Item | Source | Status | Effort | Blocker | Notes |
|---|---|---|---|---|---|
| **Customer-first headlines** ("Your ₹8,000 bill could be ₹500", "Why 30+ Delhi homeowners trusted us…") | `A§7-1` | ⬜ | S | content | Current H2s are company-first. |
| **"WhatsApp Number"** field label + optional **PIN code** (auto-qualify Delhi vs Haryana) | `SS` | ⬜ | S | code | Tiny CRO tweaks lifted from their form. |
| **Housing Societies** segment page (RWA/apartments, ₹18,000/kW society subsidy) | `SS` `A§9` | ⬜ | M | content | SS splits Homes / Societies / Commercial. Big Delhi RWA market. |
| **Refer & Earn** line/program | `SS` | ⬜ | S | decision | Cheap word-of-mouth lever they run in-footer. |
| **Hindi toggle** for Home + Subsidy Guide | `A21` `A9` | ⬜ | L | code | Tagline is already Hinglish; 45+ roof-owning decision-makers prefer Hindi. |
| **EMI / financing page** with named bank/NBFC partners | `A25` | ⬜ | M | content | SS pushes "0% EMI 6 months, subsidy = down payment" hard. |
| **"Missed-call / request callback"** option | `A28` `A§5` | ⬜ | S | code | Large slice of the demographic prefers this to forms. |
| **Price-intent blog cadence** (2/mo: "3kW/5kW solar price Delhi 2026") | `A23` | 🟡 | ongoing | content | 3 posts shipped; keep the cadence — proven ranking cluster. |
| Numbers/impact bar (installs · kW · subsidies disbursed) | `A6` `SS` | ⬜ | S | content | Once counts exist; frame small numbers as momentum ("Founded 2025 · founder-supervised"). |

### 📊 P2 — Needs a manual pass (not code)

Lighthouse accessibility + PageSpeed mobile (LCP < 2.5s), image WebP/AVIF < 150 KB once photos land, alt text with locality keywords. `A12` `A13` `A§10`

---

## 3. SolarSquare teardown — the evidence behind the "steal" items

**The one big idea:** they *never lead with a price*. The hero sells **"Switch to solar at ₹0 Investment"** — *"govt subsidy covers your down payment, savings cover your EMIs"* — and the transparent pricing table lives lower down. Framing sells; the table reassures.

**Worth stealing (why it works for the leader):**
1. **₹0-investment framing** over sticker price → our `/pricing` page.
2. **Dated hyper-local numbers** — *"1,706 kWp across 287 properties in Gurgaon, as of 20 Apr 2026."* Precise + dated = believable.
3. **Every testimonial leads with the bill delta** — "₹4,000 → ₹300", "₹18,000 → ₹0", "70% drop" — + a face or 30-sec video.
4. **Anxiety content, quantified** — 1-yr ₹1 lakh leak warranty, "3 kW runs a 1.5-ton AC", storm-tested to 170 km/h.
5. **Monitoring app** pushed hard as a differentiator.
6. **Proprietary branding of commodities** — WindPro Mount™, GoodZero™ money-back guarantee → *name/package our 5-yr maintenance*.
7. **Explicit timelines** — home visit ≤2 days · 3D design 2–3 days · install 1 day · DISCOM ~1 month · **40–45 days total**.
8. **Free 3D design** risk-reversal — "you only proceed if happy."
9. Small CRO: **"WhatsApp Number"** field label, **PIN-code** geo-qualification, **Refer & Earn**, **In-the-News** press strip.

**Where we already win (protect the moat — the audit's "out-local, out-care" strategy):**
- We name **DHBVN**; their Gurugram page doesn't.
- We explain **Haryana-vs-Delhi subsidy** honestly; they give one generic number.
- We **name real panel brands** (Adani, Vikram); they hide everything behind "SolarSquare Blue".
- Our city testimonials are **city-tagged and real**; theirs are generic India-wide.
- **BSES/GBI/Delhi-specific depth** national players structurally can't match.

**Do NOT copy:**
- **Vanity/zeroed metrics** — their live counters literally rendered "0 Homes Solarized" (a bug). Never fabricate scale.
- **Hiding brands** — our transparency is a genuine edge over the #1 player.
- **Generic national boilerplate** — their city pages are ~75% reused; ours shouldn't be.

---

## 4. Explicitly parked / skip (audit-endorsed)

**Parked (need assets/decision):** install photos · before/after bill · domain email · founder photo/video · customer video testimonials · `/pricing` (awaiting your prices).
**Skip for now (audit §12 🔴):** chatbot · mobile app · 3D roof tool · full blog translation · **Noida/Ghaziabad pages** (different DISCOM — we don't serve there).

---

## 5. Suggested sequencing

**Sprint A — free code wins (no assets needed):** ~~calculator→WhatsApp capture~~ ✅ · anxiety FAQs (roof area, leakage, AC, monitoring, cleaning) · testimonial bill-delta reformat · `/service-areas` hub · "WhatsApp Number"/PIN form tweaks · customer-first headlines.

**Sprint B — you supply content:** `/pricing` page (prices) · name inverter/battery brands + app · per-city pricing/install numbers · service SLA + response-time promise.

**Sprint C — asset-dependent (the audit's real "trust layer"):** real photos · before/after bill · founder photo/story · GBP review loop · first customer videos.

**Sprint D — bigger builds:** Housing Societies page · EMI/financing page · Hindi Home + Subsidy Guide · missed-call callback · Refer & Earn.
