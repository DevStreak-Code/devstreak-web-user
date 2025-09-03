import { type IProfileSummary } from "./schema";

export const useProfileSummary = () => {
  const submitHandler = (data: IProfileSummary): void => {
    console.log(data);
  };

  return {
    state: {},
    handlers: {
      submitHandler,
    },
  };
};

