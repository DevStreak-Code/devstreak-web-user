import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { useSampleTodo } from "./useSampleTodo";

const SampleTodoApi = () => {
  const { state, handlers } = useSampleTodo();
  return (
    <div className="overflow-x-auto">
      <form onSubmit={handlers.handleSubmit}>
        <CustomInput
          label="Add Todo"
          error={state.errors.todo?.message}
          placeholder="Enter your enter"
          {...handlers.register("todo", {
            required: "Todo  is required",
          })}
        />
        <CustomButton
          label="Create Todo"
          disabled={state.loading.isCreating}
          className="w-full"
          loadingText="Creating"
          isLoading={state.loading.isCreating}
          type="submit"
        />
      </form>
      <table className="min-w-full divide-y divide-gray-200 border rounded-xl shadow-sm">
        <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
          <tr>
            <th className="px-6 py-3">#</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white text-sm">
          {state.todos?.map((item, index) => {
            const isDeleting = handlers.isDeleting(item.id);
            return (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-medium text-gray-800">
                  {item.name}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-4 text-blue-600 font-medium">
                    <button className="hover:underline hover:text-blue-700">
                      Edit
                    </button>
                    <button className="hover:underline hover:text-blue-700">
                      View
                    </button>
                    <button
                      className="hover:underline text-red-500 hover:text-red-600"
                      onClick={() => handlers.deleteTodo(item.id)}
                      disabled={isDeleting}
                    >
                      {isDeleting ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SampleTodoApi;
