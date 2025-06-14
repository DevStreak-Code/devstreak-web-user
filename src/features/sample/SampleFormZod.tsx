import { useForm } from "react-hook-form";

const SampleFormZod = () => {
  const form = useForm();
  const { register } = form;
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-xl p-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-700"></h2>
      <form
        className="space-y-4"
        // onSubmit={handleSubmit(onSubmit, onError)}
        noValidate
      >
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
          {/* <p className="text-destructive text-xs">{errors.username?.message}</p> */}
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
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter valid email",
              },
              //   validate: (fieldValue) => {
              //     return (
              //       fieldValue !== "admin@gmail.com" || "Enter Different Email its reserved"
              //     );
              //   },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@gmail.com" ||
                    "Enter Different Email its reserved"
                  );
                },
                notBlackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("yahoo.com") ||
                    "Yahoo.com is blacklisted or not allowed"
                  );
                },
                emailAvailable: async (fieldValue) => {
                  const res1 = await fetch(
                    `https://jsonplaceholder.typicode.com/users?email=${fieldValue}`
                  );
                  const res2 = await res1.json();
                  return res2.length === 0 || "Email Already exists";
                },
              },
            })}
            placeholder="Enter your email"
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
          <br />
          {/* <p className="text-destructive text-xs">{errors.email?.message}</p> */}
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
            {...register("channel", {
              required: {
                value: true,
                message: " Channel is required",
              },
            })}
            placeholder="Enter your channel"
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
          <br />
          {/* <p className="text-destructive text-xs">{errors.channel?.message}</p> */}
        </div>

        <button
          type="submit"
          //   disabled={!isDirty}
          className="disabled:opacity-15 w-full bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-semibold py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};


export default SampleFormZod