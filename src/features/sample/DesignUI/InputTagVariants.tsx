import CustomInputTags from "@/components/CustomInputTags";
import UILayout from "./UILayout";

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
                placeholder="Add a tag"
                initialTags={["car", "Bus", "Tractor"]}
              />
            ),
          },
        ]}
      />

      <p className="text-sm text-muted-foreground mt-4 text-center">
        Built with <a href="https://emblor.dev" className="underline">emblor</a>
      </p>
    </div>
  );
};

export default InputTagVariants;
