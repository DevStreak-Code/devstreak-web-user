import CustomMultiSelect from "@/components/CustomMultiSelect";
import UILayout from "./UILayout";

const CustomMultiSelectVariants = () => {
  return (
    <UILayout
      title="CustomMultiSelect Variants"
      variants={[
        {
          title: "Default",
          component: (
            <CustomMultiSelect
              label="Select Languages"
              placeholder="Choose options"
              options={[
                { label: "React", value: "1" },
                { label: "Java", value: "2" },
                { label: "Python", value: "3" },
                { label: "Angular", value: "4" },
                { label: "Vue", value: "5" },
                { label: "Svelte", value: "6" },
              ]}
            />
          ),
        },
      ]}
    />
  );
};

export default CustomMultiSelectVariants;
