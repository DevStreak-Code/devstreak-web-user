import ButtonVariants from "./ButtonVariants";
import InputVariants from "./InputVariants";
import TextAreaVariants from "./TextAreaVariants";

const DesignUI = () => {
  return (
    <div className="w-full overflow-auto flex flex-col  justify-center gap-10">
      <TextAreaVariants />
      <ButtonVariants />
      <InputVariants />
    </div>
  );
};

export default DesignUI;
