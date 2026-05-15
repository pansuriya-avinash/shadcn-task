"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { TestimonialCardProps } from "./types";
import { txSpring } from "@/lib/animation";

const StarRating = ({ rating }: { rating: number }) => {
  const uid = React.useId().replace(/:/g, "");

  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => {
        const fill =
          rating >= i + 1 ? "full" : rating >= i + 0.5 ? "half" : "empty";

        const halfId = `half-${uid}-${i}`;

        return (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className="size-5 sm:size-6"
            aria-hidden="true"
          >
            <defs>
              {fill === "half" && (
                <linearGradient id={halfId} x1="0" x2="1" y1="0" y2="0">
                  <stop
                    offset="50%"
                    stopColor="hsl(var(--color-amber, 38 92% 50%))"
                  />
                  <stop offset="50%" stopColor="#e5e7eb" />
                </linearGradient>
              )}
            </defs>
            <path
              d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.62l5.34-.78z"
              fill={
                fill === "full"
                  ? "#E8A020"
                  : fill === "half"
                    ? `url(#${halfId})`
                    : "#e5e7eb"
              }
            />
          </svg>
        );
      })}
    </div>
  );
};

const TestimonialCard = ({ testimonial, className }: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={txSpring}
      className={cn("w-full max-w-full", className)}
    >
      <Card
        className={cn(
          "w-full h-62",
          "overflow-hidden",
          "bg-theme-card border border-primary",
          "shadow-none",
        )}
      >
        <CardContent className="p-5 sm:p-6">
          <div className="flex items-center gap-3 mb-5">
            <Avatar
              className={cn(
                "size-11 border border-border bg-secondary sm:size-12",
              )}
            >
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback className="text-xs font-medium text-muted-foreground">
                {testimonial.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <h3 className="text-sm font-bold text-card-foreground sm:text-base">
              {testimonial.name}
            </h3>
          </div>

          <StarRating rating={testimonial.rating} />

          <p className="text-sm leading-relaxed text-card-foreground sm:text-base mt-4">
            {testimonial.feedback}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
