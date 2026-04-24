import '../styles/course.css';

const StretchingPage = () => {
  return (
    <div className="course-page">
      <div className="course-hero-wrap">
        <section
          className="course-hero"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(8,8,8,0.86) 0%, rgba(8,8,8,0.58) 48%, rgba(8,8,8,0.22) 100%),
              url('/medias/cours/Stretching/Stretching.png')
            `,
            backgroundPosition: 'center 40%',
          }}
        >
          <div className="course-hero__content">
            <p className="overline">Bien-être</p>
            <h1>STRETCHING</h1>
            <p>
              Un cours pour relâcher les tensions, améliorer la mobilité
              et retrouver un corps plus libre, plus souple et plus détendu.
            </p>
          </div>
        </section>
      </div>

      <section className="course-section">
        <h2>Le concept</h2>
        <p>
          Le Stretching est un cours axé sur l’assouplissement, la mobilité
          et la détente musculaire. À travers des exercices progressifs,
          on améliore l’amplitude des mouvements et on relâche les tensions accumulées.
        </p>
        <p>
          Les séances combinent étirements actifs, passifs et travail de respiration
          pour un effet profond sur le corps et le mental.
        </p>
        <p>
          C’est le complément idéal à une activité sportive ou à un quotidien
          souvent trop sédentaire.
        </p>
      </section>

      <section className="course-section course-split">
        <div className="course-split__content">
          <h2>Pourquoi on aime ce cours</h2>

          <div className="course-benefits">
            <div>🧘 Améliore la souplesse</div>
            <div>🦴 Favorise la mobilité articulaire</div>
            <div>💆 Diminue les tensions musculaires</div>
            <div>🧠 Apaise le mental</div>
            <div>🏃 Prévient les blessures</div>
            <div>⚖️ Améliore la posture</div>
          </div>
        </div>

        <div className="course-split__media">
          <img
            src="/medias/cours/Stretching/Stretching.png"
            alt="Cours de stretching au Studio Gris"
          />
        </div>
      </section>

      <section className="course-section">
        <h2>L’expérience Studio Gris</h2>
        <p>
          Dans une ambiance calme et maîtrisée, le Stretching devient un moment
          de récupération et de recentrage. On prend le temps, on respire,
          on relâche et on repart avec une sensation de légèreté.
        </p>
      </section>

      <section className="course-section course-split">
        <div className="course-split__media">
          <img
            src="/medias/cours/Stretching/Stretching.png"
            alt="Mobilité et étirements Studio Gris"
          />
        </div>

        <div className="course-split__content">
          <h2>Pour qui ?</h2>
          <p>
            Le Stretching est accessible à tous, quel que soit le niveau.
          </p>
          <p>
            Il est particulièrement adapté si tu veux :
          </p>
          <ul>
            <li>✔ te sentir moins raide</li>
            <li>✔ récupérer après le sport</li>
            <li>✔ soulager ton dos ou tes tensions</li>
            <li>✔ améliorer ta mobilité au quotidien</li>
          </ul>
        </div>
      </section>

      <section className="course-cta">
        <h2>Besoin de relâcher la pression ?</h2>
        <p>
          Viens tester le Stretching au Studio Gris et redonne de la liberté à ton corps.
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

export default StretchingPage;