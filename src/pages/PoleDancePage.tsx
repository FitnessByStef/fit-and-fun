import '../styles/course.css';

const PoleDancePage = () => {
  return (
    <div className="course-page">
      <div className="course-hero-wrap">
        <section
          className="course-hero"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(8,8,8,0.86) 0%, rgba(8,8,8,0.58) 48%, rgba(8,8,8,0.22) 100%),
              url('/medias/cours/Pole/Pole3.jpeg')
            `,
            backgroundPosition: 'center 32%',
          }}
        >
          <div className="course-hero__content">
            <p className="overline">Danse & aérien</p>
            <h1>POLE DANCE</h1>
            <p>
              Une discipline complète qui mêle force, grâce, technique et confiance
              pour révéler une nouvelle relation au corps.
            </p>
          </div>
        </section>
      </div>

      <section className="course-section">
        <h2>Le concept</h2>
        <p>
          La pole dance est une discipline à la fois sportive, artistique et expressive.
          Elle permet de développer la force, la mobilité, le gainage et la coordination
          tout en travaillant la fluidité du mouvement.
        </p>
        <p>
          Chaque séance permet d’apprendre progressivement des figures, des transitions
          et des enchaînements autour de la barre, dans un cadre bienveillant et adapté
          au niveau de chacun.
        </p>
        <p>
          C’est un cours idéal pour gagner en confiance, se sentir plus à l’aise avec
          son corps et découvrir une pratique aussi intense qu’élégante.
        </p>
      </section>

      <section className="course-section course-split">
        <div className="course-split__content">
          <h2>Pourquoi on aime ce cours</h2>
          <p>
            La pole dance transforme la façon de bouger. Elle renforce le corps, développe
            la présence, améliore la posture et donne rapidement une sensation de progression.
          </p>

          <div className="course-benefits">
            <div>💪 Renforce tout le corps</div>
            <div>✨ Développe la grâce et la fluidité</div>
            <div>🧠 Améliore coordination et contrôle</div>
            <div>🔥 Travaille le gainage en profondeur</div>
            <div>🌟 Booste la confiance en soi</div>
            <div>🎭 Favorise l’expression corporelle</div>
          </div>
        </div>

        <div className="course-split__media">
          <img
            src="/medias/cours/Pole/Pole1.jpeg"
            alt="Cours de pole dance au Studio Gris"
          />
        </div>
      </section>

      <section className="course-section">
        <h2>L’expérience Studio Gris</h2>
        <p>
          Dans un lieu moderne, lumineux et inspirant, la pole dance prend une dimension
          unique. Le Studio Gris offre un cadre idéal pour progresser, s’exprimer et
          prendre confiance dans une ambiance motivante.
        </p>
      </section>

      <section className="course-section course-split">
        <div className="course-split__media">
          <img
            src="/medias/cours/Pole/Pole6.jpeg"
            alt="Figure de pole dance au Studio Gris"
          />
        </div>

        <div className="course-split__content">
          <h2>Pour qui ?</h2>
          <p>
            La pole dance s’adresse aux personnes qui veulent découvrir une pratique
            complète, esthétique et progressive. Il n’est pas nécessaire d’être déjà
            souple ou très sportive pour commencer.
          </p>
          <p>
            Le cours permet d’avancer étape par étape, de développer ses capacités
            physiques et de prendre confiance à travers des mouvements valorisants.
          </p>
        </div>
      </section>

      <section className="course-cta">
        <h2>Prêt à essayer la Pole Dance ?</h2>
        <p>
          Viens découvrir une discipline forte, élégante et pleine de sensations au Studio Gris.
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

export default PoleDancePage;