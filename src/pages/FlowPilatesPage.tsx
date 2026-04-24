import '../styles/course.css';

const FlowPilatesPage = () => {
  return (
    <div className="course-page">
      <div className="course-hero-wrap">
        <section className="course-hero course-hero--noimage">
          <div className="course-hero__content">
            <p className="overline">Bien-être</p>
            <h1>FLOW PILATES</h1>
            <p>
              Un moment pour ralentir, respirer, renforcer en douceur
              et retrouver un corps plus mobile, plus stable et plus équilibré.
            </p>
          </div>
        </section>
      </div>

      <section className="course-section">
        <h2>Le concept</h2>
        <p>
          Le Flow Pilates est un cours fluide qui combine respiration,
          renforcement profond et mobilité. Les mouvements s’enchaînent
          naturellement pour créer une sensation de continuité et de bien-être.
        </p>
        <p>
          On travaille en profondeur les muscles essentiels : abdominaux,
          dos, posture, gainage, tout en améliorant la souplesse et la coordination.
        </p>
        <p>
          L’objectif : se sentir mieux dans son corps, plus aligné, plus léger,
          plus stable dans le quotidien comme dans le sport.
        </p>
      </section>

      <section className="course-section course-split">
        <div className="course-split__content">
          <h2>Pourquoi on aime ce cours</h2>

          <div className="course-benefits">
            <div>🧘‍♀️ Améliore la posture</div>
            <div>🔥 Renforce les muscles profonds</div>
            <div>🌬️ Apprend à mieux respirer</div>
            <div>🤸 Développe mobilité et souplesse</div>
            <div>💆 Réduit tensions et douleurs</div>
            <div>⚖️ Apporte équilibre corps / esprit</div>
          </div>
        </div>

        <div className="course-split__media course-placeholder">
          <p>Un moment pour toi</p>
        </div>
      </section>

      <section className="course-section">
        <h2>L’expérience Studio Gris</h2>
        <p>
          Dans une ambiance calme et maîtrisée, le Flow Pilates devient une vraie pause
          dans la semaine. Un moment pour se reconnecter à soi, relâcher la pression
          et construire un corps plus fort et plus équilibré.
        </p>
      </section>

      <section className="course-section">
        <h2>Pour qui ?</h2>
        <p>
          Ce cours est accessible à tous : débutants, sportifs, personnes souhaitant
          reprendre une activité ou compléter un entraînement plus intense.
        </p>
        <p>
          Il est particulièrement recommandé pour celles et ceux qui veulent :
        </p>
        <ul>
          <li>✔ soulager des douleurs de dos</li>
          <li>✔ améliorer leur posture</li>
          <li>✔ se renforcer en douceur</li>
          <li>✔ se détendre mentalement</li>
        </ul>
      </section>

      <section className="course-cta">
        <h2>Envie de ralentir et te recentrer ?</h2>
        <p>
          Viens découvrir le Flow Pilates au Studio Gris et reconnecte-toi à ton corps.
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

export default FlowPilatesPage;