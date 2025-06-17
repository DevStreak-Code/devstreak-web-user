import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PublicLayout } from "@/components/Layouts";

// ✅ Zod Schema with validations
const schema = z
  .object({
    newPassword: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must be at most 20 characters")
      .nonempty("New Password is required"),
    confirmPassword: z.string().nonempty("Confirm Password is required"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Password changed:", data);
    reset();
  };

  return (
    <PublicLayout>
      <div className="min-h-screen flex items-start justify-center bg-white pt-20">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-xl font-semibold mb-1">Change Password</h2>
          <p className="text-gray-600 mb-4 text-sm">
            Changing password for: <strong>example@email.com</strong>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                {...register("newPassword")}
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-[#147b74]"
              />
              {errors.newPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.newPassword.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-medium">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                {...register("confirmPassword")}
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-[#147b74]"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className={`w-full py-2 rounded-md font-medium text-white ${
                isValid
                  ? "bg-[#147b74] hover:bg-[#0f615b]"
                  : "bg-[#9dd2cf] cursor-not-allowed"
              }`}
            >
              {isSubmitting ? "Updating..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </PublicLayout>
  );
};

export default ChangePassword;
