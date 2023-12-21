import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { TutorsContextProvider } from "./context/TutuorContext";
import { StudentsContextProvider } from "./context/StudentContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <TutorsContextProvider>
        <StudentsContextProvider>
          <App />      
        </StudentsContextProvider>
      </TutorsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
