import React from "react";

const PaymentFilterButton = () => {
  return (
    <button className="flex items-center gap-2 mt-2">
      <div className="w-4 h-4 border border-border relative">
        <div className="w-3 h-3 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-brand-foreground/90"></div>
      </div>
    </button>
  );
};

export default PaymentFilterButton;
