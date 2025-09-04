import type { DynamicFormRef } from "@/components/DynamicForm";
import { usePersonalDetails } from "./usePersonalDetails";
import { useRef } from "react";
import {
  initialValues,
  personalDetailsFormFields,
  PersonalDetailsFormSchema,
} from "./schema";
import DynamicForm from "@/components/DynamicForm";
import { NavigationButton } from "@/features/recruiter/post-job";

const PersonalDetails = () => {
  const formRef = useRef<DynamicFormRef>(null);
  const { handlers, state } = usePersonalDetails();
  const { editInfo } = state;

  const { submitHandler, stepsData } = handlers;

  return (
    <div className="">
      <h4 className="text-3xl mb-4 font-[500] text-black">Personal Details</h4>

      <DynamicForm
        ref={formRef}
        config={personalDetailsFormFields}
        schema={PersonalDetailsFormSchema}
        onSubmit={submitHandler}
        isShowDefaultSubmitButton={false}
        initialValues={
          stepsData["personalDetails"]?.data || editInfo?.data || initialValues
        }
      />
      <NavigationButton
        prevHandler={() => formRef.current?.submitForm()}
        isPrevDisabled
        nextHandler={() => formRef.current?.submitForm()}
      />
    </div>
  );
};

export default PersonalDetails;
