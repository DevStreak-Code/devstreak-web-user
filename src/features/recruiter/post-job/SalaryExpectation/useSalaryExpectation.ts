import { usePostJobStore } from "../store";
import type { TSalaryExpectationValidationSchema } from "./schema";

export const useSalaryExpectation = () => {
  const { nextStep, prevStep, stepsData, editInfo } = usePostJobStore();
  const submitHandler = (data: TSalaryExpectationValidationSchema) => {
    nextStep("salaryExpectationFit", data);
  };

  const prevHandler = () => {
    prevStep("technicalFit", stepsData["technicalFit"]);
  };
  return {
    state: {
      editInfo,
      stepsData
    },
    handlers: {
      submitHandler,
      prevStep: prevHandler,
    },
  };
};
