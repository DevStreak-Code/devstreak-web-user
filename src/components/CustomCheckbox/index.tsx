import { Checkbox } from "@/components/ui/checkbox";
interface ICheckboxOption {
  label: string;
  value: string;
}

interface ICustomCheckboxGroupProps {
  name?: string;
  label?: string;
  value: string[]; // selected values
  onChange?: (val: string[]) => void;
  onBlur?: () => void;
  options: ICheckboxOption[];
  disabled?: boolean;
  error?: string;
  required?: boolean;
  orientation?: "row" | "column";
}

const CustomCheckboxGroup: React.FC<ICustomCheckboxGroupProps> = ({
  name,
  label,
  value = [],
  onChange,
  onBlur,
  options,
  disabled,
  error,
  required = false,
  orientation = "row",
}) => {
  const orientationClass =
    orientation == "row" ? "flex-row item-center" : "flex-col justify-center";
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm   font-medium text-gray-600">
        {label} {required ? <span className="text-destructive">*</span> : ""}
      </label>{" "}
      <div className={`flex ${orientationClass} gap-2 `}>
        {options.map((option) => {
          const id = `${name}-${option.value}`;
          const isChecked = value.includes(option.value);

          return (
            <div key={option.value} className={`flex items-center gap-2 `}>
              <Checkbox
                id={id}
                name={name}
                checked={isChecked}
                onCheckedChange={(checked) => {
                  let updatedValues = [...value];
                  if (checked) {
                    updatedValues.push(option.value);
                  } else {
                    updatedValues = updatedValues.filter(
                      (v) => v !== option.value
                    );
                  }
                  onChange?.(updatedValues);
                  onBlur?.(); // RHF blur
                }}
                disabled={disabled}
              />
              <label
                htmlFor={id}
                className="text-sm   font-medium text-gray-600"
              >
                {option.label}
              </label>
            </div>
          );
        })}
      </div>
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  );
};

export default CustomCheckboxGroup;
