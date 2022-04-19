import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// only one end point/route
// https://rickandmortyapi.com/graphql

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
