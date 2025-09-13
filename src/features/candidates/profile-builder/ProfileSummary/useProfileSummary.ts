import { useProfileBuilderStore } from "../useProfileBuilderStore";
import { type IProfileSummary } from "./schema";

export const useProfileSummary = () => {
  const { nextStep, prevStep, stepsData, editInfo } = useProfileBuilderStore();
  const submitHandler = (data: IProfileSummary): void => {
    nextStep("profileSummary", data);
  };
  const prevStepHandler = () => {
    prevStep("personalDetails", stepsData["personalDetails"]);
  };

  return {
    state: { editInfo },
    handlers: {
      submitHandler,
      prevStepHandler,
      stepsData,
    },
  };
};
