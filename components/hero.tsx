"use client";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Particles } from "@/components/ui/particles";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-start justify-center px-6 md:px-24 overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0 -z-20 bg-[oklch(0.08_0.005_260)]" />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 -z-20 size-full object-cover opacity-60"
      >
        <source src="/McLaughlin-Contracting-Website/images/drone-footage.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-19 bg-black/35" />

      {/* Particles */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={40}
        color="#D97B2E"
        ease={100}
        size={0.6}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        {/* Overline badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 backdrop-blur-sm">
          <AnimatedShinyText className="text-sm font-light tracking-wide">
            Serving The Poconos Since 1957
          </AnimatedShinyText>
        </div>

        {/* Headline */}
        <TextAnimate
          animation="blurIn"
          by="word"
          as="h1"
          className="font-heading text-7xl md:text-9xl leading-[0.9] tracking-tight text-foreground text-balance"
          once
        >
          WE PROTECT YOUR HOME.
        </TextAnimate>

        {/* Subhead */}
        <p className="mt-6 max-w-xl text-lg font-light text-muted-foreground leading-relaxed">
          68 years of roofing excellence in The Poconos. Licensed, insured, and
          still family-owned. We beat any reasonable written estimate.
        </p>

        {/* CTA row */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className={cn(buttonVariants({ size: "lg" }), "cursor-pointer text-base")}
          >
            Get a Free Estimate
          </a>
          <a
            href="#gallery"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "cursor-pointer text-base"
            )}
          >
            See Our Work
          </a>
        </div>
      </div>

      {/* Bottom trust strip */}
      <div className="absolute bottom-8 left-6 right-6 md:left-24 md:right-24 z-10">
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-light">
          <span className="flex items-center gap-1.5">
            <span className="text-primary">&#9733;</span> 68 Years Experience
          </span>
          <Separator orientation="vertical" className="h-4 hidden sm:block" />
          <span>Lifetime Warranty</span>
          <Separator orientation="vertical" className="h-4 hidden sm:block" />
          <span className="text-primary font-normal">10% New Customers</span>
          <Separator orientation="vertical" className="h-4 hidden sm:block" />
          <span>$100 Off Gutters</span>
        </div>
      </div>
    </section>
  );
}
