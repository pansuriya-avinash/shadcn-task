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
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
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
            "transition-transform duration-500 group-hover:scale-105"
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