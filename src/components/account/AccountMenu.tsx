"use client";
import React from "react";

import { FaUserCircle } from "react-icons/fa";
import { MdSecurity, MdOutlineHistory } from "react-icons/md";
import { PiHandDepositBold, PiHandWithdrawFill } from "react-icons/pi";
import { GrTransaction } from "react-icons/gr";
import { IoIosLogOut, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
const AccountMenu = () => {
  return (
    <div className="p-1 md:p-2">
      <ul>
        <li className="flex items-center justify-between px-1 py-2">
          <div className="flex gap-1 items-center">
            <FaUserCircle className="w-5 md:h-5 text-white" />
            <span className="text-sm md:text-base font-semibold text-white uppercase">
              personal profile
            </span>
          </div>
          <Link href="#">
            <IoIosArrowForward className="w-5 h-5  text-white" />
          </Link>
        </li>

        <li className="flex items-center justify-between px-1 py-2">
          <div className="flex gap-1 items-center">
            <MdSecurity className="w-5 h-5 text-white" />
            <span className="text-sm md:text-base font-semibold text-white uppercase">
              security
            </span>
          </div>
          <Link href="#">
            <IoIosArrowForward className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </Link>
        </li>

        <li className="flex items-center justify-between px-1 py-2">
          <div className="flex gap-1 items-center">
            <MdOutlineHistory className="w-5 h-5 text-white" />
            <span className="text-sm md:text-base font-semibold text-white uppercase">
              bet history
            </span>
          </div>
          <Link href="#">
            <IoIosArrowForward className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </Link>
        </li>

        <li className="flex items-center justify-between px-1 py-2">
          <div className="flex gap-1 items-center">
            <PiHandDepositBold className="w-5 h-5 text-white" />
            <span className="text-sm md:text-base font-semibold text-white uppercase">
              desposit
            </span>
          </div>
          <Link href="#">
            <IoIosArrowForward className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </Link>
        </li>

        <li className="flex items-center justify-between px-1 py-2">
          <div className="flex gap-1 items-center">
            <PiHandWithdrawFill className="w-5 h-5 text-white" />
            <span className="text-sm md:text-base font-semibold text-white uppercase">
              withdraw
            </span>
          </div>
          <Link href="#">
            <IoIosArrowForward className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </Link>
        </li>

        <li className="flex items-center justify-between px-1 py-2">
          <div className="flex gap-1 items-center">
            <GrTransaction className="w-5 h-5 text-white" />
            <span className="text-sm md:text-base font-semibold text-white uppercase">
              Transaction history
            </span>
          </div>
          <Link href="#">
            <IoIosArrowForward className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </Link>
        </li>

        <li className="flex items-center justify-between px-1 py-2">
          <div className="flex gap-1 items-center">
            <IoIosLogOut className="w-5 h-5 text-white" />
            <span className="text-sm md:text-base font-semibold text-white uppercase">
              log out
            </span>
          </div>
          <Link href="#">
            <IoIosArrowForward className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountMenu;
