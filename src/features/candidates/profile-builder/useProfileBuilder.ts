import { useProfileBuilderStore } from "./useProfileBuilderStore";


const useProfileBuidler = () => {
  const { currentStep, stepsData } = useProfileBuilderStore();
  console.log("step::::",stepsData)

  return {
    state: { currentStep },
    handlers: {
      // setCurrentStep,
    },
  };
};

export default useProfileBuidler;
