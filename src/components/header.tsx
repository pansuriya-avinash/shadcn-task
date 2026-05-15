"use client";

import * as React from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { EASE_OUT_EXPO } from "@/lib/animation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

import logo from "../public/assets/logo.svg";
import { NAVIGATION_ITEMS } from "./constants";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
      className={cn(
        "sticky top-0 z-50 w-full",
        "border-b border-border",
        "bg-background/90 backdrop-blur-xl",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between",
          "px-4 py-3 sm:px-6 lg:px-8",
        )}
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a
            href="#"
            className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Image
              src={logo}
              alt="Bistro Logo"
              width={101}
              height={32}
              priority
              className="object-contain"
            />
          </a>
        </div>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            {NAVIGATION_ITEMS.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  href={item.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent",
                    "text-base font-normal tracking-normal text-foreground",
                    "hover:bg-transparent hover:text-primary",
                    "focus:bg-transparent focus:text-primary",
                  )}
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-3">
          <ThemeToggle />
          <Button
            size="lg"
            className={cn(
              "bg-primary text-primary-foreground",
              "hover:bg-primary/90",
              "px-4 py-2",
              "text-sm font-medium",
              "rounded-full",
            )}
          >
            Book table
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                className="text-foreground"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex w-75 flex-col p-0 sm:w-85"
            >
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <SheetDescription className="sr-only">
                Site navigation links and actions
              </SheetDescription>

              {/* Sheet header with logo */}
              <div className="border-b border-border px-6 py-4">
                <a href="#" className="inline-flex items-center">
                  <Image
                    src={logo}
                    alt="Bistro Logo"
                    width={90}
                    height={28}
                    priority
                    className="object-contain"
                  />
                </a>
              </div>

              <nav className="flex-1 space-y-1 px-4 py-4">
                {NAVIGATION_ITEMS.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <a
                      href={item.href}
                      className={cn(
                        "block rounded-lg px-3 py-2",
                        "text-base font-normal",
                        "text-foreground",
                        "transition-colors duration-200",
                        "hover:bg-accent hover:text-accent-foreground",
                      )}
                    >
                      {item.name}
                    </a>
                  </SheetClose>
                ))}
              </nav>

              <div className="border-t border-border px-6 py-4">
                <SheetClose asChild>
                  <Button
                    size="lg"
                    className={cn(
                      "w-full rounded-full",
                      "bg-primary text-primary-foreground",
                      "hover:bg-primary/90",
                      "text-sm font-medium",
                    )}
                  >
                    Book table
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
