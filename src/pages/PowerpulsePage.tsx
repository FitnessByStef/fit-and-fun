import '../styles/course.css';

const PowerpulsePage = () => {
  return (
    <div className="course-page">
      <div className="course-hero-wrap">
        <section
          className="course-hero"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(8,8,8,0.84) 0%, rgba(8,8,8,0.56) 42%, rgba(8,8,8,0.20) 100%),
              url('/medias/cours/Powerpulse/Powerpulse2.jpeg')
            `,
            backgroundPosition: 'center 38%',
          }}
        >
          <div className="course-hero__content">
            <p className="overline">Fitness</p>

            <h1>POWERPULSE</h1>

            <p>
              Un entraînement complet en musique pour se renforcer,
              se dépasser et transformer son corps séance après séance.
            </p>
          </div>
        </section>
      </div>

      <section className="course-section">
        <h2>Le concept</h2>
        <p>
          Powerpulse est un cours de renforcement musculaire dynamique,
          basé sur des enchaînements rythmés avec charges légères à modérées.
        </p>
        <p>
          Chaque séance sollicite l’ensemble du corps : jambes, fessiers,
          dos, épaules, bras et abdos, le tout en musique pour maintenir
          une intensité constante et motivante.
        </p>
      </section>

      <section className="course-section">
        <h2>Les bénéfices</h2>

        <div className="course-benefits">
          <div>🔥 Tonifie tout le corps</div>
          <div>💪 Développe la force et l’endurance</div>
          <div>⚡ Brûle un maximum de calories</div>
          <div>🎵 Motivation boostée par la musique</div>
          <div>👥 Effet de groupe ultra motivant</div>
          <div>🏋️ Travail complet du corps</div>
        </div>
      </section>

      <section className="course-section">
        <h2>L’expérience Studio Gris</h2>
        <p>
          Dans une ambiance moderne et immersive, chaque séance devient un moment
          pour se dépasser, se vider la tête et progresser dans la bonne humeur.
        </p>
      </section>

      <section className="course-cta">
        <h2>Prêt à tester le Powerpulse ?</h2>
        <p>
          Viens découvrir un cours intense, rythmé et accessible à tous les niveaux.
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

export default PowerpulsePage;