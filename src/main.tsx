import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/global.css";
import Home from "./Home.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Home />
	</StrictMode>,
);
