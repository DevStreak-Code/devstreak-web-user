import DynamicForm from "@/components/DynamicForm";
import {
  workArrangementFitFields,
  workArrangementFitValidationSchema,
} from "./schema";
import { useWorkArrangementFit } from "./useWorkArrangementFit";

const WorkArrangementFit = () => {
  const { handlers } = useWorkArrangementFit();
  const { onSubmit } = handlers;

  return (
    <div className="">
      <h4 className="text-3xl font-[500] text-black">
        Work Arrangement for this role?
      </h4>
      <p className="text-sm text-gray-500 mt-2 mb-2">
        Define the work arrangement for this role.
      </p>
      <DynamicForm
        config={workArrangementFitFields}
        schema={workArrangementFitValidationSchema}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default WorkArrangementFit;
