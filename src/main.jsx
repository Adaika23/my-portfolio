// Import React (required for JSX in older setups, optional in newer)
import React from "react";

// Import ReactDOM to render your app into the browser
import ReactDOM from "react-dom/client";

// Import your main App component
import App from "./App";

// Import global CSS styles
import "./index.css";

// Create the root of your React app and render it into <div id="root">
ReactDOM.createRoot(document.getElementById("root")).render(

  // StrictMode is a development tool
  // It helps detect bugs but may render components twice in DEV only
  <React.StrictMode>

    {/* This loads your entire application */}
    <App />

  </React.StrictMode>
);