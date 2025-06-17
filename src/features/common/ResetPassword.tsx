import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PublicLayout } from "@/components/Layouts";

const schema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

type ResetFormData = z.infer<typeof schema>;

const ResetPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ResetFormData>({
    resolver: zodResolver(schema),
  });

  const [message, setMessage] = React.useState("");

  const onSubmit = (data: ResetFormData) => {
    setMessage("Sending reset link...");
    setTimeout(() => {
      setMessage(`Reset link sent to: ${data.email}`);
      reset(); // clears the form
    }, 1000);
  };

  return (
    <PublicLayout>
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Reset Password
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Enter your email to receive a reset link.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full px-3 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md mb-1 focus:outline-none focus:ring-2 focus:ring-teal-500`}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-2">
                {errors.email.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-teal-700 hover:bg-teal-800 text-white py-2 rounded-md transition"
            >
              {isSubmitting ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          {message && (
            <p className="mt-4 text-sm text-green-600 text-center">{message}</p>
          )}
        </div>
      </div>
    </PublicLayout>
  );
};

export default ResetPassword;
