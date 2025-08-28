import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export interface ITechnicalFormData {
  skill: string;
  minExp: number;
  maxExp: number;
  weightage: number;
}
export const technicalFitFormSchema = z.object({
  skill: z
    .string()
    .min(4, "Skill must be at least 4 characters long.")
    .max(20, "Skill must be no longer than 20 characters.")
    .nonempty("Skill is required."),
  minExp: z
    .number()
    .min(0, "Experience must be at least 0 years.")
    .max(99, "Experience must be no more than 99 years.")
    .int("Experience must be an integer.")
    .refine((value) => value >= 0 && value <= 99, "Experience is required."),
  maxExp: z
    .number()
    .min(0, "Experience must be at least 0 years.")
    .max(99, "Experience must be no more than 99 years.")
    .int("Experience must be an integer.")
    .refine((value) => value >= 0 && value <= 99, "Experience is required."),
  weightage: z
    .number()
    .min(0, "Weightage must be at least 0%.")
    .max(100, "Weightage must be no more than 100%.")
    .refine((value) => value >= 0 && value <= 100, "Weightage is required."),
});

export type TTechincalFitFormData = z.infer<typeof technicalFitFormSchema>;

export const useTechnicalFit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
  } = useForm<TTechincalFitFormData>({
    defaultValues: {
      skill: "",
      maxExp: 0,
      minExp: 0,
      weightage: 0,
    },
    resolver: zodResolver(technicalFitFormSchema),
    mode: "onChange",
  });
  const [skillsList, setSkillsList] = useState<ITechnicalFormData[]>([]);
  const onSubmit = (data: TTechincalFitFormData) => {
    //   const payload = {
    //     email: data.email,
    //     password: data.password,
    //     role: "RECRUITER",
    //   };
    //   handlers.loginAsync(payload);
    console.log("onsubmit", data);
    setSkillsList((prev)=>{
        return[...prev,data]
    })
  };
  return {
    state: {
      errors,
      isValid,
      isSubmitting,
      skillsList
    },
    handlers: {
      register,
      handleSubmit: handleSubmit(onSubmit),
      control,
    },
  };
};
