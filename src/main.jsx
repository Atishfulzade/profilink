import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./Routes";
import { RouterProvider } from "react-router-dom";
import { app } from "./firebaseConfig";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);