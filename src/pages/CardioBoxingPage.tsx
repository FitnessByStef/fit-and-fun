import '../styles/course.css';

const CardioBoxingPage = () => {
  return (
    <div className="course-page">
      <div className="course-hero-wrap">
        <section
          className="course-hero"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(8,8,8,0.86) 0%, rgba(8,8,8,0.58) 48%, rgba(8,8,8,0.22) 100%),
              url('/medias/cours/CardioBoxing/CardioBoxing1.jpeg')
            `,
            backgroundPosition: 'center 34%',
          }}
        >
          <div className="course-hero__content">
            <p className="overline">Fitness</p>
            <h1>CARDIO BOXING</h1>
            <p>
              Un cours explosif pour transpirer, se défouler, améliorer son cardio
              et libérer l’énergie avec des mouvements inspirés de la boxe.
            </p>
          </div>
        </section>
      </div>

      <section className="course-section">
        <h2>Le concept</h2>
        <p>
          Le Cardio Boxing est un cours fitness intense qui combine frappes, déplacements,
          coordination, renforcement et travail cardio. On s’inspire de l’univers de la boxe,
          sans opposition ni combat.
        </p>
        <p>
          Les séances alternent entre travail technique, enchaînements de coups, exercices
          dynamiques, sac de frappe et blocs plus physiques pour faire monter le rythme.
        </p>
        <p>
          C’est un cours idéal pour se vider la tête, brûler de l’énergie, gagner en tonicité
          et sortir de la séance avec une vraie sensation de défoulement.
        </p>
      </section>

      <section className="course-section course-split">
        <div className="course-split__content">
          <h2>Pourquoi on aime ce cours</h2>
          <p>
            Le Cardio Boxing donne une énergie incroyable. On travaille le souffle, la vitesse,
            la coordination et l’explosivité, tout en gardant une ambiance accessible et motivante.
          </p>

          <div className="course-benefits">
            <div>🥊 Défouloir puissant</div>
            <div>🔥 Gros travail cardio</div>
            <div>⚡ Améliore explosivité et vitesse</div>
            <div>🧠 Développe coordination et réflexes</div>
            <div>💪 Renforce tout le corps</div>
            <div>😤 Aide à évacuer le stress</div>
          </div>
        </div>

        <div className="course-split__media">
          <img
            src="/medias/cours/CardioBoxing/CardioBoxing2.jpeg"
            alt="Cours de Cardio Boxing au Studio Gris"
          />
        </div>
      </section>

      <section className="course-section">
        <h2>L’expérience Studio Gris</h2>
        <p>
          Avec le sac de frappe, la musique, les enchaînements et l’ambiance du groupe,
          le Cardio Boxing devient une séance intense, fun et libératrice. On bouge,
          on frappe, on transpire et on repart plus léger.
        </p>
      </section>

      <section className="course-section course-split">
        <div className="course-split__media">
          <img
            src="/medias/cours/CardioBoxing/CardioBoxing3.jpeg"
            alt="Sac de frappe Cardio Boxing Studio Gris"
          />
        </div>

        <div className="course-split__content">
          <h2>Pour qui ?</h2>
          <p>
            Ce cours s’adresse aux personnes qui veulent un entraînement dynamique,
            cardio et défoulant, sans avoir besoin de savoir boxer.
          </p>
          <p>
            Chacun avance à son rythme : l’objectif est de bouger fort, de progresser,
            de prendre confiance et de se faire plaisir dans l’effort.
          </p>
        </div>
      </section>

      <section className="course-cta">
        <h2>Prêt à te défouler ?</h2>
        <p>
          Viens tester le Cardio Boxing au Studio Gris et découvre un cours intense,
          accessible et ultra motivant.
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

export default CardioBoxingPage;