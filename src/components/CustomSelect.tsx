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
}

const CustomSelect: React.FC<ICustomSelectProps> = ({
  label,
  placeholder,
  options,
  value,
  onChange,
  onBlur,
  error,
}) => {
  const handleChange = (val: string) => {
    onChange?.(val);
    onBlur?.(); // ✅ manually mark field as touched
  };

  return (
    <div className="*:not-first:mt-2">
      {label && (
        <label className="text-sm font-medium text-gray-600">{label}</label>
      )}
      <Select value={value} onValueChange={handleChange}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder || "Select"} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  );
};

export default CustomSelect;
