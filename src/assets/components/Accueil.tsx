import { useState } from "react";
import "../../style/accueil.css";
import "../../style/global.css";
import Profil from "./Profil";
import CardProjects from "./CardProjects";
import Formulaire from "./Formulaire";

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
				<label htmlFor="theme-toggle" className="toggle-switch">
					<input
						id="theme-toggle"
						onChange={(e) => {
							setTheme(e.target.checked ? "Light" : "Dark");
						}}
						type="checkbox"
						checked={theme === "Light"}
					/>
					<span className="slider">&nbsp;</span>
				</label>
			</section>
			<section className="scroll-list">
				<section>
					<a href="#profil">
						<div id="scroll1">-</div>
					</a>
					<a href="#projects">
						<div id="scroll2">-</div>
					</a>
					<a href="#formulaire">
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
			<CardProjects />
			<section id="formulaire" className="container-section-formulaire">
				<section>.</section>
				<h2>Formulaire</h2>
				<section className="second-ligne-formulaire">.</section>
			</section>
			<Formulaire />
		</main>
	);
}

export default Accueil;
