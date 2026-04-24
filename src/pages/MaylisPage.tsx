import '../styles/coach.css';

const MaylisPage = () => {
  return (
    <div className="coach-page">
      <section className="coach-hero">
        <div className="coach-hero__content">
          <p className="overline">L’équipe Studio Gris</p>
          <h1>Maylis</h1>
          <h2>Danse, aérien, pole dance & stretching</h2>
          <p>
            Passionnée de danse depuis son plus jeune âge, Maylis transmet son énergie,
            sa technique et sa créativité dans une approche accessible, bienveillante
            et évolutive.
          </p>
        </div>

        <div className="coach-hero__media">
          <img src="/medias/coachs/Maylis.jpg" alt="Maylis - Studio Gris" />
        </div>
      </section>

      <section className="coach-section">
        <h2>Son univers</h2>
        <p>
          Maylis enseigne le cerceau aérien, la pole dance et le stretching au Studio Gris.
          Elle accompagne les adultes comme les enfants avec une attention particulière
          portée à la progression, à l’expression corporelle et à la confiance.
        </p>
        <p>
          Ses cours mêlent technique, créativité et plaisir du mouvement. Chaque séance
          devient une expérience où l’on apprend à mieux connaître son corps, à se dépasser
          et à s’exprimer librement.
        </p>
      </section>

      <section className="coach-section coach-split">
        <div>
          <h2>Ses disciplines</h2>
          <div className="coach-tags">
            <span>Cerceau aérien</span>
            <span>Pole Dance</span>
            <span>Stretching</span>
            <span>Danse & expression</span>
            <span>Enfants & adultes</span>
          </div>
        </div>

        <div className="coach-card">
          <h3>Ce qu’elle apporte</h3>
          <p>
            Une pédagogie accessible, une vraie sensibilité artistique et une énergie
            qui donne envie d’oser, de progresser et de prendre confiance.
          </p>
        </div>
      </section>

      <section className="coach-cta">
        <h2>Envie de découvrir les cours de Maylis ?</h2>
        <a
          href="https://www.instagram.com/le_studiogris/"
          target="_blank"
          rel="noreferrer"
          className="primary-button"
        >
          Réserver une séance
        </a>
      </section>
    </div>
  );
};

export default MaylisPage;