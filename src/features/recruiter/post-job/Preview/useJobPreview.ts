import { usePostJobStore } from "../store";

export const useJobPreview = () => {
  const { stepsData } = usePostJobStore();
  return {
    data: stepsData,
  };
};
