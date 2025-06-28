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
}

const CustomSelect: React.FC<ICustomSelectProps> = (props) => {
  const { label, placeholder, options } = props;
  return (
    <div className="*:not-first:mt-2">
      {label && (
        <label className="text-sm   font-medium text-gray-600">{label}</label>
      )}
      <Select>
        <SelectTrigger>
          <SelectValue placeholder={placeholder || "Select"} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => {
            return <SelectItem value={option.value}>{option.label}</SelectItem>;
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CustomSelect;
