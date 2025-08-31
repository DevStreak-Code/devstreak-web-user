import { useState } from "react";
import { usePostJobStore } from "./store";

const usePostJob = () => {
  const { currentStep, stepsData } = usePostJobStore();
  console.log("step::::",stepsData)

  return {
    state: { currentStep },
    handlers: {
      // setCurrentStep,
    },
  };
};

export default usePostJob;
