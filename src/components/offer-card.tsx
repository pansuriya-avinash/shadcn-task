"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { OfferCardProps } from "./types";
import { EASE_OUT_EXPO } from "@/lib/animation";

const OfferCard = ({ offer, className }: OfferCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden ",
        offer.isLarge
          ? "col-span-2 row-span-2 h-[250px] sm:h-[450px] lg:h-[590px]"
          : "col-span-2 h-[150px] sm:h-full",
        className
      )}
    >
      <Image
        src={offer.image}
        alt={offer.title}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={cn(
          "h-full w-full object-cover",
          "transition-transform duration-300",
          "group-hover:scale-105"
        )}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content Position */}
      <div
        className={cn(
          "absolute z-10",
          offer.isLarge
            ? "top-3 right-3 xl:top-6 xl:right-6"
            : offer.position === "bottom-left"
            ? "bottom-3 left-3 xl:bottom-5 xl:left-4"
            : "top-3 right-3 xl:top-5 xl:right-12"
        )}
      >
        {/* Title */}
        <h3
          className={cn(
            "font-(family-name:--font-kaushan-script)",
            "text-lg text-white md:text-xl lg:text-2xl xl:text-3xl"
          )}
        >
          {offer.title}
          {offer.price && ` - ${offer.price}`}
        </h3>

        {/* Button */}
        <motion.div
          transition={{
            duration: 0.2,
            ease: EASE_OUT_EXPO,
          }}
          className={cn(
            "mt-3",
            !offer.isLarge &&
              offer.position === "bottom-left" ?
              "xl:mt-4 text-start":"text-end"
          )}
        >
          <Button
            className={cn(
              "relative w-fit overflow-hidden rounded-full",
              "bg-primary text-primary-foreground",
              "h-10 px-6 text-base",
              "max-lg:px-3 max-sm:px-2.5 max-sm:text-sm",

              "before:absolute before:inset-0 before:rounded-[inherit]",
              "before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)]",
              "before:bg-[length:250%_250%,100%_100%]",
              "before:bg-[position:200%_0,0_0]",
              "before:bg-no-repeat",
              "before:transition-[background-position_0s_ease]",
              "before:duration-1000",

              "group-hover:before:bg-[position:-100%_0,0_0]",

              "dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]"
            )}
          >
            {offer.buttonText}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default OfferCard;