import DynamicForm, { type DynamicFormRef } from "@/components/DynamicForm";
import { urgencyFitFormSchema, urgencyFitValidationSchema } from "./schema";
import { useUrgencyFit } from "./useUrgencyFit";
import { NavigationButton } from "..";
import { useRef } from "react";

const UrgencyFit = () => {
  const formRef = useRef<DynamicFormRef>(null);
  const { handlers } = useUrgencyFit();
  const { onSubmit } = handlers;
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
          onSubmit={onSubmit}
        />
        <NavigationButton
          nextHandler={() => formRef.current?.submitForm()}
          prevHandler={() => {}}
        />
      </div>
    </div>
  );
};

export default UrgencyFit;
