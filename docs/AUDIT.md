# Raytrix Energy — Website Audit & Conversion Review
**Reviewed:** raytrixenergy.com · July 2026
**Perspective:** First-time visitor (homeowner, ₹10–20L income, ₹5–20K monthly bill, knows little about solar)

**Scope note:** This audit is based on a full content, structure, and metadata crawl of the live site (Home, About, Residential, Calculator, Subsidy Guide, Our Work, Contact). Rendered visual design, animation, page speed metrics, and mobile touch behavior could not be measured remotely — those items are flagged for a manual Lighthouse + real-device check.

---

## 1. First Impression (First 5 Seconds)

**What I notice first:** "Har Chhat Pe Solar" → "Powering Delhi, One Rooftop at a Time" → ₹1,08,000 subsidy → MNRE/BSES/PM Surya Ghar badges. This is genuinely good. Within 5 seconds I know: what you do, where you do it, and the single biggest financial hook (the subsidy amount). Most small EPC sites fail this test. Yours passes.

**Is it obvious what the company does?** Yes, immediately. The value proposition (end-to-end + subsidy assistance + 5 years free maintenance) is stated in the first two lines.

**Would I trust this company?** Partially — and this is where it breaks down. The credential badges (BSES Registered, MNRE Enrolled, PM Surya Ghar Empaneled) do real work. But within 30 seconds of scrolling, three things undermine it:

1. **"Project Photo" placeholder blocks in the Our Work section.** This is the single most damaging thing on the entire website. A solar EPC company showing grey placeholder boxes where installation photos should be reads as either (a) brand new with no real installs, or (b) fake. Either interpretation kills the sale. For a ₹1.5–2 lakh purchase decision, real rooftop photos are non-negotiable.
2. **raytrixenergy@gmail.com.** You own the domain. A Gmail address on a company asking for a 6-figure purchase signals "small operator" and contradicts the professional badges above it.
3. **No physical address anywhere.** Just "Delhi, India" and a Plus Code map pin. Customers doing a ₹2 lakh transaction want to know there's an office they can walk into if something goes wrong.

**Premium feel:** The information architecture and copy suggest a clean, modern build (Next.js). It doesn't read like a cheap template — the content is too specific for that (BSES billing details, GBI rates, SPD/lightning arrestor specifics). But the placeholder images make it *feel* unfinished, which is worse than templated.

**Visual hierarchy (from structure):** Correct order — hero → subsidy hook → credentials → services → process → savings → social proof → projects → blog → form. Textbook. Nothing structurally distracting.

**Score: 6.5/10.** Would be 8.5/10 with real photos, a domain email, and an address. The foundation is strong; the trust finishing is missing.

---

## 2. User Experience (UI/UX)

### What's working
- **Navigation:** Logical, shallow (max 2 levels), every important page reachable in one click. Services dropdown is clean. Breadcrumbs on inner pages. Good.
- **Sticky Call + WhatsApp buttons** persist site-wide. This is the highest-value mobile pattern for Indian lead-gen and you already have it.
- **Lead form is short** (Name, Phone, Property Type, Location) — 4 fields is close to optimal for Indian mobile users.
- **WhatsApp deep-link has a pre-filled message** ("Hi, I'm interested in rooftop solar installation…") — removes friction, smart.
- **Calculator exists and requires no sign-up** — a genuine differentiator vs most local competitors.

### Friction points

