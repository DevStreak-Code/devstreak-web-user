import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from "zod";



export const registerSchema = z
  .object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(6, "Minimum 6 characters")
      .max(20, "Maximum 20 characters"),
    confirmPassword: z.string().min(1, "Confirm Password is required"),
    role: z.literal("RECRUITER"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

  export type RegisterFormData = z.infer<typeof registerSchema>;

  export const useRegisterForm = () =>
  useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      role: "RECRUITER",
    },
  });