import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import App from "./App";
import { BrowserRouter } from "react-router-dom";
=======
import { BrowserRouter } from "react-router-dom";
import App from "./App";
>>>>>>> 7ecb4e40943efa78ff131fa874839af2d523975c

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
