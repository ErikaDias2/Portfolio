import { useEffect } from "react";
import AppRoutes from "./Routes";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  useEffect(() => {
    document.title = "Portfólio";
  }, []);

  return <AppRoutes />;
}

export default App;