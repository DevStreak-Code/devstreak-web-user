import CustomStepper from "@/components/CustomStepper";
import usePostJob from "./usePostJob";
import { POST_JOB_FORM } from "./schema";
import CustomButton from "@/components/CustomButton";

interface INavigationButtonProps {
  nextHandler: () => void;
  prevHandler: () => void;
}

export const NavigationButton: React.FC<INavigationButtonProps> = (props) => {
  const { nextHandler, prevHandler } = props;
  return (
    <div className="flex gap-2">
      <CustomButton label="Prev" variant="outline" onClick={prevHandler} />
      <CustomButton label="Next" onClick={nextHandler} />
    </div>
  );
};

const PostJob = () => {
  const { handlers, state } = usePostJob();
  // const { setCurrentStep } = handlers;
  const { currentStep } = state;

  return (
    <div className="w-full h-full flex justify-center">
      <CustomStepper
        showNavigation={false}
        steps={POST_JOB_FORM}
        currentStep={currentStep}
        onStepChange={() => {
          //
        }}
      />
    </div>
  );
};

export default PostJob;
