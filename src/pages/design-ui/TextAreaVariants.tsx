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
              placeholder="Leave a comment"
            />
          ),
        },
        {
          title: "Required Textarea",
          component: (
            <CustomTextArea
              placeholder="Leave a comment"
              required={true}
            />
          ),
        },
        {
            title: "Error in textarea",
            component: (
              <CustomTextArea
                placeholder="Leave a comment"
                required={true}
                error="Invalid Message"
              />
            ),
          },
      ]}
    />
  );
};

export default TextAreaVariants;
