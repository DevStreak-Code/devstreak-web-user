import { usePostJobStore } from "../store";
import type { TimezoneFormData } from "./schema";

export const useTimezoneFit = () => {
  const { nextStep, prevStep, stepsData } = usePostJobStore();
  const onSubmit = (data: TimezoneFormData) => {
    nextStep("timezoneFit", data);
  };
  const prevHandler = () => {
    prevStep("salaryExpectationFit", stepsData["salaryExpectationFit"]);
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
