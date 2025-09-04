import DynamicForm, { type DynamicFormRef } from "@/components/DynamicForm";
import {
  initialValues,
  profileSummaryDetailsFormfields,
  ProfileSummaryFormSchema,
} from "./schema";
import { NavigationButton } from "@/features/recruiter/post-job";
import { useRef } from "react";
import { useProfileSummary } from "./useProfileSummary";

const ProfileSummary = () => {
  const formRef = useRef<DynamicFormRef>(null);
  const { handlers, state } = useProfileSummary();
  const { editInfo } = state;

  const { submitHandler, prevStepHandler, stepsData } = handlers;

  return (
    <div className="">
      <h4 className="text-3xl mb-4 font-[500] text-black">Profile Summary</h4>

      <DynamicForm
        ref={formRef}
        config={profileSummaryDetailsFormfields}
        schema={ProfileSummaryFormSchema}
        onSubmit={submitHandler}
        initialValues={
          stepsData["profileSummary"]?.data || editInfo?.data || initialValues
        }
        isShowDefaultSubmitButton={false}
      />
      <NavigationButton
        prevHandler={prevStepHandler}
        nextHandler={() => formRef.current?.submitForm()}
      />
    </div>
  );
};

export default ProfileSummary;
