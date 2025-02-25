"use client";

import React, { useState } from "react";
import { MdCasino } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { IoTicketSharp } from "react-icons/io5";
import Link from "next/link";
import { cn } from "@/lib/utils";
const TabBar = () => {
  const [menuActive, setMenuActive] = useState("home");

  return (
    <div className="bg-white shadow-lg border border-border fixed z-[500000000] left-1/2 -translate-x-1/2 bottom-0 md:bottom-3 w-full md:w-[600px] h-[60px] md:h-[70px] md:rounded-full flex py-1 md:py-2">
      <Link
        onClick={() => setMenuActive("home")}
        href="/"
        className="flex-1 flex justify-center items-center flex-col tab-menu"
      >
        <IoMdHome
          className={cn(
            "w-4 h-4 text-accent opacity-50",
            `${
              menuActive == "home" &&
              "bg-brand rounded-full w-6 h-6 opacity-100 text-white p-1 hover:text-white transtion  "
            }`
          )}
        />
        <span
          className={cn(
            "text-accent text-sm",
            `${menuActive === "home" && "font-medium"}`
          )}
        >
          Home
        </span>
      </Link>
      <Link
        onClick={() => setMenuActive("sports")}
        href="/sports"
        className="flex-1 flex justify-center items-center flex-col tab-menu"
      >
        <FaTrophy
          className={cn(
            "w-4 h-4 text-accent opacity-50 tab-menu-icon",
            `${
              menuActive == "sports" &&
              "bg-brand rounded-full w-6 h-6 opacity-100 text-white p-1 hover:text-white  "
            }`
          )}
        />
        <span
          className={cn(
            "text-accent text-sm",
            `${menuActive === "sports" && "font-medium"}`
          )}
        >
          Sports
        </span>
      </Link>
      <Link
        onClick={() => setMenuActive("casino")}
        href="/casino"
        className="flex-1 flex justify-center items-center flex-col tab-menu"
      >
        <MdCasino
          className={cn(
            "w-4 h-4 text-accent opacity-50 tab-menu-icon",
            `${
              menuActive == "casino" &&
              "bg-brand rounded-full w-6 h-6 opacity-100 text-white p-1 hover:text-white transtion  "
            }`
          )}
        />
        <span
          className={cn(
            "text-accent text-sm",
            `${menuActive === "casino" && "font-medium"}`
          )}
        >
          Casino
        </span>
      </Link>
      <Link
        onClick={() => setMenuActive("bet")}
        href="/my-bets"
        className="flex-1 flex justify-center items-center flex-col tab-menu"
      >
        <IoTicketSharp
          className={cn(
            "w-4 h-4 text-accent opacity-50 tab-menu-icon",
            `${
              menuActive == "bet" &&
              "bg-brand rounded-full w-6 h-6 opacity-100 text-white p-1 hover:text-white transtion  "
            }`
          )}
        />
        <span
          className={cn(
            "text-accent text-sm",
            `${menuActive === "bet" && "font-medium"}`
          )}
        >
          Bet slip
        </span>
      </Link>

      <Link
        onClick={() => setMenuActive("menu")}
        href="/menu"
        className="flex-1 flex justify-center items-center flex-col tab-menu"
      >
        <IoMenuSharp
          className={cn(
            "w-4 h-4 text-accent opacity-50 tab-menu-icon",
            `${
              menuActive == "menu" &&
              "bg-brand rounded-full w-6 h-6 opacity-100 text-white p-1 hover:text-white transtion  "
            }`
          )}
        />
        <span
          className={cn(
            "text-accent text-sm",
            `${menuActive === "menu" && "font-medium"}`
          )}
        >
          Menu
        </span>
      </Link>
    </div>
  );
};

export default TabBar;
