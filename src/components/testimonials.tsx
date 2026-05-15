"use client";

import * as React from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";

import SectionHeading from "@/components/ui/section-heading";
import TestimonialCard from "@/components/testimonial-card";

import { cn } from "@/lib/utils";
import { EASE_OUT_EXPO } from "@/lib/animation";
import { SlideLeft, SlideRight } from "@/components/ui/motion";
import { TESTIMONIALS } from "./constants/testimonials.constants";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev - 2 < 0 ? Math.max(TESTIMONIALS.length - 2, 0) : prev - 2,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 2 >= TESTIMONIALS.length ? 0 : prev + 2));
  };

  const visibleTestimonials = TESTIMONIALS.slice(
    currentIndex,
    currentIndex + 2,
  );

  return (
    <section className={cn("w-full bg-background", "py-18 sm:py-24 lg:py-36")}>
      <div className={cn("mx-auto max-w-7xl", "px-4 sm:px-6 lg:px-8")}>
        <div
          className={cn(
            "grid items-center gap-10",
            "lg:grid-cols-[45%_55%]",
            "lg:gap-16",
          )}
        >
          {/* ── Left column ───────────────────────────────────── */}
          <SlideLeft className="space-y-8">
            <SectionHeading
              align="start"
              eyebrow="Testimonials"
              title="Customers Feedback"
              description="here's how our customers enjoyed our restaurant and the services we offer."
              descriptionMaxWidth="4xl"
            />

            <div className="flex items-center gap-3">
              <Button
                className={cn(
                  "rounded-full",
                  "bg-secondary text-secondary-foreground",
                  "px-2.5 py-2.5 text-base font-medium",
                  "shadow-lg shadow-secondary/20",
                  "hover:bg-secondary/90",
                )}
                onClick={handlePrevious}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>

              <Button
                className={cn(
                  "rounded-full",
                  "bg-primary text-primary-foreground",
                  "px-2.5 py-2.5 text-base font-medium",
                  "shadow-lg shadow-primary/20",
                  "hover:bg-primary/90",
                )}
                onClick={handleNext}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </SlideLeft>

          {/* ── Right column — animated card grid ─────────────── */}
          <SlideRight>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
                className={cn("grid w-full gap-6", "md:grid-cols-2")}
              >
                {visibleTestimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    className="w-full max-w-full"
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </SlideRight>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
