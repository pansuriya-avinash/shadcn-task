import * as React from "react";
import { CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import DishCard from "./ui/dish-card";
import { DISHES } from "./constants";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const PopularDishes = () => {
  return (
    <section className={cn("w-full bg-background", "py-14 sm:py-16 lg:py-24")}>
      <div className={cn("mx-auto max-w-7xl", "px-4 sm:px-6 lg:px-8")}>
        <FadeUp>
          <div
            className={cn("mx-auto mb-12 max-w-3xl", "sm:mb-16", "lg:mb-24")}
          >
            <SectionHeading
              align="center"
              eyebrow="Popular dishes"
              title="Favorite meals"
              description={
                <>
                  Discover our most loved creations crafted with passion,
                  <br /> fresh ingredients, and bold flavours that keep guests
                  coming back for more.
                </>
              }
              descriptionMaxWidth="2xl"
            />
          </div>
        </FadeUp>

        <StaggerContainer
          className={cn("grid gap-6", "sm:grid-cols-2", "xl:grid-cols-4")}
        >
          {DISHES.map((dish) => (
            <StaggerItem key={dish.id}>
              <DishCard
                dish={dish}
                cardContaine={
                  <CardContent className="p-4 sm:p-5 bg-foreground">
                    <h3 className="mb-3 text-base font-semibold leading-snug text-card-foreground sm:text-lg">
                      {dish.title}
                    </h3>

                    <Separator className="mb-3" />

                    <p className="mb-1.5 text-base font-medium text-muted">
                      {dish.category}
                    </p>

                    <p className="line-clamp-2 text-base font-normal leading-relaxed text-muted">
                      {dish.description}
                    </p>
                  </CardContent>
                }
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default PopularDishes;
