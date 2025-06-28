import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PublicLayout } from "@/components/Layouts";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

const schema = z
  .object({
    newPassword: z
      .string()
      .nonempty("New Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must be at most 20 characters"),
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
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    console.log("Password changed:", data);
    reset();
  };

  return (
    <PublicLayout>
      <div className="max-w-sm mx-auto mt-10 bg-white shadow-md rounded-xl p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-1 text-gray-700">
          Change Password
        </h2>
        <p className="text-gray-600 mb-4 text-sm">
          Changing password for: <strong>example@email.com</strong>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <CustomInput
            label="New Password"
            type="password"
            placeholder="Enter new password"
            error={errors.newPassword?.message}
            {...register("newPassword")}
          />

          <CustomInput
            label="Confirm Password"
            type="password"
            placeholder="Confirm password"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />

          <CustomButton
            type="submit"
            label={isSubmitting ? "Updating..." : "Submit"}
            className="w-full"
            disabled={isSubmitting}
          />
        </form>
      </div>
    </PublicLayout>
  );
};

export default ChangePassword;

