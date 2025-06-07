import ButtonVariants from "./ButtonVariants";
import InputVariants from "./InputVariants";
import SwitchButtonVariants from "./SwitchButtonVariants";
import TextAreaVariants from "./TextAreaVariants";

import CustomCard from "@/components/CustomCard";

const DesignUI = () => {
  return (
    <div className="w-full overflow-auto flex flex-col justify-center gap-10">
      <SwitchButtonVariants />
      <TextAreaVariants />
      <ButtonVariants />

      
      <InputVariants />
      <CustomCard url="https://images.carexpert.com.au/resize/3000/-/app/uploads/2023/04/mini-hatch-1.jpg" title="Car 1"/>
      <CustomCard url="https://images.carexpert.com.au/resize/3000/-/app/uploads/2023/04/mini-hatch-2.jpg" title="Car 2"/>
      <CustomCard url="https://images.carexpert.com.au/resize/3000/-/app/uploads/2023/04/mini-hatch-3.jpg" title="Car 3"/>
      <CustomCard url="https://images.carexpert.com.au/resize/3000/-/app/uploads/2023/04/mini-hatch-4.jpg" title="Car 4"/>
    </div>
  );
};
// 
export default DesignUI;
