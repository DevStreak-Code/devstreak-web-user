import React, { useCallback } from "react";
import { POST_JOB_FORM } from "./schema";

const usePostJob = () => {
  const currentState = 6;

  const getComponent = useCallback(() => {
    let jsx = {} as { id: number; comp: React.ReactElement } | undefined;
    if (currentState) {
      jsx = POST_JOB_FORM.find((item) => item.id === currentState);
    }
    return jsx;
  }, [currentState]);

  return {
    state: { currentState },
    handlers: {
      getComponent,
    },
  };
};

export default usePostJob;
