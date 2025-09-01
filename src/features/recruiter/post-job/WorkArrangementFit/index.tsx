import DynamicForm, { type DynamicFormRef } from "@/components/DynamicForm";
import {
  workArrangementFitFields,
  workArrangementFitValidationSchema,
} from "./schema";
import { useWorkArrangementFit } from "./useWorkArrangementFit";
import { NavigationButton } from "..";
import { useRef } from "react";

const WorkArrangementFit = () => {
  const formRef = useRef<DynamicFormRef>(null);
  const { handlers, state } = useWorkArrangementFit();
  const { stepsData } = state;
  const { onSubmit, prevHandler } = handlers;

  return (
    <div className="">
      <h4 className="text-3xl font-[500] text-black">
        Work Arrangement for this role?
      </h4>
      <p className="text-sm text-gray-500 mt-2 mb-2">
        Define the work arrangement for this role.
      </p>
      <DynamicForm
        ref={formRef}
        config={workArrangementFitFields}
        schema={workArrangementFitValidationSchema}
        onSubmit={onSubmit}
        isShowDefaultSubmitButton={false}
        initialValues={stepsData["workArrangementFit"]?.data}
      />
      <NavigationButton
        nextHandler={() => formRef.current?.submitForm()}
        prevHandler={() => prevHandler()}
      />
    </div>
  );
};

export default WorkArrangementFit;
