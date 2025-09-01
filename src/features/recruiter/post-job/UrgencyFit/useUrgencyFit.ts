import { usePostJobStore } from "../store";
import type { UrgencyFitFormData } from "./schema";

export const useUrgencyFit = () => {
  const { nextStep, stepsData, prevStep } = usePostJobStore();
  const onSubmit = (data: UrgencyFitFormData) => {
    nextStep("urgencyFit", data);
  };
  const prevHandler = () => {
    prevStep("timezoneFit", stepsData["timezoneFit"]);
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
