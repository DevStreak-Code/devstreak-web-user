import type { TFormConfig } from "@/components/DynamicForm/dynamic-form-interface";
import { searchLocationOptions } from "@/features/recruiter/post-job/WorkArrangementFit/useWorkArrangementFit";
import { z } from "zod";

export interface IPersonalDetailsForm {
  fullName: string;
  email: string;
  phone: string;
  linkedIn: string;
  github: string;
  portfolio: string;
  location: string;
}

export const PersonalDetailsFormSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .max(100, "Full name must be less than 100 characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\d+$/, "Phone number must contain only digits")
    .refine(
      (val) => val.length >= 10 && val.length <= 13,
      "Phone number must be between 10 and 13 digits"
    ),

  linkedIn: z
    .string()
    .url("Please enter a valid LinkedIn URL")
    .or(z.literal("")),

  github: z.string().url("Please enter a valid GitHub URL").or(z.literal("")),

  portfolio: z
    .string()
    .url("Please enter a valid portfolio URL")
    .or(z.literal("")),

  location: z
    .string()
    .min(1, "Location is required")
    .max(1000, "Location must be less than 100 characters"),
});

export type PersonalDetailsForm = z.infer<typeof PersonalDetailsFormSchema>;

export const initialValues: IPersonalDetailsForm = {
  fullName: "",
  email: "",
  phone: "",
  linkedIn: "",
  github: "",
  portfolio: "",
  location: "",
};

export const personalDetailsFormFields: TFormConfig = [
  {
    name: "fullName",
    label: "Full Name",
    component: "input",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    component: "input",
    type: "email",
    placeholder: "your.email@example.com",
    required: true,
  },
  {
    name: "phone",
    label: "Phone Number",
    component: "input",
    type: "text",
    placeholder: "Enter your phone number",
    required: true,
  },
  {
    name: "linkedIn",
    label: "LinkedIn Profile",
    component: "input",
    type: "email",
    placeholder: "https://linkedin.com",
    required: false,
  },
  {
    name: "github",
    label: "GitHub Profile",
    component: "input",
    type: "email",
    placeholder: "https://github.com",
    required: false,
  },
  {
    name: "portfolio",
    label: "Portfolio Website",
    component: "input",
    type: "email",
    placeholder: "https://yourportfolio.com",
    required: false,
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
