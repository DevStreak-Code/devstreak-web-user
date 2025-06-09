import CustomButton from "@/components/CustomButton";
import { Save } from "lucide-react";
import UILayout from "./UILayout";


const ButtonVariants = () => {
  return (
    <UILayout
      title="Button Variants"
      variants={[
        {
          title: "Default",
          component: (
            <CustomButton
              label="Save"
              onClick={() => {
                console.log("clicked");
              }}
            />
          ),
        },
        {
          title: "Default with Icon on the left",
          component: <CustomButton label="Save" leftIcon={<Save />} />,
        },
        {
          title: "Default with Icon on the right",
          component: <CustomButton label="Save" rightIcon={<Save />} />,
        },
        {
          title: "Loading Default",
          component: (
            <CustomButton
              isLoading
              loadingText="Saving"
              label="Default Button"
            />
          ),
        },
        {
          title: "Outline",
          component: (
            <CustomButton
              variant="outline"
              label="Save"
              onClick={() => {
                console.log("clicked");
              }}
            />
          ),
        },
        {
          title: "Outline with Icon on the left",
          component: (
            <CustomButton variant="outline" label="Save" leftIcon={<Save />} />
          ),
        },
        {
          title: "Outline with Icon on the right",
          component: (
            <CustomButton label="Save" variant="outline" rightIcon={<Save />} />
          ),
        },
        {
          title: "Disabled Outline",
          component: <CustomButton variant="outline" disabled label="Save" />,
        },
        {
          title: "Disabled Default",
          component: <CustomButton disabled label="Save" />,
        },
      ]}
    />
  );
};

export default ButtonVariants;
