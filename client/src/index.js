import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { TutorsContextProvider } from "./context/TutuorContext";
import { StudentsContextProvider } from "./context/StudentContext";
import { AdminsContextProvider } from "./context/AdminContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <TutorsContextProvider>
        <StudentsContextProvider>
          <AdminsContextProvider>
            <App />
          </AdminsContextProvider>
        </StudentsContextProvider>
      </TutorsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
