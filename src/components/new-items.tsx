import * as React from "react";

import { CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import SectionHeading from "./ui/section-heading";

import { cn } from "@/lib/utils";
import DishCard from "./ui/dish-card";
import { ArrowRight } from "lucide-react";
import { NEW_ITEMS } from "./constants";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const NewItems = () => {
  return (
    <section className={cn("w-full py-14 sm:py-16 lg:py-24")}>
      <div className={cn("mx-auto max-w-7xl", "px-4 sm:px-6 lg:px-8")}>
        <FadeUp>
          <SectionHeading
            align="center"
            eyebrow="New items"
            title="Fresh menu items"
            description={
              <>
                Explore our most recent additions to the menu. Each dish is
                designed to <br />
                delight your taste buds and provide a memorable dining
                experience.
              </>
            }
            descriptionMaxWidth="4xl"
          />
        </FadeUp>

        <StaggerContainer
          className={cn(
            "grid gap-6",
            "sm:grid-cols-2",
            "xl:grid-cols-3",
            "pt-12 lg:pt-24",
          )}
        >
          {NEW_ITEMS.map((item) => (
            <StaggerItem key={item.id}>
              <DishCard
                dish={item}
                cardContaine={
                  <CardContent className="p-4 sm:p-5 bg-foreground h-full">
                    <h3 className="mb-3 text-base font-semibold leading-snug text-card-foreground sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mb-1.5 text-base font-medium text-muted h-[60px]">
                      {item.description}
                    </p>

                    <Button
                      variant="outline"
                      size="lg"
                      className={cn(
                        "border-0 text-primary",
                        "bg-primary/10 hover:bg-primary/20 hover:text-primary",
                        "px-6 py-2",
                        "text-sm font-medium",
                        "rounded-full",
                        "mt-8",
                      )}
                    >
                      Full menu
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
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

export default NewItems;
