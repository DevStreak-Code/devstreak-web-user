/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { forwardRef, useEffect, useImperativeHandle } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { type ZodTypeAny } from "zod";
import type { TFormConfig, FormField } from "./dynamic-form-interface";
import CustomButton from "../CustomButton";
import CustomRadio from "../CustomRadio";
import CustomDatePicker from "../CustomDatePicker";
import CustomSwitchButton from "../CustomSwitchButton";
import CustomMultiSelect from "../CustomMultiSelect";
import CustomTextArea from "../CustomTextArea";
import CustomSelect from "../CustomSelect";
import CustomInput from "../CustomInput";
import { DevTool } from "@hookform/devtools";
import CustomCheckboxGroup from "../CustomCheckbox";
import CustomAutocomplete from "../CustomAutoComplete";

export interface DynamicFormRef {
  submitForm: () => void;
  resetForm: () => void;
}

interface DynamicFormProps {
  config: TFormConfig;
  schema: ZodTypeAny;
  isShowDefaultSubmitButton?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (values: any) => void;
  initialValues?: any;
}

const DynamicForm = forwardRef<DynamicFormRef, DynamicFormProps>(
  (
    {
      config,
      schema,
      onSubmit,
      isShowDefaultSubmitButton = true,
      initialValues,
    },
    ref
  ) => {
    const {
      control,
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      defaultValues: initialValues ?? {},
      resolver: zodResolver(schema),
    });

    useEffect(() => {
      if (initialValues) {
        reset(initialValues ?? {});
      }
    }, [initialValues, reset]);

    // 🔹 Expose methods to parent
    useImperativeHandle(ref, () => ({
      submitForm: () => handleSubmit(onSubmit)(),
      resetForm: () => reset(),
    }));

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
              {...register(field.name, {
                valueAsNumber: field.type === "number", // 🔹 force number
              })}
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
                  required={field.required}
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
                  required={field.required}
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
                  required={field.required}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  options={field.options}
                  error={errors[field.name]?.message as string}
                />
              )}
            />
          );

        case "checkbox":
          return (
            <Controller
              control={control}
              name={field.name}
              render={({ field: { value, onChange, onBlur, name } }) => (
                <CustomCheckboxGroup
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

        case "autocomplete":
          return (
            <Controller
              control={control}
              name={field.name}
              render={({ field: { value, onChange } }) => (
                <CustomAutocomplete
                  {...common}
                  value={value}
                  onChange={onChange}
                  fetchOptions={
                    field.fetchOptions
                      ? field.fetchOptions
                      : async () => field.options || []
                  }
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
        {/* default submit button is optional */}
        {isShowDefaultSubmitButton && (
          <CustomButton type="submit" label="Submit" />
        )}
        <DevTool control={control} />
      </form>
    );
  }
);

DynamicForm.displayName = "DynamicForm";
export default DynamicForm;
