import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { PublicLayout } from "@/components/Layouts";

const schema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
});

type FormData = z.infer<typeof schema>;

const ResetPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Reset link sent to: ${data.email}`);
    }, 1500);
  };

  return (
    <PublicLayout>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold text-center mb-2">Forgot Password?</h2>
          <p className="text-sm text-gray-600 text-center mb-6">
            Enter your registered email and we’ll send you a reset link.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <CustomInput
              label="Email"
              placeholder="Enter your email"
              type="email"
              {...register("email")}
              error={errors.email?.message}
            />

            <CustomButton
              label="Send Reset Link"
              type="submit"
              disabled={!isValid || loading}
              isLoading={loading}
              className="mt-4 w-full"
            />
          </form>
        </div>
      </div>
    </PublicLayout>
  );
};

export default ResetPassword;
