import { useState } from "react";

import { type ITechnicalFormData, type TTechincalFitFormData } from "./schema";
import { usePostJobStore } from "../store";

export const useTechnicalFit = () => {
  const { nextStep } = usePostJobStore();
  const [skillsList, setSkillsList] = useState<ITechnicalFormData[]>([]);
  const [editingUser, setEditingUser] = useState<ITechnicalFormData | null>(
    null
  );

  // Reset form whenever editingSkill changes
  // useEffect(() => {
  //   if (editingUser) {
  //     reset(editingUser);
  //   } else {
  //     reset({});
  //   }
  // }, [editingUser, reset]);

  const technicalFitSubmitHandler = () => {
    console.log(skillsList);
    if (skillsList.length > 0) {
      nextStep("technicalFit", skillsList);
    }
  };

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
    // reset({});
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
      skillsList,
      editingUser,
    },
    handlers: {
      handleSubmit: onSubmit,
      handleEdit,
      handleDelete,
      technicalFitSubmitHandler,
    },
  };
};
