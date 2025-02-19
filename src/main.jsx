
import React from "react"
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import "./index.css";

import routers from "./routes/Route";
import AuthProvider from "./Authentication/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routers} />
    </AuthProvider>

  </React.StrictMode>
);
