import React from "react";

interface Option {
  label: string;
  value: string | number;
}

interface ICustomSelectProps {
  name?: string;
  label?: string;
  placeholder?: string;
  options: Option[];
  error?: string;
  disabled?: boolean;
  required?: boolean;
  ref?: React.Ref<HTMLSelectElement>;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
}

const CustomSelect: React.FC<ICustomSelectProps> = ({
  name,
  label,
  placeholder = "Select an option",
  options,
  error,
  disabled,
  required,
  ref,
  onChange,
  onBlur,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {label}{" "}
          {required && <span className="text-destructive text-base">*</span>}
        </label>
      )}

      <select
        ref={ref}
        id={name}
        name={name}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        className={`mt-1 w-full rounded-md px-3 py-2 text-sm shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
          ${disabled ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""}
          ${error ? "border border-destructive text-destructive" : "border border-gray-300"}
        `}
      >
        <option value="" disabled selected hidden>
          {placeholder}
        </option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && (
        <p
          className="text-destructive mt-1 text-xs"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default CustomSelect;
