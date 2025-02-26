import FormLoader from "@/components/auth/FormLoader";
import LoginForm from "@/components/auth/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-[#0B2B44] w-full flex justify-center items-center h-screen pb-24 md:pb-32">
      <FormLoader label="Login">
        <LoginForm />
        
      </FormLoader>
    </div>
  );
};

export default LoginPage;
