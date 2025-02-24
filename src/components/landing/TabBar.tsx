import React from "react";
import { MdCasino } from "react-icons/md";
import { FaTrophy, FaUser } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { IoTicketSharp } from "react-icons/io5";
import Link from "next/link";
const TabBar = () => {
  return (
    <div className="bg-white shadow-lg border border-border fixed z-[500000000] left-1/2 -translate-x-1/2 bottom-0 md:bottom-3 w-full md:w-[600px] md:rounded-full flex py-1 md:py-2">
      <Link
        href="#"
        className="flex-1 flex justify-center items-center flex-col"
      >
        <FaTrophy className="w-4 h-4 text-accent opacity-50" />
        <span className="text-accent text-sm">Sports</span>
      </Link>
      <Link
        href="#"
        className="flex-1 flex justify-center items-center flex-col"
      >
        <MdCasino className="w-4 h-4 text-accent opacity-50" />
        <span className="text-accent text-sm">Casino</span>
      </Link>
      <Link
        href="#"
        className="flex-1 flex justify-center items-center flex-col"
      >
        <IoTicketSharp className="w-6 h-6 text-white p-1 rounded-full bg-brand" />
        <span className="text-accent text-sm font-medium">Bet slip</span>
      </Link>
      <Link
        href="#"
        className="flex-1 flex justify-center items-center flex-col"
      >
        <FaUser className="w-4 h-4 text-accent opacity-50" />
        <span className="text-accent text-sm">Login</span>
      </Link>
      <Link
        href="#"
        className="flex-1 flex justify-center items-center flex-col"
      >
        <IoMenuSharp className="w-4 h-4 text-accent opacity-50" />
        <span className="text-accent text-sm">Menu</span>
      </Link>
    </div>
  );
};

export default TabBar;
