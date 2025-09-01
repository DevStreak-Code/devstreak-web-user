import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ICustomSelectProps {
  label: string;
  placeholder?: string;
  options: {
    label: string;
    value: string;
  }[];
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
}

const CustomSelect: React.FC<ICustomSelectProps> = ({
  label,
  placeholder,
  options,
  value,
  onChange,
  onBlur,
  disabled,
  required,
  error,
}) => {
  const handleChange = (val: string) => {
    onChange?.(val);
    onBlur?.(); // ✅ manually mark field as touched
  };

  return (
    <div className="*:not-first:mt-2">
      {label && (
        <label className="text-sm   font-medium text-gray-600">
          {label} {required && <span className="text-destructive">*</span>}
        </label>
      )}
      <Select disabled={disabled} value={value} onValueChange={handleChange}>
        <SelectTrigger className={error ? "text-destructive" : ""}>
          <SelectValue
            placeholder={placeholder || "Select"} // ✅ display correct label when value is set
            defaultValue={value}
          />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

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

export default CustomSelect;
