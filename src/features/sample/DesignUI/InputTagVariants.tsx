import CustomInputTags from "@/components/CustomInputTags";
import UILayout from "./UILayout";

const MOCK_VARIANTS = [
  {
    id: "1",
    text: "Sport",
  },
  {
    id: "2",
    text: "Coding",
  },
  {
    id: "3",
    text: "Travel",
  },
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
              <CustomInputTags placeholder="Add a tag" tags={MOCK_VARIANTS} />
            ),
          },
          {
            title: "Input with tags with required",
            component: (
              <CustomInputTags placeholder="Add a tag" tags={MOCK_VARIANTS} />
            ),
          },
          {
            title: "Input with tags disabled",
            component: (
              <CustomInputTags placeholder="Add a tag" tags={MOCK_VARIANTS} />
            ),
          },
          {
            title: "Input with tags error",
            component: (
              <CustomInputTags placeholder="Add a tag" tags={MOCK_VARIANTS} />
            ),
          },
        ]}
      />
    </div>
  );
};

export default InputTagVariants;
