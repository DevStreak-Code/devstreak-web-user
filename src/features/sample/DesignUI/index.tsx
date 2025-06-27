import ButtonVariants from "./ButtonVariants";
import InputVariants from "./InputVariants";
import SwitchButtonVariants from "./SwitchButtonVariants";
import TextAreaVariants from "./TextAreaVariants";
import RadioVariants from "./RadioVariants";
import AvatarVariants from "./AvatarVariants";
import DatePickerVariants from "./DatePickerVariants";

const DesignUI = () => {
  return (
    <div className="w-full overflow-auto flex flex-col  justify-center gap-10">
      <RadioVariants />
      <AvatarVariants />
      <SwitchButtonVariants />
      <TextAreaVariants />
      <ButtonVariants />
      <InputVariants />
      <DatePickerVariants />
    </div>
  );
};

export default DesignUI;
