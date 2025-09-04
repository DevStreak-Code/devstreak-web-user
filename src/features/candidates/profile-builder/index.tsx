import CustomStepper from "@/components/CustomStepper";
import { CANDIDATE_PROFILE_FORM_STEPS } from "./schema";
import useProfileBuidler from "./useProfileBuilder";
import { useProfileBuilderStore } from "./useProfileBuilderStore";

const ProfileBuilder = () => {
  const { state } = useProfileBuidler();
  const { stepsData } = useProfileBuilderStore();
  // const { setCurrentStep } = handlers;
  const { currentStep } = state;
  console.log("step::data:::", stepsData);

  return (
    <div className="w-full h-full flex justify-center">
      <CustomStepper
        showNavigation={false}
        steps={CANDIDATE_PROFILE_FORM_STEPS}
        currentStep={currentStep}
        onStepChange={() => {
          //
        }}
      />
    </div>
  );
};

export default ProfileBuilder;
