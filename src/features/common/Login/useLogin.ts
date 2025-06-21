import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useLoginQuery from "./useLoginQuery";

export const loginSchema = z.object({
  email: z.string().nonempty("Email is required").email("Invalid email"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

const useLogin = () => {
  const { handlers, state } = useLoginQuery();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: LoginFormData) => {
    const payload = {
      email: data.email,
      password: data.password,
      role: "RECRUITER",
    };
    handlers.loginAsync(payload);
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

export default useLogin;
