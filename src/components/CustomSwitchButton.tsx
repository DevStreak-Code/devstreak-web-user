import { Switch } from "@/components/ui/switch";

interface ICustomSwitchButtonProps {
  name?: string;
  disabled?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  onBlur?: () => void;
  error?: string;
  label?: string;
}

const CustomSwitchButton: React.FC<ICustomSwitchButtonProps> = ({
  name,
  disabled,
  checked,
  onCheckedChange,
  onBlur,
  error,
  label,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-600">
          {label}
        </label>
      )}
      <Switch
        id={name}
        name={name}
        checked={checked}
        onCheckedChange={(val) => {
          onCheckedChange?.(val);
          onBlur?.(); // mark as touched
        }}
        disabled={disabled}
      />
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  );
};

export default CustomSwitchButton;
