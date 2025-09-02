import { usePostJobStore } from "../store";
import type { TEducationFitFormType } from "./schema";

export const useEducationFit = () => {
  const { nextStep, prevStep, stepsData } = usePostJobStore();
  const onSubmit = (data: TEducationFitFormType) => {
    nextStep("educationFit", data);
  };
  const prevHandler = () => {
    prevStep("workArrangementFit", stepsData["workArrangementFit"]);
  };
  return {
    state: {
      stepsData,
    },
    handlers: {
      onSubmit,
      prevHandler,
    },
  };
};
