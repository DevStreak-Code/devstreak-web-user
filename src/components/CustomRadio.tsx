import { RadioGroupItem, RadioGroup } from "./ui/radio-group";

interface ICustomRadioProps {
  name?: string;
  label?: string;
  value?: string;
  onChange?: (val: string) => void;
  onBlur?: () => void;
  options: { label: string; value: string }[];
  disabled?: boolean;
  error?: string;
}

const CustomRadio: React.FC<ICustomRadioProps> = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  options,
  disabled,
  error,
}) => {
  return (
    <div className="space-y-1">
      {label && <label className="text-sm font-medium text-gray-600">{label}</label>}

      <RadioGroup
        value={value}
        onValueChange={(val) => {
          onChange?.(val);
          onBlur?.(); // manually call onBlur for RHF
        }}
        disabled={disabled}
        name={name}
      >
        {options?.map((option) => (
          <div key={option.value} className="flex items-center gap-2">
            <RadioGroupItem value={option.value} id={`${name}-${option.value}`} />
            <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
          </div>
        ))}
      </RadioGroup>

      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  );
};

export default CustomRadio;