| # | Issue | Severity | Why it hurts conversions | Fix |
|---|-------|----------|--------------------------|-----|
| 1 | "Project Photo" placeholders on Home + Our Work | **Critical** | Destroys credibility at the exact moment (social proof section) the visitor is deciding whether you're real. Visitors will assume zero completed installs. | Replace with real photos this week, even phone-shot ones. Wide shot + close-up of panels + net meter + happy customer if possible. |
| 2 | Gmail contact email | **Critical** | Contradicts "registered company" positioning; some corporate/society buyers will disqualify you on this alone. | Set up hello@raytrixenergy.com (free with most DNS/Workspace setups), keep Gmail as backup forward. |
| 3 | No office address | **High** | ₹2L purchase + 25-year relationship demands a locatable business. Also blocks Google Business Profile verification and local SEO. | Publish full address in footer + Contact page. If home office, use it — an address beats no address. |
| 4 | Founder shown as "MK" initials avatar | **High** | The About page's whole trust play is "founder personally oversees every install" — then no face. Feels evasive. | Real photo of Mayank, ideally on a rooftop with an install behind him. |
| 5 | Testimonials have no photos, no source, no verification | **High** | Text-only quotes with initial avatars are indistinguishable from fabricated ones. Skeptical Delhi buyers assume fake by default. | Link each to a Google Review; add customer photos with system (even from behind/at distance if privacy is a concern); add video testimonial (30-sec phone video). |
| 6 | Calculator results don't capture the lead | **High** | Your best-intent visitors (they entered their bill!) get an answer and can leave. You lose your hottest leads. | After showing results, add: "Get this exact quote on WhatsApp →" with the calculated numbers pre-filled in the wa.me message. |
| 7 | Form has no electricity-bill field | **Medium** | You can't pre-qualify or size leads before calling. Wastes sales time. | Add an optional dropdown: "Monthly bill: <₹2K / ₹2–5K / ₹5–10K / ₹10K+". Optional = no friction added. |
| 8 | No form success/failure state visible; no stated follow-up promise on homepage form | **Medium** | Users who submit and see nothing assume it broke. | Confirmation message: "Thanks! We'll call you within 4 working hours." Then actually do that. |
| 9 | No Hindi option | **Medium** | Your Delhi target demographic includes many Hindi-preferring decision-makers (especially the 45+ homeowner who actually owns the roof). Your tagline is already Hinglish — the site should follow. | Add a Hindi toggle for at least Home + Subsidy Guide. |
| 10 | "Services" nav item lands on Residential directly | **Low** | Minor ambiguity; commercial visitors take an extra step. | Acceptable; or make Services a non-link parent. |
| 11 | Email rendered as raw mailto / social links shown as raw URLs in footer | **Low** | Looks unpolished in some renderings. | Use icons + labels. |
| 12 | Accessibility unknowns: contrast ratios, focus states, alt text on real images | **Medium** | WCAG failures hurt both usability and SEO. | Run Lighthouse accessibility audit once real images are in; ensure every image has descriptive alt text ("3kW rooftop solar installation in Greater Kailash Delhi" — doubles as SEO). |
| 13 | Page speed unverified | **Medium** | Next.js is usually fast, but hero images/fonts can tank LCP on 4G. | Run PageSpeed Insights mobile; target LCP < 2.5s. Compress all install photos to WebP < 150KB. |

---

## 3. Customer Journey (Naive Homeowner Walkthrough)

Playing the persona strictly — ₹12L income, ₹8,000/month BSES bill, knows nothing:

| Question | Answered? | Where / Gap |
|---|---|---|
| Why should I install solar? | ✅ Yes | Savings section: ₹50K/year, 3–4 yr payback. Clear and concrete. |
| Why this company? | ⚠️ Partially | Credentials + end-to-end + 5yr free maintenance are stated. But no "why us vs the other 50 vendors" — no install count, no years in business, no rating. |
| Can I trust them? | ❌ Weak | Placeholder photos, Gmail, no address, unverifiable testimonials. This is the journey-breaking step. |
| How much subsidy? | ✅ Excellent | ₹1,08,000 broken into Central ₹78K + State ₹30K + GBI. Best-in-class clarity. |
| How much will I save? | ✅ Yes | ₹50K/year figure + calculator. Good. |
| Payback period? | ✅ Yes | 3–4 years, stated on homepage. |
| What products do they use? | ⚠️ Partial | Panels: Adani, Vikram — good, named brands. **Inverters: "String, Micro, Hybrid" — no brand names.** The inverter is the component that fails first; savvy buyers will ask. Name your inverter brands (e.g., if you use Growatt/Deye/Luminous/GoodWe — say so). Battery brand also unnamed. |
| What happens after installation? | ✅ Yes | 5 years free maintenance, 3 visits/year, itemized. Strong. |
| Who handles approvals? | ✅ Excellent | Repeatedly: "we handle BSES, DISCOM, net metering, subsidy paperwork." This is your best-articulated message. |
| What warranty? | ✅ Yes | Full warranty table on Residential page (25yr panels, 5–10yr inverter, etc.). Very good — most competitors hide this. |
| What if something goes wrong? | ❌ No | No service SLA ("we respond to breakdowns within X hours"), no complaint process, no what-happens-if-panel-underperforms. For a 25-year product this is a real gap. |

