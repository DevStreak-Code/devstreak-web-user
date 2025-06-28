import { Eye, EyeOff } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";

interface ICustomInputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "email" | "number";
  error?: string;
  disabled?: boolean;
  defaultValue?: string;
  required?: boolean;
  isShowEndIcon?: boolean;
  ref?: React.Ref<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const CustomInput: React.FC<ICustomInputProps> = (props) => {
  const [show, setShow] = useState(false);
  const {
    label,
    placeholder,
    type = "text",
    name,
    error,
    disabled,
    defaultValue,
    required,
    ref,
    onChange,
    onBlur,
  } = props;

  const isPassword = type === "password";
  const inputType = isPassword ? (show ? "text" : "password") : type;
  return (
    <div className="">
      <label htmlFor={name} className="text-sm   font-medium text-gray-600">
        {label} {required ? <span className="text-destructive">*</span> : ""}
      </label>{" "}
      <br />
      <div className="relative">
        <Input
          ref={ref}
          id={name}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          type={inputType}
          onChange={onChange}
          onBlur={onBlur}
          // defaultValue="invalid@email.com"
          aria-invalid={Boolean(error)}
          disabled={disabled}
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        />
        <div className="text-muted-foreground/80  absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50">
          {isPassword ? (
            show ? (
              <Eye
                size={16}
                aria-hidden="true"
                onClick={() => setShow(!show)}
              />
            ) : (
              <EyeOff
                size={16}
                aria-hidden="true"
                onClick={() => setShow(!show)}
              />
            )
          ) : (
            <></>
          )}
        </div>
      </div>
      {error ? (
        <p
          className="text-destructive mt-2 text-xs"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CustomInput;
