import CustomDatePicker from "@/components/CustomDatePicker";
import UILayout from "./UILayout";

const CustomDatePickerVariants = () => {
  return (
    <div>
      <UILayout
        title="Custom Date Picker Variants"
        variants={[
          {
            title: "Default",
            component: <CustomDatePicker label="Default Date Picker" />,
          },
          {
            title: "Required",
            component: (
              <CustomDatePicker label="Required Date Picker" required={true} />
            ),
          },
          {
            title: "Disabled",
            component: (
              <CustomDatePicker label="Disable Date Picker" disabled={true} />
            ),
          },
        ]}
      />
    </div>
  );
};
export default CustomDatePickerVariants;
