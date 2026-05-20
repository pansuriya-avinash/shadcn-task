"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import heroImage from "@/public/hero-img.png";
import userImage from "@/public/avtar.png";
import FoodSlider from "./food-slider/food-slider";
import { foodSlides } from "./food-slider/slider-data";
import { EASE_OUT_EXPO, heroContainer, heroItem } from "@/lib/animation";

const Hero = () => {
  const [heroApi, setHeroApi] = React.useState<CarouselApi>();
  const [avatarApi, setAvatarApi] = React.useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleIndexChange = React.useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  React.useEffect(() => {
    if (heroApi) {
      heroApi.scrollTo(activeIndex);
    }
    if (avatarApi) {
      avatarApi.scrollTo(activeIndex);
    }
  }, [activeIndex, heroApi, avatarApi]);

  return (
    <section id="hero" className={cn("flex items-center", "bg-background")}>
      <div
        className={cn(
          "mx-auto max-w-7xl",
          "px-4 sm:px-6 lg:px-8",
          "py-16 sm:py-20 lg:py-24",
          "w-full",
        )}
      >
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-[60%_40%]",
            "gap-12 lg:gap-0",
            "items-center",
          )}
        >
          {/* ── Left content column ────────────────────────────── */}
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-4">
              <motion.h1
                variants={heroItem}
                className={cn(
                  "text-3xl sm:text-4xl lg:text-5xl",
                  "font-semibold leading-tight",
                  "text-muted-foreground mb-5",
                )}
              >
                Savor the taste of perfection
              </motion.h1>
              <motion.p
                variants={heroItem}
                className={cn(
                  "text-base sm:text-lg lg:text-xl font-normal",
                  "text-muted",
                  "max-w-xl",
                  "mb-5",
                )}
              >
                Welcome to Restaurant where passion meets the plate. From
                sizzling appetizers to signature desserts, every dish is crafted
                to delight your senses.
              </motion.p>
            </div>

            <motion.div
              variants={heroItem}
              className={cn(
                "flex flex-col sm:flex-row",
                "gap-4",
                "items-start sm:items-center",
              )}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
              >
                <Button
                  size="lg"
                  className={cn(
                    "group relative overflow-hidden rounded-full px-6 py-2 text-base font-medium",
                    "bg-primary text-primary-foreground",
                    "before:absolute before:inset-0 before:rounded-[inherit]",
                    "before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)]",
                    "before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0]",
                    "before:bg-no-repeat",
                    "before:transition-[background-position_0s_ease] before:duration-1000",
                    "hover:before:bg-[position:-100%_0,0_0]",
                    "dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]",
                    "transition-all duration-300",
                    "hover:bg-[color-mix(in_oklab,var(--primary)_90%,transparent)] hover:shadow-lg hover:shadow-primary/40",
                  )}
                >
                  Order now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className={cn(
                    "text-primary",
                    "bg-primary/10 hover:bg-primary/20 hover:text-primary",
                    "px-6 py-2",
                    "text-base font-medium",
                    "rounded-full",
                  )}
                >
                  Book table
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── Hero image ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.55 }}
          >
            <Carousel
              setApi={setHeroApi}
              opts={{ loop: true, watchDrag: false, duration: 40 }}
              className="w-full"
            >
              <CarouselContent>
                {foodSlides.map((slide, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <CarouselItem key={slide.id}>
                      <motion.div
                        initial={false}
                        animate={{
                          scale: isActive ? 1 : 0.85,
                          opacity: isActive ? 1 : 0.4,
                        }}
                        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
                        className="relative h-80 w-full lg:min-h-97"
                      >
                        <Image
                          src={slide.image || heroImage}
                          alt={slide.title || "Hero Image"}
                          fill
                          priority
                          className="object-contain drop-shadow-xl"
                        />
                      </motion.div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>

        {/* ── Bottom row ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.55 }}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-[60%_40%]",
            "gap-12 lg:gap-0",
            "pt-4 sm:pt-5 lg:pt-7",
            "items-center",
          )}
        >
          <div>
            <FoodSlider
              activeIndex={activeIndex}
              onIndexChange={handleIndexChange}
            />
          </div>
          {/* ── avatar row ─────────────────────────────────────────── */}
          <Carousel
            setApi={setAvatarApi}
            opts={{ loop: true, watchDrag: false, duration: 40 }}
            className="w-full overflow-hidden"
          >
            <CarouselContent>
              {foodSlides.map((slide, index) => {
                const isActive = activeIndex === index;
                return (
                  <CarouselItem key={slide.id}>
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0.4,
                        y: isActive ? 0 : 8,
                        scale: isActive ? 1 : 0.96,
                      }}
                      transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                      className={cn(
                        "mt-4",
                        "flex items-start gap-4",
                        "p-4 rounded-lg",
                        "bg-background",
                      )}
                    >
                      <div className="shrink-0">
                        <Avatar
                          className={cn(
                            "size-12 border-0 bg-primary/20 sm:size-14",
                          )}
                        >
                          <AvatarImage
                            src={userImage.src}
                            alt="User Image"
                            className="object-cover"
                          />
                          <AvatarFallback className="bg-primary/20 text-xs font-medium text-primary">
                            U
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="border-2 rounded-full bg-primary h-12.5 w-2" />
                      <div className="flex-1">
                        <p className="text-sm sm:text-base font-normal text-card-foreground">
                          {slide.review}
                        </p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
