"use client";

import * as React from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { EASE_BACK_OUT, EASE_IN_OUT, EASE_OUT_EXPO } from "@/lib/animation";

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

export const useScrollNavigation = () => {
  const [activeSection, setActiveSection] = React.useState("");
  const [isScrolling, setIsScrolling] = React.useState(false);

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrolling) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      observerOptions,
    );

    NAVIGATION_ITEMS.forEach((item) => {
      if (item.href.startsWith("#")) {
        const id = item.href.slice(1);
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [isScrolling]);

  // Fallback scroll-based detection for better synchronization
  React.useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleWindowScroll = () => {
      if (isScrolling) return;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        let currentSection = "";
        NAVIGATION_ITEMS.forEach((item) => {
          if (item.href.startsWith("#")) {
            const id = item.href.slice(1);
            const element = document.getElementById(id);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (
                scrollPosition >= offsetTop &&
                scrollPosition < offsetTop + offsetHeight
              ) {
                currentSection = item.href;
              }
            }
          }
        });

        if (currentSection) {
          setActiveSection(currentSection);
        }
      }, 50);
    };

    window.addEventListener("scroll", handleWindowScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isScrolling]);

  const handleScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const element = document.getElementById(id);
      if (element) {
        setIsScrolling(true);
        setActiveSection(href);
        window.history.pushState(null, "", href);

        element.scrollIntoView({ behavior: "smooth" });

        // Reset scrolling state after animation completes
        setTimeout(() => {
          setIsScrolling(false);
        }, 800);
      }
    }
  };

  return { activeSection, handleScroll };
};

const Header = () => {
  const { activeSection, handleScroll } = useScrollNavigation();

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
            href="#hero"
            className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={(e) => handleScroll(e, "#hero")}
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
                  active={activeSection === item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent rounded-full ",
                    "text-base font-normal tracking-normal text-muted transition-all duration-200",
                    "hover:bg-primary/10 hover:text-secondary-foreground",
                    "focus:bg-primary/10 focus:text-secondary-foreground ",
                    "data-[active]:bg-primary/10 data-[active]:text-secondary-foreground "
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
          <motion.div
            transition={{ duration: 0.2, ease: EASE_BACK_OUT }}
          >
            <Button
              size="lg"
              onClick={(e) => handleScroll(e, "#contact")}
              className={cn(
                "group relative ml-4 w-fit overflow-hidden rounded-full px-4 py-2 text-base",
                "bg-primary text-sm font-medium text-primary-foreground",
                "before:absolute before:inset-0 before:rounded-[inherit]",
                "before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)]",
                "before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0]",
                "before:bg-no-repeat",
                "before:transition-[background-position_0s_ease] before:duration-1000",
                "hover:before:bg-[position:-100%_0,0_0]",
                "dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]",
                "transition-all duration-300", 
                "hover:bg-[color-mix(in_oklab,var(--primary)_90%,transparent)]",
              )}
            >
              Book table
            </Button>
          </motion.div>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                className="text-muted"
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

              <div className="border-b border-border px-6 py-4">
                <a
                  href="#hero"
                  onClick={(e) => handleScroll(e, "#hero")}
                  className="inline-flex items-center"
                >
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
                      onClick={(e) => handleScroll(e, item.href)}
                      className={cn(
                        "block rounded-lg px-3 py-2",
                        "text-base font-normal",
                        "transition-colors duration-200",
                        activeSection === item.href
                          ? "bg-primary/10 text-secondary-foreground"
                          : "text-muted hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      {item.name}
                    </a>
                  </SheetClose>
                ))}
              </nav>

              <div className="border-t border-border px-6 py-4">
                <SheetClose asChild>
                  <motion.div
                    transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
                  >
                    <Button
                      size="lg"
                      onClick={(e) => handleScroll(e, "#contact")}
                      className={cn(
                        "group relative w-full overflow-hidden rounded-full text-base",
                        "bg-primary text-sm font-medium text-primary-foreground",
                        "before:absolute before:inset-0 before:rounded-[inherit]",
                        "before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)]",
                        "before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0]",
                        "before:bg-no-repeat",
                        "before:transition-[background-position_0s_ease] before:duration-1000",
                        "hover:before:bg-[position:-100%_0,0_0]",
                        "dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]",
                        "transition-all duration-300", // Keep existing transition for other properties
                        "hover:bg-[color-mix(in_oklab,var(--primary)_90%,transparent)] hover:shadow-xl hover:shadow-primary/40",
                      )}
                    >
                      {/* Shine effect */}
                      Book table
                    </Button>
                  </motion.div>
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
