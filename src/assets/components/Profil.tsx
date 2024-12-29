import "../../style/profil.css";

function Profil() {
	return (
		<>
			<section className="container-profil">
				<picture>
					<img src="images/photo-profil.png" alt="" />
				</picture>
				<section className="container-text-profil">
					<h2>Timothé Renard</h2>
					<p>
						Développeur Web Full Stack
						&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; Recherche
						Alternance
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et id odit
						mollitia quo fugit veritatis iste explicabo nisi incidunt at eius,
						tempore magnam. Sint autem amet a soluta consequuntur suscipit.
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et id odit
						mollitia quo fugit veritatis iste explicabo nisi incidunt at eius,
						tempore magnam. Sint autem amet a soluta consequuntur suscipit.
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et id odit
						mollitia quo fugit veritatis iste explicabo nisi incidunt at eius,
						tempore magnam. Sint autem amet a soluta consequuntur suscipit.
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et id odit
						mollitia quo fugit veritatis iste explicabo nisi incidunt at eius,
						tempore magnam. Sint autem amet a soluta consequuntur suscipit.
					</p>
					<section className="container-link">
						<a id="link1" href="1">
							<img src="images/cv.jpg" alt="images de cv " />
						</a>
						<a id="link2" href="https://github.com/FarCodeFR">
							<img src="images/GitHub.png" alt="images de github" />
						</a>
						<a
							id="link3"
							href="https://www.linkedin.com/in/timoth%C3%A9-renard-a686072b4/"
						>
							<img src="images/Linkedin.png" alt="images de linkedin" />
						</a>
						<a id="link4" href="mailto:Timothe-44@hotmail.fr">
							<img src="images/mail.jpg" alt="images de mail" />
						</a>
					</section>
				</section>
			</section>
		</>
	);
}

export default Profil;
