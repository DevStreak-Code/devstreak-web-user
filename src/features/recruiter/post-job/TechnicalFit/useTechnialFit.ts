import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  technicalFitFormSchema,
  type ITechnicalFormData,
  type TTechincalFitFormData,
} from "./schema";

export const useTechnicalFit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
    reset,
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
  const [editingUser, setEditingUser] = useState<ITechnicalFormData | null>(
    null
  );

  // Reset form whenever editingSkill changes
  useEffect(() => {
    if (editingUser) {
      reset(editingUser);
    } else {
      reset({});
    }
  }, [editingUser, reset]);

  const onSubmit = (data: TTechincalFitFormData) => {
    if (editingUser) {
      setSkillsList((prev) =>
        prev.map((u) => (u.id === editingUser.id ? { ...u, ...data } : u))
      );
      setEditingUser(null);
    } else {
      // Add new user
      setSkillsList((prev) => [...prev, { ...data, id: prev.length + 1 }]);
    }
    reset({});
  };

  const handleEdit = (updatedRow: ITechnicalFormData) => {
    setEditingUser(updatedRow);
  };

  const handleDelete = (row: ITechnicalFormData) => {
    const updatedList = skillsList.filter((item) => {
      return item.id !== row.id;
    });
    setSkillsList(updatedList);
  };

  return {
    state: {
      errors,
      isValid,
      isSubmitting,
      skillsList,
      editingUser,
    },
    handlers: {
      register,
      handleSubmit: handleSubmit(onSubmit),
      control,
      handleEdit,
      handleDelete,
    },
  };
};
