import DynamicForm, { type DynamicFormRef } from "@/components/DynamicForm";
import { useRef } from "react";
import {
  skillFields,
  skillsFormSchema,
  getSkillsColumns,
  initialValues,
} from "./schema";
import CustomButton from "@/components/CustomButton";
import CustomTable from "@/components/CustomTable";
import { useSkills } from "./useSkills";

const Skills = () => {
  const formRef = useRef<DynamicFormRef>(null);
  const { state, handlers } = useSkills();
  const { onSubmit, handleEdit, handleDelete, nextStepHandler, prevStep } =
    handlers;

  return (
    <div>
      <DynamicForm
        ref={formRef}
        schema={skillsFormSchema}
        config={skillFields}
        initialValues={state.editingUser ?? initialValues}
        onSubmit={onSubmit}
      />

      <div className="mt-6">
        <CustomTable
          columns={getSkillsColumns({ handleDelete, handleEdit })}
          data={state.rows}
        />
      </div>

      <div className="gap-2 mt-4 flex justify-end">
        <CustomButton className="bg-gray-400" label="Back" onClick={prevStep} />
        <CustomButton label="Save" onClick={nextStepHandler} />
      </div>
    </div>
  );
};

export default Skills;
