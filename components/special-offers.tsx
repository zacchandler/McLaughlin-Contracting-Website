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
    description:
      "Save $100 on a new seamless gutter system for your home.",
    terms: "Limited time. Must mention at time of scheduling. Cannot combine with other offers.",
  },
  {
    title: "$500 Off Siding Upgrade",
    description:
      "Save $500 on siding projects over $10,000 with James Hardie, Everlast, or Mastic.",
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
                <p className="text-xs text-muted-foreground mb-4">
                  {offer.terms}
                </p>
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
