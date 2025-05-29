import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Index from "src(views/Index)";
import "./css/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Index />
  </StrictMode>,
);
