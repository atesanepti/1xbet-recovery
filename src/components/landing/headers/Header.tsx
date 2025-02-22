// import Image from "next/image";
// import Link from "next/link";
import React from "react";

// import logo from "@/../public/assets/images/logo.svg";
import { Button } from "@/components/ui/button";

import { LogIn, SquarePen } from "lucide-react";
import { BsQrCode } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { IoMdPhonePortrait, IoMdSettings } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
const Header = () => {
  return (
    <header className="w-full z-[1000] sticky top-0 left-0 bg-white flex items-center justify-between ">
      {/* <Link href="/">
        <Image
          src={logo}
          alt="1XBet Companl"
          className="w-[80px] md:w-[100px] "
        />
      </Link> */}
      <div className="flex items-center ">
        <Button
          variant={"primary"}
          className="border-l border-b border-white hidden md:block"
        >
          <RiComputerLine className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </Button>
        <Button
          variant={"primary"}
          className="border-l border-b border-white hidden md:block"
        >
          <IoMdPhonePortrait className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </Button>
        <Button
          variant={"primary"}
          className="md:border-l border-b border-white"
        >
          <FaTelegram className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </Button>
        <Button variant={"primary"} className="border-l border-b border-white">
          $
        </Button>
        <Button
          variant={"secondary"}
          className="border-l border-b border-white flex flex-col items-center"
        >
          <span className="text-sm md:text-base font-bold text-white -translate-y-2">
            1200 BDT
          </span>
          <span className="text-[10px] md:text-xs text-white font-bold uppercase -translate-y-6 md:-translate-y-5">
            Main
          </span>
        </Button>
      </div>
      <div className="flex items-center ">
        <Button
          variant={"primary"}
          className="border-l border-b border-white hidden md:block"
        >
          <BsQrCode className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </Button>
        <Button variant={"primary"} className="border-l border-b border-white">
          <LogIn className="w-4 h-4 md:w-5 md:h-5" />
          Login
        </Button>
        <Button
          variant={"secondary"}
          className="border-l border-b border-white"
        >
          <SquarePen className="w-4 h-4 md:w-5 md:h-5" />
          Registration
        </Button>
        <Button variant={"primary"} className="border-l border-b border-white">
          <IoMdSettings className="w-4 h-4 md:w-5 md:h-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
