import CustomRadio from "@/components/CustomRadio";
import UILayout from "./UILayout";

const RadioVariants = () => {
  return (
    <UILayout
      title="Radio Variants"
      variants={[
        {
          title: "Default",
          component: <CustomRadio />,
        },

        {
          title: "Disabled Radio",
          component: <CustomRadio disabled={true} />,
        },
      ]}
    />
  );
};

export default RadioVariants;
