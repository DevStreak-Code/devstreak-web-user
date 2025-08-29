import { useForm } from "react-hook-form";
import {
  jobRoleValidationSchema,
  type IJobRoleForm,
  type TJobFormValidationSchema,
} from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useJobRole = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<TJobFormValidationSchema>({
    defaultValues: {
      jobRole: "",
      totalExp: 0,
      relevantExp: 0,
    },
    resolver: zodResolver(jobRoleValidationSchema),
    mode: "onChange",
  });

  const onSubmit = (data: IJobRoleForm): void => {
    console.log(data);
  };

  return {
    state: {
      errors,
      isValid,
      isSubmitting,
    },
    handlers: {
      register,
      handleSubmit: handleSubmit(onSubmit),
    },
  };
};
