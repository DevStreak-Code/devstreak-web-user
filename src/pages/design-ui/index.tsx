import ButtonVariants from "./ButtonVariants";
import InputVariants from "./InputVariants";
import SwitchButtonVariants from "./SwitchButtonVariants";
import TextAreaVariants from "./TextAreaVariants";
import RadioVariants from "./RadioVariants";

const DesignUI = () => {
  return (
    <div className="w-full overflow-auto flex flex-col  justify-center gap-10">
      <RadioVariants />
      <SwitchButtonVariants />
      <TextAreaVariants />
      <ButtonVariants />
      <InputVariants />
    </div>
  );
};

export default DesignUI;
