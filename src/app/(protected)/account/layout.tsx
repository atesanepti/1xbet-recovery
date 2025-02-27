import AccountNavigation from "@/components/account/AccountNavigation";
import Footer from "@/components/landing/footer/Footer";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "1xBet - Account",
  description:
    "Manage your 1xBet Companl account with ease! Check your balance, update details, track bets, and enjoy seamless withdrawals and deposits. Secure and fast access anytime. Log in now!",
};

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#0B2B44]">
      <div className="hidden md:block">
        <div className="grid grid-cols-[25%,_75%]">
          <AccountNavigation />
          <div className="">{children}</div>
        </div>
      </div>
      <div className="md:hidden">{children}</div>
      <Footer />
    </div>
  );
};

export default AccountLayout;
