/*
- YUP - Scheme validation library
- resolves - register react-hook-form with yup

installation
- npm i yup @hookform/resolvers


- How to use
 import { yupResolver } from "@hookform/resolvers/yup";

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
    },
    resolver: yupResolver(schema), // connect schema
  });


*/

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DevTool } from "@hookform/devtools";

const schema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Email format is not valid")
    .required("Email is required"),
  channel: yup.string().required("Channel is required"),
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
    resolver: yupResolver(schema), // connect schema
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
