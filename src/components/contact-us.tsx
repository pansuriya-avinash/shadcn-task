"use client";

import * as React from "react";
import Image from "next/image";

import  InfoCard from "@/components/info-card";
import SectionHeading from "@/components/ui/section-heading";
import DiagonalCut from "@/components/ui/diagonalCut";
import { cn } from "@/lib/utils";

import contactImage from "@/public/contactus-img.jpg";

import { contactInfo } from "@/components/constants/contact-us.constants";
import {
  FadeUp,
  SlideLeft,
  SlideRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

const ContactUs = () => {
  return (
    <section className={cn("w-full bg-primary/5")}>
      <DiagonalCut direction="top" />

      <div
        className={cn(
          "mx-auto max-w-7xl",
          "px-4 sm:px-6 lg:px-8",
          "pt-12 sm:pt-14 lg:pt-16",
        )}
      >
        <FadeUp>
          <SectionHeading
            align="center"
            eyebrow="Contact us"
            title="Get in touch with us"
            description={
              <>
                We eagerly look forward to warmly welcoming you very soon to our
                event.
                <br />
                It promises to be a memorable experience filled with exciting
                activities.
              </>
            }
            descriptionMaxWidth="4xl"
          />
        </FadeUp>

        <div
          className={cn(
            "grid items-center gap-10",
            "lg:grid-cols-2 lg:gap-16",
            "mt-14 sm:mt-16 lg:mt-24",
          )}
        >
          <SlideLeft>
            <div
              className={cn(
                "relative overflow-hidden",
                "h-72 sm:h-96 lg:h-130",
                "shadow-xl shadow-black/5",
              )}
            >
              <Image
                src={contactImage}
                alt="Chef in kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </SlideLeft>

          <SlideRight delay={0.1} className="space-y-8 lg:space-y-10">
            <div className="space-y-3">
              <h3
                className={cn(
                  "text-xl font-normal sm:text-2xl",
                  "text-muted-foreground",
                )}
              >
                We&apos;re here to serve you
              </h3>

              <p
                className={cn(
                  "text-base leading-7 font-normal lg:text-lg",
                  "text-foreground",
                )}
              >
                We would love to hear from you. Whether you have a question,
                need a reservation, or want to learn more about our offerings,
                we&apos;re here to assist.
              </p>
            </div>

            <StaggerContainer className={cn("grid gap-4", "sm:grid-cols-2")}>
              {contactInfo.map((info, index) => (
                <StaggerItem key={index}>
                  <InfoCard {...info} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </SlideRight>
        </div>
      </div>

      <DiagonalCut direction="top" className="mt-6 rotate-180" />
    </section>
  );
};

export default ContactUs;
