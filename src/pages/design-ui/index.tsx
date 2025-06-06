import AvatarVariants from "./AvatarVariants";
import ButtonVariants from "./ButtonVariants";
import InputVariants from "./InputVariants";
import SwitchButtonVariants from "./SwitchButtonVariants";
import TextAreaVariants from "./TextAreaVariants";
import RadioVariants from "./RadioVariants";
import CustomCard from "@/components/Customecard";



const DesignUI = () => {
  return (
    <div className="w-full overflow-auto flex flex-col  justify-center gap-10">
      <RadioVariants />
      <AvatarVariants />
      <SwitchButtonVariants />
      <TextAreaVariants />
      <ButtonVariants />
      <InputVariants />
      <CustomCard
        imgurl="https://images.unsplash.com/photo-1748795303121-02b90e036dec?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
        title="Portrait of a Man"
        description="A professionally taken portrait of a confident man."/>
    </div>
  );
};

export default DesignUI;
