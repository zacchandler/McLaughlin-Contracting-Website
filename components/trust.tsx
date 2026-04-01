"use client";

import { buttonVariants } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";

export function Trust() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Stats */}
          <BlurFade inView>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="flex items-baseline gap-1">
                  <NumberTicker
                    value={68}
                    className="font-heading text-7xl text-primary"
                  />
                  <span className="font-heading text-5xl text-primary">+</span>
                </div>
                <p className="mt-2 text-sm font-light text-muted-foreground">
                  Years in Business
                </p>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <NumberTicker
                    value={1000}
                    className="font-heading text-7xl text-primary"
                  />
                  <span className="font-heading text-5xl text-primary">+</span>
                </div>
                <p className="mt-2 text-sm font-light text-muted-foreground">
                  Roofs Completed
                </p>
              </div>
              <div>
                <span className="font-heading text-7xl text-primary">10 Year</span>
                <p className="mt-2 text-sm font-light text-muted-foreground">
                  Workmanship Warranty
                </p>
              </div>
              <div>
                <span className="font-heading text-7xl text-primary">Lifetime</span>
                <p className="mt-2 text-sm font-light text-muted-foreground">
                  Shingle Guarantee
                </p>
              </div>
            </div>
          </BlurFade>

          {/* Story */}
          <BlurFade delay={0.2} inView>
            <h2 className="font-heading text-6xl text-balance mb-6">
              WHY FAMILIES TRUST US
            </h2>
            <p className="text-foreground/80 font-light leading-relaxed mb-4">
              McLaughlin Contracting has been protecting homes in The Poconos since
              1957. What started as a one-man operation has grown into a
              second-generation family business built on honest work, fair pricing,
              and craftsmanship that lasts.
            </p>
            <p className="text-foreground/80 font-light leading-relaxed mb-6">
              As PA Licensed Contractor #025665, we carry every certification that
              matters and partner with top manufacturers like GAF, CertainTeed,
              Owens Corning, James Hardie, and Everlast. We stand behind every job
              with a lifetime shingle warranty and 10-year workmanship guarantee —
              and we&apos;ll beat any reasonable written estimate.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#reviews"
                className={cn(buttonVariants({ variant: "outline" }), "cursor-pointer")}
              >
                See Customer Reviews
              </a>
              <a
                href="https://facebook.com/345668028621595"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "cursor-pointer text-primary"
                )}
              >
                Follow Us on Facebook
              </a>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
