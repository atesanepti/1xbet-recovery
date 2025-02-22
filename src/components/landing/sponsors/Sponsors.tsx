import React from "react";

import Image from "next/image";

import ipl from "@/../public/assets/images/sponsors/sports/ipl.png";
import fcb from "@/../public/assets/images/sponsors/sports/fcb.png";
import psg from "@/../public/assets/images/sponsors/sports/psg.webp";
import fiva from "@/../public/assets/images/sponsors/sports/fifa.png";

import esl from "@/../public/assets/images/sponsors/e-spots/esl.png";
import Link from "next/link";

const Sponsors = () => {
  return (
    <div className="mb-6 md:mb-8 bg-secondary-foreground px-5 md:px-8 py-6 md:py-8 shadow-sm">
      <div className="flex flex-col justify-center mb-3 md:mb-4">
        <h4 className="text-white text-sm md:text-balance text-center my-3">
          Our Sports Sponsors
        </h4>
        <div className="grid gap-2 md:gap-3 grid-cols-[repeat(3,_minmax(0,_auto))] md:grid-cols-[repeat(6,_minmax(0,_auto))]  items-center justify-center">
          <Link href="#">
            <Image
              className="w-[75px] md:w-[90px] object-cover"
              src={fcb}
              alt="fcb"
            />
          </Link>

          <Link href="#">
            <Image
              className="w-[75px] md:w-[60px] object-cover"
              src={ipl}
              alt="ipl"
            />
          </Link>
          <Link href="#">
            <Image
              className="w-[75px] md:w-[90px] object-cover"
              src={psg}
              alt="psg"
            />
          </Link>
          <Link href="#">
            <Image
              className="w-[75px] md:w-[90px] object-cover"
              src={fiva}
              alt="fiva"
            />
          </Link>
          <Link href="#">
            <Image
              className="w-[75px] md:w-[90px] object-cover"
              src={psg}
              alt="psg"
            />
          </Link>
          <Link href="#">
            <Image
              className="w-[75px] md:w-[90px] object-cover"
              src={fcb}
              alt="fcb"
            />
          </Link>

         
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h4 className="text-white text-sm md:text-balance text-center my-3">
          Our E- Sports Sponsors
        </h4>
        <div className="grid gap-2 md:gap-3 grid-cols-[repeat(3,_minmax(0,_auto))] md:grid-cols-[repeat(6,_minmax(0,_auto))]  items-center justify-center">
          <Link href="#">
            <Image
              className="w-[75px] md:w-[90px] object-cover"
              src={esl}
              alt="esl"
            />
          </Link>
          <Link href="#">
            <Image
              className="w-[75px] md:w-[90px] object-cover"
              src={esl}
              alt="esl"
            />
          </Link>
          <Link href="#">
            <Image
              className="w-[75px] md:w-[90px] object-cover"
              src={esl}
              alt="esl"
            />
          </Link>
          <Link href="#">
            <Image
              className="w-[75px] md:w-[100px] object-cover"
              src={esl}
              alt="esl"
            />
          </Link>
          <Link href="#">
            <Image
              className="w-[75px] md:w-[90px] object-cover"
              src={esl}
              alt="esl"
            />
          </Link>
          <Link href="#">
            <Image
              className="w-[75px] md:w-[90px] object-cover"
              src={esl}
              alt="esl"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
