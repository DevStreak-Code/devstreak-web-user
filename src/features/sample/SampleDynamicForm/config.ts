import type { TFormConfig } from "@/components/DynamicForm/dynamic-form-interface";
import { z } from "zod";

export const formSchema = z.object({
  fullName: z.string().min(3, "At least 3 characters"),
  email: z.string().email("Invalid email"),
  role: z.string().min(1, "Role is required"),
  hobbies: z.array(z.string()).optional(), // or required if needed
  isActive: z.boolean().default(false),
  DOB: z.any().transform(val => val ? new Date(val) : null),
  gender: z.string().min(1, "Please select a gender"),
});

export const formFields: TFormConfig = [
  {
    name: "fullName",
    label: "Full Name",
    component: "input",
    placeholder: "Enter your name",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    component: "input",
    placeholder: "Enter email",
    type: "email",
    required: true,
  },
  {
    name: "role",
    label: "Role",
    component: "select",
    options: [
      { label: "Developer", value: "dev" },
      { label: "Designer", value: "design" },
    ],
  },
  {
    name: "hobbies",
    label: "Select Hobbies",
    component: "multiselect",
    placeholder:"Select Hobbies",
    options: [
      { label: "Eat", value: "1" },
      { label: "Sleep", value: "2" },
    ],
  },
  {
    name: "isActive",
    label: "Active?",
    component: "switch",
  },
  {
    name: "DOB",
    label: "Date",
    component: "date",
    placeholder: "Enter email",
    required: true,
  },
  {
    name: "gender",
    label: "Select Gender",
    component: "radio",
    placeholder:"Select Gender",
    options: [
      { label: "Male", value: "1" },
      { label: "Female", value: "2" },
      { label: "Others", value: "3" },
    ],
  },
];
