import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BlogProvider } from "./context/blogContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BlogProvider>
    <App />
  </BlogProvider>
);
