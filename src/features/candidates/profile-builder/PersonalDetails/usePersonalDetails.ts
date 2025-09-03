import { type IPersonalDetailsForm } from "./schema";

export const usePersonalDetails = () => {
  const submitHandler = (data: IPersonalDetailsForm): void => {
    console.log(data);
  };

  return {
    state: {},
    handlers: {
      submitHandler,
    },
  };
};

