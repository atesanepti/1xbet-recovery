import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import FootballOddsCard from "./FootballOddsCard";

const footballOddsData = [
  {
    eventName: "Barcelona vs Real Madrid - La Liga",
    time: "78'", // 78th minute
    teams: {
      team1: {
        name: "Barcelona",
        flag: "https://flagcdn.com/w40/es.png",
      },
      team2: {
        name: "Real Madrid",
        flag: "https://flagcdn.com/w40/es.png",
      },
    },
    score: {
      team1: "2",
      team2: "1",
    },
    odds: {
      team1: 2.1,
      team2: 2.5,
      draw: 3.2,
    },
    redirectPath: "/match/barcelona-real-madrid",
  },
  {
    eventName: "Manchester United vs Liverpool - Premier League",
    time: "HT", // Halftime
    teams: {
      team1: {
        name: "Manchester United",
        flag: "https://flagcdn.com/w40/gb-eng.png",
      },
      team2: {
        name: "Liverpool",
        flag: "https://flagcdn.com/w40/gb-eng.png",
      },
    },
    score: {
      team1: "1",
      team2: "1",
    },
    odds: {
      team1: 2.75,
      team2: 2.3,
      draw: 3.1,
    },
    redirectPath: "/match/manutd-liverpool",
  },
  {
    eventName: "Bayern Munich vs Dortmund - Bundesliga",
    time: "90+3'", // Injury time
    teams: {
      team1: {
        name: "Bayern Munich",
        flag: "https://flagcdn.com/w40/de.png",
      },
      team2: {
        name: "Dortmund",
        flag: "https://flagcdn.com/w40/de.png",
      },
    },
    score: {
      team1: "3",
      team2: "2",
    },
    odds: {
      team1: 1.9,
      team2: 3.5,
      draw: 3.4,
    },
    redirectPath: "/match/bayern-dortmund",
  },
  {
    eventName: "PSG vs Marseille - Ligue 1",
    time: "FT", // Full-time
    teams: {
      team1: {
        name: "PSG",
        flag: "https://flagcdn.com/w40/fr.png",
      },
      team2: {
        name: "Marseille",
        flag: "https://flagcdn.com/w40/fr.png",
      },
    },
    score: {
      team1: "4",
      team2: "1",
    },
    odds: {
      team1: 1.6,
      team2: 4.2,
      draw: 3.8,
    },
    redirectPath: "/match/psg-marseille",
  },
];

const FootballSlider = () => {
  return (
    <div className="my-2 md:my-3 mb-5 md:mb-7  ">
      <div className="flex items-center justify-between pb-3">
        <h4 className="font-bold text-sm md:text-base text-white ">
          Live Football <span className="opacity-50">(720)</span>
        </h4>
        <Link
          href="#"
          className="text-sm md:text-base text-white flex items-center gap-1"
        >
          More Live <MdKeyboardDoubleArrowRight className="w-4 h-3" />
        </Link>
      </div>

      <div>
        <Swiper slidesPerView={"auto"} spaceBetween={5} className="mySwiper">
          {footballOddsData.map((data, i) => (
            <SwiperSlide className="max-w-[320px] " key={i}>
              <FootballOddsCard data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FootballSlider;
