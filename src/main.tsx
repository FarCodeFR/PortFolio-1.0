import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./Home.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
