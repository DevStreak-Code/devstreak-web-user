import { PublicLayout } from "@/components/Layouts";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import useLogin from "./useLogin";

const Login = () => {
  const { handlers, state } = useLogin();
  const { errors, isValid } = state;
  const { register, handleSubmit } = handlers;

  return (
    <PublicLayout>
      <div className="max-w-md mx-auto mt-30 bg-white shadow-md rounded-xl p-6 border border-gray-200 ">
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Login
          </h2>

          <CustomInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            error={errors.email?.message}
            {...handlers.register("email")}
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
            label={state.isPending ? "Logging in..." : "Submit"}
            className="w-full"
            isLoading={state.isPending}
            disabled={!isValid || state.isPending}
          />
        </form>
      </div>
    </PublicLayout>
  );
};

export default Login;
