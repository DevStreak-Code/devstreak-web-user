import MultipleSelector, { type Option } from "@/components/ui/multiselect";

interface ICustomMultiSelectProps {
  label: string;
  placeholder: string;
  options: Option[];
}

const CustomMultiSelect: React.FC<ICustomMultiSelectProps> = (props) => {
  const { label, placeholder, options } = props;
  return (
    <div className="*:not-first:mt-2">
      {label ? (
        <label htmlFor={""} className="text-sm   font-medium text-gray-600">
          {label}
        </label>
      ) : (
        ""
      )}
      <MultipleSelector
        commandProps={{
          label: label,
        }}
        defaultOptions={options}
        placeholder={placeholder}
        emptyIndicator={<p className="text-center text-sm">No results found</p>}
      />
    </div>
  );
};

export default CustomMultiSelect;
