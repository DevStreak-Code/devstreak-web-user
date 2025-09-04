import { useState } from "react";
import type { ISkillsFormData, SkillsFormData } from "./schema";
import { useProfileBuilderStore } from "../useProfileBuilderStore";

export const useSkills = () => {
  const [editingUser, setEditingUser] = useState<ISkillsFormData | null>(null);
  const { nextStep, stepsData, prevStep, updateStepData } =
    useProfileBuilderStore();
  const rows = (stepsData["skills"]?.data as ISkillsFormData[]) || [];

  const handleDelete = (row: ISkillsFormData) => {
    const updatedList = rows.filter((item) => {
      return item.id !== row.id;
    });
    updateStepData("skills", updatedList);
    // setRows(() => updatedRow);
  };
  const handleEdit = (row: ISkillsFormData) => {
    setEditingUser(row);
  };

  const onSubmit = (data: SkillsFormData) => {
    if (editingUser) {
      const updatedList = rows.map((u) =>
        u.id === editingUser.id ? { ...u, ...data } : u
      );
      updateStepData("skills", updatedList);
    } else {
      const updatedRows = [...rows, { ...data, id: rows.length + 1 }];
      updateStepData("skills", updatedRows);
    }
    setEditingUser(null);
  };

  const nextStepHandler = () => {
    nextStep("skills", rows);
  };
  const prevStepHandler = () => {
    prevStep("profileSummary", stepsData["profileSummary"]);
  };
  return {
    state: {
      rows,
      editingUser,
    },
    handlers: {
      onSubmit,
      handleDelete,
      handleEdit,
      nextStepHandler,
      prevStep: prevStepHandler,
    },
  };
};
