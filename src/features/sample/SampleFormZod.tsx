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
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-xl p-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-700"></h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-600"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: "User name is required",
            })}
            placeholder="Enter your username"
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
          <br />
          <p className="text-destructive text-xs">{errors.username?.message}</p>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Enter your email"
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
          <br />
          <p className="text-destructive text-xs">{errors.email?.message}</p>
        </div>

        <div>
          <label
            htmlFor="channel"
            className="block text-sm font-medium text-gray-600"
          >
            Channel
          </label>
          <input
            type="text"
            id="channel"
            {...register("channel")}
            placeholder="Enter your channel"
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
          <br />
          <p className="text-destructive text-xs">{errors.channel?.message}</p>
        </div>

        <button
          type="submit"
          //   disabled={!isDirty}
          className="disabled:opacity-15 w-full bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-semibold py-2 rounded-md"
        >
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default SampleFormYup;
