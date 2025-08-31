import { useSalaryExpectation } from "./useSalaryExpectation";
import {
  salaryExpectationFields,
  salaryExpectationValidationSchema,
} from "./schema";
import DynamicForm from "@/components/DynamicForm";

const SalaryExpectationFit = () => {
  const { handlers } = useSalaryExpectation();
  const { submitHandler } = handlers;

  return (
    <div className="flex flex-col w-[80%] mt-20">
      <h4 className="text-3xl font-[500] text-black">Budget for this Role?</h4>
      <p className="text-sm text-gray-500 mt-2 mb-2">
        Define the Budget for this Job. Specify min and max budget of role
      </p>
      <DynamicForm
        config={salaryExpectationFields}
        schema={salaryExpectationValidationSchema}
        onSubmit={submitHandler}
      />
    </div>
  );
};

export default SalaryExpectationFit;
