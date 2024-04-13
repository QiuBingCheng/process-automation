
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import React, { StrictMode } from "react";
import App from "./App";
import Test from "./test";
import CustomeredCell from "./CustomeredCell"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/CustomeredCell",
    element: <CustomeredCell />,
  },
  {
    path: "/test",
    element: <Test />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);