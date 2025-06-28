import DynamicForm from "@/components/DynamicForm";
import { formFields, formSchema } from "./config";

const SampleDynamicForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (data:any) => {
    console.log(data);
  };
  return (
    <div>
      <DynamicForm
        config={formFields}
        schema={formSchema}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default SampleDynamicForm;
