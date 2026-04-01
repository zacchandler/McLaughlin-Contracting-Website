"use client";

import {
  Home,
  Wrench,
  Eye,
  Settings,
  Sun,
  Droplets,
  PanelTop,
  Paintbrush,
  Flame,
  Shield,
} from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";

const services = [
  {
    icon: Home,
    name: "Roof Replacement",
    description: "Full tear-off and install with GAF, CertainTeed & Owens Corning shingles.",
  },
  {
    icon: Wrench,
    name: "Roof Repair",
    description: "Fast leak detection and storm damage repair by licensed pros.",
  },
  {
    icon: Eye,
    name: "Roof Inspection",
    description: "Comprehensive inspections for home buyers and insurance claims.",
  },
  {
    icon: Settings,
    name: "Maintenance",
    description: "Preventive maintenance plans to extend the life of your roof.",
  },
  {
    icon: Sun,
    name: "Skylight Installation",
    description: "Brighten your home with expertly sealed, energy-efficient skylights.",
  },
  {
    icon: Droplets,
    name: "Gutter Installation",
    description: "Seamless gutters that protect your foundation. $100 off right now.",
  },
  {
    icon: PanelTop,
    name: "Siding & Soffit",
    description: "James Hardie, Everlast & Mastic premium siding installation.",
  },
  {
    icon: Flame,
    name: "Chimney Flashing",
    description: "Watertight chimney flashing repair and replacement.",
  },
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
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <BlurFade inView>
          <h2 className="font-heading text-6xl text-balance mb-4">WHAT WE DO</h2>
          <p className="text-muted-foreground font-light max-w-lg mb-12">
            Full-service roofing, siding, and exterior contracting for residential
            and commercial properties across The Poconos.
          </p>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <BlurFade key={service.name} delay={0.1 * index} inView>
              <MagicCard
                gradientColor="oklch(0.68 0.15 52 / 0.15)"
                className="h-full rounded-2xl"
              >
                <div className="p-6">
                  <service.icon className="size-8 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading text-2xl mb-2">{service.name}</h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 mt-4 text-sm text-primary hover:text-primary/80 transition-colors cursor-pointer"
                  >
                    Get estimate <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
