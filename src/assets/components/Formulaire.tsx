import { useState } from "react";
import "../../style/formulaire.css";

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
		<form aria-labelledby="form-titre" onSubmit={onSubmit}>
			<h2 id="form-titre">🚧 Contact 🚧</h2>
			<label id="formulaire" htmlFor="username">
				Nom
			</label>
			<input
				id="username"
				type="text"
				name="username"
				value={name}
				placeholder="Votre nom"
				required
				onChange={(e) => setName(e.target.value)}
			/>
			<label htmlFor="email">Email</label>
			<input
				id="email"
				placeholder="Votre email"
				type="text"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<label htmlFor="message">Message</label>
			<textarea
				id="message"
				className="message-container"
				placeholder="Votre Message"
				name="message"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				required
			/>
			<button type="submit" onClick={onSubmit}>
				Envoyer
			</button>
		</form>
	);
}

export default Formulaire;
