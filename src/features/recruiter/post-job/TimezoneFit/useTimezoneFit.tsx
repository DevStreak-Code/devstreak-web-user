import { usePostJobStore } from "../store";
import type { TimezoneFormData } from "./schema";

export const useTimezoneFit = () => {
  const { nextStep } = usePostJobStore();
  const onSubmit = (data: TimezoneFormData) => {
    nextStep("timezoneFit", data);
  };
  return {
    handlers: {
      onSubmit,
    },
  };
};
