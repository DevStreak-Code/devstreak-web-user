import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PublicLayout } from "@/components/Layouts";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import axios from "axios"; 
import { useState } from "react";

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
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await axios.post("https://devstreak-be.onrender.com/login", {
        email: data.email,
        password: data.password,
        role: "RECRUITER", 
      });

      setSuccessMsg("Login successful!");
      setErrorMsg("");
      console.log("API response:", response.data);
    } catch (error: any) {
      console.error("Login error:", error);
      setErrorMsg(error?.response?.data?.message || "Login failed");
      setSuccessMsg("");
    }
  };

  return (
    <PublicLayout>
      <div className="max-w-md mx-auto mt-30 bg-white shadow-md rounded-xl p-6 border border-gray-200 ">
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
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

          {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}
          {successMsg && <p className="text-green-600 text-sm">{successMsg}</p>}

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
