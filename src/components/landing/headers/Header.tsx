import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "@/../public/assets/images/logo.svg";
import { Button } from "@/components/ui/button";

import { LogIn, SquarePen } from "lucide-react";
import { BsQrCode } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { IoMdPhonePortrait, IoMdSettings } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { IoMdArrowDropdown } from "react-icons/io";
import Menusm from "./Menu";
import { cn } from "@/lib/utils";
import AuthModal from "@/components/auth/AuthModal";
import Login from "@/components/auth/Login";
import Registation from "@/components/auth/Registation";
const Header = () => {
  return (
    <header className="w-full  z-[1000] sticky top-0 left-0  flex flex-col items-center justify-between ">
      <div className="w-full bg-white flex items-center justify-between">
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
          <Button
            variant={"primary"}
            className="border-l border-b border-white"
          >
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

          <AuthModal
            trigger={
              <Button
                variant={"primary"}
                className="border-l border-b border-white"
              >
                <LogIn className="w-4 h-4 md:w-5 md:h-5" />
                Login
              </Button>
            }
          >
            <Login />
          </AuthModal>

          <AuthModal
            trigger={
              <Button
                variant={"secondary"}
                className="border-l border-b border-white"
              >
                <SquarePen className="w-4 h-4 md:w-5 md:h-5" />
                Registration
              </Button>
            }
          >
            <Registation />
          </AuthModal>

          <Button
            variant={"primary"}
            className="border-l border-b border-white"
          >
            <IoMdSettings className="w-4 h-4 md:w-5 md:h-5" />
          </Button>
        </div>
      </div>
      <div className="w-full bg-primary-foreground flex items-center justify-between py-2 px-2 md:px-4 border-b border-b-white">
        <Link href="/">
          <Image
            src={logo}
            alt="1XBet Companl"
            className="w-[80px] md:w-[100px] "
          />
        </Link>

        <nav className="hidden md:block ">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                Top-Events <IoMdArrowDropdown className={cn("w-4 h-4 ")} />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>EPL</MenubarItem>
                <MenubarItem>LaLiga</MenubarItem>
                <MenubarItem>IPL</MenubarItem>
                <MenubarSeparator />
                {/* <MenubarSub>
                  <MenubarSubTrigger>Share</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Email link</MenubarItem>
                    <MenubarItem>Messages</MenubarItem>
                    <MenubarItem>Notes</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub> */}

                {/* <MenubarItem>
                  Print... <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem> */}
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>
                Spotrs <IoMdArrowDropdown className={cn("w-4 h-4 ")} />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Cricket</MenubarItem>
                <MenubarItem>Soccer</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>
                Live <IoMdArrowDropdown className={cn("w-4 h-4 ")} />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Bet On Your Nation</MenubarItem>
                <MenubarItem>Multi-Live</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>
                Casino <IoMdArrowDropdown className={cn("w-4 h-4 ")} />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>SLOT</MenubarItem>
                <MenubarItem>POCKET</MenubarItem>
                <MenubarItem>Routel Wheel</MenubarItem>
                <MenubarItem>Crash</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>
                Esports <IoMdArrowDropdown className={cn("w-4 h-4 ")} />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Live</MenubarItem>
                <MenubarItem>Pre Match</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </nav>

        <div className="md:hidden">
          <Menusm>
            <MdMenuOpen className="w-5 h-5 text-white" />
          </Menusm>
        </div>
      </div>
    </header>
  );
};

export default Header;
