import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const descriptionMaxWidthClass = {
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
} as const;

export type SectionHeadingDescriptionMaxWidth =
  keyof typeof descriptionMaxWidthClass;

export interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: React.ReactNode;
  align?: "center" | "start";
  descriptionMaxWidth?: SectionHeadingDescriptionMaxWidth;
  className?: string;
  descriptionClassName?: string;
  badgeVariant?: "outline" | "secondary" | "default" | "destructive";
  eyebrowClassName?: string;
  titleClassName?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "start",
  descriptionMaxWidth = "4xl",
  className,
  descriptionClassName,
  badgeVariant = "outline",
  eyebrowClassName,
  titleClassName,
}: SectionHeadingProps) => {
  const isCentered = align === "center";

  return (
    <div className={cn(isCentered ? "text-center" : "text-start", className)}>
      <Badge
        variant={badgeVariant}
        className={cn(
          "mb-4 rounded-full border-border px-2 py-0.5 text-sm font-normal text-muted-foreground",
          isCentered && "mx-auto",
          eyebrowClassName,
        )}
      >
        {eyebrow}
      </Badge>

      <h2
        className={cn(
          "mb-5 text-2xl font-semibold text-muted-foreground",
          "sm:text-3xl lg:text-4xl",
          titleClassName,
        )}
      >
        {title}
      </h2>

      {description != null ? (
        <p
          className={cn(
            "text-base font-normal text-foreground sm:text-lg lg:text-xl",
            descriptionMaxWidthClass[descriptionMaxWidth],
            "mx-auto",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
