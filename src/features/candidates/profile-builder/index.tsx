import CustomStepper from "@/components/CustomStepper";
import { CANDIDATE_PROFILE_FORM_STEPS } from "./schema";
import useProfileBuidler from "./useProfileBuilder";

const ProfileBuilder = () => {
  const { state } = useProfileBuidler();
  // const { setCurrentStep } = handlers;
  const { currentStep } = state;

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
