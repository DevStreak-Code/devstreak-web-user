"use client";

import * as React from "react";
import { Check, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
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
import { Button } from "@/components/ui/button";

export interface AutocompleteOption {
  label: string;
  value: string;
  extra?: { [key: string]: unknown };
}

interface CustomAutocompleteProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  fetchOptions: (query: string) => Promise<AutocompleteOption[]>;
  required?: boolean;
  error?: string;
  disabled?: boolean;
}

const CustomAutocomplete: React.FC<CustomAutocompleteProps> = ({
  label,
  placeholder = "Search...",
  value,
  onChange,
  fetchOptions,
  required,
  error,
  disabled,
}) => {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [options, setOptions] = React.useState<AutocompleteOption[]>([]);
  const [loading, setLoading] = React.useState(false);

  const selectedOption = options.find((o) => o.value === value);

  React.useEffect(() => {
    if (!search || search.length < 2) {
      setOptions([]);
      return;
    }

    setLoading(true);
    const delay = setTimeout(async () => {
      try {
        const results = await fetchOptions(search);
        setOptions(results);
      } finally {
        setLoading(false);
      }
    }, 400); // debounce
    return () => clearTimeout(delay);
  }, [search, fetchOptions]);

  return (
    <div className="flex flex-col gap-2">
      {/* Label */}
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-destructive">*</span>}
        </label>
      )}

      {/* Popover */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            disabled={disabled}
            className={cn(
              "w-full justify-between text-left font-normal",
              !value && "text-muted-foreground",
              error &&
                "border-destructive focus:ring-destructive focus:border-destructive"
            )}
          >
            {selectedOption ? selectedOption.label : placeholder || "Select..."}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[var(--radix-popover-trigger-width)] p-0 rounded-md border bg-white shadow-md"
          align="start"
        >
          <Command shouldFilter={false}>
            <CommandInput
              value={search}
              onValueChange={setSearch}
              placeholder={placeholder}
              className="h-10"
            />
            <CommandList>
              {loading ? (
                <div className="flex items-center justify-center p-3">
                  <Loader2 className="h-4 w-4 animate-spin text-gray-500" />
                </div>
              ) : (
                <>
                  <CommandEmpty className="p-3 text-sm text-gray-500">
                    No results found.
                  </CommandEmpty>
                  <CommandGroup>
                    {options.map((option) => (
                      <CommandItem
                        key={option.value}
                        onSelect={() => {
                          onChange?.(option.value);
                          setOpen(false);
                        }}
                        className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100"
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4 text-primary",
                            option.value === value ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {option.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Error */}
      {error && (
        <p className="text-destructive text-xs" role="alert" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
};

export default CustomAutocomplete;
