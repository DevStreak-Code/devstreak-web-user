import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface ICustomSelectProps {
  label: string;
  placeholder: string;
  options: {
    label: string;
    value: string;
  }[];
  error?:string;
  disabled?: boolean;
  required?: boolean;
}

const CustomSelect: React.FC<ICustomSelectProps> = (props) => {
  const { label, placeholder, options,error,disabled=false,required=false } = props;
  return (
    
    <div className="*:not-first:mt-2">
      {label && (
        <label className="text-sm   font-medium text-gray-600">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Select disabled={disabled}>
        <SelectTrigger className={error ? "border-red-500" : ""}>
          <SelectValue placeholder={placeholder || "Select"} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => {
            return <SelectItem value={option.value}>{option.label}</SelectItem>;
          })}
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
