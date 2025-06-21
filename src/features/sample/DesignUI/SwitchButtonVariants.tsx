import CustomSwitchButton from "@/components/CustomSwitchButton";
import UILayout from "./UILayout";

const SwitchButtonVariants = () => {
  return (
    <UILayout
      title="Switch Button variants"
      variants={[
        {
          title: "Basic Switch Button",
          component: <CustomSwitchButton />,
        },
        {
          title: "Disable Switch Button",
          component: <CustomSwitchButton disabled={true} />,
        },
      ]}
    />
  );
};

export default SwitchButtonVariants;
