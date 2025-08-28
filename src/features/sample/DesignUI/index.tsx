import ButtonVariants from "./ButtonVariants";
import InputVariants from "./InputVariants";
import SwitchButtonVariants from "./SwitchButtonVariants";
import TextAreaVariants from "./TextAreaVariants";
import RadioVariants from "./RadioVariants";
import AvatarVariants from "./AvatarVariants";
import CustomMultiSelectVariants from "./CustomMultiSelectVariant";
import CustomDatePickerVariants from "./CustomDatePickerVariants";
import CustomSelectVariants from "./CustomSelectVariants";
// import InputTagVariants from "./InputTagVariants";

const DesignUI = () => {
  return (
    <div className="w-full overflow-auto flex flex-col  justify-center gap-10">
      {/* <InputTagVariants/> */}
      <RadioVariants />
      <AvatarVariants />
      <SwitchButtonVariants />
      <TextAreaVariants />
      <ButtonVariants />
      <InputVariants />
      <CustomMultiSelectVariants />
      <CustomDatePickerVariants />
      <CustomSelectVariants />
    </div>
  );
};

export default DesignUI;
