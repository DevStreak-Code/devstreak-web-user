import RouterManager from "./features/RouterManager";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/api/apiService";
import { CustomToast } from "./components/CustomToast";


function App() {
  return (
    <div className="p-2 w-screen h-screen">
      <QueryClientProvider client={queryClient}>
        <RouterManager />
        <CustomToast />
      </QueryClientProvider>
    </div>
  );
}

export default App;
