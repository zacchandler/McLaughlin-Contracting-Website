import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "FAQ | McLaughlin Contracting LLC | Roofing Questions Answered",
  description:
    "Answers to common roofing questions — materials, costs, warranties, storm damage, and more. McLaughlin Contracting serves The Poconos since 1957.",
  alternates: {
    canonical: "https://www.mclaughlincontractingllc.com/faq",
  },
};

export default function FAQPage() {
  return (
    <>
      <Nav />
      <main>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
