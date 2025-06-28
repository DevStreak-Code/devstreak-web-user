import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useRegisterQuery from "./useRegisterQuery";


export const registerSchema = z
  .object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    email: z.string().email("Invalid email").min(1, "Email is required"),
    password: z.string().min(6, "Minimum 6 characters").max(20, "Maximum 20 characters"),
    confirmPassword: z.string().min(1, "Confirm Password is required"),
    role: z.literal("RECRUITER"), // Enforce specific role
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

const useRegister = () => {
  const { handlers, state } = useRegisterQuery();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      role: "RECRUITER",
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    const payload = {
      ...data,
      role: "RECRUITER" as const,
    };
    handlers.registerAsync(payload);
  };

  return {
    state: {
      ...state,
      errors,
      isValid,
      isSubmitting,
    },
    handlers: {
      register,
      handleSubmit: handleSubmit(onSubmit),
    },
  };
};

export default useRegister;
