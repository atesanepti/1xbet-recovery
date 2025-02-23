import React from "react";
import { AuthMethods } from "../types";

interface FormLoaderProps {
  children: React.ReactNode;
  label: string;
  authMethods?: Array<AuthMethods>;
  activeAuthMethod?: AuthMethods;
}

const FormLoader = ({
  children,
  label,
  authMethods,
  activeAuthMethod = AuthMethods.BYEMAIL,
}: FormLoaderProps) => {
  return (
    <div className="p-4 md:p-6 shadow-sm bg-white rounded-md">
      <h3 className="text-accent text-lg font-bold md:text-2xl text-center my-3 md:my-5 uppercase">
        {label}
      </h3>

      <div className=" border border-muted rounded-sm">
        {authMethods && (
          <div className="w-full flex items-center">
            {authMethods?.map((m, i) => (
              <button
                key={i}
                className={`flex-1 text-primary text-xs px-3 py-1 capitalize bg-[#D7E5F1] ${
                  m == activeAuthMethod && "bg-primary text-white"
                } flex-1`}
              >
                {m}
              </button>
            ))}
          </div>
        )}

        <div className="p-2 md:p-3">{children}</div>
      </div>
    </div>
  );
};

export default FormLoader;
