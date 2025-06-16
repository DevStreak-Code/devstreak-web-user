import { PublicLayout } from "./components/Layouts";
import RouterManager from "./features/RouterManager";

function App() {
  return (
    <div className="p-2 w-screen h-screen">
      <PublicLayout>
        <RouterManager />
      </PublicLayout>
    </div>
  );
}

export default App;
