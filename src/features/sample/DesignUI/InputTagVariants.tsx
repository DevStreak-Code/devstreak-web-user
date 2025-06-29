import CustomInputTags from "@/components/CustomInputTags";
import UILayout from "./UILayout";

const MOCK_VARIANTS = [
  { id: "1", text: "Sport" },
  { id: "2", text: "Coding" },
  { id: "3", text: "Travel" },
];

const InputTagVariants = () => {
  return (
    <div>
      <UILayout
        title="Input Tags"
        variants={[
          {
            title: "Input with tags",
            component: (
              <CustomInputTags
                label="Tags"
                placeholder="Add a tag"
                tags={MOCK_VARIANTS}
              />
            ),
          },
          {
            title: "Input with tags with required",
            component: (
              <CustomInputTags
                label="Required Tags"
                required
                placeholder="Add a tag"
                tags={MOCK_VARIANTS}
              />
            ),
          },
          {
            title: "Input with tags disabled",
            component: (
              <CustomInputTags
                label="Disabled Tags"
                disabled
                placeholder="Add a tag"
                tags={MOCK_VARIANTS}
              />
            ),
          },
          {
            title: "Input with tags error",
            component: (
              <CustomInputTags
                label="Error Tags"
                error="At least one tag is required"
                placeholder="Add a tag"
                tags={MOCK_VARIANTS}
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default InputTagVariants;