import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
const API = `http://fsa-crud-2aa9294fe819.herokuapp.com/api/2502-FTB-ET-WEB-PT/guests`

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
