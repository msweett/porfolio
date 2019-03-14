import React from "react";
import { render } from "react-dom";
import "./css/style.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#main")
);
