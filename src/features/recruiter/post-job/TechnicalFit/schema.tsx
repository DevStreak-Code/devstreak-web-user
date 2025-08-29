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

export const technicalFitFormSchema = z
  .object({
    skill: z
      .string()
      .trim()
      .min(2, "Skill must be at least 2 characters long.")
      .max(50, "Skill must be no longer than 50 characters.")
      .regex(
        /^(?=.*[A-Za-z])[A-Za-z0-9+.#()_\- ]+$/,
        "Skill must contain at least one letter and only valid characters."
      )
      .nonempty("Skill is required."),

    minExp: z
      .number({
        required_error: "Minimum experience is required.",
        invalid_type_error: "Experience must be a number.",
      })
      .min(0, "Experience must be at least 0 years.")
      .max(99, "Experience must be no more than 99 years.")
      .int("Experience must be an integer."),

    maxExp: z
      .number({
        required_error: "Maximum experience is required.",
        invalid_type_error: "Experience must be a number.",
      })
      .min(0, "Experience must be at least 0 years.")
      .max(99, "Experience must be no more than 99 years.")
      .int("Experience must be an integer."),

    weightage: z
      .number({
        required_error: "Weightage is required.",
        invalid_type_error: "Weightage must be a number.",
      })
      .min(1, "Weightage must be at least 1%.")
      .max(100, "Weightage must be no more than 100%."),
  })
  .refine((data) => data.minExp <= data.maxExp, {
    message: "Minimum experience cannot be greater than maximum experience.",
    path: ["minExp"],
  })
  .refine((data) => data.maxExp >= data.minExp, {
    message: "Maximum experience cannot be less than minimum experience.",
    path: ["maxExp"],
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
      className: "min-w-[150px]",
      cell: (row) => row.skill,
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
