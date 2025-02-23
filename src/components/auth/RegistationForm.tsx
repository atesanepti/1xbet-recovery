"use client";
import React from "react";


import {
  Form,
  FormControl,
  FormMessage,
  FormItem,
  FormField,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { FloatingInput, FloatingLabel } from "../ui/floating-label-input";
import { Button } from "../ui/button";
import SocialMediaLogin from "./SocialMediaLogin";
import InputCommand from "../ui/command-input";

const RegistationForm = () => {
  const form = useForm();

  // const [passwordType, setPasswordType] = useState<"text" | "password">(
  //   "password"
  // );

  // const [confirmPasswordTrype, setConfirmPasswordType] = useState<
  //   "text" | "password"
  // >("password");

  const handleRegistation = () => {
    // TODO : handle login api call
  };

  // const togglePasswordType = () => {
  //   if (passwordType == "text") {
  //     setPasswordType("password");
  //   } else if (passwordType == "password") {
  //     setPasswordType("text");
  //   }
  // };
  // const toggleConfirmPasswordType = () => {
  //   if (confirmPasswordTrype == "text") {
  //     setConfirmPasswordType("password");
  //   } else if (passwordType == "password") {
  //     setConfirmPasswordType("text");
  //   }
  // };

  return (
    <div className="w-full ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleRegistation)}>
          <FormField
            name="currencyCode"
            render={({}) => (
              <FormItem>
                <FormControl>
                  <InputCommand
                    onChange={(value) => form.setValue("currencyCode", value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            control={form.control}
          />

          <div className="my-5 flex justify-center">
            <div className="w-[200px] md:w-300px] bg-border h-[1px]"></div>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div className="relative flex-1  ">
                      <FloatingInput
                        {...field}
                        type="email"
                        id="floating-email"
                        className=" "
                      />
                      <FloatingLabel
                        htmlFor="floating-email"
                        className="font-normal"
                      >
                        Email
                      </FloatingLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
            />
            <FormField
              name="Phone"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div className="relative flex-1  ">
                      <FloatingInput
                        {...field}
                        type="text"
                        id="floating-phone"
                        className=" "
                      />
                      <FloatingLabel
                        htmlFor="floating-phone"
                        className="font-normal"
                      >
                        Phone
                      </FloatingLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
            />
          </div>

          <div className="flex items-center gap-3 mb-3">
            <FormField
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div className="relative flex-1  ">
                      <FloatingInput
                        {...field}
                        type="text"
                        id="floating-firstName"
                        className=" "
                      />
                      <FloatingLabel
                        htmlFor="floating-firstName"
                        className="font-normal"
                      >
                        First Name
                      </FloatingLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
            />
            <FormField
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div className="relative flex-1  ">
                      <FloatingInput
                        {...field}
                        type="text"
                        id="floating-lastName"
                        className=" "
                      />
                      <FloatingLabel
                        htmlFor="floating-lastName"
                        className="font-normal"
                      >
                        Last Name
                      </FloatingLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
            />
          </div>

          <div className="flex items-center gap-3">
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div className="relative flex-1  ">
                      <FloatingInput
                        {...field}
                        type="password"
                        id="floating-password"
                        className=" "
                      />
                      <FloatingLabel
                        htmlFor="floating-password"
                        className="font-normal"
                      >
                        Password
                      </FloatingLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
            />
            <FormField
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div className="relative flex-1  ">
                      <FloatingInput
                        {...field}
                        type="text"
                        id="floating-confirmPassword"
                        className=" "
                      />
                      <FloatingLabel
                        htmlFor="floating-confirmPassword"
                        className="font-normal"
                      >
                        Confirm Password
                      </FloatingLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
            />
          </div>

          <div className="my-5 flex justify-center">
            <div className="w-[200px] md:w-300px] bg-border h-[1px]"></div>
          </div>

          <div className="flex items-center gap-2">
            <FormField
              name="promo"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div className="relative flex-1  ">
                      <FloatingInput
                        {...field}
                        type="text"
                        id="floating-promo"
                        className=" "
                      />
                      <FloatingLabel
                        htmlFor="floating-promo"
                        className="font-normal"
                      >
                        Enter Promo Code
                      </FloatingLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
            />
            <div className="flex-1">
              <Button className="!w-full !h-9" variant={"ghost"}>
                Registation
              </Button>
            </div>
          </div>
        </form>

        <span className="text-[10px] md:text-xs text-muted-foreground my-3 block text-center">
          You can log in to the website via:
        </span>

        <SocialMediaLogin />
      </Form>
    </div>
  );
};

export default RegistationForm;
