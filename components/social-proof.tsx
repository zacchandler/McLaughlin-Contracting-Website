import { Marquee } from "@/components/ui/marquee";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Mike T.",
    location: "Hawley, PA",
    quote:
      "McLaughlin replaced our entire roof in two days. The crew was professional, cleaned up everything, and the price beat three other estimates.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    location: "Lake Wallenpaupack",
    quote:
      "We've used them twice now — once for a roof repair and once for new gutters. Honest pricing, great work, and they actually showed up on time.",
    rating: 5,
  },
  {
    name: "Jim & Linda R.",
    location: "Tafton, PA",
    quote:
      "Second generation and still the best roofers in the Poconos. The lifetime shingle warranty gives us real peace of mind.",
    rating: 5,
  },
  {
    name: "Dave P.",
    location: "Milford, PA",
    quote:
      "Had a leak that two other companies couldn't fix. McLaughlin found the problem in 20 minutes and had it sealed the same day.",
    rating: 5,
  },
  {
    name: "Karen W.",
    location: "Honesdale, PA",
    quote:
      "The 10% new customer discount made us try them. The quality of work is what made us recommend them to all our neighbors.",
    rating: 5,
  },
  {
    name: "Tom & Nancy B.",
    location: "Hamlin, PA",
    quote:
      "Our chimney flashing was a mess. They came out, gave a fair estimate, and did a perfect job. Couldn't be happier with the craftsmanship.",
    rating: 5,
  },
];

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <Card className="w-[350px] shrink-0 bg-card border-border">
      <CardContent className="p-6">
        <div className="flex gap-0.5 mb-3">
          {Array.from({ length: review.rating }).map((_, i) => (
            <span key={i} className="text-primary text-lg">
              &#9733;
            </span>
          ))}
        </div>
        <p className="text-sm font-light italic text-foreground/90 leading-relaxed mb-4">
          &ldquo;{review.quote}&rdquo;
        </p>
        <div>
          <p className="text-sm font-medium text-foreground">{review.name}</p>
          <p className="text-xs text-muted-foreground">{review.location}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function SocialProof() {
  return (
    <section id="reviews" className="py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-12">
        <h2 className="font-heading text-6xl text-balance">WHAT OUR CUSTOMERS SAY</h2>
        <p className="mt-3 text-muted-foreground font-light max-w-lg">
          Trusted by hundreds of families across The Poconos region.
        </p>
      </div>

      <Marquee pauseOnHover className="[--duration:35s] mb-4">
        {reviews.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover className="[--duration:35s]">
        {reviews.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </Marquee>
    </section>
  );
}
