import React from "react";
import { Button } from "../ui/button";
import { LogIn, SquarePen } from "lucide-react";

const AuthButtons = () => {
  return (
    <div className="flex items-center gap-2 justify-end py-4">
      <Button className="bg-brand-foreground rounded-sm text-white hover:bg-brand-foreground/90 text-[10px]">
        <LogIn className="w-4 h-3 text-white hidden md:block" />
        Login
      </Button>
      <Button className="bg-primary text-white rounded-sm hover:bg-primary/90 text-[10px]">
        Registration{" "}
        <SquarePen className="w-4 h-4 hidden md:block text-white" />
      </Button>
    </div>
  );
};

export default AuthButtons;
