import CustomCheckboxGroup from "@/components/CustomCheckbox";
import { WORK_ARRANGEMENTS } from "@/constants/common";

const WorkArrangementFit = () => {
  return (
    <div className="flex flex-col w-[80%] mt-20">
      <h4 className="text-3xl font-[500] text-black">
        Work Arrangement for this role?
      </h4>
      <p className="text-sm text-gray-500 mt-2 mb-2">
        Define the work arrangement for this role.
      </p>
      <form>
        <CustomCheckboxGroup
          value={[""]}
          label="Work Arrangement"
          onChange={() => {}}
          options={WORK_ARRANGEMENTS}
          required
        />
      </form>
    </div>
  );
};

export default WorkArrangementFit;
