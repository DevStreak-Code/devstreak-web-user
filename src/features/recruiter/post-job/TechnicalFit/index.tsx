import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";

import { useTechnicalFit } from "./useTechnialFit";
import { DevTool } from "@hookform/devtools";

const TechnicalFit: React.FC = () => {
  const { state, handlers } = useTechnicalFit();
  const { isValid, errors, skillsList } = state;
  const { register, handleSubmit, control } = handlers;

  return (
    <div className=" flex flex-col w-[80%] mt-20 ">
      <form onSubmit={handleSubmit} noValidate>
        <h1 className=" text-3xl font-[500] text-black ">Technical Fit</h1>
        <div className="pt-4">
          <CustomInput
            label="Skill"
            type="text"
            className="w-1/3"
            placeholder="e.g. React"
            error={errors.skill?.message}
            {...register("skill")}
          />
        </div>
        <div className="flex gap-4 w-1/2 pt-4">
          <CustomInput
            label="Mininum Experience"
            className="w-1/3"
            placeholder="e.g. 3"
            error={errors.minExp?.message}
            {...register("minExp", {
              valueAsNumber: true,
            })}
          />
          <CustomInput
            label="Maximum Experience"
            className="w-1/3"
            placeholder="e.g. 5"
            error={errors.maxExp?.message}
            {...register("maxExp", {
              valueAsNumber: true,
            })}
          />
          <CustomInput
            label="Weightage"
            className="w-1/3"
            placeholder=""
            error={errors.weightage?.message}
            {...register("weightage", {
              valueAsNumber: true,
            })}
          />
        </div>
        <div className="pt-4">
          <CustomButton type="submit" label="Add Skill" disabled={!isValid} />
        </div>
        <DevTool control={control} />
      </form>
      <table className="w-full mt-2">
        <thead>
          <tr className=" mt-6 border ">
            <th className="pr-12 text-left px-4 py-2">Skill</th>

            <th className=" px-4 py-2">Minimum Experience</th>
            <th className=" px-4 py-2">Maximum Experience</th>
            <th className=" px-4 py-2">Weightage</th>
          </tr>
        </thead>

        <tbody>
          {skillsList.map((item, index) => {
            return (
              <tr className=" mt-6 border " key={index}>
                <td className="pr-12 text-left px-4 py-2">{item.skill}</td>
                <td className=" px-4 py-2">{item.minExp}</td>
                <td className=" px-4 py-2">{item.maxExp}</td>
                <td className=" px-4 py-2">{item.weightage}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="gap-2 mt-2 flex justify-end ">
        <CustomButton className="bg-gray-400" label="Back" />

        <CustomButton label="Save" />
      </div>
    </div>
  );
};

export default TechnicalFit;
