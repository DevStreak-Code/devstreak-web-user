import { PublicLayout } from "@/components/Layouts";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { useRegisterMutation } from "./UseRegisterQuery";
import { useRegisterForm } from "./UseRegister";

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useRegisterForm();

  const { mutate, isPending } = useRegisterMutation();

  const onsubmit = (data: any) => {
    mutate(data, {
      onSuccess: (res) => {
        console.log("Succeeded", res);
      },
      onError: (err) => {
        console.log("Error", err);
      },
    });
  };
  return (
    <PublicLayout>
      <div className="max-w-md mx-auto mt-30 bg-white shadow-md rounded-xl p-6 border border-gray-200 ">
        <form
          onSubmit={handleSubmit(onsubmit)}
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
            disabled={!isValid || isPending}
          />
        </form>
      </div>
    </PublicLayout>
  );
};

export default Register;
