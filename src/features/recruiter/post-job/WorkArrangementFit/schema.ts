import { z } from "zod";
import { WORK_ARRANGEMENTS } from "@/constants/common";
import type { TFormConfig } from "@/components/DynamicForm/dynamic-form-interface";
import { searchLocationOptions } from "./useWorkArrangementFit";

const validArrangements = WORK_ARRANGEMENTS.map((item)=>item.value)
// Work Arrangement Fit validation schema
export const workArrangementFitValidationSchema = z.object({
  workArrangement: z
    .array(
      z.string({
        required_error: "Work arrangement is required",
        invalid_type_error: "Work arrangement must be a string",
      })
      .refine((val) => validArrangements.includes(val), {
        message: "Invalid work arrangement selected",
      })
    )
    .nonempty("Please select at least one work arrangement."),
    
  location: z
    .string({
      required_error: "Location is required",
      invalid_type_error: "Location must be a string",
    })
    .min(1, "Location is required"),
});

export type TWorkArrangementFitValidationSchema = z.infer<
  typeof workArrangementFitValidationSchema
>;


export const workArrangementFitFields: TFormConfig = [
  {
    name: "workArrangement",
    label: "Work Arrangement",
    component: "checkbox",
    required: true,
    options: WORK_ARRANGEMENTS,
  },
  {
    name: "location",
    label: "Location",
    component: "autocomplete",
    required: true,
    placeholder: "Enter Job Location...",
    fetchOptions: searchLocationOptions,
  },
];