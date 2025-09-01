import { useJobRole } from "./useJobRole";
import DynamicForm, { type DynamicFormRef } from "@/components/DynamicForm";
import { initialValues, jobRoleFields, jobRoleValidationSchema } from "./schema";
import { NavigationButton } from "..";
import { useRef } from "react";

const JobRole = () => {
  const formRef = useRef<DynamicFormRef>(null);
  const { handlers, state } = useJobRole();
  const { editInfo } = state;
  const { submitHandler } = handlers;

  return (
    <div className="">
      <h4 className="text-3xl font-[500] text-black">
        What role you are hiring for?
      </h4>
      <p className="text-sm text-gray-500 mt-2 mb-2">
        Define the Role for this Job. Specify total and relevant experience of
        role
      </p>

      <DynamicForm
        ref={formRef}
        config={jobRoleFields}
        schema={jobRoleValidationSchema}
        onSubmit={submitHandler}
        isShowDefaultSubmitButton={false}
        initialValues={editInfo?.data || initialValues}
      />
      <NavigationButton
        prevHandler={() => formRef.current?.submitForm()}
        isPrevDisabled
        nextHandler={() => formRef.current?.submitForm()}
      />
    </div>
  );
};

export default JobRole;
