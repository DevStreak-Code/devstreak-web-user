import { usePostJobStore } from "../store";
import type { TSalaryExpectationValidationSchema } from "./schema";

export const useSalaryExpectation = () => {
  const { nextStep } = usePostJobStore();
  const submitHandler = (data: TSalaryExpectationValidationSchema) => {
    nextStep("salaryExpectationFit", data);
  };

  return {
    handlers: {
      submitHandler,
    },
  };
};
