import { useState } from "react";
import "../../styles/formulaire.css";

function Formulaire() {
  const [status, setStatus] = useState<"default" | "success" | "error">(
    "default"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // function de récuperation d'information

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // function API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("default");
    try {
      const response = await fetch(`https://formspree.io/f/mjkyzjye`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
      console.error(err);
    }
  };
  return (
    <section className="container-formulaire">
      <form onSubmit={handleSubmit} aria-labelledby="form-titre">
        <div className="container-form-div">
          <label htmlFor="nom">Nom</label>
          <input
            placeholder="Dupont"
            name="name"
            required
            value={formData.name}
            id="nom"
            onChange={handleChange}
          />
        </div>
        <div className="container-form-div">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email@gmail.com"
            name="email"
            required
            value={formData.email}
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="container-form-div">
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Rédigez votre message"
            name="message"
            required
            value={formData.message}
            id="message"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Envoyer votre message</button>

        {status === "success" && <p id="message-form">Message envoyé !</p>}
        {status === "error" && (
          <p id="message-form">
            Message non envoyé ! <br />
            Réessayez.
          </p>
        )}
      </form>
    </section>
  );
}

export default Formulaire;
