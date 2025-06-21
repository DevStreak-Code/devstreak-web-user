import { ApiService } from "@/services/api/apiService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export interface Todo {
  id: string;
  name: string;
  completed: boolean;
}

export const useTodosQuery = () => {
  const apiService = new ApiService({
    baseURL: "https://6855b47f1789e182b37c1712.mockapi.io",
  });
  const queryClient = useQueryClient();
  const queryKey = ["todos"];
  const [deletingIds, setDeletingIds] = useState<string[]>([]);

  // Get all todos
  const {
    data: todosData,
    isLoading: isTodosLoading,
    // isError: isTodosError,
    // refetch: refetchTodos,
  } = useQuery<Todo[]>({
    queryKey,
    queryFn: () => apiService.get("/todo"),
  });

  //   // Get single todo
  //   const getTodo = (id: string) => {
  //     return useQuery<Todo>({
  //       queryKey: [...queryKey, id],
  //       queryFn: () => apiService.get(`/todos/${id}`),
  //       enabled: !!id,
  //     });
  //   };

  // Create todo
  const { mutateAsync: createTodo, isPending: isCreating } = useMutation({
    mutationFn: (newTodo: Omit<Todo, "id">) =>
      apiService.post<Todo>("/todo", newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  // Update todo
  const { mutateAsync: updateTodo, isPending: isUpdating } = useMutation({
    mutationFn: (updatedTodo: Todo) =>
      apiService.put<Todo>(`/todo/${updatedTodo.id}`, updatedTodo),
    onSuccess: (data) => {
      queryClient.setQueryData(queryKey, (old: Todo[] | undefined) =>
        old?.map((todo) => (todo.id === data.id ? data : todo))
      );
    },
  });

  // Delete todo with individual loading states
  const deleteTodo = (id: string) => {
    setDeletingIds((prev) => [...prev, id]);
    return apiService
      .delete(`/todo/${id}`)
      .then(() => {
        queryClient.setQueryData(queryKey, (old: Todo[] | undefined) =>
          old?.filter((todo) => todo.id !== id)
        );
      })
      .finally(() => {
        setDeletingIds((prev) => prev.filter((itemId) => itemId !== id));
      });
  };

  const isDeleting = (id: string) => deletingIds.includes(id);
  return {
    state: {
      loading: {
        isAllLoading: isTodosLoading,
        isCreating,
        isUpdating,
        isDeleting,
      },
      todos: todosData,
    },
    handlers: {
      createTodo,
      updateTodo,
      deleteTodo,
      isDeleting: (id: string) => deletingIds.includes(id),
    },
  };
};
