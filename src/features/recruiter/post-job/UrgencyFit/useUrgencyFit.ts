import type { UrgencyFitFormData } from "./schema";

export const useUrgencyFit = () => {
  const onSubmit = (data: UrgencyFitFormData) => {
    console.log(data);
  };
  return {
    handlers: {
      onSubmit,
    },
  };
};
