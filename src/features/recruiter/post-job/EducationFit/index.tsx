import { useEducationFit } from "./useEducationFit";
import DynamicForm, { type DynamicFormRef } from "@/components/DynamicForm";
import { useRef } from "react";
import { NavigationButton } from "..";
import { educationFitFormSchema, educationFitValidationSchema } from "./schema";

const EducationFit = () => {
  const formRef = useRef<DynamicFormRef>(null);
  const { handlers, state } = useEducationFit();
  const { stepsData } = state;
  const { onSubmit, prevHandler } = handlers;

  return (
    <div className="">
      <h4 className="text-3xl font-[500] text-black">Preferred Timezones</h4>
      <div className="h-[250px] mt-5 ">
        <DynamicForm
          ref={formRef}
          config={educationFitFormSchema}
          schema={educationFitValidationSchema}
          onSubmit={onSubmit}
          isShowDefaultSubmitButton={false}
          initialValues={stepsData["educationFit"]?.data}
        />
        <NavigationButton
          nextHandler={() => formRef.current?.submitForm()}
          prevHandler={prevHandler}
        />
      </div>
    </div>
  );
};

export default EducationFit;
