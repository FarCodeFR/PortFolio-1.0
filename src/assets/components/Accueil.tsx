import { useState } from "react";
import "../../style/accueil.css";
import "../../style/global.css";
import Profil from "./Profil";

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
			<section className="scroll-list">
				<section>
					<a href="#profil">
						<div id="scroll1">-</div>
					</a>
					<a href="2">
						<div id="scroll2">-</div>
					</a>
					<a href="3">
						<div id="scroll3">-</div>
					</a>
				</section>
			</section>
			<section id="profil" className="container-section-profil">
				<section>.</section>
				<h2>Profil</h2>
				<section className="second-ligne-profil">.</section>
			</section>
			<Profil />
			<section id="projects" className="container-section-projects">
				<h2>Projects</h2>
				<section>.</section>
				<section className="second-ligne-projects">.</section>
			</section>
		</main>
	);
}

export default Accueil;
