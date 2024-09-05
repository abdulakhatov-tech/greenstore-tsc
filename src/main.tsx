import ReactDOM from "react-dom/client";
import AppProvider from "./provider/index.tsx";
import AppRoutes from "@routes/index.tsx";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <AppRoutes />
  </AppProvider>
);
