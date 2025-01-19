import "../../styles/profile.css";

function Profile() {
	const handleDownload = (event: React.MouseEvent) => {
		event.preventDefault();

		const userConfirmed = window.confirm("Voulez-vous télécharger le CV ?");

		if (userConfirmed) {
			const link = document.createElement("a");
			link.href = "public/images/CV2.0.pdf";
			link.download = "CV.pdf";
			link.click();
		} else {
			alert("Téléchargement annulé.");
		}
	};

	return (
		<>
			<section className="container-profil">
				<picture>
					<img
						src="images/photo-profile.jpg"
						alt="Une personne sur une place"
					/>
				</picture>
				<section className="container-text-profil">
					<h2>Timothé Renard</h2>
					<p>
						Développeur Web Full Stack
						&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; Recherche
						Alternance
					</p>
					<p>
						Je suis passionné par les nouvelles technologies et la création de
						projets innovants, ce qui m'aide à consolider mes acquis tout en
						continuant à apprendre chaque jour. <br />
						<br /> J'aime découvrir de nouvelles technologies et enrichir mes
						connaissances grâce à des expériences concrètes, en réalisant des
						projets variés. Cette approche me motive à repousser mes limites et
						à développer de nouvelles solutions plus performantes. Toujours
						curieux et motivé, je cherche constamment à évoluer dans ce domaine
						en perpétuelle innovation.
					</p>
					<section className="container-link">
						<a
							onClick={handleDownload}
							href="public/images/CV2.0.pdf"
							download="CV"
							id="link1"
						>
							<img src="images/cv.jpg" alt="images de cv " />
						</a>
						<a target="_blanck" id="link2" href="https://github.com/FarCodeFR">
							<img src="images/GitHub.png" alt="images de github" />
						</a>
						<a
							target="_blanck"
							id="link3"
							href="https://www.linkedin.com/in/timoth%C3%A9-renard-a686072b4/"
						>
							<img src="images/Linkedin.png" alt="images de linkedin" />
						</a>
						<a target="_blanck" id="link4" href="mailto:Timothe-44@hotmail.fr">
							<img src="images/mail.jpg" alt="images de mail" />
						</a>
					</section>
				</section>
			</section>
		</>
	);
}

export default Profile;
