import { RadioGroupItem, RadioGroup } from "./ui/radio-group";

interface ICustomRadioProps {
  disabled?: boolean;
  options: { label: string; value: string }[];
}
const CustomRadio: React.FC<ICustomRadioProps> = (props) => {
  const { disabled } = props;
  return (
    <RadioGroup defaultValue="1" disabled={disabled}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="1" />
        <label htmlFor="id-1">Option 1</label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="2" />
        <label htmlFor="id-2">Option 2</label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="3" />
        <label htmlFor="id-3">Option 3</label>
      </div>
    </RadioGroup>
  );
};

export default CustomRadio;
