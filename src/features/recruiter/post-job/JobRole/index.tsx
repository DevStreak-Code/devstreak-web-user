import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { useJobRole } from "./useJobRole";

const JobRole = () => {
  const { state, handlers } = useJobRole();
  const { errors, isValid } = state;
  const { register, handleSubmit } = handlers;
  return (
    <div className="flex flex-col w-[80%] mt-20">
      <form onSubmit={handleSubmit} noValidate>
        <h4 className="text-3xl font-[500] text-black">
          What role you are hiring for?
        </h4>
        <p className="text-sm text-gray-500 mt-2">
          Define the Role for this Job. Specify total and relevant experience of
          role
        </p>
        <div className="pt-4">
          <CustomInput
            label="Job Role"
            type="text"
            className="w-1/3"
            placeholder="e.g. Technical Lead"
            error={errors.jobRole?.message}
            required
            {...register("jobRole")}
          />
        </div>
        <div className="flex gap-4  pt-4">
          <CustomInput
            label="Total Experience (Years)"
            className="w-1/3"
            placeholder="e.g. 8"
            error={errors.totalExp?.message}
            {...register("totalExp", { valueAsNumber: true })}
            required
          />
          <CustomInput
            label="Relevant Experience (Years)"
            className="w-1/3"
            placeholder="e.g. 4"
            error={errors.relevantExp?.message}
            {...register("relevantExp", { valueAsNumber: true })}
            required
          />
        </div>
        <div className="pt-4 flex justify-end">
          <CustomButton
            type="submit"
            label="Save"
            disabled={!isValid}
          />
        </div>
      </form>
    </div>
  );
};

export default JobRole;
