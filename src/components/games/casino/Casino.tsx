import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import game1 from "@/../public/assets/images/casino/slot/game-1.jpg";
import game2 from "@/../public/assets/images/casino/slot/game-2.jpg";
import game3 from "@/../public/assets/images/casino/slot/game-3.jpg";
import game4 from "@/../public/assets/images/casino/slot/game-4.jpg";
import game5 from "@/../public/assets/images/casino/slot/game-5.png";
import game6 from "@/../public/assets/images/casino/slot/game-6.jpg";
import GameCard from "@/components/games/GameCard";
const casinoGames = [
  { label: "Lion Gems: Hold & Win", image: game1 },
  { label: "Hit Coins 2 Hold and Spin", image: game2 },
  { label: "Cash Streak", image: game3 },
  { label: "Wolf and Sheep", image: game4 },
  { label: "Fortune Numbers", image: game5 },
  { label: "Golden Crown", image: game6 },
];

const Casino = () => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-md shadow-sm mb-3 md:mb-5">
      <div className="flex items-center justify-between pb-3">
        <h4 className="font-semibold text-sm md:text-base text-accent uppercase">
          Casino
        </h4>
        <Link
          href="#"
          className="text-sm md:text-base text-accent flex items-center gap-1"
        >
          More Casino <MdKeyboardDoubleArrowRight className="w-4 h-3" />
        </Link>
      </div>

      <div>
        <Carousel>
          <CarouselContent>
            {casinoGames.map((game, i) => (
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

export default Casino;
