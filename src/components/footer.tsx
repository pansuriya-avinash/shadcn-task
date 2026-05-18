"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

import logo from "../public/assets/logo.svg";
import { NAVIGATION_ITEMS } from "./constants";

const socialLinks = [
  {
    name: "Facebook",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M15 1.6665H12.5C11.395 1.6665 10.3352 2.10549 9.55376 2.88689C8.77236 3.66829 8.33337 4.7281 8.33337 5.83317V8.33317H5.83337V11.6665H8.33337V18.3332H11.6667V11.6665H14.1667L15 8.33317H11.6667V5.83317C11.6667 5.61216 11.7545 5.4002 11.9108 5.24391C12.0671 5.08763 12.279 4.99984 12.5 4.99984H15V1.6665Z"
          stroke="var(--muted)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    href: "#",
  },
  {
    name: "Instagram",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M14.5833 5.4165H14.5916M5.83329 1.6665H14.1666C16.4678 1.6665 18.3333 3.53198 18.3333 5.83317V14.1665C18.3333 16.4677 16.4678 18.3332 14.1666 18.3332H5.83329C3.53211 18.3332 1.66663 16.4677 1.66663 14.1665V5.83317C1.66663 3.53198 3.53211 1.6665 5.83329 1.6665ZM13.3333 9.47484C13.4361 10.1684 13.3177 10.8767 12.9948 11.499C12.6718 12.1213 12.1609 12.626 11.5346 12.9412C10.9084 13.2564 10.1987 13.3662 9.50645 13.2548C8.81423 13.1434 8.17476 12.8166 7.67899 12.3208C7.18322 11.825 6.8564 11.1856 6.74502 10.4933C6.63363 9.80113 6.74335 9.09142 7.05856 8.46515C7.37378 7.83888 7.87845 7.32795 8.50078 7.00504C9.12311 6.68212 9.83142 6.56366 10.525 6.6665C11.2324 6.77141 11.8873 7.10106 12.393 7.60676C12.8987 8.11246 13.2284 8.7674 13.3333 9.47484Z"
          stroke="var(--muted)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    href: "#",
  },
  {
    name: "Twitter",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M18.3333 3.33319C18.3333 3.33319 17.75 5.08319 16.6666 6.16652C18 14.4999 8.83329 20.5832 1.66663 15.8332C3.49996 15.9165 5.33329 15.3332 6.66663 14.1665C2.49996 12.9165 0.416626 7.99986 2.49996 4.16652C4.33329 6.33319 7.16663 7.58319 9.99996 7.49986C9.24996 3.99986 13.3333 1.99986 15.8333 4.33319C16.75 4.33319 18.3333 3.33319 18.3333 3.33319Z"
          stroke="var(--muted)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    href: "#",
  },
  {
    name: "YouTube",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M2.08334 14.1667C1.50119 11.4194 1.50119 8.58061 2.08334 5.83333C2.15983 5.55434 2.30762 5.30006 2.51218 5.09551C2.71674 4.89095 2.97101 4.74316 3.25001 4.66667C7.71955 3.92622 12.2805 3.92622 16.75 4.66667C17.029 4.74316 17.2833 4.89095 17.4878 5.09551C17.6924 5.30006 17.8402 5.55434 17.9167 5.83333C18.4988 8.58061 18.4988 11.4194 17.9167 14.1667C17.8402 14.4457 17.6924 14.6999 17.4878 14.9045C17.2833 15.1091 17.029 15.2568 16.75 15.3333C12.2805 16.0739 7.71953 16.0739 3.25001 15.3333C2.97101 15.2568 2.71674 15.1091 2.51218 14.9045C2.30762 14.6999 2.15983 14.4457 2.08334 14.1667Z"
          stroke="#300406"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.33334 12.5L12.5 10L8.33334 7.5V12.5Z"
          stroke="var(--muted)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    href: "#",
  },
];

export const Footer = () => {
  return (
    <footer className={cn("w-full", "bg-foreground")}>
      <FadeIn margin="-40px 0px">
        <div>
          <div
            className={cn(
              "flex flex-col items-center justify-between gap-8",
              "py-4 sm:py-6 lg:py-8 md:flex-row md:gap-6",
              "mx-auto max-w-7xl",
              "px-4 sm:px-6 lg:px-8",
            )}
          >
            <a
              href="#"
              className={cn(
                "flex items-center rounded-md",
                "focus-visible:outline-none",
                "focus-visible:ring-2 focus-visible:ring-ring",
              )}
              aria-label="Bistro Home"
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

            <nav
              className={cn(
                "flex flex-wrap items-center justify-center",
                "gap-x-6 gap-y-3 md:gap-x-8",
              )}
            >
              {NAVIGATION_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-base font-normal",
                    "text-muted-foreground",
                    "transition-colors duration-200",
                    "hover:text-muted",
                  )}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-9 w-9 rounded-full",
                    "text-muted-foreground",
                    "transition-all duration-200",
                    "hover:bg-accent hover:text-accent-foreground",
                  )}
                  asChild
                >
                  <a href={social.href} aria-label={social.name}>
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="border-t border-border" />

          <div
            className={cn(
              "py-4 sm:py-6 lg:py-8",
              "mx-auto max-w-7xl",
              "px-4 sm:px-6 lg:px-8",
            )}
          >
            <p
              className={cn(
                "text-center text-base font-normal",
                "text-muted",
              )}
            >
              © 2025 Bistro. Made with ❤️ for a better taste.
            </p>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
};

export default Footer;
