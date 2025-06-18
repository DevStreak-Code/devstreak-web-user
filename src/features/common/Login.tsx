import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PublicLayout } from "@/components/Layouts";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

const loginSchema = z.object({
  email: z.string().nonempty("Email is required").email("Invalid email"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login Success:", data);
  };

  return (
    <PublicLayout>
      <div className="max-w-md mx-auto mt-30 bg-white shadow-md rounded-xl p-6 border border-gray-200 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Login
          </h2>

          <CustomInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            error={errors.email?.message}
            {...register("email")}
          />

          <CustomInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            error={errors.password?.message}
            {...register("password")}
          />

          <CustomButton
            type="submit"
            label={isSubmitting ? "Logging in..." : "Submit"}
            className="w-full"
            disabled={!isValid || isSubmitting}
          />
        </form>
      </div>
    </PublicLayout>
  );
};

export default Login;
