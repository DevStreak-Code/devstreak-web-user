import { PublicLayout } from "@/components/Layouts";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import axios from "axios";

// Zod
const registerSchema = z
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
    axios
      .post("https://devstreak-be.onrender.com/register", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <PublicLayout>
      <div className="max-w-md mx-auto mt-30 bg-white shadow-md rounded-xl p-6 border border-gray-200 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          <h2 className="text-2xl font-bold mb-6 text-center">REGISTER HERE</h2>
          {/* FirstName */}
          <div className="mb-4">
            <CustomInput
              label="First Name"
              type="text"
              error={errors.firstName?.message}
              placeholder="First Name"
              {...register("firstName")}
            />
          </div>

          <div className="mb-4">
            {/* LastName */}

            <CustomInput
              label="Last Name"
              type="text"
              error={errors.lastName?.message}
              placeholder="Last Name"
              {...register("lastName")}
            />
          </div>

          {/* Email */}
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
          <div className="mb-4">
            <CustomInput
              label=" Confirm Password"
              error={errors.confirmPassword?.message}
              type="password"
              placeholder="Enter your password"
              {...register("confirmPassword")}
            />
          </div>
          {/* Role */}
          <div className="mb-4">
            <CustomInput
              label="Role"
              error={errors.role?.message}
              type="text"
              placeholder="Role Here"
              defaultValue="RECRUITER"
              {...register("role")}
            />
          </div>

          {/* Submit Button */}
          <CustomButton
            label="Register"
            className="w-full"
            type="submit"
            disabled={!isValid}
          />
        </form>
      </div>
    </PublicLayout>
  );
};

export default Register;
