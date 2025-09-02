import type { TFormConfig } from "@/components/DynamicForm/dynamic-form-interface";
import { EDUCATION_OPTIONS } from "@/constants/courses";

import { z } from "zod";

const validTimezoneValues = EDUCATION_OPTIONS.map((tz) => tz.value);

export const educationFitValidationSchema = z.object({
  degree: z
    .array(z.string())
    .refine((arr) => arr.every((v) => validTimezoneValues.includes(v)), {
      message: "Invalid Course",
    }),
});

export const educationFitFormSchema: TFormConfig = [
  {
    name: "degree",
    label: "Select Education Degree(s)",
    component: "multiselect", // use "select" if only one allowed
    required: true,
    options: EDUCATION_OPTIONS,
    placeholder: "Choose education degree(s)",
  },
];

export type TEducationFitFormType = z.infer<typeof educationFitValidationSchema>;
