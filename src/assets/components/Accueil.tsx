import { useState } from "react";
import "../../style/accueil.css";
import "../../style/global.css";

function Accueil() {
	const [theme, setTheme] = useState("Light");
	console.log(theme);
	return (
		<main id={theme}>
			<h1 className="title">
				Welcome
				<br />
				to my portfolio
			</h1>
			<section className="container-toggle">
				<label className="toggle-switch">
					<input
						onChange={(e) => {
							setTheme(e.target.checked ? "Light" : "Dark");
						}}
						type="checkbox"
						checked={theme === "Light"}
					/>
					<span className="slider">.</span>
				</label>
			</section>
			<section className="scrol-list">
				<section>
					<div>-</div>
					<div>-</div>
					<div>-</div>
				</section>
			</section>
			<section className="container-section">
				<section>.</section>
				<h2>Profile</h2>
				<section className="second">.</section>
			</section>
		</main>
	);
}

export default Accueil;
