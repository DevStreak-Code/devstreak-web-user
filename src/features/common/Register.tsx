import { PublicLayout } from "@/components/Layouts";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

// Zod
const registerSchema = z
  .object({
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(6, "Minimum 6 characters")
      .max(20, "Maximum 20 characters"),
    confirmPassword: z.string().min(1, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type RegisterFormData = z.infer<typeof registerSchema>;

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Form Submitted:", data);
  };
  return (
    <PublicLayout>
      <div className="min-h-screen flex items-center justify-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-xl w-full max-w-md"
          noValidate
        >
          <h2 className="text-2xl font-bold mb-6 text-center">REGISTER HERE</h2>

          {/* Email */}
          {/* <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email")}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div> */}
          <div className="mb-4">

          <CustomInput
            label="Email"
            type="email"
            error={errors.email?.message}
            placeholder="Enter your email"
            {...register("email")}
            />
            </div>

          {/* Password */}
          {/* <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password")}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div> */}
          <div className="mb-4">

          <CustomInput
            label="Password"
            error={errors.password?.message}
            type="password"
            placeholder="Enter your password"
            {...register("password")}
            />
            </div>

          {/* Confirm Password */}
          {/* <div className="mb-6">
            <label htmlFor="confirmPassword" className="block font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Re-enter your password"
              {...register("confirmPassword")}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div> */}
          <div className="mb-4">

          <CustomInput
            label=" Confirm Password"
            error={errors.confirmPassword?.message}
            type="password"
            placeholder="Enter your password"
            {...register("confirmPassword")}
            />

            </div>

          {/* Submit Button */}
          {/* <button
            type="submit"
            disabled={!isValid}
            className={`w-full bg-blue-600 text-white py-2 rounded-md font-semibold ${
              !isValid ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            Continue
          </button> */}
          
          <CustomButton label="Register" className="w-full" type="submit" disabled={!isValid}/>
        </form>
      </div>
    </PublicLayout>
  );
};

export default Register;
