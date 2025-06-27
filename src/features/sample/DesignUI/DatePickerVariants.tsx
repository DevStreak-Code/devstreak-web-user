import CustomDatePicker from "@/components/CustomDatePicker";
import UILayout from "./UILayout";

const DatePickerVariants = () => {
  return (
    <UILayout
      title="DatePicker Variants"
      variants={[
        {
          title: "Default",
          component: <CustomDatePicker />,
        },
        {
          title: "Disabled",
          component: <CustomDatePicker disabled={true} />,
        },
      ]}
    />
  );
};

export default DatePickerVariants;
