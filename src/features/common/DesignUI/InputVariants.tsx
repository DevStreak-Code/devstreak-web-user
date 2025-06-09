import CustomInput from "@/components/CustomInput";
import UILayout from "./UILayout";

const InputVariants = () => {
  return (
    <div>
      <UILayout
        title="Input Variants"
        variants={[
          {
            title: "Simple Input",
            component: (
              <CustomInput
                placeholder="Enter input"
                label="Simple"
                name="input"
              />
            ),
          },
          {
            title: "Required Input",
            component: (
              <CustomInput
                placeholder="Enter input"
                label="Required Input"
                required
              />
            ),
          },
          {
            title: "Input with error",
            component: (
              <CustomInput
                placeholder="Enter input"
                label="Input"
                error="invalid input"
              />
            ),
          },
          {
            title: "Disabled input",
            component: (
              <CustomInput
                placeholder="Enter input"
                label="Disable input"
                disabled={true}
              />
            ),
          },
          {
            title: "Password Input",
            component: (
              <CustomInput
                placeholder="Enter password"
                label="Password"
                type="password"
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default InputVariants;
