import { useTimezoneFit } from "./useTimezoneFit";
import { timezoneFormSchema, timezoneValidationSchema } from "./schema";
import DynamicForm, { type DynamicFormRef } from "@/components/DynamicForm";
import { useRef } from "react";
import { NavigationButton } from "..";

const TimezoneFit = () => {
  const formRef = useRef<DynamicFormRef>(null);
  const { handlers, state } = useTimezoneFit();
  const { stepsData } = state;
  const { onSubmit, prevHandler } = handlers;

  return (
    <div className="">
      <h4 className="text-3xl font-[500] text-black">Preferred Timezones</h4>
      <div className="h-[250px] mt-5 ">
        <DynamicForm
          ref={formRef}
          config={timezoneFormSchema}
          schema={timezoneValidationSchema}
          onSubmit={onSubmit}
          isShowDefaultSubmitButton={false}
          initialValues={stepsData["timezoneFit"]?.data}
        />
        <NavigationButton
          nextHandler={() => formRef.current?.submitForm()}
          prevHandler={prevHandler}
        />
      </div>
    </div>
  );
};

export default TimezoneFit;
