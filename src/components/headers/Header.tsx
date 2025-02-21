import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "@/../public/assets/images/logo.svg";
import { Button } from "../ui/button";

import { LogIn, SquarePen } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full h-[65px] sticky top-0 left-0 bg-primary flex items-center justify-between px-4 md:px-8 ">
      <Link href="/">
        <Image
          src={logo}
          alt="1XBet Companl"
          className="w-[80px] md:w-[100px] "
        />
      </Link>

      <div className="flex items-center gap-2 md:gap-3">
        <Button variant={"primary"}>
          <LogIn className="w-4 h-4 md:w-5 md:h-5" />
          Login
        </Button>
        <Button variant={"secondary"}>
          <SquarePen className="w-4 h-4 md:w-5 md:h-5" />
          Registration
        </Button>
      </div>
    </header>
  );
};

export default Header;
