"use client";

import { BlurFade } from "@/components/ui/blur-fade";

const projects = [
  {
    label: "Roof Replacement",
    image: "/McLaughlin-Contracting-Website/images/roof-replacement.png",
  },
  {
    label: "Skylight Install",
    image: "/McLaughlin-Contracting-Website/images/skylight-install.png",
  },
  {
    label: "Siding Project",
    image: "/McLaughlin-Contracting-Website/images/siding-project.png",
  },
  {
    label: "Gutter System",
    image: "/McLaughlin-Contracting-Website/images/gutter-system.png",
  },
  {
    label: "Chimney Flashing",
    image: "/McLaughlin-Contracting-Website/images/chimney-flashing.png",
  },
  {
    label: "Storm Repair",
    image: "/McLaughlin-Contracting-Website/images/storm-repair.png",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <BlurFade inView>
          <h2 className="font-heading text-6xl text-balance mb-4">OUR WORK</h2>
          <p className="text-muted-foreground font-light max-w-lg mb-12">
            A selection of recent projects across The Poconos area.
          </p>
        </BlurFade>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {projects.map((project, index) => (
            <BlurFade key={project.label} delay={0.08 * index} inView>
              <div className="group relative overflow-hidden rounded-lg border border-border bg-secondary aspect-video cursor-pointer">
                {/* Project image */}
                <img
                  src={project.image}
                  alt={project.label}
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="font-heading text-xl text-white tracking-wide">
                    {project.label}
                  </span>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="text-primary hover:text-primary/80 transition-colors cursor-pointer font-light"
          >
            Request a Free Estimate for Your Project &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
