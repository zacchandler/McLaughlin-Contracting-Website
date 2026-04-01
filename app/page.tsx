import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { SpecialOffers } from "@/components/special-offers";
import { SocialProof } from "@/components/social-proof";
import { Services } from "@/components/services";
import { Trust } from "@/components/trust";
import { Gallery } from "@/components/gallery";
import { ServiceArea } from "@/components/service-area";
import { EstimateForm } from "@/components/estimate-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SpecialOffers />
        <SocialProof />
        <Services />
        <Trust />
        <Gallery />
        <ServiceArea />
        <EstimateForm />
      </main>
      <Footer />
    </>
  );
}
