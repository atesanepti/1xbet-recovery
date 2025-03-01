"use client";
import React from "react";
import { Button } from "../ui/button";

const Wallet = () => {
  return (
    <div className="wallet-bg p-2 h-[170px] md:h-[200px]">
      <span className="text-[10px] font-normal md:text-xs">
        <span className="text-primary uppercase block">Welcome</span>
        <span className="text-white text-sm md:text-base font-semibold">
          San Bin
        </span>
      </span>
      <div className="my-1 md:my-2 flex items-center justify-between">
        <span className="font-semibold text-primary text-xs md:text-sm">
          Main account
        </span>
        <span className="font-semibold text-white text-xs md:text-sm">
          200.00
        </span>
      </div>

      <div className="mt-3 md:my-4 mb-2 md:mb-3">
        <Button
          size={"sm"}
          className="bg-[#7daa2fbe] hover:bg-[#7daa2fbe]/90  text-white uppercase mb-2 w-full block "
        >
          deposit
        </Button>
        <Button
          size={"sm"}
          className="bg-[#7daa2fbe] hover:bg-[#7daa2fbe]/90 text-white uppercase mb-2  w-full block"
        >
          Withdraw
        </Button>
      </div>
    </div>
  );
};

export default Wallet;
