/* eslint-disable @typescript-eslint/no-explicit-any */
// technicalFitColumns.ts
import { SquarePen, Trash2 } from "lucide-react";
import { type Column } from "@/components/CustomTable";
import { z } from "zod";

export interface ITechnicalFormData {
  skill: string;
  minExp: number;
  maxExp: number;
  weightage: number;
  id?: number | string;
}
export const technicalFitFormSchema = z.object({
  skill: z
    .string()
    .min(4, "Skill must be at least 4 characters long.")
    .max(20, "Skill must be no longer than 20 characters.")
    .nonempty("Skill is required."),
  minExp: z
    .number()
    .min(0, "Experience must be at least 0 years.")
    .max(99, "Experience must be no more than 99 years.")
    .int("Experience must be an integer.")
    .refine((value) => value >= 0 && value <= 99, "Experience is required."),
  maxExp: z
    .number()
    .min(0, "Experience must be at least 0 years.")
    .max(99, "Experience must be no more than 99 years.")
    .int("Experience must be an integer.")
    .refine((value) => value >= 0 && value <= 99, "Experience is required."),
  weightage: z
    .number()
    .min(0, "Weightage must be at least 0%.")
    .max(100, "Weightage must be no more than 100%.")
    .refine((value) => value >= 0 && value <= 100, "Weightage is required."),
});

export type TTechincalFitFormData = z.infer<typeof technicalFitFormSchema>;

export const getTechnicalFitColumns = (props: {
  handleEdit: (row: ITechnicalFormData) => void;
  handleDelete: (row: ITechnicalFormData) => void;
}): Column<any>[] => {
  const { handleEdit, handleDelete } = props;

  return [
    {
      header: "#",
      accessor: "id",
      cell: (row) => row.id,
    },
    {
      header: "Skill",
      accessor: "skill",
    },
    {
      header: "Min. Exp (Years)",
      accessor: "minExp",
    },
    {
      header: "Max. Exp (Years)",
      accessor: "maxExp",
    },
    {
      header: "Importance (%)",
      accessor: "weightage",
      cell: (row) => <span>{row?.weightage ?? 0}%</span>,
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
              onClick={() => handleDelete(row)}
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
