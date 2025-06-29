import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { type ZodTypeAny } from "zod";
import type { TFormConfig, FormField } from "./dynamic-form-interface";
import CustomButton from "../CustomButton";
import CustomRadio from "../CustomRadio";
import CustomDatePicker from "../CustomDatePicker";
// import CustomInputTags from "../CustomInputTags";
import CustomSwitchButton from "../CustomSwitchButton";
import CustomMultiSelect from "../CustomMultiSelect";
import CustomTextArea from "../CustomTextArea";
import CustomSelect from "../CustomSelect";
import CustomInput from "../CustomInput";
import { DevTool } from "@hookform/devtools";

// Components

interface DynamicFormProps {
  config: TFormConfig;
  schema: ZodTypeAny;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (values: any) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  config,
  schema,
  onSubmit,
}) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const renderField = (field: FormField) => {
    const common = {
      label: field.label,
      placeholder: field.placeholder,
      disabled: field.disabled,
      required: field.required,
      error: errors[field.name]?.message as string,
    };

    switch (field.component) {
      case "input":
        return (
          <CustomInput
            {...register(field.name)}
            type={field.type}
            {...common}
          />
        );
      case "textarea":
        return <CustomTextArea {...register(field.name)} {...common} />;
      case "select":
        return (
          <Controller
            control={control}
            name={field.name}
            render={({ field: { value, onChange, onBlur } }) => (
              <CustomSelect
                label={field.label}
                placeholder={field.placeholder}
                options={field.options}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={errors[field.name]?.message as string}
              />
            )}
          />
        );
      case "multiselect":
        return (
          <Controller
            control={control}
            name={field.name}
            render={({ field: f }) => (
              <CustomMultiSelect {...common} options={field.options} {...f} />
            )}
          />
        );
      case "switch":
        return (
          <Controller
            control={control}
            name={field.name}
            render={({ field: { value, onChange, onBlur, name } }) => (
              <CustomSwitchButton
                name={name}
                label={field.label}
                disabled={field.disabled}
                checked={value}
                onCheckedChange={onChange}
                onBlur={onBlur}
                error={errors[field.name]?.message as string}
              />
            )}
          />
        );
      //   case "tags":
      //     return (
      //       <Controller
      //         control={control}
      //         name={field.name}
      //         render={({ field: f }) => <CustomInputTags {...common} {...f} />}
      //       />
      //     );
      case "date":
        return (
          <Controller
            control={control}
            name={field.name}
            render={({ field: { value, onChange, onBlur } }) => (
              <CustomDatePicker
                label={field.label}
                value={value}
                onChange={onChange}
                name={field.name}
                onBlur={onBlur}
                error={errors[field.name]?.message as string}
              />
            )}
          />
        );
      case "radio":
        return (
          <Controller
            control={control}
            name={field.name}
            render={({ field: { value, onChange, onBlur, name } }) => (
              <CustomRadio
                name={name}
                label={field.label}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                options={field.options}
                error={errors[field.name]?.message as string}
              />
            )}
          />
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {config.map((field) => (
        <div key={field.name}>{renderField(field)}</div>
      ))}
      <CustomButton type="submit" label="Submit" />
      <DevTool control={control} />
    </form>
  );
};

export default DynamicForm;
