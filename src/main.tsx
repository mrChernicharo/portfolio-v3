import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeContext, ThemeContextProvider } from "./context/ThemeContext";
import { DataContextProvider } from "./context/DataContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
