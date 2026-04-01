"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Service Area", href: "#service-area" },
  { label: "Free Estimate", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-[oklch(0.09_0.005_260)] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="font-heading text-3xl tracking-wide text-foreground">
                McLaughlin
              </span>
              <span className="text-xs font-light tracking-widest text-muted-foreground uppercase">
                Contracting LLC
              </span>
            </div>
            <p className="text-sm font-light text-muted-foreground leading-relaxed max-w-xs">
              Family-owned roofing and exterior contractor serving The Poconos
              since 1957. Fully licensed and insured.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com/345668028621595"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl mb-4">QUICK LINKS</h3>
            <div className="flex flex-col gap-1">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "justify-start text-muted-foreground hover:text-foreground cursor-pointer"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-xl mb-4">CONTACT</h3>
            <div className="space-y-3 text-sm font-light text-muted-foreground">
              <a
                href="tel:+15702032754"
                className="flex items-center gap-3 hover:text-foreground transition-colors cursor-pointer"
              >
                <Phone className="size-4 text-primary shrink-0" />
                (570) 203-2754
              </a>
              <a
                href="mailto:rick5040@yahoo.com"
                className="flex items-center gap-3 hover:text-foreground transition-colors cursor-pointer"
              >
                <Mail className="size-4 text-primary shrink-0" />
                rick5040@yahoo.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="size-4 text-primary shrink-0 mt-0.5" />
                <span>110 Hummingbird Lane, Tafton, PA 18464</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="size-4 text-primary shrink-0" />
                Mon – Sun: 6:00 AM – 6:00 PM
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            PA Lic #025665 &middot; &copy; {new Date().getFullYear()} McLaughlin
            Contracting LLC &middot; All rights reserved
          </p>
          <p className="font-light">
            Serving Hawley, Tafton, Lake Wallenpaupack, Honesdale, Milford &amp;
            all of The Poconos
          </p>
        </div>
      </div>
    </footer>
  );
}
