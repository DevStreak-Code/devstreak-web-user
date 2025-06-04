import ButtonVariants from "./ButtonVariants";
import InputVariants from "./InputVariants";
import CustomTextArea from "@/components/CustomTextArea";

const DesignUI = () => {
  return (
    <div className="w-full overflow-auto flex flex-col  justify-center gap-10">
      <CustomTextArea
        placeholder="Leave a comment"
        required={true}
        error="Invalid msg"
      />
      <CustomTextArea placeholder="Hello world" required={true} />
      <CustomTextArea />
      <CustomTextArea />
      <ButtonVariants />
      <InputVariants />
    </div>
  );
};

export default DesignUI;
