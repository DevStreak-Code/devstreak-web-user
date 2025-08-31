import { type IJobRoleForm } from "./schema";

import { usePostJobStore } from "../store";

export const useJobRole = () => {
  const { nextStep } = usePostJobStore();

  const submitHandler = (data: IJobRoleForm): void => {
    console.log(data);
    nextStep("jobRole", data);
  };

  return {
    handlers: {
      submitHandler,
    },
  };
};
