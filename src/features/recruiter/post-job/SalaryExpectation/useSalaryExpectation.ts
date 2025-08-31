import type { TSalaryExpectationValidationSchema } from "./schema";

export const useSalaryExpectation = () => {
  const submitHandler = (data:TSalaryExpectationValidationSchema) => {
    console.log("data::::", data);
  };

  return {
    handlers: {
      submitHandler,
    },
  };
};
