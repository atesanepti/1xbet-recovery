import React from "react";
import PageHeader from "@/components/PageHeader";
import PaymentFilterButton from "@/components/account/deposit/PaymentFilterButton";
import { RiErrorWarningFill } from "react-icons/ri";
const DepositPage = () => {
  return (
    <div className="bg-[#D0DAE1] px-2 md:px-4 md:py-5">
      <main>
        <PageHeader label="Deposit into personal account" />
        <div>
          <h4 className="text-accent text-base md:text-2xl font-semibold md:font-medium">
            Account Id : 18435789
          </h4>
          <p className="hidden md:text-sm text-accent">
            Select payment method to top up your account:
          </p>
        </div>
        <PaymentFilterButton />
        <div className="bg-[#e0e0e0] p-1 md:p-2 flex items-center gap-2 md:gap-3">
          <RiErrorWarningFill className="w-7 h-7 md:w-8 md:h-8 text-black" />
          <p className="text-[##2d3842] text-xs md:text-sm ">
            আপনি যদি ৩ ঘন্টার মধ্যে আপনার গেমিং অ্যাকাউন্টে ডিপোজিটের টাকা না
            পান তাহলে অনুগ্রহ করে লেনদেনের প্রমাণ সহ আমাদের সাধারণ ইমেইল
            এ্যাড্রেস transaction-bn@1xbet-team.com-এ যোগাযোগ করুন পরবর্তী
            বিবরণে দয়া করে লিখুন আপনার Player id, Transaction ID, Client no,
            Agent number, Time, date, Amount , এবং বিকাশ /নগদ /রকেট /উপায় অ্যাপ
            থেকে লেনদেনের স্ক্রিনশট / If You do not receive the deposit amount
            in your gaming account within 3 hours please contact our general
            queries email transaction-bn@1xbet-team.com with next details:
            Player id, Transaction ID, Client no, Agent number, Time, Date,
            Amount, Transaction Screenshot from app
          </p>
        </div>

        
      </main>
    </div>
  );
};

export default DepositPage;
