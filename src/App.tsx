import { AppRoutes } from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
};

export default App;
