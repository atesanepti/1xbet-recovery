"use client";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import depositSm from "@/../public/assets/images/features/deposit-sm.png";
import freeBetSm from "@/../public/assets/images/features/free-bet.webp";
import signupSm from "@/../public/assets/images/features/signup-sm.jpg";
import Image from "next/image";

const data = {
  desktop: [
    {
      image: "/assets/images/features/signup.png",
      title: "100% bonus Signup Bonus",
      description:
        "Register with 1xBet and get a guaranteed 100% bonus on your 1st deposit!",
      actionLabel: "Register",
      action: "#",
    },
    {
      image: "/assets/images/features/deposit.jpg",
      title: "100% bonus on your 1st deposit",
      description: "Get 10% cashback on the deposit amount as a promo code",
      actionLabel: "Make a deposit",
      action: "#",
    },
  ],
  phone: [
    {
      image: depositSm,
      title: "FIRST DEPOSIT BONUS",
      action: "#",
    },
    {
      image: freeBetSm,
      title: "Weekly Free Bets",
      action: "#",
    },
    {
      image: signupSm,
      title: "100% Signup Bonus",

      action: "#",
    },
    {
      image: depositSm,
      title: "FIRST DEPOSIT BONUS",
      action: "#",
    },
  ],
};

const Featurs = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count, setCount] = React.useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const carouselRef = React.useRef<any>(null);
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        className="!w-full relative h-[250px] md:h-[310px] hidden md:block"
        ref={carouselRef}
      >
        <CarouselContent className=" h-full  ">
          {data.desktop.map((f, i) => (
            <CarouselItem key={i}>
              <div
                style={{ background: `url(${f.image})` }}
                className={cn(
                  `w-full h-[250px] md:h-[310px]  pl-8 md:pl-14 py-16  bg-no-repeat bg-center bg-cover`
                )}
              >
                <h3 className="text-white uppercase text-lg md:text-3xl font-semibold md:font-bold max-w-[250px] md:max-w-[430px]">
                  {f.title}
                </h3>
                <span className="text-sm text-white my-3">{f.description}</span>

                <Button variant={"ghost"} className="mt-5">
                  <Link href={f.action}>{f.actionLabel}</Link>
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute hidden md:flex z-10 bottom-3 left-1/2 -translate-x-1/2 w-[70%]  gap-2">
          {data.desktop.map((_, i) => (
            <div
              className={cn(
                `flex-1 max-w-10 h-1  ${
                  current == i + 1 ? "bg-brand-foreground" : "bg-white"
                }`
              )}
              key={i}
            ></div>
          ))}
        </div>
      </Carousel>
      <Carousel className="block md:hidden">
        <CarouselContent className="flex md:hidden  carousel-content items-stretch">
          {data.phone.map((f, i) => (
            <CarouselItem
              key={i}
              className="basis-1/4 min-h-[155px] carousel-item"
            >
              <div className="p-2 w-full rounded-md shadow-md bg-white h-full  ">
                <Image
                  placeholder="blur"
                  src={f.image}
                  alt={f.title}
                  className="w-full max-h-[90px] aspect-square object-cover rounded-sm"
                  unoptimized
                />
                <div className="py-3">
                  <span className="text-xs text-accent text-center block leading-3">
                    {f.title}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default Featurs;
