import { Switch } from "@/components/ui/switch";

interface ICustomSwitchButtonProps {
  disabled?: boolean;
  placeholder?: string;
}
const CustomSwitchButton: React.FC<ICustomSwitchButtonProps> = (props) => {
  const { disabled } = props;
return (
    <Switch
        disabled={disabled}
    />
);
};

export default CustomSwitchButton;
