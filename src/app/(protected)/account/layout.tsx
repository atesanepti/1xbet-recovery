import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "1xBet - Account",
  description:
    "Manage your 1xBet Companl account with ease! Check your balance, update details, track bets, and enjoy seamless withdrawals and deposits. Secure and fast access anytime. Log in now!",
};

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default AccountLayout;
