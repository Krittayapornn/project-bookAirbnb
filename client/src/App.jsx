import "./App.css";
import AuthenticatedApp from "./pages/AuthenticatedApp";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthenticatedApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
