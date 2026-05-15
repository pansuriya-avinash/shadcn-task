import OfferCard from "@/components/offer-card";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { OFFERS } from "./constants";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function Offers() {
  return (
    <section className={cn("w-full", "py-14 sm:py-16 lg:py-24")}>
      <div className={cn("mx-auto max-w-7xl", "px-4 sm:px-6 lg:px-8")}>
        <FadeUp>
          <div className={cn("mx-auto mb-12 max-w-3xl", "md:mb-16")}>
            <SectionHeading
              align="center"
              eyebrow="Offers"
              title="Explore our Offerings"
              description="Don't miss out on the dining experience. Reserve your table and indulge in a culinary journey today."
            />
          </div>
        </FadeUp>
        <StaggerContainer
          className={cn("grid gap-6", "lg:grid-cols-[1.2fr_0.8fr]")}
        >
          <StaggerItem>
            <OfferCard offer={OFFERS[0]} />
          </StaggerItem>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <StaggerItem>
              <OfferCard offer={OFFERS[1]} />
            </StaggerItem>
            <StaggerItem>
              <OfferCard offer={OFFERS[2]} />
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
