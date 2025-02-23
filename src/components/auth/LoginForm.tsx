"use client";
import React, { useState } from "react";

import { Eye, EyeOff, Mail } from "lucide-react";

import {
  Form,
  FormControl,
  FormMessage,
  FormItem,
  FormField,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { FloatingInput, FloatingLabel } from "../ui/floating-label-input";
import Link from "next/link";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import SocialMediaLogin from "./SocialMediaLogin";

const LoginForm = () => {
  const form = useForm();

  const [passwordType, setPasswordType] = useState<"text" | "password">(
    "password"
  );

  const handleLogin = () => {
    // TODO : handle login api call
  };

  const togglePasswordType = () => {
    if (passwordType == "text") {
      setPasswordType("password");
    } else if (passwordType == "password") {
      setPasswordType("text");
    }
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)}>
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center border border-border mb-2 md:mb-3">
                    <div className="relative flex-1 ">
                      <FloatingInput
                        {...field}
                        id="floating-customize"
                        className=" border-none "
                      />
                      <FloatingLabel htmlFor="floating-customize">
                        ID OR Email
                      </FloatingLabel>
                    </div>

                    <div className="p-2 w-12 relative flex justify-center items-center">
                      <Mail className="text-accent w-4 h-4 md:w-5 md:h-5" />

                      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[2px] h-7 bg-[#d5e4f0]"></div>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            control={form.control}
          />

          <FormField
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center border border-border ">
                    <div className="relative flex-1  ">
                      <FloatingInput
                        {...field}
                        type={passwordType}
                        id="floating-customize-2"
                        className=" border-none"
                      />
                      <FloatingLabel htmlFor="floating-customize-2">
                        Password
                      </FloatingLabel>
                    </div>

                    <div className="p-2 w-12 relative flex justify-center items-center">
                      <button onClick={togglePasswordType}>
                        {passwordType == "text" ? (
                          <EyeOff className="text-accent w-4 h-4 md:w-5 md:h-5" />
                        ) : (
                          <Eye className="text-accent w-4 h-4 md:w-5 md:h-5" />
                        )}
                      </button>

                      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[2px] h-7 bg-[#d5e4f0]"></div>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            control={form.control}
          />

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" />
              <Label
                htmlFor="remember"
                className="text-sm text-primary-foreground font-medium"
              >
                Remember
              </Label>
            </div>

            <Link
              href="#"
              className="text-[10px] text-xs text-muted-foreground hover:underline hover:text-brand-foreground"
            >
              Forgot your password?
            </Link>
          </div>

          <Button variant={"ghost"} className="w-full">
            Login
          </Button>
        </form>

        <span className="text-[10px] md:text-xs text-muted-foreground my-3 block text-center">
          You can log in to the website via:
        </span>

        <SocialMediaLogin />
      </Form>
    </div>
  );
};

export default LoginForm;
