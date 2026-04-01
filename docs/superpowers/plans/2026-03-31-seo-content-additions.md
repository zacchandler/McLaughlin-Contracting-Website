# SEO & Missing Content Additions — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add FAQ section with schema markup, service area section, missing promos/services, and FAQ schema to layout — closing all SEO and content gaps vs. the old site.

**Architecture:** All new content lives as section components on the single-page site (no new routes). FAQ gets its own JSON-LD FAQPage schema injected via layout.tsx. Services grid gets 2 new cards. Special offers section gets added between Hero and Social Proof. Footer gets a service area link.

**Tech Stack:** Next.js 16, Tailwind v4, shadcn/ui, Magic UI (BlurFade), Lucide icons

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `components/faq.tsx` | **Create** | FAQ accordion section with 10 Q&As |
| `components/service-area.tsx` | **Create** | Service area section with counties + towns |
| `components/special-offers.tsx` | **Create** | Promotions banner (3 offers) |
| `components/services.tsx` | **Modify** | Add Roof Coating + Commercial Roofing cards |
| `app/page.tsx` | **Modify** | Compose new sections into page |
| `app/layout.tsx` | **Modify** | Add FAQPage JSON-LD schema |
| `components/footer.tsx` | **Modify** | Add Service Area link |
| `components/estimate-form.tsx` | **Modify** | Add $500 siding promo to form header |

---

### Task 1: Create FAQ Section Component

**Files:**
- Create: `components/faq.tsx`

- [ ] **Step 1: Create `components/faq.tsx`**

All 10 Q&As from the old site. Uses native `<details>`/`<summary>` for zero-JS accordion (accessible, SEO-friendly). BlurFade for entrance animation.

```tsx
"use client";

import { BlurFade } from "@/components/ui/blur-fade";

const faqs = [
  {
    q: "What are my options if I decide to re-roof?",
    a: "We offer various shingle types, colors, and warranty options from top brands like GAF, CertainTeed, TAMKO, and Owens Corning. We'll inspect your roof and develop a tailored plan that meets your specific needs, preferences, and budget.",
  },
  {
    q: "What types of roofing materials should I choose?",
    a: "The ideal material depends on your home's architecture, local climate, and personal preferences. We install fiberglass, metal, wood shake, and slate roofing systems. Our team will assess your property and recommend the best option for long-term protection.",
  },
  {
    q: "How can I tell if my roof has problems?",
    a: "Look for curling, cracked, or missing shingles, granule loss, bald spots, and wear around chimneys and vents. Roofs over 20 years old should be evaluated for replacement. We recommend scheduling inspections in spring and fall rather than waiting for a leak.",
  },
  {
    q: "How much will a new roof cost?",
    a: "Pricing depends on your roof's size, pitch, and chosen shingle type. Contact us at (570) 203-2754 for a free, comprehensive quote tailored to your specific situation — we beat any reasonable written estimate.",
  },
  {
    q: "How can I tell from the ground if I have hail damage?",
    a: "Identifying hail damage from ground level is challenging and often requires a trained eye. We offer complimentary inspections and can thoroughly evaluate potential hail damage and help with insurance claims.",
  },
  {
    q: "If my siding looks like it's rotting, do I need to replace it?",
    a: "Deteriorating siding should be addressed promptly to prevent moisture damage to your home's structure. Our team specializes in both roofing and siding services using premium brands like James Hardie, Everlast, and Mastic. We'll assess the condition and recommend repair or replacement.",
  },
  {
    q: "What types of roofing do you do?",
    a: "We offer installation and repair services for fiberglass, metal, wood shake, and slate roofing systems — both residential and commercial. Whatever your roof type, we have the expertise and manufacturer partnerships to handle it.",
  },
  {
    q: "What roofing damage is covered under a warranty?",
    a: "Coverage varies by manufacturer, but typically includes defects like excessive granule loss or improperly sealed shingles. We offer a lifetime shingle warranty and a 10-year workmanship guarantee. Our team can assist with repairs and help navigate warranty claims.",
  },
  {
    q: "Can a heavy snowstorm damage my roof?",
    a: "Heavy snow itself may not directly damage a well-maintained roof, but it can lead to leaks caused by ice damming — a common issue here in The Poconos. We can address ice dam damage and help prevent future occurrences with proper ventilation and ice-and-water shield installation.",
  },
  {
    q: "What is the longest lasting roofing material?",
    a: "Metal roofing typically offers the longest lifespan — 50 years or more with proper maintenance. Metal roofs are also highly sustainable, with nearly 100% recyclability. We install standing seam and metal panel systems alongside traditional shingle options.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <BlurFade inView>
          <h2 className="font-heading text-6xl text-balance mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-muted-foreground font-light max-w-lg mb-12">
            Answers to the most common roofing questions from Poconos homeowners.
          </p>
        </BlurFade>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <BlurFade key={index} delay={0.05 * index} inView>
              <details className="group rounded-xl border border-border bg-card overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-foreground hover:bg-secondary/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-sm leading-relaxed pr-4">{faq.q}</span>
                  <span className="shrink-0 text-primary transition-transform duration-200 group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm font-light text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </details>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### Task 2: Create Service Area Section Component

**Files:**
- Create: `components/service-area.tsx`

- [ ] **Step 1: Create `components/service-area.tsx`**

Lists 5 counties and key towns. Important for local SEO — Google indexes these town names for "roofer near [town]" queries.

```tsx
"use client";

