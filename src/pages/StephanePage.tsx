import '../styles/coach.css';

const StephanePage = () => {
  return (
    <div className="coach-page">
      <section className="coach-hero">
        <div className="coach-hero__content">
          <p className="overline">L’équipe Studio Gris</p>
          <h1>Stéphane</h1>
          <h2>Coaching sportif, fitness & énergie</h2>
          <p>
            Passionné de sport, Stéphane apporte une énergie forte, une motivation
            contagieuse et une vraie capacité à adapter les séances au niveau de chacun.
          </p>
        </div>

        <div className="coach-hero__media">
          <img src="/medias/coachs/Stephane.jpg" alt="Stéphane - Studio Gris" />
        </div>
      </section>

      <section className="coach-section">
        <h2>Son univers</h2>
        <p>
          Stéphane enseigne les cours Fit & Fun, Powerpulse, Athletic et Cardio Boxing.
          Son approche repose sur l’énergie, le dépassement de soi, le renforcement
          musculaire et le plaisir de bouger.
        </p>
        <p>
          Attentif au niveau de chacun, il propose des séances dynamiques et motivantes,
          avec un objectif simple : permettre à chaque personne de progresser à son rythme,
          de se défouler et de ressortir avec le sourire.
        </p>
      </section>

      <section className="coach-section coach-split">
        <div>
          <h2>Ses disciplines</h2>
          <div className="coach-tags">
            <span>Powerpulse</span>
            <span>Athletic</span>
            <span>Cardio Boxing</span>
            <span>Renforcement musculaire</span>
            <span>Coaching sportif</span>
          </div>
        </div>

        <div className="coach-card">
          <h3>Ce qu’il apporte</h3>
          <p>
            Une séance intense, humaine et motivante, où chacun peut se dépasser
            sans se sentir jugé.
          </p>
        </div>
      </section>

      <section className="coach-cta">
        <h2>Envie de tester un cours avec Stéphane ?</h2>
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

export default StephanePage;