import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Dish } from "../types";

interface DishCardProps {
  dish: Dish;
  className?: string;
  cardContaine:React.ReactNode;
}

const DishCard = ({ dish, className, cardContaine }: DishCardProps) => {
  return (
    <Card
      className={cn(
        "group overflow-hidden",
        "bg-card border border-border",
        "hover:border-primary",
        className
      )}
    >
      <div className="relative h-52 w-full overflow-hidden sm:h-56">
        <Image
          src={dish.image ? dish.image : ''}
          alt={dish.title}
          fill
          className={cn(
            "h-full w-full object-cover",
          )}
        />
      </div>
      <>
        {cardContaine}
      </>
    </Card>
  )
}

export default DishCard