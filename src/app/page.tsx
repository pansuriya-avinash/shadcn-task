import Hero from "@/components/hero";
import { cn } from "@/lib/utils";
import PopularDishes from "@/components/popular-dishes";
import  AboutUs  from "@/components/about-us"
import Testimonials  from "@/components/testimonials"
import NewItems  from "@/components/new-items"
import ContactUs  from "@/components/contact-us"
import { Offers } from "@/components/offers"

 const Home = () => {
  return (
    <>
      <Hero />
      <div className="relative w-full">
        <div
          className={cn(
            "absolute bottom-0 left-0",
            "h-[2px] w-full",
            "origin-left -rotate-3",
            "bg-border"
          )}
        />
      </div>
      <div className="container mx-auto">
        <PopularDishes />
      </div>
      <AboutUs />
      <Testimonials />
      <div className="relative w-full">
        <div
          className={cn(
            "absolute bottom-0 left-0",
            "h-[2px] w-full",
            "origin-left -rotate-3",
            "bg-border"
          )}
        />
      </div>
      <NewItems />
      <ContactUs />
      <Offers />
    </>
  );
}

export default Home;
