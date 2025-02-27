"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaLock } from "react-icons/fa";

const PasswordChange = ({ children }: { children: React.ReactNode }) => {
  const [previousPassType, setPreviousPassType] = useState<"text" | "password">(
    "password"
  );
  const [newPassType, setNewPassType] = useState<"text" | "password">(
    "password"
  );
  const [confirmPassType, setconfirmPassType] = useState<"text" | "password">(
    "password"
  );

  const form = useForm();

  const handlePasswordChange = () => {
    //TODo : change password
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-secondary p-4 md:p-6">
        <DialogHeader>
          <DialogTitle className="text-white uppercase">
            password change
          </DialogTitle>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handlePasswordChange)}>
              <FormField
                name="prePassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center border border-border mb-2 ">
                        <div className=" flex-1  ">
                          <Input
                            {...field}
                            placeholder="Previous password"
                            className="placeholder:text-muted text-white  border-none"
                          />
                        </div>

                        <div className="p-2 w-12 relative flex justify-center items-center">
                          <button
                            onClick={() =>
                              previousPassType == "text"
                                ? setPreviousPassType("password")
                                : setPreviousPassType("text")
                            }
                          >
                            {previousPassType == "text" ? (
                              <EyeOff className="text-white w-4 h-4 md:w-5 md:h-5" />
                            ) : (
                              <Eye className="text-white w-4 h-4 md:w-5 md:h-5" />
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

              <FormField
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center border border-border mb-2 ">
                        <div className=" flex-1  ">
                          <Input
                            {...field}
                            placeholder="New password"
                            className="placeholder:text-muted text-white border-none"
                          />
                        </div>

                        <div className="p-2 w-12 relative flex justify-center items-center">
                          <button
                            onClick={() =>
                              newPassType == "text"
                                ? setNewPassType("password")
                                : setNewPassType("text")
                            }
                          >
                            {newPassType == "text" ? (
                              <EyeOff className="text-white w-4 h-4 md:w-5 md:h-5" />
                            ) : (
                              <Eye className="text-white w-4 h-4 md:w-5 md:h-5" />
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

              <FormField
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center border border-border mb-2 ">
                        <div className=" flex-1  ">
                          <Input
                            {...field}
                            placeholder="New password"
                            className="placeholder:text-muted text-white border-none"
                          />
                        </div>

                        <div className="p-2 w-12 relative flex justify-center items-center">
                          <button
                            onClick={() =>
                              confirmPassType == "text"
                                ? setconfirmPassType("password")
                                : setconfirmPassType("text")
                            }
                          >
                            {confirmPassType == "text" ? (
                              <EyeOff className="text-white w-4 h-4 md:w-5 md:h-5" />
                            ) : (
                              <Eye className="text-white w-4 h-4 md:w-5 md:h-5" />
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

              <Button variant={"destructive"} className="mt-2 w-full">
                <FaLock className="w-3 h-3 text-white" />
                SAVE
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PasswordChange;
