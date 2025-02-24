import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import game1 from "@/../public/assets/images/casino/live/game-1.jpg";
import game2 from "@/../public/assets/images/casino/live/game-2.jpg";
import game3 from "@/../public/assets/images/casino/live/game-3.jpg";
import game4 from "@/../public/assets/images/casino/live/game-4.jpg";
import game5 from "@/../public/assets/images/casino/live/game-5.jpg";

import GameCard from "@/components/games/GameCard";

const liveGames = [
  { label: "Mega Wheel", image: game1 },
  { label: "Football Auto Roulette", image: game2 },
  { label: "Roulette", image: game3 },
  { label: "Blackjack VIP 1", image: game4 },
  { label: "Dragon Tiger D60", image: game5 },
  { label: "Mega Wheel", image: game1 },
];

const Live = () => {
  return (
    <div className="  md:mb-2">
      <div className="flex items-center justify-between pb-3">
        <h4 className="font-bold text-sm md:text-base text-accent uppercase">
          Live
        </h4>
        <Link
          href="#"
          className="text-sm md:text-base text-accent flex items-center gap-1"
        >
          More Live <MdKeyboardDoubleArrowRight className="w-4 h-3" />
        </Link>
      </div>

      <div>
        <Carousel>
          <CarouselContent>
            {liveGames.map((game, i) => (
              <CarouselItem
                key={i}
                className="basis-1/3 md:basis-1/5 lg:basis-1/6"
              >
                <GameCard image={game.image} label={game.label} redirect="#" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Live;
