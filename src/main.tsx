import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
