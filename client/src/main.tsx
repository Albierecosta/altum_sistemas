import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

if (endpoint && websiteId) {
  const s = document.createElement("script");
  s.defer = true;
  s.src = `${endpoint.replace(/\/$/, "")}/umami`;
  s.setAttribute("data-website-id", websiteId);
  document.head.appendChild(s);
} else {
  if (import.meta.env.DEV) {
    console.warn("Umami: VITE_ANALYTICS_ENDPOINT ou VITE_ANALYTICS_WEBSITE_ID não definidos");
  }
}

createRoot(document.getElementById("root")!).render(<App />);
