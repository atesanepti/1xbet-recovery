import React from "react";
import Header from "@/components/landing/headers/Header";
import TabBar from "@/components/landing/TabBar";
import Wallet from "@/components/account/Wallet";
import AccountMenu from "@/components/account/AccountMenu";

const AccountPage = () => {
  return (
    <div className="bg-[#0B2B44] min-h-screen pb-24 md:pb-32">
      <Header />
      <main className="container">
        <div className="px-2 py-2">
          <Wallet />
          <AccountMenu />
        </div>
      </main>
      <TabBar />
    </div>
  );
};

export default AccountPage;
