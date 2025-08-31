import type { TFormConfig } from "@/components/DynamicForm/dynamic-form-interface";
import { z } from "zod";
import { URGENCY_FIT } from "@/constants/common";

const validValues = URGENCY_FIT.map((o) => o.value);

export const urgencyFitValidationSchema = z.object({
  candidateAvailability: z
    .string({
      required_error: "Candidate availability is required",
      invalid_type_error: "Candidate availability must be a string",
    })
    .refine((val) => validValues.includes(val), {
      message: "Invalid timezone selected",
    }),
});

export type UrgencyFitFormData = z.infer<typeof urgencyFitValidationSchema>;

export const urgencyFitFormSchema: TFormConfig = [
  {
    name: "candidateAvailability",
    label: "Candidate availability",
    component: "radio",
    required: true,
    options: URGENCY_FIT,
  },
];
