import MultipleSelector, { type Option } from "@/components/ui/multiselect";

interface ICustomMultiSelectProps {
  label: string;
  placeholder?: string;
  options: Option[];
  value?: string[]; // ids only
  onChange?: (value: string[]) => void;
  onBlur?: () => void;
  error?: string;
}

const CustomMultiSelect: React.FC<ICustomMultiSelectProps> = ({
  label,
  placeholder,
  options,
  value = [],
  onChange,
  onBlur,
  error,
}) => {
  // Convert selected ids to Option objects
  const selectedOptions = options.filter((opt) => value.includes(opt.value));

  return (
    <div className="*:not-first:mt-2">
      {label && (
        <label className="text-sm font-medium text-gray-600">{label}</label>
      )}
      <MultipleSelector
        commandProps={{ label }}
        defaultOptions={options}
        placeholder={placeholder}
        value={selectedOptions} // required by MultipleSelector
        onChange={(selected: Option[]) => {
          onChange?.(selected.map((s) => s.value)); // return array of ids only
          onBlur?.();
        }}
        emptyIndicator={<p className="text-center text-sm">No results found</p>}
      />
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  );
};

export default CustomMultiSelect;
