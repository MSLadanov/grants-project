import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <MantineProvider>
        <App />
      </MantineProvider>
    </HashRouter>
  </StrictMode>
);
