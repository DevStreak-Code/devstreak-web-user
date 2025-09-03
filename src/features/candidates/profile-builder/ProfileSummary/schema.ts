import type { TFormConfig } from "@/components/DynamicForm/dynamic-form-interface";
import { NOTICE_PERIOD } from "@/constants/common";
import { z } from "zod";

export interface IProfileSummary {
  currentDesignation: string;
  totalExperience: string;
  noticePeriod: string;
  servingNoticePeriod: string;
  professionalSummary: string;
}

export const ProfileSummaryFormSchema = z.object({
  currentDesignation: z
    .string()
    .min(2, "Current designation must be at least 2 characters")
    .max(100, "Current designation must be less than 100 characters"),

  totalExperience: z
    .number({
      required_error: "Total experience is required",
      invalid_type_error: "Total experience must be a number",
    })
    .min(0, "Total experience cannot be negative")
    .max(50, "Total experience cannot exceed 50")
    .int("Total experience must be an integer"),

  noticePeriod: z.enum(
    ["immediate", "15_days", "1_month", "2_months", "3_months"],
    {
      errorMap: () => ({ message: "Invalid notice period selection" }),
    }
  ),

  servingNoticePeriod: z.boolean({
    required_error: "Serving notice period is required",
    invalid_type_error: "Serving notice period must be true or false",
  }),

  professionalSummary: z
    .string()
    .max(500, "Professional summary must be less than 500 characters")
    .optional(),
});

export type profileSummary = z.infer<typeof ProfileSummaryFormSchema>;

export const initialValues: IProfileSummary = {
  currentDesignation: "",
  totalExperience: "",
  noticePeriod: "",
  servingNoticePeriod: "",
  professionalSummary: "",
};

export const profileSummaryDetailsFormfields: TFormConfig = [
  {
    name: "currentDesignation",
    label: "Current Designation",
    component: "input",
    type: "text",
    placeholder: "Enter your current designation",
    required: true,
  },
  {
    name: "totalExperience",
    label: "Total Experience (Years)",
    component: "input",
    type: "number",
    placeholder: "e.g., 5",
    required: true,
  },
  {
    name: "noticePeriod",
    label: "Notice Period",
    component: "select",
    required: true,
    placeholder: "Select your notice period",
    options: NOTICE_PERIOD,
},
  {
    name: "servingNoticePeriod",
    label: "Are you serving notice period?",
    component: "switch",
    required: true,
  },
  {
    name: "professionalSummary",
    label: "Professional Summary",
    component: "textarea",
    placeholder:
      "Brief summary about your professional background (max 500 characters)",
    required: false,
  },
];