import { MapPin } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const counties = [
  { name: "Pike County", towns: ["Hawley", "Tafton", "Milford", "Matamoras", "Rowland", "Conashaugh Lakes"] },
  { name: "Wayne County", towns: ["Honesdale", "Lake Ariel", "Waymart", "South Canaan", "Milanville"] },
  { name: "Monroe County", towns: ["Stroudsburg", "East Stroudsburg", "Mount Pocono", "Tannersville", "Pocono Pines", "Pocono Lake", "Tobyhanna", "Scotrun", "Swiftwater", "Pocono Manor", "Mountainhome", "Canadensis", "Delaware Water Gap", "Minisink Hills", "Bartonsville", "Brodheadsville", "Saylorsburg", "Cresco"] },
  { name: "Carbon County", towns: ["Jim Thorpe", "Lehighton", "Lansford", "Weatherly", "White Haven", "Summit Hill", "Nesquehoning", "Palmerton", "Weissport East"] },
  { name: "Lackawanna County", towns: ["Scranton", "Dunmore", "Old Forge", "Moosic", "Moscow", "Clarks Summit", "Carbondale", "Archbald", "Jessup", "Dickson City", "Peckville", "Olyphant", "Throop"] },
];

export function ServiceArea() {
  return (
    <section id="service-area" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <BlurFade inView>
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="size-8 text-primary" strokeWidth={1.5} />
            <h2 className="font-heading text-6xl text-balance">WHERE WE WORK</h2>
          </div>
          <p className="text-muted-foreground font-light max-w-2xl mb-12">
            McLaughlin Contracting proudly serves homeowners and businesses across
            5 counties in Northeast Pennsylvania and The Poconos region.
          </p>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {counties.map((county, index) => (
            <BlurFade key={county.name} delay={0.1 * index} inView>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-heading text-2xl text-primary mb-3">
                  {county.name.toUpperCase()}
                </h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  {county.towns.join(" · ")}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.5} inView>
          <p className="mt-8 text-sm text-muted-foreground font-light text-center">
            Don&apos;t see your town? We likely serve your area too.{" "}
            <a href="#contact" className="text-primary hover:text-primary/80 transition-colors cursor-pointer">
              Contact us
            </a>{" "}
            or call{" "}
            <a href="tel:+15702032754" className="text-primary hover:text-primary/80 transition-colors cursor-pointer">
              (570) 203-2754
            </a>{" "}
            to confirm.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
```

---

### Task 3: Create Special Offers Section Component

**Files:**
- Create: `components/special-offers.tsx`

- [ ] **Step 1: Create `components/special-offers.tsx`**

All 3 promotions from the old site in a prominent banner strip.

```tsx
"use client";

import { Tag } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const offers = [
  {
    title: "10% Off for New Customers",
    description: "First-time customers save 10% on any roofing service.",
    terms: "Must mention at time of scheduling. Cannot combine with other offers.",
  },
  {
    title: "$100 Off Gutter Installation",
    description: "Save $100 on a new seamless gutter system for your home.",
    terms: "Limited time. Must mention at time of scheduling. Cannot combine with other offers.",
  },
  {
    title: "$500 Off Siding Upgrade",
    description: "Save $500 on siding projects over $10,000 with James Hardie, Everlast, or Mastic.",
    terms: "Must mention at time of scheduling. Cannot combine with other offers.",
  },
];

export function SpecialOffers() {
  return (
    <section id="offers" className="py-16 bg-primary/5 border-y border-primary/10">
      <div className="mx-auto max-w-7xl px-6">
        <BlurFade inView>
          <div className="flex items-center gap-3 mb-8">
            <Tag className="size-6 text-primary" strokeWidth={1.5} />
            <h2 className="font-heading text-4xl">CURRENT SPECIALS</h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {offers.map((offer, index) => (
            <BlurFade key={offer.title} delay={0.1 * index} inView>
              <div className="rounded-xl border border-primary/20 bg-card p-6 h-full flex flex-col">
                <h3 className="font-heading text-2xl text-primary mb-2">
                  {offer.title.toUpperCase()}
                </h3>
                <p className="text-sm font-light text-foreground/80 leading-relaxed mb-3 flex-1">
                  {offer.description}
                </p>
                <p className="text-xs text-muted-foreground mb-4">{offer.terms}</p>
                <a
                  href="#contact"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "cursor-pointer w-fit"
                  )}
                >
                  Claim This Offer
                </a>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### Task 4: Add Roof Coating & Commercial Roofing to Services Grid

**Files:**
- Modify: `components/services.tsx`

- [ ] **Step 1: Add 2 new service objects to the `services` array**

Add `Roof Coating` (with `Paintbrush` icon — already imported) and `Commercial Roofing` (with `Shield` icon — already imported) to the end of the services array. Grid changes from `lg:grid-cols-4` to `lg:grid-cols-5` for 10 cards (2 rows of 5).

Services array additions:
```ts
{
  icon: Paintbrush,
  name: "Roof Coating",
  description: "Extend your roof's life with protective elastomeric and silicone coatings.",
},
{
  icon: Shield,
  name: "Commercial Roofing",
  description: "Flat roof, metal, and TPO systems for commercial and industrial buildings.",
},
```

Grid class change: `lg:grid-cols-4` → `lg:grid-cols-5`

---

### Task 5: Add FAQPage JSON-LD Schema to Layout

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Add a second `<script type="application/ld+json">` block after the existing RoofingContractor schema**

The FAQPage schema enables FAQ rich snippets in Google search results. Uses the same 10 Q&As from the FAQ component.

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What are my options if I decide to re-roof?", acceptedAnswer: { "@type": "Answer", text: "We offer various shingle types, colors, and warranty options from top brands like GAF, CertainTeed, TAMKO, and Owens Corning. We'll inspect your roof and develop a tailored plan that meets your specific needs, preferences, and budget." } },
        { "@type": "Question", name: "What types of roofing materials should I choose?", acceptedAnswer: { "@type": "Answer", text: "The ideal material depends on your home's architecture, local climate, and personal preferences. We install fiberglass, metal, wood shake, and slate roofing systems." } },
        { "@type": "Question", name: "How can I tell if my roof has problems?", acceptedAnswer: { "@type": "Answer", text: "Look for curling, cracked, or missing shingles, granule loss, bald spots, and wear around chimneys and vents. Roofs over 20 years old should be evaluated for replacement." } },
        { "@type": "Question", name: "How much will a new roof cost?", acceptedAnswer: { "@type": "Answer", text: "Pricing depends on your roof's size, pitch, and chosen shingle type. Contact us at (570) 203-2754 for a free, comprehensive quote — we beat any reasonable written estimate." } },
        { "@type": "Question", name: "How can I tell from the ground if I have hail damage?", acceptedAnswer: { "@type": "Answer", text: "Identifying hail damage from ground level is challenging. We offer complimentary inspections and can thoroughly evaluate potential hail damage and help with insurance claims." } },
        { "@type": "Question", name: "If my siding looks like it's rotting, do I need to replace it?", acceptedAnswer: { "@type": "Answer", text: "Deteriorating siding should be addressed promptly. Our team specializes in both roofing and siding services using premium brands like James Hardie, Everlast, and Mastic." } },
        { "@type": "Question", name: "What types of roofing do you do?", acceptedAnswer: { "@type": "Answer", text: "We offer installation and repair services for fiberglass, metal, wood shake, and slate roofing systems — both residential and commercial." } },
        { "@type": "Question", name: "What roofing damage is covered under a warranty?", acceptedAnswer: { "@type": "Answer", text: "Coverage varies by manufacturer, but typically includes defects like excessive granule loss or improperly sealed shingles. We offer a lifetime shingle warranty and a 10-year workmanship guarantee." } },
        { "@type": "Question", name: "Can a heavy snowstorm damage my roof?", acceptedAnswer: { "@type": "Answer", text: "Heavy snow may not directly damage a well-maintained roof, but it can lead to leaks caused by ice damming — a common issue in The Poconos." } },
        { "@type": "Question", name: "What is the longest lasting roofing material?", acceptedAnswer: { "@type": "Answer", text: "Metal roofing typically offers the longest lifespan — 50 years or more with proper maintenance. Metal roofs are also highly sustainable, with nearly 100% recyclability." } },
      ],
    }),
  }}
/>
```

---

### Task 6: Compose New Sections into Page & Update Footer

**Files:**
- Modify: `app/page.tsx`
- Modify: `components/footer.tsx`
- Modify: `components/estimate-form.tsx`

- [ ] **Step 1: Update `app/page.tsx`** — import and add the 3 new sections

Section order:
```
Nav → Hero → SpecialOffers → SocialProof → Services → Trust → Gallery → FAQ → ServiceArea → EstimateForm → Footer
```

- [ ] **Step 2: Update `components/footer.tsx`** — add FAQ and Service Area to quick links

Add to `quickLinks` array:
```ts
{ label: "FAQ", href: "#faq" },
{ label: "Service Area", href: "#service-area" },
```

- [ ] **Step 3: Update `components/estimate-form.tsx`** — add $500 siding promo text

Change the promo line from:
```
10% off for new customers • $100 off gutter installation
```
To:
```
10% off for new customers • $100 off gutter installation • $500 off siding over $10K
```

---

### Task 7: Verify Build & Type Check

- [ ] **Step 1: Run `npx tsc --noEmit`** — expect zero errors
- [ ] **Step 2: Run `npm run dev` and curl localhost:3000** — expect HTTP 200
- [ ] **Step 3: Verify FAQ schema** — check page source for `FAQPage` JSON-LD
