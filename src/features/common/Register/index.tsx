import { PublicLayout } from "@/components/Layouts";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import useRegister from "./useRegister";


const Register = () => {
  const { handlers, state } = useRegister();
  const { register, handleSubmit } = handlers;
  const { errors, isPending } = state;

  return (
    <PublicLayout>
      <div className="max-w-md mx-auto mt-30 bg-white shadow-md rounded-xl p-6 border border-gray-200">
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <h2 className="text-2xl font-bold mb-6 text-center">REGISTER HERE</h2>

          <CustomInput
            label="First Name"
            type="text"
            placeholder="First Name"
            error={errors.firstName?.message}
            {...register("firstName")}
          />

          <CustomInput
            label="Last Name"
            type="text"
            placeholder="Last Name"
            error={errors.lastName?.message}
            {...register("lastName")}
          />

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

          <CustomInput
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />

          <CustomButton
            type="submit"
            label={isPending ? "Registering..." : "Register"}
            className="w-full"
            isLoading={isPending}
            disabled={isPending}
          />
        </form>
      </div>
    </PublicLayout>
  );
};

export default Register;
