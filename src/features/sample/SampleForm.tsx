/*
1- Create Basic HTML
   - each field should have 
      - name & id | Mandatory
      - type | Mandatory
      - placeholder , label, required, disabled (optional)

2- Install 'react-hook-form'
   1- register each input with react-hook-form using 'register' from  useForm, so it can controlled by React Hook Form
      eg: (Basic Method)
      
      const {name,ref,onChange,onBlur} = register('username');

      /- Manually Bind 
      <input
            type="text"
            id="username"
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
        />

    /- Pro way
      
    <input
            type="text"
            id="username"
            {...register("username")} // directly use here (Note Id should be same as register name passing)
                />
3- How to test (using DevTool)
   - To test, we can use DevTool provided by react-hook-form
   - Install '@hookform/devtools'
   - Wrap <form> with <DevTool control={control}> // destructure control from register
   - Now we can see all the data in DevTool

4 - How to submit data
     - define a function when submit button press  eg: onSubmit
     - destructre handleSubmit from form object
     - BIND : form className="space-y-4" onSubmit={handleSubmit(onSubmit)}
     - Typescript error
        const form = useForm<TFormValues>();
         const onSubmit = (data: TFormValues) => {
                        console.log("form submitted", data);
                         };
5- validation
    - noValidate | remove browser validation
    -Add input filed this ==>      {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter valid email",
              },
            })}
    Note - Validation occur only when form submitted default
  
6- Error Messages show to UI
  const {formState} = useForm();
  const {errors} = formState

  eg: errors.email.message | use this in UI to show the errors

7- Custom Validation (in register)
  - Way 1: 

    validate: (fieldValue) => {
                return (
                   fieldValue !== "admin@gmail.com" || "Enter Different Email its reserved"
               );
             },

  - Way 2
           validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@gmail.com" ||
                    "Enter Different Email its reserved"
                  );
                },
                notBlackListed: (fieldValue) => {
                  return !fieldValue.endsWith("yahoo.com") || 'Yahoo.com is blacklisted or not allowed';
                },
              },



10 - Enhancement 
     - set default values to form fields
     - Way 1:
     const form = useForm<TFormValues>({
                    defaultValues: {
                    username: "sachin",
                    channel: "devstreak",
                    email: "info@devstreak.in",
                    },
                });

    - Way2 (API Call to set Default values)
       const form = useForm<TFormValues>({
       defaultValues: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
       return {
        channel: data.company.name,
        username: data.username,
        email: data.email,
      };
    },
  });
   
11- Working with nested objects eg: social has facebook & twitter
   -  {...register("social.twitter")}

12- Working with arrays (Eg: two phone numbers)
   - default values ==> phoneNumbers:["",""];
   - create two input field for phone numbers 
   -   {...register("phoneNumbers.0")}
   -   {...register("phoneNumbers.1")}

11- Dynamic Fields to collect users phone numbers
   - useFieldArray Hook , it works only with array of object  eg:  hobbies: { name: string }[];
   - default values  ==>  hobbies: [{ name: "" }],
   - const { fields } = useFieldArray({
    name: "hobbies",
    control,
  });
  - use 'fields' into JSX

*/

type TFormValues = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
  hobbies: { name: string }[];
};
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const SampleForm = () => {
  const form = useForm<TFormValues>({
    defaultValues: {
      channel: "",
      username: "",
      email: "",
      social: {
        facebook: "",
        twitter: "",
      },
      phoneNumbers: ["", ""],
      hobbies: [{ name: "" }],
    },
  });
  const { register, control, handleSubmit, formState } = form;

  const { fields, append, remove } = useFieldArray({
    name: "hobbies",
    control,
  });
  const { errors } = formState;

  const onSubmit = (data: TFormValues) => {
    console.log("form submitted", data);
  };
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-xl p-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">User Details</h2>
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
              },
            })}
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
          <p className="text-destructive text-xs">{errors.channel?.message}</p>
        </div>

        <div>
          <label
            htmlFor="twitter"
            className="block text-sm font-medium text-gray-600"
          >
            Twitter
          </label>
          <input
            type="text"
            id="twitter"
            {...register("social.twitter")}
            placeholder="Enter your twitter handle"
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <label
            htmlFor="facebook"
            className="block text-sm font-medium text-gray-600"
          >
            Facebook
          </label>
          <input
            type="text"
            id="facebook"
            {...register("social.facebook")}
            placeholder="Enter your facebook handle"
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <label
            htmlFor="primary-phone"
            className="block text-sm font-medium text-gray-600"
          >
            Primary Phone Number
          </label>
          <input
            type="text"
            id="primary-phone"
            {...register("phoneNumbers.0")}
            placeholder="Enter your primary phone number"
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <label
            htmlFor="secondary-phone"
            className="block text-sm font-medium text-gray-600"
          >
            Secondary Phone Number
          </label>
          <input
            type="text"
            id="secondary-phone"
            {...register("phoneNumbers.1")}
            placeholder="Enter your secondary phone number"
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <label
            htmlFor="Hobbies"
            className="block text-sm font-medium text-gray-600"
          >
            Hobbies
          </label>
          {fields.map((field, i) => {
            return (
              <div className="flex justify-between items-center">
                <input
                  key={field.id}
                  type="text"
                  {...register(`hobbies.${i}.name` as const)}
                  placeholder="Enter your Hobby"
                  className="mt-1 w-[90%] border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
                {i > 0 && (
                  <span className="text-destructive" onClick={() => remove(i)}>
                    X
                  </span>
                )}
              </div>
            );
          })}
          <div className="w-full flex justify-end mt-2">
            <button
              type="button"
              onClick={() => append({ name: "" })}
              className="border-primary border px-1 transition-colors text-primary text-sm font-semibold py-1 rounded-md"
            >
              Add Hobby
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-semibold py-2 rounded-md"
        >
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default SampleForm;
