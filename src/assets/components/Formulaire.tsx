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
		<form onSubmit={onSubmit}>
			<h2>Contact</h2>
			<label htmlFor="username">Nom</label>
			<input
				id="input1"
				type="text"
				name="username"
				value={name}
				placeholder="Votre nom"
				required
				onChange={(e) => setName(e.target.value)}
			/>
			<label htmlFor="email">Email</label>
			<input
				id="input2"
				placeholder="Votre email"
				type="text"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<label htmlFor="message">Message</label>
			<textarea
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
