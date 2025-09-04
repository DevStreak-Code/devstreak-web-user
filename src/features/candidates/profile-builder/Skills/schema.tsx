/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Column } from "@/components/CustomTable";
import type { TFormConfig } from "@/components/DynamicForm/dynamic-form-interface";
import { SquarePen, Trash2 } from "lucide-react";
import { z } from "zod";
export interface ISkillsFormData {
  skills: string;
  experience: number;
  id?: string | number;
}

export const initialValues = {
  skills: "",
  experience: "",
};

export const skillsFormSchema = z.object({
  skills: z
    .string()
    .min(2, { message: "Skill must be at least 2 characters long" })
    .max(50, { message: "Skill must not exceed 50 characters" })
    .nonempty({ message: "Skill is required" }),

  experience: z
    .number({
      required_error: "Experience is required",
      invalid_type_error: "Experience must be a number",
    })
    .int({ message: "Experience must be an integer" })
    .min(0, { message: "Experience cannot be less than 0" })
    .max(50, { message: "Experience cannot be greater than 50" }),
});

export type SkillsFormData = z.infer<typeof skillsFormSchema>;

export const getSkillsColumns = (props: {
  handleEdit: (row: ISkillsFormData) => void;
  handleDelete: (row: ISkillsFormData) => void;
}): Column<any>[] => {
  const { handleEdit, handleDelete } = props;

  return [
    {
      header: "#",
      accessor: "id",
      // cell: (row) => row.id,
    },
    {
      header: "Skill",
      accessor: "skills",
      className: "min-w-[150px]",
      // cell: (row) => row.skill,
    },
    {
      header: "Experience",
      accessor: "experience",
    },

    {
      header: "Action",
      accessor: "id", // virtual column uses id
      cell: (row, index) => {
        return (
          <div className="flex justify-start gap-3" key={index}>
            <button
              type="button"
              onClick={() => handleEdit(row)}
              className="text-primary cursor-pointer"
            >
              <SquarePen size={18} />
            </button>
            <button
              type="button"
              onClick={() => handleDelete(row)} // row :{skills,experience}
              className="text-red-600 cursor-pointer"
            >
              <Trash2 size={18} />
            </button>
          </div>
        );
      },
    },
  ];
};
export const skillFields: TFormConfig = [
  {
    name: "skills",
    label: "Skills",
    component: "input",
    type: "text",
    placeholder: "Skill",
    required: true,
  },
  {
    name: "experience",
    label: "Experience",
    component: "input",
    type: "number",
    placeholder: "e.g. 3",
    required: true,
  },
];
