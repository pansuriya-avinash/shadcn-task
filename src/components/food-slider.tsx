"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { cn } from "@/lib/utils";
import { foodSlides } from "./slider-data";

const FoodSlider = () => {
  const sliderRef1 = React.useRef<HTMLDivElement>(null);
  const sliderRef2 = React.useRef<HTMLDivElement>(null);
  const xTranslation1 = useMotionValue(0);
  const xTranslation2 = useMotionValue(0);

  const [itemWidth, setItemWidth] = React.useState(0);
  const [totalContentWidth, setTotalContentWidth] = React.useState(0);

  // Measure the width of a single item and total content width
  React.useEffect(() => {
    if (sliderRef1.current) {
      const firstItem = sliderRef1.current.querySelector('[data-slot="carousel-item"]');
      if (firstItem) {
        const width = firstItem.clientWidth;
        setItemWidth(width);
        // Calculate total width of one full set of items
        setTotalContentWidth(width * foodSlides.length);
      }
    }
  }, []);

  // Duplicate content to ensure seamless loop
  const duplicatedFoodSlides = [...foodSlides, ...foodSlides, ...foodSlides]; // Duplicate enough times

  useAnimationFrame((time, delta) => {
    if (!itemWidth || !totalContentWidth) return;

    const speed = 0.5; // Adjust speed as needed for desired scroll speed
    const moveBy = speed * delta;

    // Row 1: Scrolls from start to end (positive direction)
    let currentX1 = xTranslation1.get();
    currentX1 += moveBy;
    if (currentX1 >= totalContentWidth) {
      currentX1 -= totalContentWidth; // Reset to create seamless loop
    }
    xTranslation1.set(currentX1);

    // Row 2: Scrolls from end to start (negative direction)
    let currentX2 = xTranslation2.get();
    currentX2 -= moveBy;
    if (currentX2 <= -totalContentWidth) {
      currentX2 += totalContentWidth; // Reset to create seamless loop
    }
    xTranslation2.set(currentX2);
  });

  const Item = ({ slide, index, isPrimaryColor }: { slide: typeof foodSlides[0], index: number, isPrimaryColor: boolean }) => (
    <motion.div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 pl-4",
        "basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/3 xl:basis-1/4", // Responsive widths from example
        "group" // For hover effects
      )}
      key={index}
    >
      <div className="relative flex h-33 items-center justify-center">
        <div className={cn(
          "absolute bottom-0 -z-1",
          isPrimaryColor ? "text-primary" : "text-border"
        )}>
          <svg xmlns="http://www.w3.org/2000/svg" width="161" height="92" viewBox="0 0 161 92" fill="none">
            <path d="M0.682517 80.6118L0.501193 39.6946C0.480127 34.9409 3.80852 30.8294 8.46241 29.8603L148.426 0.713985C154.636 -0.579105 160.465 4.16121 160.465 10.504V80.7397C160.465 86.2674 155.98 90.7465 150.453 90.7397L10.6701 90.5674C5.16936 90.5607 0.706893 86.1125 0.682517 80.6118Z" stroke="currentColor"></path>
          </svg>
        </div>
        <Image
          src={slide.image}
          alt={slide.alt}
          width={100} // Adjust as needed, or make it responsive
          height={100} // Adjust as needed, or make it responsive
          className="size-25 transition-transform duration-300 group-hover:scale-110" // Hover effect
        />
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-4">
      {/* Row 1: Scrolls from start to end */}
      <div className="overflow-hidden" data-slot="carousel-content">
        <motion.div ref={sliderRef1} className="-ml-4 my-1 flex" style={{ x: xTranslation1 }}>
          {duplicatedFoodSlides.map((slide, index) => (
            <Item key={`row1-${index}`} slide={slide} index={index} isPrimaryColor={index % 2 === 1} />
          ))}
        </motion.div>
      </div>

      {/* Row 2: Scrolls from end to start */}
      <div className="overflow-hidden" data-slot="carousel-content">
        <motion.div ref={sliderRef2} className="-ml-4 my-1 flex" style={{ x: xTranslation2 }}>
          {duplicatedFoodSlides.map((slide, index) => (
            <Item key={`row2-${index}`} slide={slide} index={index} isPrimaryColor={index % 2 === 0} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FoodSlider;