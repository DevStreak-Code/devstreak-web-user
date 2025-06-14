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

  - Add & Remove fields use 'append' & 'remove' from useFieldArray and attach into JSX Buttons

13 - Number field
     ==>      {...register("age", {
              valueAsNumber: true, // it should be true
              required: true,
            })}

    Date Field
     ==>  {...register("dob", {
              required: true,
              valueAsDate:true // this will give date obj otherwise you will get string
            })}
14 - Observed Value which is user try to type or enter
     - using watch
     -  {watch} = form
     - const watchUsername = watch("username")  // single
     - const watchValues =watch(['username','email']) // multiple filed      
     - const watchAllValues =watch() // all values as object
     - we can lift those value up using useEffect 
15 -  get field values using getValues (when certain action perform ex: onClick)
     - better from watch 
     - not re-render

     - getAllValues = getValues();
     - getSingleValue = getValues('username');
     - getMultipleValue = getValues(['username','email']);

16-  set field value programatically using setValue
     - {setValue} = form
    setValue("username", "sachin"); // it doesnt register field not run validation , touch , dirty
    setValue("email", "", {
      shouldDirty: true, // update with register
      shouldTouch: true, // update with register
      shouldValidate: true, // will trigger error
    });


17- Touched  - means user interacted with field or not
               if we click or focus on input then remove the focus : touched => true
    Dirty -  means user modified the field or not
            if we type something and prev value (default value) and current value is different then dirty ==> true
   
    isDirty - if all forms fields has been modified or not
    we can access from formState
    const {dirtyFields, touchedFields ,isDirty} = formState


18 - Disabled fields 
    - in register we can do
    - Note : when disabled field then validation not occur and value become undefined

        <input
            type="number"
            id="age"
            {...register("age", {
              valueAsNumber: true,
              required: "Enter Age",
            //   disabled:true,
              disabled: watch("username") === "", // as dependent field
            })}
            placeholder="Enter your age"
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />


19- Handle Submission Errors
     onSubmit={handleSubmit(onSubmit, onError)} : trigger onError when form submission failed

20 - Disable form
    const {isDirty, isValid} = formState;
    - when user never entered input
      disabled ={!isDirty}
    
    - form state is invalid
      disabled = {!isValid}

      combine ==> disabled ={!isDirty || !isValid}

26 - Form Submission state
    - useful for tracking progress and outcome of form submission
    -State ==> {isSubmitting , isSubmitted , isSubmitSuccessful , submitCount} = formState
    - we can disable button while submitting and can show loader while submitting (isSubmitting)

27 - Reset form
   - reset form values to reset to default value or intial value

   const {reset} = form

   ==>onClick={reset}

   - Reset form when submit is done (successful)
   [Recommended]

   useEffect(()=>{
    if(isSubmitSuccessful){
      reset()
    }
   },[isSubmitSuccessful])

28 - Async Email Validation
   - eg: when we have to say email is already exists

                emailAvailable: async (fieldValue) => {
                  const res1 = await fetch(
                    `https://jsonplaceholder.typicode.com/users?email=${fieldValue}`
                  );
                  const res2 = await res1.json();
                  return res2.length === 0 || "Email Already exists";
                },

29 - Validation Mode
    1.[Default] onSubmit - when form submit then only errors shows
    2. "onBlur" - when user focus out of input field then only errors shows
    3. "onTouched" - when user do anything then errors shows
    4. "onChange" = trigger validation on each keystroke | Lead Multiple Render 
    5. "all" - blur or change in all mode show errors

    mode :"onSubmit"| "onBlur" |""
    2. 

30 - Trigger manual validation (on an certain action)
   const {trigger} = form

   ==> onClick={()=>trigger()} // all validation shows with error on respective field
   ==> onClick={()=>trigger("username")} // for single field


*/

export type TFormValues = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
  hobbies: { name: string }[];
  age: number;
  dob: Date;
};
import { useForm, useFieldArray, type FieldErrors } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

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
      age: 0,
      dob: new Date(),
    },
    mode:"onSubmit"
  });
  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
    reset,
    trigger
  } = form;

  const { fields, append, remove } = useFieldArray({
    name: "hobbies",
    control,
  });
  const {
    errors,
    touchedFields,
    dirtyFields,
    isDirty,
    isValid,
    isSubmitting,
    isSubmitted,
    isSubmitSuccessful,
    submitCount,
  } = formState;
  console.log({
    touchedFields,
    dirtyFields,
    isSubmitting,
    isSubmitted, // being true after submission untill unless not reset
    isSubmitSuccessful,
    submitCount, //  no of time form submitted successfully
  });

  //   useEffect(() => {
  //     const subscription = watch((values) => {
  //       console.log("form values::::", values); // we can pass all these value to parent
  //     });

  //     return () => subscription.unsubscribe();
  //   }, [watch]);

  const onError = (errors: FieldErrors<TFormValues>) => {
    console.log("Errors:::", errors); // best place to log error and provide custom errors
  };

  const onSubmit = (data: TFormValues) => {
    console.log("form submitted", data);
  };

  const handleGetValues = () => {
    console.log("Get Value", getValues());
    console.log(getValues("username"));
    console.log(getValues("social.facebook"));
    console.log(getValues(["username", "email"]));
  };

  const handleSetValue = () => {
    setValue("username", "sachin"); // it doesnt register field not run validation , touch , dirty
    setValue("email", "", {
      shouldDirty: true, // update with register
      shouldTouch: true, // update with register
      shouldValidate: true, // will trigger error
    });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-xl p-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-700"></h2>
      <form
        className="space-y-4"
        onSubmit={handleSubmit(onSubmit, onError)}
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
              <div className="flex justify-between items-center" key={field.id}>
                <input
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

        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-600"
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            {...register("age", {
              valueAsNumber: true,
              required: "Enter Age",
              //   disabled:true,
              disabled: watch("username") === "", // as dependent field
            })}
            placeholder="Enter your age"
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-600"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            {...register("dob", {
              required: true,
              valueAsDate: true,
            })}
            placeholder="Enter your age"
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>

        <button
          type="submit"
          disabled={!isDirty}
          className="disabled:opacity-15 w-full bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-semibold py-2 rounded-md"
        >
          Submit
        </button>

        <button
          type="button"
          onClick={() => reset()}
          className="disabled:opacity-15 w-full bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-semibold py-2 rounded-md"
        >
          Reset
        </button>

        <button
          type="button"
          onClick={() => handleGetValues()}
          className="w-full bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-semibold py-2 rounded-md"
        >
          Get Value
        </button>

        <button
          type="button"
          onClick={() => handleSetValue()}
          className="w-full bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-semibold py-2 rounded-md"
        >
          Set Value
        </button>
        <button
          type="button"
          onClick={() => trigger()}
          className="w-full bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-semibold py-2 rounded-md"
        >
          Validate
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default SampleForm;
