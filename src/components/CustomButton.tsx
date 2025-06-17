import { Loader } from "lucide-react";
import { Button } from "./ui/button";

interface ButtonProps {
  variant?: "default" | "outline";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
  label: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loadingText?: string;
  className?: string;
  type?: "button" | "reset" | "submit";
}

const CustomButton: React.FC<ButtonProps> = (props) => {
  const {
    variant,
    label,
    leftIcon,
    rightIcon,
    disabled,
    onClick,
    isLoading,
    loadingText = "Loading",
    className = "",
    type = "button",
  } = props;
  return (
    <Button
      size="default"
      type={type}
      variant={variant}
      className={`
       ${
         disabled || isLoading
           ? "cursor-not-allowed opacity-60"
           : "cursor-pointer"
       } ${className}`}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {!isLoading && leftIcon}

      <span className="text-sm">{isLoading ? loadingText : label}</span>
      {isLoading ? <Loader className="animate-spin" /> : rightIcon}
    </Button>
  );
};

export default CustomButton;
