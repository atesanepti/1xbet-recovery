import React from "react";
import PaymentMethodFilterMenu from "./PaymentMethodFilterMenu";

const Payment = () => {
  return (
    <div className="py-2 grid grid-cols-[20%,_80%] gap-3">
      <PaymentMethodFilterMenu />
    </div>
  );
};

export default Payment;
