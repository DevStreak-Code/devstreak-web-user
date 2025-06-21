import { useForm } from "react-hook-form";
import { useTodosQuery } from "./useTodoQuery";

export const useSampleTodo = () => {
  const todoQuery = useTodosQuery();
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: { todo: "" },
  });

  const submitHandler = ({ todo = "" }) => {
    todoQuery.handlers.createTodo({ name: todo, completed: false });
    reset();
  };

  return {
    state: {
      ...todoQuery.state,
      errors: formState.errors,
    },
    handlers: {
      ...todoQuery.handlers,
      register,
      handleSubmit: handleSubmit(submitHandler),
    },
  };
};
