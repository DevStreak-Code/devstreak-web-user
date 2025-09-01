import DynamicForm, { type DynamicFormRef } from "@/components/DynamicForm";
import { urgencyFitFormSchema, urgencyFitValidationSchema } from "./schema";
import { useUrgencyFit } from "./useUrgencyFit";
import { NavigationButton } from "..";
import { useRef } from "react";

const UrgencyFit = () => {
  const formRef = useRef<DynamicFormRef>(null);
  const { handlers, state } = useUrgencyFit();
  const { stepsData } = state;
  const { onSubmit, prevHandler } = handlers;
  return (
    <div className="">
      <h4 className="text-3xl font-[500] text-black">
        What's the urgency level for this position?
      </h4>
      <div className="h-[250px] mt-5 ">
        <DynamicForm
          ref={formRef}
          config={urgencyFitFormSchema}
          schema={urgencyFitValidationSchema}
          isShowDefaultSubmitButton={false}
          initialValues={stepsData["urgencyFit"]?.data}
          onSubmit={onSubmit}
        />
        <NavigationButton
          nextHandler={() => formRef.current?.submitForm()}
          prevHandler={() => prevHandler()}
        />
      </div>
    </div>
  );
};

export default UrgencyFit;
