import RouterManager from "./features/RouterManager";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/api/apiService";

function App() {
  return (
    <div className="p-2 w-screen h-screen">
      <QueryClientProvider client={queryClient}>
        <RouterManager />
      </QueryClientProvider>
    </div>
  );
}

export default App;
