import '../styles/contact.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__content">
          <p className="overline">Contact</p>
          <h1>Contactez le Studio Gris</h1>
          <p>
            Une question, une réservation, un cours d’essai ou besoin d’un renseignement ?
            Contactez-nous directement.
          </p>
        </div>

        <div className="contact-hero__media">
          <img
            src="/medias/studio/Salle_StudioGris.jpg"
            alt="Le Studio Gris à Thèze"
          />
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-card">
          <h2>Le Studio Gris</h2>

          <div className="contact-list">
            <div>
              <span>Adresse</span>
              <p>
                9 route de Lalonquette<br />
                64450 Thèze
              </p>
            </div>

            <div>
              <span>Téléphone</span>
              <p>
                <a href="tel:+33781577673">07 81 57 76 73</a>
              </p>
            </div>

            <div>
              <span>Email</span>
              <p>
                <a href="mailto:lafuente.sante@gmail.com">
                  lafuente.sante@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="contact-actions">
            <a
              href="tel:+33781577673"
              className="primary-button"
            >
              Appeler
            </a>

            <a
              href="mailto:lafuente.sante@gmail.com"
              className="secondary-button"
            >
              Envoyer un email
            </a>
          </div>
        </div>

        <div className="contact-card contact-card--highlight">
          <h2>Réserver une séance</h2>
          <p>
            Pour réserver un cours, consulter les créneaux ou prendre une séance d’essai,
            vous pouvez passer par Sportigo ou nous contacter directement.
          </p>

          <a
            href="https://studio-gris.sportigo.fr/"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Réserver sur Sportigo
          </a>
        </div>
      </section>

      <section className="contact-map">
        <h2>Nous trouver</h2>

        <iframe
          title="Carte Studio Gris Thèze"
          src="https://www.google.com/maps?q=9%20route%20de%20Lalonquette%2064450%20Th%C3%A8ze&output=embed"
          loading="lazy"
        />
      </section>
    </div>
  );
};

export default ContactPage;