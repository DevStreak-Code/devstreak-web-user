import CustomSelect from "@/components/CustomSelect";
import UILayout from "./UILayout";

const MOCK_OPTIONS = [
  {
    label: "Frontend",
    value: "1",
  },
  {
    label: "Backend",
    value: "2",
  },
  {
    label: "DevOps",
    value: "3",
  },
];

const CustomSelectVariants = () => {
  return (
    <div>
      <UILayout
        title="Custom Select Variants"
        variants={[
          {
            title: "Default",
            component: (
              <CustomSelect
                label="Select Course"
                placeholder="Select Course"
                options={MOCK_OPTIONS}
              />
            ),
          },
          {
            title: "Error",
            component: (
              <CustomSelect
                label="Select Course"
                placeholder="Select Course"
                options={MOCK_OPTIONS}
              />
            ),
          },
          {
            title: "Disabled",
            component: (
              <CustomSelect
                label="Select Course"
                placeholder="Select Course"
                options={MOCK_OPTIONS}
              />
            ),
          },
          {
            title: "Required",
            component: (
              <CustomSelect
                label="Select Course"
                placeholder="Select Course"
                options={MOCK_OPTIONS}
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default CustomSelectVariants;
