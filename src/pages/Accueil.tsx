import { useEffect, useState } from "react";
import "../styles/global.css";
import "../styles/global.css";
import Profile from "../assets/components/Profile";
import CardProjects from "../assets/components/CardProjects";
import Formulaire from "../assets/components/Formulaire";

function Accueil() {
	const [theme, setTheme] = useState(() => {
		const isTheme = localStorage.getItem("theme");
		return isTheme ? isTheme : "Light";
	});

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

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
					<a aria-label="Aller à la section Profil" href="#profil">
						<div id="scroll1">-</div>
					</a>
					<a aria-label="Aller à la section Projets" href="#projects">
						<div id="scroll2">-</div>
					</a>
					<a aria-label="Aller à la section Formulaire" href="#formulaire">
						<div id="scroll3">-</div>
					</a>
				</section>
			</section>
			<header className="scroll-box">
				<h2>My Portfolio !</h2>
			</header>
			<section id="profil" className="container-section-profil">
				<section>.</section>
				<h2>Profil</h2>
				<section className="second-ligne-profil">.</section>
			</section>
			<Profile />
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
