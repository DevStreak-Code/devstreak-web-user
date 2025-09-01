import { useSalaryExpectation } from "./useSalaryExpectation";
import {
  initialValues,
  salaryExpectationFields,
  salaryExpectationValidationSchema,
} from "./schema";
import DynamicForm, { type DynamicFormRef } from "@/components/DynamicForm";
import { useRef } from "react";
import CustomButton from "@/components/CustomButton";

const SalaryExpectationFit = () => {
  const formRef = useRef<DynamicFormRef>(null);

  const { handlers, state } = useSalaryExpectation();
  const { editInfo, stepsData } = state;
  const { submitHandler, prevStep } = handlers;

  return (
    <div className="">
      <h4 className="text-3xl font-[500] text-black">Budget for this Role?</h4>
      <p className="text-sm text-gray-500 mt-2 mb-2">
        Define the Budget for this Job. Specify min and max budget of role
      </p>
      <DynamicForm
        ref={formRef}
        config={salaryExpectationFields}
        schema={salaryExpectationValidationSchema}
        onSubmit={submitHandler}
        isShowDefaultSubmitButton={false}
        initialValues={
          stepsData["salaryExpectationFit"]?.data ||
          editInfo?.data ||
          initialValues
        }
      />
      <div className="flex gap-2">
        <CustomButton label="Prev" variant="outline" onClick={prevStep} />
        <CustomButton
          label="Next"
          onClick={() => formRef.current?.submitForm()}
        />
      </div>
    </div>
  );
};

export default SalaryExpectationFit;
