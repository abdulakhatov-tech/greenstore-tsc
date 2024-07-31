import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppProvider from "./provider/index.tsx";
import AppRoutes from "@routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </React.StrictMode>
);
