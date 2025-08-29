/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { useTechnicalFit } from "./useTechnialFit";
import { DevTool } from "@hookform/devtools";
import CustomTable from "@/components/CustomTable";
import { getTechnicalFitColumns } from "./schema";

const TechnicalFit: React.FC = () => {
  const { state, handlers } = useTechnicalFit();
  const { isValid, errors, skillsList, editingUser } = state;
  const {
    register,
    handleSubmit,
    control,
    handleEdit,
    handleDelete,
    technicalFitSubmitHandler,
  } = handlers;
  const columns = getTechnicalFitColumns({ handleEdit, handleDelete });

  // Define DataTable columns

  return (
    <div className="flex flex-col w-[80%] mt-20">
      <form onSubmit={handleSubmit} noValidate>
        <h4 className="text-3xl font-[500] text-black">Technical Skills Fit</h4>
        <p className="text-sm text-gray-500 mt-2">
          Define the technical skills required for this role. Specify minimum
          and maximum experience, and assign weight (%) to indicate importance
          of each skill.
        </p>
        <div className="pt-4">
          <CustomInput
            label="Skill"
            type="text"
            className="w-1/3"
            placeholder="e.g. React"
            error={errors.skill?.message}
            required
            {...register("skill")}
          />
        </div>
        <div className="flex gap-4  pt-4">
          <CustomInput
            label="Min. Experience (Years)"
            className="w-1/3"
            placeholder="e.g. 3"
            error={errors.minExp?.message}
            {...register("minExp", { valueAsNumber: true })}
            required
          />
          <CustomInput
            label="Max. Experience (Years)"
            className="w-1/3"
            placeholder="e.g. 5"
            error={errors.maxExp?.message}
            {...register("maxExp", { valueAsNumber: true })}
            required
          />
          <CustomInput
            label="Importance (%)"
            className="w-1/3"
            placeholder=""
            error={errors.weightage?.message}
            {...register("weightage", { valueAsNumber: true })}
            required
          />
        </div>
        <div className="pt-4">
          <CustomButton
            type="submit"
            label={editingUser ? "Update" : "Add Skill"}
            disabled={!isValid}
          />
        </div>
        <DevTool control={control} />
      </form>

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
          <CustomButton label="Save" onClick={technicalFitSubmitHandler} />
        </div>
      )}
    </div>
  );
};

export default TechnicalFit;
