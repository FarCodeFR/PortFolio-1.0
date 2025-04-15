import { useState } from "react";
import "../../styles/formulaire.css";

function Formulaire() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log(`Message de ${name} ${email} ${message}`);
		alert("Message envoyé !");
	};

	return (
		<section className="container-formulaire">
			<div>
				<h3>Besoin d'informations ?</h3>
			</div>
			<form aria-labelledby="form-titre" onSubmit={onSubmit}>
				<div className="container-form-div">
					<label htmlFor="nom">Nom</label>
					<input placeholder="Dupont" required id="nom" />
				</div>
				<div className="container-form-div">
					<label htmlFor="email">Email</label>
					<input placeholder="Email@gmail.com" required id="email" />
				</div>
				<div className="container-form-div">
					<label htmlFor="message">Message</label>
					<textarea placeholder="Rédigez votre message" required id="message" />
				</div>
				<button type="button">Envoyer votre message</button>
			</form>
		</section>
	);
}

export default Formulaire;
