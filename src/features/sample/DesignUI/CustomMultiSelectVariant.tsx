import CustomMultiSelect from "@/components/CustomMultiSelect";
import UILayout from "./UILayout";

export const MOCK_OPTIONS = [
  {
    label: "React",
    value: "1",
  },
  {
    label: "JAVA",
    value: "2",
  },
  {
    label: "Python",
    value: "3",
  },
  {
    label: "JS",
    value: "4",
  },
];

const CustomMultiSelectVariants = () => {
  return (
    <div>
      <UILayout
        title="MultiSelect Variants"
        variants={[
          {
            title: "Default",
            component: (
              <div className="h-[250px]">
                <CustomMultiSelect
                  placeholder="Select Frameworks"
                  label="Framework"
                  options={MOCK_OPTIONS}
                />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};
export default CustomMultiSelectVariants;
