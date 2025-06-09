import "../../styles/formulaire.css";

function Formulaire() {
  return (
    <section className="container-formulaire">
      <form
        aria-labelledby="form-titre"
        method="POST"
        action="https://formspree.io/f/mjkyzjye"
      >
        <div className="container-form-div">
          <label htmlFor="nom">Nom</label>
          <input placeholder="Dupont" name="name" required id="nom" />
        </div>
        <div className="container-form-div">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email@gmail.com"
            name="email"
            required
            id="email"
          />
        </div>
        <div className="container-form-div">
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Rédigez votre message"
            name="message"
            required
            id="message"
          />
        </div>
        <button type="submit">Envoyer votre message</button>
      </form>
    </section>
  );
}

export default Formulaire;
