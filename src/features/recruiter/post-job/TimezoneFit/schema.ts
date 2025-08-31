import type { TFormConfig } from "@/components/DynamicForm/dynamic-form-interface";
import { customTimezone } from "@/constants/timezone";
import { z } from "zod";

const validTimezoneValues = customTimezone.map((tz) => tz.value);

export const timezoneValidationSchema = z.object({
  timezones: z
    .array(z.string())
    .refine((arr) => arr.every((v) => validTimezoneValues.includes(v)), {
      message: "Invalid timezone",
    }),
});

export const timezoneFormSchema: TFormConfig = [
  {
    name: "timezones",
    label: "Select Timezones",
    component: "multiselect",
    required: true,
    options: customTimezone,
    placeholder: "Select Currency",
  },
];

export type TimezoneFormData = z.infer<typeof timezoneValidationSchema>;
