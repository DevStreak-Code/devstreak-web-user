import { useTimezoneFit } from "./useTimezoneFit";
import { timezoneFormSchema, timezoneValidationSchema } from "./schema";
import DynamicForm from "@/components/DynamicForm";

const TimezoneFit = () => {
  const { handlers } = useTimezoneFit();
  const { onSubmit } = handlers;

  return (
    <div className="">
      <h4 className="text-3xl font-[500] text-black">Preferred Timezones</h4>
      <div className="h-[250px] mt-5 ">
        <DynamicForm
          config={timezoneFormSchema}
          schema={timezoneValidationSchema}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default TimezoneFit;
