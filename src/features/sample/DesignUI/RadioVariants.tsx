import CustomRadio from "@/components/CustomRadio";
import UILayout from "./UILayout";

const RadioVariants = () => {
  return (
    <UILayout
      title="Radio Variants"
      variants={[
        {
          title: "Default",
          component: (
            <CustomRadio
              options={[
                { label: "Eat", value: "1" },
                { label: "Sleep", value: "2" },
              ]}
            />
          ),
        },

        {
          title: "Disabled Radio",
          component: (
            <CustomRadio
              disabled={true}
              options={[
                { label: "Eat", value: "1" },
                { label: "Sleep", value: "2" },
              ]}
            />
          ),
        },
        {
          title: "Required Radio",
          component: (
            <CustomRadio
              disabled={true}
              options={[
                { label: "Eat", value: "1" },
                { label: "Sleep", value: "2" },
              ]}
            />
          ),
        },
        {
          title: "Error Radio",
          component: (
            <CustomRadio
              disabled={true}
              options={[
                { label: "Eat", value: "1" },
                { label: "Sleep", value: "2" },
              ]}
            />
          ),
        },
      ]}
    />
  );
};

export default RadioVariants;
