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
                  <span className="shrink-0 text-primary transition-transform duration-200 group-open:rotate-45 text-xl leading-none">
                    +
                  </span>
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
