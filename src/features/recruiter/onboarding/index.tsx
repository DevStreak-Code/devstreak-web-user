import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CustomInput from "@/components/CustomInput";
import CustomTextArea from "@/components/CustomTextArea";
import CustomButton from "@/components/CustomButton";

const schema = z.object({
  companyName: z.string().min(1, { message: "Company Name Required" }),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  website: z.string().min(1, "url is required").url("Invalid url address"),
  date: z.string().nonempty("Field is required"), // why is it not showing for this
  description: z.string().min(1, { message: "Field is required" }),
  address: z.string().min(1, { message: "Field is required" }),
});

type FormData = z.infer<typeof schema>;

const RecruiterOnboarding: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-lg"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Recruiter Onboarding
        </h2>
        <CustomInput
          label="Company Name"
          type="text"
          error={errors.companyName?.message}
          placeholder="Ex:- ABC Pvt Ltd"
          {...register("companyName")}
        />
        <CustomInput
          label="Email Id"
          type="text"
          error={errors.email?.message}
          placeholder="Ex:- abc@company.com"
          {...register("email")}
        />
        <CustomInput
          label="Website URL"
          type="text"
          error={errors.website?.message}
          placeholder="Ex:- http://abcNuke.com"
          {...register("website")}
        />
        {/* <CustomInput
          label="Verified Date"
          type="date"
          placeholder="Enter Verified Date"
          {...register("date")}
        /> */}
        <CustomTextArea
          label="Description"
          error={errors.description?.message}
          placeholder="Company Description"
          {...register("description")}
        />
        <CustomTextArea
          label="Address"
          error={errors.address?.message}
          placeholder="Company Address"
          {...register("address")}
        />
        <div className="mt-5 w-full flex justify-center">
          <CustomButton className="w-[60%]" type="submit" label="Submit" />
        </div>
      </form>
    </div>
  );
};

export default RecruiterOnboarding;
