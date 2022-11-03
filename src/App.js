import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routing/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;