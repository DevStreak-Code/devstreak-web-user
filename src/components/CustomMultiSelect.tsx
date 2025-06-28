import { X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface CustomMultiSelectProps {
  name?: string;
  label?: string;
  placeholder: string;
  options: {
    label: string;
    value: string;
  }[];
  error?: string;
  disabled?: boolean;
  defaultValues?: string[];
  onChange?: (values: string[]) => void;
}

const CustomMultiSelect: React.FC<CustomMultiSelectProps> = ({
  placeholder,
  options,
  error,
  disabled,
  defaultValues = [],
  onChange,
}) => {
  const [selected, setSelected] = useState<string[]>(defaultValues);
  const [showOptions, setShowOptions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSelect = (value: string) => {
    const updated = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    setSelected(updated);
    onChange?.(updated);
  };

  const clearAll = () => {
    setSelected([]);
    onChange?.([]);
  };

  return (
    <div className="w-full" ref={wrapperRef}>
      <div
        onClick={() => !disabled && setShowOptions(!showOptions)}
        className={`mt-1 w-full min-h-[40px] flex flex-wrap items-center gap-2 border rounded-md px-3 py-2 text-sm shadow-sm bg-white cursor-pointer relative ${
          error
            ? "border-destructive focus:ring-destructive"
            : "border-gray-300 focus:ring-primary focus:border-primary"
        }`}
      >
        {selected.length === 0 && (
          <span className="text-gray-400">{placeholder}</span>
        )}

        {selected.map((val) => {
          const label = options.find((opt) => opt.value === val)?.label || val;
          return (
            <span
              key={val}
              className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs"
            >
              {label}
              <X
                size={12}
                className="cursor-pointer hover:text-red-500"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSelect(val);
                }}
              />
            </span>
          );
        })}

        {selected.length > 0 && (
          <X
            size={16}
            className="ml-auto text-gray-500 hover:text-red-600 absolute right-2 top-2"
            onClick={(e) => {
              e.stopPropagation();
              clearAll();
            }}
          />
        )}
      </div>
      {showOptions && (
        <div className="mt-1 max-h-48 overflow-auto border rounded-md shadow bg-white text-sm z-10 absolute w-full">
          {options.map((option) => (
            <div
              key={option.value}
              className={`px-4 py-2 hover:bg-blue-50 cursor-pointer ${
                selected.includes(option.value) ? "bg-blue-100 font-medium" : ""
              }`}
              onClick={() => toggleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}

      {error && (
        <p
          className="text-destructive mt-2 text-xs"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default CustomMultiSelect;
