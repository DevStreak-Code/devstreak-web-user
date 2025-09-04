import { useProfileBuilderStore } from "../useProfileBuilderStore";
import { type IPersonalDetailsForm } from "./schema";

export const usePersonalDetails = () => {
  const { nextStep, editInfo, stepsData } = useProfileBuilderStore();
  const submitHandler = (data: IPersonalDetailsForm): void => {
    nextStep("personalDetails", data);
  };

  return {
    state: { editInfo },
    handlers: {
      submitHandler,
      stepsData,
    },
  };
};
