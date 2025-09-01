import type { TFormConfig } from "@/components/DynamicForm/dynamic-form-interface";
import { z } from "zod";

export interface IJobRoleForm {
  jobRole: string;
  totalExp: number;
  relevantExp: number;
}

export const jobRoleValidationSchema = z
  .object({
    jobRole: z
      .string()
      .trim()
      .min(5, "Role must be at least 5 characters long.")
      .max(30, "Role must be no longer than 30 characters.")
      .regex(/^[A-Za-z ]+$/, "Role can only contain letters and spaces.")
      .nonempty("Role is required."),

    totalExp: z
      .number({
        required_error: "Total experience is required.",
        invalid_type_error: "Experience must be a number.",
      })
      .min(0, "Experience must be at least 0 years.")
      .max(50, "Experience must be no more than 50 years.")
      .int("Experience must be an integer."),

    relevantExp: z
      .number({
        required_error: "Relevant experience is required.",
        invalid_type_error: "Experience must be a number.",
      })
      .min(0, "Experience must be at least 0 years.")
      .max(50, "Experience must be no more than 50 years.")
      .int("Experience must be an integer."),
  })
  .refine((data) => data.relevantExp <= data.totalExp, {
    message: "Relevant experience cannot be greater than total experience.",
    path: ["relevantExp"],
  })
  .refine((data) => !(data.totalExp === 0 && data.relevantExp > 0), {
    message: "Relevant experience cannot exist if total experience is 0.",
    path: ["relevantExp"],
  });

export type TJobFormValidationSchema = z.infer<typeof jobRoleValidationSchema>;

export const initialValues = {
  jobRole: "",
  totalExp: "",
  relevantExp: "",
};

export const jobRoleFields: TFormConfig = [
  {
    name: "jobRole",
    label: "Job Role",
    component: "input",
    type: "text",
    placeholder: "e.g. Technical Lead",
    required: true,
  },
  {
    name: "totalExp",
    label: "Total Experience (Years)",
    component: "input",
    type: "number",
    placeholder: "e.g. 8",
    required: true,
  },
  {
    name: "relevantExp",
    label: "Relevant Experience (Years)",
    component: "input",
    type: "number",
    placeholder: "e.g. 4",
    required: true,
  },
  
];
