import '../styles/course.css';

const AthleticPage = () => {
  return (
    <div className="course-page">
      <div className="course-hero-wrap">
        <section
          className="course-hero"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(8,8,8,0.86) 0%, rgba(8,8,8,0.58) 48%, rgba(8,8,8,0.22) 100%),
              url('/medias/cours/Athletic/Athletic2.jpeg')
            `,
            backgroundPosition: 'center 28%',
          }}
        >
          <div className="course-hero__content">
            <p className="overline">Fitness</p>
            <h1>ATHLETIC</h1>
            <p>
              Un cours cardio explosif pour développer endurance, coordination,
              posture athlétique et puissance dans une ambiance ultra motivante.
            </p>
          </div>
        </section>
      </div>

      <section className="course-section">
        <h2>Le concept</h2>
        <p>
          Athletic est un cours de fitness très dynamique, pensé pour faire monter
          le cardio, améliorer la coordination et construire une vraie qualité de mouvement.
        </p>
        <p>
          La première partie du cours met l’accent sur le travail aérobie et l’endurance.
          Ensuite, l’intensité monte avec un bloc plus orienté puissance, explosivité
          et engagement athlétique.
        </p>
        <p>
          La séance se termine sur une partie plus fun et plus défouloir, pour se
          lâcher, se dépasser et finir avec une grosse énergie.
        </p>
      </section>

      <section className="course-section course-split">
        <div className="course-split__content">
          <h2>Pourquoi on aime ce cours</h2>
          <p>
            Athletic ne se limite pas à bouger vite. Le cours travaille aussi la posture,
            la coordination et la qualité athlétique générale, ce qui le rend à la fois
            intense, utile et très stimulant.
          </p>

          <div className="course-benefits">
            <div>🔥 Gros travail cardio</div>
            <div>⚡ Développement de l’explosivité</div>
            <div>🧠 Coordination et réactivité</div>
            <div>🏃 Posture athlétique</div>
            <div>💥 Dépense énergétique élevée</div>
            <div>🎉 Séance fun et défoulante</div>
          </div>
        </div>

        <div className="course-split__media">
          <img
            src="/medias/cours/Athletic/Athletic.jpeg"
            alt="Cours Athletic au Studio Gris"
          />
        </div>
      </section>

      <section className="course-section">
        <h2>L’expérience Studio Gris</h2>
        <p>
          Dans un cadre moderne et immersif, Athletic devient un vrai moment pour se vider
          la tête, repousser ses limites et ressentir le plaisir de bouger avec intensité.
        </p>
      </section>

      <section className="course-cta">
        <h2>Prêt à tester Athletic ?</h2>
        <p>
          Viens découvrir une séance rythmée, intense et motivante au Studio Gris.
        </p>
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

export default AthleticPage;