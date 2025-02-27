"use client";
import { cn } from "@/lib/utils";
import { usePaymentMethods } from "@/store/useStore";
import React from "react";

const methods = [
  {
    method: "Bank cards",
    accountQuantity: 1,
    isRecommended: true,
  },
  {
    method: "E-wallets",
    accountQuantity: 24,
    isRecommended: true,
  },
  {
    method: "E-currency exchangers",
    accountQuantity: 99,
    isRecommended: true,
  },
  {
    method: "Internet banking",
    accountQuantity: 24,
    isRecommended: true,
  },
  {
    method: "Cryptocurrency",
    accountQuantity: 48,
    isRecommended: true,
  },
  {
    method: "e-Vouchers",
    accountQuantity: 21,
    isRecommended: true,
  },
];

const PaymentMethodFilterMenu = () => {
  const { methodName } = usePaymentMethods((state) => state);

  const totalMethodsCount = methods.reduce(
    (accum, i) => i.accountQuantity + accum,
    0
  );

  const totalRecommendedCount = methods.filter((m) => m.isRecommended).length;

  return (
    <div className="w-full">
      <nav>
        <PaymentMethodFilterMenuItem
          isVisibale={methodName == "recommended"}
          label={"Recommended methods"}
          count={totalRecommendedCount}
        />
        <PaymentMethodFilterMenuItem
          isVisibale={methodName == ""}
          label={"All Methods"}
          count={totalMethodsCount}
        />
        {methods.map((m, i) => (
          <PaymentMethodFilterMenuItem
            isVisibale={methodName == m.method}
            key={i}
            label={m.method}
            count={m.accountQuantity}
          />
        ))}
      </nav>
    </div>
  );
};

const PaymentMethodFilterMenuItem = ({
  label,
  count,
  isVisibale,
}: {
  label: string;
  count: string | number;
  isVisibale: boolean;
}) => {
  return (
    <div
      className={cn(
        " w-full px-2 md:px-4 py-2  hover:bg-bg-[#4682B4]",
        `${isVisibale ? "bg-[#4682b4]" : "bg-white"}`
      )}
    >
      <span className="text-xs md:text-sm text-white">{label}</span>
      <span className="text-xs md:text-sm text-white">{count}</span>
    </div>
  );
};
export default PaymentMethodFilterMenu;
