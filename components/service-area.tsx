"use client";

import { MapPin } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const counties = [
  {
    name: "Pike County",
    towns: [
      "Hawley", "Tafton", "Milford", "Matamoras", "Rowland",
      "Conashaugh Lakes",
    ],
  },
  {
    name: "Wayne County",
    towns: [
      "Honesdale", "Lake Ariel", "Waymart", "South Canaan", "Milanville",
    ],
  },
  {
    name: "Monroe County",
    towns: [
      "Stroudsburg", "East Stroudsburg", "Mount Pocono", "Tannersville",
      "Pocono Pines", "Pocono Lake", "Tobyhanna", "Scotrun", "Swiftwater",
      "Pocono Manor", "Mountainhome", "Canadensis", "Delaware Water Gap",
      "Minisink Hills", "Bartonsville", "Brodheadsville", "Saylorsburg",
      "Cresco",
    ],
  },
  {
    name: "Carbon County",
    towns: [
      "Jim Thorpe", "Lehighton", "Lansford", "Weatherly", "White Haven",
      "Summit Hill", "Nesquehoning", "Palmerton", "Weissport East",
    ],
  },
  {
    name: "Lackawanna County",
    towns: [
      "Scranton", "Dunmore", "Old Forge", "Moosic", "Moscow",
      "Clarks Summit", "Carbondale", "Archbald", "Jessup", "Dickson City",
      "Peckville", "Olyphant", "Throop",
    ],
  },
];

export function ServiceArea() {
  return (
    <section id="service-area" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <BlurFade inView>
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="size-8 text-primary" strokeWidth={1.5} />
            <h2 className="font-heading text-6xl text-balance">
              WHERE WE WORK
            </h2>
          </div>
          <p className="text-muted-foreground font-light max-w-2xl mb-12">
            McLaughlin Contracting proudly serves homeowners and businesses
            across 5 counties in Northeast Pennsylvania and The Poconos region.
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
                  {county.towns.join(" \u00B7 ")}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.5} inView>
          <p className="mt-8 text-sm text-muted-foreground font-light text-center">
            Don&apos;t see your town? We likely serve your area too.{" "}
            <a
              href="#contact"
              className="text-primary hover:text-primary/80 transition-colors cursor-pointer"
            >
              Contact us
            </a>{" "}
            or call{" "}
            <a
              href="tel:+15702032754"
              className="text-primary hover:text-primary/80 transition-colors cursor-pointer"
            >
              (570) 203-2754
            </a>{" "}
            to confirm.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