**Additional unanswered questions a real customer will have:**
- What does it actually cost me *today*, out of pocket, before the subsidy arrives 2–3 months later? (Cash-flow reality — you mention loans but not the bridge.)
- How much roof area do I need? (The #1 question Delhi homeowners ask. "1kW ≈ 80–100 sq ft" — say it.)
- Will it damage/leak my roof? (Waterproofing anxiety is huge; address the mounting method.)
- Can I run ACs on it? (Translate kW into appliances.)
- What if I sell the house?
- Do I need to clean the panels myself between your visits?
- Monsoon/dust performance in Delhi specifically (you cover clouds in FAQ — good — but Delhi dust/pollution soiling is the local version of this question).
- Is there a monitoring app to see my generation?

---

## 4. Trust & Credibility

**Present:** ✅ MNRE/BSES/PM Surya Ghar badges · ✅ 4 testimonials · ✅ 4 case studies with locations/sizes/savings · ✅ CIN/GST/MSME registrations mentioned · ✅ Founder named · ✅ Warranty table · ✅ Service-area honesty (openly stating Faridabad/Gurgaon = non-subsidy — this candor is actually a trust asset)

**Missing (in priority order):**

1. **Real installation photos** — the foundation of everything else. (Critical)
2. **Google Business Profile + review widget** — embed live Google Reviews with star rating on the homepage. Nothing you write about yourself will ever beat 15 real Google reviews. (Critical)
3. **Office address** (Critical)
4. **Founder photo** and ideally a 60-second founder video: "I'm Mayank, I personally inspect every install" — for an OPC, the founder IS the brand; lean into it instead of hiding it. (High)
5. **Actual registration numbers** — display the CIN, GST number, and PM Surya Ghar vendor ID, not just "Registered." Verifiable > claimed. (High)
6. **Numbers bar** — "X installations · X kW commissioned · X subsidies disbursed." Even small honest numbers ("27 rooftops and counting") beat vague claims. If the numbers are tiny, frame as momentum: "Founded 2025 · 4 installs in our first quarter · founder-supervised." (High)
7. **Customer photos/videos** with testimonials, or at minimum links to the Google review. (High)
8. **Brand partner logos** — Adani Solar, Vikram Solar logos (with permission), inverter brand logos. (Medium)
9. **Before/after electricity bills** — a real BSES bill showing ₹4,200 → ₹180 (name redacted) is the most persuasive single image in residential solar marketing. (High)
10. **Team/installer photos** — counters the "one-man company" doubt that "OPC" raises. (Medium)
11. **Subsidy disbursement proof** — screenshot of a customer's DBT credit (redacted). You're selling "we get you the subsidy" — prove one arrived. (High)

**Honest note on the testimonials:** All four are polished, all South Delhi, no surnames verification, initials avatars, and the project dates (Feb–Mar 2026) plus "More projects will be added" suggest a very young company. If these testimonials are real, verify them visibly (Google review links). If any are illustrative/placeholder, remove them — a fake-looking testimonial does more damage than no testimonial, and fabricated reviews create legal/reputation risk.

---

## 5. Call-to-Action (CRO)

**What exists:** Get Free Consultation (hero, sections, footer) · Calculate Your Savings · sticky Call Now + WhatsApp · header Call/WhatsApp · CTAs after every major section.

**Assessment:**
- **Frequency & placement: Good.** Every scroll depth has an action. No major dead zones on the homepage. Inner pages (About, Subsidy) also end with dual CTAs. This is above average.
- **Sticky mobile CTAs: Present.** Keep them.
- **Dead zones found:**
  - **Blog articles** (highest-SEO-traffic pages) — verify each post ends with a contextual CTA ("Want this handled for you? Get a free site survey") and has a sticky WhatsApp button. Blog readers are your cheapest leads.
  - **Calculator results** — as noted, the single biggest CRO hole on the site. The moment of maximum intent has no capture.
  - **Testimonials section** — add a CTA directly beneath ("Join them → Book a free site survey").

**Copywriting critique:** "Get Free Consultation" is serviceable but generic — every competitor says it. "Consultation" also sounds like a sales call. Alternatives that convert better in this category:

| Current | Stronger |
|---|---|
| Get Free Consultation | **Book a Free Site Survey** (concrete, valuable, low-pressure) |
| Calculate Your Savings | **See My Savings in 30 Seconds** (time-bound, first-person) |
| Get Free Quote | **Get My Exact Price on WhatsApp** (channel + specificity) |
| Chat on WhatsApp | **WhatsApp Us — Reply in Minutes** (adds speed promise) |
| (subsidy banner) | **Check If My Home Qualifies for ₹1,08,000 →** (curiosity + eligibility framing beats generic "Subsidy Guide") |

First-person CTA copy ("my savings", "my home") consistently outperforms second-person in A/B tests — it mirrors the visitor's internal monologue.

**Add one thing:** a "Missed-call / Request callback" option. A large slice of your demographic prefers "give us a missed call, we call back" over forms.

---

## 6. Homepage Content — Section by Section

| Section | Verdict | Notes |
|---|---|---|
| Hero ("Powering Delhi…") | **Keep + Improve** | Copy is strong. Add: real install photo as hero background (not stock), and a trust line under CTAs ("★ 4.9 on Google · 30+ rooftops"). Consider leading with the customer outcome: "Cut Your BSES Bill by 90%" as H1, with "Powering Delhi…" as the brand line. |
| Subsidy banner (₹1,08,000) | **Keep** | Your best hook. Consider making it a mini-calculator teaser: "3kW home? You get ₹1,08,000." |
| Why Choose Raytrix (6 cards) | **Improve** | Content is right but it's feature-led. Reframe each as customer benefit: "BSES Registered" → "Your subsidy application won't get rejected — we're a registered BSES vendor." |
| Our Services (3 cards) | **Keep** | Fine. Residential should visually dominate since it's your lead engine. |
| How It Works (6 steps) | **Keep** | Excellent. Add expected timeline per step ("Survey: within 48 hrs", "Install: 1–2 days", "Subsidy credited: 60–90 days") — managing the subsidy-wait expectation upfront prevents post-sale friction and builds honesty equity pre-sale. |
| Savings at a Glance | **Keep + Improve** | Strong numbers. Add a simple visual (bill before/after bar). Clarify "GBI ₹3/unit" — a naive visitor doesn't know what GBI means; one plain-language line: "Delhi govt also *pays you* ₹3 for every unit you generate, for 5 years." |
| Testimonials | **Rewrite/verify** | See Section 4. Verify or replace. |
| Our Work | **Fix urgently** | Placeholders → real photos. Until photos exist, better to show 2 real projects than 4 with grey boxes. |
| Knowledge Hub (blog) | **Keep** | Genuinely good, locally specific topics ("BSES net metering", "flat owners subsidy"). This is your SEO engine — keep publishing. |
| Contact form section | **Keep + Improve** | Add response-time promise + optional bill-size dropdown. |
| Footer | **Improve** | Add full address, registration numbers, replace raw URLs with icons. |

**Length:** No section is bloated. If anything, the homepage is missing one section: a short **"Delhi's most-asked solar questions"** FAQ block (5 questions with schema markup) — currently FAQs only live on inner pages.

---

## 7. Copywriting

**Overall: above average for this industry.** Concrete numbers everywhere (₹1,08,000, ₹50K/year, 3–4 years, 120 units/kW), plain English, benefit-oriented, honest caveats (warranty "depends on model" note is refreshingly honest). "Har Chhat Pe Solar" is memorable and locally resonant — use it more prominently, maybe as the hero eyebrow everywhere.

**Weaknesses:**
1. **Headlines are company-first, not customer-first.** "Why Choose Raytrix Energy?", "Our Services", "Our Work" — the customer's brain is asking "what do I get?" Rewrites:
   - "Why Choose Raytrix Energy?" → **"Why 30+ Delhi Homeowners Trusted Us With Their Rooftops"** (once you have the number)
   - "Your Savings at a Glance" → **"Your ₹8,000 Bill Could Be ₹500"**
   - "How It Works" → **"From First Call to Free Power in 6 Steps"** (you have "From consultation to free solar power" as a subhead — promote it)
   - "Ready to Go Solar?" → **"Find Out What Your Roof Is Worth"**
2. **"Enjoy Free Solar Power" (Step 6)** slightly overclaims — power isn't free until payback. Skeptics notice. "Start Generating Your Own Power" is bulletproof.
3. **Mission/Vision on About page** is corporate filler no customer reads. Replace with the founder's story in first person — why Mayank started this, one real anecdote. OPC + founder story is a strength if told humanly.
4. **FAQ copy is genuinely excellent** — specific numbers, direct answers. Extend the same FAQ quality to: roof area needed, roof waterproofing, monitoring app, breakdown response time, loan/EMI details.

---

## 8. SEO Audit

### Technical (verified from crawl)
| Item | Status |
|---|---|
| Meta titles | ✅ Present, unique per page, brand + keyword ("Rooftop Solar Installation in Delhi"). Homepage title could add "Price/Subsidy" intent terms. |
| Meta descriptions | ✅ Present, specific, include subsidy amount — good CTR bait. |
| H1s | ✅ One clear H1 per page. Homepage H1 "Powering Delhi, One Rooftop at a Time" is brand-poetry, not keyword-bearing — consider "Rooftop Solar Installation in Delhi with ₹1,08,000 Subsidy" as H1 and the tagline as a styled eyebrow. |
| H2 hierarchy | ✅ Logical section H2s → H3 cards. Clean. |
| URL structure | ✅ Excellent — /services/residential, /subsidy-guide/pm-surya-ghar, descriptive blog slugs. |
| OG/Twitter cards | ✅ Fully implemented (rare for small sites — well done). ⚠️ But inner pages reuse the homepage OG title/description — make them page-specific. |
| Internal linking | ✅ Good between subsidy guide/calculator/services. Add contextual in-body links from blog posts to service + calculator pages. |
| Sitemap/robots | ⚠️ Not verified in crawl — confirm /sitemap.xml exists and is submitted in Search Console. |
| Schema markup | ⚠️ Not detected in extracted content — add LocalBusiness (with address — another reason to publish one), Service, FAQPage, and Review schema. FAQPage schema on your subsidy/residential FAQs can win rich snippets for high-value queries. |
| Image ALT text | ⚠️ Unverifiable until real images exist. Write locality-rich alts. |

### On-page & content
- **Keyword targeting is coherent:** Delhi + rooftop solar + subsidy is consistently woven in without stuffing. Good discipline.
- **Blog strategy is exactly right** — "3kW solar panel price Delhi 2026", "BSES net metering process", "flat owners subsidy" are high-intent, low-competition, locally-specific. Keep this cadence (1–2/week if possible).
- **Biggest gap: no location/service-area pages.** You serve Faridabad and Gurgaon but have zero pages targeting them.

### Recommended keyword map

| Cluster | Primary keywords | Target page |
|---|---|---|
| Core commercial | solar panel installation in Delhi · rooftop solar Delhi · solar company in Delhi · best solar installer Delhi | Homepage + Residential |
| Price intent (highest converting) | 3kW solar system price Delhi · solar panel price Delhi with subsidy · 5kW solar cost Delhi · solar panel installation cost | Blog posts + a dedicated /pricing page |
| Subsidy intent | PM Surya Ghar subsidy Delhi · solar subsidy Delhi 2026 · PM Surya Ghar registered vendor Delhi · muft bijli yojana apply | Subsidy Guide cluster |
| Process intent | BSES net metering · solar net metering Delhi · solar panel loan India · how to apply solar subsidy | Blog |
| System type | on grid solar system Delhi · hybrid solar system for home · solar with battery backup Delhi | Residential + new sub-pages |
| Local expansion | solar panel installation Faridabad · solar company Gurgaon · rooftop solar Gurugram sector [X] | **New location pages** |
| Hyper-local Delhi | solar installation South Delhi / Dwarka / Rohini / Chhatarpur · solar installer near me | Location pages + GBP |
| Hinglish/voice | solar panel lagwane ka kharcha · chhat par solar panel · solar subsidy kaise milegi | Hindi blog posts |

---

## 9. Local SEO

**Important strategic flag first:** Your brief asks about ranking in Delhi, Faridabad, Gurugram, Noida, and Ghaziabad — but your site explicitly serves only Delhi, Faridabad, and Gurgaon, and excludes Noida/Ghaziabad. Do **not** build Noida/Ghaziabad pages until you actually serve them (UPPCL/PVVNL territory, different DISCOM processes). Ranking for areas you can't serve burns crawl budget and generates junk leads. Decide the expansion question first.

**For Delhi/Faridabad/Gurgaon:**
1. **Google Business Profile is the #1 missing asset.** "Solar installer near me" and map-pack results drive more local solar leads than organic listings. Requires a verifiable address. Set it up, choose category "Solar energy company," add photos weekly, and systematically request a Google review after every commissioning (send the direct review link on WhatsApp the day the subsidy is credited — peak-happiness moment).
2. **Create /service-areas/faridabad and /service-areas/gurgaon pages** — each with: local DISCOM context (DHBVN vs BSES), honest subsidy note (Haryana rules differ from Delhi — explain what Faridabad/Gurgaon customers actually get under PM Surya Ghar in Haryana rather than just "non-subsidy"), local projects, local testimonials, embedded map, unique 500+ words. *Note: PM Surya Ghar central subsidy is a national scheme — if your "non-subsidy" label reflects your vendor empanelment being Delhi/BSES-only, say that explicitly, because customers in Gurgaon will see "₹78,000 central subsidy" elsewhere and think your site is wrong.*
3. **NAP consistency:** same Name/Address/Phone on site footer, GBP, Justdial, IndiaMART, Sulekha, and social profiles.
4. **Locality signals in content:** your testimonials/projects already name Saket, GK, Malviya Nagar, Chhatarpur — good. Add area-tagged photo alt text and consider micro-pages or blog posts per major cluster (South Delhi, Dwarka, Rohini) once you have installs there.
5. **Local citations/backlinks:** RWA newsletters, Delhi solar directories, MNRE vendor lists, local news coverage of an install ("Chhatarpur family cuts bill 90%") — one local news backlink outranks ten directory listings.

---

## 10. Performance

Cannot measure remotely; the stack (Next.js, per meta tags) is a good starting point. Checklist for your manual audit:
- Run PageSpeed Insights (mobile) — target LCP < 2.5s, CLS < 0.1 on 4G.
- When real photos go in: **WebP/AVIF, max ~150KB each, explicit width/height** (prevents layout shift), lazy-load everything below the fold, use Next/Image.
- Self-host fonts or use `font-display: swap`.
- Defer any chat/analytics scripts; if you add a Google Reviews widget, lazy-load it.
- The Google Maps embed on /contact is a known page-weight offender — lazy-load it or use a static map image that opens Maps on click.
- Test the calculator on a mid-range Android — it's your most JS-heavy page.

---

## 11. Competitor Benchmark

Benchmarked mentally against the strongest residential players a Delhi customer will also Google: **Tata Power Solar, SolarSquare, Freyr Energy, Waaree, Loom Solar**, plus local BSES-empaneled vendors.

**Where you already match or beat the big players:**
- Subsidy clarity (₹1,08,000 breakdown) — clearer than most national sites, which stay vague to serve all states.
- Delhi-specific depth (BSES process, GBI, state subsidy) — national players can't match this specificity. **This is your moat. Double down.**
- Honest warranty table and service-area candor.
- No-signup calculator (SolarSquare and others gate theirs).

**Where the leaders beat you (gap list):**
| Feature they have | You | Priority |
|---|---|---|
| Thousands of real install photos & videos | Placeholders | Critical |
| Google rating displayed (4.5–4.9★, hundreds of reviews) | None | Critical |
| Install counters ("20,000+ homes") | None | High (use honest small numbers) |
| Video testimonials & YouTube presence | None | High |
| EMI/financing calculator with bank partners named | "Loan help" mentioned, no detail | High |
| App-based generation monitoring pitch | Not mentioned | Medium |
| Detailed pricing pages/packages | Price only inside one FAQ | High |
| Structural warranty / no-leak roof guarantee messaging | Not addressed | Medium |
| Chatbot / instant WhatsApp bot replies | Manual WhatsApp | Low |
| Hindi content | None | Medium |

**Positioning takeaway:** You cannot out-scale Tata or SolarSquare. You can out-*local* and out-*care* them: BSES specialist + founder-supervised + 5-year free maintenance (which genuinely beats most national players' 1–2 years) + faster/personal service. Make "Delhi's BSES rooftop specialist" the explicit positioning line.

---

## 12. Conversion Optimization — 28 Actions, Prioritized

### 🟢 High Impact + Low Effort (do in the next 2 weeks)
1. Replace all "Project Photo" placeholders with real photos (phone camera is fine).
2. Switch to hello@raytrixenergy.com everywhere.
3. Publish full office address (footer + contact + schema).
4. Create Google Business Profile; add review-request step to your post-commissioning process.
5. Add WhatsApp lead capture to calculator results (pre-filled with their numbers).
6. Add founder photo to About page.
7. Display CIN/GST/vendor registration numbers.
8. Add response-time promise under every form ("We call within 4 working hours").
9. Add optional bill-size dropdown to lead form.
10. Add trust strip under hero CTA (rating/install count once available).
11. Rewrite primary CTA to "Book a Free Site Survey."
12. Add FAQ block (5 Qs) to homepage with FAQPage schema.
13. Add a real before/after BSES bill image (redacted).
14. End every blog post with a contextual CTA + sticky WhatsApp.
15. Add timeline durations to the 6-step process.
16. Name your inverter and battery brands on the Residential page.

### 🟡 High Impact + High Effort (30–90 days)
17. Collect and publish 10+ Google reviews; embed live widget on homepage.
18. Shoot 2–3 customer video testimonials (30–60s, phone-shot, on the roof).
19. Build a transparent /pricing page (package cards: 2kW/3kW/5kW — price range, subsidy, net cost, EMI). Price transparency is the single biggest lead-quality improver in Indian solar.
20. Build Faridabad & Gurgaon service-area pages (with accurate Haryana subsidy explanation).
21. Add Hindi versions of Home + Subsidy Guide.
22. Implement full schema (LocalBusiness, Service, FAQ, Review).
23. Publish 2 blog posts/month targeting the price-intent keyword cluster.
24. Founder video for hero or About ("I check every installation myself").
25. Add EMI calculator / financing detail page with named bank/NBFC partners.

### ⚪ Low Impact + Low Effort
26. Footer polish: social icons instead of raw URLs, tagline, quick trust badges.
27. Lazy-load the contact-page map embed.
28. Add "missed call for callback" number option.

### 🔴 Low Impact + High Effort (skip for now)
- Chatbot, mobile app, 3D roof-design tool, English blog translation of every post, Noida/Ghaziabad expansion pages (until you actually serve them).

---

## 13. Final Scores

| Parameter | Score /10 | Note |
|---|---|---|
| UI Design | 7* | Structure/content-level; verify rendered polish manually |
| UX | 7.5 | Clean IA, short forms, sticky CTAs; calculator leak is the main flaw |
| Trust | **4** | Placeholders, Gmail, no address, unverified testimonials — the site's Achilles heel |
| SEO | 6.5 | Solid technical hygiene + excellent blog; missing schema, GBP, location pages |
| Copywriting | 7.5 | Specific, honest, benefit-aware; headlines too company-first |
| Mobile Experience | 7* | Sticky call/WA is right; needs device testing |
| Desktop Experience | 7* | Logical hierarchy; needs render check |
| Conversion Potential | 6 | Good CTA coverage undermined by trust gap + calculator leak |
| Local SEO | 4 | No GBP, no address, no location pages — mostly unbuilt |
| **Overall** | **6/10** | A genuinely well-architected site wearing an unfinished trust layer |

*\*Content/structure-based estimate; confirm with Lighthouse + real devices.*

---

## 14. Executive Summary

### Top 10 Critical Issues
1. Placeholder "Project Photo" boxes in the social-proof sections.
2. No Google Business Profile / zero visible Google reviews.
3. Gmail address instead of domain email.
4. No physical address published (also blocks GBP and LocalBusiness schema).
5. Calculator delivers results without capturing the lead.
6. Testimonials are unverifiable (no photos, no review links).
7. Founder has no photo despite founder-led positioning.
8. No pricing page — price intent is the highest-converting search traffic and you have one FAQ answer serving it.
9. No location pages for Faridabad/Gurgaon (and "non-subsidy" labeling there is confusing vs the national PM Surya Ghar scheme — clarify).
10. No structured data (FAQ/LocalBusiness/Review schema) = losing rich-result real estate to competitors.

### Top 10 Quickest Wins
Items 1–10 in Section 12's green list — all doable within two weeks, most within two days, at near-zero cost. Photos, email, address, GBP, calculator→WhatsApp capture, founder photo, registration numbers, response-time promise, bill-size field, CTA rewrite.

### Fix BEFORE spending a rupee on ads
Ads multiply whatever trust experience exists. Right now paid visitors would land, scroll to grey placeholder boxes, and bounce — you'd be paying to lose your reputation with your exact market. Minimum pre-ads checklist:
1. Real photos everywhere (site + GBP)
2. Domain email + published address
3. GBP live with ≥5 reviews
4. Calculator lead capture
5. Response-time promise + a tested follow-up process (call within hours, not days — solar leads go cold in 24h and shop 3–4 vendors)
6. A /pricing page, because your ads will inevitably attract "3kw solar price delhi" clicks

### Biggest lead-generation levers, next 90 days
1. **Google Business Profile + review engine** (weeks 1–4): the single highest-ROI channel for "solar installer near me" in Delhi. Free.
2. **Trust layer completion** (weeks 1–2): photos, address, founder, proof of subsidy disbursement.
3. **Calculator → WhatsApp pipeline** (week 2): converts existing traffic you're currently wasting.
4. **Price-intent content + /pricing page** (weeks 3–8): own "3kW/5kW solar price Delhi 2026" searches — your existing blog post proves you can rank for these.
5. **Review-fueled ads** (weeks 8–12, only after the above): start with Google Search ads on price + subsidy keywords, Delhi geo-fenced, landing on the pricing page — not the homepage.

### If I owned this website — the exact roadmap

**Week 1–2 · Stop the bleeding (₹0):** Photos in, Gmail out, address up, founder photo up, registration numbers displayed, CTA copy rewritten, response promise added. Set up GBP and message every past customer for a Google review.

**Week 3–4 · Plug the leaks:** Calculator WhatsApp capture, bill-size field, homepage FAQ + schema, blog CTAs, before/after bill image, process timelines, inverter brands named.

**Month 2 · Build the engine:** /pricing page with 3 package cards, Faridabad + Gurgaon pages (with corrected Haryana subsidy explanation), full schema rollout, 2 price-intent blog posts, first 2 video testimonials, Hindi homepage.

**Month 3 · Scale:** 10+ Google reviews live and embedded, founder video, EMI/financing page, Search ads pilot (₹15–20K test budget, price-intent keywords → pricing page), local PR push for one install story, and a monthly cadence: every commissioning = 1 photo set + 1 review request + 1 project card + 1 social post — turning operations into a self-feeding marketing loop.

**The one-line diagnosis:** This is a well-planned, well-written, honestly-positioned website that hasn't finished proving it's real. Your architecture and Delhi-specific content are better than 90% of local competitors — but a homeowner about to spend ₹2 lakh needs photographic, verifiable, locatable proof, and right now the site asks for trust it hasn't yet shown. Finish the trust layer first; everything else compounds on top of it.
