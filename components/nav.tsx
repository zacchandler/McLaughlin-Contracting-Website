"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "/faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-heading text-2xl tracking-wide text-foreground">
            McLaughlin
          </span>
          <span className="text-[11px] font-light tracking-widest text-muted-foreground uppercase">
            Contracting LLC
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "cursor-pointer")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+15702032754"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <Phone className="size-4" />
            (570) 203-2754
          </a>
          <a
            href="#contact"
            className={cn(buttonVariants({ variant: "default" }), "cursor-pointer")}
          >
            Free Estimate
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:+15702032754"
            className="text-primary cursor-pointer"
            aria-label="Call us"
          >
            <Phone className="size-5" />
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "cursor-pointer")}
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background border-border">
              <SheetTitle className="font-heading text-xl mb-6">Menu</SheetTitle>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "justify-start text-lg cursor-pointer"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className={cn(buttonVariants({ variant: "default" }), "mt-4 cursor-pointer")}
                  onClick={() => setOpen(false)}
                >
                  Free Estimate
                </a>
                <a
                  href="tel:+15702032754"
                  className="flex items-center gap-2 text-sm text-muted-foreground mt-4 px-4 cursor-pointer"
                >
                  <Phone className="size-4" />
                  (570) 203-2754
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
