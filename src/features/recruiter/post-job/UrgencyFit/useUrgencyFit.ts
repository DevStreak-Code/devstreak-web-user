import { usePostJobStore } from "../store";
import type { UrgencyFitFormData } from "./schema";

export const useUrgencyFit = () => {
  const { nextStep } = usePostJobStore();
  const onSubmit = (data: UrgencyFitFormData) => {
    nextStep("urgencyFit", data);
  };
  return {
    handlers: {
      onSubmit,
    },
  };
};
