"use client";

import * as React from "react";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";

import SectionHeading from "@/components/ui/section-heading";
import TestimonialCard from "@/components/testimonial-card";

import { cn } from "@/lib/utils";

import {
  SlideLeft,
  SlideRight,
} from "@/components/ui/motion";

import { TESTIMONIALS } from "./constants/testimonials.constants";

const Testimonials = () => {
  const [api, setApi] =
    React.useState<CarouselApi>();

  const handlePrevious = () => {
    api?.scrollPrev();
  };

  const handleNext = () => {
    api?.scrollNext();
  };

  return (
    <section
      id="testimonials"
      className={cn(
        "w-full overflow-hidden bg-background",
        "py-14 sm:py-20 lg:py-32"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl",
          "px-4 sm:px-6 lg:px-8"
        )}
      >
        <div
          className={cn(
            "grid min-w-0 items-center gap-10",
            "lg:grid-cols-[30%_70%]",
            "lg:gap-16"
          )}
        >
          {/* Left */}
          <SlideLeft className="flex flex-col space-y-6 sm:space-y-8">
            <SectionHeading
              align="start"
              eyebrow="Testimonials"
              title="Customers Feedback"
              description="Here's how our customers enjoyed our restaurant and the services we offer."
              descriptionMaxWidth="4xl"
            />

            <div className="flex items-center gap-3">
              <Button
                className={cn(
                  "rounded-full",
                  "border-none bg-secondary text-secondary-foreground",
                  "px-3 py-3",
                  "shadow-lg shadow-secondary/20",
                  "hover:bg-secondary/90"
                )}
                onClick={handlePrevious}
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="size-4" />
              </Button>

              <Button
                className={cn(
                  "rounded-full",
                  "border-none bg-primary text-primary-foreground",
                  "px-3 py-3",
                  "shadow-lg shadow-primary/20",
                  "hover:bg-primary/90"
                )}
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </SlideLeft>

          {/* Right */}
          <SlideRight className="mt-4 w-full min-w-0 lg:mt-0">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full min-w-0 overflow-hidden"
            >
              <CarouselContent className="ml-0">
                {TESTIMONIALS.map((testimonial) => (
                  <CarouselItem
                    key={testimonial.id}
                    className={cn(
                      "min-w-0 px-2",
                      "basis-full md:basis-1/2"
                    )}
                  >
                    <TestimonialCard
                      testimonial={testimonial}
                      className="h-full w-full"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </SlideRight>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;