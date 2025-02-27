"use client";
import React from "react";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaLock } from "react-icons/fa";

const NameChange = ({ children }: { children: React.ReactNode }) => {
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
            Change Your name
          </DialogTitle>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handlePasswordChange)}>
              <FormField
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Your First name"
                        className="placeholder:text-muted text-white  border-border border mb-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                control={form.control}
              />

              <FormField
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Your Last name"
                        className="placeholder:text-muted text-white  border-border border"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                control={form.control}
              />

              <Button
                variant={"destructive"}
                className="mt-2 w-full !bg-brand-foreground"
              >
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

export default NameChange;
