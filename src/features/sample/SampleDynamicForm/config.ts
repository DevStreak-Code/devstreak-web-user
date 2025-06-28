import type { TFormConfig } from "@/components/DynamicForm/dynamic-form-interface";
import { z } from "zod";


export const formSchema = z.object({
  fullName: z.string().min(3, "At least 3 characters"),
  email: z.string().email("Invalid email"),
//   role: z.string(),
//   isActive: z.boolean().optional(),
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
    name: "isActive",
    label: "Active?",
    component: "switch",
  },
];
