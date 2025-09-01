import { useState } from "react";

import { type ITechnicalFormData, type TTechincalFitFormData } from "./schema";
import { usePostJobStore } from "../store";

export const useTechnicalFit = () => {
  const { nextStep, prevStep, stepsData, updateStepData } = usePostJobStore();
  const skillsList =
    (stepsData["technicalFit"]?.data as ITechnicalFormData[]) || [];

  const [editingUser, setEditingUser] = useState<ITechnicalFormData | null>(
    null
  );

  const technicalFitSubmitHandler = () => {
    if (skillsList.length > 0) {
      nextStep("technicalFit", skillsList);
    }
  };

  const onSubmit = (data: TTechincalFitFormData) => {
    if (editingUser) {
      const updatedList = skillsList.map((u) =>
        u.id === editingUser.id ? { ...u, ...data } : u
      );
      updateStepData("technicalFit", updatedList, true);
    } else {
      // Add new user
      updateStepData("technicalFit", [
        ...skillsList,
        { ...data, id: skillsList.length + 1 },
      ]);
    }
    setEditingUser(null);
  };

  const handleEdit = (updatedRow: ITechnicalFormData) => {
    setEditingUser(updatedRow);
  };

  const handleDelete = (row: ITechnicalFormData) => {
    const updatedList = skillsList.filter((item) => {
      return item.id !== row.id;
    });
    updateStepData("technicalFit", updatedList, true);
  };

  const prevHandler = () => {
    prevStep("jobRole", stepsData["jobRole"]);
  };

  return {
    state: {
      skillsList,
      editingUser,
    },
    handlers: {
      handleSubmit: onSubmit,
      handleEdit,
      handleDelete,
      technicalFitSubmitHandler,
      prevStep: prevHandler,
    },
  };
};
