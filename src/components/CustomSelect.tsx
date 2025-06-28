import React from "react";

interface Option {
  label: string;
  value: string | number;
}

interface CustomSelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  options: Option[];
  error?: string;
  disabled?: boolean;
  required?: boolean; // only for showing the star
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  label,
  placeholder,
  options,
  error,
  disabled = false,
  required = false,
  value,
  onChange,
}) => {
  return (
    <div className="">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-600"
        >
          {label} {required && <span className="text-destructive">*</span>}
        </label>
      )}
      <br />

      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          className={`mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
            disabled ? "bg-gray-100 cursor-not-allowed" : ""
          }`}
        >
          {placeholder && (
            <option value="">{placeholder}</option> 
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {error ? (
        <p
          className="text-destructive mt-2 text-xs"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
};
