import UILayout from "./UILayout";
import CustomCheckboxGroup from "@/components/CustomCheckbox";

const CheckboxVariants = () => {
  return (
    <UILayout
      title="Radio Variants"
      variants={[
        {
          title: "Default",
          component: (
            <CustomCheckboxGroup
              name="skills"
              label="Select Skills"
              value={[""]}
              onChange={() => {}}
              options={[
                { label: "React", value: "react" },
                { label: "Node.js", value: "node" },
                { label: "TypeScript", value: "typescript" },
              ]}
            />
          ),
        },

        {
          title: "Disabled",
          component: (
            <CustomCheckboxGroup
              name="skills"
              label="Select Skills"
              value={[""]}
              disabled
              onChange={() => {}}
              options={[
                { label: "React", value: "react" },
                { label: "Node.js", value: "node" },
                { label: "TypeScript", value: "typescript" },
              ]}
            />
          ),
        },
        {
          title: "Required Radio",
          component: (
            <CustomCheckboxGroup
              name="skills"
              required
              label="Select Skills"
              value={[""]}
              onChange={() => {}}
              options={[
                { label: "React", value: "react" },
                { label: "Node.js", value: "node" },
                { label: "TypeScript", value: "typescript" },
              ]}
            />
          ),
        },
        {
          title: "Error",
          component: (
            <CustomCheckboxGroup
              name="skills"
              required
              label="Select Skills"
              value={[""]}
              onChange={() => {}}
              options={[
                { label: "React", value: "react" },
                { label: "Node.js", value: "node" },
                { label: "TypeScript", value: "typescript" },
              ]}
              error="Invalid selection"
              orientation="column"
            />
          ),
        },
      ]}
    />
  );
};

export default CheckboxVariants;
