import "babel-polyfill";
import React from "react";
import "react-app-polyfill/ie9";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
if (process.env.REACT_APP_NODE_ENV !== "production") {
  localStorage.setItem("debug", "dkg-telegram-chat:*");
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
