import * as React from "react";
import { ArrowRight } from "lucide-react";

import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import aboutUsImage from "@/public/about-img.jpg";
import DiagonalCut from "./ui/diagonalCut";
import { StatCardProps } from "./types";
import { stats } from "./constants";
import {
  FadeUp,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

const StatCard = ({ stat, className }: StatCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center",
        "gap-2.5 text-center",
        className,
      )}
    >
      <div className={cn("flex size-11 items-center justify-center ")}>
        {stat.icon}
      </div>

      <div className="space-y-1">
        <p
          className={cn(
            "text-xl font-semibold tracking-tight",
            "text-muted-foreground sm:text-2xl mb-2.5",
          )}
        >
          {stat.value}
        </p>

        <p
          className={cn(
            "text-base font-normal leading-6 text-muted",
            "sm:text-lg",
          )}
        >
          {stat.label}
        </p>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <section className={cn("relative w-full overflow-hidden", "bg-foreground")}>
      <DiagonalCut direction="top" />

      <div
        className={cn(
          "mx-auto max-w-4xl",
          "px-4 pt-6 pb-10 text-center",
          "sm:px-6 lg:px-8",
          "lg:pt-8",
        )}
      >
        <FadeUp>
          <SectionHeading
            align="center"
            eyebrow="About us"
            title="Our story & achievements"
            description={
              <>
                At Restaurant, every dish tells a story. With years of
                dedication and a passion for fine dining,
                <br />
                we've transformed the art of cooking into an unforgettable
                experience.
              </>
            }
            descriptionMaxWidth="4xl"
          />
        </FadeUp>

        <FadeUp delay={0.15}>
          <Button
            size="lg"
            className={cn(
              "mt-4 rounded-full",
              "bg-primary text-primary-foreground",
              "px-6 py-2 text-base font-medium",
              "shadow-lg shadow-primary/20",
              "hover:bg-primary/90",
            )}
          >
            Read more
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </FadeUp>
      </div>
      <div className={cn("relative mx-auto max-w-7xl", "px-0 sm:px-6 lg:px-8")}>
        <ScaleIn margin="-60px 0px">
          <Image
            src={aboutUsImage}
            alt="Kitchen"
            className={cn(
              "block w-full object-cover",
              "h-72 sm:h-96 lg:h-[520px]",
            )}
          />
        </ScaleIn>
        <StaggerContainer
          className={cn(
            "relative z-10 mx-auto",
            "-mt-10 sm:-mt-14",
            "grid grid-cols-2 sm:grid-cols-4",
            "gap-4 sm:gap-10",
            "px-4 py-4 sm:px-10 sm:py-8",
            "max-w-5xl",
            "overflow-hidden",
            "border border-border",
            "bg-background",
          )}
        >
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <StatCard stat={stat} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <DiagonalCut direction="top" className="mt-6 rotate-180" />
    </section>
  );
};

export default AboutUs;
