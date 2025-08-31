import DynamicForm from "@/components/DynamicForm";
import { urgencyFitFormSchema, urgencyFitValidationSchema } from "./schema";
import { useUrgencyFit } from "./useUrgencyFit";

const UrgencyFit = () => {
  const { handlers } = useUrgencyFit();
  const { onSubmit } = handlers;
  return (
    <div className="">
      <h4 className="text-3xl font-[500] text-black">
        What's the urgency level for this position?
      </h4>
      <div className="h-[250px] mt-5 ">
        <DynamicForm
          config={urgencyFitFormSchema}
          schema={urgencyFitValidationSchema}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default UrgencyFit;
