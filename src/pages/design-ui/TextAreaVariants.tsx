import CustomTextArea from "@/components/CustomTextArea";
import UILayout from "./UILayout";

const TextAreaVariants = () => {
  return (
    <UILayout
      title="Textarea variants"
      variants={[
        {
          title: "Basic Textarea",
          component: (
            <CustomTextArea
              label="Basic Textarea"
              placeholder="Leave a comment"
            />
          ),
        },
        {
          title: "Required Textarea",
          component: (
            <CustomTextArea
              label="Required Textarea"
              placeholder="Leave a comment"
              required={true}
            />
          ),
        },
        {
          title: "Error in textarea",
          component: (
            <CustomTextArea
              label="Error in textarea"
              placeholder="Leave a comment"
              required={true}
              error="Invalid Message"
            />
          ),
        },
        {
          title: "Disable Textarea",
          component: (
            <CustomTextArea
              placeholder="Leave a comment"
              disabled={true}
              label="Disabled Textarea"
            />
          ),
        },
      ]}
    />
  );
};

export default TextAreaVariants;
