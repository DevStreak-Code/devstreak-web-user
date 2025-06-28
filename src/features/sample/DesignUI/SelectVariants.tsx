import { CustomSelect } from "@/components/CustomSelect";
import  UILayout from "./UILayout";

const options = [
  { label: "React", value: "react" },
  { label: "Next.js", value: "next" },
  { label: "Gatsby", value: "gatsby" },
  { label: "Astro", value: "astro" },
];

const SelectVariants = () => {
  return (
    <div>
      <UILayout
        title="Select Variants"
        variants={[
          {
            title: "Select with placeholder",
            component: (
              <CustomSelect
                label="Framework"
                name="placeholderSelect"
                placeholder="Choose a framework"
                options={options}
              />
            ),
          },
          {
            title: "Select with Error",
            component: (
              <CustomSelect
                label="Framework"
                name="errorSelect"
                placeholder="Choose a framework"
                options={options}
                error="Selected option is invalid"
              />
            ),
          },
          {
            title: "Disabled select",
            component: (
              <CustomSelect
                label="Framework"
                name="disabledSelect"
                placeholder="Choose a framework"
                options={options}
                // value="react"
                disabled
              />
            ),
          },
          {
            title: "Required select",
            component: (
              <CustomSelect
                label="Framework"
                name="requiredSelect"
                placeholder="Choose a framework"
                options={options}
                required
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default SelectVariants;

