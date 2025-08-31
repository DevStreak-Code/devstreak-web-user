import type { TimezoneFormData } from "./schema";

export const useTimezoneFit = () => {
  const onSubmit = (data: TimezoneFormData) => {
    console.log(data);
  };
  return {
    handlers: {
      onSubmit,
    },
  };
};
