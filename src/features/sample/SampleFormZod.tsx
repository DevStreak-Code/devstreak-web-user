/*
- ZOD -Typescript first, Scheme validation library
- resolves - register react-hook-form with zod

installation
- npm i zod @hookform/resolvers


- How to use
 import { z } from "zod";
 import { zodResolvers } from "@hookform/resolvers/zod";

const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
    },
    resolver: zodResolver(schema), // connect schema
  });


*/

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DevTool } from "@hookform/devtools";
import { PublicLayout } from "@/components/Layouts";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

const schema = z.object({
  username: z.string().nonempty("User name is required"),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Email not valid format"),
  channel: z.string().nonempty("Channel is required"),
});

type TFormValues = {
  channel: string;
  email: string;
  username: string;
};
const SampleFormYup = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
    },
    resolver: zodResolver(schema), // connect schema
  });
  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;

  const onSubmit = (data: TFormValues) => {
    console.log(data);
  };

  return (
    <PublicLayout>
      <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-xl p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-700"></h2>
        <form
          className="space-y-4"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div>
            <CustomInput
              label="Username"
              error={errors.username?.message}
              placeholder="Enter your username"
              {...register("username", {
                required: "User name is required",
              })}
            />
          </div>

          <div>
            <CustomInput
              label="Email"
              error={errors.email?.message}
              placeholder="Enter your email"
              {...register("email")}
            />
          </div>

          <div>
            <CustomInput
              label="Channel"
              error={errors.channel?.message}
              placeholder="Enter your channel name"
              {...register("channel")}
            />
          </div>

          <CustomButton label="Submit" className="w-full" type="submit" />
        </form>
        <DevTool control={control} />
      </div>
    </PublicLayout>
  );
};

export default SampleFormYup;
