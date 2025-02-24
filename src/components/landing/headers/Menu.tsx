"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";

import logo from "@/../public/assets/svg/logo.svg";

import {
  MdSportsBaseball,
  MdSportsEsports,
  MdEmojiEvents,
  MdOutlineCasino,
  MdLiveTv,
} from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SquarePen, LogIn } from "lucide-react";
const Menusm = ({ children }: { children: React.ReactNode }) => {
  const [seletecdMenuItem, setSelectedMenuItem] = useState("");

  const handleSelectMenuIcem = (item: string) => {
    if (seletecdMenuItem == item) {
      setSelectedMenuItem("");
    } else {
      setSelectedMenuItem(item);
    }
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger>{children}</SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>
              <Link href="/">
                <Image
                  src={logo}
                  alt="1XBet Companl"
                  className="w-[80px] md:w-[100px] "
                />
              </Link>
            </SheetTitle>
          </SheetHeader>

          <div className="h-full flex flex-col">
            <nav className="mt-5 flex  items-center flex-col flex-1 max-h-[75vh] overflow-x-hidden overflow-y-auto scrollbar-min">
              <div className="w-full">
                <button
                  onClick={() => handleSelectMenuIcem("top-event")}
                  className="w-full py-2 flex justify-between"
                >
                  <div className="flex gap-2 items-center">
                    <MdEmojiEvents className="text-white w-5 h-5" />
                    <span className="text-sm font-medium text-white">
                      Top Event
                    </span>
                  </div>
                  <IoIosArrowDown
                    className={cn(
                      "text-white w-4 h-4 transition-all",
                      `${seletecdMenuItem == "top-event" && "rotate-180"}`
                    )}
                  />
                </button>

                {seletecdMenuItem == "top-event" && (
                  <ul className="px-2">
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        EPL
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        LaLiga
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              <div className="w-full">
                <button
                  onClick={() => handleSelectMenuIcem("sports")}
                  className=" w-full py-2 flex justify-between"
                >
                  <div className="flex gap-2 items-center">
                    <MdSportsBaseball className="text-white w-4 h-4" />
                    <span className="text-sm font-medium text-white">
                      Spotrs
                    </span>
                  </div>
                  <IoIosArrowDown
                    className={cn(
                      "text-white w-4 h-4 transition-all",
                      `${seletecdMenuItem == "sports" && "rotate-180"}`
                    )}
                  />
                </button>

                {seletecdMenuItem == "sports" && (
                  <ul className="px-2">
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        Cricket
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        Soccer
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              <div className="w-full">
                <button
                  onClick={() => handleSelectMenuIcem("live")}
                  className=" w-full py-2 flex justify-between"
                >
                  <div className="flex gap-2 items-center">
                    <MdLiveTv className="text-white w-4 h-4" />
                    <span className="text-sm font-medium text-white">Live</span>
                  </div>
                  <IoIosArrowDown
                    className={cn(
                      "text-white w-4 h-4 transition-all",
                      `${seletecdMenuItem == "live" && "rotate-180"}`
                    )}
                  />
                </button>

                {seletecdMenuItem == "live" && (
                  <ul className="px-2">
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        Bet On Your Nation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        Multi-Live
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              <div className="w-full">
                <button
                  onClick={() => handleSelectMenuIcem("casino")}
                  className=" w-full py-2 flex justify-between"
                >
                  <div className="flex gap-2 items-center">
                    <MdOutlineCasino className="text-white w-4 h-4" />
                    <span className="text-sm font-medium text-white">
                      Casino
                    </span>
                  </div>
                  <IoIosArrowDown
                    className={cn(
                      "text-white w-4 h-4 transition-all",
                      `${seletecdMenuItem == "casino" && "rotate-180"}`
                    )}
                  />
                </button>

                {seletecdMenuItem == "casino" && (
                  <ul className="px-2">
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        SLOT
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        POCKET
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        Routel Wheel
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        Crash
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              <div className="w-full">
                <button
                  onClick={() => handleSelectMenuIcem("esports")}
                  className=" w-full py-2 flex justify-between"
                >
                  <div className="flex gap-2 items-center">
                    <MdSportsEsports className="text-white w-4 h-4" />
                    <span className="text-sm font-medium text-white">
                      Esports
                    </span>
                  </div>
                  <IoIosArrowDown
                    className={cn(
                      "text-white w-4 h-4 transition-all",
                      `${seletecdMenuItem == "esports" && "rotate-180"}`
                    )}
                  />
                </button>

                {seletecdMenuItem == "esports" && (
                  <ul className="px-2">
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        Live
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        Pre Match
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </nav>

            <div className="flex items-center gap-2 justify-end py-4">
              <Button className="bg-brand-foreground text-white hover:bg-brand-foreground/90 text-xs">
                <LogIn className="w-4 h-3 text-white" />
                Login
              </Button>
              <Button className="bg-primary text-white hover:bg-primary/90 text-xs">
                Registration <SquarePen className="w-4 h-4 text-white" />
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Menusm;
