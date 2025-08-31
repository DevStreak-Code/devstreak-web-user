/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomButton from "@/components/CustomButton";
import { useTechnicalFit } from "./useTechnialFit";
import CustomTable from "@/components/CustomTable";
import {
  getTechnicalFitColumns,
  technicalFitFields,
  technicalFitFormSchema,
} from "./schema";
import DynamicForm from "@/components/DynamicForm";

const TechnicalFit: React.FC = () => {
  const { state, handlers } = useTechnicalFit();
  const { skillsList } = state;
  const { handleSubmit, handleEdit, handleDelete, technicalFitSubmitHandler } =
    handlers;
  const columns = getTechnicalFitColumns({ handleEdit, handleDelete });

  // Define DataTable columns

  return (
    <div className="">
      <h4 className="text-3xl font-[500] text-black">Technical Skills Fit</h4>
      <p className="text-sm text-gray-500 mt-2">
        Define the technical skills required for this role. Specify minimum and
        maximum experience, and assign weight (%) to indicate importance of each
        skill.
      </p>
      <div className="mt-2">
        <DynamicForm
          schema={technicalFitFormSchema}
          config={technicalFitFields}
          onSubmit={handleSubmit}
        />
      </div>

      {/* ✅ Reusable DataTable */}
      <div
        className="mt-6"
        onClick={(e) => {
          console.log(e.currentTarget.dataset);
        }}
      >
        <CustomTable columns={columns} data={skillsList as any} />
      </div>

      {skillsList.length > 0 && (
        <div className="gap-2 mt-4 flex justify-end">
          <CustomButton className="bg-gray-400" label="Back" />
          <CustomButton
            label="Save"
            onClick={() => technicalFitSubmitHandler()}
          />
        </div>
      )}
    </div>
  );
};

export default TechnicalFit;
