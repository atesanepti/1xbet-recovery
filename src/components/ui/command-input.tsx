"use client";
import React, { useEffect } from "react";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const InputCommand = ({ onChange }: { onChange: (value: string) => void }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const currencies = [
    { currency: "BDT", country: "Bangladesh", full: "BDT (Bangladesh)" },
    { currency: "INR", country: "India", full: "INR (India)" },
    { currency: "PKR", country: "Pakistan", full: "PKR (Pakistan)" },
    { currency: "LKR", country: "Sri Lanka", full: "LKR (Sri Lanka)" },
    { currency: "NPR", country: "Nepal", full: "NPR (Nepal)" },
    { currency: "AFN", country: "Afghanistan", full: "AFN (Afghanistan)" },
    { currency: "MMK", country: "Myanmar", full: "MMK (Myanmar)" },
    { currency: "BND", country: "Brunei", full: "BND (Brunei)" },
    { currency: "SGD", country: "Singapore", full: "SGD (Singapore)" },
    { currency: "MYR", country: "Malaysia", full: "MYR (Malaysia)" },
    { currency: "USD", country: "United States", full: "USD (United States)" },
    { currency: "EUR", country: "Eurozone", full: "EUR (Eurozone)" },
  ];

  useEffect(() => {
    if (value) {
      onChange(value);
    }
  }, [value, onChange]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="w-full bg-transparent justify-between border !border-border text-accent capitalize font-medium  hover:bg-transparent"
        >
          {value
            ? currencies.find(
                (allowedValue) => allowedValue.currency.toString() == value
              )?.full
            : currencies[0].full}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 z-[50000000]">
        <Command>
          <CommandInput placeholder="Select Currency" />
          <CommandList>
            <CommandGroup>
              {currencies.map((currency) => (
                <CommandItem
                  key={currency.currency}
                  value={currency.currency.toString()}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {currency.full}
                  <Check
                    className={cn(
                      "ml-auto",
                      value == currency.currency.toString()
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default InputCommand;
