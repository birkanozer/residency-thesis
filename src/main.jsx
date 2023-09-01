import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-green/theme.css";
//import "primereact/resources/themes/vega-green/theme.css";
//import "primereact/resources/themes/arya-green/theme.css";

import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
