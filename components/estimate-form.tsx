"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";

const serviceOptions = [
  "Roof Replacement",
  "Roof Repair",
  "Roof Inspection",
  "Maintenance",
  "Skylight Installation",
  "Gutter Installation",
  "Siding & Soffit",
  "Chimney Flashing",
  "Roof Coating",
  "Commercial Roofing",
  "Other",
] as const;

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[\d\s\-().+]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function EstimateForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("We'll be in touch within 24 hours!");
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="mx-auto max-w-3xl px-6">
        <BlurFade inView>
          <div className="text-center mb-12">
            <h2 className="font-heading text-6xl text-balance mb-4">
              GET YOUR FREE ESTIMATE
            </h2>
            <p className="text-muted-foreground font-light max-w-lg mx-auto">
              Tell us about your project. We respond to every request within 24
              hours — often the same day.
            </p>
            <p className="mt-2 text-sm text-primary font-medium">
              10% off for new customers &bull; $100 off gutter installation &bull; $500 off siding over $10K
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.15} inView>
          <div className="relative rounded-xl border border-border p-8 bg-background overflow-hidden">
            <BorderBeam
              size={300}
              duration={10}
              colorFrom="#D97B2E"
              colorTo="#F5C26B"
              borderWidth={2}
            />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John McLaughlin"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">{errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="(570) 555-0123"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Needed</Label>
                  <Select onValueChange={(value) => setValue("service", value as string)}>
                    <SelectTrigger className="cursor-pointer">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((s) => (
                        <SelectItem key={s} value={s} className="cursor-pointer">
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-xs text-destructive">
                      {errors.service.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project — roof type, approximate size, timeline, etc."
                  rows={4}
                  {...register("message")}
                />
              </div>

              <Button
                type="submit"
                className="w-full cursor-pointer text-base"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send My Request"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <a
                href="tel:+15702032754"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <Phone className="size-4" />
                Or call us directly — (570) 203-2754
              </a>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
