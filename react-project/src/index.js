import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
//import Test from "./test";
import Test from "./checkBox";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Test />
  </StrictMode>
);