import { Eye, EyeOff } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";

interface ICustomInputProps {
  name?: string;
  label?: string;
  placeholder: string;
  type?: "text" | "password" | "email" | "number";
  error?: string;
  disabled?: boolean;
  required?: boolean;
  isShowEndIcon?: boolean;
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
    required,
  } = props;

  const isPassword = type === "password";
  const inputType = isPassword? (show? "text" : "password") : type;
  return (
    <div className="">
      <label htmlFor={name} className="text-sm">
        {label} {required ? <span className="text-destructive">*</span> : ""}
      </label>{" "}
      <br />
      <div className="relative">
        <Input
          id={name}
          name={name}
          placeholder={placeholder}
          type={inputType}
          // defaultValue="invalid@email.com"
          aria-invalid={Boolean(error)}
          disabled={disabled}
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
